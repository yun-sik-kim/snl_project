"use client";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar)


const myEventsList = [
  {
    start: new Date(2023, 3, 13, 10, 0),
    end: new Date(2023, 3, 13, 12, 0),
    title: "Meeting",
  },
  {
    start: new Date(2023, 3, 14, 14, 0),
    end: new Date(2023, 3, 14, 15, 0),
    title: "Lunch",
  },
];

function MyCalendar() {
  return (
    <div>
        <div className="h-16"></div>
        <Calendar
            localizer={localizer}
            // events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            defaultView="month"
        />
        <Calendar
            localizer={localizer}
            // events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            defaultView="week"
        />
    </div>
  );
}

export default MyCalendar;
