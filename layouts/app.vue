<template>
   <div class="flex flex-col w-full h-full">
      <header
         class="flex-none w-full px-8 py-4"
         v-if="$slots.header || $slots['header-extra']"
      >
         <div class="flex flex-col">
            <div class="flex flex-row gap-2 items-center justify-between">
               <Navigator
                  :title="title"
                  @back="onBack"
                  :breadcrumbs="breadcrumbs"
               ></Navigator>
               <NButton
                  v-if="isPhone"
                  @click="showMenu = true"
                  circle
                  quaternary
               >
                  <template #icon><PhList /></template>
               </NButton>
               <div v-else class="flex flex-row gap-2">
                  <slot name="header-extra"></slot>
               </div>
            </div>
            <slot name="header"></slot>
         </div>
      </header>
      <main class="flex-1 w-full p-4 overflow-auto">
         <slot></slot>
      </main>
      <footer class="flex-none w-full p-4" v-if="$slots.footer">
         <slot name="footer"></slot>
      </footer>
   </div>
   <NDrawer
      v-if="isPhone"
      width="100%"
      height="fit-content"
      placement="top"
      v-model:show="showMenu"
   >
      <div class="flex flex-col gap-2 py-8 px-4">
         <NText :depth="3" class="font-normal">Menu</NText>
         <slot name="header-extra"></slot>
      </div>
   </NDrawer>
</template>

<script setup lang="ts">
import {
   useThemeVars,
   NButton,
   NDrawer,
   NText,
   NDivider,
   NDialogProvider,
} from "naive-ui";
import Navigator from "@/components/navigator.vue";
import { PhList } from "@phosphor-icons/vue";
import { useWindowWidth } from "@/composables/useWindowWidth";
const theme = useThemeVars();
const props = defineProps<{
   onBack?: InstanceType<typeof Navigator>["$props"]["onBack"];
   breadcrumbs?: InstanceType<typeof Navigator>["$props"]["breadcrumbs"];
   title: InstanceType<typeof Navigator>["$props"]["title"];
}>();
const { windowWidth } = useWindowWidth();
const showMenu = ref(false);
const isPhone = computed(() => windowWidth.value <= 640);
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
