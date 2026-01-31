// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Compass, Eye, Heart, Layers, CheckCircle2 } from "lucide-react";

// const principles = [
//   {
//     title: "Deep Understanding",
//     desc: "We start by listening, not assuming.",
//     icon: <Compass size={20} />,
//   },
//   {
//     title: "Shared Perspective",
//     desc: "We align on success before designing solutions.",
//     icon: <Eye size={20} />,
//   },
//   {
//     title: "Long-Term Partnership",
//     desc: "We support today’s decisions with tomorrow in mind.",
//     icon: <Heart size={20} />,
//   },
// ];

// const processSteps = [
//   { step: "01", title: "Objectives", desc: "Understand objectives" },
//   { step: "02", title: "Roadmap", desc: "Develop roadmap" },
//   { step: "03", title: "Coordinate", desc: "Coordinate partners" },
//   { step: "04", title: "Completion", desc: "Support implementation" },
// ];

// export default function Together() {
//   // Master index: 0-2 (Principles), 3-6 (Process Steps)
//   const [masterIndex, setMasterIndex] = useState(0);
//   const totalSteps = principles.length + processSteps.length;

//   useEffect(() => {
//     const sequenceTimer = setInterval(() => {
//       setMasterIndex((prev) => (prev + 1) % totalSteps);
//     }, 2500); // Adjust timing for the whole flow
//     return () => clearInterval(sequenceTimer);
//   }, [totalSteps]);

//   return (
//     <section
//       id="together"
//       className="relative py-40 px-6 bg-transparent overflow-hidden"
//     >
//       {/* SECTION 1: PRINCIPLES */}
//       <div className="max-w-[1500px] mx-auto mb-40">
//         <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
//           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
//             <h3 className="text-5xl md:text-6xl font-black italic uppercase leading-[0.9] tracking-tighter text-white">
//               “Together” Isn’t a Slogan.
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-red-500">
//                 How Results Are Built.
//               </span>
//             </h3>
//           </motion.div>
//           <p className="text-xl md:text-2xl text-slate-400 italic border-l border-white/10 pl-10">
//             Collaboration is our foundation. We walk with you through every
//             milestone.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {principles.map((p, i) => {
//             const isActive = masterIndex === i;
//             return (
//               <div
//                 key={i}
//                 className={`relative p-8 rounded-[32px] transition-all duration-1000 border ${
//                   isActive
//                     ? "bg-white/[0.05] border-white/20 shadow-[0_0_50px_rgba(59,130,246,0.15)] scale-[1.02] opacity-100"
//                     : "bg-white/[0.01] border-white/5 opacity-30 scale-100"
//                 }`}
//               >
//                 {isActive && (
//                   <motion.div
//                     layoutId="syncBar"
//                     className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500"
//                   />
//                 )}
//                 <div
//                   className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
//                     isActive
//                       ? "bg-blue-500/20 text-blue-400"
//                       : "bg-white/5 text-slate-500"
//                   }`}
//                 >
//                   {p.icon}
//                 </div>
//                 <h4 className="text-white font-bold text-xl mb-2 italic uppercase">
//                   {p.title}
//                 </h4>
//                 <p className="text-slate-400 text-sm">{p.desc}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* SECTION 2: HOW WE WORK (SYNCED) */}
//       <div className="max-w-[1200px] mx-auto relative">
//         <div className="text-center mb-24">
//           <h2 className="text-4xl md:text-5xl font-black italic uppercase text-white tracking-tighter">
//             How We{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
//               Work
//             </span>
//           </h2>
//         </div>

//         <div className="relative grid gap-12 md:gap-0 md:flex md:justify-between items-start">
//           {/* Global Progress Line */}
//           <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-white/5">
//             <motion.div
//               animate={{
//                 width:
//                   masterIndex >= 3
//                     ? `${((masterIndex - 3) / (processSteps.length - 1)) * 100}%`
//                     : "0%",
//               }}
//               className="h-full bg-gradient-to-r from-blue-500 to-red-500"
//             />
//           </div>

