import type { Schedule } from "@/utils/schedule";
export const useScheduleStore = defineStore("schedule-store", () => {
   const schedules = reactive<Schedule[]>([]);
   let stats = new WeakMap<Schedule, ReturnType<typeof getStatistics>>();
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

   function sortByEarliestTime(descending = false) {
      schedules.sort((a, b) => {
         let earliestTimeA = stats.get(a)?.earliestTime ?? 0;
         let earliestTimeB = stats.get(b)?.earliestTime ?? 0;
         return descending
            ? earliestTimeB - earliestTimeA
            : earliestTimeA - earliestTimeB;
      });
   }

   function sortByLatestTime(descending = false) {
      schedules.sort((a, b) => {
         let latestTimeA = stats.get(a)?.latestTime ?? 0;
         let latestTimeB = stats.get(b)?.latestTime ?? 0;
         return descending
            ? latestTimeB - latestTimeA
            : latestTimeA - latestTimeB;
      });
   }

   function sortByTotalHours(descending = false) {
      schedules.sort((a, b) => {
         let totalHoursA = stats.get(a)?.totalHours ?? 0;
         let totalHoursB = stats.get(b)?.totalHours ?? 0;
         return descending
            ? totalHoursB - totalHoursA
            : totalHoursA - totalHoursB;
      });
   }

   function sortByTotalHoursWithVacant(descending = false) {
      schedules.sort((a, b) => {
         let totalHoursWithVacantA = stats.get(a)?.totalHoursWithVacant ?? 0;
         let totalHoursWithVacantB = stats.get(b)?.totalHoursWithVacant ?? 0;
         return descending
            ? totalHoursWithVacantB - totalHoursWithVacantA
            : totalHoursWithVacantA - totalHoursWithVacantB;
      });
   }

   function sortByTotalVacantHours(descending = false) {
      schedules.sort((a, b) => {
         let totalVacantHoursA = stats.get(a)?.totalVacantHours ?? 0;
         let totalVacantHoursB = stats.get(b)?.totalVacantHours ?? 0;
         return descending
            ? totalVacantHoursB - totalVacantHoursA
            : totalVacantHoursA - totalVacantHoursB;
      });
   }

   function sortByMaxVacantHours(descending = false) {
      schedules.sort((a, b) => {
         let maxVacantHoursA = stats.get(a)?.maxVacantHours ?? 0;
         let maxVacantHoursB = stats.get(b)?.maxVacantHours ?? 0;
         return descending
            ? maxVacantHoursB - maxVacantHoursA
            : maxVacantHoursA - maxVacantHoursB;
      });
   }

   function sortByTotalDays(descending = false) {
      schedules.sort((a, b) => {
         let totalDaysA = stats.get(a)?.totalDays ?? 0;
         let totalDaysB = stats.get(b)?.totalDays ?? 0;
         return descending ? totalDaysB - totalDaysA : totalDaysA - totalDaysB;
      });
   }

   function getPreComputedStatistics(schedule: Schedule) {
      return stats.get(schedule);
   }

   // Reset loaded schedules to 5
   const route = useRoute();
   watch(route, () => {
      if (loadedSchedules.value > 0) {
         loadedSchedules.value = 5;
      }
   });

   // precompute stats
   watch(schedules, () => {
      stats = new WeakMap();
      for (let schedule of schedules) {
         stats.set(schedule, getStatistics(schedule));
      }
   });

   return {
      schedules,
      loadedSchedules,
      generate,
      loadMoreSchedules,
      sortByEarliestTime,
      sortByLatestTime,
      sortByTotalHours,
      sortByTotalHoursWithVacant,
      sortByTotalVacantHours,
      sortByMaxVacantHours,
      sortByTotalDays,
      getPreComputedStatistics,
   };
});
