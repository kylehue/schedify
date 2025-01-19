<template>
   <NCard>
      <template #default>
         <div class="flex flex-row items-center gap-2">
            <TimeRange v-model:from="timeFrom" v-model:to="timeTo" />
         </div>
      </template>
      <template #action>
         <div class="flex gap-2 justify-between">
            <NButton tertiary>Disable</NButton>
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

const dialog = useDialog();
const route = useRoute();
const timeFrom = ref("12:00 AM");
const timeTo = ref("12:00 AM");
function remove() {
   dialog.warning({
      title: "Remove time slot",
      content: `Are you sure you want to remove the ${timeFrom.value} to ${timeTo.value} timeslot from ${route.params.subject} - ${route.params.section}?`,
      positiveText: "Remove",
      negativeText: "Cancel",
      onPositiveClick(e) {
         // test
      },
   });
}
</script>
