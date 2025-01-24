<template>
   <div class="flex flex-wrap justify-around gap-8">
      <NStatistic
         label="Earliest time"
         :value="statistics.earliestTimeFormatted"
      >
         <template #prefix>
            <NIcon><PhClock></PhClock></NIcon>
         </template>
      </NStatistic>
      <NStatistic label="Latest time" :value="statistics.latestTimeFormatted">
         <template #prefix>
            <NIcon><PhClock></PhClock></NIcon>
         </template>
      </NStatistic>
      <NStatistic label="Total hours" :value="statistics.totalHoursFormatted">
         <template #prefix>
            <NIcon><PhTimer></PhTimer></NIcon>
         </template>
      </NStatistic>
      <NStatistic
         label="Total hours (with vacant)"
         :value="statistics.totalHoursWithVacantFormatted"
      >
         <template #prefix>
            <NIcon><PhTimer></PhTimer></NIcon>
         </template>
      </NStatistic>
      <NStatistic
         label="Total vacant hours"
         :value="statistics.totalVacantHoursFormatted"
      >
         <template #prefix>
            <NIcon><PhTimer></PhTimer></NIcon>
         </template>
      </NStatistic>
      <NStatistic
         label="Max vacant in a day"
         :value="statistics.maxVacantHoursFormatted"
      >
         <template #prefix>
            <NIcon><PhTimer></PhTimer></NIcon>
         </template>
      </NStatistic>
      <NStatistic label="Days" :value="statistics.totalDays">
         <template #prefix>
            <NIcon><PhCalendarBlank></PhCalendarBlank></NIcon>
         </template>
      </NStatistic>
      <NStatistic
         label="Score"
         :value="(statistics.score * 100).toFixed(1) + '%'"
      >
         <template #prefix>
            <NIcon><PhChartLine></PhChartLine></NIcon>
         </template>
      </NStatistic>
   </div>
</template>

<script setup lang="ts">
import { NIcon, NStatistic } from "naive-ui";
import {
   PhTimer,
   PhClock,
   PhCalendarBlank,
   PhChartLine,
} from "@phosphor-icons/vue";
import type { ScheduleStatistics } from "@/utils/schedule";
const props = defineProps<{
   statistics: ScheduleStatistics;
}>();
</script>
