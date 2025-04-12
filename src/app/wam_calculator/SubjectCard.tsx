// src/app/wam_calculator/SubjectCard.tsx
'use client'

import React, { useState } from 'react'
import ScoreChart from './ScoreChart'

type Assignment = {
  id: number
  name: string
  score: number | string
  max: number | string
  weight: number | string
}

const SubjectCard = () => {
  const [expanded, setExpanded] = useState(false)
  const [subjectCode, setSubjectCode] = useState('SUBJECT CODE')
  const [subjectName, setSubjectName] = useState('Subject Name / Description')
  const [assignments, setAssignments] = useState<Assignment[]>([
    { id: Date.now(), name: '', score: '', max: '', weight: '' }
  ])
  const [inputAssignments, setInputAssignments] = useState(assignments)
  const [errors, setErrors] = useState<{ [id: number]: string }>({})

  const toggleEdit = () => {
    setExpanded(true)
  }

  const validateAssignment = (a: Assignment) => {
    if (!a.name.trim()) return 'Assignment name required.'
    if (/^\d+$/.test(a.name.trim())) return 'Name cannot be only numbers.'
    const score = Number(a.score)
    const max = Number(a.max)
    const weight = Number(a.weight)
    if (isNaN(score) || score < 0 || score > 200) return 'Score must be 0–200.'
    if (isNaN(max) || max <= 0 || max > 200) return 'Max must be 1–200.'
    if (isNaN(weight) || weight < 0 || weight > 100) return 'Weight must be 0–100.'
    return ''
  }

  const saveAssignments = () => {
    const newErrors: { [id: number]: string } = {}

    inputAssignments.forEach(a => {
      const err = validateAssignment(a)
      if (err) newErrors[a.id] = err
    })

    const totalWeight = inputAssignments.reduce((sum, a) => sum + (Number(a.weight) || 0), 0)
    if (totalWeight > 100) {
      alert('Total weight of all assignments must not exceed 100%.')
      return
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setAssignments(inputAssignments)
    setExpanded(false)
    alert('Subject log saved!')
  }

  const updateAssignment = (
    id: number,
    field: keyof Assignment,
    value: string | number
  ) => {
    const parsedValue = field === 'name' ? value : value === '' ? '' : Number(value)
    setInputAssignments(prev =>
      prev.map(item => (item.id === id ? { ...item, [field]: parsedValue } : item))
    )
  }

  const addAssignment = () => {
    const newAssignment: Assignment = {
      id: Date.now(),
      name: '',
      score: '',
      max: '',
      weight: ''
    }
    setAssignments(prev => [...prev, newAssignment])
    setInputAssignments(prev => [...prev, newAssignment])
  }

  const removeAssignment = (id: number) => {
    setAssignments(prev => prev.filter(item => item.id !== id))
    setInputAssignments(prev => prev.filter(item => item.id !== id))
  }

  const totalWeight = assignments.reduce((sum, a) => sum + (Number(a.weight) || 0), 0)

  const calculatedWAM =
    totalWeight > 0
      ? assignments.reduce((sum, a) => {
          const score = Number(a.score)
          const max = Number(a.max)
          const weight = Number(a.weight)
          if (!score || !max || !weight || max <= 0) return sum
          return sum + (score / max) * weight
        }, 0)
      : 0

  const subjectWAM = Math.round(calculatedWAM * 10) / 10

  const overallWAM = 80

  const getGrade = (wam: number): string => {
    if (wam >= 80) return 'H1'
    if (wam >= 75) return 'H1B'
    if (wam >= 70) return 'H2A'
    if (wam >= 65) return 'H2B'
    if (wam >= 60) return 'H3'
    if (wam >= 50) return 'P'
    if (wam >= 45) return 'N*'
    return 'N'
  }

  const grade = getGrade(subjectWAM)

  return (
    <div className="bg-yellow-100 border border-pink-200 rounded-xl p-4 w-full max-w-2xl shadow-md">
      {/* Top Summary */}
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <ScoreChart subjectWAM={subjectWAM} overallWAM={overallWAM} grade={grade} />
        </div>

        {/* Subject Info */}
        <div className="flex-1">
          {expanded ? (
            <>
              <input
                type="text"
                value={subjectCode}
                onChange={(e) => setSubjectCode(e.target.value)}
                className="text-lg font-bold bg-white outline-none w-full rounded px-2 py-1 mb-1"
              />
              <input
                type="text"
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
                className="text-gray-700 bg-white outline-none w-full rounded px-2 py-1"
              />
            </>
          ) : (
            <>
              <p className="text-lg font-bold">{subjectCode}</p>
              <p className="text-gray-700">{subjectName}</p>
            </>
          )}

          <div className="mt-2 flex gap-2">
            <button className="px-3 py-1 border border-gray-500 rounded-full flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#305BAB]" />
              <span className="text-sm">WAM</span>
            </button>
            <button className="px-3 py-1 border border-gray-500 rounded-full flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#BD0A0A]" />
              <span className="text-sm">Overall WAM</span>
            </button>
          </div>

          <p className="text-sm mt-2 text-gray-700">
            Subject WAM: <strong>{subjectWAM}</strong> | Overall WAM: <strong>{overallWAM}</strong>| Grade: <strong>{grade}</strong>
          </p>

          {totalWeight !== 100 && (
            <p className="text-xs text-red-600 mt-1">
              ⚠️ Total assignment weight is {totalWeight}%. It should be exactly 100%.
            </p>
          )}
        </div>

        {!expanded && (
          <div>
            <button
              onClick={toggleEdit}
              className="text-sm px-3 py-1 bg-blue-100 border border-blue-300 rounded"
            >
              ✎ Edit
            </button>
          </div>
        )}
      </div>

      {/* Expanded Section */}
      {expanded && (
        <div className="mt-6 bg-white p-4 rounded-xl border shadow-sm">
          <div className="grid grid-cols-4 font-semibold text-sm mb-2">
            <div>Assignment</div>
            <div>Score</div>
            <div>Max</div>
            <div>Weight</div>
          </div>

          {inputAssignments.map((assignment) => (
            <div key={assignment.id} className="grid grid-cols-4 gap-2 items-center mb-2">
              <input
                type="text"
                placeholder="Name"
                className={`border p-1 rounded col-span-1 ${
                  errors[assignment.id]?.includes('Name') ? 'border-red-500' : ''
                }`}
                value={assignment.name}
                onChange={(e) => updateAssignment(assignment.id, 'name', e.target.value)}
              />
              <input
                type="number"
                placeholder="0"
                className={`border p-1 rounded col-span-1 ${
                  errors[assignment.id]?.includes('Score') ? 'border-red-500' : ''
                }`}
                value={assignment.score}
                onChange={(e) => updateAssignment(assignment.id, 'score', e.target.value)}
              />
              <input
                type="number"
                placeholder="0"
                className={`border p-1 rounded col-span-1 ${
                  errors[assignment.id]?.includes('Max') ? 'border-red-500' : ''
                }`}
                value={assignment.max}
                onChange={(e) => updateAssignment(assignment.id, 'max', e.target.value)}
              />
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  placeholder="0"
                  className={`border p-1 rounded w-full ${
                    errors[assignment.id]?.includes('Weight') ? 'border-red-500' : ''
                  }`}
                  value={assignment.weight}
                  onChange={(e) => updateAssignment(assignment.id, 'weight', e.target.value)}
                />
                <button
                  onClick={() => removeAssignment(assignment.id)}
                  className="text-red-500 font-bold"
                >
                  ✕
                </button>
              </div>
              {errors[assignment.id] && (
                <div className="col-span-4 text-sm text-red-600">
                  ⚠️ {errors[assignment.id]}
                </div>
              )}
            </div>
          ))}

          <div className="flex space-x-2 mt-4">
            <button
              onClick={saveAssignments}
              className="bg-green-100 border border-green-400 rounded px-3 py-1 text-sm"
            >
              💾 Save Log
            </button>
            <button
              onClick={addAssignment}
              className="bg-green-100 border border-green-400 rounded px-3 py-1 text-sm"
            >
              + Add Assignment
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SubjectCard