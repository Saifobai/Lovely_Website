// import hero_l from "../../assets/hero_l.png";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import Section from "../layout/Section";

// export default function Hero() {
//   const navigate = useNavigate();
//   const { t } = useTranslation();

//   return (
//     <Section id="hero" variant="gradient">
//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         {/* LEFT */}
//         <div className="space-y-6">
//           <span className="inline-flex items-center gap-2 bg-[#1c1c84]/10 text-[#1c1c84] px-4 py-1 rounded-full text-sm">
//             {t("hero.badge")}
//           </span>

//           <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//             {t("hero.title")}
//           </h1>

//           <p className="text-gray-400 max-w-xl">
//             {t("hero.description")}{" "}
//             <span className="text-white font-semibold">
//               {t("hero.highlight")}
//             </span>{" "}
//             {t("hero.descriptionEnd")}
//           </p>

//           <button
//             onClick={() => navigate("/book")}
//             className="bg-[#1c1c84] hover:bg-[#000068] px-8 py-4 rounded-xl"
//           >
//             {t("hero.cta")}
//           </button>
//         </div>

//         {/* RIGHT */}
//         <div className="relative flex justify-center items-center">
//           <img
//             src={hero_l}
//             alt="LS Digital Agency"
//             className="w-[50%] max-w-xl object-contain drop-shadow-2xl"
//           />

//           <div className="absolute -top-10 left-6 bg-[#0a0f1f] border border-white/10 px-6 py-4 rounded-2xl text-base backdrop-blur-xl animate-revenueMove shadow-xl">
//             <span className="text-green-400 font-bold text-xl">+127%</span>
//             <span className="text-gray-300 ml-2">{t("hero.revenue")}</span>
//           </div>

//           <div className="absolute bottom-10 left-12 bg-[#0a0f1f] border border-white/10 px-6 py-4 rounded-2xl text-base backdrop-blur-xl animate-timeMove shadow-xl">
//             <span className="text-yellow-400 font-bold text-xl">40%</span>
//             <span className="text-gray-300 ml-2">{t("hero.time")}</span>
//           </div>

//           <div className="absolute bottom-14 right-14 bg-[#0a0f1f] border border-white/10 px-6 py-4 rounded-2xl text-base backdrop-blur-xl animate-usersFloat shadow-xl">
//             <span className="text-blue-400 font-bold text-xl">2.4k</span>
//             <span className="text-gray-300 ml-2">{t("hero.users")}</span>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// }

//=============` Updated Code =============//

// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import hero_l from "../../assets/hero_l.png";
// // Ensure you import your Section wrapper correctly, or use a standard section tag if preferred.
// import Section from "../layout/Section";

// export default function Hero() {
//   const navigate = useNavigate();
//   const { t } = useTranslation();
//   const containerRef = useRef(null);
//   const card1Ref = useRef(null);
//   const card2Ref = useRef(null);
//   const card3Ref = useRef(null);

//   // --- GSAP PARALLAX EFFECT ---
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // We use quickSetter for maximum performance on mouse move events
//       const setCard1X = gsap.quickSetter(card1Ref.current, "x", "px");
//       const setCard1Y = gsap.quickSetter(card1Ref.current, "y", "px");
//       const setCard2X = gsap.quickSetter(card2Ref.current, "x", "px");
//       const setCard2Y = gsap.quickSetter(card2Ref.current, "y", "px");
//       const setCard3X = gsap.quickSetter(card3Ref.current, "x", "px");
//       const setCard3Y = gsap.quickSetter(card3Ref.current, "y", "px");

//       window.addEventListener("mousemove", (e) => {
//         const { clientX, clientY } = e;
//         const centerX = window.innerWidth / 2;
//         const centerY = window.innerHeight / 2;

//         // Calculate distance from center to determine intensity
//         const moveX = (clientX - centerX) / centerX;
//         const moveY = (clientY - centerY) / centerY;

