<template>
   <div class="flex flex-col gap-2">
      <NDataTable :columns="columns" :data="data"></NDataTable>
      <NCard
         v-if="showStatistics"
         content-class="flex flex-wrap justify-around gap-8"
      >
         <NStatistic
            label="Earliest time"
            :value="statistics.earliestTimeFormatted"
         >
            <template #prefix>
               <NIcon><PhClock></PhClock></NIcon>
            </template>
         </NStatistic>
         <NStatistic
            label="Latest time"
            :value="statistics.latestTimeFormatted"
         >
            <template #prefix>
               <NIcon><PhClock></PhClock></NIcon>
            </template>
         </NStatistic>
         <NStatistic
            label="Total hours"
            :value="statistics.totalHoursFormatted"
         >
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
            label="Max vacant hours"
            :value="statistics.maxVacantHoursFormatted"
         >
            <template #prefix>
               <NIcon><PhTimer></PhTimer></NIcon>
            </template>
         </NStatistic>
         <NStatistic
            label="Days"
            :value="statistics.totalDays"
         >
            <template #prefix>
               <NIcon><PhCalendarBlank></PhCalendarBlank></NIcon>
            </template>
         </NStatistic>
      </NCard>
   </div>
</template>

<script setup lang="ts">
import {
   NCard,
   NButton,
   NText,
   NInput,
   NIcon,
   NStatistic,
   NDataTable,
   NTag,
   type DataTableColumns,
   type DataTableRowData,
} from "naive-ui";
import { PhTimer, PhClock, PhCalendarBlank } from "@phosphor-icons/vue";
import type { Section, Subject } from "~/types/types";

const props = defineProps<{
   schedule: Schedule;
}>();

const showStatistics = defineModel<boolean>("showStatistics");

const data = computed(() => {
   return props.schedule;
});

const statistics = computed(() => getStatistics(props.schedule));

const columns: DataTableColumns = [
   {
      title: "Subject",
      key: "subject",
      render(rowData, rowIndex) {
         const subject = rowData.subject as Subject;
         return h("div", { class: "flex flex-col" }, [
            h(NText, {}, () => subject.code),
            h(NText, { depth: 3, class: "text-xs" }, () => subject.description),
         ]);
      },
   },
   {
      title: "Section",
      key: "section",
      render(rowData, rowIndex) {
         const section = rowData.section as Section;
         return h("div", { class: "flex flex-col" }, [
            h(NText, {}, () => section.code),
            h(NText, { depth: 3, class: "text-xs" }, () => section.description),
         ]);
      },
   },
   {
      title: "Time slots",
      key: "timeslots",
      render(rowData, rowIndex) {
         const section = rowData.section as Section;
         const children: VNode[] = [];
         const sortedTimeslots = Array.from(section.timeslots.values()).sort(
            (a, b) =>
               daysIndexMap[a.day] - daysIndexMap[b.day] ||
               timeToDecimal(a.from) - timeToDecimal(b.from)
         );
         for (const timeslot of sortedTimeslots) {
            children.push(
               h("span", { class: "flex items-center gap-2" }, [
                  h(NText, {}, () => `${timeslot.from} - ${timeslot.to} `),
                  h(
                     NTag,
                     { size: "small", round: true },
                     () => `${timeslot.day.toUpperCase()}`
                  ),
               ])
            );
         }
         return h("div", { class: "flex flex-col" }, children);
      },
   },
];
</script>

<style scoped></style>
