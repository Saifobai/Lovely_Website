// import React from "react";
// import { motion } from "framer-motion";
// import { ShieldCheck, ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function LegalInformation() {
//   const navigate = useNavigate();

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <main className="relative min-h-screen  text-white overflow-hidden selection:bg-blue-500/30">
//       {/* CINEMATIC BACKGROUND ELEMENTS */}

//       {/* HEADER NAVIGATION */}
//       <nav className="relative z-50 p-8 md:p-12">
//         <button
//           onClick={() => navigate(-1)}
//           className="group flex items-center gap-4 text-slate-500 hover:text-white transition-all"
//         >
//           <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-colors">
//             <ArrowLeft
//               size={18}
//               className="group-hover:-translate-x-1 transition-transform"
//             />
//           </div>
//           <span className="font-mono text-[10px] uppercase tracking-[0.4em]">
//             Back_To_Origin
//           </span>
//         </button>
//       </nav>

//       <div className="relative z-10 max-w-[1500px] mx-auto px-6 pb-24">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid lg:grid-cols-12 gap-16"
//         >
//           {/* LEFT COLUMN: THE TITLE AREA */}
//           <div className="lg:col-span-5 pt-10">
//             <motion.div variants={itemVariants} className="space-y-6">
//               <div className="flex items-center gap-3 text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4">
//                 <ShieldCheck size={16} /> Compliance_Dossier_001
//               </div>
//               <h1 className="text-7xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85]">
//                 Legal <br />
//                 <span className="text-blue-600">Information</span>
//               </h1>
//               <p className="text-slate-500 text-sm font-mono uppercase tracking-widest mt-8 max-w-sm leading-relaxed">
//                 Information pursuant to Section 5 of the German Digital Services
//                 Act (DDG).
//               </p>
//             </motion.div>
//           </div>

//           {/* RIGHT COLUMN: THE DATA GRID */}
//           <div className="lg:col-span-7">
//             <motion.div
//               variants={itemVariants}
//               className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 md:p-16 space-y-16"
//             >
//               {/* OPERATIONAL ENTITY */}
//               <section className="space-y-6">
//                 <h2 className="font-mono text-[10px] text-blue-500 tracking-[0.5em] uppercase border-b border-white/5 pb-4">
//                   01. Entity_Identity
//                 </h2>
//                 <div className="space-y-2">
//                   <h3 className="text-4xl font-black italic uppercase tracking-tight">
//                     Lovely
//                   </h3>
//                   <div className="flex items-start gap-4 text-slate-400 mt-4 italic">
//                     <MapPin size={18} className="text-blue-500 shrink-0 mt-1" />
//                     <p className="text-xl leading-relaxed uppercase tracking-tight">
//                       Florastraße 31
//                       <br />
//                       40217 Düsseldorf, Germany
//                     </p>
//                   </div>
//                 </div>
//               </section>

//               {/* REPRESENTATION & CONTACT */}
//               <section className="grid md:grid-cols-2 gap-12">
//                 <div className="space-y-6">
//                   <h2 className="font-mono text-[10px] text-blue-500 tracking-[0.5em] uppercase border-b border-white/5 pb-4">
//                     02. Representation
//                   </h2>
//                   <p className="text-2xl font-black italic uppercase tracking-tight">
//                     Lovely Ibañez
//                   </p>
//                 </div>
//                 <div className="space-y-6">
//                   <h2 className="font-mono text-[10px] text-blue-500 tracking-[0.5em] uppercase border-b border-white/5 pb-4">
//                     03. Contact_Protocol
//                   </h2>
//                   <div className="space-y-4">
//                     <a
//                       href="tel:+49211158698936"
//                       className="flex items-center gap-3 text-slate-300 hover:text-blue-500 transition-colors group"
//                     >
//                       <Phone size={14} className="text-blue-500" />
//                       <span className="font-mono text-sm">
//                         +49 211 158698936
//                       </span>
//                     </a>
//                     <a
//                       href="mailto:info@lovely.com.de"
//                       className="flex items-center gap-3 text-slate-300 hover:text-blue-500 transition-colors group"
//                     >
//                       <Mail size={14} className="text-blue-500" />
//                       <span className="font-mono text-sm uppercase tracking-wider">
//                         info@lovely.com.de
//                       </span>
//                     </a>
//                   </div>
//                 </div>
//               </section>

//               {/* DISPUTE RESOLUTION */}
//               <section className="space-y-6">
//                 <h2 className="font-mono text-[10px] text-blue-500 tracking-[0.5em] uppercase border-b border-white/5 pb-4">
//                   04. Arbitration_Status
//                 </h2>
//                 <div className="bg-white/5 rounded-2xl p-8 border border-white/5">
//                   <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-white">
//                     Consumer Dispute Resolution
//                   </h3>
//                   <p className="text-slate-400 text-sm leading-relaxed italic">
//                     We do not participate in dispute resolution proceedings
//                     before a consumer arbitration board and are not legally
//                     required to do so.
//                   </p>
//                 </div>
//               </section>

