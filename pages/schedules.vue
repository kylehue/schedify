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
            <div class="flex flex-col">
               <template
                  v-for="(schedule, index) in scheduleStore.schedules"
                  :key="index"
               >
                  <Schedule
                     :schedule="schedule"
                     v-model:show-statistics="showStatistics"
                  ></Schedule>
                  <NDivider
                     v-if="index < scheduleStore.schedules.length - 1"
                  ></NDivider>
               </template>
            </div>
         </template>
         <template #action>
            <div class="flex flex-wrap items-center w-full justify-start gap-2">
               <NButton @click="generate">
                  <template #icon><PhSparkle></PhSparkle></template>
                  Generate schedules
               </NButton>
               <NCheckbox v-model:checked="showStatistics">
                  Statistics
               </NCheckbox>
            </div>
         </template>
      </NCard>
   </div>
</template>

<script setup lang="ts">
import { NCard, NButton, NCheckbox, NDivider } from "naive-ui";
import { PhSparkle } from "@phosphor-icons/vue";

const scheduleStore = useScheduleStore();
const showStatistics = ref(true);
const route = useRoute();

function generate() {
   scheduleStore.generate();
}

function goBack() {
   navigateTo({ name: "subjects", query: { s: route.query.s } });
}
</script>

<style scoped></style>
