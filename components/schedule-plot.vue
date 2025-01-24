<template>
   <NDataTable
      :single-line="false"
      :single-column="false"
      class="table"
      :columns="columns"
      :data="data"
   ></NDataTable>
</template>

<script setup lang="ts">
import { NDataTable, NText, type DataTableColumns } from "naive-ui";
import type { Schedule } from "@/utils/schedule";
import { days, daysMap, decimalToTime, timeToDecimal } from "@/utils/time";
import type { InternalRowData } from "naive-ui/es/data-table/src/interface";
import { useScheduleStore } from "@/stores/schedule";
import { useStore } from "@/stores/store";
import { hexToRgba } from "@/utils/color";
const props = defineProps<{
   schedule: Schedule;
}>();

const store = useStore();
const scheduleStore = useScheduleStore();
const scheduleStatistics = scheduleStore.getPreComputedStatistics(
   props.schedule
);
const timeslotElementSubjectAttr = "data-subject";
if (!scheduleStatistics) {
   throw createError({
      statusCode: 404,
      statusMessage: "Schedule does not exist.",
   });
}

const schedulesGroupedByTimeslot = computed(() => {
   const grouped: Record<
      keyof typeof daysMap,
      Record<number, Schedule[number]>
   > = {
      mon: {},
      tue: {},
      wed: {},
      thu: {},
      fri: {},
      sat: {},
      sun: {},
   };

   for (let pair of props.schedule) {
      for (let [id, timeslot] of pair.section.timeslots) {
         let from = timeToDecimal(timeslot.from);
         let to = timeToDecimal(timeslot.to);
         for (let i = from; i < to; i += 0.5) {
            grouped[timeslot.day][i] = pair;
         }
      }
   }

   return grouped;
});

const columns: DataTableColumns = [
   {
      title: "Time",
      key: "time",
      render(rowData: InternalRowData) {
         let from = rowData.from as number;
         let to = rowData.to as number;
         return `${decimalToTime(from)} - ${decimalToTime(to)}`;
      },
   },
   ...days
      .filter(
         (d) => Object.keys(schedulesGroupedByTimeslot.value[d.key]).length
      )
      .map((d) => ({
         title: d.key.toUpperCase(),
         key: d.key,
         render(rowData: InternalRowData) {
            let from = rowData.from as number;
            let pair = schedulesGroupedByTimeslot.value[d.key][from];
            if (pair) {
               return h(
                  NText,
                  {
                     class: "timeslot text-center p-2",
                     [timeslotElementSubjectAttr]: pair.subject.code,
                  },
                  () => `${pair.subject.code} - ${pair.section.code}`
               );
            }
         },
      })),
];

const data = computed(() => {
   const data: { from: number; to: number }[] = [];
   for (
      let i = scheduleStatistics.earliestTime;
      i < scheduleStatistics.latestTime;
      i += 0.5
   ) {
      data.push({
         from: i,
         to: i + 0.5,
      });
   }
   return data;
});

onMounted(() => {
   const timeslots = Array.from(document.querySelectorAll("td > .timeslot"));
   for (let timeslot of timeslots) {
      let subject = timeslot.getAttribute(timeslotElementSubjectAttr);
      if (!subject) continue;
      let parent = timeslot.parentElement;
      if (!parent) continue;
      let color = store.subjectColors.get(subject);
      if (!color) continue;
      parent.style.backgroundColor = hexToRgba(color, 0.15);
   }
});
</script>

<style scoped>
.table :deep(.n-data-table-td) {
   text-align: center;
   font-size: 0.8rem;
}
.table :deep(.n-data-table-th) {
   text-align: center;
}

.table :deep(.n-data-table-td),
.table :deep(.n-data-table-th) {
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
}
</style>