//         // Apply different movement speeds to create depth (parallax)
//         setCard1X(moveX * -30); // Moves opposite to mouse, medium speed
//         setCard1Y(moveY * -20);

//         setCard2X(moveX * -50); // Moves faster (feels closer)
//         setCard2Y(moveY * -40);

//         setCard3X(moveX * 20); // Moves with mouse (feels distant)
//         setCard3Y(moveY * 30);
//       });
//     }, containerRef);

//     return () => ctx.revert(); // Cleanup GSAP context
//   }, []);

//   // --- FRAMER MOTION VARIANTS ---
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
//   };

//   return (
//     // Changed Section variant to "dark" or removed it to allow our custom bg
//     <section
//       id="hero"
//       ref={containerRef}
//       className="relative min-h-[90vh] flex items-center bg-[#0a0a0a] overflow-hidden"
//     >
//       {/* 1. ATMOSPHERE: Noise and Ambient Glow */}
//       <div className="noise-overlay"></div>
//       {/* A subtle blue/purple ambient light in the top left */}
//       <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#1c1c84] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           className="grid md:grid-cols-2 gap-16 items-center"
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//         >
//           {/* --- LEFT COLUMN (Text) --- */}
//           <div className="space-y-8">
//             <motion.div variants={itemVariants}>
//               {/* Updated Badge Style */}
//               <span className="inline-flex items-center gap-2 border border-[#1c1c84] text-blue-300 px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase bg-[#1c1c84]/5 backdrop-blur-md">
//                 /// {t("hero.badge")}
//               </span>
//             </motion.div>

//             {/* Updated Title Style using Hollow Text */}
//             <motion.h1
//               variants={itemVariants}
//               className="text-5xl md:text-7xl font-bold leading-tight text-white"
//             >
//               {/* We split the title to make part of it hollow for effect. Adjust based on your actual text */}
//               <span>Digital Solutions</span> <br />
//               <span className="hollow-text">For The Future.</span>
//             </motion.h1>

//             <motion.p
//               variants={itemVariants}
//               className="text-gray-400 max-w-xl text-lg leading-relaxed"
//             >
//               {t("hero.description")}{" "}
//               <span className="text-blue-400 font-semibold glow-text">
//                 {t("hero.highlight")}
//               </span>{" "}
//               {t("hero.descriptionEnd")}
//             </motion.p>

//             <motion.div variants={itemVariants}>
//               {/* Updated Button Style: Kinetic Outline Button */}
//               <button
//                 onClick={() => navigate("/book")}
//                 className="group relative px-8 py-4 rounded-xl overflow-hidden border border-blue-500/50 font-semibold text-white tracking-wider transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(28,28,132,0.5)]"
//               >
//                 <span className="relative z-10">{t("hero.cta")}</span>
//                 {/* Liquid Fill Effect on Hover */}
//                 <div className="absolute inset-0 bg-[#1c1c84] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-out z-0"></div>
//               </button>
//             </motion.div>
//           </div>

//           {/* --- RIGHT COLUMN (Interactive Visuals) --- */}
//           <motion.div
//             variants={itemVariants}
//             className="relative flex justify-center items-center perspective-1000"
//           >
//             {/* Glow behind the main image */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-900/30 rounded-full blur-[80px] -z-10 animate-pulse-slow"></div>

//             {/* Main Image with a slow breathing animation */}
//             <motion.img
//               src={hero_l}
//               alt="LS Digital Agency"
//               className="w-[70%] md:w-[60%] max-w-xl object-contain drop-shadow-2xl z-10"
//               animate={{ y: [-10, 10, -10] }}
//               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//             />

//             {/* FLOATING INTERACTIVE CARDS (GSAP Controlled) */}
//             {/* Card 1: Top Left */}
//             <div
//               ref={card1Ref}
//               className="absolute -top-10 left-0 md:-left-10 z-20"
//             >
//               <StatCard color="green" value="+127%" label={t("hero.revenue")} />
//             </div>

