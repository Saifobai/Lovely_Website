// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ArrowLeft, ShieldCheck, Activity } from "lucide-react";
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

//   if (!activeService) return null;

//   return (
//     <section className="relative min-h-screen bg-transparent text-white pt-24 pb-12 px-4 md:px-10 flex flex-col items-center overflow-x-hidden">
//       {/* HEADER NAV */}
//       <div className="w-full max-w-[1440px] mb-8">
//         <button
//           onClick={() => navigate("/")}
//           className="group flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-all"
//         >
//           <ArrowLeft
//             size={16}
//             className="group-hover:-translate-x-1 transition"
//           />
//           <span className="text-xl font-black italic tracking-tighter uppercase">
//             Terminate_Session
//           </span>
//         </button>
//       </div>

//       {/* THE BIG BOARD CONTAINER */}
//       <div className="relative z-10 w-full max-w-[1440px] flex flex-col lg:flex-row bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">
//         {/* LEFT PANEL: BRIEFING (30%) */}
//         <div className="w-full lg:w-[30%] border-b lg:border-b-0 lg:border-r border-white/10 p-8 md:p-12 flex flex-col justify-between">
//           <div className="space-y-10">
//             <div>
//               <h2 className="text-5xl font-black italic uppercase leading-[0.85] tracking-tighter mb-6">
//                 Reserve your <br />
//                 <span className="text-blue-600">advisory</span>
//               </h2>

//               {/* SERVICE SELECTOR */}
//               <div className="relative">
//                 <button
//                   onClick={() => setIsSelectOpen(!isSelectOpen)}
//                   className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex justify-between items-center hover:border-blue-500 transition-all"
//                 >
//                   <div className="text-left">
//                     <span className="font-bold italic uppercase text-xs tracking-widest flex items-center gap-2">
//                       {activeService.isExclusive && (
//                         <ShieldCheck size={14} className="text-blue-500" />
//                       )}
//                       {activeService.title}
//                     </span>
//                     <span className="text-[10px] font-mono text-slate-500 mt-1 uppercase">
//                       Duration: {activeService.durationMinutes} MIN
//                     </span>
//                   </div>
//                   <ChevronDown
//                     size={18}
//                     className={`text-blue-500 transition-transform ${isSelectOpen ? "rotate-180" : ""}`}
//                   />
//                 </button>

//                 <AnimatePresence>
//                   {isSelectOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 10 }}
//                       className="absolute top-[110%] w-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden z-50"
//                     >
//                       {services.map((s) => (
//                         <button
//                           key={s.id}
//                           onClick={() => {
//                             setActiveService(s);
//                             setIsSelectOpen(false);
//                           }}
//                           className="w-full p-5 text-left border-b border-white/5 last:border-none hover:bg-blue-600/10 transition-all flex justify-between items-center"
//                         >
//                           <span className="text-[10px] font-black italic uppercase">
//                             {s.title}
//                           </span>
//                           <span className="font-mono text-[11px] text-slate-400">
//                             €{s.priceCents / 100}
//                           </span>
//                         </button>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>

//             {/* BRIEFING CARD */}
//             <div className="p-6 bg-blue-600/5 border border-blue-500/10 rounded-2xl space-y-6">
//               <h4 className="font-black italic uppercase text-blue-500 text-xs tracking-[0.3em]">
//                 Briefing_Dossier
//               </h4>
//               <p className="text-sm text-slate-300 italic leading-relaxed">
//                 "{activeService.desc}"
//               </p>
//               <div className="space-y-4 pt-4 border-t border-white/5">
//                 {activeService.details.map((detail, idx) => (
//                   <div key={idx} className="flex gap-4">
//                     <span className="font-mono text-[10px] text-blue-500 shrink-0">
//                       [{detail.time}]
//                     </span>
//                     <div className="space-y-1">
//                       <p className="text-[10px] font-bold text-white uppercase tracking-wider">
//                         {detail.label}
//                       </p>
//                       <p className="text-[11px] text-slate-400 leading-snug">
//                         {detail.text}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="hidden lg:flex justify-between items-center opacity-30 text-[8px] font-mono uppercase tracking-[0.5em] mt-8">
//             <div className="flex gap-2 items-center">
//               <Activity size={10} className="text-blue-500 animate-pulse" />
//               <span>Link_Stable</span>
//             </div>
//             <span>v.2.0.26</span>
//           </div>
//         </div>

