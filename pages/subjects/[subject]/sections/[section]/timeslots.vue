<template>
   <div
      class="w-full h-full flex flex-col items-start justify-start gap-10 p-10 overflow-y-scroll"
   >
      <NCard content-class="min-h-[300px]">
         <template #header>
            <Navigator
               title="Time slots"
               @back="() => goBack()"
               :breadcrumbs="[
                  {
                     label: 'Subjects',
                     click: navigateToSubjects,
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
            <NEmpty
               class="h-full w-full flex items-center justify-center"
               v-if="store.isTimeslotsEmpty(subject.code, section.code)"
            ></NEmpty>
            <NTabs
               v-else
               type="line"
               animated
               v-model:value="currentTab"
               class="h-full w-full"
               pane-class="h-full w-full"
               pane-wrapper-class="h-full w-full"
            >
               <template v-for="day in days">
                  <NTabPane
                     v-if="timeslotsGroupedByDay[day.key].length > 0"
                     :name="day.key"
                     :tab="day.label"
                     :key="day.key"
                  >
                     <div class="flex flex-row flex-wrap">
                        <div
                           v-for="timeslot in timeslotsGroupedByDay[day.key]"
                           :key="timeslot.id"
                           class="w-1/3 max-md:w-full max-xl:w-1/2 p-2"
                        >
                           <Timeslot
                              :id="timeslot.id"
                              v-model:time-from="timeslot.from"
                              v-model:time-to="timeslot.to"
                              @change-day="
                                 (newDay) => (changeTimeslotDay = newDay)
                              "
                           ></Timeslot>
                        </div>
                     </div>
                  </NTabPane>
               </template>
            </NTabs>
         </template>
         <template #action>
            <div class="flex flex-wrap w-full justify-between gap-2">
               <NButton @click="isAddTimeslotDialogShown = true">
                  <template #icon><PhPlus></PhPlus></template>
                  Add a time slot
               </NButton>
               <div class="flex flex-wrap gap-2">
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
   useDialog,
} from "naive-ui";
import { PhPlus, PhTrash } from "@phosphor-icons/vue";

const route = useRoute();
const dialog = useDialog();
const currentTab = ref<keyof typeof daysMap>(days[0].key);
const isAddTimeslotDialogShown = ref(false);
const addTimeslotFrom = ref("12:00 AM");
const addTimeslotTo = ref("12:00 AM");
const addTimeslotDay = ref(currentTab.value);
const changeTimeslotDay = ref<keyof typeof daysMap>(days[0].key);
const store = useStore();
const subject = store.getSubject(route.params.subject as string)!;
const section = store.getSection(subject.code, route.params.section as string)!;
const timeslotsGroupedByDay = computed(() =>
   store.getTimeslotsGroupedByDay(subject.code, section.code)
);

// When a time slot's day changes, sync it with the current tab
// This can be done by simply doing `currentTab = newDay`
// but the ui gets buggy without the "post" thing from vue
watch(
   changeTimeslotDay,
   (x) => {
      currentTab.value = x;
   },
   { flush: "post" }
);

// Sync the day to modal dialog prompt
watch(currentTab, (x) => {
   addTimeslotDay.value = x;
});

// Choose any non-empty tab if the current tab is empty
watch(
   timeslotsGroupedByDay,
   () => {
      if (timeslotsGroupedByDay.value[currentTab.value].length <= 0) {
         for (let { key } of days) {
            let timeslots = timeslotsGroupedByDay.value[key];
            if (timeslots.length > 0) {
               currentTab.value = timeslots[0].day;
               break;
            }
         }
      }
   },
   { immediate: true, flush: "post" }
);

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
      query: { s: route.query.s },
      params: { subject: route.params.subject },
   });
}

function navigateToSubjects() {
   navigateTo({
      name: "subjects",
      query: { s: route.query.s },
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
