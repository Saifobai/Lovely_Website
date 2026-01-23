// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ArrowLeft } from "lucide-react";
// import BookingCalendar from "../../components/calendar/BookingCalendar";
// import { SERVICES } from "../../constants";

// export default function BookingPage() {
//   const navigate = useNavigate();
//   const [activeService, setActiveService] = useState(SERVICES[0]);
//   const [isSelectOpen, setIsSelectOpen] = useState(false);

//   return (
//     <section className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden flex items-center justify-center p-4 md:p-6 font-sans">
//       {/* 🟢 NAVIGATION: TERMINATE SESSION */}
//       <button
//         onClick={() => navigate("/")}
//         className="absolute top-6 left-6 md:top-8 md:left-10 z-[100] text-[10px] font-mono tracking-[0.5em] text-slate-500 hover:text-blue-400 transition-all uppercase flex items-center gap-2 group"
//       >
//         <ArrowLeft
//           size={14}
//           className="group-hover:-translate-x-1 transition-transform"
//         />
//         <span className="hidden sm:inline text-xl">TERMINATE_SESSION</span>
//         <span className="sm:hidden inline">BACK</span>
//       </button>

//       {/* 🟢 MAIN CONTAINER: Stacked on Mobile, Split on Desktop */}
//       <div className="relative z-10 w-full max-w-[1440px] md:aspect-[16/9] md:max-h-[85vh] flex flex-col md:flex-row bg-[#080808] border border-white/5 rounded-[24px] md:rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.6)] mt-12 md:mt-0">
//         {/* LEFT PANEL: 100% Mobile, 35% Desktop */}
//         <div className="w-full md:w-[35%] border-b md:border-b-0 md:border-r border-white/5 p-6 md:p-12 flex flex-col justify-between relative bg-gradient-to-b from-white/[0.03] to-transparent">
//           <div className="space-y-8 md:space-y-12">
//             {/* Title Section */}
//             <div className="space-y-3">
//               <div className="h-[1px] w-10 bg-blue-600 mb-4 md:mb-6" />
//               <h2 className="text-3xl md:text-5xl font-black italic uppercase leading-[0.85] tracking-tighter">
//                 Deployment <br />
//                 <span
//                   className="text-blue-600"
//                   style={{
//                     WebkitTextStroke: "1px #2563eb",
//                     color: "transparent",
//                   }}
//                 >
//                   Protocol
//                 </span>
//               </h2>
//               <p className="text-[9px] md:text-[10px] font-mono text-slate-500 tracking-[0.3em] uppercase pt-2">
//                 Phase_01 // Slot_Selection
//               </p>
//             </div>

//             {/* CUSTOM SELECT */}
//             <div className="relative z-[60]">
//               <label className="text-[9px] font-mono text-blue-500/60 uppercase tracking-widest ml-1 mb-2 block">
//                 Protocol_Type
//               </label>
//               <button
//                 onClick={() => setIsSelectOpen(!isSelectOpen)}
//                 className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 py-4 flex items-center justify-between hover:bg-white/[0.08] transition-all group"
//               >
//                 <span className="font-bold italic uppercase text-xs md:text-sm tracking-tight truncate mr-2">
//                   {activeService.title}
//                 </span>
//                 <ChevronDown
//                   className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-300 ${
//                     isSelectOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               <AnimatePresence>
//                 {isSelectOpen && (
//                   <>
//                     <div
//                       className="fixed inset-0 z-[-1]"
//                       onClick={() => setIsSelectOpen(false)}
//                     />
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       className="absolute top-[115%] left-0 w-full bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[70]"
//                     >
//                       {SERVICES.map((s) => (
//                         <button
//                           key={s.id}
//                           onClick={() => {
//                             setActiveService(s);
//                             setIsSelectOpen(false);
//                           }}
//                           className={`w-full text-left px-5 py-4 text-[10px] md:text-xs font-bold uppercase italic border-b border-white/5 last:border-none transition-all flex justify-between items-center
//                             ${
//                               activeService.id === s.id
//                                 ? "bg-blue-600 text-white"
//                                 : "hover:bg-white/5 text-slate-400"
//                             }`}
//                         >
//                           {s.title}
//                           <span className="font-mono text-amber-200 text-[13px] opacity-50">
//                             {s.price}
//                           </span>
//                         </button>
//                       ))}
//                     </motion.div>
//                   </>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* CONSULTANT PROFILE */}
//             <div className="bg-white/[0.02] border border-white/5 rounded-[20px] md:rounded-[24px] p-5 md:p-6 space-y-4 md:space-y-6">
//               <div className="flex items-center gap-4">
//                 <div className="relative shrink-0">
//                   <div className="absolute inset-0 bg-blue-600/20 blur-lg rounded-full" />
//                   <img
//                     src={`https://i.pravatar.cc/150?u=${activeService.consultant}`}
//                     className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl grayscale contrast-125 border border-white/10 object-cover"
//                     alt="Consultant"
//                   />
//                 </div>
//                 <div className="overflow-hidden">
//                   <h4 className="font-bold uppercase italic text-sm md:text-base leading-none mb-1 truncate">
//                     {activeService.consultant}
//                   </h4>
//                   <p className="text-[8px] md:text-[9px] font-mono text-blue-500 uppercase tracking-widest truncate">
//                     {activeService.role}
//                   </p>
//                 </div>
//               </div>
//               <p className="text-slate-300 text-[12px] leading-relaxed italic line-clamp-2 md:line-clamp-none">
//                 "{activeService.desc}"
//               </p>
//             </div>
//           </div>

