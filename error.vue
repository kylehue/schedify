<template>
   <NConfigProvider
      :theme="darkTheme"
      class="flex items-center justify-center h-screen w-screen"
   >
      <div class="container flex items-center justify-center w-full h-full">
         <div
            class="flex flex-col items-center justify-center h-fit w-fit gap-4"
         >
            <span class="flex flex-col items-center justify-center">
               <NText class="title text-8xl font-semibold">
                  {{ error?.statusCode }}
               </NText>
               <NText class="truncate break-words max-w-screen-lg">
                  {{ error?.statusMessage }}
               </NText>
            </span>
            <NButton @click="$router.back()" class="w-fit"> Go back </NButton>
         </div>
      </div>
   </NConfigProvider>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";
import { NConfigProvider, darkTheme, NButton, NText } from "naive-ui";

const props = defineProps({
   error: Object as () => NuxtError,
});
</script>
