// import React, { useEffect, useState, useMemo } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ChevronDown,
//   ArrowLeft,
//   ShieldCheck,
//   Landmark,
//   Cpu,
//   Briefcase,
//   Plane,
//   Building2,
//   Sparkles,
// } from "lucide-react";
// import BookingCalendar from "../../components/calendar/BookingCalendar";
// import { fetchServices } from "../../api/services.api";
// import GlobalBackground from "../../components/layout/GlobalBackground";

// // Purely decorative mapping — icon per service category, keyed off the same
// // short keys already used for the URL, so it stays in sync with the real data.
// const ICON_MAP = {
//   ai: Cpu,
//   business: Briefcase,
//   mobility: Plane,
//   realestate: Building2,
//   events: ShieldCheck,
// };

// export default function BookingPage() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [services, setServices] = useState([]);
//   const [activeService, setActiveService] = useState(null);
//   const [isSelectOpen, setIsSelectOpen] = useState(false);
//   const [selectedTier, setSelectedTier] = useState(null);

//   // Map visual keys to API IDs
//   const keyToIdMap = useMemo(
//     () => ({
//       ai: "ai-infrastructure",
//       business: "business-diagnostic",
//       mobility: "global-mobility",
//       realestate: "asset-rebuilding",
//       events: "exclusive-call",
//       sustainability: "sustainability-initiative",
//     }),
//     [],
//   );

//   // Helper to find the short key for the URL based on the API ID
//   const getShortKey = (serviceId) => {
//     return (
//       Object.keys(keyToIdMap).find((key) => keyToIdMap[key] === serviceId) ||
//       serviceId
//     );
//   };

//   const getServiceIcon = (serviceId) => {
//     const key = getShortKey(serviceId);
//     return ICON_MAP[key] || Sparkles;
//   };

//   useEffect(() => {
//     fetchServices().then((data) => {
//       setServices(data);
//       const params = new URLSearchParams(location.search);
//       const serviceQuery = params.get("service")?.toLowerCase();

//       let found = null;
//       if (serviceQuery) {
//         const targetId = keyToIdMap[serviceQuery] || serviceQuery;
//         found = data.find((s) => s.id?.toLowerCase() === targetId);
//       }
//       setActiveService(found || data[0]);
//     });
//   }, [location.search, keyToIdMap]);

//   useEffect(() => {
//     if (activeService?.requiresUmsatz) {
//       setSelectedTier(activeService.revenueTiers[0]);
//     } else {
//       setSelectedTier(null);
//     }
//   }, [activeService]);

//   if (!activeService) {
//     return (
//       <div className="min-h-screen bg-[#020617] flex items-center justify-center">
//         <div className="w-8 h-8 border-2 border-blue-600/30 border-t-blue-500 rounded-full animate-spin" />
//       </div>
//     );
//   }

//   const displayPrice = selectedTier
//     ? selectedTier.priceCents
//     : activeService.priceCents;

//   const ActiveIcon = getServiceIcon(activeService.id);

//   return (
//     <>
//       <GlobalBackground />
//       <section className="relative z-10 min-h-screen bg-transparent text-white pt-20 md:pt-24 pb-12 px-3 sm:px-4 md:px-10 flex flex-col items-center overflow-x-hidden">
//         {/* HEADER NAV */}
//         <div className="w-full max-w-[1440px] mb-8">
//           <button
//             onClick={() => navigate("/")}
//             className="group flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-all"
//           >
//             <ArrowLeft
//               size={16}
//               className="group-hover:-translate-x-1 transition-transform"
//             />
//             <span className="text-xl font-black italic tracking-tighter uppercase">
//               Back to Home
//             </span>
//           </button>
//         </div>

//         {/* MAIN BOARD */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, ease: "easeOut" }}
//           className="relative z-10 w-full max-w-[1440px] flex flex-col lg:flex-row bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-3xl md:rounded-[10px] shadow-2xl min-h-[720px] overflow-hidden"
//         >
//           {/* accent top line */}
//           <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

//           {/* LEFT PANEL */}
//           <div className="w-full lg:w-[30%] border-b lg:border-b-0 lg:border-r border-white/10 p-6 sm:p-8 md:p-12 flex flex-col bg-black/40 max-h-[720px] overflow-y-auto custom-scrollbar">
//             <div className="space-y-10">
//               <div>
//                 <span className="inline-flex items-center gap-2 text-[10px] font-mono text-blue-500 tracking-[0.3em] uppercase mb-4">
//                   <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
//                   Strategic Advisory
//                 </span>

