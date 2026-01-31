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
//       text: "We coordinate licensed legal, tax, and technical experts as your single strategic counterpart.",
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
//       image: building_01,
//       protocol: "TRUST_FIDELITY_INIT",
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
//               <div className="bg-black/80 p-5 rounded-2xl border border-white/5 shadow-2xl">
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
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* DYNAMIC IMAGE FRAME */}
//           <div
//             ref={imageCardRef}
//             className="relative w-full max-w-[540px] aspect-[4/5] z-10 pointer-events-none"
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             <div className="absolute -top-6 -left-6 border-t-2 border-l-2 border-white/30 w-16 h-16 rounded-tl-[40px] z-30" />
//             <div className="absolute -bottom-6 -right-6 border-b-2 border-r-2 border-white/30 w-16 h-16 rounded-br-[40px] z-30" />

//             <div className="relative w-full h-full rounded-[60px] overflow-hidden border border-white/10 shadow-[0_0_120px_rgba(0,0,0,0.8)] bg-black group pointer-events-auto">
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

//               <div className="absolute inset-0 z-20 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
//               <div className="absolute inset-0 z-20 shadow-[inset_0_0_120px_rgba(0,0,0,0.9)] pointer-events-none" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />

//               <motion.div
//                 animate={{ top: ["-10%", "110%"] }}
//                 transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//                 className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent z-30"
//               />
//             </div>

//             <div className="absolute -inset-20 -z-10 blur-[120px] opacity-40">
//               <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-600 rounded-full animate-pulse" />
//               <div
//                 className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-red-600 rounded-full animate-pulse"
//                 style={{ animationDelay: "2.5s" }}
//               />
//             </div>
//           </div>

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
//==============================================================
//==============================================================
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
//       text: "We coordinate licensed legal, tax, and technical experts as your single strategic counterpart.",
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
//       image: building_01,
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
//       className="relative min-h-screen flex items-center justify-center py-32 px-6 overflow-hidden bg-transparent"
//     >
//       <div className="max-w-[1500px] w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">
//         {/* LEFT: THE INTERACTIVE LIST */}
//         <div className="space-y-16">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-7xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.8] text-[#F5F7FA]">
//               Why <br />
//               <span className="text-[#3B82F6] italic">Lovely</span>
//             </h2>
//           </motion.div>

//           <div className="space-y-4">
//             {data.map((item, idx) => (
//               <button
//                 key={item.id}
//                 onClick={() => setActiveIndex(idx)}
//                 className={`w-full text-left group relative p-8 rounded-2xl border transition-all duration-700 flex items-start gap-8
//                   ${
//                     activeIndex === idx
//                       ? "bg-[#111827]/40 border-[#3B82F6]/30 shadow-2xl"
//                       : "bg-transparent border-transparent opacity-30 hover:opacity-50"
//                   }`}
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
//                     className={`font-black uppercase tracking-widest text-xs ${activeIndex === idx ? "text-[#3B82F6]" : "text-[#9CA3AF]"}`}
//                   >
//                     {item.title}
//                   </h4>
//                   <p
//                     className={`text-lg md:text-xl italic font-medium transition-colors ${activeIndex === idx ? "text-[#F5F7FA]" : "text-[#9CA3AF]"}`}
//                   >
//                     {item.text}
//                   </p>
//                 </div>

//                 <div
//                   className={`ml-auto self-center transition-all duration-500 ${activeIndex === idx ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
//                 >
//                   <ChevronRight className="text-[#3B82F6]" size={28} />
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT: DYNAMIC IMAGE FRAME */}
//         <div className="relative h-[750px] w-full flex items-center justify-center perspective-2000">
//           {/* Subtle Outer Ring */}
//           <div className="absolute w-[600px] h-[600px] border border-[#1F2937] rounded-full opacity-20" />

//           {/* FLOATING HUD DATA CARD */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`hud-${activeIndex}`}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               className="absolute top-[8%] right-[5%] z-50"
//             >
//               <div className="bg-[#0B1320]/90 backdrop-blur-md p-5 rounded-xl border border-[#1F2937] shadow-2xl">
//                 <div className="flex items-center gap-3 mb-2">
//                   <span className="relative flex h-1.5 w-1.5">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C2413A] opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C2413A]"></span>
//                   </span>
//                   <p className="text-[9px] font-mono text-[#3B82F6] tracking-[0.3em] uppercase">
//                     {data[activeIndex].protocol}
//                   </p>
//                 </div>
//                 <p className="text-[#F5F7FA] font-black italic text-xl tracking-tighter">
//                   STABILITY:{" "}
//                   <span className="text-[#3B82F6] font-mono">
//                     {data[activeIndex].stability}
//                   </span>
//                 </p>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* DYNAMIC IMAGE FRAME */}
//           <div
//             ref={imageCardRef}
//             className="relative w-full max-w-[500px] aspect-[4/5] z-10 pointer-events-none shadow-2xl"
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             {/* Corner Markers */}
//             <div className="absolute -top-4 -left-4 border-t border-l border-[#3B82F6]/40 w-12 h-12 z-30" />
//             <div className="absolute -bottom-4 -right-4 border-b border-r border-[#3B82F6]/40 w-12 h-12 z-30" />