//         {/* RIGHT PANEL: THE BOARD (70%) */}
//         <div className="w-full lg:w-[70%] bg-black/20 overflow-y-auto">
//           <BookingCalendar activeService={activeService} isEmbedded />
//         </div>
//       </div>
//     </section>
//   );
// }

//========================================================================
//
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft, ShieldCheck, Activity } from "lucide-react";
import BookingCalendar from "../../components/calendar/BookingCalendar";
import { fetchServices } from "../../api/services.api";
import GlobalBackground from "../../components/layout/GlobalBackground";

export default function BookingPage() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState(null);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  useEffect(() => {
    fetchServices().then((data) => {
      setServices(data);
      setActiveService(data[0]);
    });
  }, []);

  if (!activeService) return null;

  return (
    <>
      {/* GLOBAL BACKGROUND */}
      <GlobalBackground />

      {/* PAGE CONTENT */}
      <section className="relative z-10 min-h-screen bg-transparent text-white pt-20 md:pt-24 pb-12 px-3 sm:px-4 md:px-10 flex flex-col items-center overflow-x-hidden">
        {/* HEADER NAV */}
        <div className="w-full max-w-[1440px] mb-8">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-all"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition"
            />
            <span className="text-xl font-black italic tracking-tighter uppercase">
              Terminate_Session
            </span>
          </button>
        </div>

        {/* MAIN BOARD */}
        <div className="relative z-10 w-full max-w-[1440px] flex flex-col lg:flex-row bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl">
          {/* LEFT PANEL */}
          <div className="w-full lg:w-[30%] border-b lg:border-b-0 lg:border-r border-white/10 p-6 sm:p-8 md:p-12 flex flex-col justify-between">
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl sm:text-5xl font-black italic uppercase leading-[0.85] tracking-tighter mb-6">
                  Reserve your <br />
                  <span className="text-blue-600">advisory</span>
                </h2>

                {/* SERVICE SELECTOR */}
                <div className="relative">
                  <button
                    onClick={() => setIsSelectOpen(!isSelectOpen)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex justify-between items-center hover:border-blue-500 transition-all"
                  >
                    <div className="text-left">
                      <span className="font-bold italic uppercase text-xs tracking-widest flex items-center gap-2">
                        {activeService.isExclusive && (
                          <ShieldCheck size={14} className="text-blue-500" />
                        )}
                        {activeService.title}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 mt-1 uppercase">
                        Duration: {activeService.durationMinutes} MIN
                      </span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-blue-500 transition-transform ${
                        isSelectOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isSelectOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-[110%] w-full max-h-[60vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl z-50"
                      >
                        {services.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => {
                              setActiveService(s);
                              setIsSelectOpen(false);
                            }}
                            className="w-full p-5 text-left border-b border-white/5 last:border-none hover:bg-blue-600/10 transition-all flex justify-between items-center"
                          >
                            <span className="text-[10px] font-black italic uppercase">
                              {s.title}
                            </span>
                            <span className="font-mono text-[11px] text-slate-400">
                              €{s.priceCents / 100}
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* BRIEFING CARD */}
              <div className="p-6 bg-blue-600/5 border border-blue-500/10 rounded-2xl space-y-6">
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  {activeService.desc}
                </p>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  {activeService.details.map((detail, idx) => (
                    <div key={idx} className="flex gap-4">
                      <span className="font-mono text-[10px] text-blue-500 shrink-0">
                        [{detail.time}]
                      </span>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-white uppercase tracking-wider">
                          {detail.label}
                        </p>
                        <p className="text-[11px] text-slate-400 leading-snug">
                          {detail.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="w-full lg:w-[70%] bg-black/20 overflow-y-auto">
            <BookingCalendar activeService={activeService} isEmbedded />
          </div>
        </div>
      </section>
    </>
  );
}