//           {processSteps.map((s, i) => {
//             const stepIndex = i + 3; // Offset by principles length
//             const isActive = masterIndex === stepIndex;
//             const isCompleted = masterIndex > stepIndex;

//             return (
//               <div
//                 key={i}
//                 className="relative z-10 md:w-1/4 px-4 transition-all duration-700"
//               >
//                 <div
//                   className={`w-20 h-20 rounded-full bg-black border-2 transition-all duration-700 flex items-center justify-center mb-8 mx-auto relative ${
//                     isActive
//                       ? "border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)] scale-110"
//                       : "border-white/10 opacity-30"
//                   }`}
//                 >
//                   <span
//                     className={`text-2xl font-black italic ${isActive ? "text-red-400" : "text-white/20"}`}
//                   >
//                     {s.step}
//                   </span>
//                   {isActive && (
//                     <motion.div
//                       initial={{ scale: 0.8, opacity: 0.5 }}
//                       animate={{ scale: 1.6, opacity: 0 }}
//                       transition={{ repeat: Infinity, duration: 1.2 }}
//                       className="absolute inset-0 rounded-full border border-red-500"
//                     />
//                   )}
//                 </div>

//                 <div
//                   className={`text-center transition-all duration-700 ${isActive ? "opacity-100 translate-y-0" : "opacity-20 translate-y-2"}`}
//                 >
//                   <h4 className="text-white font-black italic uppercase text-sm mb-2">
//                     {s.title}
//                   </h4>
//                   <p className="text-slate-500 text-[10px] font-mono uppercase leading-tight">
//                     {s.desc}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* BELIEF FOOTER */}
//       <motion.div
//         animate={
//           masterIndex === totalSteps - 1
//             ? { scale: 1.02, borderColor: "rgba(255,255,255,0.2)" }
//             : { scale: 1 }
//         }
//         className="mt-40 max-w-4xl mx-auto p-12 rounded-[50px] bg-white/[0.02] border border-white/5 text-center relative overflow-hidden"
//       >
//         <Layers className="mx-auto mb-8 text-red-500 opacity-50" size={40} />
//         <h4 className="text-2xl font-bold italic text-white mb-6 uppercase tracking-tighter">
//           Success is measured by the difference it makes for you.
//         </h4>
//         <div className="flex flex-wrap justify-center gap-6">
//           {["Partnership Focused", "Result Driven", "Post-Implementation"].map(
//             (text, i) => (
//               <span
//                 key={i}
//                 className="flex items-center gap-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest"
//               >
//                 <CheckCircle2 size={12} className="text-green-500" /> {text}
//               </span>
//             ),
//           )}
//         </div>
//       </motion.div>
//     </section>
//   );
// }

//=====================================================================
//=====================================================================
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Compass, Eye, Heart, Layers, CheckCircle2 } from "lucide-react";

// const principles = [
//   {
//     title: "Deep Understanding",
//     desc: "We start by listening, not assuming.",
//     icon: <Compass size={20} />,
//   },
//   {
//     title: "Shared Perspective",
//     desc: "We align on success before designing solutions.",
//     icon: <Eye size={20} />,
//   },
//   {
//     title: "Long-Term Partnership",
//     desc: "We support today’s decisions with tomorrow in mind.",
//     icon: <Heart size={20} />,
//   },
// ];

// const processSteps = [
//   { step: "01", title: "Objectives", desc: "Identify key outcomes" },
//   { step: "02", title: "Roadmap", desc: "Strategic architecture" },
//   { step: "03", title: "Coordinate", desc: "Expert synchronization" },
//   { step: "04", title: "Completion", desc: "Sustained implementation" },
// ];

// export default function Together() {
//   const [masterIndex, setMasterIndex] = useState(0);
//   const totalSteps = principles.length + processSteps.length;

//   useEffect(() => {
//     const sequenceTimer = setInterval(() => {
//       setMasterIndex((prev) => (prev + 1) % totalSteps);
//     }, 3000);
//     return () => clearInterval(sequenceTimer);
//   }, [totalSteps]);

