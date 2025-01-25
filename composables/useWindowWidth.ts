import { ref, onMounted, onUnmounted } from "vue";

export function useWindowWidth() {
   const windowWidth = ref(
      typeof window !== "undefined" ? window.innerWidth : 0
   );

   const updateWidth = () => {
      if (typeof window !== "undefined") {
         windowWidth.value = window.innerWidth;
      }
   };

   onMounted(() => {
      if (typeof window !== "undefined") {
         window.addEventListener("resize", updateWidth);
      }
   });

   onUnmounted(() => {
      if (typeof window !== "undefined") {
         window.removeEventListener("resize", updateWidth);
      }
   });

   return {
      windowWidth,
   };
}
