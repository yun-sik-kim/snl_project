const CARDS1 = [
  <img className="" src="/images/snl_meeting1.png" alt="" />,
  <p className="w-[320px] h-[230px] flex items-center px-9 py-6 text-2xl text-center text-wrap bg-DEFUALT_BLACK text-DEFUALT_WHITE rounded-3xl">
    Tired of playing musical chairs at crowded cafés? We got you!
  </p>,
  <img src="/images/snl_meeting2.png" alt="" />,
  <p className="w-[320px] h-[230px] flex items-center px-9 py-6 text-2xl text-center text-wrap bg-slate-200 text-DEFUALT_BLACK rounded-3xl">
    And did we tell you about all the free snacks you get.
  </p>,
  <img src="/images/snl_meeting3.png" alt="" />,
  <p className="w-[320px] h-[230px] flex items-center px-9 py-6 text-2xl text-center text-wrap bg-DEFUALT_BLACK text-DEFUALT_WHITE rounded-3xl">
    From quiet corners to group hubs, we've found the best uni study spaces
  </p>,
  <img src="/images/snl_meeting4.png" alt="" />,
  <p className="w-[320px] h-[230px] flex items-center px-9 py-6 text-2xl text-center text-wrap bg-slate-200 text-DEFUALT_BLACK rounded-3xl">
    —so you can actually study (or at least look like you are).
  </p>,
];


export const InfiniteSlider = () => {
  return (
    <div className="w-full">
      <div
        // w-[calc(card_width * 4)]
        className="relative m-auto w-[calc(320px*4)] overflow-hidden 
    before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] 
    after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:content-['']"
      >
        <div
          // w-[calc(card_width * 2 * number_of_cards)]
          className="animate-infinite-slider flex w-[calc(320px*2*10)]"
        >
          {CARDS1.map((item, index) => (
            <div
              // w-[card_width]
              className="slide content-center flex w-[320px] items-center justify-center ml-3"
              key={index}
            >
              {item}
            </div>
          ))}
          {CARDS1.map((item, index) => (
            <div
              // w-[card_width]
              className="slide flex w-[320px] items-center justify-center"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ORIGINAL CODE
// import {
//   FigmaLogoIcon,
//   FramerLogoIcon,
//   SketchLogoIcon,
//   TwitterLogoIcon,
//   GitHubLogoIcon,
//   VercelLogoIcon,
//   NotionLogoIcon,
//   DiscordLogoIcon,
//   InstagramLogoIcon,
//   LinkedInLogoIcon,
// } from "@radix-ui/react-icons";

// const LOGOS = [
//   <FigmaLogoIcon width={24} height={24} className="text-slate-800" />,
//   <FramerLogoIcon width={24} height={24} className="text-slate-800" />,
//   <SketchLogoIcon width={24} height={24} className=" text-slate-800" />,
//   <TwitterLogoIcon width={24} height={24} className="text-slate-800" />,
//   <GitHubLogoIcon width={24} height={24} className="text-slate-800" />,
//   <VercelLogoIcon width={24} height={24} className="text-slate-800" />,
//   <NotionLogoIcon width={24} height={24} className="text-slate-800" />,
//   <DiscordLogoIcon width={24} height={24} className="text-slate-800" />,
//   <InstagramLogoIcon width={24} height={24} className="text-slate-800" />,
//   <LinkedInLogoIcon width={24} height={24} className="text-slate-800" />,
// ];

// export const InfiniteSlider = () => {
//   return (
//     <div className="relative m-auto w-[500px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
//       <div className="animate-infinite-slider flex w-[calc(250px*10)]">
//         {LOGOS.map((logo, index) => (
//           <div
//             className="slide flex w-[125px] items-center justify-center"
//             key={index}
//           >
//             {logo}
//           </div>
//         ))}
//         {LOGOS.map((logo, index) => (
//           <div
//             className="slide flex w-[125px] items-center justify-center"
//             key={index}
//           >
//             {logo}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
