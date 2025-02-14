<template>
   <NCard
      :class="{
         'opacity-50': !subject.isEnabled,
      }"
      class="transition-opacity"
   >
      <template #header>
         <NText class="truncate text-sm">{{ props.code }}</NText>
      </template>
      <template #default>
         <div class="flex flex-col md:flex-row md:items-center gap-1">
            <NText class="truncate" :depth="3">
               {{ subject.description || "Empty description" }}
            </NText>
         </div>
      </template>
      <template #action>
         <div class="flex flex-wrap justify-between">
            <div class="flex flex-wrap gap-2">
               <NBadge dot :show="!store.isSubjectValid(subject.code)">
                  <NButton tertiary @click="navigateToSections">
                     Edit sections...
                  </NButton>
               </NBadge>
               <NButton
                  @click="subject.isEnabled = !subject.isEnabled"
                  tertiary
                  >{{ subject.isEnabled ? "Disable" : "Enable" }}</NButton
               >
            </div>
            <NButton @click="remove" type="error" quaternary circle>
               <template #icon><PhTrash></PhTrash></template>
            </NButton>
         </div>
      </template>
   </NCard>
</template>

<script setup lang="ts">
import { PhTrash } from "@phosphor-icons/vue";
import { NCard, NButton, NBadge, NText, useDialog } from "naive-ui";
import { useStore } from "@/stores/store";
const props = defineProps<{
   code: string;
}>();
const dialog = useDialog();
const store = useStore();
const route = useRoute();
const subject = store.getSubject(props.code);
if (!subject) {
   throw createError({
      statusCode: 404,
      statusMessage: `Subject does not exist: ${props.code}`,
   });
}

function navigateToSections() {
   navigateTo({
      params: { subject: props.code },
      query: { s: route.query.s },
      name: "subjects-subject-sections",
   });
}

function remove() {
   dialog.warning({
      title: "Remove subject",
      content: `Are you sure you want to remove ${props.code}?`,
      positiveText: "Remove",
      negativeText: "Cancel",
      onPositiveClick(e) {
         store.removeSubject(props.code);
      },
   });
}
</script>

<style scoped></style>
