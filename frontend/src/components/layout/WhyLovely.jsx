// import React from "react";
// import { motion } from "framer-motion";
// import { Shield, Target, Zap, EyeOff } from "lucide-react";
// import Section from "../layout/Section";
// import Building_01 from "../../assets/Images/building_01.jpeg";

// export default function WhyLovely() {
//   const points = [
//     {
//       icon: <Target size={20} className="text-blue-500" />,
//       text: "We operate at the intersection of business, mobility, technology, and real estate, where decisions are rarely simple.",
//     },
//     {
//       icon: <Zap size={20} className="text-blue-500" />,
//       text: "We are boutique by design: focused, and deeply context-driven.",
//     },
//     {
//       icon: <Shield size={20} className="text-blue-500" />,
//       text: "We collaborate with licensed experts, while remaining your single point of clarity.",
//     },
//     {
//       icon: <EyeOff size={20} className="text-blue-500" />,
//       text: "We value discretion as much as results.",
//     },
//   ];

//   return (
//     <Section
//       id="why-lovely"
//       className="bg-[#050505] py-24 border-y border-white/5"
//     >
//       <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
//         {/* LEFT CONTENT: THE STRATEGY */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="space-y-12"
//         >
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <span className="h-[1px] w-8 bg-blue-600"></span>
//               <p className="font-mono text-[10px] text-blue-500 uppercase tracking-[0.5em]">
//                 Core_Philosophy_v.04
//               </p>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
//               Why{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
//                 Lovely Digital?
//               </span>
//             </h2>
//           </div>

//           <div className="space-y-8">
//             {points.map((point, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="flex gap-6 group"
//               >
//                 <div className="mt-1 w-12 h-12 shrink-0 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all duration-500">
//                   {point.icon}
//                 </div>
//                 <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed group-hover:text-white transition-colors duration-500">
//                   {point.text}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* RIGHT CONTENT: THE ASSET (Building_01) */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="relative group"
//         >
//           {/* Tactical Viewfinder Corners */}
//           <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-blue-600/50 z-20" />
//           <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-blue-600/50 z-20" />

//           {/* Main Image Container */}
//           <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] lg:aspect-square">
//             {/* The Building Image */}
//             <img
//               src={Building_01}
//               alt="Lovely Digital Headquarters"
//               className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
//             />

//             {/* Subtle Overlay HUD */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

//             {/* 🟢 THE WINNING SCAN LINE */}
//             <div className="absolute inset-0 pointer-events-none overflow-hidden">
//               <div className="w-full h-[1px] bg-blue-400/40 shadow-[0_0_15px_rgba(59,130,246,0.5)] absolute top-0 animate-[scan_4s_linear_infinite]" />
//             </div>

//             {/* Metadata Label */}
//             <div className="absolute bottom-6 left-6 flex items-center gap-4 bg-black/60 backdrop-blur-md p-4 border border-white/10 rounded-xl">
//               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//               <div>
//                 <p className="text-[8px] font-mono text-blue-400 uppercase tracking-widest leading-none">
//                   Asset_Located
//                 </p>
//                 <p className="text-white font-bold text-xs uppercase italic">
//                   Structural_Node_01
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Background Glow */}
//           <div className="absolute -z-10 inset-0 bg-blue-600/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
//         </motion.div>
//       </div>

//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         @keyframes scan {
//           0% { top: 0%; opacity: 0; }
//           10% { opacity: 1; }
//           90% { opacity: 1; }
//           100% { top: 100%; opacity: 0; }
//         }
//       `,
//         }}
//       />
//     </Section>
//   );
// }

// import React, { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import building_01 from "../../assets/Images/building_01.jpeg";

// export default function WhyLovely() {
//   const containerRef = useRef(null);
//   const imageCardRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Parallax effect matching your Hero logic
//       const onMove = (e) => {
//         const { clientX, clientY } = e;
//         const cx = window.innerWidth / 2;
//         const cy = window.innerHeight / 2;
//         const dx = (clientX - cx) / cx;
//         const dy = (clientY - cy) / cy;

//         gsap.to(imageCardRef.current, {
//           rotateY: dx * 12,
//           rotateX: dy * -12,
//           x: dx * 20,
//           y: dy * 20,
//           duration: 2,
//           ease: "power2.out",
//         });
//       };

