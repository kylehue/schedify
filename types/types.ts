export interface Subject {
   code: string;
   description?: string;
   isEnabled: boolean;
   sections: Record<string, Section>;
}

export interface Section {
   code: string;
   description?: string;
   isEnabled: boolean;
   timeslots: Timeslot[];
}

export interface Timeslot {
   from: number;
   to: number;
   isEnabled: boolean;
}
