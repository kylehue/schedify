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
         timeslots: [],
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
   };
});