//       window.addEventListener("mousemove", onMove);
//       return () => window.removeEventListener("mousemove", onMove);
//     }, containerRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden bg-transparent"
//     >
//       <div className="max-w-[1500px] w-full grid lg:grid-cols-2 gap-16 xl:gap-32 items-center relative z-10">
//         {/* LEFT: THE CONTENT AREA */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.2 }}
//           className="space-y-10"
//         >
//           {/* Section Indicator */}
//           <div className="flex items-center gap-4">
//             <div className="h-[1px] w-12 bg-gradient-to-r from-blue-500 to-transparent" />
//             <span className="text-blue-400 font-mono text-[10px] tracking-[0.6em] uppercase font-black">
//               Strategic_Positioning // 02
//             </span>
//           </div>

//           {/* Main Headline */}
//           <h2 className="text-6xl md:text-7xl xl:text-[80px] font-black leading-[0.85] tracking-tighter text-white uppercase italic">
//             SINGLE POINT <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 italic">
//               OF CLARITY
//             </span>
//           </h2>

//           {/* Manifesto-style content blocks */}
//           <div className="space-y-8">
//             <p className="text-xl md:text-2xl text-white font-medium italic leading-tight max-w-xl">
//               "We operate at the intersection of business, mobility, technology,
//               and real estate, where{" "}
//               <span className="text-slate-500">
//                 decisions are rarely simple.
//               </span>
//               "
//             </p>

//             <div className="grid gap-6 border-l border-white/10 pl-8">
//               <div className="space-y-2">
//                 <span className="text-red-500 font-mono text-[10px] uppercase tracking-widest font-bold">
//                   Protocol_01
//                 </span>
//                 <p className="text-slate-400 text-lg leading-relaxed">
//                   We are <span className="text-white">boutique by design:</span>{" "}
//                   focused, and deeply context-driven.
//                 </p>
//               </div>

//               <div className="space-y-2">
//                 <span className="text-purple-500 font-mono text-[10px] uppercase tracking-widest font-bold">
//                   Protocol_02
//                 </span>
//                 <p className="text-slate-400 text-lg leading-relaxed">
//                   We collaborate with licensed experts, while remaining your
//                   single point of <span className="text-white">clarity</span>.
//                 </p>
//               </div>

//               <div className="pt-4">
//                 <p className="text-xs font-mono uppercase tracking-[0.4em] text-red-500 animate-pulse">
//                   // We value discretion as much as results.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* RIGHT: THE ARCHITECTURAL VISUAL (Matches Hero Core) */}
//         <div className="relative h-[600px] w-full flex items-center justify-center perspective-1000">
//           {/* HUD Elements around the image */}
//           <div className="absolute inset-0 z-20 pointer-events-none">
//             <div className="absolute top-0 right-0 p-6 border-r border-t border-white/20 rounded-tr-3xl">
//               <span className="block text-[8px] font-mono text-blue-400 tracking-widest">
//                 BUILDING_REF_01
//               </span>
//               <span className="block text-white font-black italic">
//                 STRUCTURE_SYNC
//               </span>
//             </div>
//             <div className="absolute bottom-0 left-0 p-6 border-l border-b border-white/20 rounded-bl-3xl">
//               <span className="block text-[8px] font-mono text-red-500 tracking-widest">
//                 DATA_VISUALIZATION
//               </span>
//               <span className="block text-white font-black italic">
//                 99.4% STABILITY
//               </span>
//             </div>
//           </div>

//           {/* The Image Container - Glassmorphism style */}
//           <div
//             ref={imageCardRef}
//             className="relative w-full h-[500px] xl:h-[550px] rounded-[60px] overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(0,0,0,0.6)] group"
//           >
//             {/* Color Overlays */}
//             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-red-500/20 z-10 pointer-events-none" />

//             <img
//               src={building_01}
//               alt="Architecture"
//               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110"
//             />

//             {/* Technical Grid Overlay (Same as Hero) */}
//             <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-20 pointer-events-none bg-[length:100%_4px,3px_100%]" />

//             {/* Inner Scanning Bar */}
//             <motion.div
//               animate={{ top: ["-10%", "110%"] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//               className="absolute left-0 w-full h-[2px] bg-red-500/40 shadow-[0_0_15px_#ef4444] z-30"
//             />
//           </div>

//           {/* Background Glows to fill space */}
//           <div className="absolute -z-10 w-[120%] h-[120%] bg-purple-600/5 blur-[120px] rounded-full" />
//         </div>
//       </div>
//     </section>
//   );
// }

//==================================================================
// import React, { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ShieldCheck, Fingerprint, Zap } from "lucide-react"; // Award-vibe icons
// import building_01 from "../../assets/Images/building_01.jpeg";

