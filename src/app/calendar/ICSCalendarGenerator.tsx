import React, { useState } from "react";
import type { ICSEvent, RecurringType } from "./types/ics";

const ICSCalendarGenerator: React.FC = () => {
  const [formData, setFormData] = useState<ICSEvent>({
    eventName: "",
    stampTime: "",
    startTime: "",
    endTime: "",
    description: "",
    location: "",
    sequence: 0,
    isRecurring: false,
    recurringType: "daily",
  });

  // Separate date and time inputs
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [startTimeInput, setStartTimeInput] = useState<string>("");
  const [endTimeInput, setEndTimeInput] = useState<string>("");

  const recurringOptions: RecurringType[] = [
    "daily",
    "weekly",
    "biweekly",
    "monthly",
    "yearly",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRecurringChange = (type: RecurringType) => {
    setFormData((prev) => ({
      ...prev,
      isRecurring: true,
      recurringType: type,
    }));
  };

  const handleNonRecurringChange = () => {
    setFormData((prev) => ({
      ...prev,
      isRecurring: false,
      recurringType: "daily", // default value
    }));
  };

  const handleRecurringCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      isRecurring: e.target.checked,
      // If unchecked, reset to default recurring type
      recurringType: e.target.checked ? prev.recurringType : "daily",
    }));
  };

  const handleRecurringTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      recurringType: e.target.value as RecurringType,
    }));
  };

  // Generate time options in 15-minute intervals
  const generateTimeOptions = () => {
    const options = [];
    for (let hours = 0; hours < 24; hours++) {
      for (let minutes = 0; minutes < 60; minutes += 15) {
        const hour = hours.toString().padStart(2, "0");
        const minute = minutes.toString().padStart(2, "0");
        const time = `${hour}:${minute}`;
        options.push(
          <option key={time} value={time}>
            {time}
          </option>
        );
      }
    }
    return options;
  };

  const getRRULE = (type: RecurringType): string => {
    if (type === "biweekly") {
      return "FREQ=WEEKLY;INTERVAL=2";
    }
    return `FREQ=${type.toUpperCase()}`;
  };

  const formatToUTC = (date: string, time: string): string => {
    const dateTime = new Date(`${date}T${time}`);
    return dateTime.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  const generateICS = () => {
    // Format times to UTC
    const utcStart = formatToUTC(startDate, startTimeInput);
    const utcEnd = formatToUTC(endDate, endTimeInput);
    const currentStamp = new Date()
      .toISOString()
      .replace(/[-:]/g, "")
      .split(".")[0];

    // Update form data with formatted times
    setFormData((prev) => ({
      ...prev,
      startTime: utcStart,
      endTime: utcEnd,
      stampTime: currentStamp,
    }));

    // Escape special characters in location
    const escapedLocation = formData.location?.replace(/,/g, "\\,") || "";

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "CALSCALE:GREGORIAN",
      `PRODID:${formData.description}-`,
      "BEGIN:VEVENT",
      `DESCRIPTION:${formData.description}`,
      `DTEND:${utcEnd}`,
      `DTSTAMP:${currentStamp}`,
      `DTSTART:${utcStart}`,
      `LOCATION:${escapedLocation}`,
      "SEQUENCE:0",
      `SUMMARY:${formData.eventName}`,
      formData.isRecurring ? `RRULE:${getRRULE(formData.recurringType)}` : "",
      `UID:${new Date().getTime()}_event`,
      "END:VEVENT",
      "END:VCALENDAR",
    ]
      .filter(Boolean)
      .join("\r\n"); // filter(Boolean) removes empty strings

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `${formData.eventName.replace(/\s+/g, "_")}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-2xl mx-auto text-blue-950">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2 text-white">
          ICS Event Generator
        </h1>
      </div>

      <div className="space-y-4  p-6 border rounded-lg">
        {/* Previous input fields remain the same until recurring section */}
        <div>
          <label className="block text-sm font-medium mb-1 text-white">
            Event Name
          </label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter event name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter location"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Start Time</label>
            <select
              value={startTimeInput}
              onChange={(e) => setStartTimeInput(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select time</option>
              {generateTimeOptions()}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">End Time</label>
            <select
              value={endTimeInput}
              onChange={(e) => setEndTimeInput(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select time</option>
              {generateTimeOptions()}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded h-24"
            placeholder="Enter event description"
          />
        </div>

        {/* Modified recurring section */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="recurring"
              checked={formData.isRecurring}
              onChange={handleRecurringCheckbox}
              className="rounded"
            />
            <label htmlFor="recurring" className="text-sm font-medium">
              Recurring Event
            </label>
          </div>

          {formData.isRecurring && (
            <div>
              <select
                value={formData.recurringType}
                onChange={handleRecurringTypeChange}
                className="w-full p-2 border rounded"
              >
                <option value="daily">Every Day</option>
                <option value="weekly">Every Week</option>
                <option value="biweekly">Every 2 Weeks</option>
                <option value="monthly">Every Month</option>
                <option value="yearly">Every Year</option>
              </select>
            </div>
          )}
        </div>

        <button
          onClick={generateICS}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
          disabled={
            !formData.eventName ||
            !startDate ||
            !endDate ||
            !startTimeInput ||
            !endTimeInput
          }
        >
          Generate ICS File
        </button>
      </div>
    </div>
  );
};

export default ICSCalendarGenerator;
