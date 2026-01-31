// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import Section from "../layout/Section";

// // Import your image
// import LoveLy_04 from "../../assets/Images/Lovely_04.jpeg";

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

//         gsap.to(hudRef.current, {
//           x: dx * 30,
//           y: dy * 30,
//           rotateX: dy * -10,
//           rotateY: dx * 10,
//           duration: 1.5,
//           ease: "power2.out",
//         });

//         gsap.to(orbRef.current, {
//           x: dx * -20,
//           y: dy * -20,
//           duration: 2.5,
//           ease: "power3.out",
//         });
//       };

//       window.addEventListener("mousemove", onMove);
//       return () => window.removeEventListener("mousemove", onMove);
//     }, containerRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <Section
//       id="home"
//       className=" pt-32 perspective-1000 flex items-center min-h-screen overflow-hidden"
//     >
//       {/* <BackgroundSystem /> */}

//       <div
//         ref={containerRef}
//         className="grid lg:grid-cols-2 gap-24 xl:gap-46 items-center relative z-10 w-full max-w-[1500px] mx-auto px-6"
//       >
//         {/* LEFT: TEXT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//           className="space-y-12"
//         >
//           <div className="space-y-6">
//             <div className="flex items-center gap-4">
//               {/* <div className="h-[2px] w-12 bg-gradient-to-r from-blue-600 to-purple-600" /> */}
//               <span className="text-blue-400 font-mono text-[10px] tracking-[0.6em] uppercase font-black">
//                 {/* System_Core // active */}
//               </span>
//             </div>

//             <h1 className="text-5xl md:text-8xl xl:text-[90px] font-black leading-[0.8] tracking-[-0.05em] text-white uppercase italic">
//               {t("hero.digital")} <br />
//               <span className="text-blue-500 italic">
//                 {t("hero.solutions")}
//               </span>
//             </h1>
//           </div>

//           <p className="text-slate-400 text-lg xl:text-xl max-w-md leading-relaxed font-medium purple-500/30 pl-8 italic">
//             {t("hero.description")}
//           </p>

//           <motion.button
//             onClick={() => navigate("/book")}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="group relative h-20 w-80 overflow-hidden rounded-2xl transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
//           >
//             {/* The "Deployment" Gradient Button Look */}
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 transition-transform duration-500 group-hover:scale-110" />

//             {/* Shimmer effect */}
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] opacity-30" />

//             <span className="relative z-10 text-white font-black italic uppercase tracking-[0.2em] text-sm">
//               {t("hero.bookBtn")} →
//             </span>
//           </motion.button>
//         </motion.div>

//         {/* RIGHT: THE CORE INTERFACE */}
//         <div className="relative h-[650px] w-full flex items-center justify-center">
//           <div
//             ref={hudRef}
//             className="absolute inset-0 z-20 pointer-events-none"
//           >
//             {/* Latency Card (Updated to Red/Purple vibe) */}
//             {/* <div className="absolute top-[5%] right-[5%] p-6 border border-white/10 bg-black/40 backdrop-blur-3xl rounded-2xl shadow-2xl">
//               <p className="font-mono text-[9px] text-red-500 uppercase mb-2 tracking-widest font-bold">
//                 Latency_Response
//               </p>
//               <p className="text-white text-3xl font-black tracking-tighter italic">
//                 0.002
//                 <span className="text-sm opacity-50 ml-1 uppercase">ms</span>
//               </p>
//             </div> */}

//             {/* Nodes Card (Updated to Blue/Purple vibe) */}
//             {/* <div className="absolute bottom-[10%] left-[0%] p-7 border border-white/10 bg-black/40 backdrop-blur-3xl rounded-2xl shadow-2xl">
//               <p className="font-mono text-[9px] text-blue-400 uppercase mb-2 tracking-widest font-bold">
//                 Active_Nodes
//               </p>
//               <div className="flex items-baseline gap-3">
//                 <p className="text-white text-5xl font-black tracking-tighter italic">
//                   2,482
//                 </p>
//                 <span className="text-[10px] text-purple-400 font-mono font-bold animate-pulse">
//                   ● SYNC
//                 </span>
//               </div>
//             </div> */}
//           </div>

//           {/* THE CORE ORB (Matching the Protocol image look) */}
//           <div
//             ref={orbRef}
//             className="relative w-80 h-80 xl:w-[450px] xl:h-[450px]"
//           >
//             {/* Multi-colored glows behind the image */}
//             <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
//             <div
//               className="absolute inset-10 bg-red-600/10 rounded-full blur-[100px] animate-pulse"
//               style={{ animationDelay: "1s" }}
//             />