// export default function WhyLovely() {
//   const containerRef = useRef(null);
//   const imageCardRef = useRef(null);
//   const floatingElementsRef = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // 3D Tilt Effect for the main card
//       const onMove = (e) => {
//         const { clientX, clientY } = e;
//         const cx = window.innerWidth / 2;
//         const cy = window.innerHeight / 2;
//         const dx = (clientX - cx) / cx;
//         const dy = (clientY - cy) / cy;

//         gsap.to(imageCardRef.current, {
//           rotateY: dx * 15,
//           rotateX: dy * -15,
//           duration: 1.5,
//           ease: "power2.out",
//         });

//         // Elements float at different speeds for depth
//         floatingElementsRef.current.forEach((el, i) => {
//           gsap.to(el, {
//             x: dx * (20 * (i + 1)),
//             y: dy * (20 * (i + 1)),
//             duration: 2,
//             ease: "power3.out",
//           });
//         });
//       };

//       window.addEventListener("mousemove", onMove);
//       return () => window.removeEventListener("mousemove", onMove);
//     }, containerRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen flex items-center justify-center py-32 px-6 overflow-hidden bg-transparent"
//     >
//       <div className="max-w-[1500px] w-full grid lg:grid-cols-2 gap-20 xl:gap-40 items-center relative z-10">
//         {/* LEFT: CONTENT MANIFESTO */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//           className="space-y-12"
//         >
//           {/* Badge */}
//           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md">
//             <Zap size={14} className="text-blue-400 animate-pulse" />
//             <span className="text-blue-400 font-mono text-[10px] tracking-[0.4em] uppercase font-black">
//               Agency_Elite_Protocol
//             </span>
//           </div>

//           {/* Title with requested Gradient */}
//           <h2 className="text-6xl md:text-8xl font-black leading-[0.8] tracking-tighter uppercase italic">
//             <span className="text-white">SINGLE POINT</span> <br />
//             <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
//               OF CLARITY
//             </span>
//           </h2>

//           {/* Icon Grid for the "Winning" feel */}
//           <div className="grid sm:grid-cols-2 gap-8 pt-8">
//             <div className="space-y-4 group">
//               <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/20 flex items-center justify-center group-hover:border-blue-500 transition-colors">
//                 <ShieldCheck className="text-blue-400" size={24} />
//               </div>
//               <h4 className="text-white font-black italic uppercase tracking-widest text-sm">
//                 Boutique Design
//               </h4>
//               <p className="text-slate-400 text-sm leading-relaxed">
//                 Focused, context-driven strategies tailored for high-stakes
//                 decisions.
//               </p>
//             </div>

//             <div className="space-y-4 group">
//               <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/20 flex items-center justify-center group-hover:border-purple-500 transition-colors">
//                 <Fingerprint className="text-purple-400" size={24} />
//               </div>
//               <h4 className="text-white font-black italic uppercase tracking-widest text-sm">
//                 Absolute Discretion
//               </h4>
//               <p className="text-slate-400 text-sm leading-relaxed">
//                 We value the privacy of your operations as much as the results
//                 we deliver.
//               </p>
//             </div>
//           </div>

//           <p className="text-xl text-slate-300 italic font-medium leading-relaxed border-l-4 border-red-500/50 pl-8 bg-gradient-to-r from-red-500/5 to-transparent py-4">
//             "We operate at the intersection of business, mobility, technology,
//             and real estate, where decisions are rarely simple."
//           </p>
//         </motion.div>

//         {/* RIGHT: THE BLUEPRINT VISUAL */}
//         <div className="relative h-[700px] w-full flex items-center justify-center">
//           {/* Floating UI Elements (HUD) */}
//           <div
//             ref={(el) => (floatingElementsRef.current[0] = el)}
//             className="absolute top-[10%] left-[5%] z-30 p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
//           >
//             <div className="flex items-center gap-3">
//               <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
//               <span className="font-mono text-[10px] text-white uppercase tracking-tighter">
//                 Live_Architecture_Sync
//               </span>
//             </div>
//           </div>

//           <div
//             ref={(el) => (floatingElementsRef.current[1] = el)}
//             className="absolute bottom-[15%] right-[0%] z-30 p-6 bg-blue-500/10 backdrop-blur-xl border border-blue-500/20 rounded-3xl shadow-2xl"
//           >
//             <p className="text-blue-400 font-mono text-[9px] mb-1">
//               STABILITY_INDEX
//             </p>
//             <p className="text-white font-black text-3xl italic">99.98%</p>
//           </div>

