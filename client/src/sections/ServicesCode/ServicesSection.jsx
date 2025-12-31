// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { services as rawServices } from "../../constants";

// /* ===============================
//    VISUAL MAPPING
// ================================ */
// const portalVisuals = {
//   "Business Consulting Services": {
//     gradient: "linear-gradient(135deg, #1c1c84, #000068)",
//   },
//   "Immigration Consulting Services": {
//     gradient: "linear-gradient(135deg, #0f766e, #042f2e)",
//   },
//   "IT Consulting Services": {
//     gradient: "linear-gradient(135deg, #4f46e5, #020617)",
//   },
//   "Real Estate – Buy & Sell": {
//     gradient: "linear-gradient(135deg, #78350f, #1c1917)",
//   },
//   Events: {
//     gradient: "linear-gradient(135deg, #831843, #020617)",
//   },
// };

// /* ===============================
//    TOP LEVEL SERVICES ONLY
// ================================ */
// const services = rawServices.map((s) => ({
//   title: s.title,
//   visual: portalVisuals[s.title],
// }));

// export default function ServicesSection() {
//   const [modal, setModal] = useState({ active: false, index: 0 });
//   const cursor = useRef(null);
//   const cursorLabel = useRef(null);

//   /* ===============================
//      CURSOR INERTIA
//   ================================ */
//   useEffect(() => {
//     const xMove = gsap.quickTo(cursor.current, "left", {
//       duration: 0.8,
//       ease: "power3",
//     });
//     const yMove = gsap.quickTo(cursor.current, "top", {
//       duration: 0.8,
//       ease: "power3",
//     });

//     const xLabel = gsap.quickTo(cursorLabel.current, "left", {
//       duration: 0.45,
//       ease: "power3",
//     });
//     const yLabel = gsap.quickTo(cursorLabel.current, "top", {
//       duration: 0.45,
//       ease: "power3",
//     });

//     const move = (e) => {
//       xMove(e.clientX);
//       yMove(e.clientY);
//       xLabel(e.clientX);
//       yLabel(e.clientY);
//     };

//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <section
//       id="services"
//       className="relative w-full min-h-screen bg-[#020617] text-white py-20 overflow-hidden"
//     >
//       <div className="noise-overlay" />

//       {/* HEADER */}
//       <div className="max-w-[1400px] mx-auto px-8 mb-20">
//         <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-2 flex justify-between">
//           <span>/// Services Registry</span>
//           <span>[ System_Ready ]</span>
//         </h2>
//       </div>

//       {/* SERVICES LIST */}
//       <div className="max-w-[1400px] mx-auto px-8">
//         {services.map((service, index) => (
//           <motion.div
//             key={service.title}
//             className="group border-t border-gray-800/50 hover:border-white/20 py-16 flex justify-between items-center cursor-pointer"
//             onMouseEnter={() => setModal({ active: true, index })}
//             onMouseLeave={() => setModal({ active: false, index })}
//             initial="rest"
//             animate="rest"
//             whileHover="hover"
//           >
//             {/* TITLE — PACED */}
//             <motion.h2
//               variants={{
//                 rest: {
//                   x: 0,
//                   skewX: 0,
//                   opacity: 0.75,
//                 },
//                 hover: {
//                   x: 18,
//                   skewX: -4,
//                   opacity: 1,
//                   transition: {
//                     duration: 0.45,
//                     ease: [0.16, 1, 0.3, 1],
//                   },
//                 },
//               }}
//               className="hollow-text text-5xl md:text-8xl font-bold uppercase"
//             >
//               {service.title}
//             </motion.h2>

//             {/* LABEL — DELAYED */}
//             <motion.span
//               variants={{
//                 rest: {
//                   opacity: 0,
//                   x: -12,
//                 },
//                 hover: {
//                   opacity: 1,
//                   x: 0,
//                   transition: {
//                     delay: 0.12,
//                     duration: 0.35,
//                     ease: "easeOut",
//                   },
//                 },
//               }}
//               className="text-xs font-mono text-gray-400"
//             >
//               Initiate →
//             </motion.span>
//           </motion.div>
//         ))}
//       </div>

//       {/* FLOATING PORTAL */}
//       <motion.div
//         ref={cursor}
//         className="fixed top-0 left-0 w-[360px] h-[480px] rounded-xl overflow-hidden pointer-events-none z-10"
//         style={{ mixBlendMode: "exclusion" }}
//         variants={scaleAnimation}
//         initial="initial"
//         animate={modal.active ? "enter" : "closed"}
//       >
//         <div
//           style={{ top: `-${modal.index * 100}%` }}
//           className="relative h-full transition-all duration-500"
//         >
//           {services.map((service) => (
//             <div
//               key={service.title}
//               className="h-full w-full relative"
//               style={{ background: service.visual?.gradient }}
//             >
//               <div className="portal-shimmer absolute inset-0" />
//               <span className="absolute bottom-6 left-6 text-white/20 text-3xl font-bold uppercase">
//                 {service.title}
//               </span>
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       {/* CURSOR DOT */}
//       <motion.div
//         ref={cursorLabel}
//         className="fixed top-0 left-0 w-12 h-12 rounded-full border border-white/30 backdrop-blur pointer-events-none z-20 flex items-center justify-center"
//         variants={scaleAnimation}
//         initial="initial"
//         animate={modal.active ? "enter" : "closed"}
//       >
//         <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
//       </motion.div>
//     </section>
//   );
// }

