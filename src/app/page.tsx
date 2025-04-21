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
		<div className="flex w-full flex-col overflow-x-hidden bg-[#F8F8FF]">
			{/* Page 1 */}

			{/* Page 1 - Hero Section */}
			<div className="relative flex h-screen w-full justify-center">
				{/* TopNav Spacing */}
				<div className="h-16" />

				{/* Yellow Circle */}
				<div className=" absolute mt-24 aspect-square w-[150%] rounded-full bg-[#FFDC73]">
					d
				</div>
				{/* Text Content */}
				<div className="absolute z-10 mt-44 flex w-6/12 flex-col gap-4 text-center">
					<h2 className="font-medium text-md lg:text-2xl">
						Study group made for students by students
					</h2>
					<h1 className="font-bold text-[40px] leading-tight lg:text-[80px] lg:leading-[120%] xl:text-[100px]">
						Become a part of the biggest study group in Melb
					</h1>
				</div>

				{/* Description */}
				<div className="absolute bottom-8 left-8 z-[1] w-3/12 text-left">
					<h3 className="font-medium text-sm md:text-md">
						A dedicated time & space every Saturday for students to invest in
						their dreams despite their busy schedules.
					</h3>
				</div>

				{/* Learn More Icon */}
				<div className="absolute right-8 bottom-8 mr-0 mb-4 flex aspect-square w-12 flex-col items-center justify-center text-center md:mr-4 md:w-52">
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
			<div className="relative z-20 flex min-h-screen w-full flex-col items-start justify-center bg-[#F8F8FF] px-6 py-16 md:px-12 lg:px-24">
				{/* Title & Description - Better Balanced Two-Column */}
				<div className="mx-auto mb-16 w-full max-w-6xl">
					<div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
						{/* Left Side - Title */}
						<div>
							<h2 className="mb-3 font-bold text-5xl text-black md:text-7xl">
								Why Study with us?
							</h2>
							<span
								className={`${rockSalt.className} block font-bold text-[#FED800] text-lg md:text-2xl`}
							>
								— COME ON IT'S US
							</span>
						</div>

						{/* Right Side - Description */}
						<div>
							<p className="mt-4 mb-8 font-medium text-black text-lg md:text-xl">
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
			<section className="relative w-full overflow-hidden bg-black px-6 py-24 md:px-12 lg:px-24">
				{/* Title and Subheading */}
				<div className="mx-auto max-w-6xl text-white">
					<div className="grid grid-cols-1 items-start gap-6 md:grid-cols-10">
						{/* Title */}
						<div className="md:col-span-6">
							<h2 className="font-semibold text-4xl leading-tight md:text-5xl">
								Networking for your <br />
								successful future career
							</h2>
						</div>

						{/* Subheading */}
						<div className="mt-2 md:col-span-4">
							<p className="font-medium text-base text-white text-opacity-60 md:text-xl">
								Because LinkedIn Stalking Only Gets You So Far! <br />
								Plus, think of it as good karma.
							</p>
						</div>
					</div>
				</div>

				{/* Phone & Chat Section */}
				<div className="relative mx-auto mt-20 flex max-w-6xl flex-col items-center justify-center">
					{/* Phone + Bubbles Wrapper */}
					<div className="relative mx-auto w-full max-w-[1200px]">
						{/* Phone Image */}
						<div className="relative">
							<Image
								src="/decoration/phoneMockup.png"
								alt="Phone Mockup"
								width={1200}
								height={1600}
								className="h-auto w-full"
								priority
							/>

							{/* Chat Bubbles - Unified Approach with Responsive Positioning */}
							{/* Gray Bubble */}
							<div className="absolute right-[5%] bottom-[40%] max-w-[60%] rounded-[20px] bg-[#E6E5EB] p-3 font-medium text-black text-sm leading-relaxed shadow-md md:right-[10%] md:bottom-[40%] md:rounded-[24px] md:p-6 md:text-xl">
								Expand your university and career network by connecting with
								accomplished study members!
								<svg
									className="absolute right-[12px] bottom-[-10px] h-3 w-3 md:h-4 md:w-4"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									role="graphics-symbol img"
								>
									<path d="M0 0 C8 20, 20 20, 20 20 L20 0 Z" fill="#E6E5EB" />
								</svg>
							</div>

							{/* Yellow Bubble */}
							<div className="absolute bottom-[10%] left-[5%] max-w-[60%] rounded-[20px] bg-[#FFDC73] p-3 font-medium text-black text-sm leading-relaxed shadow-md md:bottom-[14%] md:left-[10%] md:rounded-[24px] md:p-6 md:text-xl">
								We invite you to sponsor and support your juniors on their
								journey to success.
								<svg
									className="absolute bottom-[-10px] left-[12px] h-3 w-3 md:h-4 md:w-4"
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
			<section className="relative w-full bg-black px-6 py-24 text-white md:px-12 lg:px-24">
				<div className="mx-auto max-w-6xl">
					<div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
						{/* Left Side - Text Content */}
						<div className="flex flex-col space-y-6">
							<h2 className="font-bold text-4xl leading-tight md:text-5xl lg:text-6xl">
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
						<div className="relative mt-8 flex justify-center md:mt-0 md:justify-end">
							<div className="relative w-full max-w-[320px] md:max-w-[400px]">
								<Image
									src="/decoration/phone.png"
									alt="iPhone Mockup"
									width={400}
									height={800}
									className="h-auto w-full"
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Page 5 - Community Sharing */}
			<section className="relative w-full bg-[#F8F8FF] px-6 py-24 md:px-12 lg:px-24">
				{/* Header Container with MELB Background */}
				<div className="relative mx-auto mb-16 max-w-6xl">
					{/* MELB Background Text */}
					<div className="absolute inset-0 flex items-center justify-center">
						<h1
							className={`${rockSalt.className} font-bold text-[#FFD800] text-[80px] opacity-60 md:text-[100px] lg:text-[150px]`}
						>
							MELB
						</h1>
					</div>

					{/* Heading Text */}
					<div className="relative z-10 py-8 text-center">
						<h2 className="mx-auto max-w-5xl font-bold text-4xl leading-tight md:text-5xl lg:text-6xl">
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
						className="h-auto w-full rounded-lg shadow-xl"
						priority
					/>
				</div>
			</section>

			{/* Page 6 - Testimonials */}
			<section className="relative w-full bg-[#F8F8FF] px-6 py-24 md:px-12 lg:px-24">
				<div className="mx-auto max-w-6xl">
					{/* Section Heading */}
					<div className="mb-12">
						<h2 className="font-bold text-4xl leading-tight md:text-5xl lg:text-6xl">
							Connect & Develop
						</h2>
						<h3 className="mt-2 font-bold text-3xl md:text-4xl lg:text-5xl">
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
