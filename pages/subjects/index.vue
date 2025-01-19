<template>
   <div
      class="w-full h-full flex flex-col items-start justify-start gap-10 p-10 overflow-y-scroll"
   >
      <NCard class="min-h-[500px]">
         <template #header> Subjects </template>
         <template #default>
            <NEmpty
               class="h-full w-full flex items-center justify-center"
               v-if="store.subjects.size <= 0"
            ></NEmpty>
            <div v-else class="flex flex-row flex-wrap">
               <div
                  v-for="subject in store.subjects.values()"
                  :key="subject.code"
                  class="w-1/3 max-md:w-full max-xl:w-1/2 p-2"
               >
                  <Subject :code="subject.code"> </Subject>
               </div>
            </div>
         </template>
         <template #action>
            <div class="flex w-full justify-between gap-2">
               <div class="flex gap-2">
                  <NButton @click="isAddSubjectDialogShown = true">
                     <template #icon><PhPlus></PhPlus></template>
                     Add a subject
                  </NButton>
                  <NButton>
                     <template #icon><PhSparkle></PhSparkle></template>
                     Generate schedules
                  </NButton>
               </div>
               <NButton @click="clearAll" ghost type="error">
                  <template #icon><PhTrash></PhTrash></template>
                  Clear all
               </NButton>
            </div>
         </template>
      </NCard>
      <Modal
         v-model:show="isAddSubjectDialogShown"
         title="Add a subject"
         positive-text="Add"
         negative-text="Nevermind"
         @positiveClick="addSubject"
      >
         <div class="flex flex-col gap-2">
            <NInput
               v-model:value="addSubjectCode"
               placeholder="Code (must be unique)"
            ></NInput>
            <NInput
               v-model:value="addSubjectDescription"
               placeholder="Description (optional)"
            ></NInput>
         </div>
      </Modal>
   </div>
</template>

<script setup lang="ts">
import { NCard, NButton, useDialog, NInput, NEmpty } from "naive-ui";
import { PhPlus, PhTrash, PhSparkle } from "@phosphor-icons/vue";

const dialog = useDialog();
const isAddSubjectDialogShown = ref(false);
const addSubjectCode = ref("");
const addSubjectDescription = ref("");
const store = useStore();
console.log(store);

function addSubject() {
   let code = addSubjectCode.value.trim();
   let description = addSubjectDescription.value;

   const add = () => {
      store.addSubject(code, description);
      addSubjectCode.value = "";
      addSubjectDescription.value = "";
      isAddSubjectDialogShown.value = false;
   };

   if (store.getSubject(code)) {
      dialog.warning({
         title: "Duplicate subject",
         content:
            "This subject already exists! Do you want to replace it instead?",
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

function clearAll() {
   dialog.warning({
      title: "Clear all",
      content: "Are you sure you want to clear all subjects?",
      positiveText: "Clear all",
      negativeText: "Cancel",
      onPositiveClick(e) {
         store.clearSubjects();
      },
   });
}
</script>

<style scoped></style>
