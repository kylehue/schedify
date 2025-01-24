import { IntervalTree } from "my-dsa";
import {
   circleTimeRange,
   decimalToTime,
   formatHours,
   timeToDecimal,
   daysMap,
   daysIndexMap,
} from "@/utils/time";
import type { Section, Subject, Timeslot } from "@/types/types";

interface Pair {
   subject: Subject;
   section: Section;
}

export type Schedule = Pair[];

interface Statistics {
   earliestTime: number;
   earliestTimeFormatted: string;
   latestTime: number;
   latestTimeFormatted: string;
   totalHours: number;
   totalHoursFormatted: string;
   totalHoursWithVacant: number;
   totalHoursWithVacantFormatted: string;
   totalVacantHours: number;
   totalVacantHoursFormatted: string;
   maxVacantHours: number;
   maxVacantHoursFormatted: string;
   totalDays: number;
   daysFormatted: string;
   score: number;
}

export function getStatistics(schedule: Schedule) {
   let earliestTime = 24;
   let latestTime = 0;
   let maxVacantHours = 0;
   let totalVacantHours = 0;
   let totalHours = 0;
   let timeslotsGroupedByDay: Record<keyof typeof daysMap, Timeslot[]> = {
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
   };

   for (const { subject, section } of schedule) {
      let prevTimeslot: Timeslot | null = null;
      // compute earliest/latest
      for (const [_, timeslot] of section.timeslots) {
         let from = timeToDecimal(timeslot.from);
         let to = timeToDecimal(timeslot.to);
         if (from < earliestTime) earliestTime = from;
         if (to > latestTime) latestTime = to;
         timeslotsGroupedByDay[timeslot.day].push(timeslot);
         totalHours += Math.abs(to - from);
         prevTimeslot = timeslot;
      }
   }

   // compute vacant hours
   for (let day in timeslotsGroupedByDay) {
      let timeslots = timeslotsGroupedByDay[day as keyof typeof daysMap];

      if (timeslots.length <= 1) continue; // no vacant

      // sort by start time
      timeslots.sort((a, b) => timeToDecimal(a.from) - timeToDecimal(b.from));

      for (let i = 1; i < timeslots.length; i++) {
         let prevEndTime = timeToDecimal(timeslots[i - 1].to);
         let currentStartTime = timeToDecimal(timeslots[i].from);
         let vacantHours = Math.abs(currentStartTime - prevEndTime);
         totalVacantHours += vacantHours;
         if (vacantHours > maxVacantHours) maxVacantHours = vacantHours;
      }
   }

   let totalHoursWithVacant = totalHours + totalVacantHours;
   let days: (string | undefined)[] = new Array(7);
   for (let _key in timeslotsGroupedByDay) {
      let key = _key as keyof typeof daysMap;
      if (timeslotsGroupedByDay[key].length) {
         days[daysIndexMap[key]] = key[0].toUpperCase();
      }
   }
   let daysFormatted = days.filter((v) => !!v).join("");

   // compute score
   let totalDaysMultiplier = -24;
   let maxVacantHoursMultiplier = -18;
   let earliestTimeMultiplier = 10;
   let totalVacantHoursMultiplier = -8;
   let latestTimeMultiplier = -6;
   let totalHoursWithVacantMultiplier = -2;

   let maxHoursInADay = latestTime - earliestTime;
   let maxHoursInAWeek = maxHoursInADay * days.length;

   let totalDaysNormalized = days.length / 7;
   let maxVacantHoursNormalized = maxVacantHours / maxHoursInADay;
   let earliestTimeNormalized = earliestTime / latestTime;
   let totalVacantHoursNormalized = totalVacantHours / maxHoursInAWeek;
   let latestTimeNormalized = latestTime / 24;
   let totalHoursWithVacantNormalized = totalHoursWithVacant / maxHoursInAWeek;
   let possibleTotal =
      totalDaysMultiplier +
      earliestTimeMultiplier +
      maxVacantHoursMultiplier +
      totalVacantHoursMultiplier +
      latestTimeMultiplier +
      totalHoursWithVacantMultiplier;
   let score =
      1 -
      (totalDaysNormalized * totalDaysMultiplier +
         earliestTimeNormalized * earliestTimeMultiplier +
         maxVacantHoursNormalized * maxVacantHoursMultiplier +
         totalVacantHoursNormalized * totalVacantHoursMultiplier +
         latestTimeNormalized * latestTimeMultiplier +
         totalHoursWithVacantNormalized * totalHoursWithVacantMultiplier) /
         possibleTotal;

   const statistics: Statistics = {
      earliestTime,
      earliestTimeFormatted: decimalToTime(earliestTime),
      latestTime,
      latestTimeFormatted: decimalToTime(latestTime),
      totalHours,
      totalHoursFormatted: formatHours(totalHours),
      maxVacantHours,
      maxVacantHoursFormatted: formatHours(maxVacantHours),
      totalVacantHours,
      totalVacantHoursFormatted: formatHours(totalVacantHours),
      totalHoursWithVacant,
      totalHoursWithVacantFormatted: formatHours(totalHoursWithVacant),
      totalDays: daysFormatted.length,
      daysFormatted,
      score,
   };

   return statistics;
}

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
         if (!sections.length) continue;
         for (const section of sections) {
            // Check if this section has conflict with others
            let hasConflict = false;
            const timeslots =
               subjectSectionTimeslotsMap[
                  createSubjectSectionKey(subject.code, section.code)
               ];

            if (!timeslots.length) continue;

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
