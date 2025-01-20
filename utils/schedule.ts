import type { Subject, Timeslot } from "~/types/types";

interface Pair {
   subjectCode: string;
   sectionCode: string;
}

type Schedule = Pair[];

/*
A sample schedule should look like this:
[
   {
      subjectCode: "",
      sectionCode: "",
   },
   {
      subjectCode: "",
      sectionCode: "",
   },
   {
      subjectCode: "",
      sectionCode: "",
   },
   ...
]
*/

export function generateAllPossibleSchedules(subjects: Map<string, Subject>) {
   const possibleSchedules: Schedule[] = [];
   
}
