// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import { Shield, Zap, Target, EyeOff, ChevronRight } from "lucide-react";

// // Import your images
// import building_01 from "../../assets/Images/building_01.jpeg";
// import building_02 from "../../assets/Images/building_02.jpeg";
// import building_03 from "../../assets/Images/building_03.jpeg";

// export default function WhyLovely() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef(null);
//   const imageCardRef = useRef(null);

//   const data = [
//     {
//       id: "01",
//       title: "The Intersection",
//       text: "We operate at the intersection of business, mobility, technology, and real estate, where decisions are rarely simple.",
//       icon: <Zap size={20} />,
//       image: building_01,
//       protocol: "CORE_INTERSECTION_SYNC",
//       stability: "99.2%",
//     },
//     {
//       id: "02",
//       title: "Boutique Design",
//       text: "We are boutique by design: focused, and deeply context-driven.",
//       icon: <Target size={20} />,
//       image: building_02,
//       protocol: "CONTEXT_DRIVEN_OPS",
//       stability: "98.5%",
//     },
//     {
//       id: "03",
//       title: "Single Point Clarity",
//       text: "We collaborate with licensed experts, while remaining your single point of clarity.",
//       icon: <Shield size={20} />,
//       image: building_03,
//       protocol: "EXPERT_COLLAB_V3",
//       stability: "100.0%",
//     },
//     {
//       id: "04",
//       title: "Absolute Discretion",
//       text: "We value discretion as much as results.",
//       icon: <EyeOff size={20} />,
//       image: building_01, // Use a 4th unique image if available
//       protocol: "STEALTH_PROTOCOL_INIT",
//       stability: "99.9%",
//     },
//   ];

//   // Auto-cycle logic (8 seconds per item)
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % data.length);
//     }, 8000);
//     return () => clearInterval(timer);
//   }, [data.length]);

//   // High-end Mouse Tilt Effect
//   useEffect(() => {
//     const onMove = (e) => {
//       if (!imageCardRef.current) return;
//       const { clientX, clientY } = e;
//       const dx = (clientX - window.innerWidth / 2) / (window.innerWidth / 2);
//       const dy = (clientY - window.innerHeight / 2) / (window.innerHeight / 2);

//       gsap.to(imageCardRef.current, {
//         rotateY: dx * 12,
//         rotateX: dy * -12,
//         duration: 1.2,
//         ease: "power2.out",
//       });
//     };
//     window.addEventListener("mousemove", onMove);
//     return () => window.removeEventListener("mousemove", onMove);
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen flex items-center justify-center py-32 px-6 overflow-hidden bg-transparent"
//     >
//       <div className="max-w-[1500px] w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">
//         {/* LEFT: THE INTERACTIVE MANIFESTO LIST */}
//         <div className="space-y-16">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-7xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.8]">
//               <span className="text-white">Why</span> <br />
//               <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent italic">
//                 Lovely
//               </span>
//             </h2>
//           </motion.div>

//           <div className="space-y-6">
//             {data.map((item, idx) => (
//               <button
//                 key={item.id}
//                 onClick={() => setActiveIndex(idx)}
//                 className={`w-full text-left group relative p-8 rounded-3xl border transition-all duration-700 flex items-start gap-8
//                   ${
//                     activeIndex === idx
//                       ? "bg-white/[0.04] border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
//                       : "bg-transparent border-transparent opacity-30 hover:opacity-60"
//                   }`}
//               >
//                 {/* Visual Connector / Active Line */}
//                 {activeIndex === idx && (
//                   <motion.div
//                     layoutId="activeGlow"
//                     className="absolute left-0 top-4 bottom-4 w-[3px] bg-gradient-to-b from-blue-400 via-purple-500 to-red-500 shadow-[0_0_15px_rgba(147,51,234,0.5)]"
//                   />
//                 )}

//                 <div
//                   className={`mt-1 p-3 rounded-2xl transition-all duration-500 ${activeIndex === idx ? "text-red-500 bg-red-500/10 scale-110" : "text-white bg-white/5"}`}
//                 >
//                   {item.icon}
//                 </div>

//                 <div className="space-y-3">
//                   <p
//                     className={`text-xl md:text-xl leading-tight italic font-medium transition-colors ${activeIndex === idx ? "text-white" : "text-slate-500"}`}
//                   >
//                     {item.text}
//                   </p>
//                 </div>

//                 <div
//                   className={`ml-auto self-center transition-all duration-500 ${activeIndex === idx ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
//                 >
//                   <ChevronRight
//                     className="text-purple-500"
//                     size={32}
//                     strokeWidth={3}
//                   />
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT: THE OPTICAL SENSOR / DYNAMIC IMAGE */}
//         <div className="relative h-[750px] w-full flex items-center justify-center perspective-2000">
//           {/* DECORATIVE ROTATING RING (Behind Image) */}
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//             className="absolute w-[650px] h-[650px] border border-dashed border-white/5 rounded-full pointer-events-none"
//           />

