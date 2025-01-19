export interface Subject {
   code: string;
   description?: string;
   isEnabled: boolean;
   sections: Map<string, Section>;
}

export interface Section {
   code: string;
   description?: string;
   isEnabled: boolean;
   timeslots: Map<string | number, Timeslot>;
}

export interface Timeslot {
   id: string | number;
   from: string;
   to: string;
   isEnabled: boolean;
   day: keyof typeof daysMap;
}
