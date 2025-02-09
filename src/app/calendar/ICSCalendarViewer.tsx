import { useState } from "react";
import type { ICSEvent, RecurringType } from "./types/ics";

export default function ICSCalendarViewer() {
    const [ics, setIcs] = useState<ICSEvent[]>([]);
    const [isDragging, setIsDragging] = useState<boolean>(false);


  
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
      e.preventDefault();
      setIsDragging(true);
    };
  
    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>): void => {
      e.preventDefault();
      setIsDragging(false);
    };
  
    const handleDrop = async (e: React.DragEvent<HTMLDivElement>): Promise<void> => {
      e.preventDefault();
      setIsDragging(false);
  
      const fileList: FileList = e.dataTransfer.files;
      const file: File | undefined = fileList[0];
      if (file) {
        if (!file.name.toLowerCase().endsWith('.ics')) {
          alert('Please drop an ICS file');
          return;
        }
        const text = await file.text();
        parseICSContent(text);
      }
    };
  
    const parseICSContent = (content: string): void => {
      const parsedEvents: ICSEvent[] = [];
      const lines = content.split('\n');
      let currentEvent: Partial<ICSEvent> | null = null;
  
      for (let line of lines) {
        line = line.trim();
        
        if (line === 'BEGIN:VEVENT') {
          currentEvent = {
            eventName: '',
            stampTime: '',
            startTime: '',
            endTime: '',
            description: '',
            isRecurring: false,
            recurringType: 'daily' // default value
          };
        } else if (line === 'END:VEVENT') {
          if (currentEvent && isValidEvent(currentEvent)) {
            parsedEvents.push(currentEvent as ICSEvent);
          }
          currentEvent = null;
        } else if (currentEvent) {
          const [key, ...values] = line.split(':');
          const value = values.join(':').replace(/\\/g, '');
          
          switch (key) {
            case 'SUMMARY':
              currentEvent.eventName = value;
              break;
            case 'DTSTAMP':
              currentEvent.stampTime = formatICSDate(value);
              break;
            case 'DTSTART':
              currentEvent.startTime = formatICSDate(value);
              break;
            case 'DTEND':
              currentEvent.endTime = formatICSDate(value);
              break;
            case 'DESCRIPTION':
              currentEvent.description = value;
              break;
            case 'RRULE':
              currentEvent.isRecurring = true;
              currentEvent.recurringType = parseRecurringType(value);
              break;
          }
        }
      }
  
      setEvents(parsedEvents);
    };

    const parseRecurringType = (rrule: string): RecurringType => {
      if (rrule.includes('FREQ=WEEKLY') && rrule.includes('INTERVAL=2')) {
        return 'biweekly';
      }
      const freq = rrule.match(/FREQ=(\w+)/)?.[1].toLowerCase();
      switch (freq) {
        case 'daily': return 'daily';
        case 'weekly': return 'weekly';
        case 'monthly': return 'monthly';
        case 'yearly': return 'yearly';
        default: return 'daily';
      }
    };

    const isValidEvent = (event: Partial<ICSEvent>): boolean => {
      return Boolean(
        event.eventName &&
        event.startTime &&
        event.endTime &&
        event.description !== undefined &&
        event.isRecurring !== undefined &&
        event.recurringType
      );
    };
  
    const formatICSDate = (dateStr: string): string => {
      // Handle basic date format YYYYMMDD
      if (dateStr.length === 8) {
        const year = dateStr.slice(0, 4);
        const month = dateStr.slice(4, 6);
        const day = dateStr.slice(6, 8);
        return `${year}-${month}-${day}`;
      }
      // Handle date-time format YYYYMMDDTHHMMSSZ
      if (dateStr.includes('T')) {
        try {
          const date = new Date(
            parseInt(dateStr.slice(0, 4)),
            parseInt(dateStr.slice(4, 6)) - 1,
            parseInt(dateStr.slice(6, 8)),
            parseInt(dateStr.slice(9, 11)),
            parseInt(dateStr.slice(11, 13)),
            parseInt(dateStr.slice(13, 15))
          );
          
          if (isNaN(date.getTime())) {
            console.error('Invalid date string:', dateStr);
            return 'Invalid date';
          }
          
          return date.toLocaleString();
        } catch (error) {
          console.error('Error parsing date:', error);
          return 'Invalid date';
        }
      }
      return dateStr;
    };
  
    return (
      <div className="flex flex-col w-96 items-center">
        <h2 className="text-2xl font-semibold space-x-4 pb-2">
          Calendar Events
        </h2>
        <div>
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center mb-4 transition-colors
              ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
              ${events.length === 0 ? 'h-40' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {events.length === 0 ? (
              <div className="text-gray-500">
                <p className="text-lg mb-2">Drag and drop your ICS file here!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow border border-gray-200"
                  >
                    <h3 className="font-semibold text-lg mb-2">{event.eventName}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p><strong>Start:</strong> {event.startTime}</p>
                      <p><strong>End:</strong> {event.endTime}</p>
                      {event.isRecurring && (
                        <p><strong>Recurring:</strong> {event.recurringType}</p>
                      )}
                      <p><strong>Description:</strong> {event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }