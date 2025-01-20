<template>
   <div class="flex flex-col items-end justify-end gap-1">
      <div class="flex flex-row items-center gap-2 w-full">
         <NTimePicker
            class="flex-1"
            v-model:formatted-value="from"
            :format="defaultTimeFormat"
            :minutes="[0, 15, 30, 45]"
            use12-hours
         ></NTimePicker>
         <NText :depth="3" class="text-nowrap">to</NText>
         <NTimePicker
            class="flex-1"
            v-model:formatted-value="to"
            :format="defaultTimeFormat"
            :minutes="[0, 15, 30, 45]"
            use12-hours
         ></NTimePicker>
      </div>
      <NText :depth="3" class="text-xs">Total: {{ totalTime }}</NText>
   </div>
</template>

<script setup lang="ts">
import { NText, NTimePicker } from "naive-ui";

const from = defineModel("from", { default: "12:00 AM" });
const to = defineModel("to", { default: "12:00 AM" });
const totalTime = computed(() => {
   const fromDecimal = timeToDecimal(from.value);
   const toDecimal = timeToDecimal(to.value);

   const [adjustedFrom, adjustedTo] =
      fromDecimal > toDecimal
         ? [fromDecimal, toDecimal + 24]
         : [fromDecimal, toDecimal];

   const totalHours = adjustedTo - adjustedFrom;
   const hours = Math.floor(totalHours);
   const minutes = Math.round((totalHours - hours) * 60);

   if (hours === 0 && minutes === 0) {
      return "0 hours";
   } else if (hours === 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""}`;
   } else if (minutes === 0) {
      return `${hours} hour${hours > 1 ? "s" : ""}`;
   }

   return `${hours} hour${hours > 1 ? "s" : ""} ${minutes} minute${
      minutes > 1 ? "s" : ""
   }`;
});
</script>
