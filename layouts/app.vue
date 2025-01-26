<template>
   <div ref="containerEl" class="flex flex-col w-screen h-screen overflow-auto">
      <header
         ref="headerEl"
         class="flex-none w-full px-12 max-sm:px-4 max-md:px-8 py-4 z-[999] sticky"
         :style="{
            top: topPosition + 'px',
         }"
         v-if="$slots.header || $slots['header-extra']"
      >
         <div class="flex flex-col w-full">
            <div class="flex flex-row items-center justify-between">
               <div class="flex flex-1">
                  <Navigator
                     :title="title"
                     @back="onBack"
                     :breadcrumbs="breadcrumbs"
                  >
                     <template v-if="isMobile" #extra>
                        <NButton @click="showMenu = true" circle quaternary>
                           <template #icon><PhList /></template>
                        </NButton>
                     </template>
                  </Navigator>
               </div>
               <div v-if="!isMobile" class="flex flex-row gap-2">
                  <slot name="header-extra"></slot>
               </div>
            </div>
            <slot name="header"></slot>
         </div>
      </header>
      <main class="flex-1 w-full p-4">
         <slot></slot>
      </main>
   </div>
   <NDrawer
      v-if="isMobile"
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
import { useThemeVars, NButton, NDrawer, NText } from "naive-ui";
import Navigator from "@/components/navigator.vue";
import { PhList } from "@phosphor-icons/vue";
import { useDevice } from "@/composables/useDevice";
const containerEl = ref();
const headerEl = ref();
const theme = useThemeVars();
const props = defineProps<{
   onBack?: InstanceType<typeof Navigator>["$props"]["onBack"];
   breadcrumbs?: InstanceType<typeof Navigator>["$props"]["breadcrumbs"];
   title: InstanceType<typeof Navigator>["$props"]["title"];
}>();
const { isMobile } = useDevice();
const showMenu = ref(false);
const topPosition = ref(0);
let lastScrollY = 0;

function handleStickyScroll() {
   const currentScrollY = containerEl.value?.scrollTop ?? 0;
   const headerHeight = headerEl.value?.offsetHeight ?? 0;
   if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar
      topPosition.value = Math.max(
         topPosition.value - Math.abs(currentScrollY - lastScrollY),
         -headerHeight
      );
   } else {
      // Scrolling up: show navbar
      topPosition.value = Math.min(
         topPosition.value + Math.abs(currentScrollY - lastScrollY),
         0
      );
   }

   lastScrollY = currentScrollY;
}

onMounted(() => {
   containerEl.value?.addEventListener("scroll", handleStickyScroll);
});

onBeforeUnmount(() => {
   containerEl.value?.removeEventListener("scroll", handleStickyScroll);
});
</script>

<style scoped>
header {
   background-color: v-bind("theme.tableHeaderColor");
   backdrop-filter: blur(15px);
   border-bottom: 1px solid v-bind("theme.borderColor");
}
</style>