//             {/* Rotating Rings */}
//             <div className="absolute inset-[-15%] border border-white/5 rounded-full animate-spin-slow opacity-20" />
//             <div className="absolute inset-[-5%] border-2 border-purple-500/10 rounded-full animate-spin-slower" />

//             {/* The Floating Centerpiece */}
//             <motion.div
//               animate={{ y: [0, -25, 0], rotateX: [0, 5, 0] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//               className="w-full h-full relative border border-white/20 backdrop-blur-3xl rounded-[60px] flex items-center justify-center overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-red-500/10 z-10 pointer-events-none" />

//               <img
//                 src={LoveLy_04}
//                 alt="Digital Core"
//                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
//               />

//               {/* High-tech scanline effect */}
//               <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-20 pointer-events-none bg-[length:100%_4px,3px_100%]" />
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// }

//=============================================================
//=====================New updated vibes=====================
//=============================================================
// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import Section from "../layout/Section";

// // Import your image
// import LoveLy_04 from "../../assets/Images/Lovely_04.jpeg";

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

//         gsap.to(hudRef.current, {
//           x: dx * 30,
//           y: dy * 30,
//           rotateX: dy * -10,
//           rotateY: dx * 10,
//           duration: 1.5,
//           ease: "power2.out",
//         });

//         gsap.to(orbRef.current, {
//           x: dx * -20,
//           y: dy * -20,
//           duration: 2.5,
//           ease: "power3.out",
//         });
//       };

//       window.addEventListener("mousemove", onMove);
//       return () => window.removeEventListener("mousemove", onMove);
//     }, containerRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <Section
//       id="home"
//       className="pt-32 perspective-1000 flex items-center min-h-screen overflow-hidden bg-[#0B1320]"
//     >
//       <div
//         ref={containerRef}
//         className="grid lg:grid-cols-2 gap-24 xl:gap-46 items-center relative z-10 w-full max-w-[1500px] mx-auto px-6"
//       >
//         {/* LEFT: TEXT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//           className="space-y-12"
//         >
//           <div className="space-y-6">
//             <div className="flex items-center gap-4"></div>

//             <h1 className="text-5xl md:text-8xl xl:text-[90px] font-black leading-[0.8] tracking-[-0.05em] text-[#F5F7FA] uppercase italic">
//               {t("hero.digital")} <br />
//               <span className="text-[#3B82F6] italic">
//                 {t("hero.solutions")}
//               </span>
//             </h1>
//           </div>

//           <p className="text-[#9CA3AF] text-lg xl:text-xl max-w-md leading-relaxed font-medium border-l-2 border-[#1F2937] pl-8 italic">
//             {t("hero.description")}
//           </p>

//           <motion.button
//             onClick={() => navigate("/book")}
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="group relative h-20 w-80 overflow-hidden rounded-xl transition-all duration-500 shadow-2xl border border-[#3B82F6]/30"
//           >
//             {/* Strategic Blue Background */}
//             <div className="absolute inset-0 bg-[#3B82F6] transition-colors duration-500 group-hover:bg-[#2563EB]" />

//             {/* Subtle Shimmer */}
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] opacity-30" />

//             <span className="relative z-10 text-[#F5F7FA] font-black italic uppercase tracking-[0.2em] text-sm">
//               {t("hero.bookBtn")} →
//             </span>
//           </motion.button>
//         </motion.div>

//         {/* RIGHT: THE CORE INTERFACE */}
//         <div className="relative h-[650px] w-full flex items-center justify-center">
//           <div
//             ref={hudRef}
//             className="absolute inset-0 z-20 pointer-events-none"
//           />

//           {/* THE CORE ORB */}
//           <div
//             ref={orbRef}
//             className="relative w-80 h-80 xl:w-[450px] xl:h-[450px]"
//           >
//             {/* Deep Steel & Soft Slate Glows */}
//             <div className="absolute inset-0 bg-[#3B82F6]/10 rounded-full blur-[120px] animate-pulse" />
//             <div className="absolute inset-10 bg-[#111827]/40 rounded-full blur-[100px]" />

//             {/* Quiet Line Rings */}
//             <div className="absolute inset-[-15%] border border-[#1F2937] rounded-full animate-spin-slow opacity-40" />
//             <div className="absolute inset-[-5%] border border-[#3B82F6]/20 rounded-full animate-spin-slower" />

