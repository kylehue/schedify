<template>
   <NBadge
      class="w-full"
      dot
      :show="
         store.isTimeslotConflicted(subject.code, section.code, timeslot.id)
      "
   >
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
            <div class="flex flex-wrap gap-2 justify-between">
               <div class="flex flex-wrap gap-2">
                  <NDropdown
                     trigger="click"
                     :options="
                        days.map((v) => ({
                           ...v,
                           show: v.key !== timeslot.day,
                        }))
                     "
                     @select="(v) => changeDay(v)"
                  >
                     <NButton tertiary> Change day </NButton>
                  </NDropdown>
                  <NButton
                     @click="timeslot.isEnabled = !timeslot.isEnabled"
                     tertiary
                  >
                     {{ timeslot.isEnabled ? "Disable" : "Enable" }}
                  </NButton>
               </div>
               <NButton @click="remove" type="error" tertiary circle>
                  <template #icon>
                     <PhTrash></PhTrash>
                  </template>
               </NButton>
            </div>
         </template>
      </NCard>
   </NBadge>
</template>

<script setup lang="ts">
import { NCard, NButton, NBadge, NDropdown, useDialog } from "naive-ui";
import { PhTrash } from "@phosphor-icons/vue";

const props = defineProps<{
   id: string | number;
}>();
const dialog = useDialog();
const route = useRoute();
const timeFrom = defineModel("timeFrom", { default: "12:00 AM" });
const timeTo = defineModel("timeTo", { default: "12:00 AM" });
const store = useStore();
const subject = store.getSubject(route.params.subject as string);
if (!subject) {
   throw createError({
      statusCode: 404,
      statusMessage: `Subject does not exist: ${
         route.params.subject as string
      }`,
   });
}

const section = store.getSection(subject.code, route.params.section as string);
if (!section) {
   throw createError({
      statusCode: 404,
      statusMessage: `Section does not exist: ${
         route.params.section as string
      }`,
   });
}

const timeslot = store.getTimeslot(subject.code, section.code, props.id);
if (!timeslot) {
   throw createError({
      statusCode: 404,
      statusMessage: `Time slot does not exist.`,
   });
}

const emit = defineEmits<{
   changeDay: [keyof typeof daysMap];
}>();

function remove() {
   dialog.warning({
      title: "Remove time slot",
      content: `Are you sure you want to remove the ${timeFrom.value} to ${timeTo.value} timeslot from ${route.params.subject} - ${route.params.section}?`,
      positiveText: "Remove",
      negativeText: "Cancel",
      onPositiveClick(e) {
         store.removeTimeslot(subject!.code, section!.code, timeslot!.id);
      },
   });
}

function changeDay(newDay: keyof typeof daysMap) {
   timeslot!.day = newDay;
   emit("changeDay", newDay);
}
</script>
