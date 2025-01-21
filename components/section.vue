<template>
   <NCard
      :class="{
         'opacity-50': !section.isEnabled,
      }"
      class="transition-opacity"
   >
      <template #header>
         <NText class="truncate text-sm">{{ props.code }}</NText>
      </template>
      <template #default>
         <div class="flex flex-col md:flex-row md:items-center gap-1">
            <NText class="truncate" :depth="3">
               {{ section.description || "Empty description" }}
            </NText>
         </div>
      </template>
      <template #action>
         <div class="flex flex-wrap justify-between">
            <div class="flex flex-wrap gap-2">
               <NBadge
                  dot
                  :show="!store.isTimeslotsValid(subject.code, section.code)"
               >
                  <NButton tertiary @click="navigateToTimeSlots">
                     Edit time slots...
                  </NButton>
               </NBadge>
               <NButton
                  @click="section.isEnabled = !section.isEnabled"
                  tertiary
                  >{{ section.isEnabled ? "Disable" : "Enable" }}</NButton
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
const props = defineProps<{
   code: string;
}>();
const dialog = useDialog();
const route = useRoute();
const store = useStore();
const subject = store.getSubject(route.params.subject as string);
if (!subject) {
   throw createError({
      statusCode: 404,
      statusMessage: `Subject does not exist: ${
         route.params.subject as string
      }`,
   });
}

const section = store.getSection(subject.code, props.code);
if (!section) {
   throw createError({
      statusCode: 404,
      statusMessage: `Section does not exist: ${props.code}`,
   });
}

function navigateToTimeSlots() {
   navigateTo({
      params: { section: props.code },
      query: { s: route.query.s },
      name: "subjects-subject-sections-section-timeslots",
   });
}

function remove() {
   dialog.warning({
      title: "Remove section",
      content: `Are you sure you want to remove ${props.code} from ${route.params.subject}?`,
      positiveText: "Remove",
      negativeText: "Cancel",
      onPositiveClick(e) {
         store.removeSection(subject!.code, section!.code);
      },
   });
}
</script>

<style scoped></style>
