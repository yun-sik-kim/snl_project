'use client';

import React, { useState } from 'react';

type Assignment = {
  obtained: number;
  total: number;
  weight: number; // in percent
};

type Subject = {
  code: string;
  assignments: Assignment[];
};

const WAMCalculator = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [newSubjectCode, setNewSubjectCode] = useState('');
  const [overallWAM, setOverallWAM] = useState<number | null>(null);

  const addSubject = () => {
    if (newSubjectCode.trim() === '') return;
    setSubjects([...subjects, { code: newSubjectCode, assignments: [] }]);
    setNewSubjectCode('');
  };

  const updateAssignment = (subjectIdx: number, assignIdx: number, field: keyof Assignment, value: string) => {
    const updatedSubjects = [...subjects];
    const assignment = updatedSubjects[subjectIdx].assignments[assignIdx];
    assignment[field] = parseFloat(value) || 0;
    setSubjects(updatedSubjects);
  };

  const addAssignment = (subjectIdx: number) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[subjectIdx].assignments.push({ obtained: 0, total: 100, weight: 0 });
    setSubjects(updatedSubjects);
  };

  const computeWAM = (assignments: Assignment[]) => {
    const weightedScores = assignments.map(a => (a.total !== 0 ? (a.obtained / a.total) * (a.weight / 1020) : 0));
    const sum = weightedScores.reduce((a, b) => a + b, 0);
    return sum * 100;
  };

  const computeOverallWAM = () => {
    const subjectWAMs = subjects.map(sub => computeWAM(sub.assignments));
    const avg = subjectWAMs.reduce((a, b) => a + b, 0) / subjectWAMs.length;
    setOverallWAM(Number.isNaN(avg) ? null : avg);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">🎓 WAM Calculator</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 rounded w-full"
          placeholder="Enter subject code (e.g. ENGR20004)"
          value={newSubjectCode}
          onChange={(e) => setNewSubjectCode(e.target.value)}
        />
        <button
          onClick={addSubject}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Subject
        </button>
      </div>

      {subjects.map((subject, subjectIdx) => (
        <div key={subjectIdx} className="border p-4 rounded-xl mb-6 shadow">
          <h2 className="text-xl font-semibold mb-2">{subject.code}</h2>

          {subject.assignments.map((a, assignIdx) => (
            <div key={assignIdx} className="grid grid-cols-3 gap-4 mb-2">
              <input
                type="number"
                value={a.obtained}
                onChange={(e) => updateAssignment(subjectIdx, assignIdx, 'obtained', e.target.value)}
                className="border p-2 rounded"
                placeholder="Obtained marks"
              />
              <input
                type="number"
                value={a.total}
                onChange={(e) => updateAssignment(subjectIdx, assignIdx, 'total', e.target.value)}
                className="border p-2 rounded"
                placeholder="Total marks"
              />
              <input
                type="number"
                value={a.weight}
                onChange={(e) => updateAssignment(subjectIdx, assignIdx, 'weight', e.target.value)}
                className="border p-2 rounded"
                placeholder="Weight (%)"
              />
            </div>
          ))}

          <button
            onClick={() => addAssignment(subjectIdx)}
            className="text-sm mt-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
          >
            ➕ Add Assignment
          </button>

          <p className="mt-3 text-gray-700">
            WAM for <strong>{subject.code}</strong>:{" "}
            <span className="font-semibold">{computeWAM(subject.assignments).toFixed(2)}</span>
          </p>
        </div>
      ))}

      <button
        onClick={computeOverallWAM}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded mt-4"
      >
        Calculate Overall WAM
      </button>

      {overallWAM !== null && (
        <p className="mt-4 text-2xl font-bold text-green-700">
          🎉 Your Overall WAM: {overallWAM.toFixed(2)}
        </p>
      )}
    </div>
  );
};

export default WAMCalculator;