//               {/* DECORATIVE FOOTER WITHIN THE BOX */}
//               <div className="pt-8 flex justify-between items-center opacity-20">
//                 <span className="text-[8px] font-mono tracking-[0.5em] uppercase">
//                   Status: Official_Record
//                 </span>
//                 <span className="text-[8px] font-mono tracking-[0.5em] uppercase">
//                   Ref: DDG_5_GER
//                 </span>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>

//       {/* GIANT BACKGROUND TEXT */}
//       <div className="absolute bottom-[-5%] right-[-5%] select-none pointer-events-none opacity-[0.02]">
//         <h2 className="text-[25vw] font-black italic uppercase leading-none">
//           LEGAL
//         </h2>
//       </div>
//     </main>
//   );
// }

//============================================================================
// import React from "react";
// import { motion } from "framer-motion";
// import { ShieldCheck, ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function LegalInformation() {
//   const navigate = useNavigate();

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <main className="relative h-screen overflow-hidden text-white selection:bg-blue-500/30">
//       {/* HEADER NAVIGATION */}
//       <nav className="relative z-50 p-8 md:p-12">
//         <button
//           onClick={() => navigate(-1)}
//           className="group flex items-center gap-4 text-slate-500 hover:text-white transition-all"
//         >
//           <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-colors">
//             <ArrowLeft
//               size={18}
//               className="group-hover:-translate-x-1 transition-transform"
//             />
//           </div>
//           <span className="font-mono text-[10px] uppercase tracking-[0.4em]">
//             Back_To_Origin
//           </span>
//         </button>
//       </nav>

//       {/* MAIN CONTENT */}
//       <div className="relative z-10 max-w-[1500px] mx-auto px-6 h-[calc(100%-120px)] flex items-center">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="flex flex-col lg:flex-row gap-24 w-full"
//         >
//           {/* LEFT COLUMN */}
//           <div className="lg:w-[42%] pt-10 flex-shrink-0">
//             <motion.div variants={itemVariants} className="space-y-6">
//               <h1 className="text-7xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.85]">
//                 Legal <br />
//                 <span className="text-blue-600">Information</span>
//               </h1>

//               <p className="text-slate-500 text-sm font-mono uppercase tracking-widest mt-8 max-w-sm leading-relaxed">
//                 Information pursuant to Section 5 of the German Digital Services
//                 Act (DDG).
//               </p>
//             </motion.div>
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className="lg:w-[58%] flex items-start">
//             <motion.div
//               variants={itemVariants}
//               className="w-full bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 md:p-16 space-y-16"
//             >
//               {/* ENTITY */}
//               <section className="space-y-6">
//                 <h2 className="font-mono text-[10px] text-blue-500 tracking-[0.5em] uppercase border-b border-white/5 pb-4">
//                   01. Entity_Identity
//                 </h2>

//                 <h3 className="text-4xl font-black italic uppercase tracking-tight">
//                   Lovely
//                 </h3>

//                 <div className="flex items-start gap-4 text-slate-400 italic">
//                   <MapPin size={18} className="text-blue-500 mt-1" />
//                   <p className="text-xl uppercase tracking-tight leading-relaxed">
//                     Florastraße 31
//                     <br />
//                     40217 Düsseldorf, Germany
//                   </p>
//                 </div>
//               </section>

//               {/* REPRESENTATION + CONTACT */}
//               <section className="flex flex-col md:flex-row gap-16">
//                 <div className="flex-1 space-y-6">
//                   <h2 className="font-mono text-[10px] text-blue-500 tracking-[0.5em] uppercase border-b border-white/5 pb-4">
//                     02. Representation
//                   </h2>
//                   <p className="text-2xl font-black italic uppercase tracking-tight">
//                     Lovely Ibañez
//                   </p>
//                 </div>

//                 <div className="flex-1 space-y-6">
//                   <h2 className="font-mono text-[10px] text-blue-500 tracking-[0.5em] uppercase border-b border-white/5 pb-4">
//                     03. Contact_Protocol
//                   </h2>

//                   <div className="space-y-4">
//                     <a
//                       href="tel:+49211158698936"
//                       className="flex items-center gap-3 text-slate-300 hover:text-blue-500 transition-colors"
//                     >
//                       <Phone size={14} className="text-blue-500" />
//                       <span className="font-mono text-sm">
//                         +49 211 158698936
//                       </span>
//                     </a>

//                     <a
//                       href="mailto:info@lovely.com.de"
//                       className="flex items-center gap-3 text-slate-300 hover:text-blue-500 transition-colors"
//                     >
//                       <Mail size={14} className="text-blue-500" />
//                       <span className="font-mono text-sm uppercase tracking-wider">
//                         info@lovely.com.de
//                       </span>
//                     </a>
//                   </div>
//                 </div>
//               </section>

