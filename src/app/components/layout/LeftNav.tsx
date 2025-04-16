"use client";
import Link from "next/link";
import { Home, Calculator, Settings, CalendarDays } from "lucide-react";

export default function LeftNav() {
  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 w-[56px] bg-gray-100 shadow-md rounded-xl flex flex-col items-center py-4 space-y-6 z-50">
      <Link
        href=""
        className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-300 transition"
      >
        <Home size={24} />
      </Link>
      <Link
        href="/wam_calculator"
        className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-300 transition"
      >
        <Calculator size={24} />
      </Link>
      <Link
        href="/calendar"
        className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-300 transition"
      >
        <CalendarDays size={24} />
      </Link>
      <NavIcon icon={<Settings size={24} />} label="Settings" />
    </div>
  );
}

function NavIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-300 transition"
      title={label}
    >
      {icon}
    </button>
  );
}
