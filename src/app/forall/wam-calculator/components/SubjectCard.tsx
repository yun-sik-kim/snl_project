"use client";
import { useState } from "react";
import ScoreChart from "./ScoreChart";
import clsx from "clsx";

interface Assignment {
	id: string; // need string to use crypto.randomUUID()
	name: string;
	userScore: number | null;
	maxScore: number | null;
	percentage: number | null;
}

export default function SubjectCard({ className }: { className?: string }) {
	const [subjectCode, setSubjectCode] = useState("");
	const [subjectName, setSubjectName] = useState("Subject Name / Description");
	const [assignments, setAssignments] = useState<Assignment[]>([
		{
			id: crypto.randomUUID(),
			name: "",
			userScore: null,
			maxScore: null,
			percentage: null,
		},
	]);
	const [isExpended, setIsExpended] = useState(false);

	const subjectWAM = Math.round(calculatedWAM * 10) / 10;
	const overallWAM = 80;
	const grade = calculateGrade(subjectWAM);

	// const [inputAssignments, setInputAssignments] = useState(assignments);
	// const [errors, setErrors] = useState<{ [id: number]: string }>({});

	// const toggleEdit = () => {
	// 	setIsExpended(!isExpended);
	// };

	// // TODO FIX validation process
	// const validateAssignment = (a: Assignment) => {
	// 	if (!a.name.trim()) return "Assignment name required.";
	// 	if (/^\d+$/.test(a.name.trim())) return "Name cannot be only numbers.";
	// 	const score = Number(a.userScore);
	// 	const max = Number(a.maxScore);
	// 	const weight = Number(a.percentage);
	// 	if (isNaN(score) || score < 0 || score > 200) return "Score must be 0–200.";
	// 	if (isNaN(max) || max <= 0 || max > 200) return "Max must be 1–200.";
	// 	if (isNaN(weight) || weight < 0 || weight > 100)
	// 		return "Weight must be 0–100.";
	// 	return "";
	// };

	// const saveAssignments = () => {
	// 	const newErrors: { [id: number]: string } = {};

	// 	inputAssignments.forEach((a) => {
	// 		const err = validateAssignment(a);
	// 		if (err) newErrors[a.id] = err;
	// 	});

	// 	const totalWeight = inputAssignments.reduce(
	// 		(sum, a) => sum + (Number(a.percentage) || 0),
	// 		0,
	// 	);
	// 	if (totalWeight > 100) {
	// 		alert("Total weight of all assignments must not exceed 100%.");
	// 		return;
	// 	}

	// 	if (Object.keys(newErrors).length > 0) {
	// 		setErrors(newErrors);
	// 		return;
	// 	}

	// 	setErrors({});
	// 	setAssignments(inputAssignments);
	// 	setIsExpanded(false);
	// 	alert("Subject log saved!");
	// };

	// const updateAssignment = (
	// 	id: number,
	// 	field: keyof Assignment,
	// 	value: string | number,
	// ) => {
	// 	const parsedValue =
	// 		field === "name" ? value : value === "" ? "" : Number(value);
	// 	setInputAssignments((prev) =>
	// 		prev.map((item) =>
	// 			item.id === id ? { ...item, [field]: parsedValue } : item,
	// 		),
	// 	);
	// };

	// const addAssignment = () => {
	// 	const newAssignment: Assignment = {
	// 		id: Date.now(),
	// 		name: "",
	// 		userScore: "",
	// 		maxScore: "",
	// 		percentage: "",
	// 	};
	// 	setAssignments((prev) => [...prev, newAssignment]);
	// 	setInputAssignments((prev) => [...prev, newAssignment]);
	// };

	// const removeAssignment = (id: number) => {
	// 	setAssignments((prev) => prev.filter((item) => item.id !== id));
	// 	setInputAssignments((prev) => prev.filter((item) => item.id !== id));
	// };

	const totalWeight = assignments.reduce(
		(sum, a) => sum + (Number(a.percentage) || 0),
		0,
	);

	const calculatedWAM =
		totalWeight > 0
			? assignments.reduce((sum, a) => {
					const score = Number(a.userScore);
					const max = Number(a.maxScore);
					const weight = Number(a.percentage);
					if (!score || !max || !weight || max <= 0) return sum;
					return sum + (score / max) * weight;
				}, 0)
			: 0;

	const calculateGrade = (wam: number): string => {
		if (wam >= 80) return "H1";
		if (wam >= 75) return "H1B";
		if (wam >= 70) return "H2A";
		if (wam >= 65) return "H2B";
		if (wam >= 60) return "H3";
		if (wam >= 50) return "P";
		if (wam >= 45) return "N*";
		return "N";
	};

	return (
		<div
			className={clsx("w-full rounded-xl bg-BRAND_COLOR shadow-sm", className)}
		>
			{/* Top Summary */}
			<div className="flex items-start gap-4">
				<ScoreChart
					subjectWAM={subjectWAM}
					overallWAM={overallWAM}
					grade={grade}
				/>

				{/* Subject Info */}
				<div className="flex-1">
					{isExpended ? (
						<>
							<input
								type="text"
								value={subjectCode}
								onChange={(e) => setSubjectCode(e.target.value)}
								className="mb-1 w-full rounded bg-white px-2 py-1 font-bold text-lg outline-none"
							/>
							<input
								type="text"
								value={subjectName}
								onChange={(e) => setSubjectName(e.target.value)}
								className="w-full rounded bg-white px-2 py-1 text-gray-700 outline-none"
							/>
						</>
					) : (
						<>
							<p className="font-bold text-lg">{subjectCode}</p>
							<p className="text-gray-700">{subjectName}</p>
						</>
					)}

					<div className="mt-2 flex gap-2">
						<button className="flex items-center gap-2 rounded-full border border-gray-500 px-3 py-1">
							<div className="h-4 w-4 rounded-full bg-[#305BAB]" />
							<span className="text-sm">WAM</span>
						</button>
						<button className="flex items-center gap-2 rounded-full border border-gray-500 px-3 py-1">
							<div className="h-4 w-4 rounded-full bg-[#BD0A0A]" />
							<span className="text-sm">Overall WAM</span>
						</button>
					</div>

					<p className="mt-2 text-gray-700 text-sm">
						Subject WAM: <strong>{subjectWAM}</strong> | Overall WAM:{" "}
						<strong>{overallWAM}</strong>| Grade: <strong>{grade}</strong>
					</p>

					{totalWeight !== 100 && (
						<p className="mt-1 text-red-600 text-xs">
							⚠️ Total assignment weight is {totalWeight}%. It should be exactly
							100%.
						</p>
					)}
				</div>

				{!isExpanded && (
					<div>
						<button
							onClick={toggleEdit}
							className="rounded border border-blue-300 bg-blue-100 px-3 py-1 text-sm"
						>
							✎ Edit
						</button>
					</div>
				)}
			</div>

			{/* Expanded Section */}
			{isExpanded && (
				<div className="mt-6 rounded-xl border bg-white p-4 shadow-sm">
					<div className="mb-2 grid grid-cols-4 font-semibold text-sm">
						<div>Assignment</div>
						<div>Score</div>
						<div>Max</div>
						<div>Weight</div>
					</div>

					{inputAssignments.map((assignment) => (
						<div
							key={assignment.id}
							className="mb-2 grid grid-cols-4 items-center gap-2"
						>
							<input
								type="text"
								placeholder="Name"
								className={`col-span-1 rounded border p-1 ${
									errors[assignment.id]?.includes("Name")
										? "border-red-500"
										: ""
								}`}
								value={assignment.name}
								onChange={(e) =>
									updateAssignment(assignment.id, "name", e.target.value)
								}
							/>
							<input
								type="number"
								placeholder="0"
								className={`col-span-1 rounded border p-1 ${
									errors[assignment.id]?.includes("Score")
										? "border-red-500"
										: ""
								}`}
								value={assignment.userScore}
								onChange={(e) =>
									updateAssignment(assignment.id, "score", e.target.value)
								}
							/>
							<input
								type="number"
								placeholder="0"
								className={`col-span-1 rounded border p-1 ${
									errors[assignment.id]?.includes("Max") ? "border-red-500" : ""
								}`}
								value={assignment.maxScore}
								onChange={(e) =>
									updateAssignment(assignment.id, "max", e.target.value)
								}
							/>
							<div className="flex items-center gap-1">
								<input
									type="number"
									placeholder="0"
									className={`w-full rounded border p-1 ${
										errors[assignment.id]?.includes("Weight")
											? "border-red-500"
											: ""
									}`}
									value={assignment.percentage}
									onChange={(e) =>
										updateAssignment(assignment.id, "weight", e.target.value)
									}
								/>
								<button
									onClick={() => removeAssignment(assignment.id)}
									className="font-bold text-red-500"
								>
									✕
								</button>
							</div>
							{errors[assignment.id] && (
								<div className="col-span-4 text-red-600 text-sm">
									⚠️ {errors[assignment.id]}
								</div>
							)}
						</div>
					))}

					<div className="mt-4 flex space-x-2">
						<button
							onClick={saveAssignments}
							className="rounded border border-green-400 bg-green-100 px-3 py-1 text-sm"
						>
							💾 Save Log
						</button>
						<button
							onClick={addAssignment}
							className="rounded border border-green-400 bg-green-100 px-3 py-1 text-sm"
						>
							+ Add Assignment
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
