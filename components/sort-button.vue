<template>
   <NDropdown
      trigger="click"
      :render-label="renderLabel"
      :options="options"
      :value="value"
      @select="
         (v) => {
            if (value === v) {
               mode = mode === 'ascending' ? 'descending' : 'ascending';
            } else {
               mode = 'ascending';
            }
            value = v;
         }
      "
   >
      <NButton tertiary>
         <template #icon>
            <PhArrowsDownUp></PhArrowsDownUp>
         </template>
         <div class="flex items-center gap-2">
            <NText>Sort</NText>
            <PhCaretDown class="opacity-50"></PhCaretDown>
         </div>
      </NButton>
   </NDropdown>
</template>

<script setup lang="ts">
import {
   NCard,
   NButton,
   NEmpty,
   NDivider,
   NText,
   NDropdown,
   type DropdownOption,
} from "naive-ui";
import {
   PhSparkle,
   PhArrowsDownUp,
   PhCaretUp,
   PhCaretDown,
} from "@phosphor-icons/vue";
const sortMode = ref<"asc" | "descending">("asc");

const props = defineProps<{
   options: { key: string; label: string }[];
   defaultValue?: string;
}>();
const value = defineModel<string>("value");
const mode = defineModel<"ascending" | "descending">("mode", {
   default: "ascending",
});

function renderLabel(option: DropdownOption) {
   let children: VNode[] = [h(NText, {}, () => option.label)];
   if (value.value === option.key) {
      children.push(mode.value === "ascending" ? h(PhCaretDown) : h(PhCaretUp));
   }
   return h("div", { class: "flex items-center gap-2" }, children);
}
</script>
