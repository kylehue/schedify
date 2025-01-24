<template>
   <NuxtLayout
      name="app"
      @back="() => goBack()"
      :breadcrumbs="[
         {
            label: 'Subjects',
            click: () => goBack(),
         },
         {
            label: 'Schedules',
         },
      ]"
      title="Schedules"
   >
      <template #header-extra>
         <div class="flex flex-row flex-wrap gap-2">
            <SortButton
               class="flex-1"
               placeholder="Sort by"
               placement="bottom-end"
               default-value="earliestTime"
               :options="(sortOptions as any)"
               v-model:mode="sortMode"
               v-model:value="sortBy"
            ></SortButton>
            <NButton class="flex-1" tertiary @click="showFilters = true">
               <template #icon><PhFunnel></PhFunnel></template>
               Filter...
            </NButton>
            <NButton class="flex-1" @click="generate" :loading="isGenerating">
               <template #icon><PhSparkle></PhSparkle></template>
               Generate schedules
            </NButton>
         </div>
      </template>
      <template #default>
         <div class="flex h-full justify-center">
            <NEmpty
               class="h-full w-full flex items-center justify-center"
               v-if="schedulesComputed.length <= 0"
            ></NEmpty>
            <div v-else class="container flex flex-col gap-4 h-fit">
               <div class="flex flex-col">
                  <template
                     v-for="(schedule, index) in schedulesComputed"
                     :key="index"
                  >
                     <Schedule :schedule="schedule"></Schedule>
                     <NDivider></NDivider>
                  </template>
               </div>
               <div class="flex justify-center items-center w-full">
                  <NButton
                     v-if="
                        scheduleStore.loadedSchedules <
                           schedulesFiltered.length &&
                        scheduleStore.loadedSchedules !== 0
                     "
                     quaternary
                     @click="scheduleStore.loadMoreSchedules"
                  >
                     <span>
                        Load more
                        <NText :depth="3">
                           ({{
                              schedulesFiltered.length -
                              scheduleStore.loadedSchedules
                           }}
                           left)
                        </NText>
                     </span>
                  </NButton>
               </div>
            </div>
         </div>
      </template>
   </NuxtLayout>
   <NDrawer
      v-model:show="showFilters"
      placement="left"
      :width="responsiveDrawerWidth()"
   >
      <NDrawerContent title="Filter">
         <Filters
            v-model:earliest-time="earliestTime"
            v-model:latest-time="latestTime"
            v-model:max-total-hours="maxTotalHours"
            v-model:max-total-hours-with-vacant="maxTotalHoursWithVacant"
            v-model:max-total-vacant-hours="maxTotalVacantHours"
            v-model:max-max-vacant-hours="maxMaxVacantHours"
            v-model:max-total-days="maxTotalDays"
         ></Filters>
      </NDrawerContent>
   </NDrawer>
</template>

<script setup lang="ts">
import {
   NCollapse,
   NCollapseItem,
   NButton,
   NEmpty,
   NDivider,
   NText,
   NDrawer,
   NDrawerContent,
} from "naive-ui";
import { PhSparkle, PhFunnel } from "@phosphor-icons/vue";
import { useScheduleStore } from "@/stores/schedule";
import { circleTimeRange, timeToDecimal } from "@/utils/time";
import { useWindowWidth } from "~/composables/useWindowWidth";

useHead({ title: "Schedules" });

const sortOptions = [
   {
      key: "best",
      label: "Best",
   },
   {
      key: "earliestTime",
      label: "Earliest time",
   },
   {
      key: "latestTime",
      label: "Latest time",
   },
   {
      key: "totalHours",
      label: "Total hours",
   },
   {
      key: "totalHoursWithVacant",
      label: "Total hours (with vacant)",
   },
   {
      key: "totalVacantHours",
      label: "Total vacant hours",
   },
   {
      key: "maxVacantHours",
      label: "Max vacant in a day",
   },
   {
      key: "totalDays",
      label: "Total days",
   },
] as const;
const sortBy = ref<(typeof sortOptions)[number]["key"]>("best");
const sortMode = ref<"ascending" | "descending">("ascending");

const earliestTime = ref<string>("12:00 AM");
const latestTime = ref<string>("12:00 AM");
const maxTotalHours = ref<number>(24 * 7);
const maxTotalHoursWithVacant = ref<number>(24 * 7);
const maxTotalVacantHours = ref<number>(24 * 7);
const maxMaxVacantHours = ref<number>(24 * 7);
const maxTotalDays = ref<number>(7);
const showFilters = ref(false);

const scheduleStore = useScheduleStore();
const route = useRoute();
const isGenerating = ref(false);
const schedulesFiltered = computed(() => {
   let schedules = scheduleStore.schedules.slice(0);

   // filter
   schedules = schedules.filter((schedule) => {
      const stats = scheduleStore.getPreComputedStatistics(schedule);
      if (!stats) return true;
      let [from, to] = circleTimeRange(stats.earliestTime, stats.latestTime);
      let [filterFrom, filterTo] = circleTimeRange(
         timeToDecimal(earliestTime.value),
         timeToDecimal(latestTime.value)
      );
      return (
         from >= filterFrom &&
         to <= filterTo &&
         stats.totalHours <= maxTotalHours.value &&
         stats.totalHoursWithVacant <= maxTotalHoursWithVacant.value &&
         stats.totalVacantHours <= maxTotalVacantHours.value &&
         stats.maxVacantHours <= maxMaxVacantHours.value &&
         stats.totalDays <= maxTotalDays.value
      );
   });

   return schedules;
});

const schedulesComputed = computed(() => {
   let schedules = schedulesFiltered.value.slice(0);

   // limit schedules to avoid lag
   if (schedules.length >= scheduleStore.loadedSchedules) {
      schedules = schedules.slice(0, scheduleStore.loadedSchedules);
   }

   return schedules;
});

function sort() {
   if (sortBy.value === "earliestTime") {
      scheduleStore.sortByEarliestTime(sortMode.value === "descending");
   } else if (sortBy.value === "latestTime") {
      scheduleStore.sortByLatestTime(sortMode.value === "descending");
   } else if (sortBy.value === "totalHours") {
      scheduleStore.sortByTotalHours(sortMode.value === "descending");
   } else if (sortBy.value === "totalHoursWithVacant") {
      scheduleStore.sortByTotalHoursWithVacant(sortMode.value === "descending");
   } else if (sortBy.value === "totalVacantHours") {
      scheduleStore.sortByTotalVacantHours(sortMode.value === "descending");
   } else if (sortBy.value === "maxVacantHours") {
      scheduleStore.sortByMaxVacantHours(sortMode.value === "descending");
   } else if (sortBy.value === "totalDays") {
      scheduleStore.sortByTotalDays(sortMode.value === "descending");
   } else if (sortBy.value === "best") {
      scheduleStore.sortByBest(sortMode.value === "descending");
   }
}

watch(
   () => [sortBy.value, sortMode.value],
   () => {
      sort();
   },
   { immediate: true }
);

async function generate() {
   scheduleStore.loadedSchedules = 0;
   isGenerating.value = true;
   await scheduleStore.generate();
   sort();
   scheduleStore.loadMoreSchedules();
   isGenerating.value = false;
}

function goBack() {
   navigateTo({ name: "subjects", query: { s: route.query.s } });
}

const { windowWidth } = useWindowWidth();
function responsiveDrawerWidth() {
   if (windowWidth.value <= 640) {
      return Math.min(windowWidth.value, 500) - 40;
   } else {
      return 500;
   }
}
</script>
