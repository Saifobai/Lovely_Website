// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Manifesto = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const AUTOPLAY_DURATION = 15000;

//   const slides = [
//     {
//       id: "01",
//       title: "Clarity & Respect",
//       content:
//         "Clarity is a form of respect.\nFor your capital.\nFor your time.\nFor the complexity you navigate.",
//     },
//     {
//       id: "02",
//       title: "Precision Advisory",
//       content:
//         "We believe advisory should simplify decisions.\nExpertise matters when applied with context,\nprecision, and judgment.",
//     },
//     {
//       id: "03",
//       title: "Boutique Architecture",
//       content:
//         "We are boutique by choice. Focused by principle.\nBuilt for complex cross-border realities.\nWe work closely with our clients and partners.",
//     },
//     {
//       id: "04",
//       title: "Grounded Realities",
//       content:
//         "Grounded in the jurisdictions, systems,\nand markets you operate in.\nWe value discretion as much as outcomes.\nAnd long-term trust more than short-term wins.",
//     },
//     {
//       id: "05",
//       title: "Capital Meets Clarity",
//       content:
//         "Real progress does not come from louder advice.\nIt comes from clearer thinking.\nThis is Lovely.\nWhere capital meets clarity.",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % slides.length);
//     }, AUTOPLAY_DURATION);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const activeSlide = slides[activeIndex];

//   return (
//     <section
//       id="manifesto"
//       className="relative min-h-screen py-32 overflow-hidden bg-transparent"
//     >
//       {/* 1. CONTAINER: Reduced to 1400px to pull content toward the middle.
//           Matches the "Optical Center" of the Hero.
//       */}
//       <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-start">
//         {/* HEADER */}
//         <div className="mb-20 w-full">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-6xl md:text-7xl xl:text-[80px] font-black uppercase italic tracking-tighter text-[#F5F7FA] leading-[0.8]"
//           >
//             The Lovely <br />
//             <span className="text-[#3B82F6] italic">Manifesto</span>
//           </motion.h2>
//         </div>

//         {/* 2. FLEX AREA:
//                - justify-center pulls both sides toward the gap.
//                - gap-16 lg:gap-24 provides the middle breathing room.
//         */}
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-24 w-full">
//           {/* LEFT NAV: Fixed width or smaller flex to keep it tight */}
//           <div className="flex-1 flex flex-col gap-6 pt-4 min-w-[300px]">
//             {slides.map((slide, idx) => (
//               <button
//                 key={slide.id}
//                 onClick={() => setActiveIndex(idx)}
//                 className="flex items-center gap-6 group text-left"
//               >
//                 <span
//                   className={`font-mono text-xs transition-colors duration-500 ${activeIndex === idx ? "text-[#3B82F6]" : "text-[#9CA3AF]/20 group-hover:text-[#9CA3AF]/40"}`}
//                 >
//                   {slide.id}
//                 </span>
//                 <span
//                   className={`uppercase tracking-[0.3em] font-black text-sm transition-all duration-500 ${activeIndex === idx ? "text-[#F5F7FA] translate-x-3" : "text-[#9CA3AF]/30 group-hover:text-[#9CA3AF]/50"}`}
//                 >
//                   {slide.title}
//                 </span>
//                 {activeIndex === idx && (
//                   <motion.div
//                     layoutId="manifesto-dot"
//                     className="w-1.5 h-1.5 bg-[#C2413A] rounded-full shadow-[0_0_15px_#C2413A]"
//                   />
//                 )}
//               </button>
//             ))}
//           </div>

//           {/* 3. RIGHT CARD:
//                  - flex-[1.5] makes this side naturally wider than the nav.
//                  - max-w-none allows the card to use all that flex space.
//           */}
//           <div className="flex-[1.5] w-full flex justify-center lg:justify-end">
//             <div className="relative w-full min-h-[500px] xl:min-h-[550px] rounded-[48px] border border-[#1F2937] bg-[#111827]/60 backdrop-blur-3xl p-10 md:p-16 xl:p-20 shadow-2xl overflow-hidden">
//               {/* Progress Bar */}
//               <div className="absolute top-0 left-0 w-full h-[2px] bg-[#1F2937]">
//                 <motion.div
//                   key={activeIndex}
//                   initial={{ width: 0 }}
//                   animate={{ width: "100%" }}
//                   transition={{
//                     duration: AUTOPLAY_DURATION / 1000,
//                     ease: "linear",
//                   }}
//                   className="h-full bg-[#3B82F6]"
//                 />
//               </div>

//               {/* Scan Effect */}
//               <motion.div
//                 key={`scan-${activeIndex}`}
//                 initial={{ y: "-120%" }}
//                 animate={{ y: "220%" }}
//                 transition={{ duration: 1.5, ease: "easeInOut" }}
//                 className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F7FA]/5 to-transparent pointer-events-none"
//               />

//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeIndex}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ duration: 0.5 }}
//                   className="relative z-10 h-full flex flex-col justify-center"
//                 >
//                   <h3 className="text-4xl md:text-5xl xl:text-6xl font-black uppercase italic mb-8 tracking-tighter leading-none text-[#F5F7FA]">
//                     {activeSlide.title.split(" ")[0]} <br />
//                     <span className="text-[#3B82F6]">
//                       {activeSlide.title.split(" ").slice(1).join(" ")}
//                     </span>
//                   </h3>
//                   <p className="whitespace-pre-line text-lg md:text-xl xl:text-2xl text-[#9CA3AF] leading-relaxed font-medium border-l-2 border-[#C2413A]/40 pl-8 italic">
//                     {activeSlide.content}
//                   </p>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Manifesto;

