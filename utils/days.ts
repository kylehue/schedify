export const daysMap = {
   mon: "Monday",
   tue: "Tuesday",
   wed: "Wednesday",
   thu: "Thursday",
   fri: "Friday",
   sat: "Saturday",
   sun: "Sunday",
} as const;

export const days = [
   {
      label: daysMap["mon"],
      key: "mon",
   },
   {
      label: daysMap["tue"],
      key: "tue",
   },
   {
      label: daysMap["wed"],
      key: "wed",
   },
   {
      label: daysMap["thu"],
      key: "thu",
   },
   {
      label: daysMap["fri"],
      key: "fri",
   },
   {
      label: daysMap["sat"],
      key: "sat",
   },
   {
      label: daysMap["sun"],
      key: "sun",
   },
] as const;