//                 <h2 className="text-4xl sm:text-2xl font-black uppercase leading-[0.95] tracking-tighter mb-6">
//                   RESERVE YOUR STRATEGIC <br />
//                   <span className="text-blue-600"> DIAGNOSTIC</span>
//                 </h2>

//                 <p className="text-4xl sm:text-[16px] text-slate-400 tracking-tighter mb-6">
//                   Each diagnostic is a short, paid conversation, designed to
//                   assess strategic fit and clarify whether deeper collaboration
//                   makes sense.
//                 </p>

//                 {/* SERVICE SELECTOR */}
//                 <div className="relative">
//                   <button
//                     onClick={() => setIsSelectOpen(!isSelectOpen)}
//                     className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex justify-between items-center hover:border-blue-500 transition-colors"
//                   >
//                     <div className="flex items-center gap-3 text-left">
//                       <div className="shrink-0 w-9 h-9 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
//                         <ActiveIcon size={15} className="text-blue-400" />
//                       </div>
//                       <div>
//                         <span className="font-bold italic uppercase text-xs tracking-widest flex items-center gap-2">
//                           {activeService.isExclusive && (
//                             <ShieldCheck size={14} className="text-blue-500" />
//                           )}
//                           {activeService.title}
//                         </span>
//                         <div className="flex gap-3 mt-1">
//                           <span className="text-[10px] font-mono text-slate-500 uppercase">
//                             Dur: {activeService.durationMinutes} MIN
//                           </span>
//                           <span className="text-[10px] font-mono text-blue-400 uppercase">
//                             Fee: €{displayPrice / 100}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                     <ChevronDown
//                       size={18}
//                       className={`text-blue-500 transition-transform duration-200 ${isSelectOpen ? "rotate-180" : ""}`}
//                     />
//                   </button>

//                   <AnimatePresence>
//                     {isSelectOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 10 }}
//                         transition={{ duration: 0.18 }}
//                         className="absolute top-[110%] left-0 w-full max-h-[320px] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl z-50 shadow-2xl custom-scrollbar"
//                       >
//                         {services.map((s, idx) => {
//                           const Icon = getServiceIcon(s.id);
//                           const isActive = activeService.id === s.id;
//                           return (
//                             <motion.button
//                               key={s.id}
//                               initial={{ opacity: 0 }}
//                               animate={{ opacity: 1 }}
//                               transition={{ delay: idx * 0.03 }}
//                               onClick={() => {
//                                 setActiveService(s);
//                                 setIsSelectOpen(false);
//                                 // UPDATE URL HERE:
//                                 const shortKey = getShortKey(s.id);
//                                 navigate(`?service=${shortKey}`, {
//                                   replace: true,
//                                 });
//                               }}
//                               className="w-full p-5 text-left border-b border-white/5 last:border-none hover:bg-blue-600/10 transition-colors flex justify-between items-center group"
//                             >
//                               <span className="flex items-center gap-3">
//                                 <Icon
//                                   size={13}
//                                   className={
//                                     isActive
//                                       ? "text-blue-500"
//                                       : "text-slate-500"
//                                   }
//                                 />
//                                 <span
//                                   className={`text-[10px] font-black italic uppercase transition-colors ${isActive ? "text-blue-500" : "text-white"}`}
//                                 >
//                                   {s.title}
//                                 </span>
//                               </span>
//                               <span className="font-mono text-[11px] text-slate-400 group-hover:text-blue-400">
//                                 {s.requiresUmsatz
//                                   ? "VAR"
//                                   : `€${s.priceCents / 100}`}
//                               </span>
//                             </motion.button>
//                           );
//                         })}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </div>

//               {/* BRIEFING CARD */}
//               <div className="p-6 bg-blue-600/5 border border-blue-500/10 rounded-2xl space-y-6">
//                 <p className="text-sm text-slate-300 italic leading-relaxed">
//                   {activeService.desc}
//                 </p>

