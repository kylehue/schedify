<template>
   <NConfigProvider
      :theme="darkTheme"
      class="flex items-center justify-center h-full w-full"
   >
      <div>
         <NuxtRouteAnnouncer />
      </div>
      <NDialogProvider>
         <NuxtPage />
      </NDialogProvider>
   </NConfigProvider>
</template>

<script lang="ts" setup>
import {
   NConfigProvider,
   NGlobalStyle,
   NDialogProvider,
   darkTheme,
} from "naive-ui";
import "./assets/styles/main.css";
</script>
