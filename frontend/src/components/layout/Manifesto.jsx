// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Section from "../layout/Section";

// const Manifesto = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const AUTOPLAY_DURATION = 15000;

//   const slides = [
//     {
//       id: "01",
//       title: "Clarity & Respect",
//       content:
//         "We believe clarity is a form of respect. For your time. For your ambition. For the complexity you face.",
//       tag: "CORE_PRINCIPLE",
//     },
//     {
//       id: "02",
//       title: "Simplification",
//       content:
//         "We believe consulting should simplify decisions and not complicate them. Expertise matters most when applied with context.",
//       tag: "METHODOLOGY",
//     },
//     {
//       id: "03",
//       title: "Boutique Focus",
//       content:
//         "We work boutique by choice. Focused. Thoughtful by design. We collaborate deeply with the realities of your world.",
//       tag: "ARCHITECTURE",
//     },
//     {
//       id: "04",
//       title: "Long-term Trust",
//       content:
//         "We value discretion as much as outcomes. And long-term trust more than short-term wins. We start with listening.",
//       tag: "RELATIONSHIP",
//     },
//     {
//       id: "05",
//       title: "Lovely Reimagined",
//       content:
//         "Real progress doesn’t come from louder advice, but from clearer thinking. This is Lovely. Consulting, reimagined.",
//       tag: "CONCLUSION",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % slides.length);
//     }, AUTOPLAY_DURATION);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <section className="bg-[#050505] min-h-screen flex flex-col items-center justify-center py-32 px-6 relative overflow-hidden">
//       {/* 1. COMPONENT TITLE SECTION */}
//       <div className="max-w-6xl w-full mb-24 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="flex items-center gap-4 mb-4"
//         >
//           <div className="h-[1px] w-12 bg-blue-500" />
//           <span className="font-mono text-[10px] tracking-[0.6em] text-blue-500 uppercase">
//             Internal_Values
//           </span>
//         </motion.div>

//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter"
//         >
//           The Lovely <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
//             Manifesto
//           </span>
//         </motion.h2>
//       </div>

//       {/* 2. THE DATA TERMINAL GRID */}
//       <div className="max-w-6xl w-full grid lg:grid-cols-[1fr_2.5fr] gap-16 xl:gap-28 items-start relative z-10">
//         {/* LEFT: Navigation / Index */}
//         <div className="flex flex-col gap-6 pt-4">
//           <div className="flex items-center gap-3 mb-4">
//             <div className="w-2 h-2 bg-blue-500 animate-pulse" />
//             <span className="font-mono text-[10px] tracking-[0.4em] text-white/50 uppercase">
//               System_Transmission
//             </span>
//           </div>

//           {slides.map((slide, idx) => (
//             <div
//               key={slide.id}
//               className="group flex items-center gap-6 text-left transition-all cursor-default"
//             >
//               <span
//                 className={`font-mono text-xs transition-colors duration-500 ${
//                   activeIndex === idx ? "text-blue-500" : "text-white/10"
//                 }`}
//               >
//                 {slide.id}
//               </span>
//               <span
//                 className={`text-sm uppercase tracking-[0.2em] font-bold transition-all duration-500 ${
//                   activeIndex === idx
//                     ? "text-white translate-x-2"
//                     : "text-white/10"
//                 }`}
//               >
//                 {slide.title}
//               </span>
//               {activeIndex === idx && (
//                 <motion.div
//                   layoutId="pointer"
//                   className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]"
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* RIGHT: Data Display Card */}
//         <div className="relative min-h-[480px] border border-white/10 bg-white/[0.01] backdrop-blur-3xl rounded-[40px] p-10 md:p-20 shadow-2xl overflow-hidden group">
//           {/* Progress Bar Sync */}
//           <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeIndex}
//                 initial={{ width: "0%" }}
//                 animate={{ width: "100%" }}
//                 transition={{
//                   duration: AUTOPLAY_DURATION / 1000,
//                   ease: "linear",
//                 }}
//                 className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
//               />
//             </AnimatePresence>
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeIndex}
//               initial={{ opacity: 0, scale: 0.98, y: 10 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 1.02, y: -10 }}
//               transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//               className="flex flex-col justify-center h-full"
//             >
//               <div className="mb-10 flex items-center gap-4">
//                 <span className="px-3 py-1 border border-blue-500/30 text-blue-400 font-mono text-[10px] tracking-widest uppercase rounded-full">
//                   {slides[activeIndex].tag}
//                 </span>
//                 <span className="text-[10px] font-mono text-white/20 uppercase tracking-tighter">
//                   Status: Optimizing_Decision_Path
//                 </span>
//               </div>

//               <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-[1.1] mb-10 tracking-tight">
//                 {slides[activeIndex].title.split(" ")[0]} <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-500/50">
//                   {slides[activeIndex].title.split(" ").slice(1).join(" ")}
//                 </span>
//               </h3>

//               <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light max-w-2xl border-l-2 border-blue-500/30 pl-8">
//                 {slides[activeIndex].content}
//               </p>
//             </motion.div>
//           </AnimatePresence>

//           {/* HUD Accents */}
//           <div className="absolute bottom-10 left-10 flex gap-2">
//             {[...Array(5)].map((_, i) => (
//               <div
//                 key={i}
//                 className={`h-1 transition-all duration-500 rounded-full ${
//                   i <= activeIndex ? "w-6 bg-blue-500" : "w-2 bg-white/10"
//                 }`}
//               />
//             ))}
//           </div>