//             {/* Card 2: Bottom Left (Closer/Faster) */}
//             <div
//               ref={card2Ref}
//               className="absolute bottom-0 left-4 md:-left-6 z-30"
//             >
//               <StatCard color="yellow" value="40%" label={t("hero.time")} />
//             </div>

//             {/* Card 3: Bottom Right (Further/Slower) */}
//             <div
//               ref={card3Ref}
//               className="absolute bottom-14 right-0 md:-right-14 z-20"
//             >
//               <StatCard color="blue" value="2.4k" label={t("hero.users")} />
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // Helper Component for the frosted glass cards
// function StatCard({ color, value, label }) {
//   const colors = {
//     green: "text-emerald-400",
//     yellow: "text-amber-400",
//     blue: "text-cyan-400",
//   };
//   return (
//     <div className="bg-[#0a0f1f]/80 border border-white/10 px-6 py-4 rounded-2xl text-base backdrop-blur-md shadow-2xl flex items-center gap-3 hover:border-white/30 transition-colors">
//       <span className={`font-bold text-2xl ${colors[color]} drop-shadow-sm`}>
//         {value}
//       </span>
//       <span className="text-gray-300 text-sm font-mono uppercase tracking-wider">
//         {label}
//       </span>
//     </div>
//   );
// }

//=============` End of Updated Code =============//

// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import hero_l from "../../assets/hero_l.png";

// export default function Hero() {
//   const navigate = useNavigate();
//   const { t } = useTranslation();

//   const containerRef = useRef(null);
//   const card1Ref = useRef(null);
//   const card2Ref = useRef(null);
//   const card3Ref = useRef(null);

//   /* ===============================
//      GSAP PARALLAX + IDLE FLOAT
//   ================================ */
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const cards = [
//         { ref: card1Ref, strength: 30 },
//         { ref: card2Ref, strength: 45 },
//         { ref: card3Ref, strength: 20 },
//       ];

//       // Idle floating (continuous)
//       cards.forEach((c, i) => {
//         gsap.to(c.ref.current, {
//           y: "+=14",
//           duration: 4 + i,
//           ease: "sine.inOut",
//           repeat: -1,
//           yoyo: true,
//         });
//       });

//       // Mouse parallax (additive)
//       const setters = cards.map((c) => ({
//         x: gsap.quickSetter(c.ref.current, "x", "px"),
//         y: gsap.quickSetter(c.ref.current, "y", "px"),
//         strength: c.strength,
//       }));

//       const onMove = (e) => {
//         const cx = window.innerWidth / 2;
//         const cy = window.innerHeight / 2;

//         const dx = (e.clientX - cx) / cx;
//         const dy = (e.clientY - cy) / cy;

//         setters.forEach((s) => {
//           s.x(dx * -s.strength);
//           s.y(dy * -s.strength);
//         });
//       };

//       window.addEventListener("mousemove", onMove);
//       return () => window.removeEventListener("mousemove", onMove);
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   /* ===============================
//      FRAMER MOTION VARIANTS
//   ================================ */
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 24, opacity: 0 },
//     show: {
//       y: 0,
//       opacity: 1,
//       transition: { ease: "easeOut", duration: 0.6 },
//     },
//   };

//   return (
//     <section
//       id="hero"
//       ref={containerRef}
//       className="relative min-h-[90vh] flex items-center bg-[#020617] overflow-hidden"
//     >
//       {/* ATMOSPHERE */}
//       <div className="noise-overlay opacity-[0.035]" />
//       <div className="absolute -top-[30%] -left-[20%] w-[520px] h-[520px] bg-[#1c1c84] rounded-full blur-[160px] opacity-20 pointer-events-none" />

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           className="grid md:grid-cols-2 gap-16 items-center"
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//         >
//           {/* LEFT */}
//           <div className="space-y-8">
//             <motion.span
//               variants={itemVariants}
//               className="inline-flex items-center gap-2 border border-[#1c1c84]/60 text-blue-300 px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase bg-[#1c1c84]/5 backdrop-blur"
//             >
//               /// {t("hero.badge")}
//             </motion.span>

