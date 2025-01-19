<template>
   <div class="container flex items-center justify-center w-full h-full">
      <div class="flex flex-col items-center justify-center h-fit w-fit gap-4">
         <span class="flex flex-col items-center justify-center">
            <span class="title text-6xl font-semibold">Schedify</span>
            <p>Your personal tool for smarter scheduling.</p>
         </span>
         <NuxtLink to="/subjects">
            <NButton class="w-fit">Find my schedule</NButton>
         </NuxtLink>
      </div>
   </div>
</template>

<script setup lang="ts">
import { NButton, useThemeVars } from "naive-ui";
const theme = useThemeVars();
</script>

<style scoped>
.title {
   color: v-bind("theme.primaryColor");
}
</style>
