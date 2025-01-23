<template>
   <div
      class="w-full h-full flex flex-col items-start justify-start gap-10 p-10 overflow-y-scroll"
   >
      <NCard content-class="min-h-[300px]">
         <template #header>
            <Navigator
               title="Schedules"
               @back="() => goBack()"
               :breadcrumbs="[]"
            ></Navigator>
         </template>
         <template #default>
            <NEmpty
               class="h-full w-full flex items-center justify-center"
               v-if="schedulesComputed.length <= 0"
            ></NEmpty>
            <div v-else class="flex flex-col gap-4 w-full">
               <div class="flex flex-col">
                  <template
                     v-for="(schedule, index) in schedulesComputed"
                     :key="index"
                  >
                     <Schedule :schedule="schedule"></Schedule>
                     <NDivider
                        v-if="index < schedulesComputed.length - 1"
                     ></NDivider>
                  </template>
               </div>
               <div class="flex justify-center items-center w-full">
                  <NButton
                     v-if="
                        scheduleStore.loadedSchedules <
                           scheduleStore.schedules.length &&
                        scheduleStore.loadedSchedules !== 0
                     "
                     quaternary
                     @click="scheduleStore.loadMoreSchedules"
                  >
                     <span>
                        Load more
                        <NText :depth="3">
                           ({{
                              scheduleStore.schedules.length -
                              scheduleStore.loadedSchedules
                           }}
                           left)
                        </NText>
                     </span>
                  </NButton>
               </div>
            </div>
         </template>
         <template #action>
            <div class="flex flex-wrap items-center w-full justify-start gap-2">
               <NButton @click="generate" :loading="isGenerating">
                  <template #icon><PhSparkle></PhSparkle></template>
                  Generate schedules
               </NButton>
            </div>
         </template>
      </NCard>
   </div>
</template>

<script setup lang="ts">
import { NCard, NButton, NEmpty, NDivider, NText } from "naive-ui";
import { PhSparkle } from "@phosphor-icons/vue";

const scheduleStore = useScheduleStore();
const route = useRoute();

const isGenerating = ref(false);
const schedulesComputed = computed(() => {
   let schedules = scheduleStore.schedules;

   // limit schedules to avoid lag
   if (schedules.length >= scheduleStore.loadedSchedules) {
      schedules = schedules.slice(0, scheduleStore.loadedSchedules);
   }

   return schedules;
});

async function generate() {
   scheduleStore.loadedSchedules = 0;
   isGenerating.value = true;
   await scheduleStore.generate();
   scheduleStore.loadMoreSchedules();
   isGenerating.value = false;
}

function goBack() {
   navigateTo({ name: "subjects", query: { s: route.query.s } });
}
</script>

<style scoped></style>
