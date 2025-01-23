import { generateAllPossibleSchedules } from "@/utils/schedule";

self.onmessage = (message) => {
   let subjects = deserializeSubjects(message.data);
   const result = generateAllPossibleSchedules(subjects);
   self.postMessage(result);
};