//           {/* MAIN IMAGE CASE */}
//           <div
//             ref={imageCardRef}
//             className="relative w-full max-w-[500px] aspect-[4/5] rounded-[60px] overflow-hidden border border-white/20 shadow-[0_0_100px_rgba(0,0,0,0.8)] perspective-1000 group"
//           >
//             {/* The Image with a subtle zoom */}
//             <img
//               src={building_01}
//               alt="Elite Architecture"
//               className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
//             />

//             {/* Glowing Borders */}
//             <div className="absolute inset-0 border-[1px] border-white/10 rounded-[60px] pointer-events-none" />

//             {/* Tech Overlays */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

//             {/* The "Award" Scan Line */}
//             <motion.div
//               animate={{ top: ["-5%", "105%"] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute left-0 w-full h-[100px] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent z-20 pointer-events-none"
//             />

//             <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-10 pointer-events-none bg-[length:100%_4px,4px_100%]" />
//           </div>

//           {/* Massive Glow behind everything */}
//           <div className="absolute -z-10 w-full h-full bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
//         </div>
//       </div>
//     </section>
//   );
// }

//===================================================================
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import { Shield, Zap, Target, EyeOff, ChevronRight } from "lucide-react";

// // Import your images here
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
//       image: building_01, // Swap these with your specific images
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
//       stability: "100%",
//     },
//     {
//       id: "04",
//       title: "Absolute Discretion",
//       text: "We value discretion as much as results.",
//       icon: <EyeOff size={20} />,
//       image: building_01,
//       protocol: "STEALTH_PROTOCOL_INIT",
//       stability: "99.9%",
//     },
//   ];

//   // Auto-cycle logic
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % data.length);
//     }, 8000);
//     return () => clearInterval(timer);
//   }, []);

//   // Mouse Tilt Effect
//   useEffect(() => {
//     const onMove = (e) => {
//       const { clientX, clientY } = e;
//       const dx = (clientX - window.innerWidth / 2) / (window.innerWidth / 2);
//       const dy = (clientY - window.innerHeight / 2) / (window.innerHeight / 2);
//       gsap.to(imageCardRef.current, {
//         rotateY: dx * 10,
//         rotateX: dy * -10,
//         duration: 1,
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
//         {/* LEFT: THE INTERACTIVE LIST */}
//         <div className="space-y-12">
//           <div>
//             <h2 className="text-7xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
//               <span className="text-white">Why</span> <br />
//               <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
//                 Lovely
//               </span>
//             </h2>
//           </div>

//           <div className="space-y-4">
//             {data.map((item, idx) => (
//               <button
//                 key={item.id}
//                 onClick={() => setActiveIndex(idx)}
//                 className={`w-full text-left group relative p-6 rounded-2xl border transition-all duration-500 flex items-start gap-6
//                   ${
//                     activeIndex === idx
//                       ? "bg-white/[0.03] border-white/20 shadow-2xl"
//                       : "bg-transparent border-transparent opacity-40 hover:opacity-100"
//                   }`}
//               >
//                 {/* Active Indicator Line */}
//                 {activeIndex === idx && (
//                   <motion.div
//                     layoutId="activeLine"
//                     className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 via-purple-500 to-red-500"
//                   />
//                 )}

//                 <div
//                   className={`p-3 rounded-xl transition-colors ${activeIndex === idx ? "text-red-500 bg-red-500/10" : "text-white"}`}
//                 >
//                   {item.icon}
//                 </div>

//                 <div className="space-y-2">
//                   <h4
//                     className={`font-black italic uppercase tracking-widest text-sm ${activeIndex === idx ? "text-white" : "text-slate-500"}`}
//                   >
//                     {item.title}
//                   </h4>
//                   <p
//                     className={`text-lg leading-tight italic ${activeIndex === idx ? "text-slate-200" : "text-slate-500"}`}
//                   >
//                     {item.text}
//                   </p>
//                 </div>

//                 <ChevronRight
//                   className={`ml-auto mt-1 transition-transform ${activeIndex === idx ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT: THE DYNAMIC CORE VISUAL */}
//         <div className="relative h-[700px] w-full flex items-center justify-center perspective-1000">
//           {/* FLOATING HUD DATA */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`hud-${activeIndex}`}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               className="absolute top-[5%] right-[5%] z-30 p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl"
//             >
//               <p className="text-[8px] font-mono text-blue-400 tracking-[0.3em] uppercase">
//                 {data[activeIndex].protocol}
//               </p>
//               <p className="text-white font-black italic text-xl">
//                 STABILITY: {data[activeIndex].stability}
//               </p>
//             </motion.div>
//           </AnimatePresence>

