<template>
   <div class="container flex items-center justify-center w-screen h-screen">
      <div
         class="flex flex-col items-center justify-center h-fit w-fit gap-4 mb-24"
      >
         <div ref="logoEl" class="size-32 pointer-events-none">
            <img :src="logo" class="w-full h-full" />
         </div>
         <div class="flex flex-col items-center justify-center gap-4 z-10">
            <div class="flex flex-col items-center justify-center text-center">
               <NText
                  class="title text-7xl max-md:text-6xl max-sm:text-5xl font-semibold"
               >
                  Schedify
               </NText>
               <NText>Your personal tool for better scheduling</NText>
            </div>
            <NButton
               ghost
               type="primary"
               @click="navigateToSubjects"
               class="w-fit"
               size="large"
            >
               Find my schedule
            </NButton>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { NButton, NText, useThemeVars } from "naive-ui";
import logo from "@/public/schedify-logo.png";

useHead({ title: "Schedify" });

const theme = useThemeVars();

function navigateToSubjects() {
   navigateTo({
      name: "subjects",
   });
}
</script>

<style scoped></style>
