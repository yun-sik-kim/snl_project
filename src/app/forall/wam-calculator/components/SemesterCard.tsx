"use client";
import { Pencil, Plus, Save, Trash2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import SubjectCard from "./SubjectCard";
import clsx from "clsx";

type SubjectData = {
	id: number;
};

type SemesterCardProps = {
	semesterTitle: string;
	onDeleteSemester: () => void;
	maxSubjectsReached: boolean;
	totalSubjectCount: number;
	onSubjectChange: (change: number) => void;
};

export default function SemesterCard({
	semesterTitle,
	onDeleteSemester,
	maxSubjectsReached,
	totalSubjectCount,
	onSubjectChange,
}: SemesterCardProps) {
	const [subjects, setSubjects] = useState<SubjectData[]>([{ id: Date.now() }]);
	const [title, setTitle] = useState(semesterTitle);
	const [isEditingTitle, setIsEditingTitle] = useState(false);

	// Notify parent of total subject count change
	useEffect(() => {
		onSubjectChange(subjects.length);
		return () => onSubjectChange(-subjects.length);
	}, []);

	const handleAddSubject = () => {
		if (subjects.length >= 4 || maxSubjectsReached) {
			alert("Maximum subjects per semester or global limit reached.");
			return;
		}
		const newList = [...subjects, { id: Date.now() }];
		setSubjects(newList);
		onSubjectChange(1);
	};

	const handleRemoveSubject = (id: number) => {
		if (subjects.length === 1) {
			onDeleteSemester();
		} else {
			setSubjects((prev) => prev.filter((subject) => subject.id !== id));
			onSubjectChange(-1);
		}
	};

	const handleRenameToggle = () => {
		if (isEditingTitle && !title.trim()) {
			alert("Semester title cannot be empty.");
			return;
		}
		setIsEditingTitle(!isEditingTitle);
	};

	return (
		<div
			className={clsx(
				"mb-10 h-full w-full rounded-2xl border bg-white p-4 shadow-sm",
			)}
		>
			{/* Header */}
			<div className="mb-4 flex items-center justify-between px-2">
				<div className="flex items-center gap-2">
					{isEditingTitle ? (
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="rounded border border-gray-400 px-2 py-1 font-semibold text-xl"
						/>
					) : (
						<h2 className="font-semibold text-xl uppercase">{title}</h2>
					)}
					<button onClick={handleRenameToggle}>
						{isEditingTitle ? <Save size={18} /> : <Pencil size={18} />}
					</button>
				</div>

				<button
					onClick={handleAddSubject}
					className="flex items-center gap-1 rounded border border-gray-400 bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300"
				>
					<Plus className="h-4 w-4" />
					Add Subject
				</button>
			</div>

			{/* Subjects Grid */}
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{subjects.map((subject) => (
					<div key={subject.id} className="relative">
						<SubjectCard />
						<button
							onClick={() => handleRemoveSubject(subject.id)}
							className="absolute top-1 right-1 rounded-full bg-red-100 p-1 text-red-600 shadow hover:bg-red-200"
							title="Remove Subject"
						>
							<Trash2 size={16} />
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