//             <motion.h1
//               variants={itemVariants}
//               className="text-5xl md:text-7xl font-bold leading-tight"
//             >
//               <span>Digital Solutions</span>
//               <br />
//               <span className="hollow-text">For The Future.</span>
//             </motion.h1>

//             <motion.p
//               variants={itemVariants}
//               className="text-gray-400 max-w-xl text-lg leading-relaxed"
//             >
//               {t("hero.description")}{" "}
//               <span className="text-blue-400 font-semibold">
//                 {t("hero.highlight")}
//               </span>{" "}
//               {t("hero.descriptionEnd")}
//             </motion.p>

//             <motion.div variants={itemVariants}>
//               <button
//                 onClick={() => navigate("/book")}
//                 className="group relative px-8 py-4 rounded-xl overflow-hidden border border-blue-500/50 font-semibold tracking-wider transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_28px_rgba(28,28,132,0.5)]"
//               >
//                 <span className="relative z-10 text-white">
//                   {t("hero.cta")}
//                 </span>
//                 <div className="absolute inset-0 bg-[#1c1c84] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
//               </button>
//             </motion.div>
//           </div>

//           {/* RIGHT */}
//           <motion.div
//             variants={itemVariants}
//             className="relative flex justify-center items-center"
//           >
//             <div className="absolute w-[75%] h-[75%] bg-blue-900/30 rounded-full blur-[90px] animate-pulse-slow" />

//             <motion.img
//               src={hero_l}
//               alt="LS Digital Agency"
//               className="w-[70%] max-w-xl object-contain z-10 drop-shadow-2xl"
//               animate={{ y: [-8, 8, -8] }}
//               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//             />

//             <div ref={card1Ref} className="absolute -top-12 left-0 z-20">
//               <StatCard color="green" value="+127%" label={t("hero.revenue")} />
//             </div>

//             <div ref={card2Ref} className="absolute bottom-0 left-6 z-30">
//               <StatCard color="yellow" value="40%" label={t("hero.time")} />
//             </div>

//             <div ref={card3Ref} className="absolute bottom-16 right-0 z-20">
//               <StatCard color="blue" value="2.4k" label={t("hero.users")} />
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// /* ===============================
//    STAT CARD
// ================================ */
// function StatCard({ color, value, label }) {
//   const colors = {
//     green: "text-emerald-400",
//     yellow: "text-amber-400",
//     blue: "text-cyan-400",
//   };

//   return (
//     <div className="bg-[#050a1a]/80 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur shadow-xl flex items-center gap-3 transition-colors hover:border-white/30">
//       <span className={`text-2xl font-bold ${colors[color]}`}>{value}</span>
//       <span className="text-xs font-mono uppercase tracking-wider text-gray-300">
//         {label}
//       </span>
//     </div>
//   );
// }

//==============================================
// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import hero_l from "../../assets/hero_l.png";
// import Section from "../layout/Section";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// export default function Hero() {
//   const navigate = useNavigate();
//   const { t } = useTranslation();
//   const containerRef = useRef(null);
//   const imageRef = useRef(null);
//   const hudRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Magnetic movement for the HUD elements
//       window.addEventListener("mousemove", (e) => {
//         const { clientX, clientY } = e;
//         const xPos = (clientX / window.innerWidth - 0.5) * 40;
//         const yPos = (clientY / window.innerHeight - 0.5) * 40;

//         gsap.to(hudRef.current, {
//           x: xPos,
//           y: yPos,
//           duration: 1,
//           ease: "power2.out",
//         });
//         gsap.to(imageRef.current, {
//           x: -xPos * 0.5,
//           y: -yPos * 0.5,
//           duration: 1.5,
//           ease: "power2.out",
//         });
//       });
//     });
//     return () => ctx.revert();
//   }, []);

