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

export const defaultTimeFormat = "hh:mm aa"; // changing this will break the app

/**
 * Converts time in "hh:mm aa" format to a 0-23 decimal value.
 * @param time - The time string in "hh:mm aa" format.
 * @returns The decimal representation of the time.
 */
function timeToDecimal(time: string) {
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
function decimalToTime(decimal: number) {
   const hours24 = Math.floor(decimal);
   const minutes = Math.round((decimal - hours24) * 60);
   const meridian = hours24 >= 12 ? "PM" : "AM";

   let hours12 = hours24 % 12;
   if (hours12 === 0) hours12 = 12;

   return `${hours12.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${meridian}`;
}