//           {/* MAIN IMAGE CARD */}
//           <div
//             ref={imageCardRef}
//             className="relative w-full max-w-[500px] aspect-[4/5] rounded-[60px] overflow-hidden border border-white/20 shadow-[0_0_100px_rgba(0,0,0,0.8)] group bg-black"
//           >
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={activeIndex}
//                 src={data[activeIndex].image}
//                 initial={{
//                   opacity: 0,
//                   scale: 1.1,
//                   filter: "blur(20px) grayscale(1)",
//                 }}
//                 animate={{
//                   opacity: 1,
//                   scale: 1,
//                   filter: "blur(0px) grayscale(0.5)",
//                 }}
//                 exit={{
//                   opacity: 0,
//                   scale: 0.9,
//                   filter: "blur(20px) grayscale(1)",
//                 }}
//                 transition={{ duration: 0.8, ease: "easeInOut" }}
//                 className="w-full h-full object-cover"
//               />
//             </AnimatePresence>

//             {/* Overlays */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

//             {/* Scanning Line */}
//             <motion.div
//               animate={{ top: ["-5%", "105%"] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//               className="absolute left-0 w-full h-[1px] bg-red-500/50 z-20"
//             />

//             {/* Tech Grid */}
//             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:40px_40px] z-10" />
//           </div>

//           {/* Background Glow */}
//           <motion.div
//             animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
//             transition={{ duration: 4, repeat: Infinity }}
//             className="absolute -z-10 w-full h-full bg-purple-600 blur-[150px] rounded-full"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

//===================================================================
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
      title: "The Intersection",
      text: "We operate at the intersection of business, mobility, technology, and real estate, where decisions are rarely simple.",
      icon: <Zap size={20} />,
      image: building_01,
      protocol: "CORE_INTERSECTION_SYNC",
      stability: "99.2%",
    },
    {
      id: "02",
      title: "Boutique Design",
      text: "We are boutique by design: focused, and deeply context-driven.",
      icon: <Target size={20} />,
      image: building_02,
      protocol: "CONTEXT_DRIVEN_OPS",
      stability: "98.5%",
    },
    {
      id: "03",
      title: "Single Point Clarity",
      text: "We collaborate with licensed experts, while remaining your single point of clarity.",
      icon: <Shield size={20} />,
      image: building_03,
      protocol: "EXPERT_COLLAB_V3",
      stability: "100.0%",
    },
    {
      id: "04",
      title: "Absolute Discretion",
      text: "We value discretion as much as results.",
      icon: <EyeOff size={20} />,
      image: building_01, // Use a 4th unique image if available
      protocol: "STEALTH_PROTOCOL_INIT",
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
          {/* DECORATIVE ROTATING RING (Behind Image) */}
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
              {/* <div className="bg-black/80 p-5 rounded-2xl border border-white/5 shadow-2xl">
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
              </div> */}
            </motion.div>
          </AnimatePresence>

          {/* DYNAMIC IMAGE FRAME */}
          <div
            ref={imageCardRef}
            className="relative w-full max-w-[540px] aspect-[4/5] z-10 pointer-events-none"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* TECHNICAL CORNER BRACKETS */}
            <div className="absolute -top-6 -left-6 border-t-2 border-l-2 border-white/30 w-16 h-16 rounded-tl-[40px] z-30" />
            <div className="absolute -bottom-6 -right-6 border-b-2 border-r-2 border-white/30 w-16 h-16 rounded-br-[40px] z-30" />

            {/* THE LENS CASE */}
            <div className="relative w-full h-full rounded-[60px] overflow-hidden border border-white/10 shadow-[0_0_120px_rgba(0,0,0,0.8)] bg-black group pointer-events-auto">
              {/* INTERACTIVE SCAN OVERLAY */}
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

              {/* GLASS REFLECTION & VIGNETTE */}
              <div className="absolute inset-0 z-20 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 z-20 shadow-[inset_0_0_120px_rgba(0,0,0,0.9)] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />

              {/* VERTICAL SCANNING BEAM */}
              <motion.div
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent z-30"
              />
            </div>

            {/* REAR ATMOSPHERIC GLOWS */}
            <div className="absolute -inset-20 -z-10 blur-[120px] opacity-40">
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-600 rounded-full animate-pulse" />
              <div
                className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-red-600 rounded-full animate-pulse"
                style={{ animationDelay: "2.5s" }}
              />
            </div>
          </div>

          {/* MASSIVE AMBIENT BACKGROUND ORB */}
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
