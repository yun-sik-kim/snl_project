"use client"
import { useState } from "react";

function ParentComponent() {
  const [message, setMessage] = useState<string>("No message yet");

  // Callback function with explicit type
  const handleChildClick = (msg: string) => {
    setMessage(msg);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Parent Component</h2>
      <p className="mb-2">Message from Child: {message}</p>
      <ChildComponent onButtonClick={handleChildClick} />
    </div>
  );
}

// Define the props type for the child component
interface ChildProps {
  onButtonClick: (msg: string) => void;
}

function ChildComponent({ onButtonClick }: ChildProps) {
  return (
    <button
      onClick={() => onButtonClick("Hello from Child!")}
      className="px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      Click Me
    </button>
  );
}

export default ParentComponent;
