<template>
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
</template>

<script setup lang="ts">
import { NText, NTimePicker } from "naive-ui";

const from = defineModel("from", { default: "12:00 AM" });
const to = defineModel("to", { default: "12:00 AM" });
</script>
