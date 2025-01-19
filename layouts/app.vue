<template>
   <div class="flex flex-col w-full h-full">
      <header class="flex-none w-full p-4" v-if="$slots.header">
         <slot name="header"></slot>
      </header>
      <main class="flex-1 w-full p-4 overflow-auto">
         <slot></slot>
      </main>
      <footer class="flex-none w-full p-4" v-if="$slots.footer">
         <slot name="footer"></slot>
      </footer>
   </div>
</template>

<script setup lang="ts">
import { useThemeVars } from "naive-ui";
const theme = useThemeVars();
</script>

<style scoped>
header,
footer {
   background-color: v-bind("theme.actionColor");
}

header {
   border-bottom: 1px solid v-bind("theme.borderColor");
}

footer {
   border-top: 1px solid v-bind("theme.borderColor");
}
</style>