//           {/* HUD FOOTER - Hidden on very small screens to save space */}
//           <div className="hidden md:flex gap-8 opacity-40 text-[9px] font-mono uppercase tracking-widest mt-8">
//             <div className="flex flex-col gap-1">
//               <span>Latency</span>
//               <span className="text-white font-bold">0.004 MS</span>
//             </div>
//             <div className="flex flex-col gap-1">
//               <span>Uptime</span>
//               <span className="text-white font-bold">99.9%</span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT PANEL: The Calendar */}
//         <div className="w-full md:w-[65%] relative bg-black/20 overflow-y-auto">
//           <BookingCalendar activeService={activeService} isEmbedded={true} />
//         </div>
//       </div>
//     </section>
//   );
// }

//==========================================================
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ArrowLeft } from "lucide-react";

// import BookingCalendar from "../../components/calendar/BookingCalendar";
// import { fetchServices } from "../../api/services.api";

// export default function BookingPage() {
//   const navigate = useNavigate();

//   const [services, setServices] = useState([]);
//   const [activeService, setActiveService] = useState(null);
//   const [isSelectOpen, setIsSelectOpen] = useState(false);

//   // ✅ Fetch services from backend
//   useEffect(() => {
//     fetchServices().then((data) => {
//       setServices(data);
//       setActiveService(data[0]); // default selected
//     });
//   }, []);

//   if (!activeService) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-white">
//         Loading services...
//       </div>
//     );
//   }

//   return (
//     <section className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden flex items-center justify-center p-4 md:p-6 font-sans">
//       {/* NAV */}
//       <button
//         onClick={() => navigate("/")}
//         className="absolute top-6 left-6 md:top-8 md:left-10 z-[100] text-[10px] font-mono tracking-[0.5em] text-slate-500 hover:text-blue-400 transition-all uppercase flex items-center gap-2 group"
//       >
//         <ArrowLeft
//           size={14}
//           className="group-hover:-translate-x-1 transition"
//         />
//         <span className="hidden sm:inline text-xl">TERMINATE_SESSION</span>
//         <span className="sm:hidden inline">BACK</span>
//       </button>

//       <div className="relative z-10 w-full max-w-[1440px] md:aspect-[16/9] md:max-h-[85vh] flex flex-col md:flex-row bg-[#080808] border border-white/5 rounded-[24px] md:rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.6)] mt-12 md:mt-0">
//         {/* LEFT PANEL */}
//         <div className="w-full md:w-[35%] border-b md:border-b-0 md:border-r border-white/5 p-6 md:p-12 flex flex-col justify-between bg-gradient-to-b from-white/[0.03] to-transparent">
//           {/* TITLE */}
//           <div className="space-y-8">
//             <div>
//               <div className="h-[1px] w-10 bg-blue-600 mb-4" />
//               <h2 className="text-3xl md:text-5xl font-black italic uppercase">
//                 Deployment <br />
//                 <span
//                   className="text-blue-600"
//                   style={{
//                     WebkitTextStroke: "1px #2563eb",
//                     color: "transparent",
//                   }}
//                 >
//                   Protocol
//                 </span>
//               </h2>
//               <p className="text-[10px] font-mono text-slate-500 tracking-widest mt-2">
//                 PHASE_01 // SLOT_SELECTION
//               </p>
//             </div>

