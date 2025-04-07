// import React from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { ICSCalendar, ICSEvent } from "./types/ics.types";

// export default function WeeklyCalendar({
//   selectedEvent,
//   onEventSelect,
//   calendar,
//   onCalendarChange,
// }: {
//   selectedEvent: ICSEvent;
//   onEventSelect: (event: ICSEvent) => void;
//   calendar?: ICSCalendar;
//   onCalendarChange?: (event: ICSCalendar) => void;
// }) {
//  const now = new Date(selectedEvent.startTime);

//  const formatDate = (date: Date) => {
//    return new Intl.DateTimeFormat('en-US', {
//      month: 'short',
//      day: 'numeric'
//    }).format(date);
//  };

//  const isToday = (date: Date) => {
//    const today = new Date();
//    return date.toDateString() === today.toDateString();
//  };

//  const getWeekStart = (date: Date) => {
//    const dayOfWeek = date.getDay();
//    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - dayOfWeek);
//  };

//  const weekStart = getWeekStart(now);

//  const weekDays = Array.from({ length: 7 }, (_, i) => {
//    return new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + i);
//  });

//  const timeSlots = Array.from({ length: 24 }, (_, i) => {
//    return `${i.toString().padStart(2, "0")}:00`;
//  });

//  const handlePrevWeek = () => {
//    onEventSelect({
//      ...selectedEvent,
//      startTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7).toISOString(),
//    });
//  };

//  const handleNextWeek = () => {
//    onEventSelect({
//      ...selectedEvent,
//      startTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7).toISOString(),
//    });
//  };

//  const handleSlotClick = (time: string, date: Date) => {
//    const [hours] = time.split(":");
//    const newDate = new Date(date);
//    newDate.setHours(parseInt(hours));
//    onEventSelect({
//      ...selectedEvent,
//      startTime: newDate.toISOString(),
//    });
//  };

//  return (
//    <div className="w-full h-full bg-white rounded-lg shadow">
//      <div className="p-4 border-b">
//        <div className="flex items-center justify-between mb-4">
//          <button onClick={handlePrevWeek} className="p-2 hover:bg-gray-100 rounded-full">
//            <ChevronLeft className="w-5 h-5" />
//          </button>
//          <h2 className="text-xl font-semibold">
//            {formatDate(weekDays[0])} - {formatDate(weekDays[6])}
//          </h2>
//          <button onClick={handleNextWeek} className="p-2 hover:bg-gray-100 rounded-full">
//            <ChevronRight className="w-5 h-5" />
//          </button>
//        </div>

//        <div className="grid grid-cols-8 gap-2">
//          <div className="text-center font-medium text-gray-500">Time</div>
//          {weekDays.map((date) => (
//            <div
//              key={date.toISOString()}
//              className={`text-center ${isToday(date) ? "bg-blue-100 rounded-lg p-1" : ""}`}
//            >
//              <div className="font-medium">
//                {new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date)}
//              </div>
//              <div className="text-sm text-gray-500">{formatDate(date)}</div>
//            </div>
//          ))}
//        </div>
//      </div>

//      <div className="overflow-y-auto max-h-96">
//        {timeSlots.map((time) => (
//          <div key={time} className="grid grid-cols-8 gap-2 border-b">
//            <div className="p-2 text-right text-sm text-gray-500">{time}</div>
//            {weekDays.map((date) => {
//              const slotDate = new Date(date);
//              slotDate.setHours(parseInt(time));
//              const isSelected = selectedEvent.startTime === slotDate.toISOString();

//              return (
//                <div
//                  key={`${date.toISOString()}-${time}`}
//                  onClick={() => handleSlotClick(time, date)}
//                  className={`p-2 border-l cursor-pointer min-h-12
//                    ${isSelected ? "bg-blue-500 text-white" : "hover:bg-gray-50"}
//                    ${isToday(date) ? "bg-blue-50" : ""}`}
//                />
//              );
//            })}
//          </div>
//        ))}
//      </div>
//    </div>
//  );
// }

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ICSEvent } from "./types/ics.types";

