import React from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import { ICSCalendar, ICSEvent } from "./types/ics.types";

type EventDetailsProps = {
  selectedEvent: ICSEvent;
  onUpdateEvents?: (events: ICSEvent[]) => void;
};

export default function EventDetails({ selectedEvent, onUpdateEvents }: EventDetailsProps ) {

  // Show Waiting Image when ICSEvent.id === none
  // Else show `selectedEvent`

  const onUpdate = () => {

  }

  return (
    <div className="w-full h-full bg-white rounded-lg shadow p-4 text-amber-950">
      <h1>Event: {selectedEvent.title}</h1>
      <h2>Start Time: {selectedEvent.startTime}</h2>
      <h2>End Time: {selectedEvent.endTime}</h2>
      <h2>Location: {selectedEvent.location}</h2>
      <h2>Description: {selectedEvent.description}</h2>

      <button className="p-2 bg-red-700">Update</button>
    </div>
  );
}