//             {/* SERVICE SELECT */}
//             <div className="relative">
//               <label className="text-[9px] font-mono text-blue-500/60 uppercase tracking-widest mb-2 block">
//                 Protocol Type
//               </label>

//               <button
//                 onClick={() => setIsSelectOpen(!isSelectOpen)}
//                 className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 flex justify-between items-center"
//               >
//                 <span className="font-bold italic uppercase text-sm truncate">
//                   {activeService.title}
//                 </span>
//                 <ChevronDown
//                   className={`transition ${isSelectOpen ? "rotate-180" : ""}`}
//                 />
//               </button>

//               <AnimatePresence>
//                 {isSelectOpen && (
//                   <>
//                     <div
//                       className="fixed inset-0 z-0"
//                       onClick={() => setIsSelectOpen(false)}
//                     />
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       className="absolute top-[110%] w-full bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden z-50"
//                     >
//                       {services.map((s) => (
//                         <button
//                           key={s.id}
//                           onClick={() => {
//                             setActiveService(s);
//                             setIsSelectOpen(false);
//                           }}
//                           className={`w-full px-5 py-4 text-left uppercase text-xs font-bold flex justify-between items-center
//                             ${
//                               activeService.id === s.id
//                                 ? "bg-blue-600 text-white"
//                                 : "hover:bg-white/5 text-slate-400"
//                             }`}
//                         >
//                           {s.title}
//                           <span className="text-amber-300">
//                             €{(s.priceCents / 100).toFixed(2)}
//                           </span>
//                         </button>
//                       ))}
//                     </motion.div>
//                   </>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* CONSULTANT */}
//             <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6">
//               <h4 className="font-bold uppercase">{activeService.title}</h4>
//               <p className="text-xs text-slate-400 mt-2 italic">
//                 {activeService.desc}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT PANEL */}
//         <div className="w-full md:w-[65%] bg-black/20 overflow-y-auto">
//           <BookingCalendar activeService={activeService} />
//         </div>
//       </div>
//     </section>
//   );
// }

//==========================================================
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ArrowLeft } from "lucide-react";

// import BookingCalendar from "../../components/calendar/BookingCalendar";
// import { fetchServices } from "../../api/services.api";

// export default function BookingPage() {
//   const navigate = useNavigate();
//   const [services, setServices] = useState([]);
//   const [activeService, setActiveService] = useState(null);
//   const [isSelectOpen, setIsSelectOpen] = useState(false);

//   useEffect(() => {
//     fetchServices().then((data) => {
//       setServices(data);
//       setActiveService(data[0]);
//     });
//   }, []);

//   if (!activeService) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#050505] text-blue-500 font-mono tracking-widest animate-pulse">
//         INITIALIZING_SERVICES...
//       </div>
//     );
//   }

//   return (
//     <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex items-center justify-center p-4 md:p-6 font-sans">
//       {/* --- BACKGROUND ENGINE --- */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/15 blur-[140px] rounded-full animate-pulse" />
//         <div
//           className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/15 blur-[140px] rounded-full animate-pulse"
//           style={{ animationDelay: "2s" }}
//         />
//         <div
//           className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-red-600/10 blur-[120px] rounded-full animate-pulse"
//           style={{ animationDelay: "4s" }}
//         />
//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
//             backgroundSize: "60px 60px",
//           }}
//         />
//       </div>

//       {/* NAV */}
//       <button
//         onClick={() => navigate("/")}
//         className="absolute top-6 left-6 md:top-8 md:left-10 z-[100] text-[10px] font-mono tracking-[0.5em] text-slate-500 hover:text-red-500 transition-all uppercase flex items-center gap-2 group"
//       >
//         <ArrowLeft
//           size={14}
//           className="group-hover:-translate-x-1 transition"
//         />
//         <span className="hidden sm:inline text-xl font-black italic tracking-tighter">
//           TERMINATE_SESSION
//         </span>
//         <span className="sm:hidden inline">BACK</span>
//       </button>

