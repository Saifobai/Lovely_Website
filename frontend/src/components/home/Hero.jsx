// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import Section from "../layout/Section";

// /* --- 1. COHESIVE GRID SYSTEM --- */
// const BackgroundSystem = () => {
//   const gridRef = useRef(null);

//   useEffect(() => {
//     const onMove = (e) => {
//       const { clientX, clientY } = e;
//       gsap.to(gridRef.current, {
//         background: `radial-gradient(circle 500px at ${clientX}px ${clientY}px, rgba(59, 130, 246, 0.08), transparent 100%)`,
//         duration: 0.8,
//       });
//     };
//     window.addEventListener("mousemove", onMove);
//     return () => window.removeEventListener("mousemove", onMove);
//   }, []);

//   return (
//     <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//       {/* Grid Pattern */}
//       <div
//         ref={gridRef}
//         className="absolute inset-0 opacity-30"
//         style={{
//           backgroundImage: `linear-gradient(to right, #ffffff0a 1px, transparent 1px),
//                             linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)`,
//           backgroundSize: "80px 80px",
//         }}
//       />
//       {/* Unified Atmosphere */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#050505]" />
//       <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[160px] animate-pulse-slow" />
//       <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-indigo-600/05 rounded-full blur-[140px]" />
//     </div>
//   );
// };

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

//         // Balanced Parallax
//         gsap.to(hudRef.current, {
//           x: dx * 40,
//           y: dy * 40,
//           rotateX: dy * -8,
//           rotateY: dx * 8,
//           duration: 1.5,
//           ease: "power2.out",
//         });

//         gsap.to(orbRef.current, {
//           x: dx * -25,
//           y: dy * -25,
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
//       id="hero"
//       className="bg-[#050505] perspective-1000 flex items-center min-h-screen"
//     >
//       <BackgroundSystem />

//       {/* Increased gap and max-width for better spacing */}
//       <div
//         ref={containerRef}
//         className="grid lg:grid-cols-2 gap-24 xl:gap-32 items-center relative z-10 w-full max-w-[1500px] mx-auto px-6"
//       >
//         {/* LEFT: TEXT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
//           className="space-y-10"
//         >
//           <div className="flex flex-col gap-6">
//             <div className="flex items-center gap-3">
//               <div className="h-[1px] w-12 bg-blue-500/50" />
//               <span className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase">
//                 Protocol_v2.05
//               </span>
//             </div>

//             <h1 className="text-7xl md:text-8xl xl:text-[110px] font-black leading-[0.85] tracking-[-0.04em] text-white uppercase">
//               {t("hero.digital")} <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 italic">
//                 {t("hero.solutions")}
//               </span>
//             </h1>
//           </div>

//           <p className="text-slate-500 text-lg xl:text-xl max-w-md leading-relaxed font-light border-l border-white/10 pl-8">
//             {t("hero.description")}{" "}
//             {/* <span className="text-white font-medium italic">
//               40% operational boost
//             </span>{" "} */}
//             {/* via architectural precision. */}
//           </p>

//           <motion.button
//             onClick={() => navigate("/book")}
//             whileHover={{ scale: 1.02, x: 10 }}
//             whileTap={{ scale: 0.98 }}
//             className="group relative h-16 w-72 bg-white overflow-hidden rounded-xl transition-all duration-500 shadow-2xl shadow-blue-500/5"
//           >
//             <span className="relative z-10 text-black font-bold uppercase tracking-[0.2em] text-[10px]">
//               {t("hero.bookBtn")} →
//             </span>
//             <div className="absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
//           </motion.button>
//         </motion.div>

//         {/* RIGHT: THE CORE INTERFACE */}
//         <div className="relative h-[650px] w-full flex items-center justify-center">
//           {/* HUD ELEMENTS */}
//           <div
//             ref={hudRef}
//             className="absolute inset-0 z-20 pointer-events-none"
//           >
//             {/* Optimized Card */}
//             <div className="absolute top-[10%] right-[0%] p-6 border border-white/5 bg-white/[0.02] backdrop-blur-2xl rounded-2xl shadow-2xl">
//               <p className="font-mono text-[9px] text-blue-400 uppercase mb-2 tracking-widest opacity-70">
//                 Latency_Response
//               </p>
//               <p className="text-white text-2xl font-bold tracking-tighter italic">
//                 0.002ms
//               </p>
//             </div>