//           <div className="absolute bottom-10 right-10 opacity-20">
//             <div className="text-right">
//               <p className="font-mono text-[8px] text-white tracking-[0.3em] uppercase mb-1">
//                 Data_Stream_v4.0
//               </p>
//               <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-white" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Atmospheric Backgrounds */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none opacity-50" />
//       <div
//         className="absolute inset-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
//           backgroundSize: "120px 120px",
//         }}
//       />
//     </section>
//   );
// };

// export default Manifesto;

//=====================================================
//====================================
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../layout/Section";

const Manifesto = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const AUTOPLAY_DURATION = 15000;

  const slides = [
    {
      id: "01",
      title: "Clarity & Respect",
      content:
        "We believe clarity is a form of respect. For your time. For your ambition. For the complexity you face.",
      tag: "CORE_PRINCIPLE",
    },
    {
      id: "02",
      title: "Simplification",
      content:
        "We believe consulting should simplify decisions and not complicate them. Expertise matters most when applied with context.",
      tag: "METHODOLOGY",
    },
    {
      id: "03",
      title: "Boutique Focus",
      content:
        "We work boutique by choice. Focused. Thoughtful by design. We collaborate deeply with the realities of your world.",
      tag: "ARCHITECTURE",
    },
    {
      id: "04",
      title: "Long-term Trust",
      content:
        "We value discretion as much as outcomes. And long-term trust more than short-term wins. We start with listening.",
      tag: "RELATIONSHIP",
    },
    {
      id: "05",
      title: "Lovely Reimagined",
      content:
        "Real progress doesn’t come from louder advice, but from clearer thinking. This is Lovely. Consulting, reimagined.",
      tag: "CONCLUSION",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_DURATION);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="bg-[#050505] min-h-screen flex flex-col items-center justify-center py-32 px-6 relative overflow-hidden">
      {/* 1. COMPONENT TITLE SECTION - Increased max-width to allow more rightward push */}
      <div className="max-w-[1400px] w-full mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-[1px] w-12 bg-blue-500" />
          <span className="font-mono text-[10px] tracking-[0.6em] text-blue-500 uppercase">
            Internal_Values
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter"
        >
          The Lovely <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            Manifesto
          </span>
        </motion.h2>
      </div>

      {/* 2. THE DATA TERMINAL GRID - Changed to 1fr_3.5fr and gap-32 to push right */}
      <div className="max-w-[1400px] w-full grid lg:grid-cols-[1fr_3.5fr] gap-16 xl:gap-32 items-start relative z-10">
        {/* LEFT: Navigation / Index */}
        <div className="flex flex-col gap-6 pt-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-blue-500 animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-white/50 uppercase">
              System_Transmission
            </span>
          </div>

          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className="group flex items-center gap-6 text-left transition-all cursor-default"
            >
              <span
                className={`font-mono text-xs transition-colors duration-500 ${
                  activeIndex === idx ? "text-blue-500" : "text-white/10"
                }`}
              >
                {slide.id}
              </span>
              <span
                className={`text-sm uppercase tracking-[0.2em] font-bold transition-all duration-500 ${
                  activeIndex === idx
                    ? "text-white translate-x-2"
                    : "text-white/10"
                }`}
              >
                {slide.title}
              </span>
              {activeIndex === idx && (
                <motion.div
                  layoutId="pointer"
                  className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]"
                />
              )}
            </div>
          ))}
        </div>

        {/* RIGHT: Data Display Card - Occupies more space now */}
        <div className="relative min-h-[520px] border border-white/10 bg-white/[0.01] backdrop-blur-3xl rounded-[40px] p-10 md:p-24 shadow-2xl overflow-hidden group">
          {/* Progress Bar Sync */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: AUTOPLAY_DURATION / 1000,
                  ease: "linear",
                }}
                className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
              />
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -10 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-center h-full"
            >
              <div className="mb-10 flex items-center gap-4">
                <span className="px-3 py-1 border border-blue-500/30 text-blue-400 font-mono text-[10px] tracking-widest uppercase rounded-full">
                  {slides[activeIndex].tag}
                </span>
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-tighter">
                  Status: Optimizing_Decision_Path
                </span>
              </div>

              <h3 className="text-5xl md:text-7xl font-black text-white uppercase italic leading-[1.1] mb-10 tracking-tight">
                {slides[activeIndex].title.split(" ")[0]} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-500/50">
                  {slides[activeIndex].title.split(" ").slice(1).join(" ")}
                </span>
              </h3>

              <p className="text-xl md:text-3xl text-slate-400 leading-relaxed font-light max-w-3xl border-l-2 border-blue-500/30 pl-10">
                {slides[activeIndex].content}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* HUD Accents */}
          <div className="absolute bottom-10 left-10 flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`h-1 transition-all duration-500 rounded-full ${
                  i <= activeIndex ? "w-8 bg-blue-500" : "w-2 bg-white/10"
                }`}
              />
            ))}
          </div>

          <div className="absolute bottom-10 right-10 opacity-20">
            <div className="text-right">
              <p className="font-mono text-[8px] text-white tracking-[0.3em] uppercase mb-1">
                Data_Stream_v4.0
              </p>
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Atmospheric Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-600/5 rounded-full blur-[200px] pointer-events-none opacity-50" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: "120px 120px",
        }}
      />
    </section>
  );
};

export default Manifesto;