//                 {activeService.requiresUmsatz && (
//                   <div className="pt-4 border-t border-white/10">
//                     <label className="flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] mb-3">
//                       <Landmark size={12} /> Annual Revenue
//                     </label>
//                     <div className="space-y-2">
//                       {activeService.revenueTiers.map((tier, idx) => {
//                         const active = selectedTier?.label === tier.label;
//                         return (
//                           <button
//                             key={idx}
//                             onClick={() => setSelectedTier(tier)}
//                             className={`relative w-full text-left px-4 py-3 rounded-xl border font-mono text-[10px] transition-colors flex justify-between items-center overflow-hidden ${
//                               active
//                                 ? "border-blue-500 text-white"
//                                 : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30"
//                             }`}
//                           >
//                             {active && (
//                               <motion.div
//                                 layoutId="tierHighlight"
//                                 className="absolute inset-0 bg-blue-600 shadow-lg shadow-blue-600/20"
//                                 transition={{
//                                   type: "spring",
//                                   stiffness: 400,
//                                   damping: 32,
//                                 }}
//                               />
//                             )}
//                             <span className="relative z-10">{tier.label}</span>
//                             <span
//                               className={`relative z-10 ${active ? "text-white" : "text-blue-500"}`}
//                             >
//                               €{tier.priceCents / 100}
//                             </span>
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}

//                 <div className="space-y-4 pt-4 border-t border-white/5">
//                   {activeService.details?.map((detail, idx) => (
//                     <div key={idx} className="flex gap-4">
//                       <span className="font-mono text-[10px] text-blue-500 shrink-0">
//                         [{detail.time}]
//                       </span>
//                       <div className="space-y-1">
//                         <p className="text-[10px] font-bold text-white uppercase tracking-wider">
//                           {detail.label}
//                         </p>
//                         <p className="text-[11px] text-slate-400 leading-snug">
//                           {detail.text}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT PANEL */}
//           <div className="w-full lg:w-[70%] bg-black/20 overflow-y-auto custom-scrollbar">
//             <BookingCalendar
//               activeService={{ ...activeService, priceCents: displayPrice }}
//               isEmbedded
//             />
//           </div>
//         </motion.div>
//       </section>
//     </>
//   );
// }

import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ArrowLeft,
  ShieldCheck,
  Landmark,
  Cpu,
  Briefcase,
  Plane,
  Building2,
  Sparkles,
  Leaf,
} from "lucide-react";
import BookingCalendar from "../../components/calendar/BookingCalendar";
import { fetchServices } from "../../api/services.api";
import GlobalBackground from "../../components/layout/GlobalBackground";

// Purely decorative mapping — icon per service category, keyed off the same
// short keys already used for the URL, so it stays in sync with the real data.
const ICON_MAP = {
  ai: Cpu,
  business: Briefcase,
  mobility: Plane,
  realestate: Building2,
  events: ShieldCheck,
  sustainability: Leaf,
};

