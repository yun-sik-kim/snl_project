"use client"
import { useState } from "react";

type Assessment = {
  id: number;
  name: string;
  score: number;
  maxScore: number;
  weight: number;
};

export default function SubjectCard() {
  const [subjectName, setSubjectName] = useState<string>("");
  const [assessments, setAssessments] = useState<Assessment[]>([]);

  const handleSubjectChange = (value: string) => {
    setSubjectName(value);
  };

  const handleChange = (id: number, field: keyof Assessment, value: string) => {
    let numericValue = parseFloat(value);
    if (isNaN(numericValue)) numericValue = 0;
    if ((field === "score" || field === "maxScore") && numericValue < 0) {
      numericValue = 0;
    }

    setAssessments((prev) =>
      prev.map((assessment) =>
        assessment.id === id ? { ...assessment, [field]: numericValue } : assessment
      )
    );
  };

  const addAssessment = () => {
    setAssessments([
      ...assessments,
      {
        id: Date.now(),
        name: "",
        score: 0,
        maxScore: 0,
        weight: 0,
      },
    ]);
  };

  const removeAssessment = (id: number) => {
    setAssessments(assessments.filter((assessment) => assessment.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-[400px] border border-softGrey">
      {/* Editable Subject Name */}
      <input
        type="text"
        value={subjectName}
        onChange={(e) => handleSubjectChange(e.target.value)}
        className="w-full text-2xl font-bold text-center text-deepBlue p-3 border-b-2 border-softGrey focus:outline-none"
        placeholder="Enter Subject Name"
      />

      {/* Table Headers */}
      <div className="grid grid-cols-3 text-gray-700 text-sm font-semibold mt-6 mb-4 text-center">
        <span>Score</span>
        <span>Max</span>
        <span>Weight</span>
      </div>

      {/* Assessments List */}
      {assessments.map((assessment) => (
        <div key={assessment.id} className="mb-4">
          <div className="flex items-center justify-between border-b border-softGrey pb-1">
            {/* Editable Assignment Name (Styled Like Subject Name) */}
            <input
              type="text"
              value={assessment.name}
              onChange={(e) => handleChange(assessment.id, "name", e.target.value)}
              className="w-full text-lg font-semibold text-deepBlue focus:outline-none"
              placeholder="Assignment Name"
            />
            {/* Remove Button */}
            <button
              onClick={() => removeAssessment(assessment.id)}
              className="ml-2 text-red-500 hover:text-red-700 text-xl"
            >
              ✖
            </button>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-3 gap-4 mt-2 text-center">
            <input
              type="number"
              value={assessment.score}
              onChange={(e) => handleChange(assessment.id, "score", e.target.value)}
              className="p-3 border border-softGrey rounded-md focus:ring-2 focus:ring-deepBlue focus:outline-none text-center"
              placeholder="Score"
              min="0"
            />
            <input
              type="number"
              value={assessment.maxScore}
              onChange={(e) => handleChange(assessment.id, "maxScore", e.target.value)}
              className="p-3 border border-softGrey rounded-md focus:ring-2 focus:ring-deepBlue focus:outline-none text-center"
              placeholder="Max"
              min="0"
            />
            <input
              type="number"
              value={assessment.weight}
              onChange={(e) => handleChange(assessment.id, "weight", e.target.value)}
              className="p-3 border border-softGrey rounded-md focus:ring-2 focus:ring-deepBlue focus:outline-none text-center"
              placeholder="%"
            />
          </div>
        </div>
      ))}

      {/* Add Assessment Button */}
      <button
        onClick={addAssessment}
        className="w-full bg-primaryYellow hover:bg-hoverYellow text-black font-semibold py-3 mt-4 rounded-md focus:ring-2 focus:ring-hoverYellow"
      >
        + Add Assessment
      </button>
    </div>
  );
}
