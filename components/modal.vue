<template>
   <NModal v-model:show="show">
      <NDialog
         :title="title"
         :positive-text="positiveText"
         :negative-text="negativeText"
         v-model:show="show"
         @close="show = false"
         @negative-click="show = false"
         @positive-click="onPositiveClick"
         :show-icon="false"
         :class="dialogClass"
         class="overflow-auto"
      >
         <template #icon><slot name="icon"></slot></template>
         <slot></slot>
      </NDialog>
   </NModal>
</template>

<script setup lang="ts">
import { NDialog, NModal } from "naive-ui";

const props = defineProps<{
   title: string;
   positiveText?: string;
   negativeText?: string;
   onPositiveClick?: () => any;
   dialogClass?: string;
}>();
const show = defineModel<boolean>("show", { default: false });
</script>
