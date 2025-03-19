"use client"
import { useState } from "react";

export default function PlaygroundPage() {
    const [count, setCount] = useState(1);

    return (
        <div className="w-40 h-40 bg-gray-300 p-4">
            <div className="w-30 h-30 bg-white p-4">{count}</div>
            <button className="w-30 h-30 bg-white p-4" onClick={()=>{setCount(count + 1)}}>Press me</button>
        </div>
    );
}