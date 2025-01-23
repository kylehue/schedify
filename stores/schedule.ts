import { getStatistics, type Schedule } from "@/utils/schedule";
import { serializeSubjects } from "@/utils/serialize-subject";
import { useStore } from "./store";
export const useScheduleStore = defineStore("schedule-store", () => {
   const schedules = reactive<Schedule[]>([]);
   let preComputedStatistics = new WeakMap<
      Schedule,
      ReturnType<typeof getStatistics>
   >();
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
            reject(e);

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
         let earliestTimeA = preComputedStatistics.get(a)?.earliestTime ?? 0;
         let earliestTimeB = preComputedStatistics.get(b)?.earliestTime ?? 0;
         return descending
            ? earliestTimeB - earliestTimeA
            : earliestTimeA - earliestTimeB;
      });
   }

   function sortByLatestTime(descending = false) {
      schedules.sort((a, b) => {
         let latestTimeA = preComputedStatistics.get(a)?.latestTime ?? 0;
         let latestTimeB = preComputedStatistics.get(b)?.latestTime ?? 0;
         return descending
            ? latestTimeB - latestTimeA
            : latestTimeA - latestTimeB;
      });
   }

   function sortByTotalHours(descending = false) {
      schedules.sort((a, b) => {
         let totalHoursA = preComputedStatistics.get(a)?.totalHours ?? 0;
         let totalHoursB = preComputedStatistics.get(b)?.totalHours ?? 0;
         return descending
            ? totalHoursB - totalHoursA
            : totalHoursA - totalHoursB;
      });
   }

   function sortByTotalHoursWithVacant(descending = false) {
      schedules.sort((a, b) => {
         let totalHoursWithVacantA =
            preComputedStatistics.get(a)?.totalHoursWithVacant ?? 0;
         let totalHoursWithVacantB =
            preComputedStatistics.get(b)?.totalHoursWithVacant ?? 0;
         return descending
            ? totalHoursWithVacantB - totalHoursWithVacantA
            : totalHoursWithVacantA - totalHoursWithVacantB;
      });
   }

   function sortByTotalVacantHours(descending = false) {
      schedules.sort((a, b) => {
         let totalVacantHoursA =
            preComputedStatistics.get(a)?.totalVacantHours ?? 0;
         let totalVacantHoursB =
            preComputedStatistics.get(b)?.totalVacantHours ?? 0;
         return descending
            ? totalVacantHoursB - totalVacantHoursA
            : totalVacantHoursA - totalVacantHoursB;
      });
   }

   function sortByMaxVacantHours(descending = false) {
      schedules.sort((a, b) => {
         let maxVacantHoursA =
            preComputedStatistics.get(a)?.maxVacantHours ?? 0;
         let maxVacantHoursB =
            preComputedStatistics.get(b)?.maxVacantHours ?? 0;
         return descending
            ? maxVacantHoursB - maxVacantHoursA
            : maxVacantHoursA - maxVacantHoursB;
      });
   }

   function sortByTotalDays(descending = false) {
      schedules.sort((a, b) => {
         let totalDaysA = preComputedStatistics.get(a)?.totalDays ?? 0;
         let totalDaysB = preComputedStatistics.get(b)?.totalDays ?? 0;
         return descending ? totalDaysB - totalDaysA : totalDaysA - totalDaysB;
      });
   }

   function sortByBest(descending = false) {
      schedules.sort((a, b) => {
         let scoreA = getPreComputedStatistics(a)?.score ?? 0;
         let scoreB = getPreComputedStatistics(b)?.score ?? 0;
         return !descending ? scoreB - scoreA : scoreA - scoreB;
      });
   }

   function getPreComputedStatistics(schedule: Schedule) {
      return preComputedStatistics.get(schedule);
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
      preComputedStatistics = new WeakMap();
      for (let schedule of schedules) {
         preComputedStatistics.set(schedule, getStatistics(schedule));
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
      sortByBest,
      getPreComputedStatistics,
   };
});
