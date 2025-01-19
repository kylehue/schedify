import type { Subject, Section, Timeslot } from "~/types/types";
import { IntervalTree } from "my-dsa";

export const useStore = defineStore("store", () => {
   const subjects = reactive<Map<string, Subject>>(new Map());

   function addSubject(code: string, description?: string) {
      const subject: Subject = {
         code,
         description,
         isEnabled: true,
         sections: new Map(),
      };
      subjects.set(code, subject);

      return subject;
   }

   function getSubject(code: string) {
      return subjects.get(code);
   }

   function removeSubject(code: string) {
      subjects.delete(code);
   }

   function clearSubjects() {
      subjects.clear();
   }

   function addSection(
      subjectCode: string,
      code: string,
      description?: string
   ) {
      const section: Section = {
         code,
         description,
         isEnabled: true,
         timeslots: new Map(),
      };

      getSubject(subjectCode)!.sections.set(code, section);

      return section;
   }

   function getSection(subjectCode: string, code: string) {
      return getSubject(subjectCode)?.sections.get(code);
   }

   function removeSection(subjectCode: string, code: string) {
      getSubject(subjectCode)!.sections.delete(code);
   }

   function clearSections(subjectCode: string) {
      getSubject(subjectCode)!.sections.clear();
   }

   function addTimeslot(
      subjectCode: string,
      sectionCode: string,
      id: string | number,
      from: string,
      to: string,
      day: keyof typeof daysMap
   ) {
      const timeslot: Timeslot = {
         id,
         from,
         to,
         isEnabled: true,
         day,
      };

      getSection(subjectCode, sectionCode)!.timeslots.set(id, timeslot);

      return timeslot;
   }

   function getTimeslot(
      subjectCode: string,
      sectionCode: string,
      id: string | number
   ) {
      return getSection(subjectCode, sectionCode)!.timeslots.get(id);
   }

   function removeTimeslot(
      subjectCode: string,
      sectionCode: string,
      id: string | number
   ) {
      getSection(subjectCode, sectionCode)!.timeslots.delete(id);
   }

   function clearTimeslot(subjectCode: string, sectionCode: string) {
      getSection(subjectCode, sectionCode)!.timeslots.clear();
   }

   function clearTimeslotInDay(
      subjectCode: string,
      sectionCode: string,
      day: keyof typeof daysMap
   ) {
      let timeslots = getSection(subjectCode, sectionCode)!.timeslots;
      for (let [id, timeslot] of timeslots) {
         if (timeslot.day !== day) continue;
         timeslots.delete(id);
      }
   }

   return {
      subjects,
      addSubject,
      getSubject,
      removeSubject,
      clearSubjects,
      addSection,
      getSection,
      removeSection,
      clearSections,
      addTimeslot,
      getTimeslot,
      removeTimeslot,
      clearTimeslot,
      clearTimeslotInDay,
   };
});
