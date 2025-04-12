// src/app > wam_calculator > SemesterCard.tsx
'use client'

import React, { useState, useEffect } from 'react'
import SubjectCard from './SubjectCard'
import { Plus, Trash2, Pencil, Save } from 'lucide-react'

type SubjectData = {
  id: number
}

type SemesterCardProps = {
  semesterTitle: string
  onDeleteSemester: () => void
  maxSubjectsReached: boolean
  totalSubjectCount: number
  onSubjectChange: (change: number) => void
}

export default function SemesterCard({
  semesterTitle,
  onDeleteSemester,
  maxSubjectsReached,
  totalSubjectCount,
  onSubjectChange,
}: SemesterCardProps) {
  const [subjects, setSubjects] = useState<SubjectData[]>([{ id: Date.now() }])
  const [title, setTitle] = useState(semesterTitle)
  const [isEditingTitle, setIsEditingTitle] = useState(false)

  // Notify parent of total subject count change
  useEffect(() => {
    onSubjectChange(subjects.length)
    return () => onSubjectChange(-subjects.length)
  }, [])

  const handleAddSubject = () => {
    if (subjects.length >= 4 || maxSubjectsReached) {
      alert('Maximum subjects per semester or global limit reached.')
      return
    }
    const newList = [...subjects, { id: Date.now() }]
    setSubjects(newList)
    onSubjectChange(1)
  }

  const handleRemoveSubject = (id: number) => {
    if (subjects.length === 1) {
      onDeleteSemester()
    } else {
      setSubjects(prev => prev.filter(subject => subject.id !== id))
      onSubjectChange(-1)
    }
  }

  const handleRenameToggle = () => {
    if (isEditingTitle && !title.trim()) {
      alert('Semester title cannot be empty.')
      return
    }
    setIsEditingTitle(!isEditingTitle)
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-10 shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 px-2">
        <div className="flex items-center gap-2">
          {isEditingTitle ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-xl font-semibold px-2 py-1 border border-gray-400 rounded"
            />
          ) : (
            <h2 className="text-xl font-semibold uppercase">{title}</h2>
          )}
          <button onClick={handleRenameToggle}>
            {isEditingTitle ? <Save size={18} /> : <Pencil size={18} />}
          </button>
        </div>

        <button
          onClick={handleAddSubject}
          className="flex items-center gap-1 text-sm px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 border border-gray-400"
        >
          <Plus className="w-4 h-4" />
          Add Subject
        </button>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subjects.map((subject) => (
          <div key={subject.id} className="relative">
            <SubjectCard />
            <button
              onClick={() => handleRemoveSubject(subject.id)}
              className="absolute top-1 right-1 bg-red-100 hover:bg-red-200 text-red-600 rounded-full p-1 shadow"
              title="Remove Subject"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}