//       <div className="relative z-10 w-full max-w-[1440px] md:aspect-[16/9] md:max-h-[85vh] flex flex-col md:flex-row bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] mt-12 md:mt-0">
//         {/* LEFT PANEL */}
//         <div className="w-full md:w-[35%] border-b md:border-b-0 md:border-r border-white/10 p-8 md:p-12 flex flex-col justify-between relative">
//           <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-red-600" />

//           <div className="space-y-10">
//             <div>
//               <h2 className="text-5xl md:text-6xl font-black italic uppercase leading-[0.85] tracking-tighter">
//                 Deployment <br />
//                 <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent italic">
//                   Protocol
//                 </span>
//               </h2>
//               <p className="text-[10px] font-mono text-blue-400/60 tracking-[0.4em] mt-6 uppercase font-bold">
//                 Level_01 // Registry_Sync
//               </p>
//             </div>

//             {/* SERVICE SELECT */}
//             <div className="relative">
//               <label className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em] mb-3 block opacity-70">
//                 Authorized_Module_Selection
//               </label>

//               <button
//                 onClick={() => setIsSelectOpen(!isSelectOpen)}
//                 className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 flex justify-between items-center group hover:border-purple-500/50 transition-all shadow-inner"
//               >
//                 <span className="font-bold italic uppercase text-sm tracking-wide">
//                   {activeService.title}
//                 </span>
//                 <ChevronDown
//                   size={18}
//                   className={`text-purple-500 transition-transform duration-500 ${isSelectOpen ? "rotate-180" : ""}`}
//                 />
//               </button>

//               <AnimatePresence>
//                 {isSelectOpen && (
//                   <>
//                     <div
//                       className="fixed inset-0 z-0"
//                       onClick={() => setIsSelectOpen(false)}
//                     />
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.95, y: 10 }}
//                       animate={{ opacity: 1, scale: 1, y: 0 }}
//                       exit={{ opacity: 0, scale: 0.95, y: 10 }}
//                       className="absolute top-[110%] w-full bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden z-50 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
//                     >
//                       {services.map((s) => (
//                         <button
//                           key={s.id}
//                           onClick={() => {
//                             setActiveService(s);
//                             setIsSelectOpen(false);
//                           }}
//                           className={`w-full px-6 py-5 text-left uppercase text-[10px] font-black italic tracking-wider flex justify-between items-center border-b border-white/5 last:border-none transition-all
//                             ${activeService.id === s.id ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : "hover:bg-white/5 text-slate-400"}`}
//                         >
//                           {s.title}
//                           <span
//                             className={
//                               activeService.id === s.id
//                                 ? "text-white"
//                                 : "text-red-500"
//                             }
//                           >
//                             €{(s.priceCents / 100).toFixed(2)}
//                           </span>
//                         </button>
//                       ))}
//                     </motion.div>
//                   </>
//                 )}
//               </AnimatePresence>
//             </div>

//             <div className="relative group p-6 bg-gradient-to-br from-white/[0.04] to-transparent border border-white/5 rounded-2xl">
//               <h4 className="font-black italic uppercase text-blue-500 text-xs tracking-widest mb-2">
//                 Briefing
//               </h4>
//               <p className="text-[11px] text-slate-300 leading-relaxed italic opacity-80">
//                 "{activeService.desc}"
//               </p>
//             </div>
//           </div>

//           <div className="hidden md:flex justify-between items-center opacity-20 text-[8px] font-mono uppercase tracking-[0.5em] mt-8 pt-6 border-t border-white/5">
//             <span>Security_Encrypted</span>
//             <div className="flex gap-2 text-red-500">
//               <div className="w-1 h-1 bg-current rounded-full animate-ping" />
//               <span>Session_Live</span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT PANEL */}
//         <div className="w-full md:w-[65%] bg-black/20 overflow-y-auto">
//           <BookingCalendar activeService={activeService} isEmbedded={true} />
//         </div>
//       </div>
//     </section>
//   );
// }

//===========================================================
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft } from "lucide-react";

import BookingCalendar from "../../components/calendar/BookingCalendar";
import { fetchServices } from "../../api/services.api";

