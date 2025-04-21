"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import TestimonialCarousel from "@components/TestimonialCarousel";
import Footer from "@components/layout/Footer";
import { InfiniteSlider } from "./components/InfiniteSlider";
import RotatingSvg from "./components/animation/RotatingSvg";

import { Rock_Salt } from "next/font/google";
// import { Fullscreen } from "lucide-react";

const rockSalt = Rock_Salt({
	weight: "400", // Rock Salt only has 400 weight
	style: "normal",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div className="flex flex-col w-full bg-[#F8F8FF] overflow-x-hidden">
			{/* Page 1 */}

			{/* Page 1 - Hero Section */}
			<div className="relative w-full h-screen flex justify-center">
				{/* TopNav Spacing */}
				<div className="h-16" />

				{/* Yellow Circle */}
				{/* <div className="absolute mt-24 rounded-full bg-[#FFDC73] w-[150%] aspect-square"></div> */}
				<div className="relative w-full h-full">
					<RotatingSvg
						className="absolute w-screen"
						src="/hero/heroCircle00.svg"
						alt="rotating circle"
						width={1680}
						height={1680}
					/>
					<RotatingSvg
						className="absolute"
						src="/hero/heroCircle01.svg"
						alt="rotating circle"
						width={1680}
						height={1680}
					/>
					<RotatingSvg
						className="absolute"
						src="/hero/heroCircle02.svg"
						alt="rotating circle"
						width={1680}
						height={1680}
						duration={3} // Optional: control rotation speed (seconds per rotation)
					/>
					<RotatingSvg
						className="absolute"
						src="/hero/heroCircle03.svg"
						alt="rotating circle"
						width={1680}
						height={1680}
						duration={3} // Optional: control rotation speed (seconds per rotation)
					/>
				</div>
				{/* Text Content */}
				<div className="absolute w-6/12 z-10 text-center flex flex-col gap-4 mt-44">
					<h2 className="text-md lg:text-2xl font-medium">
						Study group made for students by students
					</h2>
					<h1 className="text-[40px] lg:text-[80px] xl:text-[100px] font-bold lg:leading-[120%] leading-tight">
						Become a part of the biggest study group in Melb
					</h1>
				</div>

				{/* Description */}
				<div className="absolute bottom-8 left-8 w-3/12 text-left z-[1]">
					<h3 className="text-sm md:text-md font-medium">
						A dedicated time & space every Saturday for students to invest in
						their dreams despite their busy schedules.
					</h3>
				</div>

				{/* Learn More Icon */}
				<div className="absolute w-12 md:w-52 aspect-square bottom-8 right-8 mb-4 mr-0 md:mr-4 flex flex-col items-center justify-center text-center">
					<h3 className="font-medium">Learn More</h3>
					<div className="mt-6">
						<Image src="/arrow.svg" alt="Arrow Icon" width={16} height={16} />
					</div>
					<Image
						className="absolute hidden md:block"
						src="/decoration/elipse.png"
						alt="Arrow Icon"
						fill
					/>
				</div>
			</div>

			{/* Page 2 - With Two-Row Staggered Infinite Card Slider */}
			<div className="relative w-full min-h-screen flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 z-20 bg-[#F8F8FF] py-16">
				{/* Title & Description - Better Balanced Two-Column */}
				<div className="w-full max-w-6xl mx-auto mb-16">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
						{/* Left Side - Title */}
						<div>
							<h2 className="text-5xl md:text-7xl font-bold text-black mb-3">
								Why Study with us?
							</h2>
							<span
								className={`${rockSalt.className} text-[#FED800] font-bold text-lg md:text-2xl block`}
							>
								— COME ON IT'S US
							</span>
						</div>

						{/* Right Side - Description */}
						<div>
							<p className="text-lg md:text-xl font-medium text-black mb-8 mt-4">
								Make your Saturday count! Every week, meet new goals and new
								people. SNL is where learning and community grow together.
							</p>
						</div>
					</div>
				</div>

				{/* Two-Row Staggered Infinite Card Slider */}
				<InfiniteSlider />
			</div>

			{/* Page 3 - Fixed Layout */}
			<section className="relative w-full bg-black overflow-hidden py-24 px-6 md:px-12 lg:px-24">
				{/* Title and Subheading */}
				<div className="max-w-6xl mx-auto text-white">
					<div className="grid grid-cols-1 md:grid-cols-10 gap-6 items-start">
						{/* Title */}
						<div className="md:col-span-6">
							<h2 className="text-4xl md:text-5xl font-semibold leading-tight">
								Networking for your <br />
								successful future career
							</h2>
						</div>

						{/* Subheading */}
						<div className="md:col-span-4 mt-2">
							<p className="text-base md:text-xl font-medium text-white text-opacity-60">
								Because LinkedIn Stalking Only Gets You So Far! <br />
								Plus, think of it as good karma.
							</p>
						</div>
					</div>
				</div>

				{/* Phone & Chat Section */}
				<div className="relative max-w-6xl mx-auto flex flex-col items-center justify-center mt-20">
					{/* Phone + Bubbles Wrapper */}
					<div className="relative w-full max-w-[1200px] mx-auto">
						{/* Phone Image */}
						<div className="relative">
							<Image
								src="/decoration/phoneMockup.png"
								alt="Phone Mockup"
								width={1200}
								height={1600}
								className="w-full h-auto"
								priority
							/>

							{/* Chat Bubbles - Unified Approach with Responsive Positioning */}
							{/* Gray Bubble */}
							<div className="absolute bottom-[40%] md:bottom-[40%] right-[5%] md:right-[10%] bg-[#E6E5EB] text-black text-sm md:text-xl font-medium p-3 md:p-6 rounded-[20px] md:rounded-[24px] max-w-[60%] shadow-md leading-relaxed">
								Expand your university and career network by connecting with
								accomplished study members!
								<svg
									className="absolute bottom-[-10px] right-[12px] w-3 md:w-4 h-3 md:h-4"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									role="graphics-symbol img"
								>
									<path d="M0 0 C8 20, 20 20, 20 20 L20 0 Z" fill="#E6E5EB" />
								</svg>
							</div>

							{/* Yellow Bubble */}
							<div className="absolute bottom-[10%] md:bottom-[14%] left-[5%] md:left-[10%] bg-[#FFDC73] text-black text-sm md:text-xl font-medium p-3 md:p-6 rounded-[20px] md:rounded-[24px] max-w-[60%] shadow-md leading-relaxed">
								We invite you to sponsor and support your juniors on their
								journey to success.
								<svg
									className="absolute bottom-[-10px] left-[12px] w-3 md:w-4 h-3 md:h-4"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									role="graphics-symbol img"
								>
									<path d="M20 0 C12 20, 0 20, 0 20 L0 0 Z" fill="#FFDC73" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Page 4 - Study Plan Management */}
			<section className="relative w-full bg-black text-white py-24 px-6 md:px-12 lg:px-24">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						{/* Left Side - Text Content */}
						<div className="flex flex-col space-y-6">
							<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
								Manage Your Study Plan with Ease
							</h2>

							<div className="space-y-4 text-gray-300">
								<p className="text-xl md:text-2xl">
									How well are you managing your uni study plan?
								</p>

								<p className="text-lg md:text-2xl">
									Use our webtools to manage your study plan, time schedule, and
									grade tracking!
								</p>
							</div>
						</div>

						{/* Right Side - iPhone Mockup */}
						<div className="relative flex justify-center md:justify-end mt-8 md:mt-0">
							<div className="relative w-full max-w-[320px] md:max-w-[400px]">
								<Image
									src="/decoration/phone.png"
									alt="iPhone Mockup"
									width={400}
									height={800}
									className="w-full h-auto"
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Page 5 - Community Sharing */}
			<section className="relative w-full bg-[#F8F8FF] py-24 px-6 md:px-12 lg:px-24">
				{/* Header Container with MELB Background */}
				<div className="relative max-w-6xl mx-auto mb-16">
					{/* MELB Background Text */}
					<div className="absolute inset-0 flex items-center justify-center">
						<h1
							className={`${rockSalt.className} text-[80px] md:text-[100px] lg:text-[150px] font-bold text-[#FFD800] opacity-60`}
						>
							MELB
						</h1>
					</div>

					{/* Heading Text */}
					<div className="relative z-10 text-center py-8">
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl mx-auto">
							Share your Uni & Career Story with One-Uni Community in
						</h2>
					</div>
				</div>

				{/* Board Image - Completely separate from header */}
				<div className="mx-auto max-w-5xl">
					<Image
						src="/decoration/board.png"
						alt="University Community Board"
						width={1200}
						height={800}
						className="w-full h-auto rounded-lg shadow-xl"
						priority
					/>
				</div>
			</section>

			{/* Page 6 - Testimonials */}
			<section className="relative w-full bg-[#F8F8FF] py-24 px-6 md:px-12 lg:px-24">
				<div className="max-w-6xl mx-auto">
					{/* Section Heading */}
					<div className="mb-12">
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
							Connect & Develop
						</h2>
						<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
							For your dream to come true
						</h3>
					</div>

					{/* Testimonial Carousel */}
					<TestimonialCarousel />
				</div>
			</section>

			{/* Final Page */}
			<Footer />
		</div>
	);
}
