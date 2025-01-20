import type { Subject, Section, Timeslot } from "~/types/types";
import { IntervalTree } from "my-dsa";

export const useStore = defineStore("store", () => {
   const subjects = reactive<Map<string, Subject>>(new Map());

   /**
    * Adds a subject.
    *
    * @param code The code of the subject to add.
    * @param description The description of the subject.
    */
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

   /**
    * Returns a subject.
    *
    * @param code The code of the subject to get.
    */
   function getSubject(code: string) {
      return subjects.get(code);
   }

   /**
    * Removes a subject.
    *
    * @param code The code of the subject to remove.
    */
   function removeSubject(code: string) {
      subjects.delete(code);
   }

   /**
    * Removes all subjects.
    */
   function clearSubjects() {
      subjects.clear();
   }

   /**
    * Adds a section from a subject.
    *
    * @param subjectCode The subject code.
    * @param code The code of the section.
    * @param description The description of the section.
    */
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

   /**
    * Returns a section from a subject.
    *
    * @param subjectCode The subject code.
    * @param code The code of the section.
    */
   function getSection(subjectCode: string, code: string) {
      return getSubject(subjectCode)?.sections.get(code);
   }

   /**
    * Removes a section from a subject.
    *
    * @param subjectCode The subject code.
    * @param code The code of the section.
    */
   function removeSection(subjectCode: string, code: string) {
      getSubject(subjectCode)!.sections.delete(code);
   }

   /**
    * Removes all sections in a subject.
    *
    * @param subjectCode The subject code.
    */
   function clearSections(subjectCode: string) {
      getSubject(subjectCode)!.sections.clear();
   }

   /**
    * Adds a time slot in a section.
    *
    * @param subjectCode The subject code of the section.
    * @param sectionCode The code of the section.
    * @param id The ID of the time slot to add.
    */
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

   /**
    * Returns a specific time slot.
    *
    * @param subjectCode The subject code of the section.
    * @param sectionCode The code of the section.
    * @param id The ID of the time slot to get.
    */
   function getTimeslot(
      subjectCode: string,
      sectionCode: string,
      id: string | number
   ) {
      return getSection(subjectCode, sectionCode)!.timeslots.get(id);
   }

   /**
    * Removes a time slot from a section.
    *
    * @param subjectCode The subject code of the section.
    * @param sectionCode The code of the section.
    * @param id The ID of the time slot to remove.
    */
   function removeTimeslot(
      subjectCode: string,
      sectionCode: string,
      id: string | number
   ) {
      getSection(subjectCode, sectionCode)!.timeslots.delete(id);
   }

   /**
    * Clears all timeslots in a section.
    *
    * @param subjectCode The subject code of the section.
    * @param sectionCode The code of the section.
    */
   function clearTimeslot(subjectCode: string, sectionCode: string) {
      getSection(subjectCode, sectionCode)!.timeslots.clear();
   }

   /**
    * Clears all timeslots that is in the specified day.
    *
    * @param subjectCode The subject code of the section.
    * @param sectionCode The code of the section.
    * @param day The day to clear the time slots from.
    */
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

   /**
    * Groups the time slots of a section by day.
    *
    * @param subjectCode The subject code of the section.
    * @param sectionCode The code of the section.
    */
   function getTimeslotsGroupedByDay(subjectCode: string, sectionCode: string) {
      let map: Record<keyof typeof daysMap, Timeslot[]> = {
         mon: [],
         tue: [],
         wed: [],
         fri: [],
         sat: [],
         sun: [],
         thu: [],
      };

      let timeslots = getSection(subjectCode, sectionCode)!.timeslots;
      for (let timeslot of timeslots.values()) {
         map[timeslot.day].push(timeslot);
      }

      return map;
   }

   /**
    * Checks if a section has empty time slots.
    *
    * @param subjectCode The subject code of the section to check.
    * @param sectionCode The code of the section to check.
    */
   function isTimeslotsEmpty(subjectCode: string, sectionCode: string) {
      let timeslots = getSection(subjectCode, sectionCode)!.timeslots;
      return timeslots.size <= 0;
   }

   /**
    * Checks if the time slot is conflicted with other time slots that has
    * the same day.
    *
    * @param subjectCode The subject code of the time slot to check.
    * @param sectionCode The section code of the time slot to check.
    * @param id The ID of the time slot to check.
    */
   function isTimeslotConflicted(
      subjectCode: string,
      sectionCode: string,
      id: string | number
   ) {
      let timeslotsGroupedByDay = getTimeslotsGroupedByDay(
         subjectCode,
         sectionCode
      );

      let target = getTimeslot(subjectCode, sectionCode, id)!;
      let targetFrom = timeToDecimal(target.from);
      let targetTo = timeToDecimal(target.to);

      // Base cases
      if (targetFrom === targetTo) return true;
      let allTimeslots = timeslotsGroupedByDay[target.day];
      if (allTimeslots.length <= 1) return false;

      let intervalTree = new IntervalTree<Timeslot>((data) =>
         circleTimeRange(timeToDecimal(data.from), timeToDecimal(data.to))
      );

      // Insert all timeslots in interval tree except the target timeslot
      for (let timeslot of allTimeslots) {
         if (timeslot.id === target.id) continue;
         intervalTree.insert(timeslot);
      }

      // Check if target has overlap
      let circledTime = circleTimeRange(targetFrom, targetTo);
      let hasOverlap = intervalTree.hasOverlap(circledTime[0], circledTime[1]);
      if (hasOverlap) return true;

      return false;
   }

   /**
    * Checks if there's a conflicted time slot in a section.
    *
    * @param subjectCode The subject code of the section to check.
    * @param sectionCode The code of the section to check.
    */
   function isTimeslotsConflicted(subjectCode: string, sectionCode: string) {
      let timeslots = getSection(subjectCode, sectionCode)!.timeslots;
      for (let [id] of timeslots) {
         if (isTimeslotConflicted(subjectCode, sectionCode, id)) return true;
      }

      return false;
   }

   /**
    * Checks if a section has valid time slots.
    *
    * @param subjectCode The subject code of the section to check.
    * @param sectionCode The code of the section to check.
    */
   function isTimeslotsValid(subjectCode: string, sectionCode: string) {
      return (
         !isTimeslotsEmpty(subjectCode, sectionCode) &&
         !isTimeslotsConflicted(subjectCode, sectionCode)
      );
   }

   // Add dummy data
   addSubject("CS 004", "Networks and communication");
   addSection("CS 004", "CS31S1");
   addSection("CS 004", "CS31S2");

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
      getTimeslotsGroupedByDay,
      isTimeslotsEmpty,
      isTimeslotConflicted,
      isTimeslotsConflicted,
      isTimeslotsValid,
   };
});
