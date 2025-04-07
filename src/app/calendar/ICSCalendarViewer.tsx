import { useState } from "react";
import type { ICSCalendar, ICSEvent } from "./types/ics.types";
import { File } from "lucide-react";
import axios from "axios";
import WeeklyCalendar from "./WeeklyCalendar";
import MonthlyCalendar from "./MonthlyCalendar";
import EventDetails from "./EventDetails";

type UploadResponse = {
  success: boolean;
  message: string;
  url: string;
};

const sampleEvents: ICSEvent[] = [
  {
    // This represents a full-day conference spanning multiple days
    id: "evt-20250215-conf",
    title: "Web Development Conference 2025",
    startTime: "2025-02-15T09:00:00Z",
    endTime: "2025-02-17T17:00:00Z",
    location: "Melbourne Convention Center",
    description:
      "Annual web development conference featuring latest trends and technologies",
    createdAt: "2025-01-01T00:00:00Z",
    timeZone: "Australia/Melbourne",
  },
  {
    // This represents a regular team meeting - a shorter, single-day event
    id: "evt-20250210-meet",
    title: "Team Planning Meeting",
    startTime: "2025-02-10T14:30:00Z",
    endTime: "2025-02-10T16:00:00Z",
    location: "Meeting Room 3",
    description: "Monthly team planning session",
    createdAt: "2025-02-01T00:00:00Z",
    timeZone: "Australia/Melbourne",
  },
  {
    // This represents a minimal event with only required fields
    // Testing how our calendar handles incomplete event data
    id: "evt-20250220-deadline",
    startTime: "2025-02-20T12:00:00Z",
    createdAt: "2025-02-05T00:00:00Z",
  },
];

export default function ICSCalendarViewer() {
  const [icsEvents, setIcsEvents] = useState<ICSEvent[]>();
  const [currentEvent, setCurrentEvent] = useState<ICSEvent>({
    id: "",
    startTime: new Date().toISOString(),
    createdAt: "",
  });
  // const [instructions, setInstructions] = useState<string>("Please drop an ICS file");
  const [isDragging, setIsDragging] = useState<boolean>(false); // purly for animation

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
    try {
      e.preventDefault();
      setIsDragging(false);
      setIsLoading(true); // Add loading state

      // Drop data validation
      const file = e.dataTransfer.files[0];
      if (!file) {
        throw new Error("No file provided");
      }

      // const result = await sendUserData(file);
      // if (result.success) {
      //   console.log("Upload successful:", result.url);
      // } else {
      //   console.error("Upload failed:", result.message);
      // }

      // // wait server to send modified data
      // const response = await axios.get(result.url);
      // if (!response.data) {
      //   throw new Error("Failed to retrieve processed calendar data");
      // }

      // // Parse the calendar data
      // const parsedCalendar = parseICSContent(response.data);

      // Update application state with the new calendar data
      // setIcsEvents(parsedCalendar);
      setIcsEvents(sampleEvents);

      setSuccess(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const sendUserData = async (file: File): Promise<UploadResponse> => {
    const MAX_SIZE = 2 * 1024 * 1024; // 2MB

    try {
      // Add size validation
      if (file.size > MAX_SIZE) {
        throw new Error("File size exceeds 2MB limit");
      }
      // Type validation
      if (!file.name.endsWith(".ics")) {
        throw new Error("Invalid file type. Please upload an .ics file");
      }

      // Read the file as text
      const fileContent = await file.text();
      // Send to server using Axios
      const response = await axios.post("/api/upload", fileContent, {
        // FIX: endpoint later
        headers: {
          "Content-Type": "text/calendar",
        },
        // Add upload progress tracking
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) /
              (progressEvent.total ?? progressEvent.loaded)
          );
          console.log(`Upload Progress: ${percentCompleted}%`);
        },
      });

      return {
        success: true,
        message: "File uploaded successfully",
        url: response.data.url,
      };
    } catch (error) {
      // Handle Axios errors
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        console.error("Axios error:", errorMessage);

        return {
          url: "FIX LATER", // FIX:
          success: false,
          message: errorMessage,
        };
      }

      // Handle other errors
      console.error("Upload error:", error);
      return {
        url: "FIX LATER", // FIX:
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      };
    }
  };

  // const parseICSContent = (content: string): ICSCalendar => {
  //   let parsedCalendar: ICSCalendar = {
  //     PRODID: "",
  //     VERSION: "",
  //     CALSCALE: "",
  //     VEVENTS: [],
  //   };

  //   return parsedCalendar;
  // };

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      {!icsEvents ? (
        <div
          className={`flex flex-col gap-4 border-2 border-dashed justify-center items-center rounded-lg p-8 text-center mb-4 transition-colors
              ${
                isDragging
                  ? "border-blue-500 bg-blue-50 text-CUSTOM_BLACK"
                  : "border-gray-300"
              }
              ${!icsEvents ? "h-40" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <File size={48} strokeWidth={1} />
          <p className="text-lg mb-2">Drag and drop your ICS file here!</p>
        </div>
      ) : (
        <div className="w-96 h-3/4 grid grid-cols-10 gap-4 lg:w-[1280px] sm:w-[640px]">
          {/* {Array.from({ length: 25 }, (_, index) => (
            <div key={index} className="w-full h-full bg-slate-100"></div>
          ))} */}
          <div className="row-span-4 col-span-2 bg-orange-900 ">EventAdder</div>
          <div className="row-span-4 col-span-5">
            <WeeklyCalendar
              selectedEvent={currentEvent}
              onEventSelect={setCurrentEvent}
              events={icsEvents}
              onEventsChange={setIcsEvents}
            />
          </div>
          <div className="row-span-2 col-span-3 bg-cyan-900 ">
            <MonthlyCalendar
              currentEvent={currentEvent}
              onEventClick={setCurrentEvent}
              eventList={icsEvents}
              // onEventsChange={setIcsEvents}
            />
          </div>
          <div className="row-span-2 col-span-3">
            <EventDetails
              selectedEvent={currentEvent}
              onUpdateEvents={setIcsEvents}
            />
          </div>
        </div>
      )}
    </div>
  );
}
