"use client"
import { useState } from "react";
import SubjectColumn from "./SubjectColumn";

export default function WamCalculator() {

    return (
        <div className="relative flex-row w-full h-full bg-stone-600 flex">
            <div className="relative h-full w-[280px] bg-red-600"></div>
            <div className="h-1/2 w-[280px] flex flex-row items-center justify-center bg-red-600">
                <SubjectColumn />
                <SubjectColumn />
                <SubjectColumn />
                <SubjectColumn />
            </div>
        </div>
    );
}


