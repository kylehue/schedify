<template>
   <NCard
      content-class="flex flex-wrap w-full justify-around items-center gap-2"
   >
      <template #header>
         <div class="flex flex-row justify-between items-center">
            <NText class="text-sm">Filters</NText>
            <NButton @click="reset" circle quaternary size="small">
               <template #icon><PhArrowCounterClockwise /></template>
            </NButton>
         </div>
      </template>
      <div class="flex flex-col flex-1 min-w-[150px] gap-2">
         <NText :depth="3" class="text-xs flex items-center gap-2">
            <span>Earliest time</span>
            <NTooltip>
               <template #trigger>
                  <PhQuestion class="cursor-pointer"></PhQuestion>
               </template>
               Only show schedules that begins at or after X.
            </NTooltip>
         </NText>
         <NTimePicker
            class="flex-1"
            default-formatted-value="12:00 AM"
            :format="defaultTimeFormat"
            :minutes="[0, 30]"
            use12-hours
            v-model:formatted-value="earliestTime"
         ></NTimePicker>
      </div>
      <div class="flex flex-col flex-1 min-w-[150px] gap-2">
         <NText :depth="3" class="text-xs flex items-center gap-2">
            <span>Latest time</span>
            <NTooltip>
               <template #trigger>
                  <PhQuestion class="cursor-pointer"></PhQuestion>
               </template>
               Only show schedules that ends at or before X.
            </NTooltip>
         </NText>
         <NTimePicker
            class="flex-1"
            default-formatted-value="12:00 AM"
            :format="defaultTimeFormat"
            :minutes="[0, 30]"
            use12-hours
            v-model:formatted-value="latestTime"
         ></NTimePicker>
      </div>
      <div class="flex flex-col flex-1 min-w-[170px] gap-2">
         <NText :depth="3" class="text-xs flex items-center gap-2">
            <span>Max hours</span>
            <NTooltip>
               <template #trigger>
                  <PhQuestion class="cursor-pointer"></PhQuestion>
               </template>
               Only show schedules with total hours (excluding vacant) less than
               or equal to X.
            </NTooltip>
         </NText>
         <NInputNumber
            :default-value="24 * 7"
            :min="0.5"
            :max="24 * 7"
            :step="0.5"
            :parse="inputHoursParse"
            :format="inputHoursFormat"
            v-model:value="maxTotalHours"
         ></NInputNumber>
      </div>
      <div class="flex flex-col flex-1 min-w-[170px] gap-2">
         <NText :depth="3" class="text-xs flex items-center gap-2">
            <span>Max hours with vacant</span>
            <NTooltip>
               <template #trigger>
                  <PhQuestion class="cursor-pointer"></PhQuestion>
               </template>
               Only show schedules with total hours (including vacant) less than
               or equal to X.
            </NTooltip>
         </NText>
         <NInputNumber
            :default-value="24 * 7"
            :min="0.5"
            :max="24 * 7"
            :step="0.5"
            :parse="inputHoursParse"
            :format="inputHoursFormat"
            v-model:value="maxTotalHoursWithVacant"
         ></NInputNumber>
      </div>
      <div class="flex flex-col flex-1 min-w-[170px] gap-2">
         <NText :depth="3" class="text-xs flex items-center gap-2">
            <span>Max vacant hours</span>
            <NTooltip>
               <template #trigger>
                  <PhQuestion class="cursor-pointer"></PhQuestion>
               </template>
               Only show schedules with total vacant hours less than or equal to
               X.
            </NTooltip>
         </NText>
         <NInputNumber
            :default-value="24 * 7"
            :min="0.5"
            :max="24 * 7"
            :step="0.5"
            :parse="inputHoursParse"
            :format="inputHoursFormat"
            v-model:value="maxTotalVacantHours"
         ></NInputNumber>
      </div>
      <div class="flex flex-col flex-1 min-w-[170px] gap-2">
         <NText :depth="3" class="text-xs flex items-center gap-2">
            <span>Max vacant in a day</span>
            <NTooltip>
               <template #trigger>
                  <PhQuestion class="cursor-pointer"></PhQuestion>
               </template>
               Only show schedules with max vacant in a day less than or equal
               to X.
            </NTooltip>
         </NText>
         <NInputNumber
            :default-value="24 * 7"
            :min="0.5"
            :max="24 * 7"
            :step="0.5"
            :parse="inputHoursParse"
            :format="inputHoursFormat"
            v-model:value="maxMaxVacantHours"
         ></NInputNumber>
      </div>

      <div class="flex flex-col flex-1 min-w-[100px] gap-2">
         <NText :depth="3" class="text-xs flex items-center gap-2">
            <span>Max days</span>
            <NTooltip>
               <template #trigger>
                  <PhQuestion class="cursor-pointer"></PhQuestion>
               </template>
               Only show schedules with total days less than or equal to X.
            </NTooltip>
         </NText>
         <NInputNumber
            :default-value="7"
            :min="1"
            :max="7"
            v-model:value="maxTotalDays"
         ></NInputNumber>
      </div>
   </NCard>
</template>

<script setup lang="ts">
import {
   NCard,
   NButton,
   NEmpty,
   NTimePicker,
   NText,
   NTooltip,
   NInputNumber,
} from "naive-ui";
import {
   PhSparkle,
   PhQuestion,
   PhArrowArcLeft,
   PhArrowCounterClockwise,
} from "@phosphor-icons/vue";
import { formatHours, parseHours, defaultTimeFormat } from "@/utils/time";

const earliestTime = defineModel<string>("earliestTime");
const latestTime = defineModel<string>("latestTime");
const maxTotalHours = defineModel<number>("maxTotalHours");
const maxTotalHoursWithVacant = defineModel<number>("maxTotalHoursWithVacant");
const maxTotalVacantHours = defineModel<number>("maxTotalVacantHours");
const maxMaxVacantHours = defineModel<number>("maxMaxVacantHours");
const maxTotalDays = defineModel<number>("maxTotalDays");

function inputHoursParse(input: string) {
   if (input.toUpperCase() === "MAX") return 24 * 7;
   return parseHours(input);
}

function inputHoursFormat(input: number | null) {
   if (!input) return "";
   if (input === 24 * 7) return "MAX";
   return formatHours(input);
}

function reset() {
   earliestTime.value = "12:00 AM";
   latestTime.value = "12:00 AM";
   maxTotalHours.value = 24 * 7;
   maxTotalHoursWithVacant.value = 24 * 7;
   maxTotalVacantHours.value = 24 * 7;
   maxMaxVacantHours.value = 24 * 7;
   maxTotalDays.value = 7;
}
</script>
