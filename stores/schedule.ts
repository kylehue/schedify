import type { Schedule } from "@/utils/schedule";
export const useScheduleStore = defineStore("schedule-store", () => {
   const schedules = reactive<Schedule[]>([]);
   const store = useStore();
   const loadedSchedules = ref(0);

   let scheduleWorker: Worker | null = null;
   function generate() {
      return new Promise<void>((resolve, reject) => {
         if (scheduleWorker) {
            scheduleWorker.terminate();
         }

         scheduleWorker = new Worker(
            new URL("@/workers/schedule-worker", import.meta.url),
            {
               type: "module",
            }
         );

         scheduleWorker.postMessage(serializeSubjects(store.subjects));
         scheduleWorker.onmessage = (message) => {
            loadedSchedules.value = 0;
            schedules.length = 0;
            schedules.push(...message.data);
            resolve();

            scheduleWorker!.terminate();
            scheduleWorker = null;
         };

         scheduleWorker.onerror = (e) => {
            reject(e.error);

            scheduleWorker!.terminate();
            scheduleWorker = null;
         };
      });
   }

   function loadMoreSchedules() {
      loadedSchedules.value += 5;
   }

   const route = useRoute();
   watch(route, () => {
      if (loadedSchedules.value > 0) {
         loadedSchedules.value = 5;
      }
   });

   return {
      schedules,
      loadedSchedules,
      generate,
      loadMoreSchedules,
   };
});
