<template>
   <NuxtLayout name="app" :breadcrumbs="[]" title="Subjects">
      <template #header-extra>
         <div class="flex flex-wrap w-full gap-2">
            <NButton class="flex-1" @click="isAddSubjectDialogShown = true">
               <template #icon><PhPlus></PhPlus></template>
               Add a subject
            </NButton>
            <NButton class="flex-1" @click="navigateToSchedules">
               Go to schedules...
            </NButton>
            <NButton class="flex-1" @click="clearAll" tertiary type="error">
               <template #icon><PhTrash></PhTrash></template>
               Clear all
            </NButton>
         </div>
      </template>
      <template #default>
         <div class="flex h-full justify-center">
            <NEmpty
               class="h-full w-full flex items-center justify-center"
               v-if="store.subjects.size <= 0"
            ></NEmpty>
            <div v-else class="container flex flex-row flex-wrap h-fit pb-8">
               <div
                  v-for="subject in store.subjects.values()"
                  :key="subject.code"
                  class="w-1/3 max-md:w-full max-xl:w-1/2 p-2 h-fit"
               >
                  <Subject :code="subject.code"> </Subject>
               </div>
            </div>
         </div>
      </template>
   </NuxtLayout>
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
            :status="addSubjectCodeStatus"
            placeholder="Code (must be unique)"
         ></NInput>
         <NInput
            v-model:value="addSubjectDescription"
            placeholder="Description (optional)"
         ></NInput>
      </div>
   </Modal>
</template>

<script setup lang="ts">
import {
   NCard,
   NButton,
   useDialog,
   NInput,
   NEmpty,
   type InputProps,
} from "naive-ui";
import { PhPlus, PhTrash, PhSparkle } from "@phosphor-icons/vue";
import { useStore } from "@/stores/store";

useHead({ title: "Subjects" });

const dialog = useDialog();
const isAddSubjectDialogShown = ref(false);
const addSubjectCode = ref("");
const addSubjectCodeStatus = ref<InputProps["status"]>(undefined);
const addSubjectDescription = ref("");
const store = useStore();
const route = useRoute();
console.log(store);

function addSubject() {
   let code = addSubjectCode.value.trim();
   let description = addSubjectDescription.value.trim() || undefined;

   const add = () => {
      store.addSubject(code, description);
      addSubjectCode.value = "";
      addSubjectDescription.value = "";
      isAddSubjectDialogShown.value = false;
      addSubjectCodeStatus.value = undefined;
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
   } else if (!code.length) {
      addSubjectCodeStatus.value = "error";
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

function navigateToSchedules() {
   navigateTo({ name: "subjects-schedules", query: { s: route.query.s } });
}
</script>

<style scoped></style>