//===========================================================================
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Manifesto = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const AUTOPLAY_DURATION = 15000;

  const slides = [
    {
      id: "01",
      title: "Clarity & Respect",
      content:
        "Clarity is a form of respect.\nFor your capital.\nFor your time.\nFor the complexity you navigate.",
    },
    {
      id: "02",
      title: "Precision Advisory",
      content:
        "We believe advisory should simplify decisions.\nExpertise matters when applied with context,\nprecision, and judgment.",
    },
    {
      id: "03",
      title: "Boutique Architecture",
      content:
        "We are boutique by choice. Focused by principle.\nBuilt for complex cross-border realities.\nWe work closely with our clients and partners.",
    },
    {
      id: "04",
      title: "Grounded Realities",
      content:
        "Grounded in the jurisdictions, systems,\nand markets you operate in.\nWe value discretion as much as outcomes.\nAnd long-term trust more than short-term wins.",
    },
    {
      id: "05",
      title: "Capital Meets Clarity",
      content:
        "Real progress does not come from louder advice.\nIt comes from clearer thinking.\nThis is Lovely.\nWhere capital meets clarity.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_DURATION);
    return () => clearInterval(interval);
  }, [slides.length]);

  const activeSlide = slides[activeIndex];

  return (
    <section
      id="manifesto"
      /* Adjusted padding for mobile */
      className="relative min-h-screen py-20 lg:py-32 overflow-hidden bg-transparent"
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-start">
        {/* HEADER */}
        <div className="mb-12 lg:mb-20 w-full text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            /* Responsive text: 5xl -> 7xl -> 80px */
            className="text-5xl md:text-7xl xl:text-[80px] font-black uppercase italic tracking-tighter text-[#F5F7FA] leading-[0.9] lg:leading-[0.8]"
          >
            The Lovely <br />
            <span className="text-[#3B82F6] italic">Manifesto</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-24 w-full">
          {/* LEFT NAV: On mobile, this becomes a horizontal scrollable row or a tight stack */}
          <div className="flex flex-row lg:flex-col gap-4 lg:gap-6 pt-4 w-full lg:w-auto overflow-x-auto lg:overflow-visible no-scrollbar pb-4 lg:pb-0">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setActiveIndex(idx)}
                className="flex items-center gap-3 lg:gap-6 group text-left whitespace-nowrap lg:whitespace-normal shrink-0"
              >
                <span
                  className={`font-mono text-[10px] lg:text-xs transition-colors duration-500 ${activeIndex === idx ? "text-[#3B82F6]" : "text-[#9CA3AF]/20 group-hover:text-[#9CA3AF]/40"}`}
                >
                  {slide.id}
                </span>
                <span
                  className={`uppercase tracking-[0.2em] lg:tracking-[0.3em] font-black text-[10px] lg:text-sm transition-all duration-500 ${activeIndex === idx ? "text-[#F5F7FA] lg:translate-x-3" : "text-[#9CA3AF]/30 group-hover:text-[#9CA3AF]/50"}`}
                >
                  {slide.title}
                </span>
                {activeIndex === idx && (
                  <motion.div
                    layoutId="manifesto-dot"
                    className="w-1 lg:w-1.5 h-1 lg:h-1.5 bg-[#C2413A] rounded-full shadow-[0_0_15px_#C2413A] hidden lg:block"
                  />
                )}
              </button>
            ))}
          </div>

          {/* RIGHT CARD */}
          <div className="flex-[1.5] w-full flex justify-center lg:justify-end">
            <div className="relative w-full min-h-[400px] md:min-h-[500px] xl:min-h-[550px] rounded-[32px] lg:rounded-[48px] border border-[#1F2937] bg-[#111827]/60 backdrop-blur-3xl p-8 md:p-16 xl:p-20 shadow-2xl overflow-hidden">
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#1F2937]">
                <motion.div
                  key={activeIndex}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: AUTOPLAY_DURATION / 1000,
                    ease: "linear",
                  }}
                  className="h-full bg-[#3B82F6]"
                />
              </div>

              {/* Scan Effect */}
              <motion.div
                key={`scan-${activeIndex}`}
                initial={{ y: "-120%" }}
                animate={{ y: "220%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F7FA]/5 to-transparent pointer-events-none"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 h-full flex flex-col justify-center"
                >
                  <h3 className="text-3xl md:text-5xl xl:text-6xl font-black uppercase italic mb-6 lg:mb-8 tracking-tighter leading-none text-[#F5F7FA]">
                    {activeSlide.title.split(" ")[0]} <br />
                    <span className="text-[#3B82F6]">
                      {activeSlide.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h3>
                  <p className="whitespace-pre-line text-base md:text-xl xl:text-2xl text-[#9CA3AF] leading-relaxed font-medium border-l-2 border-[#C2413A]/40 pl-6 lg:pl-8 italic">
                    {activeSlide.content}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