export default function BookingPage() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState(null);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  // 🔒 LOCK BODY SCROLL
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // 📡 FETCH SERVICES
  useEffect(() => {
    fetchServices().then((data) => {
      setServices(data);
      setActiveService(data[0]);
    });
  }, []);

  if (!activeService) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#050505] text-blue-500 font-mono tracking-widest animate-pulse">
        INITIALIZING_SERVICES...
      </div>
    );
  }

  return (
    <section className="relative h-screen bg-[#050505] text-white overflow-hidden flex items-center justify-center p-4 md:p-6 font-sans">
      {/* --- BACKGROUND ENGINE --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/15 blur-[140px] rounded-full animate-pulse" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/15 blur-[140px] rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-red-600/10 blur-[120px] rounded-full animate-pulse"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* NAV */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 md:top-8 md:left-10 z-[100] text-[10px] font-mono tracking-[0.5em] text-slate-500 hover:text-red-500 transition-all uppercase flex items-center gap-2 group"
      >
        <ArrowLeft
          size={14}
          className="group-hover:-translate-x-1 transition"
        />
        <span className="hidden sm:inline text-xl font-black italic tracking-tighter">
          TERMINATE_SESSION
        </span>
        <span className="sm:hidden inline">BACK</span>
      </button>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-[1440px] md:aspect-[16/9] md:max-h-[85vh] flex flex-col md:flex-row bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] mt-12 md:mt-0">
        {/* LEFT PANEL */}
        <div className="w-full md:w-[35%] border-b md:border-b-0 md:border-r border-white/10 p-8 md:p-12 flex flex-col justify-between relative">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-red-600" />

          <div className="space-y-10">
            <div>
              <h2 className="text-5xl md:text-6xl font-black italic uppercase leading-[0.85] tracking-tighter">
                Deployment <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent italic">
                  Protocol
                </span>
              </h2>
              <p className="text-[10px] font-mono text-blue-400/60 tracking-[0.4em] mt-6 uppercase font-bold">
                Level_01 // Registry_Sync
              </p>
            </div>

            {/* SERVICE SELECT */}
            <div className="relative">
              <label className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em] mb-3 block opacity-70">
                Authorized_Module_Selection
              </label>

              <button
                onClick={() => setIsSelectOpen((v) => !v)}
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 flex justify-between items-center group hover:border-purple-500/50 transition-all shadow-inner"
              >
                <span className="font-bold italic uppercase text-sm tracking-wide">
                  {activeService.title}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-purple-500 transition-transform duration-500 ${
                    isSelectOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isSelectOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsSelectOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute top-[110%] w-full bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden z-50 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
                    >
                      {services.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => {
                            setActiveService(s);
                            setIsSelectOpen(false);
                          }}
                          className={`w-full px-6 py-5 text-left uppercase text-[10px] font-black italic tracking-wider flex justify-between items-center border-b border-white/5 last:border-none transition-all
                            ${
                              activeService.id === s.id
                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                : "hover:bg-white/5 text-slate-400"
                            }`}
                        >
                          {s.title}
                          <span
                            className={
                              activeService.id === s.id
                                ? "text-white"
                                : "text-red-500"
                            }
                          >
                            €{(s.priceCents / 100).toFixed(2)}
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* BRIEFING */}
            <div className="relative group p-6 bg-gradient-to-br from-white/[0.04] to-transparent border border-white/5 rounded-2xl">
              <h4 className="font-black italic uppercase text-blue-500 text-xs tracking-widest mb-2">
                Briefing
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed italic opacity-80">
                "{activeService.desc}"
              </p>
            </div>
          </div>

          <div className="hidden md:flex justify-between items-center opacity-20 text-[8px] font-mono uppercase tracking-[0.5em] mt-8 pt-6 border-t border-white/5">
            <span>Security_Encrypted</span>
            <div className="flex gap-2 text-red-500">
              <div className="w-1 h-1 bg-current rounded-full animate-ping" />
              <span>Session_Live</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — ONLY SCROLLABLE AREA */}
        <div className="w-full md:w-[65%] bg-black/20 overflow-y-auto">
          <BookingCalendar activeService={activeService} isEmbedded />
        </div>
      </div>
    </section>
  );
}
