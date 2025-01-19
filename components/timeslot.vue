<template>
   <NCard
      :class="{
         'opacity-50': !timeslot.isEnabled,
      }"
      class="transition-opacity"
   >
      <template #default>
         <div class="flex flex-row items-center gap-2">
            <TimeRange v-model:from="timeFrom" v-model:to="timeTo" />
         </div>
      </template>
      <template #action>
         <div class="flex gap-2 justify-between">
            <NButton
               @click="timeslot.isEnabled = !timeslot.isEnabled"
               tertiary
               >{{ timeslot.isEnabled ? "Disable" : "Enable" }}</NButton
            >
            <NButton @click="remove" type="error" tertiary circle>
               <template #icon>
                  <PhTrash></PhTrash>
               </template>
            </NButton>
         </div>
      </template>
   </NCard>
</template>

<script setup lang="ts">
import { NCard, NButton, NText, NTimePicker, useDialog } from "naive-ui";
import { PhTrash } from "@phosphor-icons/vue";

const props = defineProps<{
   id: string | number;
}>();
const dialog = useDialog();
const route = useRoute();
const timeFrom = defineModel("timeFrom", { default: "12:00 AM" });
const timeTo = defineModel("timeTo", { default: "12:00 AM" });
const store = useStore();
const subject = store.getSubject(route.params.subject as string)!;
const section = store.getSection(subject.code, route.params.section as string)!;
const timeslot = store.getTimeslot(subject.code, section.code, props.id)!;

function remove() {
   dialog.warning({
      title: "Remove time slot",
      content: `Are you sure you want to remove the ${timeFrom.value} to ${timeTo.value} timeslot from ${route.params.subject} - ${route.params.section}?`,
      positiveText: "Remove",
      negativeText: "Cancel",
      onPositiveClick(e) {
         store.removeTimeslot(subject.code, section.code, timeslot.id);
      },
   });
}
</script>
