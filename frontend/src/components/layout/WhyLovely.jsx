// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import { Shield, Zap, Target, EyeOff, ChevronRight } from "lucide-react";

// // Images
// import building_01 from "../../assets/Images/building_01.jpeg";
// import building_02 from "../../assets/Images/building_02.jpeg";
// import building_03 from "../../assets/Images/building_03.jpeg";
// import Ship_01 from "../../assets/Images/Ship_01.jpeg";

// export default function WhyLovely() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef(null);
//   const imageCardRef = useRef(null);

//   const data = [
//     {
//       id: "01",
//       title: "Strategic Intersection",
//       text: "We advise where capital, jurisdiction, and execution meet.",
//       icon: <Zap size={20} />,
//       image: building_01,
//       protocol: "CAPITAL_EXECUTION_SYNC",
//       stability: "99.2%",
//     },
//     {
//       id: "02",
//       title: "Boutique Focus",
//       text: "Boutique by choice. Focused by principle. Built for complex cross-border work.",
//       icon: <Target size={20} />,
//       image: building_02,
//       protocol: "CROSS_BORDER_OPS",
//       stability: "98.5%",
//     },
//     {
//       id: "03",
//       title: "Single Counterpart",
//       text: "We coordinate licensed legal, tax, and technical experts as your single counterpart.",
//       icon: <Shield size={20} />,
//       image: building_03,
//       protocol: "STRATEGIC_COORD_V4",
//       stability: "100.0%",
//     },
//     {
//       id: "04",
//       title: "Discretion & Trust",
//       text: "We value discretion as much as outcomes and long-term trust over short-term wins.",
//       icon: <EyeOff size={20} />,
//       image: Ship_01,
//       protocol: "TRUST_FIDELITY_INIT",
//       stability: "99.9%",
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % data.length);
//     }, 8000);
//     return () => clearInterval(timer);
//   }, [data.length]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const onMove = (e) => {
//         if (!imageCardRef.current) return;
//         const { clientX, clientY } = e;
//         const dx = (clientX - window.innerWidth / 2) / (window.innerWidth / 2);
//         const dy =
//           (clientY - window.innerHeight / 2) / (window.innerHeight / 2);
//         gsap.to(imageCardRef.current, {
//           rotateY: dx * 8,
//           rotateX: dy * -8,
//           duration: 1.5,
//           ease: "power2.out",
//         });
//       };
//       window.addEventListener("mousemove", onMove);
//       return () => window.removeEventListener("mousemove", onMove);
//     });
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden bg-transparent"
//     >
//       {/* SYNCED CONTAINER (1400px - Matches the new centered Manifesto flow) */}
//       <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-24">
//         {/* LEFT: THE INTERACTIVE LIST */}
//         <div className="flex-1 space-y-12 w-full">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="mb-12"
//           >
//             <h2 className="text-6xl md:text-8xl xl:text-[85px] font-black italic tracking-tighter uppercase leading-[0.8] text-[#F5F7FA]">
//               Why <br />
//               <span className="text-[#3B82F6] italic">Lovely</span>
//             </h2>
//           </motion.div>

//           <div className="space-y-2">
//             {data.map((item, idx) => (
//               <button
//                 key={item.id}
//                 onClick={() => setActiveIndex(idx)}
//                 className={`w-full text-left group relative p-6 xl:p-8 rounded-2xl border transition-all duration-700 flex items-start gap-6
//                   ${activeIndex === idx ? "bg-[#111827]/60 border-[#3B82F6]/30 shadow-2xl" : "bg-transparent border-transparent opacity-30 hover:opacity-50"}`}
//               >
//                 {activeIndex === idx && (
//                   <motion.div
//                     layoutId="activeGlow"
//                     className="absolute left-0 top-6 bottom-6 w-[2px] bg-[#3B82F6]"
//                   />
//                 )}

//                 <div
//                   className={`mt-1 p-3 rounded-xl transition-all duration-500 ${activeIndex === idx ? "text-[#3B82F6] bg-[#3B82F6]/10" : "text-[#9CA3AF] bg-[#111827]"}`}
//                 >
//                   {item.icon}
//                 </div>

//                 <div className="space-y-1">
//                   <h4
//                     className={`font-black uppercase tracking-[0.2em] text-[10px] ${activeIndex === idx ? "text-[#3B82F6]" : "text-[#9CA3AF]"}`}
//                   >
//                     {item.title}
//                   </h4>
//                   <p
//   className={`text-lg xl:text-xl italic font-medium transition-colors ${
//     activeIndex === idx ? "text-[#F5F7FA]" : "text-[#9CA3AF]"
//   } space-y-3`}
// >
//   {item.text
//     .split(".")
//     .filter(Boolean)
//     .map((sentence, i) => (
//       <span key={i} className="block">
//         {sentence.trim()}.
//       </span>
//     ))}
// </p>

