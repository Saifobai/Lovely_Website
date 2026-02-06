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

// function DetailedModal({ service, isOpen, onClose, navigate }) {
//   const { t } = useTranslation();
//   if (!service) return null;

//   const data = t(`services.list.${service.key}`, { returnObjects: true });

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-[#020617]/95 backdrop-blur-2xl z-[200]"
//           />

//           <div className="fixed inset-0 z-[201] flex items-center justify-center p-4">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 30 }}
//               className="bg-[#0B1320] border border-[#1F2937] w-full max-w-5xl rounded-[40px] overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
//             >
//               {/* Header */}
//               <div
//                 className="h-36 w-full relative"
//                 style={{ background: service.visual.gradient }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1320]" />

//                 {/* Title + Subtitle */}
//                 <div className="absolute bottom-6 left-10">
//                   <h3 className="text-4xl font-black uppercase italic text-white leading-tight">
//                     {t(`services.list.${service.key}.title`)}
//                   </h3>
//                   <p className="text-lg font-semibold italic text-slate-300">
//                     {t(`services.list.${service.key}.description`)}
//                   </p>
//                 </div>

//                 {/* Close button */}
//                 <button
//                   onClick={onClose}
//                   className="absolute top-8 right-8 w-12 h-12 rounded-full bg-[#0B1320] border border-[#1F2937] flex items-center justify-center hover:bg-[#3B82F6]"
//                 >
//                   <X size={20} />
//                 </button>
//               </div>

//               {/* Content */}
//               <div className="p-10 md:p-20 overflow-y-auto flex-1 space-y-12">
//                 {/* Sections */}
//                 {data.sections &&
//                   Object.values(data.sections).map((section, i) => (
//                     <div key={i} className="space-y-4">
//                       <h4 className="text-[#F5F7FA] text-lg font-bold uppercase">
//                         {section.title}
//                       </h4>

//                       {section.items && (
//                         <ul className="space-y-2 text-[#9CA3AF]">
//                           {section.items.map((item, idx) => (
//                             <li key={idx}> {item}</li>
//                           ))}
//                         </ul>
//                       )}

//                       {Object.entries(section).map(([k, v]) =>
//                         Array.isArray(v) ? (
//                           <div key={k} className="mt-6">
//                             <p className="text-[#3B82F6] uppercase text-sm tracking-widest">
//                               {k}
//                             </p>
//                             <ul className="mt-2 space-y-2 text-[#9CA3AF]">
//                               {v.map((x, j) => (
//                                 <li key={j}> {x}</li>
//                               ))}
//                             </ul>
//                           </div>
//                         ) : null,
//                       )}
//                     </div>
//                   ))}

//                 {/* Flat items */}
//                 {data.items && (
//                   <ul className="space-y-3 text-[#9CA3AF]">
//                     {data.items.map((item, i) => (
//                       <li key={i}> {item}</li>
//                     ))}
//                   </ul>
//                 )}
//               </div>

//               {/* Footer */}
//               <div className="p-8 bg-[#111827]/50 border-t border-[#1F2937] flex justify-end">
//                 <button
//                   onClick={() => navigate("/book")}
//                   className="px-12 py-5 bg-[#3B82F6] text-white font-black text-[11px] tracking-[0.3em] rounded-2xl hover:bg-white hover:text-black transition-all"
//                 >
//                   {t("services.modal.cta")}
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }

//===============================================================
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
              className="bg-[#0B1320] border border-[#1F2937] w-full max-w-5xl rounded-[40px] overflow-hidden shadow-2xl flex flex-col h-[65vh]"
            >
              {/* Header */}
              <div
                className="h-36 w-full relative"
                style={{ background: service.visual.gradient }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1320]" />

                {/* Title + Subtitle */}
                <div className="absolute bottom-6 left-10">
                  <h3 className="text-4xl font-black uppercase italic text-white leading-tight">
                    {t(`services.list.${service.key}.title`)}
                  </h3>
                  <p className="text-lg font-semibold italic text-slate-300">
                    {t(`services.list.${service.key}.description`)}
                  </p>
                </div>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-8 right-8 w-12 h-12 rounded-full bg-[#0B1320] border border-[#1F2937] flex items-center justify-center hover:bg-[#3B82F6]"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-10 md:p-20 overflow-y-auto flex-1 space-y-12">
                {data.sections &&
                  Object.values(data.sections).map((section, i) => (
                    <div key={i} className="space-y-4">
                      <h4 className="text-[#F5F7FA] text-lg font-bold uppercase">
                        {section.title}
                      </h4>

                      {section.items && (
                        <ul className="space-y-2 text-[#9CA3AF]">
                          {section.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
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
                                <li key={j}>{x}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null,
                      )}
                    </div>
                  ))}

                {data.items && (
                  <ul className="space-y-3 text-[#9CA3AF]">
                    {data.items.map((item, i) => (
                      <li key={i}>{item}</li>
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
