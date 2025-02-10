   // ▼ ▼ ▼ OVER KILL ▼ ▼ ▼
    // Validate initial and final lines
    // if (
    //   lines[0] !== "BEGIN:VCALENDAR" ||
    //   lines[lines.length - 1] !== "END:VCALENDAR"
    // ) {
    //   throw new Error(
    //     "Invalid ICS file: Must start with BEGIN:VCALENDAR and end with END:VCALENDAR"
    //   );
    // }

    // Check for required header fields
    // const headerFields = new Set(["PRODID:", "VERSION:", "CALSCALE:"]);
    // const foundHeaders = new Set();
    // let currentIndex = 1;

    // while (currentIndex < lines.length && headerFields.size > foundHeaders.size) {
    //   const line = lines[currentIndex];
    //   for (const field of headerFields) {
    //     if (line.startsWith(field)) {
    //       foundHeaders.add(field);
    //       break;
    //     }
    //   }
    //   currentIndex++;
    // }

    // if (headerFields.size !== foundHeaders.size) {
    //   throw new Error(
    //     "Invalid ICS file: Missing required header fields (PRODID, VERSION, or CALSCALE)"
    //   );
    // }

    // Skip VTIMEZONE section if present
    // if (lines[currentIndex] === "BEGIN:VTIMEZONE") {
    //   while (
    //     currentIndex < lines.length &&
    //     lines[currentIndex] !== "END:VTIMEZONE"
    //   ) {
    //     currentIndex++;
    //   }
    //   currentIndex++; // Skip the END:VTIMEZONE line
    // }
};

// const parseRecurringType = (rrule: string): RecurringType => {
//   if (rrule.includes("FREQ=WEEKLY") && rrule.includes("INTERVAL=2")) {
//     return "biweekly";
//   }
//   const freq = rrule.match(/FREQ=(\w+)/)?.[1].toLowerCase();
//   switch (freq) {
//     case "daily":
//       return "daily";
//     case "weekly":
//       return "weekly";
//     case "monthly":
//       return "monthly";
//     case "yearly":
//       return "yearly";
//     default:
//       return "daily";
//   }
// };

// const isValidEvent = (event: Partial<ICSEvent>): boolean => {
//   return Boolean(
//     event.eventName &&
//       event.startTime &&
//       event.endTime &&
//       event.description !== undefined &&
//       event.isRecurring !== undefined &&
//       event.recurringType
//   );
// };

// const formatICSDate = (dateStr: string): string => {
//   // Handle basic date format YYYYMMDD
//   if (dateStr.length === 8) {
//     const year = dateStr.slice(0, 4);
//     const month = dateStr.slice(4, 6);
//     const day = dateStr.slice(6, 8);
//     return `${year}-${month}-${day}`;
//   }
//   // Handle date-time format YYYYMMDDTHHMMSSZ
//   if (dateStr.includes("T")) {
//     try {
//       const date = new Date(
//         parseInt(dateStr.slice(0, 4)),
//         parseInt(dateStr.slice(4, 6)) - 1,
//         parseInt(dateStr.slice(6, 8)),
//         parseInt(dateStr.slice(9, 11)),
//         parseInt(dateStr.slice(11, 13)),
//         parseInt(dateStr.slice(13, 15))
//       );

//       if (isNaN(date.getTime())) {
//         console.error("Invalid date string:", dateStr);
//         return "Invalid date";
//       }

//       return date.toLocaleString();
//     } catch (error) {
//       console.error("Error parsing date:", error);
//       return "Invalid date";
//     }
//   }
//   return dateStr;
// };