//           {/* FLOATING HUD DATA CARD */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`hud-${activeIndex}`}
//               initial={{ opacity: 0, y: 20, skewX: -10 }}
//               animate={{ opacity: 1, y: 0, skewX: 0 }}
//               exit={{ opacity: 0, y: -20, skewX: 10 }}
//               className="absolute top-[5%] right-[2%] z-50 p-[1px] rounded-2xl bg-gradient-to-br from-white/20 to-transparent backdrop-blur-3xl"
//             >
//               {/* <div className="bg-black/80 p-5 rounded-2xl border border-white/5 shadow-2xl">
//                 <div className="flex items-center gap-3 mb-2">
//                   <span className="relative flex h-2 w-2">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
//                   </span>
//                   <p className="text-[10px] font-mono text-blue-400 tracking-[0.4em] uppercase">
//                     {data[activeIndex].protocol}
//                   </p>
//                 </div>
//                 <p className="text-white font-black italic text-2xl tracking-tighter">
//                   STABILITY:{" "}
//                   <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-mono uppercase italic">
//                     {data[activeIndex].stability}
//                   </span>
//                 </p>
//               </div> */}
//             </motion.div>
//           </AnimatePresence>

//           {/* DYNAMIC IMAGE FRAME */}
//           <div
//             ref={imageCardRef}
//             className="relative w-full max-w-[540px] aspect-[4/5] z-10 pointer-events-none"
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             {/* TECHNICAL CORNER BRACKETS */}
//             <div className="absolute -top-6 -left-6 border-t-2 border-l-2 border-white/30 w-16 h-16 rounded-tl-[40px] z-30" />
//             <div className="absolute -bottom-6 -right-6 border-b-2 border-r-2 border-white/30 w-16 h-16 rounded-br-[40px] z-30" />

//             {/* THE LENS CASE */}
//             <div className="relative w-full h-full rounded-[60px] overflow-hidden border border-white/10 shadow-[0_0_120px_rgba(0,0,0,0.8)] bg-black group pointer-events-auto">
//               {/* INTERACTIVE SCAN OVERLAY */}
//               <div className="absolute inset-0 z-30 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,4px_100%]" />

//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeIndex}
//                   className="w-full h-full"
//                   initial={{
//                     opacity: 0,
//                     scale: 1.3,
//                     filter: "blur(40px) brightness(0)",
//                   }}
//                   animate={{
//                     opacity: 1,
//                     scale: 1,
//                     filter: "blur(0px) brightness(1)",
//                   }}
//                   exit={{
//                     opacity: 0,
//                     scale: 0.9,
//                     filter: "blur(40px) brightness(0)",
//                   }}
//                   transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
//                 >
//                   <img
//                     src={data[activeIndex].image}
//                     alt="Strategic Real Estate"
//                     className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]"
//                   />
//                 </motion.div>
//               </AnimatePresence>

//               {/* GLASS REFLECTION & VIGNETTE */}
//               <div className="absolute inset-0 z-20 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
//               <div className="absolute inset-0 z-20 shadow-[inset_0_0_120px_rgba(0,0,0,0.9)] pointer-events-none" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />

//               {/* VERTICAL SCANNING BEAM */}
//               <motion.div
//                 animate={{ top: ["-10%", "110%"] }}
//                 transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//                 className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent z-30"
//               />
//             </div>

//             {/* REAR ATMOSPHERIC GLOWS */}
//             <div className="absolute -inset-20 -z-10 blur-[120px] opacity-40">
//               <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-600 rounded-full animate-pulse" />
//               <div
//                 className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-red-600 rounded-full animate-pulse"
//                 style={{ animationDelay: "2.5s" }}
//               />
//             </div>
//           </div>

//           {/* MASSIVE AMBIENT BACKGROUND ORB */}
//           <motion.div
//             animate={{
//               scale: [1, 1.2, 1],
//               opacity: [0.08, 0.15, 0.08],
//             }}
//             transition={{ duration: 10, repeat: Infinity }}
//             className="absolute -z-20 w-[900px] h-[900px] bg-purple-900 blur-[180px] rounded-full pointer-events-none"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

//==============================================================
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Shield, Zap, Target, EyeOff, ChevronRight } from "lucide-react";

