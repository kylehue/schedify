<template>
   <div
      class="w-full h-full flex flex-col items-start justify-start gap-10 p-10 overflow-y-scroll"
   >
      <NCard>
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
            <NTabs type="line" animated v-model:value="currentTab">
               <NTabPane v-for="day in days" :name="day.key" :tab="day.label">
                  <div class="flex flex-row flex-wrap">
                     <div
                        v-for="x in 4"
                        class="w-1/3 max-md:w-full max-xl:w-1/2 p-2"
                     >
                        <NBadge class="w-full" dot :show="true">
                           <Timeslot></Timeslot>
                        </NBadge>
                     </div>
                  </div>
               </NTabPane>
            </NTabs>
            <!-- <NEmpty></NEmpty> -->
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

const route = useRoute();
const dialog = useDialog();
const currentTab = ref(days[0].key);
const isAddTimeslotDialogShown = ref(false);
const addTimeslotFrom = ref("12:00 AM");
const addTimeslotTo = ref("12:00 AM");
const addTimeslotDay = ref(currentTab.value);

watch(currentTab, (x) => (addTimeslotDay.value = x));

function addTimeslot() {
   addTimeslotFrom.value = "12:00 AM";
   addTimeslotTo.value = "12:00 AM";
   currentTab.value = addTimeslotDay.value;
   isAddTimeslotDialogShown.value = false;
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
         // test
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
         // test
      },
   });
}
</script>

<style scoped></style>
