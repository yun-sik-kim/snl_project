import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ICSEvent } from "./types/ics.types";

export default function MonthlyCalendar({
  currentEvent,
  onEventClick,
  eventList = [],
  // onEventsChange,
}: {
  currentEvent: ICSEvent;
  onEventClick: (event: ICSEvent) => void;
  eventList: ICSEvent[];
  // onEventsChange?: (events: ICSEvent[]) => void;
}) {
  const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const selectedEventDate = new Date(currentEvent.startTime);
  const daysInMonth = new Date(selectedEventDate.getFullYear(), selectedEventDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(selectedEventDate.getFullYear(), selectedEventDate.getMonth(), 1).getDay();

  // Enhanced helper function to get events for a specific day
  const getEventsForDay = (day: number): ICSEvent[] => {
    // Create a target date object for the day we want to check
    const targetDate = new Date(selectedEventDate.getFullYear(), selectedEventDate.getMonth(), day);
    // Set time to beginning of day to ensure consistent date comparison
    targetDate.setHours(0, 0, 0, 0);
    
    // Count the events that fall on this day using filter and length
    return eventList.filter(event => {
        const eventStart = new Date(event.startTime);
        const eventEnd = event.endTime ? new Date(event.endTime) : eventStart;
        
        // Create clean copies of dates for comparison, removing time components
        const compareStart = new Date(eventStart);
        compareStart.setHours(0, 0, 0, 0);
        const compareEnd = new Date(eventEnd);
        compareEnd.setHours(0, 0, 0, 0);
        
        // Check if target date falls within event's date range
        return targetDate >= compareStart && targetDate <= compareEnd;
    }); 
  };

  const handlePrevMonth = () => {
    const newSelectedDate = new Date(
      selectedEventDate.getFullYear(),
      selectedEventDate.getMonth() - 1, // Prev month
      1 // First day of month
    );
    
    // Update selected event with new date
    onEventClick({
      ...currentEvent,
      startTime: newSelectedDate.toISOString(),
    });
  };

  const handleNextMonth = () => {
    const newSelectedDate = new Date(
      selectedEventDate.getFullYear(),
      selectedEventDate.getMonth() + 1,
      1
    );
    
    onEventClick({
      ...currentEvent,
      startTime: newSelectedDate.toISOString(),
    });
  };

  // const handleDateClick = (day: number) => {
  //   const selectedDate = new Date(selectedEventDate.getFullYear(), selectedEventDate.getMonth(), day);
  //   const dayEvents = getEventsForDay(day);
  //   console.log(day)
  //   // If there are events on the selected day, select the first one
  //   // Otherwise, update the current selected event's date
  //   if (dayEvents.length > 0) {
  //     onEventClick(dayEvents[0]);
  //   } else {
  //     onEventClick({
  //       ...currentEvent,
  //       startTime: selectedDate.toISOString(),
  //     });
  //   }

  //   console.log(currentEvent);
  // };

  const handleDateClick = (day: number) => {
    const selectedDate = new Date(selectedEventDate.getFullYear(), selectedEventDate.getMonth(), day);
    // Set the time to noon to avoid timezone issues
    selectedDate.setHours(12, 0, 0, 0);
    console.log(selectedDate);
    // const dayEvents = getEventsForDay(day);
    
    // if (dayEvents.length > 0) {
    //     onEventClick(dayEvents[0]);
    // } else {
        onEventClick({
            ...currentEvent,
            startTime: selectedDate.toISOString(),
        });
    // }
    console.log(day)
    console.log(currentEvent);
};

  const renderDays = () => {
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="w-12 h-12" />
      );
    }

    // Render calendar days
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(selectedEventDate.getFullYear(), selectedEventDate.getMonth(), day);

      const isSelected = (() => {
          // Create Date objects for both dates
          const eventDate = new Date(currentEvent?.startTime);
          // Reset both dates to start of day to compare only the date portion
          eventDate.setHours(0, 0, 0, 0);
          currentDate.setHours(0, 0, 0, 0);
          
          // Compare the timestamps
          return eventDate.getTime() === currentDate.getTime();
      })();      
      const isToday = new Date().toDateString() === currentDate.toDateString();
      const dayEvents = getEventsForDay(day);
      const hasEvents = dayEvents.length > 0;

      days.push(
        <div
            key={day}
            onClick={() => handleDateClick(day)}
            className={`w-12 h-12 border border-gray-100 flex items-center justify-center cursor-pointer relative
             ${isSelected ? "bg-blue-500 text-white" : ""}
             ${isToday && !isSelected ? "bg-red-400" : ""}
             ${hasEvents && !isSelected ? "bg-red-100" : ""}
             hover:bg-gray-100 transition-colors`}
            title={hasEvents ? `${dayEvents.length} event(s)` : "No events"}
        >
            <span>{day}</span>
            {hasEvents && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    {dayEvents.length > 1 ? (
                        <span className="text-xs font-medium text-red-600">
                            {dayEvents.length}
                        </span>
                    ) : (
                        <div className="w-1 h-1 rounded-full bg-red-500"></div>
                    )}
                </div>
            )}
        </div>
    );
    }
    return days;
  };

  return (
    <div className="w-full h-full bg-white rounded-lg shadow p-4 text-amber-950">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevMonth}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold">
          {MONTH_NAMES[selectedEventDate.getMonth()]} {selectedEventDate.getFullYear()}
        </h2>
        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-7">
        {DAY_NAMES.map((day) => (
          <div key={day} className="text-center font-medium text-gray-600">
            {day}
          </div>
        ))}
        {renderDays()}
      </div>

      {/* <div className="grid grid-cols-7 gap-1">{renderDays()}</div> */}
    </div>
  );
}