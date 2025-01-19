<template>
   <div
      class="w-full h-full flex flex-col items-start justify-start gap-10 p-10 overflow-y-scroll"
   >
      <NCard class="min-h-[500px]">
         <template #header>
            <Navigator
               title="Sections"
               @back="() => goBack()"
               :breadcrumbs="[
                  {
                     label: 'Subjects',
                     click: () => navigateTo({ name: 'subjects' }),
                  },
                  {
                     label: $route.params.subject as string,
                  },
               ]"
            ></Navigator>
         </template>
         <template #default>
            <NEmpty
               class="h-full w-full flex items-center justify-center"
               v-if="sectionsCount <= 0"
            ></NEmpty>
            <div v-else class="flex flex-row flex-wrap">
               <div
                  v-for="section in sections"
                  class="w-1/3 max-md:w-full max-xl:w-1/2 p-2"
               >
                  <Section :code="section.code"> </Section>
               </div>
            </div>
         </template>
         <template #action>
            <div class="flex w-full justify-between gap-2">
               <NButton @click="isAddSectionDialogShown = true">
                  <template #icon><PhPlus></PhPlus></template>
                  Add a section
               </NButton>
               <NButton @click="clearAll" ghost type="error">
                  <template #icon><PhTrash></PhTrash></template>
                  Clear all
               </NButton>
            </div>
         </template>
      </NCard>
      <Modal
         v-model:show="isAddSectionDialogShown"
         title="Add a section"
         positive-text="Add"
         negative-text="Nevermind"
         @positiveClick="addSection"
      >
         <div class="flex flex-col gap-2">
            <NInput
               v-model:value="addSectionCode"
               placeholder="Code (must be unique)"
            ></NInput>
            <NInput
               v-model:value="addSectionDescription"
               placeholder="Description (optional)"
            ></NInput>
         </div>
      </Modal>
   </div>
</template>

<script setup lang="ts">
import { NCard, NButton, NEmpty, NInput, useDialog } from "naive-ui";
import { PhPlus, PhTrash } from "@phosphor-icons/vue";

const dialog = useDialog();
const route = useRoute();
const isAddSectionDialogShown = ref(false);
const addSectionCode = ref("");
const addSectionDescription = ref("");
const store = useStore();
const subjectCode = route.params.subject as string;
const sections = store.getSubjectSections(subjectCode);

const sectionsCount = computed(() => {
   let count = 0;
   for (let x in sections) count++;
   return count;
});

function addSection() {
   let code = addSectionCode.value.trim();
   let description = addSectionDescription.value;

   const add = () => {
      store.addSection(subjectCode, code, description);
      addSectionCode.value = "";
      addSectionDescription.value = "";
      isAddSectionDialogShown.value = false;
   };

   if (store.getSection(subjectCode, code)) {
      dialog.warning({
         title: "Duplicate section",
         content:
            "This section already exists! Do you want to replace it instead?",
         negativeText: "Cancel",
         positiveText: "Replace",
         onPositiveClick(e) {
            add();
         },
      });
   } else {
      add();
   }
}

function goBack() {
   navigateTo({ name: "subjects" });
}

function clearAll() {
   dialog.warning({
      title: "Clear all",
      content: `Are you sure you want to clear all sections in ${route.params.subject}?`,
      positiveText: "Clear all",
      negativeText: "Cancel",
      onPositiveClick(e) {
         store.clearSections(subjectCode);
      },
   });
}
</script>

<style scoped></style>
