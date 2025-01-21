import type { Schedule } from "@/utils/schedule";

export const useScheduleStore = defineStore("schedule-store", () => {
   const schedules = reactive<Schedule[]>([]);
   const { subjects } = useStore();

   function generate() {
      schedules.length = 0;
      schedules.push(...generateAllPossibleSchedules(subjects));
   }

   return {
      schedules,
      generate,
   };
});
