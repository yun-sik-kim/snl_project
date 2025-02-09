"use client"
import { useState } from 'react';
import ICSCalendarViewer from './ICSCalendarViewer';
import ICSGenerator from './ICSCalendarGenerator';
import ICSCalendarGenerator from './ICSCalendarGenerator';



export default function CalendarPage() {

  return (
    <div className='flex flex-row'>
      <ICSCalendarViewer />
      {/* <ICSCalendarGenerator /> */}
    </div>
  );
}