//             <div className="relative w-full h-full rounded-3xl overflow-hidden border border-[#1F2937] bg-[#111827] group pointer-events-auto">
//               {/* Institutional Grid Overlay */}
//               <div className="absolute inset-0 z-30 pointer-events-none opacity-10 bg-[radial-gradient(#F5F7FA_1px,transparent_1px)] [background-size:20px_20px]" />

//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeIndex}
//                   className="w-full h-full"
//                   initial={{ opacity: 0, scale: 1.1 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                   transition={{ duration: 1, ease: "easeInOut" }}
//                 >
//                   <img
//                     src={data[activeIndex].image}
//                     alt="Strategic Real Estate"
//                     className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1500ms]"
//                   />
//                 </motion.div>
//               </AnimatePresence>

//               {/* Gradient Overlays */}
//               <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0B1320] via-transparent to-transparent opacity-60" />

//               {/* Strategic Blue Scanning Bar */}
//               <motion.div
//                 animate={{ top: ["-10%", "110%"] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//                 className="absolute left-0 w-full h-[1px] bg-[#3B82F6]/30 z-30 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
//               />
//             </div>

//             {/* Background Glows */}
//             <div className="absolute -inset-20 -z-10 blur-[120px] opacity-20">
//               <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#3B82F6] rounded-full" />
//               <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#C2413A] rounded-full" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

//==============================================================
//==============================================================
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import { Shield, Zap, Target, EyeOff, ChevronRight } from "lucide-react";

// // Images
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
//       image: building_01,
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
//       {/* 1. SYNCED CONTAINER (1400px - Matches the new Manifesto flow) */}
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
//                     className={`text-lg xl:text-xl italic font-medium transition-colors ${activeIndex === idx ? "text-[#F5F7FA]" : "text-[#9CA3AF]"}`}
//                   >
//                     {item.text}
//                   </p>
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

//         {/* RIGHT: THE DYNAMIC INTELLIGENCE FRAME (Flex-1.2 to be slightly larger) */}
//         <div className="flex-[1.2] relative h-[700px] w-full flex items-center justify-center lg:justify-end perspective-2000">
//           {/* FLOATING HUD DATA CARD */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`hud-${activeIndex}`}
//               initial={{ opacity: 0, scale: 0.9, x: 20 }}
//               animate={{ opacity: 1, scale: 1, x: 0 }}
//               exit={{ opacity: 0, scale: 0.9, x: 20 }}
//               className="absolute top-[10%] left-0 lg:-left-12 z-50 pointer-events-none"
//             ></motion.div>
//           </AnimatePresence>

//           {/* THE IMAGE FRAME */}
//           <div
//             ref={imageCardRef}
//             className="relative w-full max-w-[550px] aspect-[4/5] z-10 pointer-events-none shadow-2xl"
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
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <img
//                     src={data[activeIndex].image}
//                     alt="Strategic Real Estate"
//                     className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-[2000ms] scale-110 hover:scale-100"
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

//==============================================================
//==============================================================
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Shield, Zap, Target, EyeOff, ChevronRight } from "lucide-react";

// Images
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
      image: building_01,
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
      {/* SYNCED CONTAINER (1400px - Matches the new centered Manifesto flow) */}
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
  className={`text-lg xl:text-xl italic font-medium transition-colors ${
    activeIndex === idx ? "text-[#F5F7FA]" : "text-[#9CA3AF]"
  } space-y-3`}
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

        {/* RIGHT: THE DYNAMIC IMAGE (Bigger frame + Centered flow) */}
        <div className="flex-[1.2] relative h-[750px] w-full flex items-center justify-center lg:justify-end perspective-2000">
          {/* RESTORED HUD DATA CARD: Positioned to overlap the frame slightly */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`hud-${activeIndex}`}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 20 }}
              className="absolute top-[12%] -left-6 lg:-left-12 z-50 pointer-events-none"
            >
             >
            </motion.div>
          </AnimatePresence>

          {/* THE IMAGE FRAME */}
          <div
            ref={imageCardRef}
            className="relative w-full max-w-[580px] aspect-[4/5] z-10 pointer-events-none shadow-2xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* HUD Corner Accents */}
            <div className="absolute -top-4 -left-4 border-t-2 border-l-2 border-[#3B82F6]/40 w-16 h-16 z-30" />
            <div className="absolute -bottom-4 -right-4 border-b-2 border-r-2 border-[#3B82F6]/40 w-16 h-16 z-30" />

            <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-[#1F2937] bg-[#111827] pointer-events-auto">
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
                    alt="Strategic Real Estate"
                    className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-[2000ms]"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Scanning Laser Line */}
              <motion.div
                animate={{ top: ["-5%", "105%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent z-40 opacity-50 shadow-[0_0_20px_#3B82F6]"
              />

              {/* Overlay Grid */}
              <div className="absolute inset-0 z-20 opacity-20 bg-[linear-gradient(rgba(31,41,55,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(31,41,55,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
