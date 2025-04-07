// src/app/wam_calculator/LeftNav.tsx
'use client'

import { Home, BarChart3, Settings, BookOpen } from 'lucide-react'

export default function LeftNav() {
  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 w-[56px] bg-gray-100 shadow-md rounded-xl flex flex-col items-center py-4 space-y-6 z-50">
      <NavIcon icon={<Home size={24} />} label="Home" />
      <NavIcon icon={<BarChart3 size={24} />} label="WAM Chart" />
      <NavIcon icon={<BookOpen size={24} />} label="Subjects" />
      <NavIcon icon={<Settings size={24} />} label="Settings" />
    </div>
  )
}

function NavIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-300 transition"
      title={label}
    >
      {icon}
    </button>
  )
}
