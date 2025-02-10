import { useState } from "react";
import type { ICSCalendar, VEvent, RecurringType } from "./types/ics";

// TODO: need to add VTIMEZONE feature later

export default function ICSCalendarViewer() {
  const [calendar, setCalendar] = useState<VEvent[]>([]);
  // const [instructions, setInstructions] = useState<string>("Please drop an ICS file");
  const [isDragging, setIsDragging] = useState<boolean>(false); // purly for animation
  const [currentDate, setCurrentDate] = useState(new Date());

  // Calendar navigation functions
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (
    e: React.DragEvent<HTMLDivElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsDragging(false);

    const fileList: FileList = e.dataTransfer.files;
    const file: File | undefined = fileList[0];
    if (file) {
      if (!file.name.toLowerCase().endsWith(".ics")) {
        throw new Error("Please give me .ics file UWU.. or file is currupted.");
      }
      const text = await file.text();
      parseICSContent(text);
    }
  };

  const parseICSContent = (content: string): void => {
    // Split content into lines and remove empty lines and whitespace
    const lines = content.split("\n").map((line) => line.trim()).filter((line) => line);
    const parsedEvents: VEvent[] = [];
    let currentEvent: Partial<VEvent> = {};
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line === 'BEGIN:VEVENT') {
        currentEvent = {};
      }
      else if (line === 'END:VEVENT') {
        parsedEvents.push(currentEvent as VEvent);
      }
      else if (line.startsWith('DTSTAMP:')) {
        currentEvent.DTSTAMP = line.substring(8);
      }
      else if (line.startsWith('DTSTART;')) {
        const dtStartParts = line.split(':');
        currentEvent.DTSTART = dtStartParts[1];
      }
      else if (line.startsWith('DTEND;')) {
        const dtEndParts = line.split(':');
        currentEvent.DTEND = dtEndParts[1];
      }
      else if (line.startsWith('SUMMARY:')) {
        currentEvent.SUMMARY = line.substring(8);
      }
      else if (line.startsWith('LOCATION:')) {
        currentEvent.LOCATION = line.substring(9);
      }
      else if (line.startsWith('DESCRIPTION:')) {
        currentEvent.DESCRIPTION = line.substring(12);
      }
      else if (line.startsWith('UID:')) {
        currentEvent.UID = line.substring(4);
      }
    }

    // console.log('Parsed Events:', parsedEvents);
    setCalendar(parsedEvents);
  }
 

  return (
    <div className="flex flex-col w-96 items-center">
      <h2 className="text-2xl font-semibold space-x-4 pb-2">Calendar Events</h2>
      <div>
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center mb-4 transition-colors
              ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"}
              ${calendar.length === 0 ? "h-40" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {calendar.length === 0 ? (
            <div className="text-gray-500">
              <p className="text-lg mb-2">Drag and drop your ICS file here!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* {calendar.map((event, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow border border-gray-200"
                >
                  <h3 className="font-semibold text-lg mb-2">
                    {event.eventName}
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>
                      <strong>Start:</strong> {event.startTime}
                    </p>
                    <p>
                      <strong>End:</strong> {event.endTime}
                    </p>
                    {event.isRecurring && (
                      <p>
                        <strong>Recurring:</strong> {event.recurringType}
                      </p>
                    )}
                    <p>
                      <strong>Description:</strong> {event.description}
                    </p>
                  </div>
                </div>
              ))} */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
