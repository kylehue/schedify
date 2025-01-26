import { ref, onMounted, onUnmounted } from "vue";

export function useWindowSize() {
   const width = ref(typeof window !== "undefined" ? window.innerWidth : 0);
   const height = ref(typeof window !== "undefined" ? window.innerHeight : 0);

   const updateSize = () => {
      if (typeof window !== "undefined") {
         width.value = window.innerWidth;
         height.value = window.innerHeight;
      }
   };

   onMounted(() => {
      if (typeof window !== "undefined") {
         window.addEventListener("resize", updateSize);
      }
   });

   onUnmounted(() => {
      if (typeof window !== "undefined") {
         window.removeEventListener("resize", updateSize);
      }
   });

   return {
      width,
      height,
   };
}
