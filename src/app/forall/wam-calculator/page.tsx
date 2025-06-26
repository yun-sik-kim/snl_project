"use client";
import React, { useState } from "react";
import SemesterCard from "./components/SemesterCard";
import clsx from "clsx";

export default function WAMPage() {
	const [semesters, setSemesters] = useState();
	const [subjectCount, setSubjectCount] = useState(1);

	const MAX_SUBJECTS = 36;
	// const totalCredits = subjectCount * 12.5;
	// const completionPercent = Math.min((subjectCount / 36) * 100, 100);
	let overallWAM: number; // placeholder

	// const addSemester = () => {
	// 	setSemesters((prev) => [...prev, { id: Date.now() }]);
	// };

	// const removeSemester = (id: number) => {
	// 	setSemesters((prev) => prev.filter((sem) => sem.id !== id));
	// };

	// const updateSubjectCount = (change: number) => {
	// 	setSubjectCount((prev) => Math.max(0, prev + change));
	// };

	return (
		<div className="grid h-full w-full grid-cols-4 gap-4">
			{/* Top Card */}
			<div className="col-span-4 rounded-xl border border-green-300 bg-green-100 p-4 shadow-sm">
				<h1 className="mb-2 font-bold text-xl">
					Welcome to SNL WAM Calculator!
				</h1>
				<p className="text-gray-800 text-sm">
					Add semesters and subjects, track your progress toward your WAM goal,
					and calculate total credits as you go.
				</p>
			</div>

			{/* Semester Cards */}
			{/* {semesters.map((sem) => (
				<SemesterCard
					key={sem.id}
					semesterTitle={`Semester ${semesters.indexOf(sem) + 1}`}
					onDeleteSemester={() => removeSemester(sem.id)}
					maxSubjectsReached={subjectCount >= maxSubjects}
					totalSubjectCount={subjectCount}
					onSubjectChange={updateSubjectCount}
				/>
			))} */}

			{/* Add Semester Button */}
			{/* <div className="flex justify-center">
				<button
					onClick={addSemester}
					className="w-full max-w-md rounded-2xl bg-gray-400 py-4 font-medium text-black text-lg transition hover:bg-gray-500"
					disabled={subjectCount >= maxSubjects}
				>
					+ Add Semester
				</button>
			</div> */}

			<Summary className="col-span-4" />
		</div>
	);
}

function Summary({ className }: { className?: string }) {
	return (
		<div className={clsx("rounded-xl shadow-sm", className)}>
			<h2 className="mb-2 font-bold text-green-700 text-lg">YOUR GOAL WAM</h2>
			<div className="mb-4 flex items-center justify-between text-sm">
				<div>
					<p className="text-gray-700">Total Subjects: {subjectCount}</p>
					<p className="text-gray-700">
						Total Credits: {totalCredits.toFixed(1)} pts
					</p>
					<p className="text-gray-700">
						Overall WAM: <strong>{overallWAM}</strong>
					</p>
				</div>
				<div className="w-1/2">
					<div className="mb-1 text-right text-gray-600 text-xs">
						{completionPercent.toFixed(0)}% Complete
					</div>
					<div className="h-3 w-full overflow-hidden rounded-full bg-gray-300">
						<div
							className="h-full bg-red-500"
							style={{ width: `${completionPercent}%` }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
