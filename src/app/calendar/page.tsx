"use client";
import { useState } from "react";
import ICSCalendarViewer from "./ICSCalendarViewer";
import ICSGenerator from "./ICSCalendarGenerator";
import ICSCalendarGenerator from "./ICSCalendarGenerator";

export default function CalendarPage() {
  return (
    <div className="w-full h-full flex flex-row justify-center pt-16">
      <ICSCalendarViewer />
      {/* <ICSCalendarGenerator /> */}
    </div>
  );
}