//   return (
//     <section
//       id="together"
//       className="relative py-40 px-6 bg-transparent overflow-hidden"
//     >
//       {/* SECTION 1: PRINCIPLES */}
//       <div className="max-w-[1500px] mx-auto mb-40">
//         <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
//           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
//             <h3 className="text-5xl md:text-5xl font-black italic uppercase leading-[0.85] tracking-tighter text-[#F5F7FA]">
//               “Together” Isn’t a Slogan. <br />
//               <span className="text-[#3B82F6]">How Results Are Built.</span>
//             </h3>
//           </motion.div>
//           <p className="text-xl md:text-2xl text-[#9CA3AF] italic border-l border-[#C2413A]/40 pl-10">
//             Collaboration is our foundation. We walk with you through every
//             strategic milestone.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {principles.map((p, i) => {
//             const isActive = masterIndex === i;
//             return (
//               <div
//                 key={i}
//                 className={`relative p-8 rounded-[40px] transition-all duration-1000 border ${
//                   isActive
//                     ? "bg-[#111827]/40 border-[#3B82F6]/30 shadow-2xl scale-[1.02] opacity-100"
//                     : "bg-transparent border-transparent opacity-40 scale-100"
//                 }`}
//               >
//                 {isActive && (
//                   <motion.div
//                     layoutId="syncBar"
//                     className="absolute top-0 left-10 right-10 h-[2px] bg-[#3B82F6]"
//                   />
//                 )}
//                 <div
//                   className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${
//                     isActive
//                       ? "bg-[#3B82F6]/10 text-[#3B82F6]"
//                       : "bg-[#111827] text-[#4B5563]"
//                   }`}
//                 >
//                   {p.icon}
//                 </div>
//                 <h4 className="text-[#F5F7FA] font-black text-2xl mb-3 italic uppercase tracking-tighter">
//                   {p.title}
//                 </h4>
//                 <p className="text-[#9CA3AF] text-lg font-medium italic">
//                   {p.desc}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* SECTION 2: PROCESS FLOW */}
//       <div className="max-w-[1200px] mx-auto relative">
//         <div className="text-center mb-24">
//           <h2 className="text-[#F5F7FA] font-mono text-sm tracking-[0.6em] uppercase opacity-30">
//             Execution Framework
//           </h2>
//         </div>

//         <div className="relative grid gap-12 md:gap-0 md:flex md:justify-between items-start">
//           {/* Global Progress Line */}
//           <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-[#1F2937]">
//             <motion.div
//               animate={{
//                 width:
//                   masterIndex >= 3
//                     ? `${((masterIndex - 3) / (processSteps.length - 1)) * 100}%`
//                     : "0%",
//               }}
//               className="h-full bg-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.5)]"
//             />
//           </div>

//           {processSteps.map((s, i) => {
//             const stepIndex = i + 3;
//             const isActive = masterIndex === stepIndex;

//             return (
//               <div
//                 key={i}
//                 className="relative z-10 md:w-1/4 px-4 transition-all duration-700"
//               >
//                 <div
//                   className={`w-24 h-24 rounded-full bg-[#0B1320] border transition-all duration-700 flex items-center justify-center mb-8 mx-auto relative ${
//                     isActive
//                       ? "border-[#3B82F6] shadow-[0_0_40px_rgba(194,65,58,0.3)] scale-110"
//                       : "border-[#1F2937] opacity-20"
//                   }`}
//                 >
//                   <span
//                     className={`text-3xl font-black italic ${isActive ? "text-[#3B82F6]" : "text-[#4B5563]"}`}
//                   >
//                     {s.step}
//                   </span>
//                   {isActive && (
//                     <motion.div
//                       initial={{ scale: 0.8, opacity: 0.5 }}
//                       animate={{ scale: 1.4, opacity: 0 }}
//                       transition={{ repeat: Infinity, duration: 2 }}
//                       className="absolute inset-0 rounded-full border border-[#C2413A]"
//                     />
//                   )}
//                 </div>

