import Image from "next/image";
import Calculator from "./components/Calculator";
import Link from 'next/link';

import { Rock_Salt } from "next/font/google";

const rockSalt = Rock_Salt({
  weight: "400", // Rock Salt only has 400 weight
  style: "normal",
  subsets: ["latin"],
});


export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#efefef]">
      {/* Page 1 */}

      {/* Page 1 - Hero Section */}
      <div className="relative w-full h-screen flex justify-center">
         {/* TopNav Spacing */}
        <div className="h-16">
        </div>

        {/* Yellow Circle */}
        <div className="absolute mt-24 rounded-full bg-[#FFDC73] w-[150%] aspect-square">
        </div>

        {/* Text Content */}
        <div className="absolute w-6/12 z-10 text-center flex flex-col gap-4 mt-44">
          <h2 className="text-md lg:text-2xl font-medium">Study group made for students by students</h2>
          <h1 className="text-[40px] lg:text-[80px] xl:text-[100px] font-bold lg:leading-[120%] leading-tight">Become a part of the biggest study group in Melb</h1>
        </div>

        {/* Description */}
        <div className="absolute bottom-8 left-8 w-3/12 text-left z-[1]">
          <h3 className="text-sm md:text-md font-medium">
            A dedicated time & space every Saturday for students to invest in their dreams despite their busy schedules.
          </h3>
        </div>

        {/* Learn More Icon */}
        <div className="absolute w-12 md:w-52 aspect-square bottom-8 right-8 mb-4 mr-0 md:mr-4 flex flex-col items-center justify-center text-center">
          <h3 className="font-medium">Learn More</h3>
          <div className="mt-6">
            <Image
              src="/arrow.svg" 
              alt="Arrow Icon" 
              width={16} 
              height={16} 
            />
          </div>
          <Image
              className="absolute hidden md:block"
              src="/decoration/elipse.png" 
              alt="Arrow Icon" 
              fill
            />
        </div>
      </div>

      {/* Page 2 - Fixed Layout */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 z-20 bg-[#F8F8FF]">
        
        {/* Title & Description Wrapper */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Left Side - Title */}
          <div className="flex flex-col mt-12">
            <h2 className="text-5xl md:text-7xl font-bold text-black">
              Why Study With Us?  
            </h2>
            <span className={`${rockSalt.className} text-[#FED800] font-bold text-lg md:text-2xl block text-right md:text-right md:ml-12`}>
              — COME ON IT'S US
            </span>
          </div>

          {/* Right Side - Description */}
          <p className="text-lg md:text-xl font-medium text-black mt-20">
            Make your Saturday count! Every week, meet new goals and new people. SNL is where learning and community grow together.
          </p>
        </div>

        {/* Cards Section */}
  
        <div className="max-w-6xl mx-auto mt-6 flex flex-col gap-6">
  
          {/* Top Row */}
          <div className="flex justify-center items-start gap-4">
            {/* Black Card 1 (Left) */}
            <div className="bg-black text-white p-10 rounded-3xl shadow-lg flex-1 h-auto flex items-center">
              <p className="text-lg">
                Tired of playing musical chairs at crowded cafés? We got you!
              </p>
            </div>

            {/* White Card 1 (Middle) */}
            <div className="bg-white p-10 rounded-3xl shadow-lg flex-1 h-auto flex items-center justify-center text-center">
              <Image
                  src="/decoration/sparkle.png"
                  alt="Study Room"
                  width={50} // Adjust width based on your design
                  height={50} // Adjust height based on your design
                  className="rounded-lg"
                />
            </div>

            {/* Black Card 2 (Right - Slightly Overflowing Left) */}
            <div className="bg-black text-white p-10 rounded-3xl shadow-lg flex-1 h-auto flex items-center -mr-4">
              <p className="text-lg">
                And did we tell you about all the free snacks you get?
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-center items-start gap-4">
            {/* Black Card 3 (Left - Slightly Lower) */}
            <div className="bg-black text-white p-10 rounded-3xl shadow-lg flex-1 h-auto flex items-center mt-6">
              <p className="text-lg">
                From quiet corners to group hubs, we’ve found the best uni study spaces—so you can actually study (or at least look like you are).
              </p>
            </div>

            {/* White Card 2 (Right) */}
            <div className="bg-white p-10 rounded-3xl shadow-lg flex-1 h-auto flex items-center justify-center text-center mt-6">
              <Image
                src="/decoration/sparkle.png"
                alt="Study Room"
                width={70} // Adjust width based on your design
                height={70} // Adjust height based on your design
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