//   return (
//     <Section id="hero">
//       {/* Background Mesh Light */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

//       <div className="grid lg:grid-cols-2 gap-12 items-center">
//         {/* LEFT: Clean, High-Contrast Type */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//           className="space-y-10"
//         >
//           <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase">
//             [ System Status: Active ] const {t} = useTranslation();
//           </span>
//           <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-white">
//             DESIGNING <br />
//             <span className="hollow-text italic">THE BEYOND.</span>
//           </h1>
//           <p className="text-slate-400 text-lg md:text-xl max-w-md leading-relaxed border-l border-white/10 pl-6">
//             We bridge the gap between complex digital architecture and
//             human-centric experiences.
//           </p>
//           <button
//             onClick={() => navigate("/book")}
//             className="group relative px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs overflow-hidden transition-transform hover:scale-105"
//           >
//             <span className="relative z-10">BOOK CONSULTATION</span>
//             <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//           </button>
//         </motion.div>

//         {/* RIGHT: Abstract HUD (Not Childish) */}
//         <div className="relative flex justify-center items-center h-[500px]">
//           <div
//             ref={hudRef}
//             className="absolute inset-0 z-20 pointer-events-none"
//           >
//             {/* Minimalism: Just clean numbers and lines */}
//             <div className="absolute top-10 right-0 p-4 border-r border-t border-white/20 font-mono text-[10px] text-white/40">
//               DATA_STREAM: 2.4k/sec <br /> LATENCY: 0.002ms
//             </div>
//             <div className="absolute bottom-20 left-0 p-4 border-l border-b border-white/20 font-mono text-[10px] text-white/40">
//               GROWTH_INDEX: +127% <br /> OPTIMIZATION: 40.0
//             </div>
//           </div>
//           <img
//             ref={imageRef}
//             src={hero_l}
//             className="w-[80%] h-auto object-contain grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
//             alt="Hero"
//           />
//         </div>
//       </div>
//     </Section>
//   );
// }

// ==============================================
// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import Section from "../layout/Section";
// import hero_l from "../../assets/hero-3.png";

// export default function Hero() {
//   const navigate = useNavigate();
//   const { t } = useTranslation();

//   const containerRef = useRef(null);
//   const imageRef = useRef(null);
//   const hudRef = useRef(null);