//               {/* DISPUTE */}
//               <section className="space-y-6">
//                 <h2 className="font-mono text-[10px] text-blue-500 tracking-[0.5em] uppercase border-b border-white/5 pb-4">
//                   04. Arbitration_Status
//                 </h2>

//                 <div className="bg-white/5 rounded-2xl p-8 border border-white/5">
//                   <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4">
//                     Consumer Dispute Resolution
//                   </h3>
//                   <p className="text-slate-400 text-sm leading-relaxed italic">
//                     We do not participate in dispute resolution proceedings
//                     before a consumer arbitration board and are not legally
//                     required to do so.
//                   </p>
//                 </div>
//               </section>

//               {/* FOOTER */}
//               <div className="pt-8 flex justify-between items-center opacity-20">
//                 <span className="text-[8px] font-mono tracking-[0.5em] uppercase">
//                   Status: Official_Record
//                 </span>
//                 <span className="text-[8px] font-mono tracking-[0.5em] uppercase">
//                   Ref: DDG_5_GER
//                 </span>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>

//       {/* GIANT BACKGROUND TEXT */}
//       <div className="absolute bottom-[-5%] right-[-5%] pointer-events-none select-none opacity-[0.02]">
//         <h2 className="text-[25vw] font-black italic uppercase leading-none">
//           LEGAL
//         </h2>
//       </div>
//     </main>
//   );
// }

//============================================================================
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LegalInformation() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="relative h-screen overflow-hidden text-white selection:bg-blue-500/30">
      {/* HEADER NAVIGATION */}
      <nav className="relative z-50 p-8 md:p-12">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-4 text-slate-500 hover:text-white transition-all"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-colors">
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.4em]">
            Back_To_Home
          </span>
        </button>
      </nav>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 h-[calc(100%-120px)]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row gap-24 w-full items-start"
        >
          {/* LEFT COLUMN */}
          <div className="lg:w-[42%] pt-10 flex-shrink-0">
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-7xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.85]">
                Legal <br />
                <span className="text-blue-600">Information</span>
              </h1>

              <p className="text-slate-500 text-sm font-mono uppercase tracking-widest mt-8 max-w-sm leading-relaxed">
                Information pursuant to Section 5 of the German Digital Services
                Act (DDG).
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:w-[58%] flex items-start">
            <motion.div
              variants={itemVariants}
              className="w-full max-h-[78vh] overflow-hidden
                         bg-white/[0.02] backdrop-blur-3xl
                         border border-white/10 rounded-[40px]
                         p-8 md:p-16 space-y-16"
            >
              {/* ENTITY */}
              <section className="space-y-6">
                <h3 className="text-4xl font-black italic uppercase tracking-tight">
                  Lovely
                </h3>

                <div className="flex items-start gap-4 text-slate-400 italic">
                  <MapPin size={18} className="text-blue-500 mt-1" />
                  <p className="text-xl uppercase tracking-tight leading-relaxed">
                    Florastraße 31
                    <br />
                    40217 Düsseldorf, Germany
                  </p>
                </div>
              </section>

              {/* REPRESENTATION + CONTACT */}
              <section className="flex flex-col md:flex-row gap-16">
                <div className="flex-1 space-y-6">
                  <p className="text-2xl font-black italic uppercase tracking-tight">
                    Lovely Ibañez
                  </p>
                </div>

                <div className="flex-1 space-y-6">
                  <div className="space-y-4">
                    <a
                      href="tel:+49211158698936"
                      className="flex items-center gap-3 text-slate-300 hover:text-blue-500 transition-colors"
                    >
                      <Phone size={14} className="text-blue-500" />
                      <span className="font-mono text-sm">
                        +49 211 158698936
                      </span>
                    </a>

                    <a
                      href="mailto:info@lovely.com.de"
                      className="flex items-center gap-3 text-slate-300 hover:text-blue-500 transition-colors"
                    >
                      <Mail size={14} className="text-blue-500" />
                      <span className="font-mono text-sm  tracking-wider">
                        info@lovely.com.de
                      </span>
                    </a>
                  </div>
                </div>
              </section>

              {/* DISPUTE */}
              <section className="space-y-6">
                <div className="bg-white/5 rounded-2xl p-8 border border-white/5">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4">
                    Consumer Dispute Resolution
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed italic">
                    We do not participate in dispute resolution proceedings
                    before a consumer arbitration board and are not legally
                    required to do so.
                  </p>
                </div>
              </section>

              {/* FOOTER */}
              <div className="pt-8 flex justify-between items-center opacity-20">
                <span className="text-[8px] font-mono tracking-[0.5em] uppercase">
                  Status: Official_Record
                </span>
                <span className="text-[8px] font-mono tracking-[0.5em] uppercase">
                  Ref: DDG_5_GER
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* GIANT BACKGROUND TEXT */}
      <div className="absolute bottom-[-5%] right-[-5%] pointer-events-none select-none opacity-[0.02]">
        <h2 className="text-[25vw] font-black italic uppercase leading-none">
          LEGAL
        </h2>
      </div>
    </main>
  );
}