//             {/* User Card */}
//             <div className="absolute bottom-[15%] left-[-5%] p-7 border border-white/5 bg-white/[0.02] backdrop-blur-2xl rounded-2xl shadow-2xl">
//               <p className="font-mono text-[9px] text-indigo-400 uppercase mb-2 tracking-widest opacity-70">
//                 Active_Nodes
//               </p>
//               <div className="flex items-baseline gap-3">
//                 <p className="text-white text-4xl font-black tracking-tighter text-glow">
//                   2,482
//                 </p>
//                 <span className="text-[10px] text-emerald-400 font-mono animate-pulse">
//                   ● LIVE
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* THE CORE ORB */}
//           <div ref={orbRef} className="relative w-80 h-80 xl:w-96 xl:h-96">
//             <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow" />

//             {/* Async Rotating Rings */}
//             <div className="absolute inset-[-25%] border border-white/5 rounded-full animate-spin-slow opacity-40" />
//             <div className="absolute inset-[-12%] border border-blue-500/20 rounded-full animate-spin-slower opacity-60" />
//             <div
//               className="absolute inset-[-5%] border-[0.5px] border-white/10 rounded-full rotate-12 animate-spin-slow"
//               style={{
//                 animationDirection: "reverse",
//                 animationDuration: "25s",
//               }}
//             />

//             {/* The Floating Centerpiece */}
//             <motion.div
//               animate={{ y: [0, -30, 0], rotate: [12, 15, 12] }}
//               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//               className="w-full h-full bg-gradient-to-br from-white/10 to-transparent border border-white/20 backdrop-blur-3xl rounded-[48px] flex items-center justify-center overflow-hidden shadow-inner"
//             >
//               <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 absolute inset-0" />
//               <h4 className="text-white/10 font-black text-9xl xl:text-[180px] tracking-tighter select-none italic">
//                 LS
//               </h4>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// }

//=============================================================
//=============================================
//=============================================================
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import gsap from "gsap";
import Section from "../layout/Section";

// Import your image
import Lovely_01 from "../../assets/Images/Lovely_01.jpeg";

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
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff0a 1px, transparent 1px), 
                            linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
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
              {t("hero.digital")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 italic">
                {t("hero.solutions")}
              </span>
            </h1>
          </div>

          <p className="text-slate-500 text-lg xl:text-xl max-w-md leading-relaxed font-light border-l border-white/10 pl-8">
            {t("hero.description")}
          </p>

          <motion.button
            onClick={() => navigate("/book")}
            whileHover={{ scale: 1.02, x: 10 }}
            whileTap={{ scale: 0.98 }}
            className="group relative h-16 w-72 bg-white overflow-hidden rounded-xl transition-all duration-500 shadow-2xl shadow-blue-500/5"
          >
            <span className="relative z-10 text-black font-bold uppercase tracking-[0.2em] text-[10px]">
              {t("hero.bookBtn")} →
            </span>
            <div className="absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
          </motion.button>
        </motion.div>

        {/* RIGHT: THE CORE INTERFACE */}
        <div className="relative h-[650px] w-full flex items-center justify-center">
          <div
            ref={hudRef}
            className="absolute inset-0 z-20 pointer-events-none"
          >
            {/* Latency Card */}
            <div className="absolute top-[10%] right-[0%] p-6 border border-white/5 bg-white/[0.02] backdrop-blur-2xl rounded-2xl shadow-2xl">
              <p className="font-mono text-[9px] text-blue-400 uppercase mb-2 tracking-widest opacity-70">
                Latency_Response
              </p>
              <p className="text-white text-2xl font-bold tracking-tighter italic">
                0.002ms
              </p>
            </div>

            {/* Active Nodes Card */}
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

            {/* The Floating Centerpiece with Image */}
            <motion.div
              animate={{ y: [0, -30, 0], rotate: [2, 5, 2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative border border-white/20 backdrop-blur-3xl rounded-[48px] flex items-center justify-center overflow-hidden shadow-inner group"
            >
              {/* Noise Overlay to keep the tech look */}
              <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 absolute inset-0 z-10 pointer-events-none mix-blend-overlay" />

              {/* Glass Reflection Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 z-10 pointer-events-none" />

              {/* 🟢 THE IMAGE REPLACEMENT */}
              <img
                src={Lovely_01}
                alt="Lovely Digital Interface"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
              />

              {/* Subtle Blue Glow Overlay over the image */}
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-0" />
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
