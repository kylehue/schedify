<template>
   <div class="container flex items-center justify-center w-screen h-screen">
      <div class="flex flex-col items-center justify-center h-fit w-fit gap-4">
         <img :src="logo" class="size-24"></img>
         <span class="flex flex-col items-center justify-center">
            <span class="title text-6xl font-semibold">Schedify</span>
            <p>Your personal tool for smarter scheduling.</p>
         </span>
         <NButton @click="navigateToSubjects" class="w-fit">
            Find my schedule
         </NButton>
      </div>
   </div>
</template>

<script setup lang="ts">
import { NButton, useThemeVars } from "naive-ui";
import logo from "@/public/schedify-logo.png";

useHead({ title: "Schedify" });

const theme = useThemeVars();
function navigateToSubjects() {
   navigateTo({
      name: "subjects",
   });
}
</script>

<style scoped>
.title {
   color: #00eaa5;
}
</style>