// Import your images
import building_01 from "../../assets/Images/building_01.jpeg";
import building_02 from "../../assets/Images/building_02.jpeg";
import building_03 from "../../assets/Images/building_03.jpeg";

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
      text: "We coordinate licensed legal, tax, and technical experts as your single strategic counterpart.",
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
      image: building_01,
      protocol: "TRUST_FIDELITY_INIT",
      stability: "99.9%",
    },
  ];

  // Auto-cycle logic (8 seconds per item)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [data.length]);

  // High-end Mouse Tilt Effect
  useEffect(() => {
    const onMove = (e) => {
      if (!imageCardRef.current) return;
      const { clientX, clientY } = e;
      const dx = (clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const dy = (clientY - window.innerHeight / 2) / (window.innerHeight / 2);

      gsap.to(imageCardRef.current, {
        rotateY: dx * 12,
        rotateX: dy * -12,
        duration: 1.2,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-6 overflow-hidden bg-transparent"
    >
      <div className="max-w-[1500px] w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* LEFT: THE INTERACTIVE MANIFESTO LIST */}
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-7xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.8]">
              <span className="text-white">Why</span> <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent italic">
                Lovely
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {data.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left group relative p-8 rounded-3xl border transition-all duration-700 flex items-start gap-8 
                  ${
                    activeIndex === idx
                      ? "bg-white/[0.04] border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                      : "bg-transparent border-transparent opacity-30 hover:opacity-60"
                  }`}
              >
                {/* Visual Connector / Active Line */}
                {activeIndex === idx && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute left-0 top-4 bottom-4 w-[3px] bg-gradient-to-b from-blue-400 via-purple-500 to-red-500 shadow-[0_0_15px_rgba(147,51,234,0.5)]"
                  />
                )}

                <div
                  className={`mt-1 p-3 rounded-2xl transition-all duration-500 ${activeIndex === idx ? "text-red-500 bg-red-500/10 scale-110" : "text-white bg-white/5"}`}
                >
                  {item.icon}
                </div>

                <div className="space-y-3">
                  <p
                    className={`text-xl md:text-xl leading-tight italic font-medium transition-colors ${activeIndex === idx ? "text-white" : "text-slate-500"}`}
                  >
                    {item.text}
                  </p>
                </div>

                <div
                  className={`ml-auto self-center transition-all duration-500 ${activeIndex === idx ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                >
                  <ChevronRight
                    className="text-purple-500"
                    size={32}
                    strokeWidth={3}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: THE OPTICAL SENSOR / DYNAMIC IMAGE */}
        <div className="relative h-[750px] w-full flex items-center justify-center perspective-2000">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute w-[650px] h-[650px] border border-dashed border-white/5 rounded-full pointer-events-none"
          />

          {/* FLOATING HUD DATA CARD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`hud-${activeIndex}`}
              initial={{ opacity: 0, y: 20, skewX: -10 }}
              animate={{ opacity: 1, y: 0, skewX: 0 }}
              exit={{ opacity: 0, y: -20, skewX: 10 }}
              className="absolute top-[5%] right-[2%] z-50 p-[1px] rounded-2xl bg-gradient-to-br from-white/20 to-transparent backdrop-blur-3xl"
            >
              <div className="bg-black/80 p-5 rounded-2xl border border-white/5 shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  <p className="text-[10px] font-mono text-blue-400 tracking-[0.4em] uppercase">
                    {data[activeIndex].protocol}
                  </p>
                </div>
                <p className="text-white font-black italic text-2xl tracking-tighter">
                  STABILITY:{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-mono uppercase italic">
                    {data[activeIndex].stability}
                  </span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* DYNAMIC IMAGE FRAME */}
          <div
            ref={imageCardRef}
            className="relative w-full max-w-[540px] aspect-[4/5] z-10 pointer-events-none"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute -top-6 -left-6 border-t-2 border-l-2 border-white/30 w-16 h-16 rounded-tl-[40px] z-30" />
            <div className="absolute -bottom-6 -right-6 border-b-2 border-r-2 border-white/30 w-16 h-16 rounded-br-[40px] z-30" />

            <div className="relative w-full h-full rounded-[60px] overflow-hidden border border-white/10 shadow-[0_0_120px_rgba(0,0,0,0.8)] bg-black group pointer-events-auto">
              <div className="absolute inset-0 z-30 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,4px_100%]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="w-full h-full"
                  initial={{
                    opacity: 0,
                    scale: 1.3,
                    filter: "blur(40px) brightness(0)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px) brightness(1)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    filter: "blur(40px) brightness(0)",
                  }}
                  transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                >
                  <img
                    src={data[activeIndex].image}
                    alt="Strategic Real Estate"
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 z-20 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 z-20 shadow-[inset_0_0_120px_rgba(0,0,0,0.9)] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />

              <motion.div
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent z-30"
              />
            </div>

            <div className="absolute -inset-20 -z-10 blur-[120px] opacity-40">
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-600 rounded-full animate-pulse" />
              <div
                className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-red-600 rounded-full animate-pulse"
                style={{ animationDelay: "2.5s" }}
              />
            </div>
          </div>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -z-20 w-[900px] h-[900px] bg-purple-900 blur-[180px] rounded-full pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
