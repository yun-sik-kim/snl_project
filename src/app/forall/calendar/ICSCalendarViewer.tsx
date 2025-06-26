import { useCalendarStore } from "@stores/calendarStore";
import { File } from "lucide-react";
import { useState } from "react";
import type { VEvent } from "../types/calendarType";
// import axios from "axios";

import ClubEvent from "./ClubEvents";
import EventEditor from "./EventEditor";
import MonthlyCalendar from "./MonthlyCalendar";
import WeeklyCalendar from "./WeeklyCalendar";

// type UploadResponse = {
//   success: boolean;
//   message: string;
//   url: string;
// };

const serverEventMockup: VEvent[] = [
	{
		title: "Computer Science Lecture",
		start: new Date("2025-04-15T10:00:00"),
		end: new Date("2025-04-15T11:30:00"),
		allDay: false,
		resource: {
			id: 1,
			course: "CS301 - Algorithms",
			location: "Lecture Hall B",
		},
	},
	{
		title: "Computer Science Lecture2",
		start: new Date("2025-04-15T11:00:00"),
		end: new Date("2025-04-15T15:30:00"),
		allDay: false,
		resource: {
			id: 11,
			course: "CS301 - Algorithms",
			location: "Lecture Hall B",
		},
	},
	{
		title: "Economics Group Study",
		start: new Date("2025-04-16T14:00:00"),
		end: new Date("2025-04-16T16:00:00"),
		allDay: false,
		resource: {
			id: 2,
			course: "ECON201 - Microeconomics",
			location: "Library Study Room 5",
		},
	},
	{
		title: "Engineering Lab",
		start: new Date("2025-04-17T09:00:00"),
		end: new Date("2025-04-17T12:00:00"),
		allDay: false,
		resource: {
			id: 3,
			course: "MECH205 - Mechanics",
			lab: "Materials Testing",
		},
	},
	{
		title: "Philosophy Essay Due",
		start: new Date("2025-04-18T00:00:00"),
		end: new Date("2025-04-18T23:59:59"),
		allDay: true,
		resource: {
			id: 4,
			course: "PHIL101 - Ethics",
			assignment: "Moral Theories",
		},
	},
	{
		title: "Biology Seminar",
		start: new Date("2025-04-19T13:00:00"),
		end: new Date("2025-04-19T14:30:00"),
		allDay: false,
		resource: {
			id: 5,
			course: "BIO302 - Genetics",
			topic: "CRISPR Technology",
		},
	},
	{
		title: "Mathematics Tutorial",
		start: new Date("2025-04-20T15:00:00"),
		end: new Date("2025-04-20T16:30:00"),
		allDay: false,
		resource: {
			id: 6,
			course: "MATH204 - Linear Algebra",
			location: "Math Center",
		},
	},
	{
		title: "History Research Presentation",
		start: new Date("2025-04-21T11:00:00"),
		end: new Date("2025-04-21T12:00:00"),
		allDay: false,
		resource: { id: 7, course: "HIST310 - Modern Europe", topic: "Cold War" },
	},
	{
		title: "Chemistry Midterm Exam",
		start: new Date("2025-04-22T09:00:00"),
		end: new Date("2025-04-22T11:00:00"),
		allDay: false,
		resource: {
			id: 8,
			course: "CHEM201 - Organic Chemistry",
			location: "Exam Hall 1",
		},
	},
	{
		title: "Psychology Group Project",
		start: new Date("2025-04-25T16:00:00"),
		end: new Date("2025-04-25T18:00:00"),
		allDay: false,
		resource: {
			id: 9,
			course: "PSYC202 - Social Psychology",
			project: "Behavioral Study",
		},
	},
	{
		title: "Literature Thesis Proposal Deadline",
		start: new Date("2025-04-30T00:00:00"),
		end: new Date("2025-04-30T23:59:59"),
		allDay: true,
		resource: {
			id: 10,
			course: "LIT401 - Senior Seminar",
			topic: "Postmodern Fiction",
		},
	},
];

const sampleDraggableEvents: VEvent[] = [
	{
		title: "Literature Thesis Proposal Deadline",
		start: new Date("2025-04-30T00:00:00"),
		end: new Date("2025-04-30T23:59:59"),
		allDay: true,
		resource: {
			id: 10,
			course: "LIT401 - Senior Seminar",
			topic: "Postmodern Fiction",
		},
	},
	{
		title: "Literature Thesis Proposal Deadline",
		start: new Date("2025-04-30T00:00:00"),
		end: new Date("2025-04-30T23:59:59"),
		allDay: true,
		resource: {
			id: 10,
			course: "LIT401 - Senior Seminar",
			topic: "Postmodern Fiction",
		},
	},
	{
		title: "Literature Thesis Proposal Deadline",
		start: new Date("2025-04-30T00:00:00"),
		end: new Date("2025-04-30T23:59:59"),
		allDay: true,
		resource: {
			id: 10,
			course: "LIT401 - Senior Seminar",
			topic: "Postmodern Fiction",
		},
	},
];

