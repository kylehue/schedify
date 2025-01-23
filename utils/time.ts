export const daysMap = {
   mon: "Monday",
   tue: "Tuesday",
   wed: "Wednesday",
   thu: "Thursday",
   fri: "Friday",
   sat: "Saturday",
   sun: "Sunday",
} as const;

export const daysIndexMap = {
   mon: 0,
   tue: 1,
   wed: 2,
   thu: 3,
   fri: 4,
   sat: 5,
   sun: 6,
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

export const defaultTimeFormat = "hh:mm aa"; // changing this will break the app

/**
 * Converts time in "hh:mm aa" format to a 0-23 decimal value.
 * @param time - The time string in "hh:mm aa" format.
 * @returns The decimal representation of the time.
 */
export function timeToDecimal(time: string) {
   const [timePart, meridian] = time.split(" ");
   let [hours, minutes] = timePart.split(":").map(Number);

   if (meridian === "PM" && hours !== 12) hours += 12;
   if (meridian === "AM" && hours === 12) hours = 0;

   return hours + minutes / 60;
}

/**
 * Converts a decimal value back to "hh:mm aa" format.
 * @param decimal - The decimal representation of the time.
 * @returns The time in "hh:mm aa" format.
 */
export function decimalToTime(decimal: number) {
   const hours24 = Math.floor(decimal);
   const minutes = Math.round((decimal - hours24) * 60);
   const meridian = hours24 >= 12 ? "PM" : "AM";

   let hours12 = hours24 % 12;
   if (hours12 === 0) hours12 = 12;

   return `${hours12.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${meridian}`;
}

/**
 * Adjusts the time range to ensure it circles correctly when `from` > `to`.
 * @param from - The starting time in 0-23 format.
 * @param to - The ending time in 0-23 format.
 * @returns A tuple representing the adjusted time range.
 */
export function circleTimeRange(from: number, to: number): [number, number] {
   if (from >= to) {
      to += 24;
   }

   return [from, to];
}

/**
 * Formats a decimal number representing hours into a more readable time.
 *
 * @param hours The decimal number representing hours.
 */
export function formatHours(hours: number): string {
   hours = Math.abs(hours);
   const totalMinutes = Math.round(hours * 60);
   const h = Math.floor(totalMinutes / 60);
   const m = totalMinutes % 60;

   const hoursPart = h > 0 ? `${h}h` : "";
   const minutesPart = m > 0 ? `${m}m` : "";

   return [hoursPart, minutesPart].filter(Boolean).join(" ").trim() || "none";
}

/**
 * Parses a formatted time string back into a decimal number representing hours.
 *
 * @param formattedTime The formatted time string.
 */
export function parseHours(formattedTime: string): number {
   if (!formattedTime || formattedTime.trim() === "none") return 0;

   let totalMinutes = 0;

   const regex = /(\d+)h|(\d+)m/g;
   let match;
   while ((match = regex.exec(formattedTime)) !== null) {
      if (match[1]) {
         totalMinutes += parseInt(match[1]) * 60;
      }
      if (match[2]) {
         totalMinutes += parseInt(match[2]);
      }
   }

   return totalMinutes / 60;
}
