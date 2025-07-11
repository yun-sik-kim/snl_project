"use client";
import { useWAMStore } from "@/app/stores/WAMStore";

import SubjectCard from "../forall/wam-calculator/components/SubjectCard";

export default function TestPage() {
	const { semesters, addSemester, addSubject } = useWAMStore();
	// Create test data if it doesn't exist
	const setupTestData = () => {
		if (semesters.length === 0) {
			addSemester("Test Semester 2024");
		}

		const semester = semesters[0];
		if (semester && semester.subjects.length === 0) {
			addSubject(
				semester.id,
				"COMP3121",
				"Algorithms and Programming Techniques",
			);
		}
	};

	// Get existing data or setup test data
	const semester = semesters[0];
	const subject = semester?.subjects[0];

	return (
		<div className="flex h-full w-full items-center pt-28">
			<div className="w-full max-w-md">
				{semester && subject ? (
					<SubjectCard semesterId={semester.id} subjectId={subject.id} />
				) : (
					<div>
						<p>No test data found.</p>
						<button
							onClick={setupTestData}
							className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
						>
							Create Test Data
						</button>
					</div>
				)}

				{/* Debug info
				{semester && subject && (
					<div className="mt-4 text-gray-500 text-sm">
						<p>
							Semester: {semester.name} ({semester.id})
						</p>
						<p>
							Subject: {subject.code} ({subject.id})
						</p>
					</div>
				)} */}
			</div>
		</div>
	);
}
