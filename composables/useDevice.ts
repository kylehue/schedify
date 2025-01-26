import { ref, onMounted, onUnmounted } from "vue";

export function useDevice() {
   const isMobile = ref(false);
   const isTablet = ref(false);
   const isDesktop = ref(false);

   const updateDevice = () => {
      const width = window.innerWidth;
      isMobile.value = width <= 768;
      isTablet.value = width > 768 && width <= 1024;
      isDesktop.value = width > 1024;
   };

   onMounted(() => {
      updateDevice();
      window.addEventListener("resize", updateDevice);
   });

   onUnmounted(() => {
      window.removeEventListener("resize", updateDevice);
   });

   return {
      isMobile,
      isTablet,
      isDesktop,
   };
}
