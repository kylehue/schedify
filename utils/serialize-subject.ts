import type { Section, Subject, Timeslot } from "~/types/types";

export function serializeSubjects(subjects: Map<string, Subject>) {
   return Array.from(subjects.entries()).map(([code, subject]) => ({
      c: code,
      d: subject.description,
      e: subject.isEnabled,
      s: Array.from(subject.sections.entries()).map(([secCode, section]) => ({
         c: secCode,
         d: section.description,
         e: section.isEnabled,
         t: Array.from(section.timeslots.entries()).map(([id, timeslot]) => ({
            i: id,
            f: timeslot.from,
            t: timeslot.to,
            e: timeslot.isEnabled,
            d: timeslot.day,
         })),
      })),
   }));
}

export function deserializeSubjects(
   subjects: ReturnType<typeof serializeSubjects>
) {
   let deserialized = new Map<string, Subject>();

   for (let subject of subjects) {
      let newSubject: Subject = {
         code: subject.c,
         isEnabled: subject.e,
         description: subject.d,
         sections: new Map(),
      };

      for (let section of subject.s) {
         let newSection: Section = {
            code: section.c,
            isEnabled: section.e,
            description: section.d,
            timeslots: new Map(),
         };
         for (let timeslot of section.t) {
            let newTimeslot: Timeslot = {
               day: timeslot.d,
               from: timeslot.f,
               to: timeslot.t,
               id: timeslot.i,
               isEnabled: timeslot.e,
            };
            newSection.timeslots.set(newTimeslot.id, newTimeslot);
         }
         newSubject.sections.set(newSection.code, newSection);
      }

      deserialized.set(newSubject.code, newSubject);
   }

   return deserialized;
}
