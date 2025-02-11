import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function WeeklyCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Get the first day of the week (Sunday) for the current date
  const getWeekStart = (date) => {
    const dayOfWeek = date.getDay();
    return new Date(date.setDate(date.getDate() - dayOfWeek));
  };

  const weekStart = getWeekStart(new Date(currentDate));

  // Generate array of days for the week
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const day = new Date(weekStart);
    day.setDate(weekStart.getDate() + i);
    return day;
  });

  // Generate time slots
  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0');
    return `${hour}:00`;
  });

  const handlePrevWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const handleSlotClick = (time, date) => {
    setSelectedSlot({ time, date });
  };

  return (
    <div className="w-full bg-white rounded-lg shadow">
      {/* Calendar Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handlePrevWeek}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl font-semibold">
            {formatDate(weekDays[0])} - {formatDate(weekDays[6])}
          </h2>
          <button
            onClick={handleNextWeek}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Day Headers */}
        <div className="grid grid-cols-8 gap-2">
          <div className="text-center font-medium text-gray-500">Time</div>
          {weekDays.map((date) => (
            <div
              key={date.toISOString()}
              className={`text-center ${
                isToday(date) ? 'bg-blue-100 rounded-lg p-1' : ''
              }`}
            >
              <div className="font-medium">
                {new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date)}
              </div>
              <div className="text-sm text-gray-500">{formatDate(date)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Time Slots Grid */}
      <div className="overflow-y-auto max-h-96">
        {timeSlots.map((time) => (
          <div key={time} className="grid grid-cols-8 gap-2 border-b">
            <div className="p-2 text-right text-sm text-gray-500">{time}</div>
            {weekDays.map((date) => {
              const isSelected =
                selectedSlot?.time === time &&
                selectedSlot?.date.toDateString() === date.toDateString();
              
              return (
                <div
                  key={`${date.toISOString()}-${time}`}
                  onClick={() => handleSlotClick(time, date)}
                  className={`p-2 border-l cursor-pointer min-h-12
                    ${isSelected ? 'bg-blue-500 text-white' : 'hover:bg-gray-50'}
                    ${isToday(date) ? 'bg-blue-50' : ''}`}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Selected Slot Display */}
      {selectedSlot && (
        <div className="p-4 border-t text-center text-gray-600">
          Selected: {formatDate(selectedSlot.date)} at {selectedSlot.time}
        </div>
      )}
    </div>
  );
};