//                 <div
//                   className={`text-center transition-all duration-700 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
//                 >
//                   <h4 className="text-[#F5F7FA] font-black italic uppercase text-lg mb-2 tracking-tighter">
//                     {s.title}
//                   </h4>
//                   <p className="text-[#3B82F6] text-[10px] font-mono uppercase tracking-[0.2em]">
//                     {s.desc}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* INSTITUTIONAL BELIEF FOOTER */}
//       <motion.div
//         animate={
//           masterIndex === totalSteps - 1
//             ? { scale: 1.01, borderColor: "rgba(59, 130, 246, 0.3)" }
//             : { scale: 1 }
//         }
//         className="mt-40 max-w-5xl mx-auto p-16 rounded-[60px] bg-[#111827]/30 border border-[#1F2937] text-center relative overflow-hidden backdrop-blur-sm"
//       >
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#3B82F6]/20 to-transparent" />

//         <h4 className="text-3xl md:text-4xl font-black italic text-[#F5F7FA] mb-8 uppercase tracking-tighter max-w-3xl mx-auto leading-tight">
//           Success is measured by the clarity of the path and the strength of the
//           outcome.
//         </h4>

//         <div className="flex flex-wrap justify-center gap-10">
//           {[
//             "Institutional Precision",
//             "Absolute Discretion",
//             "End-to-End Coordination",
//           ].map((text, i) => (
//             <span
//               key={i}
//               className="flex items-center gap-3 text-[11px] font-mono text-[#9CA3AF] uppercase tracking-[0.3em]"
//             >
//               <CheckCircle2 size={14} className="text-[#3B82F6]" /> {text}
//             </span>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }

////=====================================================================
//=====================================================================
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Compass, Eye, Heart, CheckCircle2 } from "lucide-react";

const principles = [
  {
    title: "Deep Understanding",
    desc: "We start by listening, not assuming.",
    icon: <Compass size={20} />,
  },
  {
    title: "Shared Perspective",
    desc: "We align on success before designing solutions.",
    icon: <Eye size={20} />,
  },
  {
    title: "Long-Term Partnership",
    desc: "We support today’s decisions with tomorrow in mind.",
    icon: <Heart size={20} />,
  },
];

const processSteps = [
  { step: "01", title: "Objectives", desc: "Identify key outcomes" },
  { step: "02", title: "Roadmap", desc: "Strategic architecture" },
  { step: "03", title: "Coordinate", desc: "Expert synchronization" },
  { step: "04", title: "Completion", desc: "Sustained implementation" },
];

