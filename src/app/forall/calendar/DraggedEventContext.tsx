import { createContext } from "react";
import type { VEvent } from "../types/calendarType";

interface DraggedEventContextType {
	draggedEvent: VEvent | null;
	setDraggedEvent: (event: VEvent | null) => void;
}

export const DraggedEventContext = createContext<DraggedEventContextType>({
	draggedEvent: null,
	setDraggedEvent: () => {},
});