// /* ===============================
//    SHARED MOTION
// ================================ */
// const scaleAnimation = {
//   initial: { scale: 0, x: "-50%", y: "-50%" },
//   enter: {
//     scale: 1,
//     x: "-50%",
//     y: "-50%",
//     transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
//   },
//   closed: {
//     scale: 0,
//     x: "-50%",
//     y: "-50%",
//     transition: { duration: 0.3 },
//   },
// };

// /* ===============================
//    VERSION ONE FILED FOR REFERENCE
// ================================ */

// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { services as rawServices } from "../../constants";

// /* ===============================
//    VISUAL MAPPING
// ================================ */
// const portalVisuals = {
//   "Business Consulting Services": {
//     gradient: "linear-gradient(135deg, #1c1c84, #000068)",
//   },
//   "Immigration Consulting Services": {
//     gradient: "linear-gradient(135deg, #0f766e, #042f2e)",
//   },
//   "IT Consulting Services": {
//     gradient: "linear-gradient(135deg, #4f46e5, #020617)",
//   },
//   "Real Estate – Buy & Sell": {
//     gradient: "linear-gradient(135deg, #78350f, #1c1917)",
//   },
//   Events: {
//     gradient: "linear-gradient(135deg, #831843, #020617)",
//   },
// };

// const services = rawServices.map((s) => ({
//   title: s.title,
//   visual: portalVisuals[s.title],
// }));

// export default function ServicesSection() {
//   const [modal, setModal] = useState({ active: false, index: 0 });
//   const [cursorText, setCursorText] = useState("Explore");

//   const cursor = useRef(null);
//   const cursorLabel = useRef(null);

//   /* ===============================
//      CURSOR INTELLIGENCE
//   ================================ */
//   useEffect(() => {
//     let lastX = 0;
//     let lastY = 0;

//     const moveCursor = gsap.quickTo(cursor.current, "left", {
//       duration: 0.7,
//       ease: "power3",
//     });
//     const moveCursorY = gsap.quickTo(cursor.current, "top", {
//       duration: 0.7,
//       ease: "power3",
//     });

//     const moveLabelX = gsap.quickTo(cursorLabel.current, "left", {
//       duration: 0.4,
//       ease: "power3",
//     });
//     const moveLabelY = gsap.quickTo(cursorLabel.current, "top", {
//       duration: 0.4,
//       ease: "power3",
//     });

//     const onMove = (e) => {
//       const dx = e.clientX - lastX;
//       const dy = e.clientY - lastY;
//       const velocity = Math.min(Math.sqrt(dx * dx + dy * dy) / 18, 1.2);

//       lastX = e.clientX;
//       lastY = e.clientY;

//       moveCursor(e.clientX);
//       moveCursorY(e.clientY);
//       moveLabelX(e.clientX);
//       moveLabelY(e.clientY);

//       gsap.to(cursor.current, {
//         scaleX: 1 + velocity * 0.4,
//         scaleY: 1 - velocity * 0.15,
//         duration: 0.3,
//         ease: "power3.out",
//       });
//     };

//     window.addEventListener("mousemove", onMove);
//     return () => window.removeEventListener("mousemove", onMove);
//   }, []);

//   return (
//     <section
//       id="services"
//       className="relative w-full min-h-screen bg-[#0a0a0a] text-white py-20 overflow-hidden"
//     >
//       <div className="noise-overlay" />

//       {/* HEADER */}
//       <div className="max-w-[1400px] mx-auto px-8 mb-20">
//         <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-2 flex justify-between">
//           <span>/// Services Registry</span>
//           <span>[ System_Ready ]</span>
//         </h2>
//       </div>

//       {/* SERVICES LIST */}
//       <div className="max-w-[1400px] mx-auto px-8">
//         {services.map((service, index) => (
//           <motion.div
//             key={service.title}
//             className="group border-t border-gray-800/50 hover:border-white/20 py-16 flex justify-between items-center cursor-pointer"
//             onMouseEnter={() => {
//               setModal({ active: true, index });
//               setCursorText("Open");
//             }}
//             onMouseLeave={() => {
//               setModal({ active: false, index });
//               setCursorText("Explore");
//             }}
//           >
//             <motion.h2
//               className="hollow-text text-5xl md:text-8xl font-bold uppercase"
//               whileHover={{
//                 x: 18,
//                 skewX: -4,
//                 transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
//               }}
//             >
//               {service.title}
//             </motion.h2>