//   /* ===============================
//       GSAP MAGNETIC PARALLAX
//   ================================ */
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const onMove = (e) => {
//         const { clientX, clientY } = e;
//         const cx = window.innerWidth / 2;
//         const cy = window.innerHeight / 2;

//         const dx = (clientX - cx) / cx;
//         const dy = (clientY - cy) / cy;

//         // HUD elements move with the mouse
//         gsap.to(hudRef.current, {
//           x: dx * 40,
//           y: dy * 40,
//           duration: 1,
//           ease: "power2.out",
//         });

//         // Image moves slightly against the mouse for depth
//         gsap.to(imageRef.current, {
//           x: dx * -20,
//           y: dy * -20,
//           duration: 1.5,
//           ease: "power2.out",
//         });
//       };

//       window.addEventListener("mousemove", onMove);
//       return () => window.removeEventListener("mousemove", onMove);
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <Section id="hero" className="bg-[#050505]">
//       {/* Background Atmosphere */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

//       <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
//         {/* LEFT: TEXT & CTA */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//           className="space-y-10"
//         >
//           {/* Badge with Translation */}
//           <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
//             <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
//             <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em]">
//               /// {t("hero.badge")}
//             </span>
//           </div>

//           {/* Headline */}
//           <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-white">
//             DIGITAL SOLUTIONS <br />
//             <span className="hollow-text italic text-blue-500/50">
//               FOR THE FUTURE.
//             </span>
//           </h1>

//           {/* Description with Translation */}
//           <p className="text-slate-400 text-lg md:text-xl max-w-md leading-relaxed border-l border-white/10 pl-6">
//             {t("hero.description")}{" "}
//             <span className="text-blue-400 font-semibold">
//               {t("hero.highlight")}
//             </span>{" "}
//             {t("hero.descriptionEnd")}
//           </p>

//           {/* CTA with Translation */}
//           <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//             <button
//               onClick={() => navigate("/book")}
//               className="group relative px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-blue-500/20"
//             >
//               <span className="relative z-10">{t("hero.cta")}</span>
//               <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//             </button>
//           </motion.div>
//         </motion.div>

//         {/* RIGHT: INTERACTIVE HUD & IMAGE */}
//         <div className="relative flex justify-center items-center h-[500px]">
//           {/* Floating Data Nodes (HUD) */}
//           <div
//             ref={hudRef}
//             className="absolute inset-0 z-20 pointer-events-none select-none"
//           >
//             <div className="absolute top-10 right-0 p-4 border-r border-t border-white/20 font-mono text-[10px] text-white/40">
//               DATA_PROTOCOL: v.2.04 <br />
//               STATUS: {t("hero.revenue")} [+127%]
//             </div>
//             <div className="absolute bottom-20 left-0 p-4 border-l border-b border-white/20 font-mono text-[10px] text-white/40">
//               {t("hero.users")}: 2.4K <br />
//               {t("hero.time")}: 40% OPTIMIZED
//             </div>
//           </div>

//           {/* Main Hero Image */}
//           <motion.img
//             ref={imageRef}
//             src={hero_l}
//             alt="LS Digital"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 0.8, scale: 1 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//             className="w-[85%] h-auto object-contain grayscale hover:grayscale-0 transition-all duration-1000 cursor-crosshair"
//           />
//         </div>
//       </div>
//     </Section>
//   );
// }

// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import Section from "../layout/Section";

// export default function Hero() {
//   const navigate = useNavigate();
//   const { t } = useTranslation();
//   const containerRef = useRef(null);
//   const orbRef = useRef(null);
//   const hudRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const onMove = (e) => {
//         const { clientX, clientY } = e;
//         const cx = window.innerWidth / 2;
//         const cy = window.innerHeight / 2;
//         const dx = (clientX - cx) / cx;
//         const dy = (clientY - cy) / cy;

//         // HUD elements float smoothly
//         gsap.to(hudRef.current, {
//           x: dx * 50,
//           y: dy * 50,
//           rotateX: dy * -10,
//           rotateY: dx * 10,
//           duration: 1.2,
//           ease: "power2.out",
//         });

//         // The "Core" Orb moves with a deep parallax effect
//         gsap.to(orbRef.current, {
//           x: dx * -30,
//           y: dy * -30,
//           duration: 2,
//           ease: "power3.out",
//         });
//       };

//       window.addEventListener("mousemove", onMove);
//       return () => window.removeEventListener("mousemove", onMove);
//     }, containerRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <Section id="hero" className="bg-[#050505] perspective-1000">
//       {/* 1. LAYERED BACKGROUND ATMOSPHERE */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[160px] animate-pulse" />
//         <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[140px]" />
//       </div>

//       <div
//         ref={containerRef}
//         className="grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full"
//       >
//         {/* LEFT: MINIMALIST POWER TYPOGRAPHY */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//           className="space-y-12"
//         >
//           <div className="flex flex-col gap-4">
//             <motion.span
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="text-blue-500 font-mono text-xs tracking-[0.6em] uppercase"
//             >
//               /// Future_Ready_Protocol
//             </motion.span>

//             <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-[ -0.04em] text-white uppercase">
//               DIGITAL <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 italic">
//                 SOLUTIONS
//               </span>
//             </h1>
//           </div>

//           <p className="text-slate-500 text-lg md:text-xl max-w-sm leading-relaxed font-light">
//             {t("hero.description")}{" "}
//             <span className="text-white">40% boost</span> in operational
//             velocity through architectural precision.
//           </p>

//           <motion.button
//             onClick={() => navigate("/book")}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="group relative h-16 w-64 bg-white overflow-hidden rounded-full transition-all duration-500"
//           >
//             <span className="relative z-10 text-black font-bold uppercase tracking-widest text-xs">
//               Execute Protocol →
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//           </motion.button>
//         </motion.div>

//         {/* RIGHT: THE INTERACTIVE CORE (Satisfaction Piece) */}
//         <div className="relative h-[600px] w-full flex items-center justify-center">
//           {/* THE HUD SYSTEM (Floating Glass Cards) */}
//           <div
//             ref={hudRef}
//             className="absolute inset-0 z-20 pointer-events-none"
//           >
//             {/* Top Card */}
//             <div className="absolute top-[15%] right-[5%] p-6 border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl">
//               <p className="font-mono text-[10px] text-blue-400 mb-1">
//                 DATA_STATUS
//               </p>
//               <p className="text-white text-xl font-bold tracking-tighter">
//                 OPTIMIZED [+127%]
//               </p>
//             </div>

//             {/* Bottom Card */}
//             <div className="absolute bottom-[20%] left-[5%] p-6 border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl">
//               <p className="font-mono text-[10px] text-indigo-400 mb-1">
//                 ACTIVE_USERS
//               </p>
//               <div className="flex items-baseline gap-2">
//                 <p className="text-white text-3xl font-bold tracking-tighter text-glow">
//                   2,482
//                 </p>
//                 <span className="text-[10px] text-emerald-400 font-mono">
//                   LIVE
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* THE CORE ORB (Replaces the weird image) */}
//           <div ref={orbRef} className="relative w-80 h-80">
//             {/* Inner Glow */}
//             <div className="absolute inset-0 bg-blue-500 rounded-full blur-[80px] opacity-40 animate-pulse" />

