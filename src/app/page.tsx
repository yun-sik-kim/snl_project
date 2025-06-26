"use client";
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollToPlugin } from "gsap/src/ScrollToPlugin";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import CustomCursor from "@components/CustomCursor";
import LayeredSvg from "@components/LayeredSvg";

import TestimonialCarousel from "@components/TestimonialCarousel";
import Footer from "@components/layout/Footer";
import InfiniteSlider from "./components/InfiniteSlider";
import RotatingSvg from "./components/animation/RotatingSvg";

import { Rock_Salt } from "next/font/google";
// import { Fullscreen } from "lucide-react";

gsap.registerPlugin(
	useGSAP,
	DrawSVGPlugin,
	MorphSVGPlugin,
	ScrollToPlugin,
	ScrollTrigger,
);

const rockSalt = Rock_Salt({
	weight: "400", // Rock Salt only has 400 weight
	style: "normal",
	subsets: ["latin"],
});

const sliderItems = [
	{ id: 1, src: "/images/snl_meeting1.png", alt: "Slide 1" },
	{ id: 2, src: "/images/snl_meeting2.png", alt: "Slide 2" },
	{ id: 3, src: "/images/snl_meeting3.png", alt: "Slide 3" },
	{ id: 4, src: "/images/snl_meeting4.png", alt: "Slide 4" },
	{ id: 5, src: "/images/snl_meeting1.png", alt: "Slide 1" },
	{ id: 6, src: "/images/snl_meeting2.png", alt: "Slide 2" },
	{ id: 7, src: "/images/snl_meeting3.png", alt: "Slide 3" },
	{ id: 8, src: "/images/snl_meeting4.png", alt: "Slide 4" },
];

