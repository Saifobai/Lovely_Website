// import React, { useState, useEffect, useRef, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { X, Shield, Zap, Globe, Command, ArrowUpRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// gsap.registerPlugin(ScrollTrigger);

// const portalVisuals = {
//   business: {
//     gradient: "linear-gradient(135deg, #1c1c84, #000068)",
//     accent: "#3b82f6",
//   },
//   mobility: {
//     gradient: "linear-gradient(135deg, #0f766e, #042f2e)",
//     accent: "#14b8a6",
//   },
//   it: {
//     gradient: "linear-gradient(135deg, #4f46e5, #020617)",
//     accent: "#6366f1",
//   },
//   realestate: {
//     gradient: "linear-gradient(135deg, #78350f, #1c1917)",
//     accent: "#f59e0b",
//   },
//   events: {
//     gradient: "linear-gradient(135deg, #831843, #020617)",
//     accent: "#ec4899",
//   },
// };

// export default function ServicesSection() {
//   const { t } = useTranslation();
//   const navigate = useNavigate();
//   const sectionRef = useRef(null);
//   const [selectedService, setSelectedService] = useState(null);

//   const services = useMemo(
//     () => [
//       {
//         id: "01",
//         title: t("services.list.business.title"),
//         description: t("services.list.business.description"),
//         visual: portalVisuals.business,
//       },
//       {
//         id: "02",
//         title: t("services.list.mobility.title"),
//         description: t("services.list.mobility.description"),
//         visual: portalVisuals.mobility,
//       },
//       {
//         id: "03",
//         title: t("services.list.it.title"),
//         description: t("services.list.it.description"),
//         visual: portalVisuals.it,
//       },
//       {
//         id: "04",
//         title: t("services.list.realestate.title"),
//         description: t("services.list.realestate.description"),
//         visual: portalVisuals.realestate,
//       },
//       {
//         id: "05",
//         title: t("services.list.events.title"),
//         description: t("services.list.events.description"),
//         visual: portalVisuals.events,
//       },
//     ],
//     [t],
//   );

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".service-card", {
//         y: 100,
//         opacity: 0,
//         rotateX: -45,
//         stagger: 0.15,
//         duration: 1.2,
//         ease: "expo.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%",
//         },
//       });
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       id="services"
//       ref={sectionRef}
//       className="relative w-full min-h-screen  py-20 md:py-32 overflow-hidden select-none"
//     >
//       <div
//         className="absolute inset-0 opacity-20 pointer-events-none"
//         style={{
//           backgroundImage: `radial-gradient(#ffffff10 1px, transparent 1px)`,
//           backgroundSize: "30px 30px",
//         }}
//       />

//       <div className="max-w-[1400px] mx-auto px-6 relative z-10">
//         <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
//           <div className="space-y-2">
//             <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8]">
//               {t("services.header.core")} <br />
//               <span
//                 className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 text-transparent bg-clip-text"
//                 style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
//               >
//                 {t("services.header.protocols")}
//               </span>
//             </h2>
//           </div>
//           <div className="bg-white/5 border border-white/10 p-4 rounded-lg backdrop-blur-md hidden lg:block font-mono text-[10px] text-slate-400 uppercase leading-relaxed">
//             <p>
//               {t("services.header.activeNodes")}: 0{services.length} <br />{" "}
//               {t("services.header.encryption")}: AES_256_V3 <br />{" "}
//               {t("services.header.status")}:{" "}
//               <span className="text-green-500 animate-pulse">
//                 {t("services.header.ready")}
//               </span>
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 gap-4">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               onClick={() => setSelectedService(service)}
//               // 🟢 Hover: Moves up slightly and scales
//               whileHover={{ y: -5, scale: 1.01 }}
//               transition={{ type: "spring", stiffness: 400, damping: 30 }}
//               className="service-card group relative h-[120px] md:h-[180px] bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden cursor-pointer flex items-center px-6 md:px-10"
//             >
//               <motion.div
//                 className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                 style={{ background: service.visual.gradient }}
//               />

//               <div className="relative z-10 w-24 hidden md:block">
//                 <span className="text-5xl font-black font-mono text-white/5 group-hover:text-white/20 transition-colors duration-500">
//                   {service.id}
//                 </span>
//               </div>

//               <div className="relative z-10 flex-1">
//                 {/* 🟢 Added original: group-hover:scale-105 group-hover:-rotate-1 (The "Flip" effect) */}
//                 <h3 className="text-2xl md:text-5xl font-black uppercase italic tracking-tighter group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500 origin-left">
//                   {service.title}
//                 </h3>
//                 <div className="flex gap-4 mt-2 overflow-hidden h-0 group-hover:h-6 transition-all duration-500 hidden md:flex">
//                   <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">
//                     Execute_Initial_Phase
//                   </span>
//                   <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
//                     // Multi_Node_Sync
//                   </span>
//                 </div>
//               </div>

//               <div className="relative z-10 flex items-center justify-center">
//                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:rotate-[360deg] transition-all duration-700">
//                   <ArrowUpRight
//                     className="text-white group-hover:text-black transition-colors"
//                     size={24}
//                   />
//                 </div>
//               </div>

//               {/* 🟢 Added Shimmer Effect from original */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <DetailedModal
//         isOpen={!!selectedService}
//         service={selectedService}
//         onClose={() => setSelectedService(null)}
//         navigate={navigate}
//         t={t}
//       />
//     </section>
//   );
// }

// const DetailedModal = ({ service, isOpen, onClose, navigate, t }) => (
//   <AnimatePresence>
//     {isOpen && (
//       <>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={onClose}
//           className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[200]"
//         />
//         <div className="fixed inset-0 flex items-center justify-center z-[201] p-4 pointer-events-none">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 20 }}
//             className="bg-[#0a0a0a] border border-white/10 w-full max-w-5xl rounded-[32px] md:rounded-[40px] overflow-hidden pointer-events-auto shadow-2xl flex flex-col max-h-[90vh]"
//           >
//             <div
//               className="h-40 md:h-48 w-full relative"
//               style={{ background: service?.visual?.gradient }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
//               <div className="absolute bottom-6 left-6 md:bottom-8 md:left-10">
//                 <p className="text-blue-400 font-mono text-[10px] tracking-[0.5em] uppercase mb-2">
//                   {t("services.modal.protocolActive")}
//                 </p>
//                 <h3 className="text-white text-2xl md:text-4xl font-bold uppercase italic tracking-tighter">
//                   {service?.title}
//                 </h3>
//               </div>
//               <button
//                 onClick={onClose}
//                 className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
//               >
//                 <X size={18} />
//               </button>
//             </div>
//             <div className="p-8 md:p-16 overflow-y-auto custom-scrollbar flex-1">
//               <div className="grid lg:grid-cols-3 gap-10 md:gap-16">
//                 <div className="lg:col-span-2 space-y-6 md:space-y-8">
//                   <h4 className="text-white text-xl md:text-2xl font-semibold tracking-tight uppercase">
//                     {t("services.modal.deployment")}
//                   </h4>
//                   <p className="text-slate-400 text-base md:text-lg leading-relaxed">
//                     {service?.description}
//                   </p>
//                 </div>
//                 <div className="space-y-8 border-t lg:border-t-0 lg:border-l border-white/5 pt-8 lg:pt-0 lg:pl-10">
//                   <div className="space-y-4">
//                     <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">
//                       {t("services.modal.capabilities")}
//                     </p>
//                     <ul className="space-y-3 text-sm text-white/70">
//                       <li className="flex items-center gap-2">
//                         <Zap size={14} className="text-blue-500" />{" "}
//                         {t("services.modal.realtime")}
//                       </li>
//                       <li className="flex items-center gap-2">
//                         <Shield size={14} className="text-blue-500" />{" "}
//                         {t("services.modal.secure")}
//                       </li>
//                       <li className="flex items-center gap-2">
//                         <Globe size={14} className="text-blue-500" />{" "}
//                         {t("services.modal.global")}
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="p-6 md:p-8 bg-white/[0.02] border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
//               <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500 uppercase">
//                 <Command size={14} /> {t("services.modal.systemStatus")}:{" "}
//                 {t("services.modal.optimal")}
//               </div>
//               <button
//                 onClick={() => navigate("/book")}
//                 className="w-full md:w-auto px-10 py-4 bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] rounded-xl hover:bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 hover:text-white transition-all"
//               >
//                 {t("services.modal.cta")}
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </>
//     )}
//   </AnimatePresence>
// );

//=======================================================================
//=======================================================================
import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { X, Shield, Zap, Globe, Command, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

// Refined visuals: Using deep institutional tones
const portalVisuals = {
  business: {
    gradient: "linear-gradient(135deg, #0B1320, #1E293B)",
    accent: "#3B82F6",
  },
  mobility: {
    gradient: "linear-gradient(135deg, #0B1320, #0F172A)",
    accent: "#3B82F6",
  },
  it: {
    gradient: "linear-gradient(135deg, #0B1320, #111827)",
    accent: "#3B82F6",
  },
  realestate: {
    gradient: "linear-gradient(135deg, #0B1320, #1F2937)",
    accent: "#3B82F6",
  },
  events: {
    gradient: "linear-gradient(135deg, #0B1320, #334155)",
    accent: "#3B82F6",
  },
};

export default function ServicesSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);

  const services = useMemo(
    () => [
      {
        id: "01",
        title: t("services.list.business.title"),
        description: t("services.list.business.description"),
        visual: portalVisuals.business,
      },
      {
        id: "02",
        title: t("services.list.mobility.title"),
        description: t("services.list.mobility.description"),
        visual: portalVisuals.mobility,
      },
      {
        id: "03",
        title: t("services.list.it.title"),
        description: t("services.list.it.description"),
        visual: portalVisuals.it,
      },
      {
        id: "04",
        title: t("services.list.realestate.title"),
        description: t("services.list.realestate.description"),
        visual: portalVisuals.realestate,
      },
      {
        id: "05",
        title: t("services.list.events.title"),
        description: t("services.list.events.description"),
        visual: portalVisuals.events,
      },
    ],
    [t],
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full min-h-screen py-20 md:py-32 overflow-hidden select-none bg-transparent"
    >
      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#1F2937] pb-12">
          <div className="space-y-2">
            <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-[#F5F7FA]">
              {t("services.header.core")} <br />
              <span className="text-[#3B82F6] text-2xl md:text-3xl font-light not-uppercase normal-case tracking-tight block mt-4">
                {t("services.header.protocols")
                  .split("\n")
                  .map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
              </span>
            </h2>
          </div>
          {/* <div className="bg-[#111827]/50 border border-[#1F2937] p-6 rounded-2xl backdrop-blur-md hidden lg:block font-mono text-[10px] text-[#4B5563] uppercase tracking-widest leading-relaxed">
            <p>
              {t("services.header.activeNodes")}: 0{services.length} <br />
              {t("services.header.encryption")}: AES_256_STRICT <br />
              {t("services.header.status")}:{" "}
              <span className="text-blue-500 animate-pulse">
                {t("services.header.ready")}
              </span>
            </p>
          </div> */}
        </div>

        <div className="grid grid-cols-1 gap-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedService(service)}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="service-card group relative h-[100px] md:h-[140px] bg-[#0B1320]/40 border border-[#1F2937] rounded-2xl overflow-hidden cursor-pointer flex items-center px-6 md:px-10 hover:border-[#3B82F6]/30 transition-colors"
            >
              <motion.div
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: service.visual.gradient }}
              />

              <div className="relative z-10 w-20 hidden md:block">
                <span className="text-3xl font-black font-mono text-[#1F2937] group-hover:text-[#3B82F6]/20 transition-colors duration-500">
                  {service.id}
                </span>
              </div>

              <div className="relative z-10 flex-1">
                <h3 className="text-xl md:text-4xl font-black uppercase italic tracking-tighter text-[#F5F7FA] transition-all duration-500 origin-left">
                  {service.title}
                </h3>
                <div className="flex gap-4 mt-1 overflow-hidden h-0 group-hover:h-5 transition-all duration-500 hidden md:flex">
                  <span className="text-[10px] font-mono text-[#3B82F6] uppercase tracking-widest">
                    Explore this service
                  </span>
                </div>
              </div>

              <div className="relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#1F2937] flex items-center justify-center group-hover:bg-[#3B82F6] group-hover:border-[#3B82F6] transition-all duration-500">
                  <ArrowUpRight
                    className="text-[#4B5563] group-hover:text-white transition-colors"
                    size={20}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <DetailedModal
        isOpen={!!selectedService}
        service={selectedService}
        onClose={() => setSelectedService(null)}
        navigate={navigate}
        t={t}
      />
    </section>
  );
}

const DetailedModal = ({ service, isOpen, onClose, navigate, t }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#020617]/95 backdrop-blur-2xl z-[200]"
        />
        <div className="fixed inset-0 flex items-center justify-center z-[201] p-4 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="bg-[#0B1320] border border-[#1F2937] w-full max-w-5xl rounded-[40px] overflow-hidden pointer-events-auto shadow-2xl flex flex-col max-h-[85vh]"
          >
            <div
              className="h-32 md:h-40 w-full relative"
              style={{ background: service?.visual?.gradient }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1320]" />
              <div className="absolute bottom-6 left-10">
                <p className="text-[#3B82F6] font-mono text-[10px] tracking-[0.5em] uppercase mb-1">
                  {t("services.modal.protocolActive")}
                </p>
                <h3 className="text-[#F5F7FA] text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
                  {service?.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-[#0B1320] border border-[#1F2937] flex items-center justify-center text-[#F5F7FA] hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-10 md:p-20 overflow-y-auto flex-1">
              <div className="grid lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-8">
                  <h4 className="text-[#F5F7FA] text-2xl font-black italic uppercase tracking-tighter border-l-2 border-[#3B82F6] pl-6">
                    {t("services.modal.deployment")}
                  </h4>
                  <p className="text-[#9CA3AF] text-xl leading-relaxed italic font-light">
                    {service?.description}
                  </p>
                </div>
                <div className="space-y-8 lg:border-l border-[#1F2937] lg:pl-12">
                  <div className="space-y-6">
                    <p className="text-[#4B5563] font-mono text-[10px] uppercase tracking-widest">
                      // Core_Capabilities
                    </p>
                    <ul className="space-y-4 text-sm font-medium text-[#F5F7FA]/70">
                      <li className="flex items-center gap-3">
                        <Zap size={16} className="text-[#3B82F6]" />{" "}
                        {t("services.modal.realtime")}
                      </li>
                      <li className="flex items-center gap-3">
                        <Shield size={16} className="text-[#3B82F6]" />{" "}
                        {t("services.modal.secure")}
                      </li>
                      <li className="flex items-center gap-3">
                        <Globe size={16} className="text-[#3B82F6]" />{" "}
                        {t("services.modal.global")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#111827]/50 border-t border-[#1F2937] flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3 font-mono text-[10px] text-[#4B5563] uppercase tracking-[0.2em]">
                <Command size={14} /> System_Sync:{" "}
                <span className="text-[#3B82F6] font-bold">Optimal</span>
              </div>
              <button
                onClick={() => navigate("/book")}
                className="w-full md:w-auto px-12 py-5 bg-[#3B82F6] text-white font-black uppercase text-[11px] tracking-[0.3em] rounded-2xl hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                {t("services.modal.cta")}
              </button>
            </div>
          </motion.div>
        </div>
      </>
    )}
  </AnimatePresence>
);