//                 </div>

//                 <div
//                   className={`ml-auto self-center transition-all duration-500 ${activeIndex === idx ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
//                 >
//                   <ChevronRight className="text-[#3B82F6]" size={24} />
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT: THE DYNAMIC IMAGE (Bigger frame + Centered flow) */}
//         <div className="flex-[1.2] relative h-[750px] w-full flex items-center justify-center lg:justify-end perspective-2000">
//           {/* RESTORED HUD DATA CARD: Positioned to overlap the frame slightly */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`hud-${activeIndex}`}
//               initial={{ opacity: 0, scale: 0.9, x: 20 }}
//               animate={{ opacity: 1, scale: 1, x: 0 }}
//               exit={{ opacity: 0, scale: 0.9, x: 20 }}
//               className="absolute top-[12%] -left-6 lg:-left-12 z-50 pointer-events-none"
//             >
//              >
//             </motion.div>
//           </AnimatePresence>

//           {/* THE IMAGE FRAME */}
//           <div
//             ref={imageCardRef}
//             className="relative w-full max-w-[580px] aspect-[4/5] z-10 pointer-events-none shadow-2xl"
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             {/* HUD Corner Accents */}
//             <div className="absolute -top-4 -left-4 border-t-2 border-l-2 border-[#3B82F6]/40 w-16 h-16 z-30" />
//             <div className="absolute -bottom-4 -right-4 border-b-2 border-r-2 border-[#3B82F6]/40 w-16 h-16 z-30" />

//             <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-[#1F2937] bg-[#111827] pointer-events-auto">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeIndex}
//                   className="w-full h-full"
//                   initial={{ opacity: 0, scale: 1.1 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 1.1 }}
//                   transition={{ duration: 1 }}
//                 >
//                   <img
//                     src={data[activeIndex].image}
//                     alt="Strategic Real Estate"
//                     className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-[2000ms]"
//                   />
//                 </motion.div>
//               </AnimatePresence>

//               {/* Scanning Laser Line */}
//               <motion.div
//                 animate={{ top: ["-5%", "105%"] }}
//                 transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//                 className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent z-40 opacity-50 shadow-[0_0_20px_#3B82F6]"
//               />

//               {/* Overlay Grid */}
//               <div className="absolute inset-0 z-20 opacity-20 bg-[linear-gradient(rgba(31,41,55,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(31,41,55,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

//============================================================================
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import {
  Shield,
  Zap,
  Target,
  EyeOff,
  ChevronRight,
  Activity,
} from "lucide-react";

// Images
import building_01 from "../../assets/Images/building_01.jpeg";
import building_02 from "../../assets/Images/building_02.jpeg";
import building_03 from "../../assets/Images/building_03.jpeg";
import Ship_01 from "../../assets/Images/Ship_01.jpeg";

