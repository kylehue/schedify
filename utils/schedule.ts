import { IntervalTree } from "my-dsa";
import type { Section, Subject, Timeslot } from "~/types/types";

interface Pair {
   subject: Subject;
   section: Section;
}

type Schedule = Pair[];

function createIntervalTree() {
   return new IntervalTree<Timeslot>((data) =>
      circleTimeRange(timeToDecimal(data.from), timeToDecimal(data.to))
   );
}

function createSubjectSectionKey(subjectCode: string, sectionCode: string) {
   return `${subjectCode},${sectionCode}`;
}

export function generateAllPossibleSchedules(subjects: Map<string, Subject>) {
   const possibleSchedules: Schedule[] = [];
   const addedSubjects = new Set<string>();

   // process subjects
   const subjectsArray = Array.from(subjects.values()).filter(
      (v) => v.isEnabled
   );

   if (!subjectsArray.length) return possibleSchedules;

   // process sections
   const subjectSectionsMap: Record<string, Section[]> = {};
   for (const subject of subjectsArray) {
      subjectSectionsMap[subject.code] = Array.from(
         subject.sections.values()
      ).filter((v) => v.isEnabled);
   }

   // process timeslots
   const subjectSectionTimeslotsMap: Record<string, Timeslot[]> = {};
   for (const subjectCode in subjectSectionsMap) {
      for (const section of subjectSectionsMap[subjectCode]) {
         const key = createSubjectSectionKey(subjectCode, section.code);
         subjectSectionTimeslotsMap[key] = Array.from(
            section.timeslots.values()
         ).filter((v) => v.isEnabled);
      }
   }

   const intervalTrees: Record<keyof typeof daysMap, IntervalTree> = {
      mon: createIntervalTree(),
      tue: createIntervalTree(),
      wed: createIntervalTree(),
      thu: createIntervalTree(),
      fri: createIntervalTree(),
      sat: createIntervalTree(),
      sun: createIntervalTree(),
   };

   function dfs(pairs: Pair[] = [], currentIndex = 0) {
      if (currentIndex === subjectsArray.length) {
         possibleSchedules.push(pairs.slice());
         return;
      }

      for (let i = currentIndex; i < subjectsArray.length; i++) {
         const subject = subjectsArray[i];
         if (addedSubjects.has(subject.code)) continue;

         // Find a section
         const sections = subjectSectionsMap[subject.code];
         for (const section of sections) {
            // Check if this section has conflict with others
            let hasConflict = false;
            const timeslots =
               subjectSectionTimeslotsMap[
                  createSubjectSectionKey(subject.code, section.code)
               ];
            for (const timeslot of timeslots) {
               let [from, to] = circleTimeRange(
                  timeToDecimal(timeslot.from),
                  timeToDecimal(timeslot.to)
               );
               if (intervalTrees[timeslot.day].hasOverlap(from, to)) {
                  hasConflict = true;
                  break;
               }
            }

            if (hasConflict) continue;

            // add
            pairs.push({ subject, section });
            addedSubjects.add(subject.code);
            let addedTimeslots: Timeslot[] = [];
            for (let [_, timeslot] of section.timeslots) {
               intervalTrees[timeslot.day].insert(timeslot);
               addedTimeslots.push(timeslot);
            }

            dfs(pairs, currentIndex + 1);

            // backtrack
            pairs.pop();
            addedSubjects.delete(subject.code);
            for (let timeslot of addedTimeslots) {
               intervalTrees[timeslot.day].delete(timeslot);
            }
         }
      }
   }

   dfs();

   return possibleSchedules;
}