//             {/* The Floating Centerpiece */}
//             <motion.div
//               animate={{ y: [0, -25, 0] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//               className="w-full h-full relative border border-[#1F2937] bg-[#111827]/80 backdrop-blur-3xl rounded-[40px] flex items-center justify-center overflow-hidden shadow-2xl group"
//             >
//               {/* Overlay for Image Contrast */}
//               <div className="absolute inset-0 bg-[#0B1320]/20 z-10 pointer-events-none" />

//               <img
//                 src={LoveLy_04}
//                 alt="Digital Core"
//                 className="w-full h-full object-cover grayscale brightness-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
//               />

//               {/* Sophisticated Grid Pattern Overlay */}
//               <div className="absolute inset-0 bg-[radial-gradient(#1F2937_1px,transparent_1px)] [background-size:20px_20px] opacity-30 z-20" />
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// }

//=============================================================
//=====================Previous edits=====================
//=============================================================
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import gsap from "gsap";
import Section from "../layout/Section";

// Import your image
import LoveLy_04 from "../../assets/Images/Lovely_04.jpeg";

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

        gsap.to(hudRef.current, {
          x: dx * 30,
          y: dy * 30,
          rotateX: dy * -10,
          rotateY: dx * 10,
          duration: 1.5,
          ease: "power2.out",
        });

        gsap.to(orbRef.current, {
          x: dx * -20,
          y: dy * -20,
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
      id="home"
      className="pt-32 perspective-1000 flex items-center min-h-screen overflow-hidden bg-[#0B1320]"
    >
      {/* FLEXBOX IMPLEMENTATION:
          - max-w-[1600px]: The institutional width limit
          - flex-col lg:flex-row: Stacks on mobile, side-by-side on desktop
          - justify-between: Forces text to the far left and orb to the far right
          - gap-32 xl:gap-64: Massive breathing room between the two sides
      */}
      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-[1600px] mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-32 xl:gap-64"
      >
        {/* LEFT: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12 flex-1"
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl xl:text-[90px] font-black leading-[0.8] tracking-[-0.05em] text-[#F5F7FA] uppercase italic">
              {t("hero.digital")} <br />
              <span className="text-[#3B82F6] italic">
                {t("hero.solutions")}
              </span>
            </h1>
          </div>

          <p className="text-[#9CA3AF] text-lg xl:text-xl max-w-md leading-relaxed font-medium border-l-2 border-[#1F2937] pl-8 italic">
            {t("hero.description")}
          </p>

          <motion.button
            onClick={() => navigate("/book")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative h-20 w-80 overflow-hidden rounded-xl transition-all duration-500 shadow-2xl border border-[#3B82F6]/30"
          >
            <div className="absolute inset-0 bg-[#3B82F6] transition-colors duration-500 group-hover:bg-[#2563EB]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] opacity-30" />

            <span className="relative z-10 text-[#F5F7FA] font-black italic uppercase tracking-[0.2em] text-sm">
              {t("hero.bookBtn")} →
            </span>
          </motion.button>
        </motion.div>

        {/* RIGHT: THE CORE INTERFACE */}
        <div className="relative h-[650px] flex-1 flex items-center justify-center lg:justify-end w-full">
          <div
            ref={hudRef}
            className="absolute inset-0 z-20 pointer-events-none"
          />

          {/* THE CORE ORB */}
          <div
            ref={orbRef}
            className="relative w-80 h-80 xl:w-[450px] xl:h-[450px]"
          >
            <div className="absolute inset-0 bg-[#3B82F6]/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute inset-10 bg-[#111827]/40 rounded-full blur-[100px]" />

            <div className="absolute inset-[-15%] border border-[#1F2937] rounded-full animate-spin-slow opacity-40" />
            <div className="absolute inset-[-5%] border border-[#3B82F6]/20 rounded-full animate-spin-slower" />

            <motion.div
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative border border-[#1F2937] bg-[#111827]/80 backdrop-blur-3xl rounded-[40px] flex items-center justify-center overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-[#0B1320]/20 z-10 pointer-events-none" />
              <img
                src={LoveLy_04}
                alt="Digital Core"
                className="w-full h-full object-cover grayscale brightness-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[radial-gradient(#1F2937_1px,transparent_1px)] [background-size:20px_20px] opacity-30 z-20" />
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