export default function WeeklyCalendar({
  selectedEvent,
  onEventSelect,
  events = [],
  onEventsChange,
}: {
  selectedEvent: ICSEvent;
  onEventSelect: (event: ICSEvent) => void;
  events: ICSEvent[];
  onEventsChange?: (events: ICSEvent[]) => void;
}) {
  const now = new Date(selectedEvent.startTime);

  // Helper function to format dates consistently
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  // Helper function to identify today's date
  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  // Helper function to get the start of the week
  const getWeekStart = (date: Date) => {
    const dayOfWeek = date.getDay();
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - dayOfWeek);
  };

  // Helper function to check if an event occurs in a specific time slot
  const getEventsForTimeSlot = (date: Date, hour: number) => {
    const slotStart = new Date(date);
    slotStart.setHours(hour, 0, 0, 0);
    const slotEnd = new Date(date);
    slotEnd.setHours(hour, 59, 59, 999);

    return events.filter(event => {
      const eventStart = new Date(event.startTime);
      const eventEnd = event.endTime ? new Date(event.endTime) : new Date(eventStart);
      eventEnd.setHours(eventEnd.getHours() + 1); // Default 1-hour duration if no end time

      return eventStart <= slotEnd && eventEnd >= slotStart;
    });
  };

  // Get current week's days
  const weekStart = getWeekStart(now);
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    return new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + i);
  });

  // Generate time slots for the day
  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    return `${i.toString().padStart(2, "0")}:00`;
  });

  // Navigation handlers with event filtering
  const handlePrevWeek = () => {
    const newDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
    onEventSelect({
      ...selectedEvent,
      startTime: newDate.toISOString().replace(/\.\d{3}/, ''),
    });

    if (onEventsChange) {
      const visibleEvents = filterEventsForWeek(newDate);
      onEventsChange(visibleEvents);
    }
  };

  const handleNextWeek = () => {
    const newDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
    onEventSelect({
      ...selectedEvent,
      startTime: newDate.toISOString().replace(/\.\d{3}/, ''),
    });

    if (onEventsChange) {
      const visibleEvents = filterEventsForWeek(newDate);
      onEventsChange(visibleEvents);
    }
  };

  // Helper function to filter events for the current week
  const filterEventsForWeek = (date: Date) => {
    const start = getWeekStart(date);
    const end = new Date(start);
    end.setDate(end.getDate() + 7);

    return events.filter(event => {
      const eventStart = new Date(event.startTime);
      const eventEnd = event.endTime ? new Date(event.endTime) : new Date(eventStart);
      return eventStart <= end && eventEnd >= start;
    });
  };

  // Handle time slot selection
  const handleSlotClick = (time: string, date: Date) => {
    const [hours] = time.split(":");
    const newDate = new Date(date);
    newDate.setHours(parseInt(hours));
    
    // Check if there are any events in this time slot
    const slotEvents = getEventsForTimeSlot(date, parseInt(hours));
    
    if (slotEvents.length > 0) {
      // If there are events, select the first one
      onEventSelect(slotEvents[0]);
    } else {
      // If no events, update the selected event's time
      onEventSelect({
        ...selectedEvent,
        startTime: newDate.toISOString().replace(/\.\d{3}/, ''),
      });
    }
  };

  return (
    <div className="w-full h-full bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4 text-CUSTOM_BLACK">
          <button onClick={handlePrevWeek} className="p-2 hover:bg-gray-100 rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl font-semibold">
            {formatDate(weekDays[0])} - {formatDate(weekDays[6])}
          </h2>
          <button onClick={handleNextWeek} className="p-2 hover:bg-gray-100 rounded-full">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-8 gap-2">
          <div className="text-center font-medium text-gray-500">Time</div>
          {weekDays.map((date) => (
            <div
              key={date.toISOString()}
              className={`text-center ${isToday(date) ? "bg-blue-100 rounded-lg p-1" : ""}`}
            >
              <div className="font-medium text-CUSTOM_BLACK">
                {new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date)}
              </div>
              <div className="text-sm text-gray-500">{formatDate(date)}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-y-auto max-h-96">
        {timeSlots.map((time) => (
          <div key={time} className="grid grid-cols-8 gap-2 border-b">
            <div className="p-2 text-right text-sm text-gray-500">{time}</div>
            {weekDays.map((date) => {
              const [hours] = time.split(":");
              const slotEvents = getEventsForTimeSlot(date, parseInt(hours));
              const hasEvents = slotEvents.length > 0;
              const isSelected = slotEvents.some(event => event.id === selectedEvent.id);

              return (
                <div
                  key={`${date.toISOString()}-${time}`}
                  onClick={() => handleSlotClick(time, date)}
                  className={`p-2 border-l cursor-pointer min-h-12 relative
                    ${isSelected ? "bg-blue-500 text-white" : "hover:bg-gray-50"}
                    ${isToday(date) ? "bg-blue-50" : ""}`}
                >
                  {hasEvents && (
                    <div className="absolute inset-0 p-1">
                      {slotEvents.map(event => (
                        <div
                          key={event.id}
                          className={`text-xs truncate rounded px-1 py-0.5 mb-1
                            ${isSelected ? "bg-blue-600" : "bg-red-100 text-red-800"}`}
                          title={event.title || "Untitled Event"}
                        >
                          {event.title || "Untitled Event"}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}