export default function WhyLovely() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const imageCardRef = useRef(null);

  const data = [
    {
      id: "01",
      title: "Strategic Intersection",
      text: "We advise where capital, jurisdiction, and execution meet.",
      icon: <Zap size={20} />,
      image: building_01,
      protocol: "CAPITAL_EXECUTION_SYNC",
      stability: "99.2%",
    },
    {
      id: "02",
      title: "Boutique Focus",
      text: "Boutique by choice. Focused by principle. Built for complex cross-border work.",
      icon: <Target size={20} />,
      image: building_02,
      protocol: "CROSS_BORDER_OPS",
      stability: "98.5%",
    },
    {
      id: "03",
      title: "Single Counterpart",
      text: "We coordinate licensed legal, tax, and technical experts as your single counterpart.",
      icon: <Shield size={20} />,
      image: building_03,
      protocol: "STRATEGIC_COORD_V4",
      stability: "100.0%",
    },
    {
      id: "04",
      title: "Discretion & Trust",
      text: "We value discretion as much as outcomes and long-term trust over short-term wins.",
      icon: <EyeOff size={20} />,
      image: Ship_01,
      protocol: "TRUST_FIDELITY_INIT",
      stability: "99.9%",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [data.length]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const onMove = (e) => {
        if (!imageCardRef.current) return;
        const { clientX, clientY } = e;
        const dx = (clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        const dy =
          (clientY - window.innerHeight / 2) / (window.innerHeight / 2);
        gsap.to(imageCardRef.current, {
          rotateY: dx * 8,
          rotateX: dy * -8,
          duration: 1.5,
          ease: "power2.out",
        });
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden bg-transparent"
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-24">
        {/* LEFT: THE INTERACTIVE LIST */}
        <div className="flex-1 space-y-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-6xl md:text-8xl xl:text-[85px] font-black italic tracking-tighter uppercase leading-[0.8] text-[#F5F7FA]">
              Why <br />
              <span className="text-[#3B82F6] italic">Lovely</span>
            </h2>
          </motion.div>

          <div className="space-y-2">
            {data.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left group relative p-6 xl:p-8 rounded-2xl border transition-all duration-700 flex items-start gap-6 
                  ${activeIndex === idx ? "bg-[#111827]/60 border-[#3B82F6]/30 shadow-2xl" : "bg-transparent border-transparent opacity-30 hover:opacity-50"}`}
              >
                {activeIndex === idx && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute left-0 top-6 bottom-6 w-[2px] bg-[#3B82F6]"
                  />
                )}

                <div
                  className={`mt-1 p-3 rounded-xl transition-all duration-500 ${activeIndex === idx ? "text-[#3B82F6] bg-[#3B82F6]/10" : "text-[#9CA3AF] bg-[#111827]"}`}
                >
                  {item.icon}
                </div>

                <div className="space-y-1">
                  <h4
                    className={`font-black uppercase tracking-[0.2em] text-[10px] ${activeIndex === idx ? "text-[#3B82F6]" : "text-[#9CA3AF]"}`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`text-lg xl:text-xl italic font-medium transition-colors ${activeIndex === idx ? "text-[#F5F7FA]" : "text-[#9CA3AF]"} space-y-3`}
                  >
                    {item.text
                      .split(".")
                      .filter(Boolean)
                      .map((sentence, i) => (
                        <span key={i} className="block">
                          {sentence.trim()}.
                        </span>
                      ))}
                  </p>
                </div>

                <div
                  className={`ml-auto self-center transition-all duration-500 ${activeIndex === idx ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                >
                  <ChevronRight className="text-[#3B82F6]" size={24} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: THE DYNAMIC IMAGE */}
        <div className="flex-[1.2] relative h-[750px] w-full flex items-center justify-center lg:justify-end perspective-2000">
          {/* HUD DATA CARD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`hud-${activeIndex}`}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 20 }}
              className="absolute top-[12%] -left-6 lg:-left-12 z-50 pointer-events-none"
            >
              {/* <div className="bg-[#0A0F1A]/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl font-mono text-[10px] space-y-3 shadow-2xl">
                <div className="flex items-center gap-3 text-[#3B82F6]">
                  <Activity size={12} className="animate-pulse" />
                  <span className="tracking-[0.2em] uppercase">
                    Status: Nominal
                  </span>
                </div>
                <div className="space-y-1 text-slate-400">
                  <p className="flex justify-between gap-8">
                    <span>PROTOCOL:</span>{" "}
                    <span className="text-white">
                      {data[activeIndex].protocol}
                    </span>
                  </p>
                  <p className="flex justify-between gap-8">
                    <span>STABILITY:</span>{" "}
                    <span className="text-white">
                      {data[activeIndex].stability}
                    </span>
                  </p>
                </div>
              </div> */}
            </motion.div>
          </AnimatePresence>

          {/* THE IMAGE FRAME */}
          <div
            ref={imageCardRef}
            className="relative w-full max-w-[580px] aspect-[4/5] z-10 shadow-2xl group"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* HUD Corner Accents */}
            <div className="absolute -top-4 -left-4 border-t-2 border-l-2 border-[#3B82F6]/40 w-16 h-16 z-30 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 border-b-2 border-r-2 border-[#3B82F6]/40 w-16 h-16 z-30 pointer-events-none" />

            <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-[#1F2937] bg-[#111827]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="w-full h-full"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 1 }}
                >
                  <img
                    src={data[activeIndex].image}
                    alt="Strategic Advisory"
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Scanning Laser Line */}
              <motion.div
                animate={{ top: ["-5%", "105%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent z-40 opacity-50 shadow-[0_0_20px_#3B82F6] pointer-events-none"
              />

              {/* Overlay Grid */}
              <div className="absolute inset-0 z-20 opacity-20 bg-[linear-gradient(rgba(31,41,55,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(31,41,55,0.3)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
