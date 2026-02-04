// import React, { useState, useEffect, useRef, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { X, Shield, Zap, Globe, Command, ArrowUpRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// gsap.registerPlugin(ScrollTrigger);

// // Refined visuals: Using deep institutional tones
// const portalVisuals = {
//   business: {
//     gradient: "linear-gradient(135deg, #0B1320, #1E293B)",
//     accent: "#3B82F6",
//   },
//   mobility: {
//     gradient: "linear-gradient(135deg, #0B1320, #0F172A)",
//     accent: "#3B82F6",
//   },
//   it: {
//     gradient: "linear-gradient(135deg, #0B1320, #111827)",
//     accent: "#3B82F6",
//   },
//   realestate: {
//     gradient: "linear-gradient(135deg, #0B1320, #1F2937)",
//     accent: "#3B82F6",
//   },
//   events: {
//     gradient: "linear-gradient(135deg, #0B1320, #334155)",
//     accent: "#3B82F6",
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
//         title: t("services.list.it.title"),
//         description: t("services.list.it.description"),
//         visual: portalVisuals.it,
//       },
//       {
//         id: "02",
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
//         id: "04",
//         title: t("services.list.events.title"),
//         description: t("services.list.events.description"),
//         visual: portalVisuals.events,
//       },
//       {
//         id: "05",
//         title: t("services.list.realestate.title"),
//         description: t("services.list.realestate.description"),
//         visual: portalVisuals.realestate,
//       },
//     ],
//     [t],
//   );

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".service-card", {
//         y: 60,
//         opacity: 0,
//         stagger: 0.1,
//         duration: 1,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       });
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       id="services"
//       ref={sectionRef}
//       className="relative w-full min-h-screen py-20 md:py-32 overflow-hidden select-none bg-transparent"
//     >
//       <div className="max-w-[1500px] mx-auto px-6 relative z-10">
//         <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#1F2937] pb-12">
//           <div className="space-y-2">
//             <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-[#F5F7FA]">
//               {t("services.header.core")} <br />
//               <span className="text-[#3B82F6] text-2xl md:text-3xl font-light not-uppercase normal-case tracking-tight block mt-4">
//                 {t("services.header.protocols")
//                   .split("\n")
//                   .map((line, i) => (
//                     <span key={i} className="block">
//                       {line}
//                     </span>
//                   ))}
//               </span>
//             </h2>
//           </div>
//           {/* <div className="bg-[#111827]/50 border border-[#1F2937] p-6 rounded-2xl backdrop-blur-md hidden lg:block font-mono text-[10px] text-[#4B5563] uppercase tracking-widest leading-relaxed">
//             <p>
//               {t("services.header.activeNodes")}: 0{services.length} <br />
//               {t("services.header.encryption")}: AES_256_STRICT <br />
//               {t("services.header.status")}:{" "}
//               <span className="text-blue-500 animate-pulse">
//                 {t("services.header.ready")}
//               </span>
//             </p>
//           </div> */}
//         </div>

//         <div className="grid grid-cols-1 gap-3">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               onClick={() => setSelectedService(service)}
//               whileHover={{ x: 10 }}
//               transition={{ type: "spring", stiffness: 300, damping: 25 }}
//               className="service-card group relative h-[100px] md:h-[140px] bg-[#0B1320]/40 border border-[#1F2937] rounded-2xl overflow-hidden cursor-pointer flex items-center px-6 md:px-10 hover:border-[#3B82F6]/30 transition-colors"
//             >
//               <motion.div
//                 className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
//                 style={{ background: service.visual.gradient }}
//               />

//               <div className="relative z-10 w-20 hidden md:block">
//                 <span className="text-3xl font-black font-mono text-[#1F2937] group-hover:text-[#3B82F6]/20 transition-colors duration-500">
//                   {service.id}
//                 </span>
//               </div>

//               <div className="relative z-10 flex-1">
//                 <h3 className="text-xl md:text-4xl font-black uppercase italic tracking-tighter text-[#F5F7FA] transition-all duration-500 origin-left">
//                   {service.title}
//                 </h3>
//                 <div className="flex gap-4 mt-1 overflow-hidden h-0 group-hover:h-5 transition-all duration-500 hidden md:flex">
//                   <span className="text-[10px] font-mono text-[#3B82F6] uppercase tracking-widest">
//                     Explore this service
//                   </span>
//                 </div>
//               </div>

//               <div className="relative z-10">
//                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#1F2937] flex items-center justify-center group-hover:bg-[#3B82F6] group-hover:border-[#3B82F6] transition-all duration-500">
//                   <ArrowUpRight
//                     className="text-[#4B5563] group-hover:text-white transition-colors"
//                     size={20}
//                   />
//                 </div>
//               </div>
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
//           className="fixed inset-0 bg-[#020617]/95 backdrop-blur-2xl z-[200]"
//         />
//         <div className="fixed inset-0 flex items-center justify-center z-[201] p-4 pointer-events-none">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 30 }}
//             className="bg-[#0B1320] border border-[#1F2937] w-full max-w-5xl rounded-[40px] overflow-hidden pointer-events-auto shadow-2xl flex flex-col max-h-[85vh]"
//           >
//             <div
//               className="h-32 md:h-40 w-full relative"
//               style={{ background: service?.visual?.gradient }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1320]" />
//               <div className="absolute bottom-6 left-10">
//                 <h3 className="text-[#F5F7FA] text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
//                   {service?.title}
//                 </h3>
//               </div>
//               <button
//                 onClick={onClose}
//                 className="absolute top-8 right-8 w-12 h-12 rounded-full bg-[#0B1320] border border-[#1F2937] flex items-center justify-center text-[#F5F7FA] hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             <div className="p-10 md:p-20 overflow-y-auto flex-1">
//               <div className="grid lg:grid-cols-3 gap-16">
//                 <div className="lg:col-span-2 space-y-8">
//                   <p className="text-[#9CA3AF] text-xl leading-relaxed italic font-light">
//                     {service?.description}
//                   </p>
//                 </div>
//                 {/* <div className="space-y-8 lg:border-l border-[#1F2937] lg:pl-12">
//                   <div className="space-y-6">
//                     <p className="text-[#4B5563] font-mono text-[10px] uppercase tracking-widest">
//                       // Core_Capabilities
//                     </p>
//                     <ul className="space-y-4 text-sm font-medium text-[#F5F7FA]/70">
//                       <li className="flex items-center gap-3">
//                         <Zap size={16} className="text-[#3B82F6]" />{" "}
//                         {t("services.modal.realtime")}
//                       </li>
//                       <li className="flex items-center gap-3">
//                         <Shield size={16} className="text-[#3B82F6]" />{" "}
//                         {t("services.modal.secure")}
//                       </li>
//                       <li className="flex items-center gap-3">
//                         <Globe size={16} className="text-[#3B82F6]" />{" "}
//                         {t("services.modal.global")}
//                       </li>
//                     </ul>
//                   </div>
//                 </div> */}
//               </div>
//             </div>

//             <div className="p-8 bg-[#111827]/50 border-t border-[#1F2937] flex flex-col md:flex-row justify-between items-center gap-6">
//               <div className="flex items-center gap-3 font-mono text-[10px] text-[#4B5563] uppercase tracking-[0.2em]">
//                 {/* <Command size={14} /> System_Sync:{" "} */}
//                 <span className="text-[#3B82F6] font-bold"></span>
//               </div>
//               <button
//                 onClick={() => navigate("/book")}
//                 className="w-full md:w-auto px-12 py-5 bg-[#3B82F6] text-white font-black  text-[11px] tracking-[0.3em] rounded-2xl hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]"
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

//=============================== SERVICES ===============================
import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { X, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

/* -------------------------------- visuals -------------------------------- */

const portalVisuals = {
  business: {
    gradient: "linear-gradient(135deg, #0B1320, #1E293B)",
    accent: "#3B82F6",
  },
  mobility: {
    gradient: "linear-gradient(135deg, #0B1320, #0F172A)",
    accent: "#3B82F6",
  },
  ai: {
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

/* ================================ SECTION ================================ */

export default function ServicesSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);

  const services = useMemo(
    () => [
      { id: "01", key: "ai", visual: portalVisuals.ai },
      { id: "02", key: "business", visual: portalVisuals.business },
      { id: "03", key: "mobility", visual: portalVisuals.mobility },
      { id: "04", key: "events", visual: portalVisuals.events },
      { id: "05", key: "realestate", visual: portalVisuals.realestate },
    ],
    [],
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
      className="relative w-full min-h-screen py-20 md:py-32 overflow-hidden select-none"
    >
      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#1F2937] pb-12">
          <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-[#F5F7FA]">
            {t("services.header.core")}
            <br />
            <span className="text-[#3B82F6] text-2xl md:text-3xl font-light normal-case tracking-tight block mt-4">
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

        {/* Cards */}
        <div className="grid grid-cols-1 gap-3">
          {services.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => setSelectedService(service)}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="service-card group relative h-[100px] md:h-[140px] bg-[#0B1320]/40 border border-[#1F2937] rounded-2xl overflow-hidden cursor-pointer flex items-center px-6 md:px-10 hover:border-[#3B82F6]/30"
            >
              <motion.div
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: service.visual.gradient }}
              />

              <div className="relative z-10 w-20 hidden md:block">
                <span className="text-3xl font-black font-mono text-[#1F2937] group-hover:text-[#3B82F6]/20 transition-colors">
                  {service.id}
                </span>
              </div>

              <div className="relative z-10 flex-1">
                <h3 className="text-xl md:text-4xl font-black uppercase italic tracking-tighter text-[#F5F7FA]">
                  {t(`services.list.${service.key}.title`)}
                </h3>
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-[#1F2937] flex items-center justify-center group-hover:bg-[#3B82F6] group-hover:border-[#3B82F6] transition-all">
                  <ArrowUpRight
                    className="text-[#4B5563] group-hover:text-white"
                    size={20}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <DetailedModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        navigate={navigate}
      />
    </section>
  );
}

/* ================================ MODAL ================================ */

function DetailedModal({ service, isOpen, onClose, navigate }) {
  const { t } = useTranslation();
  if (!service) return null;

  const data = t(`services.list.${service.key}`, { returnObjects: true });

  return (
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

          <div className="fixed inset-0 z-[201] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="bg-[#0B1320] border border-[#1F2937] w-full max-w-5xl rounded-[40px] overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
            >
              {/* Header */}
              <div
                className="h-36 w-full relative"
                style={{ background: service.visual.gradient }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1320]" />
                <h3 className="absolute bottom-6 left-10 text-4xl font-black uppercase italic text-white">
                  {t(`services.list.${service.key}.title`)}
                </h3>
                <button
                  onClick={onClose}
                  className="absolute top-8 right-8 w-12 h-12 rounded-full bg-[#0B1320] border border-[#1F2937] flex items-center justify-center hover:bg-[#3B82F6]"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-10 md:p-20 overflow-y-auto flex-1 space-y-12">
                {/* Sections */}
                {data.sections &&
                  Object.values(data.sections).map((section, i) => (
                    <div key={i} className="space-y-4">
                      <h4 className="text-[#F5F7FA] text-lg font-bold uppercase">
                        {section.title}
                      </h4>

                      {section.items && (
                        <ul className="space-y-2 text-[#9CA3AF]">
                          {section.items.map((item, idx) => (
                            <li key={idx}>— {item}</li>
                          ))}
                        </ul>
                      )}

                      {Object.entries(section).map(([k, v]) =>
                        Array.isArray(v) ? (
                          <div key={k} className="mt-6">
                            <p className="text-[#3B82F6] uppercase text-sm tracking-widest">
                              {k}
                            </p>
                            <ul className="mt-2 space-y-2 text-[#9CA3AF]">
                              {v.map((x, j) => (
                                <li key={j}>— {x}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null,
                      )}
                    </div>
                  ))}

                {/* Flat items */}
                {data.items && (
                  <ul className="space-y-3 text-[#9CA3AF]">
                    {data.items.map((item, i) => (
                      <li key={i}>— {item}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Footer */}
              <div className="p-8 bg-[#111827]/50 border-t border-[#1F2937] flex justify-end">
                <button
                  onClick={() => navigate("/book")}
                  className="px-12 py-5 bg-[#3B82F6] text-white font-black text-[11px] tracking-[0.3em] rounded-2xl hover:bg-white hover:text-black transition-all"
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
}