//             {/* Orbiting Rings (Pure CSS) */}
//             <div className="absolute inset-[-20%] border border-white/5 rounded-full rotate-45 animate-spin-slow" />
//             <div className="absolute inset-[-10%] border border-blue-500/10 rounded-full -rotate-45 animate-spin-slower" />

//             {/* The Floating Centerpiece */}
//             <motion.div
//               animate={{ y: [0, -20, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="w-full h-full bg-gradient-to-br from-white/20 to-transparent border border-white/20 backdrop-blur-3xl rounded-[40px] rotate-12 flex items-center justify-center overflow-hidden"
//             >
//               <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 absolute inset-0" />
//               <h4 className="text-white/20 font-black text-9xl tracking-tighter select-none">
//                 LS
//               </h4>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// }

import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import gsap from "gsap";
import Section from "../layout/Section";

/* --- 1. COHESIVE GRID SYSTEM --- */
const BackgroundSystem = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      const { clientX, clientY } = e;
      gsap.to(gridRef.current, {
        background: `radial-gradient(circle 500px at ${clientX}px ${clientY}px, rgba(59, 130, 246, 0.08), transparent 100%)`,
        duration: 0.8,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid Pattern */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff0a 1px, transparent 1px), 
                            linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Unified Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#050505]" />
      <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[160px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-indigo-600/05 rounded-full blur-[140px]" />
    </div>
  );
};