//             <span className="text-xs font-mono text-gray-400">Initiate →</span>
//           </motion.div>
//         ))}
//       </div>

//       {/* FLOATING PORTAL */}
//       <motion.div
//         ref={cursor}
//         className="fixed top-0 left-0 w-[360px] h-[480px] rounded-xl overflow-hidden pointer-events-none z-10"
//         style={{ mixBlendMode: "exclusion" }}
//         variants={scaleAnimation}
//         initial="initial"
//         animate={modal.active ? "enter" : "closed"}
//       >
//         <div
//           style={{ top: `-${modal.index * 100}%` }}
//           className="relative h-full transition-all duration-500"
//         >
//           {services.map((service) => (
//             <div
//               key={service.title}
//               className="h-full w-full relative"
//               style={{ background: service.visual?.gradient }}
//             >
//               <div className="portal-shimmer absolute inset-0" />
//               <span className="absolute bottom-6 left-6 text-white/20 text-3xl font-bold uppercase">
//                 {service.title}
//               </span>
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       {/* CURSOR LABEL */}
//       <motion.div
//         ref={cursorLabel}
//         className="fixed top-0 left-0 px-4 py-2 rounded-full border border-white/30 backdrop-blur pointer-events-none z-20 text-xs font-mono"
//         variants={scaleAnimation}
//         initial="initial"
//         animate={modal.active ? "enter" : "closed"}
//       >
//         {cursorText}
//       </motion.div>
//     </section>
//   );
// }

// /* ===============================
//    MOTION VARIANTS
// ================================ */
// const scaleAnimation = {
//   initial: { scale: 0, x: "-50%", y: "-50%" },
//   enter: {
//     scale: 1,
//     x: "-50%",
//     y: "-50%",
//     transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] },
//   },
//   closed: {
//     scale: 0,
//     x: "-50%",
//     y: "-50%",
//     transition: { duration: 0.25 },
//   },
// };

// =/* ===============================
//    END OF VERSION 2
// ================================ */

// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { services as rawServices } from "../../constants";

// gsap.registerPlugin(ScrollTrigger);

// /* ===============================
//    VISUAL MAPPING
// ================================ */
// const portalVisuals = {
//   "Business Consulting Services": {
//     gradient: "linear-gradient(135deg, #1c1c84, #000068)",
//   },
//   "Immigration Consulting Services": {
//     gradient: "linear-gradient(135deg, #0f766e, #042f2e)",
//   },
//   "IT Consulting Services": {
//     gradient: "linear-gradient(135deg, #4f46e5, #020617)",
//   },
//   "Real Estate – Buy & Sell": {
//     gradient: "linear-gradient(135deg, #78350f, #1c1917)",
//   },
//   Events: {
//     gradient: "linear-gradient(135deg, #831843, #020617)",
//   },
// };

// const services = rawServices.map((s) => ({
//   title: s.title,
//   visual: portalVisuals[s.title],
// }));

// export default function ServicesSection() {
//   const sectionRef = useRef(null);
//   const itemsRef = useRef([]);

//   const [modal, setModal] = useState({ active: false, index: 0 });
//   const [cursorText, setCursorText] = useState("Explore");

//   const cursor = useRef(null);
//   const cursorLabel = useRef(null);

//   /* ===============================
//      CURSOR PHYSICS (Fix #3)
//   ================================ */
//   useEffect(() => {
//     let lastX = 0;
//     let lastY = 0;

//     const moveX = gsap.quickTo(cursor.current, "left", { duration: 0.7 });
//     const moveY = gsap.quickTo(cursor.current, "top", { duration: 0.7 });
//     const moveLX = gsap.quickTo(cursorLabel.current, "left", { duration: 0.4 });
//     const moveLY = gsap.quickTo(cursorLabel.current, "top", { duration: 0.4 });

//     const onMove = (e) => {
//       const dx = e.clientX - lastX;
//       const dy = e.clientY - lastY;
//       const velocity = Math.min(Math.sqrt(dx * dx + dy * dy) / 20, 1.2);

//       lastX = e.clientX;
//       lastY = e.clientY;

//       moveX(e.clientX);
//       moveY(e.clientY);
//       moveLX(e.clientX);
//       moveLY(e.clientY);

//       gsap.to(cursor.current, {
//         scaleX: 1 + velocity * 0.4,
//         scaleY: 1 - velocity * 0.15,
//         duration: 0.25,
//       });
//     };

//     window.addEventListener("mousemove", onMove);
//     return () => window.removeEventListener("mousemove", onMove);
//   }, []);

