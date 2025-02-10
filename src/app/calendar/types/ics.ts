// VCALENDAR
export type ICSCalendar = { 
  PRODID: string;
  VERSION: string;
  CALSCALE: string;

  VTIMEZONE: VTimeZone;
  
  VEVENTS: VEvent[];
}

export type VTimeZone = {
  TZID: string;
  LAST_MODIFIED: string;
  TZURL: string;
  X_LIC_LOCATION: string;

  STANDARD: Standard;

  DAYLIGHT: DayLight;
}

type Standard = {
  TZNAME: string;
  TZOFFSETFROM: string;
  TZOFFSETTO: string;
  DTSTART: string;
  RRULE: string; // NOTE original is: FREQ=YEARLY;BYMONTH=4;BYDAY=1SU
}

type DayLight = {
  TZNAME: string;
  TZOFFSETFROM: string;
  TZOFFSETTO: string;
  DTSTART: string;
  RRULE: string; // NOTE original is: RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU
}


export type VEvent = {
  DTSTAMP: string;
  DTSTART: string; // NOTE original is: DTSTART;TZID=Australia/Melbourne:20250203T143000 
  DTEND: string; // NOTE original is: DTEND;TZID=Australia/Melbourne:20250203T163000
  SUMMARY: string;
  LOCATION: string;
  DESCRIPTION: string;
  UID:string;

  // sequence?: number;
  isRecurring?: boolean;
  recurringType?: RecurringType;
}

export type RecurringType = 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'yearly';




// // Types for calendar data structure
// type CalendarEvent = {
//   id: string;                 // UID from iCal
//   title: string;             // SUMMARY
//   startTime: string;         // DTSTART in ISO format
//   endTime: string;           // DTEND in ISO format
//   location?: string;         // LOCATION
//   description?: string;      // DESCRIPTION
//   createdAt: string;         // DTSTAMP in ISO format
//   type?: string;             // Custom field derived from SUMMARY or DESCRIPTION
//   recurrence?: RecurrenceRule;
// }

// type RecurrenceRule = {
//   frequency: 'YEARLY' | 'MONTHLY' | 'WEEKLY' | 'DAILY';
//   byMonth?: number;
//   byDay?: string;
//   until?: string;
//   count?: number;
//   interval?: number;
// }

// type CalendarTimezone = {
//   id: string;                // TZID
//   displayName: string;       // TZNAME
//   standard: TimezoneRule;
//   daylight?: TimezoneRule;
// }

// type TimezoneRule = {
// name: string;              // TZNAME
// offsetFrom: string;        // TZOFFSETFROM
// offsetTo: string;          // TZOFFSETTO
// startDate: string;         // DTSTART
// recurrence?: RecurrenceRule;
// }

// type Calendar = {
//   productId: string;
//   version: string;
//   timezone: CalendarTimezone;
//   events: CalendarEvent[];
// }