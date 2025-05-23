"use client";

import LeftNav from "@components/layout/LeftNav";
import ICSCalendarViewer from "./ICSCalendarViewer";

export default function CalendarPage() {
	return (
		<div className="w-full h-screen flex flex-row justify-center pt-16 bg-[#EFEFEF]">
			<LeftNav />
			<div className="relative max-w-7xl">
				<ICSCalendarViewer />
			</div>
		</div>
	);
}