// TODO: reference below to update data structure.
// const sampleEvents: ICSEvent[] = [
//   {
//     // This represents a full-day conference spanning multiple days
//     id: "evt-20250215-conf",
//     title: "Web Development Conference 2025",
//     startTime: "2025-02-15T09:00:00Z",
//     endTime: "2025-02-17T17:00:00Z",
//     location: "Melbourne Convention Center",
//     description:
//       "Annual web development conference featuring latest trends and technologies",
//     createdAt: "2025-01-01T00:00:00Z",
//     timeZone: "Australia/Melbourne",
//   },
//   {
//     // This represents a regular team meeting - a shorter, single-day event
//     id: "evt-20250210-meet",
//     title: "Team Planning Meeting",
//     startTime: "2025-02-10T14:30:00Z",
//     endTime: "2025-02-10T16:00:00Z",
//     location: "Meeting Room 3",
//     description: "Monthly team planning session",
//     createdAt: "2025-02-01T00:00:00Z",
//     timeZone: "Australia/Melbourne",
//   },
//   {
//     // This represents a minimal event with only required fields
//     // Testing how our calendar handles incomplete event data
//     id: "evt-20250220-deadline",
//     startTime: "2025-02-20T12:00:00Z",
//     createdAt: "2025-02-05T00:00:00Z",
//   },
// ];

export default function ICSCalendarViewer() {
	const {
		vEventLists,
		targetVEvent,
		setTargetVEvent,
		setVEvents,
		updateVEvent,
	} = useCalendarStore();
	const [isDragging, setIsDragging] = useState<boolean>(false);
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
		e: React.DragEvent<HTMLDivElement>,
	): Promise<void> => {
		try {
			e.preventDefault();
			setIsDragging(false);
			setIsLoading(true);

			const file = e.dataTransfer.files[0];
			if (!file) {
				throw new Error("No file provided");
			}

			// TODO: Placeholder for ICS parsing; replace with actual parsing logic later
			// const parsedEvents = serverEventMockup.map((event) => ({
			//   id: event.id,
			//   title: event.title || "Untitled Event",
			//   start: new Date(event.startTime),
			//   end: event.endTime ? new Date(event.endTime) : new Date(event.startTime),
			//   createdAt: new Date(event.createdAt),
			//   location: event.location || "",
			//   description: event.description || "",
			//   // allDay: event.allDay,
			// }));

			// TODO: implement server function and change serverEventMockup to parsedEvents
			setVEvents(serverEventMockup);

			setSuccess(true);
		} catch (error) {
			setError(error instanceof Error ? error.message : "An error occurred");
		} finally {
			setIsLoading(false);
		}
	};

	// const sendUserData = async (file: File): Promise<UploadResponse> => {
	//   const MAX_SIZE = 2 * 1024 * 1024; // 2MB

	//   try {
	//     if (file.size > MAX_SIZE) {
	//       throw new Error("File size exceeds 2MB limit");
	//     }
	//     if (!file.name.endsWith(".ics")) {
	//       throw new Error("Invalid file type. Please upload an .ics file");
	//     }

	//     const fileContent = await file.text();
	//     const response = await axios.post("/api/upload", fileContent, {
	//       headers: { "Content-Type": "text/calendar" },
	//       onUploadProgress: (progressEvent) => {
	//         const percentCompleted = Math.round(
	//           (progressEvent.loaded * 100) /
	//             (progressEvent.total ?? progressEvent.loaded)
	//         );
	//         console.log(`Upload Progress: ${percentCompleted}%`);
	//       },
	//     });

	//     return {
	//       success: true,
	//       message: "File uploaded successfully",
	//       url: response.data.url,
	//     };
	//   } catch (error) {
	//     if (axios.isAxiosError(error)) {
	//       const errorMessage = error.response?.data?.message || error.message;
	//       console.error("Axios error:", errorMessage);
	//       return { url: "FIX LATER", success: false, message: errorMessage };
	//     }
	//     console.error("Upload error:", error);
	//     return {
	//       url: "FIX LATER",
	//       success: false,
	//       message:
	//         error instanceof Error ? error.message : "An unexpected error occurred",
	//     };
	//   }
	// };

	return (
		<div className="relative flex flex-col w-full h-full justify-center items-center">
			{vEventLists.length === 0 ? (
				<div
					className={`flex flex-col gap-4 border-2 border-dashed justify-center items-center rounded-lg p-8 text-center mb-4 transition-colors
            ${
							isDragging
								? "border-blue-500 bg-blue-50 text-CUSTOM_BLACK"
								: "border-gray-300"
						}`}
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					onDrop={handleDrop}
				>
					<File size={48} strokeWidth={1} />
					<p className="text-lg mb-2">Drag and drop your ICS file here!</p>
				</div>
			) : (
				<div className="w-full h-full flex gap-8">
					<div className="w-[68%] flex flex-col gap-5">
						<div className="shadow-2xs bg-white rounded-3xl p-2">
							<ClubEvent vEvent={sampleDraggableEvents[0]} />
						</div>

						<div className="shadow-2xs bg-white rounded-3xl p-2 overflow-hidden">
							<WeeklyCalendar
								events={vEventLists}
								selectedEvent={targetVEvent}
								onEventSelect={setTargetVEvent}
							/>
						</div>
					</div>

					<div className="flex w-[32%] flex-col gap-5">
						<div className="h-[50%] shadow-2xs bg-white rounded-3xl p-2">
							<MonthlyCalendar
								events={vEventLists}
								selectedEvent={targetVEvent}
								onEventSelect={setTargetVEvent}
							/>
						</div>

						<div className="h-[50%] shadow-2xs bg-white rounded-3xl p-2">
							{!targetVEvent ? (
								<div className="p-4">No event selected :/</div>
							) : (
								<div className="">
									<EventEditor
										selectedEvent={targetVEvent}
										onUpdateEvent={updateVEvent}
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
