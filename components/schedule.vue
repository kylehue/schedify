<template>
   <div class="flex flex-col">
      <NDataTable :columns="columns" :data="data"></NDataTable>
      <Statistics class="table-extra p-4" :statistics="statistics"></Statistics>
      <div class="table-extra p-4 flex justify-end">
         <NButton @click="showPlottingForm = true" tertiary>
            <template #icon><PhTable /></template>
            View plotting form
         </NButton>
      </div>
   </div>
   <Modal
      dialog-class="!w-full"
      v-model:show="showPlottingForm"
      title="Plotting form"
   >
      <SchedulePlot :schedule="schedule"></SchedulePlot>
   </Modal>
</template>

<script setup lang="ts">
import {
   NText,
   NDataTable,
   NTag,
   NButton,
   type DataTableColumns,
   useThemeVars,
} from "naive-ui";
import type { Section, Subject } from "@/types/types";
import { getStatistics, type Schedule } from "@/utils/schedule";
import { daysIndexMap, timeToDecimal } from "@/utils/time";
import { PhTable } from "@phosphor-icons/vue";

const props = defineProps<{
   schedule: Schedule;
}>();
const showPlottingForm = ref(false);
const data = computed(() => {
   return props.schedule;
});

const theme = useThemeVars();

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

<style scoped>
.table-extra {
   background-color: v-bind("theme.tableHeaderColor");
   border: 1px solid v-bind("theme.tableHeaderColor");
   border-radius: v-bind("theme.borderRadius");
   border-top-left-radius: 0px;
   border-top-right-radius: 0px;
   border-top: 0px;
}
</style>
