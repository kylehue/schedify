<template>
   <div class="flex flex-col gap-2 w-full">
      <div class="flex flex-row items-center gap-2 justify-between">
         <div class="flex flex-row items-center gap-2">
            <NButton
               v-if="props.onBack"
               quaternary
               circle
               @click="props.onBack"
            >
               <template #icon><PhArrowLeft /></template>
            </NButton>
            <span>{{ props.title }}</span>
         </div>
         <div v-if="$slots.extra" class="flex">
            <slot name="extra"></slot>
         </div>
      </div>
      <div v-if="breadcrumbs?.length" class="flex flex-row items-center gap-2">
         <NBreadcrumb>
            <NBreadcrumbItem
               v-for="x in breadcrumbs"
               :clickable="!!x.click"
               @click="x.click"
            >
               {{ x.label }}

               <template #separator><PhCaretRight /></template>
            </NBreadcrumbItem>
         </NBreadcrumb>
      </div>
   </div>
</template>

<script setup lang="ts">
import { NButton, NBreadcrumb, NBreadcrumbItem } from "naive-ui";
import { PhArrowLeft, PhCaretRight } from "@phosphor-icons/vue";

const props = defineProps<{
   title: string;
   onBack?: () => void;
   breadcrumbs?: {
      label: string;
      click?: () => void;
   }[];
}>();
</script>