export default function Together() {
  const [masterIndex, setMasterIndex] = useState(0);
  const totalSteps = principles.length + processSteps.length;

  useEffect(() => {
    const sequenceTimer = setInterval(() => {
      setMasterIndex((prev) => (prev + 1) % totalSteps);
    }, 3000);
    return () => clearInterval(sequenceTimer);
  }, [totalSteps]);

  return (
    <section
      id="together"
      className="relative py-40 px-6 bg-transparent overflow-hidden"
    >
      {/* WIDTH CONTAINER */}
      <div className="max-w-[1350px] mx-auto">
        {/* SECTION 1: PRINCIPLES */}
        <div className="mb-40">
          {/* HEADER */}
          <div className="flex flex-col lg:flex-row gap-20 items-end mb-24">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <h3 className="text-5xl md:text-5xl font-black italic uppercase leading-[0.85] tracking-tighter text-[#F5F7FA]">
                “Together” Isn’t a Slogan. <br />
                <span className="text-[#3B82F6]">How Results Are Built.</span>
              </h3>
            </motion.div>

            <p className="text-xl md:text-2xl text-[#9CA3AF] italic border-l border-[#C2413A]/40 pl-10 max-w-xl">
              Collaboration is our foundation. We walk with you through every
              strategic milestone.
            </p>
          </div>

          {/* PRINCIPLES */}
          <div className="flex flex-col md:flex-row gap-8">
            {principles.map((p, i) => {
              const isActive = masterIndex === i;
              return (
                <div
                  key={i}
                  className={`relative p-8 rounded-[40px] transition-all duration-1000 border flex-1 ${
                    isActive
                      ? "bg-[#111827]/40 border-[#3B82F6]/30 shadow-2xl scale-[1.02] opacity-100"
                      : "bg-transparent border-transparent opacity-40 scale-100"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="syncBar"
                      className="absolute top-0 left-10 right-10 h-[2px] bg-[#3B82F6]"
                    />
                  )}

                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${
                      isActive
                        ? "bg-[#3B82F6]/10 text-[#3B82F6]"
                        : "bg-[#111827] text-[#4B5563]"
                    }`}
                  >
                    {p.icon}
                  </div>

                  <h4 className="text-[#F5F7FA] font-black text-2xl mb-3 italic uppercase tracking-tighter">
                    {p.title}
                  </h4>
                  <p className="text-[#9CA3AF] text-lg font-medium italic">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: PROCESS FLOW */}
        <div className="max-w-[1200px] mx-auto relative">
          <div className="text-center mb-24">
            <h2 className="text-[#F5F7FA] font-mono text-sm tracking-[0.6em] uppercase opacity-30">
              Execution Framework
            </h2>
          </div>

          <div className="relative grid gap-12 md:gap-0 md:flex md:justify-between items-start">
            {/* Global Progress Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-[#1F2937]">
              <motion.div
                animate={{
                  width:
                    masterIndex >= 3
                      ? `${
                          ((masterIndex - 3) / (processSteps.length - 1)) * 100
                        }%`
                      : "0%",
                }}
                className="h-full bg-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              />
            </div>

            {processSteps.map((s, i) => {
              const stepIndex = i + 3;
              const isActive = masterIndex === stepIndex;

              return (
                <div
                  key={i}
                  className="relative z-10 md:w-1/4 px-4 transition-all duration-700"
                >
                  <div
                    className={`w-24 h-24 rounded-full bg-[#0B1320] border transition-all duration-700 flex items-center justify-center mb-8 mx-auto relative ${
                      isActive
                        ? "border-[#3B82F6] shadow-[0_0_40px_rgba(194,65,58,0.3)] scale-110"
                        : "border-[#1F2937] opacity-20"
                    }`}
                  >
                    <span
                      className={`text-3xl font-black italic ${
                        isActive ? "text-[#3B82F6]" : "text-[#4B5563]"
                      }`}
                    >
                      {s.step}
                    </span>

                    {isActive && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{ scale: 1.4, opacity: 0 }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 rounded-full border border-[#C2413A]"
                      />
                    )}
                  </div>

                  <div
                    className={`text-center transition-all duration-700 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <h4 className="text-[#F5F7FA] font-black italic uppercase text-lg mb-2 tracking-tighter">
                      {s.title}
                    </h4>
                    <p className="text-[#3B82F6] text-[10px] font-mono uppercase tracking-[0.2em]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FOOTER */}
        <motion.div
          animate={
            masterIndex === totalSteps - 1
              ? { scale: 1.01, borderColor: "rgba(59, 130, 246, 0.3)" }
              : { scale: 1 }
          }
          className="mt-40 max-w-5xl mx-auto p-16 rounded-[60px] bg-[#111827]/30 border border-[#1F2937] text-center relative overflow-hidden backdrop-blur-sm"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#3B82F6]/20 to-transparent" />

          <h4 className="text-3xl md:text-4xl font-black italic text-[#F5F7FA] mb-8 uppercase tracking-tighter max-w-3xl mx-auto leading-tight">
            Success is measured by the clarity of the path and the strength of
            the outcome.
          </h4>

          <div className="flex flex-wrap justify-center gap-10">
            {[
              "Institutional Precision",
              "Absolute Discretion",
              "End-to-End Coordination",
            ].map((text, i) => (
              <span
                key={i}
                className="flex items-center gap-3 text-[11px] font-mono text-[#9CA3AF] uppercase tracking-[0.3em]"
              >
                <CheckCircle2 size={14} className="text-[#3B82F6]" /> {text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
