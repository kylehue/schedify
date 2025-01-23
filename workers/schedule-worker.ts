import { generateAllPossibleSchedules } from "@/utils/schedule";
import { deserializeSubjects } from "@/utils/serialize-subject";

self.onmessage = (message) => {
   let subjects = deserializeSubjects(message.data);
   const result = generateAllPossibleSchedules(subjects);
   self.postMessage(result);
};