//   /* ===============================
//      SCROLL NARRATIVE (Fix #4)
//   ================================ */
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(itemsRef.current, {
//         opacity: 0,
//         y: 80,
//         skewY: 6,
//         stagger: 0.18,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//           end: "top 20%",
//           scrub: true,
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="services"
//       className="relative w-full min-h-screen bg-[#0a0a0a] text-white py-32 overflow-hidden"
//     >
//       <div className="noise-overlay" />

//       {/* HEADER */}
//       <div className="max-w-[1400px] mx-auto px-8 mb-28">
//         <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-2 flex justify-between">
//           <span>/// Services Registry</span>
//           <span>[ Scroll to Engage ]</span>
//         </h2>
//       </div>

//       {/* SERVICES */}
//       <div className="max-w-[1400px] mx-auto px-8">
//         {services.map((service, index) => (
//           <div
//             key={service.title}
//             ref={(el) => (itemsRef.current[index] = el)}
//             className="group border-t border-gray-800/50 py-20 flex justify-between items-center cursor-pointer"
//             onMouseEnter={() => {
//               setModal({ active: true, index });
//               setCursorText("Open");
//             }}
//             onMouseLeave={() => {
//               setModal({ active: false, index });
//               setCursorText("Explore");
//             }}
//           >
//             <h2 className="hollow-text text-5xl md:text-8xl font-bold uppercase">
//               {service.title}
//             </h2>
//             <span className="text-xs font-mono text-gray-400">Initiate →</span>
//           </div>
//         ))}
//       </div>

//       {/* FLOATING PORTAL */}
//       <motion.div
//         ref={cursor}
//         className="fixed top-0 left-0 w-[360px] h-[480px] rounded-xl overflow-hidden pointer-events-none z-10"
//         style={{ mixBlendMode: "exclusion" }}
//         variants={scaleAnimation}
//         initial="initial"
//         animate={modal.active ? "enter" : "closed"}
//       >
//         <div
//           style={{ top: `-${modal.index * 100}%` }}
//           className="relative h-full transition-all duration-500"
//         >
//           {services.map((service) => (
//             <div
//               key={service.title}
//               className="h-full w-full relative"
//               style={{ background: service.visual.gradient }}
//             >
//               <div className="portal-shimmer absolute inset-0" />
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       {/* CURSOR LABEL */}
//       <motion.div
//         ref={cursorLabel}
//         className="fixed top-0 left-0 px-4 py-2 rounded-full border border-white/30 backdrop-blur pointer-events-none z-20 text-xs font-mono"
//         variants={scaleAnimation}
//         initial="initial"
//         animate={modal.active ? "enter" : "closed"}
//       >
//         {cursorText}
//       </motion.div>
//     </section>
//   );
// }

// /* ===============================
//    MOTION VARIANTS
// ================================ */
// const scaleAnimation = {
//   initial: { scale: 0, x: "-50%", y: "-50%" },
//   enter: {
//     scale: 1,
//     x: "-50%",
//     y: "-50%",
//     transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] },
//   },
//   closed: {
//     scale: 0,
//     x: "-50%",
//     y: "-50%",
//     transition: { duration: 0.25 },
//   },
// };

//===============================================
// end of version three
//===============================================

// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { X, ArrowRight, Shield, Zap, Globe, Command } from "lucide-react";
// import { services as rawServices } from "../../constants";

// gsap.registerPlugin(ScrollTrigger);

// /* ===============================
//     VISUAL MAPPING
// ================================ */
// const portalVisuals = {
//   "Business Consulting Services": {
//     gradient: "linear-gradient(135deg, #1c1c84, #000068)",
//   },
//   "Immigration Consulting Services": {
//     gradient: "linear-gradient(135deg, #0f766e, #042f2e)",
//   },
//   "IT Consulting Services": {
//     gradient: "linear-gradient(135deg, #4f46e5, #020617)",
//   },
//   "Real Estate – Buy & Sell": {
//     gradient: "linear-gradient(135deg, #78350f, #1c1917)",
//   },
//   Events: { gradient: "linear-gradient(135deg, #831843, #020617)" },
// };

// const services = rawServices.map((s, i) => ({
//   ...s,
//   id: `0${i + 1}`,
//   visual: portalVisuals[s.title] || {
//     gradient: "linear-gradient(135deg, #333, #000)",
//   },
// }));

// /* ===============================
//     SUB-COMPONENT: MODAL
// ================================ */
// const DetailedModal = ({ service, isOpen, onClose }) => (
//   <AnimatePresence>
//     {isOpen && (
//       <>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={onClose}
//           className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[100] cursor-pointer"
//         />
//         <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 md:p-8 pointer-events-none">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 40 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: 40 }}
//             className="bg-[#0a0a0a] border border-white/10 w-full max-w-5xl rounded-[40px] overflow-hidden pointer-events-auto shadow-2xl flex flex-col max-h-[90vh]"
//           >
//             {/* Modal Header */}
//             <div
//               className="h-48 w-full relative"
//               style={{ background: service.visual.gradient }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
//               <div className="absolute bottom-8 left-10">
//                 <p className="text-blue-400 font-mono text-xs tracking-[0.5em] uppercase mb-2">
//                   Protocol Active
//                 </p>
//                 <h3 className="text-white text-4xl font-bold uppercase italic tracking-tighter">
//                   {service.title}
//                 </h3>
//               </div>
//               <button
//                 onClick={onClose}
//                 className="absolute top-8 right-8 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             {/* Modal Content */}
//             <div className="p-10 md:p-16 overflow-y-auto custom-scrollbar flex-1">
//               <div className="grid lg:grid-cols-3 gap-16">
//                 <div className="lg:col-span-2 space-y-8">
//                   <h4 className="text-white text-2xl font-semibold tracking-tight uppercase">
//                     High-Performance Deployment
//                   </h4>
//                   <p className="text-slate-400 text-lg leading-relaxed">
//                     {service.description ||
//                       "Standardizing the future of service delivery through architectural excellence and data-driven strategy."}
//                   </p>
//                   <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
//                     <div>
//                       <p className="text-blue-500 font-mono text-[10px] uppercase tracking-widest mb-2">
//                         Primary Objective
//                       </p>
//                       <p className="text-white text-sm">
//                         Scalable integration and market dominance.
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-blue-500 font-mono text-[10px] uppercase tracking-widest mb-2">
//                         Deployment Phase
//                       </p>
//                       <p className="text-white text-sm">
//                         Operational Global rollout Q1 2025.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="space-y-8 border-l border-white/5 pl-10">
//                   <div className="space-y-4">
//                     <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">
//                       Capabilities
//                     </p>
//                     <ul className="space-y-3 text-sm text-white/70">
//                       <li className="flex items-center gap-2">
//                         <Zap size={14} className="text-blue-500" /> Real-time
//                         Analytics
//                       </li>
//                       <li className="flex items-center gap-2">
//                         <Shield size={14} className="text-blue-500" /> Secure
//                         Architecture
//                       </li>
//                       <li className="flex items-center gap-2">
//                         <Globe size={14} className="text-blue-500" /> Global
//                         Compliance
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Modal Footer */}
//             <div className="p-8 bg-white/[0.02] border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
//               <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500 uppercase">
//                 <Command size={14} /> System status: Optimal // Connection:
//                 Secure
//               </div>
//               <button className="px-10 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-500">
//                 Initialize Consultation
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </>
//     )}
//   </AnimatePresence>
// );

// /* ===============================
//     MAIN SECTION EXPORT
// ================================ */
// export default function ServicesSection() {
//   const sectionRef = useRef(null);
//   const itemsRef = useRef([]);
//   const cursor = useRef(null);
//   const cursorLabel = useRef(null);

//   const [modal, setModal] = useState({ active: false, index: 0 });
//   const [selectedService, setSelectedService] = useState(null);

//   useEffect(() => {
//     const moveX = gsap.quickTo(cursor.current, "left", {
//       duration: 0.7,
//       ease: "power3",
//     });
//     const moveY = gsap.quickTo(cursor.current, "top", {
//       duration: 0.7,
//       ease: "power3",
//     });
//     const moveLX = gsap.quickTo(cursorLabel.current, "left", { duration: 0.4 });
//     const moveLY = gsap.quickTo(cursorLabel.current, "top", { duration: 0.4 });

//     const onMove = (e) => {
//       moveX(e.clientX);
//       moveY(e.clientY);
//       moveLX(e.clientX);
//       moveLY(e.clientY);
//     };

//     window.addEventListener("mousemove", onMove);
//     return () => window.removeEventListener("mousemove", onMove);
//   }, []);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(itemsRef.current, {
//         opacity: 0,
//         y: 100,
//         stagger: 0.15,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           end: "top 20%",
//           scrub: 1,
//         },
//       });
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="services"
//       className="relative w-full min-h-screen bg-[#050505] text-white py-32 overflow-hidden"
//     >
//       <div className="noise-overlay" />

//       <div className="max-w-[1400px] mx-auto px-8 mb-24">
//         <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.4em] border-b border-white/5 pb-4">
//           /// SERVICES_PORTFOLIO_V2.0
//         </h2>
//       </div>

//       <div className="max-w-[1400px] mx-auto px-8 relative z-20">
//         {services.map((service, index) => (
//           <div
//             key={service.title}
//             ref={(el) => (itemsRef.current[index] = el)}
//             className="group border-t border-white/5 py-16 flex justify-between items-center cursor-pointer transition-all duration-500 hover:pl-8"
//             onMouseEnter={() => setModal({ active: true, index })}
//             onMouseLeave={() => setModal({ active: false, index })}
//             onClick={() => setSelectedService(service)}
//           >
//             <h2 className="hollow-text text-5xl md:text-6xl font-bold uppercase group-hover:italic">
//               {service.title}
//             </h2>
//             <div className="text-right">
//               <span className="block text-[10px] font-mono text-slate-500 mb-2">
//                 {service.id}
//               </span>
//               <ArrowRight
//                 className="text-blue-500 opacity-0 group-hover:opacity-100 transition-all -rotate-45 group-hover:rotate-0"
//                 size={32}
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       <DetailedModal
//         isOpen={!!selectedService}
//         service={selectedService}
//         onClose={() => setSelectedService(null)}
//       />

//       {/* Floating Cursor Portal */}
//       <motion.div
//         ref={cursor}
//         initial={{ scale: 0 }}
//         animate={{ scale: modal.active && !selectedService ? 1 : 0 }}
//         className="fixed top-0 left-0 w-[240px] h-[320px] rounded-2xl overflow-hidden pointer-events-none z-10 hidden lg:block"
//         style={{ x: "-50%", y: "-50%" }}
//       >
//         <div
//           style={{ top: `-${modal.index * 100}%` }}
//           className="relative h-full transition-all duration-700 ease-[0.76, 0, 0.24, 1]"
//         >
//           {services.map((s) => (
//             <div
//               key={s.title}
//               className="h-full w-full"
//               style={{ background: s.visual.gradient }}
//             >
//               <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Cursor Label */}
//       <motion.div
//         ref={cursorLabel}
//         initial={{ scale: 0 }}
//         animate={{ scale: modal.active && !selectedService ? 1 : 0 }}
//         className="fixed top-0 left-0 px-5 py-2 rounded-full bg-blue-600 text-white z-20 pointer-events-none text-[10px] font-mono uppercase tracking-widest"
//         style={{ x: "-50%", y: "140px" }}
//       >
//         View Protocol
//       </motion.div>
//     </section>
//   );
// }

//======================================================
//   /* ===============================
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import {
//   X,
//   ArrowRight,
//   Shield,
//   Zap,
//   Globe,
//   Command,
//   ArrowUpRight,
// } from "lucide-react";
// import { services as rawServices } from "../../constants";

// gsap.registerPlugin(ScrollTrigger);

// /* ===============================
//     VISUAL MAPPING
// ================================ */
// const portalVisuals = {
//   "Business Consulting Services": {
//     gradient: "linear-gradient(135deg, #1c1c84, #000068)",
//   },
//   "Immigration Consulting Services": {
//     gradient: "linear-gradient(135deg, #0f766e, #042f2e)",
//   },
//   "IT Consulting Services": {
//     gradient: "linear-gradient(135deg, #4f46e5, #020617)",
//   },
//   "Real Estate – Buy & Sell": {
//     gradient: "linear-gradient(135deg, #78350f, #1c1917)",
//   },
//   Events: { gradient: "linear-gradient(135deg, #831843, #020617)" },
// };

// const services = rawServices.map((s, i) => ({
//   ...s,
//   id: `0${i + 1}`,
//   visual: portalVisuals[s.title] || {
//     gradient: "linear-gradient(135deg, #333, #000)",
//   },
// }));

// export default function ServicesSection() {
//   const sectionRef = useRef(null);
//   const itemsRef = useRef([]);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [selectedService, setSelectedService] = useState(null);

//   useEffect(() => {
//     // 1. ENSURE VISIBILITY ON FIRST LOAD
//     const ctx = gsap.context(() => {
//       gsap.from(itemsRef.current, {
//         opacity: 0,
//         x: -50,
//         stagger: 0.1,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       });

//       // 2. FORCE REFRESH (Fixes the "Refresh needed" bug)
//       setTimeout(() => {
//         ScrollTrigger.refresh();
//       }, 500);
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="services"
//       className="relative w-full min-h-screen bg-[#050505] text-white py-32 overflow-hidden"
//     >
//       {/* Background Ambient Glow */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
//         <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full" />
//       </div>

//       <div className="max-w-[1400px] mx-auto px-8 mb-24">
//         <div className="flex justify-between items-end border-b border-white/10 pb-6">
//           <h2 className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.5em]">
//             /// CORE_DEPLOYMENT_PROTOCOLS_V3.0
//           </h2>
//           <span className="text-slate-500 font-mono text-[9px] uppercase hidden md:block">
//             System_Status: Optimal // Node: 24-88
//           </span>
//         </div>
//       </div>

//       <div className="max-w-[1400px] mx-auto px-8 relative z-20">
//         {services.map((service, index) => (
//           <div
//             key={service.title}
//             ref={(el) => (itemsRef.current[index] = el)}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             onClick={() => setSelectedService(service)}
//             className="group relative border-b border-white/5 py-12 flex justify-between items-center cursor-pointer transition-all duration-700 hover:pl-10 overflow-hidden"
//           >
//             {/* Kinetic Background Reveal */}
//             <motion.div
//               className="absolute inset-0 bg-blue-600/[0.03] origin-left z-0"
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
//               transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//             />

//             <div className="relative z-10 flex items-center gap-10">
//               <span className="text-blue-600 font-mono text-xs font-bold opacity-40 group-hover:opacity-100">
//                 {service.id}
//               </span>

//               <div className="flex flex-col">
//                 {/* FONT SIZE: text-3xl md:text-5xl (Refined size)
//                   FILL ON IDLE: text-white/80
//                   HOLLOW ON HOVER: group-hover:text-transparent + WebkitTextStroke
//                 */}
//                 <h3
//                   className="text-white/80 group-hover:text-transparent text-3xl md:text-5xl font-black uppercase italic transition-all duration-500 tracking-tighter"
//                   style={{
//                     WebkitTextStroke:
//                       hoveredIndex === index ? "1px white" : "0px transparent",
//                   }}
//                 >
//                   {service.title}
//                 </h3>

//                 {/* Micro-Data Tags */}
//                 <AnimatePresence>
//                   {hoveredIndex === index && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 5 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="flex gap-3 mt-3"
//                     >
//                       <span className="px-2 py-0.5 bg-blue-600 text-[8px] font-mono text-white rounded uppercase">
//                         Protocol_Active
//                       </span>
//                       <span className="px-2 py-0.5 border border-white/20 text-[8px] font-mono text-slate-400 rounded uppercase">
//                         Architecture_Ready
//                       </span>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>

//             {/* Action Icon */}
//             <div className="relative z-10 flex items-center gap-6">
//               <div
//                 className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-500
//                 ${
//                   hoveredIndex === index
//                     ? "bg-white border-white rotate-45"
//                     : "border-white/10 text-white"
//                 }`}
//               >
//                 <ArrowUpRight
//                   size={20}
//                   className={
//                     hoveredIndex === index ? "text-black" : "text-white"
//                   }
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <DetailedModal
//         isOpen={!!selectedService}
//         service={selectedService}
//         onClose={() => setSelectedService(null)}
//       />
//     </section>
//   );
// }

// const DetailedModal = ({ service, isOpen, onClose }) => (
//   <AnimatePresence>
//     {isOpen && (
//       <>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={onClose}
//           className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[100] cursor-pointer"
//         />
//         <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 md:p-8 pointer-events-none">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 40 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: 40 }}
//             className="bg-[#0a0a0a] border border-white/10 w-full max-w-5xl rounded-[40px] overflow-hidden pointer-events-auto shadow-2xl flex flex-col max-h-[90vh]"
//           >
//             <div
//               className="h-48 w-full relative"
//               style={{ background: service.visual.gradient }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
//               <div className="absolute bottom-8 left-10">
//                 <p className="text-blue-400 font-mono text-xs tracking-[0.5em] uppercase mb-2">
//                   Protocol Active
//                 </p>
//                 <h3 className="text-white text-4xl font-bold uppercase italic tracking-tighter">
//                   {service.title}
//                 </h3>
//               </div>
//               <button
//                 onClick={onClose}
//                 className="absolute top-8 right-8 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
//               >
//                 <X size={20} />
//               </button>
//             </div>
//             <div className="p-10 md:p-16 overflow-y-auto custom-scrollbar flex-1">
//               <div className="grid lg:grid-cols-3 gap-16">
//                 <div className="lg:col-span-2 space-y-8">
//                   <h4 className="text-white text-2xl font-semibold tracking-tight uppercase">
//                     High-Performance Deployment
//                   </h4>
//                   <p className="text-slate-400 text-lg leading-relaxed">
//                     {service.description ||
//                       "Standardizing the future of service delivery through architectural excellence."}
//                   </p>
//                 </div>
//                 <div className="space-y-8 border-l border-white/5 pl-10">
//                   <div className="space-y-4">
//                     <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">
//                       Capabilities
//                     </p>
//                     <ul className="space-y-3 text-sm text-white/70">
//                       <li className="flex items-center gap-2">
//                         <Zap size={14} className="text-blue-500" /> Real-time
//                         Analytics
//                       </li>
//                       <li className="flex items-center gap-2">
//                         <Shield size={14} className="text-blue-500" /> Secure
//                         Architecture
//                       </li>
//                       <li className="flex items-center gap-2">
//                         <Globe size={14} className="text-blue-500" /> Global
//                         Compliance
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="p-8 bg-white/[0.02] border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
//               <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500 uppercase">
//                 <Command size={14} /> System status: Optimal
//               </div>
//               <button className="px-10 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] rounded-xl hover:bg-blue-600 hover:text-white transition-all">
//                 Initialize Consultation
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </>
//     )}
//   </AnimatePresence>
// );

//===============================================
//==============================
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { X, Shield, Zap, Globe, Command, ArrowUpRight } from "lucide-react";
import { services as rawServices } from "../../constants";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const portalVisuals = {
  "Business Consulting Services": {
    gradient: "linear-gradient(135deg, #1c1c84, #000068)",
    accent: "#3b82f6",
  },
  "Immigration Consulting Services": {
    gradient: "linear-gradient(135deg, #0f766e, #042f2e)",
    accent: "#14b8a6",
  },
  "IT Consulting Services": {
    gradient: "linear-gradient(135deg, #4f46e5, #020617)",
    accent: "#6366f1",
  },
  "Real Estate – Buy & Sell": {
    gradient: "linear-gradient(135deg, #78350f, #1c1917)",
    accent: "#f59e0b",
  },
  Events: {
    gradient: "linear-gradient(135deg, #831843, #020617)",
    accent: "#ec4899",
  },
};

const services = rawServices.map((s, i) => ({
  ...s,
  id: `0${i + 1}`,
  visual: portalVisuals[s.title] || {
    gradient: "linear-gradient(135deg, #333, #000)",
    accent: "#ffffff",
  },
}));

export default function ServicesSection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal rows with a "shutter" effect
      gsap.from(".service-card", {
        y: 100,
        opacity: 0,
        rotateX: -45,
        stagger: 0.15,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
      setTimeout(() => ScrollTrigger.refresh(), 500);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#020202] py-32 overflow-hidden select-none"
    >
      {/* Dynamic Background Noise/Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff10 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-500 font-mono text-xs tracking-widest uppercase"
            >
              [ System_Capabilities_Manifest ]
            </motion.span>
            <h2 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.8]">
              Core <br />{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
              >
                Protocols
              </span>
            </h2>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-lg backdrop-blur-md hidden lg:block">
            <p className="text-[10px] font-mono text-slate-400 uppercase leading-relaxed">
              Active_Nodes: 0{services.length} <br />
              Encryption: AES_256_V3 <br />
              Status:{" "}
              <span className="text-green-500 animate-pulse">
                Ready_To_Sync
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedService(service)}
              className="service-card group relative h-[140px] md:h-[180px] bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden cursor-pointer flex items-center px-10"
            >
              {/* Animated Accent Background */}
              <motion.div
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: service.visual.gradient }}
              />

              {/* Floating ID Tag */}
              <div className="relative z-10 w-24 hidden md:block">
                <span className="text-5xl font-black font-mono text-white/5 group-hover:text-white/20 transition-colors duration-500">
                  {service.id}
                </span>
              </div>

              {/* Main Content */}
              <div className="relative z-10 flex-1">
                <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500 origin-left">
                  {service.title}
                </h3>
                <div className="flex gap-4 mt-2 overflow-hidden h-0 group-hover:h-6 transition-all duration-500">
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">
                    Execute_Initial_Phase
                  </span>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    // Multi_Node_Sync
                  </span>
                </div>
              </div>

              {/* Kinetic Icon */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:rotate-[360deg] transition-all duration-700">
                  <ArrowUpRight
                    className="text-white group-hover:text-black transition-colors"
                    size={32}
                  />
                </div>
              </div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      <DetailedModal
        isOpen={!!selectedService}
        service={selectedService}
        onClose={() => setSelectedService(null)}
        navigate={navigate}
      />
    </section>
  );
}

// Keep your existing DetailedModal here, it is already high quality!
const DetailedModal = ({ service, isOpen, onClose, navigate }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[100] cursor-pointer"
        />
        <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 md:p-8 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="bg-[#0a0a0a] border border-white/10 w-full max-w-5xl rounded-[40px] overflow-hidden pointer-events-auto shadow-2xl flex flex-col max-h-[90vh]"
          >
            <div
              className="h-48 w-full relative"
              style={{ background: service?.visual?.gradient }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
              <div className="absolute bottom-8 left-10">
                <p className="text-blue-400 font-mono text-xs tracking-[0.5em] uppercase mb-2">
                  Protocol Active
                </p>
                <h3 className="text-white text-4xl font-bold uppercase italic tracking-tighter">
                  {service?.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-10 md:p-16 overflow-y-auto custom-scrollbar flex-1">
              <div className="grid lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-8">
                  <h4 className="text-white text-2xl font-semibold tracking-tight uppercase">
                    High-Performance Deployment
                  </h4>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {service?.description ||
                      "Standardizing the future of service delivery through architectural excellence."}
                  </p>
                </div>
                <div className="space-y-8 border-l border-white/5 pl-10">
                  <div className="space-y-4">
                    <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">
                      Capabilities
                    </p>
                    <ul className="space-y-3 text-sm text-white/70">
                      <li className="flex items-center gap-2">
                        <Zap size={14} className="text-blue-500" /> Real-time
                        Analytics
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield size={14} className="text-blue-500" /> Secure
                        Architecture
                      </li>
                      <li className="flex items-center gap-2">
                        <Globe size={14} className="text-blue-500" /> Global
                        Compliance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white/[0.02] border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500 uppercase">
                <Command size={14} /> System status: Optimal
              </div>
              <button
                onClick={() => navigate("/book")}
                className="px-10 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] rounded-xl hover:bg-blue-600 hover:text-white transition-all"
              >
                Initialize Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </>
    )}
  </AnimatePresence>
);