export default function Hero() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const orbRef = useRef(null);
  const hudRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const onMove = (e) => {
        const { clientX, clientY } = e;
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const dx = (clientX - cx) / cx;
        const dy = (clientY - cy) / cy;

        // Balanced Parallax
        gsap.to(hudRef.current, {
          x: dx * 40,
          y: dy * 40,
          rotateX: dy * -8,
          rotateY: dx * 8,
          duration: 1.5,
          ease: "power2.out",
        });

        gsap.to(orbRef.current, {
          x: dx * -25,
          y: dy * -25,
          duration: 2.5,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <Section
      id="hero"
      className="bg-[#050505] perspective-1000 flex items-center min-h-screen"
    >
      <BackgroundSystem />

      {/* Increased gap and max-width for better spacing */}
      <div
        ref={containerRef}
        className="grid lg:grid-cols-2 gap-24 xl:gap-32 items-center relative z-10 w-full max-w-[1500px] mx-auto px-6"
      >
        {/* LEFT: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10"
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-blue-500/50" />
              <span className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase">
                Protocol_v2.05
              </span>
            </div>

            <h1 className="text-7xl md:text-8xl xl:text-[110px] font-black leading-[0.85] tracking-[-0.04em] text-white uppercase">
              DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 italic">
                SOLUTIONS
              </span>
            </h1>
          </div>

          <p className="text-slate-500 text-lg xl:text-xl max-w-md leading-relaxed font-light border-l border-white/10 pl-8">
            {t("hero.description")}{" "}
            <span className="text-white font-medium italic">
              40% operational boost
            </span>{" "}
            via architectural precision.
          </p>

          <motion.button
            onClick={() => navigate("/book")}
            whileHover={{ scale: 1.02, x: 10 }}
            whileTap={{ scale: 0.98 }}
            className="group relative h-16 w-72 bg-white overflow-hidden rounded-xl transition-all duration-500 shadow-2xl shadow-blue-500/5"
          >
            <span className="relative z-10 text-black font-bold uppercase tracking-[0.2em] text-[10px]">
              Execute Protocol →
            </span>
            <div className="absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
          </motion.button>
        </motion.div>

        {/* RIGHT: THE CORE INTERFACE */}
        <div className="relative h-[650px] w-full flex items-center justify-center">
          {/* HUD ELEMENTS */}
          <div
            ref={hudRef}
            className="absolute inset-0 z-20 pointer-events-none"
          >
            {/* Optimized Card */}
            <div className="absolute top-[10%] right-[0%] p-6 border border-white/5 bg-white/[0.02] backdrop-blur-2xl rounded-2xl shadow-2xl">
              <p className="font-mono text-[9px] text-blue-400 uppercase mb-2 tracking-widest opacity-70">
                Latency_Response
              </p>
              <p className="text-white text-2xl font-bold tracking-tighter italic">
                0.002ms
              </p>
            </div>

            {/* User Card */}
            <div className="absolute bottom-[15%] left-[-5%] p-7 border border-white/5 bg-white/[0.02] backdrop-blur-2xl rounded-2xl shadow-2xl">
              <p className="font-mono text-[9px] text-indigo-400 uppercase mb-2 tracking-widest opacity-70">
                Active_Nodes
              </p>
              <div className="flex items-baseline gap-3">
                <p className="text-white text-4xl font-black tracking-tighter text-glow">
                  2,482
                </p>
                <span className="text-[10px] text-emerald-400 font-mono animate-pulse">
                  ● LIVE
                </span>
              </div>
            </div>
          </div>

          {/* THE CORE ORB */}
          <div ref={orbRef} className="relative w-80 h-80 xl:w-96 xl:h-96">
            <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow" />

            {/* Async Rotating Rings */}
            <div className="absolute inset-[-25%] border border-white/5 rounded-full animate-spin-slow opacity-40" />
            <div className="absolute inset-[-12%] border border-blue-500/20 rounded-full animate-spin-slower opacity-60" />
            <div
              className="absolute inset-[-5%] border-[0.5px] border-white/10 rounded-full rotate-12 animate-spin-slow"
              style={{
                animationDirection: "reverse",
                animationDuration: "25s",
              }}
            />

            {/* The Floating Centerpiece */}
            <motion.div
              animate={{ y: [0, -30, 0], rotate: [12, 15, 12] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-br from-white/10 to-transparent border border-white/20 backdrop-blur-3xl rounded-[48px] flex items-center justify-center overflow-hidden shadow-inner"
            >
              <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 absolute inset-0" />
              <h4 className="text-white/10 font-black text-9xl xl:text-[180px] tracking-tighter select-none italic">
                LS
              </h4>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
