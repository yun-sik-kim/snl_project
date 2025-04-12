"use client"

import Image from "next/image";
import Link from 'next/link';

import TestimonialCarousel from "@components/TestimonialCarousel";
import InfiniteCardSlider from "@components/InfiniteCardSlider";

import { Rock_Salt } from "next/font/google";
// import { Fullscreen } from "lucide-react";

const rockSalt = Rock_Salt({
  weight: "400", // Rock Salt only has 400 weight
  style: "normal",
  subsets: ["latin"],
});

// const cards = [
//   {
//     id: 1,
//     title: 'Card 1',
//     description: 'This is the first card description.',
//     image: '/images/card1.jpg',
//   },
//   {
//     id: 2,
//     title: 'Card 2',
//     description: 'This is the second card description.',
//     image: '/images/card2.jpg',
//   },
//   {
//     id: 3,
//     title: 'Card 3',
//     description: 'This is the third card description.',
//     image: '/images/card3.jpg',
//   },
// ];


export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#F8F8FF]">
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
            <span className={`${rockSalt.className} text-[#FED800] font-bold text-lg md:text-2xl block`}>
              — COME ON IT'S US
            </span>
          </div>

          {/* Right Side - Description */}
          <div>
            <p className="text-lg md:text-xl font-medium text-black mb-8 mt-4">
              Make your Saturday count! Every week, meet new goals and new people. SNL is where learning and community grow together.
            </p>
          </div>
        </div>
      </div>

      {/* Two-Row Staggered Infinite Card Slider */}
      <div className="w-full overflow-hidden relative">
        <style jsx>{`
          @keyframes slideCardsLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes slideCardsRight {
            0% {
              transform: translateX(-25%);
            }
            100% {
              transform: translateX(25%);
            }
          }
          
          .cards-track-top {
            animation: slideCardsLeft 30s linear infinite;
            width: fit-content;
            display: flex;
            gap: 1.5rem;
          }
          
          .cards-track-bottom {
            animation: slideCardsLeft 30s linear infinite;
            width: fit-content;
            display: flex;
            gap: 1.5rem;
            margin-top: 1.5rem;
            margin-left: 4rem;
          }
          
          /* Pause animation on hover */
          .cards-container:hover .cards-track-top,
          .cards-container:hover .cards-track-bottom {
            animation-play-state: paused;
          }
          
          .card {
            width: 340px;
            flex-shrink: 0;
            border-radius: 1.5rem;
            padding: 1.75rem;
            display: flex;
            align-items: center;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          }
          
          .black-card {
            background-color: #000;
            color: white;
          }
          
          .white-card {
            background-color: white;
          }
        `}</style>
        
        <div className="cards-container py-4">
          {/* Top Row */}
          <div className="cards-track-top">
            {/* First set of cards - Top Row */}
            <div className="card black-card">
              <p className="text-lg">
                Tired of playing musical chairs at crowded cafés? We got you!
              </p>
            </div>
            
            <div className="card white-card flex justify-center">
              <Image 
                src="/images/snl_meeting1.png" 
                width={800} 
                height={600}  
                alt="snl meeting image" 
              />
            </div>
            
            <div className="card black-card">
              <p className="text-lg">
                And did we tell you about all the free snacks you get.
              </p>
            </div>
            
            {/* Duplicate set for infinite loop - Top Row */}
            <div className="card black-card">
              <p className="text-lg">
                Tired of playing musical chairs at crowded cafés? We got you!
              </p>
            </div>
            
            <div className="card white-card flex justify-center">
            <Image 
                src="/images/snl_meeting2.png" 
                width={800} 
                height={600}  
                alt="snl meeting image" 
              />
            </div>
            
            <div className="card black-card">
              <p className="text-lg">
                And did we tell you about all the free snacks you get.
              </p>
            </div>
          </div>
          
          {/* Bottom Row - Slightly offset */}
          <div className="cards-track-bottom">
            {/* First set of cards - Bottom Row */}
            <div className="card black-card">
              <p className="text-lg">
                From quiet corners to group hubs, we've found the best uni study spaces—so you can actually study (or at least look like you are).
              </p>
            </div>
            
            <div className="card white-card flex justify-center">
              <Image 
                src="/images/snl_meeting3.png" 
                width={800} 
                height={600}  
                alt="snl meeting image" 
              />
            </div>
            
            {/* Duplicate set for infinite loop - Bottom Row */}
            <div className="card black-card">
              <p className="text-lg">
                From quiet corners to group hubs, we've found the best uni study spaces—so you can actually study (or at least look like you are).
              </p>
            </div>
            
            <div className="card white-card flex justify-center">
            <Image 
                src="/images/snl_meeting4.png" 
                width={800} 
                height={600}  
                alt="snl meeting image" 
              />
            </div>

            <div className="card black-card">
              <p className="text-lg">
                From quiet corners to group hubs, we've found the best uni study spaces—so you can actually study (or at least look like you are).
              </p>
            </div>
            
            <div className="card white-card flex justify-center">
              <div className="text-center">STUDY ROOM IMAGE</div>
            </div>


          </div>
        </div>
      </div>
    </div>

    {/* Page 3 - Fixed Layout */}
    <section className="relative w-full bg-black overflow-hidden py-24 px-6 md:px-12 lg:px-24">
      {/* Title and Subheading */}
      <div className="max-w-6xl mx-auto text-white">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6 items-start">
          
          {/* Title */}
          <div className="md:col-span-6">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Networking for your <br />successful future career
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
              Expand your university and career network by connecting with accomplished study members!
              <svg
                className="absolute bottom-[-10px] right-[12px] w-3 md:w-4 h-3 md:h-4"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0 C8 20, 20 20, 20 20 L20 0 Z" fill="#E6E5EB" />
              </svg>
            </div>

            {/* Yellow Bubble */}
            <div className="absolute bottom-[10%] md:bottom-[14%] left-[5%] md:left-[10%] bg-[#FFDC73] text-black text-sm md:text-xl font-medium p-3 md:p-6 rounded-[20px] md:rounded-[24px] max-w-[60%] shadow-md leading-relaxed">
              We invite you to sponsor and support your juniors on their journey to success.
              <svg
                className="absolute bottom-[-10px] left-[12px] w-3 md:w-4 h-3 md:h-4"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
                Use our webtools to manage your study plan, time schedule, 
                and grade tracking!
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
          <h1 className={`${rockSalt.className} text-[80px] md:text-[100px] lg:text-[150px] font-bold text-[#FFD800] opacity-60`}>            
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
    <footer className="relative w-full bg-[#1A1B25] rounded-t-[2.5rem] pt-12 pb-8 px-6 md:px-12 lg:px-24 mt-60">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Logo and Contact Info */}
          <div className="flex flex-col space-y-6">
            {/* Logo */}
            <div className="bg-[#FFD800] text-[#1A1B25] font-bold text-3xl px-4 py-2 rounded-md w-fit">
              SNL
            </div>

            {/* Contact Information */}
            <div className="bg-[#FFD800] text-black font-bold px-4 py-2 rounded-md w-fit">
              Contact us:
            </div>
            
            <div className="text-white space-y-2">
              <p>Email: info@snl.com</p>
              <p>Phone: 1234-567-8910</p>
              <div>
                <p>Address: 1234 Street</p>
                <p>Melbourne City, Victoria 3000</p>
              </div>
            </div>
          </div>

          {/* Right Side - Navigation and Newsletter */}
          <div className="flex flex-col">
            {/* Top Navigation and Social Media */}
            <div className="flex justify-between mb-12">
              {/* Navigation Links */}
              <nav className="flex space-x-8">
                <Link href="#about-us" className="text-white hover:text-[#FFD800] transition-colors">
                  About us
                </Link>
                <Link href="#team" className="text-white hover:text-[#FFD800] transition-colors">
                  Team
                </Link>
                <Link href="#features" className="text-white hover:text-[#FFD800] transition-colors">
                  Features
                </Link>
              </nav>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <Link href="#linkedin" aria-label="LinkedIn">
                  <div className="bg-white rounded-full p-2 w-8 h-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </div>
                </Link>
                <Link href="#facebook" aria-label="Facebook">
                  <div className="bg-white rounded-full p-2 w-8 h-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </div>
                </Link>
                <Link href="#twitter" aria-label="Twitter">
                  <div className="bg-white rounded-full p-2 w-8 h-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="relative bg-[#27283A] rounded-lg p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="flex-grow bg-[#1A1B25] text-white rounded-lg border border-gray-600 px-4 py-3 focus:outline-none focus:border-[#FFD800]"
                />
                <button className="bg-[#FFD800] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#E6C300] transition-colors">
                  Subscribe to news
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-600 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between text-white text-sm">
          <p>© 2025 SNL. All Rights Reserved.</p>
          <Link href="/privacy" className="hover:text-[#FFD800] transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
    </div>

  );
}
