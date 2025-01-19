import type { Subject, Section, Timeslot } from "~/types/types";
import { IntervalTree } from "my-dsa";

export const useStore = defineStore("store", () => {
   const subjects = reactive<Record<string, Subject>>({});
   // let individualIT: Record<string, Record<string, IntervalTree>> = {};
   // let globalIT = new IntervalTree();

   function addSubject(code: string, description?: string) {
      const subject: Subject = {
         code,
         description,
         isEnabled: true,
         sections: {},
      };
      subjects[code] = subject;

      return subject;
   }

   function getSubject(code: string): Subject | undefined {
      return subjects[code];
   }

   function removeSubject(code: string) {
      delete subjects[code];
   }

   function clearSubjects() {
      for (let key in subjects) {
         delete subjects[key];
      }
      // individualIT = {};
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

      getSubject(subjectCode)!.sections[code] = section;

      return section;
   }

   function getSection(subjectCode: string, code: string): Section | undefined {
      return getSubject(subjectCode)?.sections[code];
   }

   function removeSection(subjectCode: string, code: string) {
      delete getSubject(subjectCode)!.sections[code];
   }

   function clearSections(subjectCode: string) {
      let map = getSubject(subjectCode)!.sections;
      for (let key in map) {
         delete map[key];
      }
      // individualIT[subjectCode] = {};
   }

   function getSubjectSections(subjectCode: string) {
      return getSubject(subjectCode)?.sections;
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
      getSubjectSections,
   };
});
