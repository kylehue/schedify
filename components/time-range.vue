<template>
   <div class="flex flex-col items-end justify-end gap-1">
      <div class="flex flex-row items-center gap-2 w-full">
         <NTimePicker
            class="flex-1"
            v-model:formatted-value="from"
            :format="defaultTimeFormat"
            :minutes="[0, 30]"
            use12-hours
         ></NTimePicker>
         <NText :depth="3" class="text-nowrap">to</NText>
         <NTimePicker
            class="flex-1"
            v-model:formatted-value="to"
            :format="defaultTimeFormat"
            :minutes="[0, 30]"
            use12-hours
         ></NTimePicker>
      </div>
      <NText :depth="3" class="text-xs">Total: {{ totalTime }}</NText>
   </div>
</template>

<script setup lang="ts">
import { NText, NTimePicker } from "naive-ui";
import {
   timeToDecimal,
   circleTimeRange,
   formatHours,
   defaultTimeFormat,
} from "@/utils/time";

const from = defineModel("from", { default: "12:00 AM" });
const to = defineModel("to", { default: "12:00 AM" });
const totalTime = computed(() => {
   const fromDecimal = timeToDecimal(from.value);
   const toDecimal = timeToDecimal(to.value);
   const [adjustedFrom, adjustedTo] = circleTimeRange(fromDecimal, toDecimal);
   return formatHours(adjustedTo - adjustedFrom);
});
</script>
