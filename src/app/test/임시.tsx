//   {/* Title & Description - Better Balanced Two-Column */}
//   <div className="w-full max-w-6xl mx-auto mb-16">
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//       {/* Left Side - Title */}
//       <div>
//         <h2 className="text-5xl md:text-7xl font-bold text-black mb-3">
//           Why Study with us?
//         </h2>
//         <span className={`${rockSalt.className} text-[#FED800] font-bold text-lg md:text-2xl block`}>
//           — COME ON IT'S US
//         </span>
//       </div>

//       {/* Right Side - Description */}
//       <div>
//         <p className="text-lg md:text-xl font-medium text-black mb-8 mt-4">
//           Make your Saturday count! Every week, meet new goals and new people. SNL is where learning and community grow together.
//         </p>
//       </div>
//     </div>
//   </div>

//   {/* Two-Row Staggered Infinite Card Slider */}
//   <div className="w-full overflow-hidden relative">
//     <style jsx>{`
//       @keyframes slideCardsLeft {
//         0% {
//           transform: translateX(0);
//         }
//         100% {
//           transform: translateX(-50%);
//         }
//       }

//       @keyframes slideCardsRight {
//         0% {
//           transform: translateX(-25%);
//         }
//         100% {
//           transform: translateX(25%);
//         }
//       }

//       .cards-track-top {
//         animation: slideCardsLeft 30s linear infinite;
//         width: fit-content;
//         display: flex;
//         gap: 1.5rem;
//       }

//       .cards-track-bottom {
//         animation: slideCardsLeft 30s linear infinite;
//         width: fit-content;
//         display: flex;
//         gap: 1.5rem;
//         margin-top: 1.5rem;
//         margin-left: 4rem;
//       }

//       /* Pause animation on hover */
//       .cards-container:hover .cards-track-top,
//       .cards-container:hover .cards-track-bottom {
//         animation-play-state: paused;
//       }

//       .card {
//         width: 340px;
//         flex-shrink: 0;
//         border-radius: 1.5rem;
//         padding: 1.75rem;
//         display: flex;
//         align-items: center;
//         box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
//       }

//       .black-card {
//         background-color: #000;
//         color: white;
//       }

//       .white-card {
//         background-color: white;
//       }
//     `}</style>

//     <div className="cards-container py-4">
//       {/* Top Row */}
//       <div className="cards-track-top">
//         {/* First set of cards - Top Row */}
//         <div className="card black-card">
//           <p className="text-lg">
//             Tired of playing musical chairs at crowded cafés? We got you!
//           </p>
//         </div>

//         <div className="card white-card flex justify-center">
//           <div className="text-center">STUDY ROOM IMAGE</div>
//         </div>

//         <div className="card black-card">
//           <p className="text-lg">
//             And did we tell you about all the free snacks you get.
//           </p>
//         </div>

//         {/* Duplicate set for infinite loop - Top Row */}
//         <div className="card black-card">
//           <p className="text-lg">
//             Tired of playing musical chairs at crowded cafés? We got you!
//           </p>
//         </div>

//         <div className="card white-card flex justify-center">
//           <div className="text-center">STUDY ROOM IMAGE</div>
//         </div>

//         <div className="card black-card">
//           <p className="text-lg">
//             And did we tell you about all the free snacks you get.
//           </p>
//         </div>
//       </div>

//       {/* Bottom Row - Slightly offset */}
//       <div className="cards-track-bottom">
//         {/* First set of cards - Bottom Row */}
//         <div className="card black-card">
//           <p className="text-lg">
//             From quiet corners to group hubs, we've found the best uni study spaces—so you can actually study (or at least look like you are).
//           </p>
//         </div>

//         <div className="card white-card flex justify-center">
//           <div className="text-center">STUDY ROOM IMAGE</div>
//         </div>

//         {/* Duplicate set for infinite loop - Bottom Row */}
//         <div className="card black-card">
//           <p className="text-lg">
//             From quiet corners to group hubs, we've found the best uni study spaces—so you can actually study (or at least look like you are).
//           </p>
//         </div>

//         <div className="card white-card flex justify-center">
//           <div className="text-center">STUDY ROOM IMAGE</div>
//         </div>

//         <div className="card black-card">
//           <p className="text-lg">
//             From quiet corners to group hubs, we've found the best uni study spaces—so you can actually study (or at least look like you are).
//           </p>
//         </div>

//         <div className="card white-card flex justify-center">
//           <div className="text-center">STUDY ROOM IMAGE</div>
//         </div>

//       </div>
//     </div>
//   </div>