export default function Home() {
	const containerRef = useRef<HTMLDivElement>(null);
	const pathRef = useRef<SVGPathElement>(null);

	const { contextSafe } = useGSAP(
		() => {
			// gsap.to("#bgCircleStart", {
			// 	duration: 5,
			// 	morphSVG: "#bgCircleEnd",
			// 	repeat: 1,
			// 	yoyo: true,
			// 	repeatDelay: 0.2,
			// });

			gsap.from("#bgCircle01", {
				transformOrigin: "center center",
				duration: 10,
				rotation: 360,
				repeat: -1,
				ease: "none",
			});
			gsap.from("#bgCircle02", {
				transformOrigin: "center center",
				duration: 15,
				rotation: 360,
				repeat: -1,
				ease: "none",
			});
			gsap.from("#bgCircle03", {
				transformOrigin: "center center",
				duration: 9,
				rotation: 360,
				repeat: -1,
				ease: "none",
			});
			gsap.from("#bgCircle04", {
				transformOrigin: "center center",
				duration: 30,
				rotation: 360,
				repeat: -1,
				ease: "none",
			});

			const tl = gsap.timeline();
			tl.from("#svgPenNewN", { duration: 0.3, drawSVG: 0 })
				.from("#svgPenNewE1", { duration: 0.3, drawSVG: 0 })
				.from("#svgPenNewE2", { duration: 0.3, drawSVG: 0 })
				.from("#svgPenNewW", { duration: 0.4, drawSVG: 0 })
				// .from("#svgPenNewEx1", { duration: 0.3, drawSVG: 0 })
				.from("#svgPenNewEx2", { duration: 0.3, drawSVG: 0 })
				.from("#svgPenNewEx3", { duration: 0.3, drawSVG: 0 })
				.from(
					"#svgPenNewV",
					{ duration: 1, ease: "power4.out", drawSVG: 0 },
					1.7,
				)
				.from(".svgUnderlinePath", { duration: 2, drawSVG: 0 }, 0.7)
				.from(".svgCirclePath", { duration: 1, drawSVG: 0 }, 3.9);
		},
		{ scope: containerRef },
	);

	const onClickLearnMore = contextSafe(() => {
		gsap.to(window, { duration: 1.5, ease: "power4.out", scrollTo: ".page2" });
	});

	return (
		<div
			ref={containerRef}
			className="page 1relative flex w-full flex-col overflow-x-hidden bg-[#F8F8FF]"
			style={{ cursor: "url(/cursors/default.svg), pointer" }}
		>
			{/* <CustomCursor /> */}
			{/* Page 1 - Hero Section */}
			<section className="relative flex h-dvh w-full justify-center">
				{/* Yellow Background Circle */}
				<svg
					className="absolute top-32 w-[150%]"
					// width="1024"
					// height="1024"
					viewBox="0 0 1024 1024"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					role="graphics-symbol"
				>
					<path
						id="bgCircle01"
						d="M36.6921 609.191C7.29432 444.608 34.6343 348.462 167.512 185.957C300.39 23.4516 629.352 57.2502 719.603 91.0485C809.854 124.847 998 258.028 998 502.8C998 747.572 841.31 951.583 593.486 960.694C345.663 969.805 66.0899 773.775 36.6921 609.191Z"
						fill="#FFDC73"
						fillOpacity="0.33"
					/>
					<path
						id="bgCircle02"
						d="M64.0081 698.234C-1.49261 528.031 47.6679 265.253 156 160C264.332 54.7474 620.765 25.1195 713.118 59.6863C805.472 94.253 998 230.463 998 480.8C998 731.137 819.291 984.225 565.695 993.543C312.099 1002.86 129.509 868.438 64.0081 698.234Z"
						fill="#FFDC73"
						fillOpacity="0.33"
					/>
					<path
						id="bgCircle03"
						d="M26 509.394C30.5992 285.311 215.648 71.9831 488.742 53.9749C761.836 35.9666 997 270.436 997 509.394C997 748.352 777.482 983.296 509.129 970.5C240.777 957.705 26 748.352 26 509.394Z"
						fill="#FFDC73"
						fillOpacity="0.33"
					/>
					<path
						id="bgCircle04"
						d="M26 512C30.5992 287.747 243.366 79 511.5 79C779.634 79 997 272.861 997 512C997 751.139 779.634 945 511.5 945C243.366 945 26 751.139 26 512Z"
						fill="#FFDC73"
						fillOpacity="0.45"
					/>
				</svg>
				{/* gradient div top (transparent) to bottom (#FFDC73) */}
				<div
					className="absolute bottom-0 h-1/2 w-full bg-gradient-to-b from-transparent to-[#FFDC73]"
					style={{ cursor: "url(/cursors/white.svg), pointer" }}
				/>
				<div
					className="absolute bottom-0 h-3/5 w-8/12"
					style={{ cursor: "url(/cursors/white.svg), pointer" }}
				/>
				{/* Text Content */}
				<div
					className="absolute bottom-36 z-10 flex w-[47rem] flex-col gap-4 text-center"
					style={{ cursor: "url(/cursors/white.svg), pointer" }}
				>
					<h2 className="font-medium text-md lg:text-2xl">
						Study group made for students by students
					</h2>
					<svg
						className="absolute top-[142px] left-[-56px] z-50"
						width="50"
						height="56"
						viewBox="0 0 50 56"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						role="graphics-symbol"
					>
						<path
							id="svgPenNewV"
							strokeWidth="3px"
							d="M22.5 46.5C25.001 49 27.5277 51.4623 30.5 55C32.0241 50.3815 32.001 47 31.5 42"
							stroke="black"
							strokeMiterlimit="1.0063"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="svgPenNewEx3"
							strokeWidth="3px"
							d="M49 17.5L48.5 18.5"
							stroke="black"
							strokeMiterlimit="1.0063"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="svgPenNewEx2"
							strokeWidth="3px"
							d="M47.5 11C45.9568 7.09883 44.9423 4.82327 42.5 0.5C42.7781 1.32269 42.9219 2.27007 43 3"
							stroke="black"
							strokeMiterlimit="1.0063"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="svgPenNewW"
							strokeWidth="3px"
							d="M26 13C28 17.5 32.5 19.5 34.5 24.5C34.5 22 34 20 33 16C37 16.5 38.5379 18.8609 42 21C41.501 16 40 11 37.5 6.5"
							stroke="black"
							strokeMiterlimit="1.0063"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="svgPenNewE2"
							strokeWidth="3px"
							d="M20 26C21.9571 24.8753 22.4517 24.1209 24 22.5"
							stroke="black"
							strokeMiterlimit="1.0063"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="svgPenNewE1"
							strokeWidth="3px"
							d="M22 15C19 16.5 17.1265 18.5 16.9993 20.5C16.7205 24.8845 21.0126 33 22.0126 34C23.0126 35 25.3819 34.5389 27.5 30"
							stroke="black"
							strokeMiterlimit="1.0063"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							id="svgPenNewN"
							strokeWidth="3px"
							d="M7.99964 47C3.99964 40.5 2.5 37 1 31.5C4 32.5 13.1695 38 15.5 40C15.8525 40.3025 16 40 16 40C14.5 34.5 10.4996 27.5 8.49964 21"
							stroke="black"
							strokeMiterlimit="1.0063"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<h1 className="mt-6 font-bold text-[48px] leading-tight lg:font-black lg:text-[80px] lg:leading-[1.05]">
						Where Melbourne's Enthusiastic Young Professionals Study, Network &
						Dream Together
					</h1>
					<svg
						className="absolute right-[120px] bottom-[-26px]"
						width="261"
						height="32"
						viewBox="-2 -2 263 35"
						role="graphics-symbol"
						fill="none"
					>
						<path
							className="svgUnderlinePath"
							stroke="black"
							strokeWidth="4px"
							d="M0.5 18.7586C41 30.9998 64 27.9998 100 4.85566C103.293 -5.594 78 4.41771 71.5 19.9191C79.5 41.9998 175 17.3565 168 3C105.5 18.7586 211.5 47.5 260.5 17.3565"
						/>
					</svg>
				</div>
				{/* Description */}
				<div
					className="absolute bottom-8 left-8 z-[1] w-3/12 text-left"
					style={{ cursor: "url(/cursors/white.svg), pointer" }}
				>
					<h3 className="font-medium text-sm md:text-md">
						A dedicated time & space every Saturday for students to invest in
						their dreams despite their busy schedules.
					</h3>
				</div>
				{/* Learn More Icon */}
				<div
					className="learnMoreBtn absolute right-8 bottom-0 mr-0 mb-4 flex aspect-square w-12 flex-col items-center justify-center text-center md:mr-4 md:w-52"
					style={{ cursor: "url(/cursors/white.svg), pointer" }}
					onClick={onClickLearnMore}
					onKeyDown={onClickLearnMore}
				>
					<div className="flex flex-col items-center">
						<h3 className="font-medium">Learn More</h3>
						<Image
							className="mt-6"
							src="/arrow.svg"
							alt="Arrow Icon"
							width={16}
							height={16}
						/>
						<svg
							className="absolute bottom-[58px]"
							role="graphics-symbol"
							width="165"
							height="97"
							viewBox="0 -2 167 100"
						>
							<path
								className="svgCirclePath"
								d="M129.704 2.81323C94.5713 -4.6583 23.0499 11.1175 2.97424 47.233C-10.8276 85.8407 50.7266 101.771 94.5706 94.1446C138.415 86.5185 164 60.5172 164 43.0814C164 19.8337 123.848 5.71896 78.2592 9.4552"
								stroke="black"
								strokeWidth="4px"
								fill="none"
							/>
						</svg>
					</div>
				</div>
			</section>

			{/* Page 2 - With Two-Row Staggered Infinite Card Slider */}
			<section
				className="page2 sticky top-0 z-10 flex h-dvh w-full flex-col items-start justify-center bg-BRAND_COLOR px-6 py-16 md:px-12 lg:px-24"
				style={{ cursor: "url(/cursors/white.svg), pointer" }}
			>
				{/* Title & Description - Better Balanced Two-Column */}
				<div className="mx-auto w-full max-w-6xl">
					<div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
						{/* Left Side - Title */}
						<div>
							<h2 className="mb-3 font-bold text-5xl text-black md:text-7xl">
								Connect with people who pursue the same goals and transformation
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
				{/* <InfiniteSlider /> */}
				<InfiniteSlider
					items={sliderItems}
					width={300}
					height={180}
					duration={50}
					reverse={false}
					gap={-26}
					useMask={false}
				/>
				<h2 className="mb-3 font-bold text-5xl text-black md:text-7xl">
					fight procrastination
				</h2>
			</section>

			{/* Page 3 - Fixed Layout */}
			<section className="page3 sticky top-0 z-20 h-dvh w-full overflow-hidden bg-black px-6 py-24 md:px-12 lg:px-24">
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
			<section className="page4 relative h-dvh w-full bg-black px-6 py-24 text-white md:px-12 lg:px-24">
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
			<section className="page5 relative h-dvh w-full bg-[#F8F8FF] px-6 py-24 md:px-12 lg:px-24">
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
			<section className="page6 relative h-dvh w-full bg-[#F8F8FF] px-6 py-24 md:px-12 lg:px-24">
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