export default function BookingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState(null);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);
  const [selectedSubService, setSelectedSubService] = useState(null);

  // Map visual keys to API IDs
  const keyToIdMap = useMemo(
    () => ({
      ai: "ai-infrastructure",
      business: "business-diagnostic",
      mobility: "global-mobility",
      realestate: "asset-rebuilding",
      events: "exclusive-call",
      sustainability: "sustainability-strategy",
    }),
    [],
  );

  // Helper to find the short key for the URL based on the API ID
  const getShortKey = (serviceId) => {
    return (
      Object.keys(keyToIdMap).find((key) => keyToIdMap[key] === serviceId) ||
      serviceId
    );
  };

  const getServiceIcon = (serviceId) => {
    const key = getShortKey(serviceId);
    return ICON_MAP[key] || Sparkles;
  };

  // Lowest price across sub-services, used for dropdown "FROM €X" display
  // on multi-option services (they have no single top-level priceCents).
  const getStartingPriceCents = (service) => {
    if (!service.subServices?.length) return service.priceCents;
    return Math.min(...service.subServices.map((sub) => sub.priceCents));
  };

  useEffect(() => {
    fetchServices().then((data) => {
      setServices(data);
      const params = new URLSearchParams(location.search);
      const serviceQuery = params.get("service")?.toLowerCase();

      let found = null;
      if (serviceQuery) {
        const targetId = keyToIdMap[serviceQuery] || serviceQuery;
        found = data.find((s) => s.id?.toLowerCase() === targetId);
      }
      setActiveService(found || data[0]);
    });
  }, [location.search, keyToIdMap]);

  useEffect(() => {
    if (!activeService) return;

    if (activeService.requiresUmsatz) {
      setSelectedTier(activeService.revenueTiers[0]);
    } else {
      setSelectedTier(null);
    }

    if (activeService.isMultiOption) {
      setSelectedSubService(activeService.subServices[0]);
    } else {
      setSelectedSubService(null);
    }
  }, [activeService]);

  if (!activeService) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-600/30 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  // Resolve the effective price/duration/details/desc:
  // - revenue-tiered services (exclusive-call) resolve off selectedTier
  // - multi-option services (sustainability-strategy) resolve off selectedSubService
  // - everything else uses the service's own top-level fields
  const displayPrice = selectedTier
    ? selectedTier.priceCents
    : selectedSubService
      ? selectedSubService.priceCents
      : activeService.priceCents;

  const displayDuration = selectedSubService
    ? selectedSubService.durationMinutes
    : activeService.durationMinutes;

  const displayDetails = selectedSubService
    ? selectedSubService.details
    : activeService.details;

  const displayDesc = selectedSubService
    ? selectedSubService.desc
    : activeService.desc;

  // The id BookingCalendar/backend actually needs — for a multi-option
  // service this must be the chosen sub-service's id, not the parent's.
  const bookingServiceId = selectedSubService
    ? selectedSubService.id
    : activeService.id;

  const ActiveIcon = getServiceIcon(activeService.id);

  return (
    <>
      <GlobalBackground />
      <section className="relative z-10 min-h-screen bg-transparent text-white pt-20 md:pt-24 pb-12 px-3 sm:px-4 md:px-10 flex flex-col items-center overflow-x-hidden">
        {/* HEADER NAV */}
        <div className="w-full max-w-[1440px] mb-8">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-all"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-xl font-black italic tracking-tighter uppercase">
              Back to Home
            </span>
          </button>
        </div>

        {/* MAIN BOARD */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative z-10 w-full max-w-[1440px] flex flex-col lg:flex-row bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-3xl md:rounded-[10px] shadow-2xl min-h-[720px] overflow-hidden"
        >
          {/* accent top line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

          {/* LEFT PANEL */}
          <div className="w-full lg:w-[30%] border-b lg:border-b-0 lg:border-r border-white/10 p-6 sm:p-8 md:p-12 flex flex-col bg-black/40 max-h-[720px] overflow-y-auto custom-scrollbar">
            <div className="space-y-10">
              <div>
                <span className="inline-flex items-center gap-2 text-[10px] font-mono text-blue-500 tracking-[0.3em] uppercase mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  Strategic Advisory
                </span>

                <h2 className="text-4xl sm:text-2xl font-black uppercase leading-[0.95] tracking-tighter mb-6">
                  RESERVE YOUR STRATEGIC <br />
                  <span className="text-blue-600"> DIAGNOSTIC</span>
                </h2>

                <p className="text-4xl sm:text-[16px] text-slate-400 tracking-tighter mb-6">
                  Each diagnostic is a short, paid conversation, designed to
                  assess strategic fit and clarify whether deeper collaboration
                  makes sense.
                </p>

                {/* SERVICE SELECTOR */}
                <div className="relative">
                  <button
                    onClick={() => setIsSelectOpen(!isSelectOpen)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex justify-between items-center hover:border-blue-500 transition-colors"
                  >
                    <div className="flex items-center gap-3 text-left">
                      <div className="shrink-0 w-9 h-9 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                        <ActiveIcon size={15} className="text-blue-400" />
                      </div>
                      <div>
                        <span className="font-bold italic uppercase text-xs tracking-widest flex items-center gap-2">
                          {activeService.isExclusive && (
                            <ShieldCheck size={14} className="text-blue-500" />
                          )}
                          {activeService.title}
                        </span>
                        <div className="flex gap-3 mt-1">
                          <span className="text-[10px] font-mono text-slate-500 uppercase">
                            Dur: {displayDuration} MIN
                          </span>
                          <span className="text-[10px] font-mono text-blue-400 uppercase">
                            Fee: €{displayPrice / 100}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-blue-500 transition-transform duration-200 ${isSelectOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isSelectOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-[110%] left-0 w-full max-h-[320px] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl z-50 shadow-2xl custom-scrollbar"
                      >
                        {services.map((s, idx) => {
                          const Icon = getServiceIcon(s.id);
                          const isActive = activeService.id === s.id;
                          return (
                            <motion.button
                              key={s.id}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: idx * 0.03 }}
                              onClick={() => {
                                setActiveService(s);
                                setIsSelectOpen(false);
                                // UPDATE URL HERE:
                                const shortKey = getShortKey(s.id);
                                navigate(`?service=${shortKey}`, {
                                  replace: true,
                                });
                              }}
                              className="w-full p-5 text-left border-b border-white/5 last:border-none hover:bg-blue-600/10 transition-colors flex justify-between items-center group"
                            >
                              <span className="flex items-center gap-3">
                                <Icon
                                  size={13}
                                  className={
                                    isActive
                                      ? "text-blue-500"
                                      : "text-slate-500"
                                  }
                                />
                                <span
                                  className={`text-[10px] font-black italic uppercase transition-colors ${isActive ? "text-blue-500" : "text-white"}`}
                                >
                                  {s.title}
                                </span>
                              </span>
                              <span className="font-mono text-[11px] text-slate-400 group-hover:text-blue-400">
                                {s.requiresUmsatz
                                  ? "VAR"
                                  : s.isMultiOption
                                    ? `FROM €${getStartingPriceCents(s) / 100}`
                                    : `€${s.priceCents / 100}`}
                              </span>
                            </motion.button>
                          );
                        })}
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

                {activeService.requiresUmsatz && (
                  <div className="pt-4 border-t border-white/10">
                    <label className="flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] mb-3">
                      <Landmark size={12} /> Annual Revenue
                    </label>
                    <div className="space-y-2">
                      {activeService.revenueTiers.map((tier, idx) => {
                        const active = selectedTier?.label === tier.label;
                        return (
                          <button
                            key={idx}
                            onClick={() => setSelectedTier(tier)}
                            className={`relative w-full text-left px-4 py-3 rounded-xl border font-mono text-[10px] transition-colors flex justify-between items-center overflow-hidden ${
                              active
                                ? "border-blue-500 text-white"
                                : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30"
                            }`}
                          >
                            {active && (
                              <motion.div
                                layoutId="tierHighlight"
                                className="absolute inset-0 bg-blue-600 shadow-lg shadow-blue-600/20"
                                transition={{
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 32,
                                }}
                              />
                            )}
                            <span className="relative z-10">{tier.label}</span>
                            <span
                              className={`relative z-10 ${active ? "text-white" : "text-blue-500"}`}
                            >
                              €{tier.priceCents / 100}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {activeService.isMultiOption && (
                  <div className="pt-4 border-t border-white/10">
                    <label className="flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] mb-3">
                      <Leaf size={12} /> Choose Consultation
                    </label>
                    <div className="space-y-2">
                      {activeService.subServices.map((sub, idx) => {
                        const active = selectedSubService?.id === sub.id;
                        return (
                          <button
                            key={sub.id || idx}
                            onClick={() => setSelectedSubService(sub)}
                            className={`relative w-full text-left px-4 py-3 rounded-xl border font-mono text-[10px] transition-colors flex justify-between items-center overflow-hidden ${
                              active
                                ? "border-blue-500 text-white"
                                : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30"
                            }`}
                          >
                            {active && (
                              <motion.div
                                layoutId="subServiceHighlight"
                                className="absolute inset-0 bg-blue-600 shadow-lg shadow-blue-600/20"
                                transition={{
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 32,
                                }}
                              />
                            )}
                            <span className="relative z-10">
                              {sub.title} ({sub.durationMinutes}min)
                            </span>
                            <span
                              className={`relative z-10 ${active ? "text-white" : "text-blue-500"}`}
                            >
                              €{sub.priceCents / 100}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {activeService.isMultiOption && selectedSubService && (
                  <p className="text-xs text-slate-400 italic leading-relaxed pt-2 border-t border-white/5">
                    {displayDesc}
                  </p>
                )}

                <div className="space-y-4 pt-4 border-t border-white/5">
                  {displayDetails?.map((detail, idx) => (
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
          <div className="w-full lg:w-[70%] bg-black/20 overflow-y-auto custom-scrollbar">
            <BookingCalendar
              activeService={{
                ...activeService,
                id: bookingServiceId,
                priceCents: displayPrice,
                durationMinutes: displayDuration,
              }}
              isEmbedded
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
