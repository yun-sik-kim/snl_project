// src/app > wam_calculator > page.tsx
'use client'

import React, { useState } from 'react'
import SemesterCard from './SemesterCard'
import LeftNav from './LeftNav'

type Semester = { id: number }

export default function WAMPage() {
  const [semesters, setSemesters] = useState<Semester[]>([{ id: 1 }])
  const [subjectCount, setSubjectCount] = useState(1)

  const maxSubjects = 36
  const totalCredits = subjectCount * 12.5
  const completionPercent = Math.min((subjectCount / 36) * 100, 100)
  const overallWAM = 80 // placeholder

  const addSemester = () => {
    setSemesters(prev => [...prev, { id: Date.now() }])
  }

  const removeSemester = (id: number) => {
    setSemesters(prev => prev.filter(sem => sem.id !== id))
  }

  const updateSubjectCount = (change: number) => {
    setSubjectCount(prev => Math.max(0, prev + change))
  }

  return (
    <div className="flex">
      <LeftNav />

      <div className="ml-[80px] flex-1 p-6 space-y-8 max-w-6xl mx-auto">
        {/* Top Card */}
        <div className="bg-green-100 border border-green-300 rounded-xl p-4 shadow-sm">
          <h1 className="text-xl font-bold mb-2">Welcome to SNL WAM Calculator!</h1>
          <p className="text-sm text-gray-800">
            Add semesters and subjects, track your progress toward your WAM goal,
            and calculate total credits as you go.
          </p>
        </div>

        {/* Semester Cards */}
        {semesters.map((sem) => (
          <SemesterCard
            key={sem.id}
            semesterTitle={`Semester ${semesters.indexOf(sem) + 1}`}
            onDeleteSemester={() => removeSemester(sem.id)}
            maxSubjectsReached={subjectCount >= maxSubjects}
            totalSubjectCount={subjectCount}
            onSubjectChange={updateSubjectCount}
          />
        ))}

        {/* Add Semester Button */}
        <div className="flex justify-center">
          <button
            onClick={addSemester}
            className="w-full max-w-md rounded-2xl py-4 text-lg font-medium bg-gray-400 hover:bg-gray-500 text-black transition"
            disabled={subjectCount >= maxSubjects}
          >
            + Add Semester
          </button>
        </div>

        {/* Bottom Summary */}
        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 shadow-md mt-10">
          <h2 className="text-lg font-bold mb-2 text-green-700">YOUR GOAL WAM</h2>
          <div className="flex items-center justify-between text-sm mb-4">
            <div>
              <p className="text-gray-700">Total Subjects: {subjectCount}</p>
              <p className="text-gray-700">Total Credits: {totalCredits.toFixed(1)} pts</p>
              <p className="text-gray-700">
                Overall WAM: <strong>{overallWAM}</strong>
              </p>
            </div>
            <div className="w-1/2">
              <div className="text-right text-xs text-gray-600 mb-1">
                {completionPercent.toFixed(0)}% Complete
              </div>
              <div className="h-3 w-full bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-500"
                  style={{ width: `${completionPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
