<template>
   <div
      class="w-full h-full flex flex-col items-start justify-start gap-10 p-10 overflow-y-scroll"
   >
      <NCard class="min-h-[500px]">
         <template #header>
            <Navigator
               title="Time slots"
               @back="() => goBack()"
               :breadcrumbs="[
                  {
                     label: 'Subjects',
                     click: () => navigateTo({ name: 'subjects' }),
                  },
                  {
                     label: $route.params.subject as string,
                     click: () => goBack(),
                  },
                  {
                     label: $route.params.section as string,
                  },
               ]"
            ></Navigator>
         </template>
         <template #default>
            <NTabs
               type="line"
               animated
               v-model:value="currentTab"
               class="h-full w-full"
               pane-class="h-full w-full"
               pane-wrapper-class="h-full w-full"
            >
               <NTabPane v-for="day in days" :name="day.key" :tab="day.label">
                  <NEmpty
                     class="h-full w-full flex items-center justify-center"
                     v-if="timeslotsDayMapped[day.key].length <= 0"
                  ></NEmpty>
                  <div v-else class="flex flex-row flex-wrap">
                     <div
                        v-for="timeslot in timeslotsDayMapped[day.key]"
                        :key="timeslot.id"
                        class="w-1/3 max-md:w-full max-xl:w-1/2 p-2"
                     >
                        <NBadge class="w-full" dot :show="true">
                           <Timeslot
                              :id="timeslot.id"
                              v-model:time-from="timeslot.from"
                              v-model:time-to="timeslot.to"
                           ></Timeslot>
                        </NBadge>
                     </div>
                  </div>
               </NTabPane>
            </NTabs>
         </template>
         <template #action>
            <div class="flex w-full justify-between gap-2">
               <NButton @click="isAddTimeslotDialogShown = true">
                  <template #icon><PhPlus></PhPlus></template>
                  Add a time slot
               </NButton>
               <div class="flex gap-2">
                  <NButton @click="clearAll" ghost type="error">
                     <template #icon><PhTrash></PhTrash></template>
                     Clear all
                  </NButton>
                  <NButton @click="clearAllCurrentDay" ghost type="error">
                     <template #icon><PhTrash></PhTrash></template>
                     Clear all in {{ daysMap[currentTab] }}
                  </NButton>
               </div>
            </div>
         </template>
      </NCard>
      <Modal
         v-model:show="isAddTimeslotDialogShown"
         title="Add a timeslot"
         positive-text="Add"
         negative-text="Nevermind"
         @positiveClick="addTimeslot"
      >
         <div class="flex flex-col gap-2">
            <TimeRange
               v-model:from="addTimeslotFrom"
               v-model:to="addTimeslotTo"
            />
            <NSelect
               v-model:value="addTimeslotDay"
               :options="days.map((v) => ({ label: v.label, value: v.key }))"
            ></NSelect>
         </div>
      </Modal>
   </div>
</template>

<script setup lang="ts">
import {
   NCard,
   NButton,
   NEmpty,
   NTabs,
   NTabPane,
   NSelect,
   NBadge,
   useDialog,
} from "naive-ui";
import { PhPlus, PhTrash, PhClock } from "@phosphor-icons/vue";
import type { Timeslot } from "~/types/types";

const route = useRoute();
const dialog = useDialog();
const currentTab = ref(days[0].key);
const isAddTimeslotDialogShown = ref(false);
const addTimeslotFrom = ref("12:00 AM");
const addTimeslotTo = ref("12:00 AM");
const addTimeslotDay = ref(currentTab.value);
const store = useStore();
const subject = store.getSubject(route.params.subject as string)!;
const section = store.getSection(subject.code, route.params.section as string)!;
const timeslotsDayMapped = computed(() => {
   let map: Record<keyof typeof daysMap, Timeslot[]> = {
      mon: [],
      tue: [],
      wed: [],
      fri: [],
      sat: [],
      sun: [],
      thu: [],
   };

   for (let timeslot of section.timeslots.values()) {
      map[timeslot.day].push(timeslot);
   }

   return map;
});

// Sync the day to modal dialog prompt
watch(currentTab, (x) => (addTimeslotDay.value = x));

function addTimeslot() {
   let from = addTimeslotFrom.value;
   let to = addTimeslotTo.value;
   let day = addTimeslotDay.value;

   const add = () => {
      store.addTimeslot(subject.code, section.code, Date.now(), from, to, day);
      addTimeslotFrom.value = "12:00 AM";
      addTimeslotTo.value = "12:00 AM";
      currentTab.value = addTimeslotDay.value;
      isAddTimeslotDialogShown.value = false;
   };

   // if (store.getSection(subject.code, code)) {
   //    dialog.warning({
   //       title: "Duplicate section",
   //       content:
   //          "This section already exists! Do you want to replace it instead?",
   //       negativeText: "Cancel",
   //       positiveText: "Replace",
   //       onPositiveClick(e) {
   //          add();
   //       },
   //    });
   // } else {
   //    add();
   // }

   add();
}

function goBack() {
   navigateTo({
      name: "subjects-subject-sections",
      params: { subject: route.params.subject },
   });
}

function clearAll() {
   dialog.warning({
      title: "Clear all",
      content: `Are you sure you want to clear ALL timeslots in ${route.params.subject} - ${route.params.section}?`,
      positiveText: "Clear all",
      negativeText: "Cancel",
      onPositiveClick(e) {
         store.clearTimeslot(subject.code, section.code);
      },
   });
}

function clearAllCurrentDay() {
   dialog.warning({
      title: "Clear all",
      content: `Are you sure you want to clear the ${
         daysMap[currentTab.value]
      } timeslots in ${route.params.subject} - ${route.params.section}?`,
      positiveText: "Clear all",
      negativeText: "Cancel",
      onPositiveClick(e) {
         store.clearTimeslotInDay(subject.code, section.code, currentTab.value);
      },
   });
}
</script>

<style scoped></style>
