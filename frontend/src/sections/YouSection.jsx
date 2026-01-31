// import React from "react";
// import { motion } from "framer-motion";
// import { ShieldCheck, Focus, MessageSquareQuote, Target } from "lucide-react";
// import Section from "../components/layout/Section";

// const bulletPoints = [
//   {
//     text: "You don’t need more advice.",
//     icon: <MessageSquareQuote size={18} />,
//     label: "DATA_REDUNDANCY",
//   },
//   {
//     text: "You need clearer thinking.",
//     icon: <Focus size={18} />,
//     label: "NEURAL_CLARITY",
//   },
//   {
//     text: "You face complex decisions.",
//     icon: <ShieldCheck size={18} />,
//     label: "STRATEGIC_RISK",
//   },
// ];

// export default function YouSection() {
//   return (
//     <Section id="you" className="relative py-24 bg-transparent overflow-hidden">
//       {/* 1. REFINED HUD BACKGROUND (Subtle Glows) */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent" />
//         <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-red-400/20 to-transparent" />

//         {/* Softened Color Blobs */}
//         <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/5 blur-[100px] rounded-full" />
//         <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-red-500/5 blur-[100px] rounded-full" />
//       </div>

//       <div className="max-w-[1400px] mx-auto relative z-10 px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* LEFT SIDE: TARGET IDENTIFICATION */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//             className="space-y-10"
//           >
//             <div className="flex items-center gap-3"></div>

//             <h2 className="text-7xl md:text-[110px] font-black italic text-white uppercase leading-[0.8] tracking-tighter">
//               YOU<span className="text-red-500/80"></span>
//             </h2>

//             <div className="space-y-8">
//               {bulletPoints.map((item, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.1 }}
//                   className="flex items-start gap-6 group"
//                 >
//                   <div className="relative mt-1">
//                     <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/40 transition-all duration-500">
//                       <div className="text-slate-400 group-hover:text-blue-400 transition-colors">
//                         {item.icon}
//                       </div>
//                     </div>
//                   </div>

//                   <p className="text-3xl md:text-4xl font-bold italic text-slate-500 group-hover:text-slate-200 transition-all duration-500 tracking-tighter leading-none">
//                     {item.text}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* RIGHT SIDE: THE TRICOLOR PROTOCOL CARD */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="relative p-10 md:p-16 rounded-[40px] bg-neutral-900/40 border border-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden group"
//           >
//             {/* Very Subtle Laser Line */}
//             <motion.div
//               animate={{ y: ["-100%", "300%"] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//               className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
//             />

//             <div className="space-y-8 relative z-10">
//               <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed italic">
//                 You balance{" "}
//                 <span className="text-slate-400 font-bold">ambition</span> with{" "}
//                 <span className="text-slate-400 font-bold">responsibility</span>
//                 . <br />
//                 You want <span className="text-white">clarity</span>, not noise.
//               </p>

//               <div className="h-[1px] w-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-red-500/20" />

//               <div className="space-y-5">
//                 {[
//                   { id: "01", text: "We start with listening." },
//                   { id: "02", text: "We work around your context." },
//                   { id: "03", text: "We focus on what truly matters." },
//                 ].map((item, idx) => (
//                   <div key={idx} className="flex items-center gap-4 group/item">
//                     <span className="font-mono text-[9px] text-red-500/60 font-black">
//                       {item.id}
//                     </span>
//                     <span className="text-xs font-mono text-slate-500 uppercase tracking-widest group-hover/item:text-slate-200 transition-colors">
//                       {item.text}
//                     </span>
//                     <div className="h-[1px] flex-1 bg-white/5 group-hover/item:bg-white/10 transition-all" />
//                   </div>
//                 ))}
//               </div>

//               <div className="pt-6 space-y-4">
//                 <h4 className="text-3xl md:text-5xl font-black italic uppercase leading-[0.9] text-white tracking-tighter">
//                   Challenges deserve <br />
//                   <span className="text-blue-500/80 text-2xl md:text-4xl block mt-2">
//                     more than templates.
//                   </span>
//                 </h4>
//                 <p className="text-4xl md:text-6xl font-black italic uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400/80 via-purple-400/80 to-red-400/80 tracking-tighter leading-[0.9]">
//                   They deserve <br /> understanding.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* FOOTER MINI VISUALIZER */}
//       <div className="mt-20 flex justify-center opacity-10">
//         <div className="flex items-end gap-1 h-8">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               animate={{ height: [2, Math.random() * 20 + 5, 2] }}
//               transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
//               className={`w-[1px] ${i % 2 === 0 ? "bg-blue-400" : "bg-red-400"}`}
//             />
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }

//================================================================
// import React from "react";
// import { motion } from "framer-motion";
// import { ShieldCheck, Focus, MessageSquareQuote, Target } from "lucide-react";
// import Section from "../components/layout/Section";

// const bulletPoints = [
//   {
//     text: "Shape capital, companies, and lives.",
//     icon: <MessageSquareQuote size={18} />,
//     label: "IMPACT_ANALYSIS",
//   },
//   {
//     text: "Balance growth with risk and speed.",
//     icon: <Focus size={18} />,
//     label: "STRUCTURAL_EQUILIBRIUM",
//   },
//   {
//     text: "Vision meeting execution.",
//     icon: <ShieldCheck size={18} />,
//     label: "STRATEGIC_ALIGNMENT",
//   },
// ];

// export default function YouSection() {
//   return (
//     <Section id="you" className="relative py-24 bg-transparent overflow-hidden">
//       {/* 1. REFINED HUD BACKGROUND */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent" />
//         <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-red-400/20 to-transparent" />

//         <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/5 blur-[100px] rounded-full" />
//         <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-red-500/5 blur-[100px] rounded-full" />
//       </div>

//       <div className="max-w-[1400px] mx-auto relative z-10 px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* LEFT SIDE: THE CHALLENGE */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//             className="space-y-10"
//           >
//             <h2 className="text-7xl md:text-[90px] font-black italic text-white uppercase leading-[0.8] tracking-tighter">
//               YOU<span className="text-red-500/80"></span>
//             </h2>

//             <div className="space-y-8">
//               {bulletPoints.map((item, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.1 }}
//                   className="flex items-start gap-6 group"
//                 >
//                   <div className="relative mt-1">
//                     <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/40 transition-all duration-500 shadow-2xl">
//                       <div className="text-slate-400 group-hover:text-blue-400 transition-colors">
//                         {item.icon}
//                       </div>
//                     </div>
//                   </div>

//                   <p className="text-3xl md:text-3xl font-bold italic text-slate-500 group-hover:text-slate-200 transition-all duration-500 tracking-tighter leading-none max-w-md">
//                     {item.text}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* RIGHT SIDE: THE PROTOCOL CARD */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="relative p-10 md:p-16 rounded-[40px] bg-neutral-900/40 border border-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden group"
//           >
//             {/* Scanning Laser */}
//             <motion.div
//               animate={{ y: ["-100%", "300%"] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//               className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
//             />

//             <div className="space-y-8 relative z-10">
//               <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed italic">
//                 You don’t need more opinions. <br />
//                 You need <span className="text-white">clarity</span> grounded in{" "}
//                 <span className="text-blue-400/80 font-bold">reality</span>.
//               </p>

//               <div className="h-[1px] w-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-red-500/20" />

//               <div className="space-y-5">
//                 {[
//                   { id: "SYS_01", text: "We listen first." },
//                   { id: "SYS_02", text: "Design precise strategies." },
//                   {
//                     id: "SYS_03",
//                     text: "Align to jurisdictional constraints.",
//                   },
//                 ].map((item, idx) => (
//                   <div key={idx} className="flex items-center gap-4 group/item">
//                     <span className="font-mono text-[9px] text-red-500/60 font-black">
//                       {item.id}
//                     </span>
//                     <span className="text-xs font-mono text-slate-500 uppercase tracking-widest group-hover/item:text-slate-200 transition-colors">
//                       {item.text}
//                     </span>
//                     <div className="h-[1px] flex-1 bg-white/5 group-hover/item:bg-white/10 transition-all" />
//                   </div>
//                 ))}
//               </div>

//               <div className="pt-6 space-y-4">
//                 <h4 className="text-3xl md:text-5xl font-black italic uppercase leading-[0.9] text-white tracking-tighter">
//                   Complex decisions <br />
//                   <span className="text-blue-500/80 text-2xl md:text-4xl block mt-2">
//                     don’t need templates.
//                   </span>
//                 </h4>
//                 <p className="text-4xl md:text-6xl font-black italic uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400/80 via-purple-400/80 to-red-400/80 tracking-tighter leading-[0.9]">
//                   They need <br /> judgment.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* FOOTER MINI VISUALIZER */}
//       <div className="mt-20 flex justify-center opacity-10">
//         <div className="flex items-end gap-1 h-8">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               animate={{ height: [2, Math.random() * 20 + 5, 2] }}
//               transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
//               className={`w-[1px] ${i % 2 === 0 ? "bg-blue-400" : "bg-red-400"}`}
//             />
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }

//=================================================================
//================================================================
//==============================================================
// import React from "react";
// import { motion } from "framer-motion";
// import { ShieldCheck, Focus, MessageSquareQuote } from "lucide-react";
// import Section from "../components/layout/Section";

// const bulletPoints = [
//   {
//     text: "Shape capital, companies, and lives.",
//     icon: <MessageSquareQuote size={18} />,
//     label: "IMPACT_ANALYSIS",
//   },
//   {
//     text: "Balance growth with risk and speed.",
//     icon: <Focus size={18} />,
//     label: "STRUCTURAL_EQUILIBRIUM",
//   },
//   {
//     text: "Vision meeting execution.",
//     icon: <ShieldCheck size={18} />,
//     label: "STRATEGIC_ALIGNMENT",
//   },
// ];

// export default function YouSection() {
//   return (
//     <Section id="you" className="relative py-24 bg-transparent overflow-hidden">
//       {/* 1. INSTITUTIONAL HUD BACKGROUND */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {/* Quiet Line Vertical Dividers */}
//         <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#1F2937] to-transparent" />
//         <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#1F2937] to-transparent" />

//         {/* Muted Atmospheric Glows */}
//         <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#3B82F6]/5 blur-[100px] rounded-full" />
//         <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-[#C2413A]/5 blur-[100px] rounded-full" />
//       </div>

//       <div className="max-w-[1400px] mx-auto relative z-10 px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* LEFT SIDE: THE CHALLENGE */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//             className="space-y-10"
//           >
//             <h2 className="text-7xl md:text-[90px] font-black italic text-[#F5F7FA] uppercase leading-[0.8] tracking-tighter">
//               YOU
//             </h2>

//             <div className="space-y-8">
//               {bulletPoints.map((item, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.1 }}
//                   className="flex items-start gap-6 group"
//                 >
//                   <div className="relative mt-1">
//                     {/* Card Background Style Icon Box */}
//                     <div className="w-12 h-12 rounded-xl bg-[#111827] border border-[#1F2937] flex items-center justify-center group-hover:border-[#3B82F6]/40 transition-all duration-500 shadow-2xl">
//                       <div className="text-[#9CA3AF] group-hover:text-[#3B82F6] transition-colors">
//                         {item.icon}
//                       </div>
//                     </div>
//                   </div>

//                   <p className="text-3xl md:text-3xl font-bold italic text-[#9CA3AF] group-hover:text-[#F5F7FA] transition-all duration-500 tracking-tighter leading-none max-w-md">
//                     {item.text}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* RIGHT SIDE: THE PROTOCOL CARD */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="relative p-10 md:p-16 rounded-[40px] bg-[#111827]/60 border border-[#1F2937] backdrop-blur-2xl shadow-2xl overflow-hidden group"
//           >
//             {/* Scanning Laser (White/Ivory) */}
//             <motion.div
//               animate={{ y: ["-100%", "300%"] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//               className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F7FA]/5 to-transparent pointer-events-none"
//             />

//             <div className="space-y-8 relative z-10">
//               <p className="text-xl md:text-2xl text-[#9CA3AF] font-medium leading-relaxed italic">
//                 You don’t need more opinions. <br />
//                 You need <span className="text-[#F5F7FA]">clarity</span>{" "}
//                 grounded in{" "}
//                 <span className="text-[#3B82F6] font-bold">reality</span>.
//               </p>

//               {/* Quiet Line Divider */}
//               <div className="h-[1px] w-full bg-[#1F2937]" />

//               <div className="space-y-5">
//                 {[
//                   { id: "SYS_01", text: "We listen first." },
//                   { id: "SYS_02", text: "Design precise strategies." },
//                   {
//                     id: "SYS_03",
//                     text: "Align to jurisdictional constraints.",
//                   },
//                 ].map((item, idx) => (
//                   <div key={idx} className="flex items-center gap-4 group/item">
//                     {/* Muted Crimson Accent */}
//                     <span className="font-mono text-[9px] text-[#C2413A] font-black">
//                       {item.id}
//                     </span>
//                     <span className="text-xs font-mono text-[#9CA3AF] uppercase tracking-widest group-hover/item:text-[#F5F7FA] transition-colors">
//                       {item.text}
//                     </span>
//                     <div className="h-[1px] flex-1 bg-[#1F2937] group-hover/item:bg-[#3B82F6]/20 transition-all" />
//                   </div>
//                 ))}
//               </div>

//               <div className="pt-6 space-y-4">
//                 <h4 className="text-3xl md:text-5xl font-black italic uppercase leading-[0.9] text-[#F5F7FA] tracking-tighter">
//                   Complex decisions <br />
//                   <span className="text-[#3B82F6] text-2xl md:text-4xl block mt-2">
//                     don’t need templates.
//                   </span>
//                 </h4>
//                 <p className="text-4xl md:text-6xl font-black italic uppercase text-[#F5F7FA] tracking-tighter leading-[0.9]">
//                   They need <br />{" "}
//                   <span className="text-[#3B82F6]">judgment.</span>
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* FOOTER MINI VISUALIZER */}
//       <div className="mt-20 flex justify-center opacity-20">
//         <div className="flex items-end gap-1 h-8">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               animate={{ height: [2, Math.random() * 20 + 5, 2] }}
//               transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
//               className={`w-[1px] ${i % 2 === 0 ? "bg-[#3B82F6]" : "bg-[#1F2937]"}`}
//             />
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }

////================================================================
//==============================================================
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Focus, MessageSquareQuote } from "lucide-react";
import Section from "../components/layout/Section";

const bulletPoints = [
  {
    text: "Shape capital, companies, and lives.",
    icon: <MessageSquareQuote size={18} />,
    label: "IMPACT_ANALYSIS",
  },
  {
    text: "Balance growth with risk and speed.",
    icon: <Focus size={18} />,
    label: "STRUCTURAL_EQUILIBRIUM",
  },
  {
    text: "Vision meeting execution.",
    icon: <ShieldCheck size={18} />,
    label: "STRATEGIC_ALIGNMENT",
  },
];

export default function YouSection() {
  return (
    <Section id="you" className="relative py-24 bg-transparent overflow-hidden">
      {/* 1. INSTITUTIONAL HUD BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#1F2937] to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#1F2937] to-transparent" />
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#3B82F6]/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-[#C2413A]/5 blur-[100px] rounded-full" />
      </div>

      {/* INSTITUTIONAL ALIGNMENT WRAPPER:
          - max-w-[1600px]: Matches Hero width
          - flex-col lg:flex-row: Stacks mobile, side-by-side desktop
          - justify-between: Pushes content to the outer edges
          - gap-32 xl:gap-64: Maintains the exact "Gutter" from the Hero
      */}
      <div className="max-w-[1600px] mx-auto relative z-10 px-6 flex flex-col lg:flex-row justify-between items-center gap-32 xl:gap-64">
        {/* LEFT SIDE: THE CHALLENGE (flex-1 to match Hero text weight) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10 flex-1"
        >
          <h2 className="text-7xl md:text-[90px] font-black italic text-[#F5F7FA] uppercase leading-[0.8] tracking-tighter">
            YOU
          </h2>

          <div className="space-y-8">
            {bulletPoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 group"
              >
                <div className="relative mt-1">
                  <div className="w-12 h-12 rounded-xl bg-[#111827] border border-[#1F2937] flex items-center justify-center group-hover:border-[#3B82F6]/40 transition-all duration-500 shadow-2xl">
                    <div className="text-[#9CA3AF] group-hover:text-[#3B82F6] transition-colors">
                      {item.icon}
                    </div>
                  </div>
                </div>

                <p className="text-3xl md:text-3xl font-bold italic text-[#9CA3AF] group-hover:text-[#F5F7FA] transition-all duration-500 tracking-tighter leading-none max-w-md">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE: THE PROTOCOL CARD (flex-1 and justify-end to hug the right edge) */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[600px] p-10 md:p-16 rounded-[40px] bg-[#111827]/60 border border-[#1F2937] backdrop-blur-2xl shadow-2xl overflow-hidden group"
          >
            {/* Scanning Laser */}
            <motion.div
              animate={{ y: ["-100%", "300%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F7FA]/5 to-transparent pointer-events-none"
            />

            <div className="space-y-8 relative z-10">
              <p className="text-xl md:text-2xl text-[#9CA3AF] font-medium leading-relaxed italic">
                You don’t need more opinions. <br />
                You need <span className="text-[#F5F7FA]">clarity</span>{" "}
                grounded in{" "}
                <span className="text-[#3B82F6] font-bold">reality</span>.
              </p>

              <div className="h-[1px] w-full bg-[#1F2937]" />

              <div className="space-y-5">
                {[
                  { id: "SYS_01", text: "We listen first." },
                  { id: "SYS_02", text: "Design precise strategies." },
                  {
                    id: "SYS_03",
                    text: "Align to jurisdictional constraints.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group/item">
                    <span className="font-mono text-[9px] text-[#C2413A] font-black">
                      {item.id}
                    </span>
                    <span className="text-xs font-mono text-[#9CA3AF] uppercase tracking-widest group-hover/item:text-[#F5F7FA] transition-colors">
                      {item.text}
                    </span>
                    <div className="h-[1px] flex-1 bg-[#1F2937] group-hover/item:bg-[#3B82F6]/20 transition-all" />
                  </div>
                ))}
              </div>

              <div className="pt-6 space-y-4">
                <h4 className="text-3xl md:text-5xl font-black italic uppercase leading-[0.9] text-[#F5F7FA] tracking-tighter">
                  Complex decisions <br />
                  <span className="text-[#3B82F6] text-2xl md:text-4xl block mt-2">
                    don’t need templates.
                  </span>
                </h4>
                <p className="text-4xl md:text-6xl font-black italic uppercase text-[#F5F7FA] tracking-tighter leading-[0.9]">
                  They need <br />{" "}
                  <span className="text-[#3B82F6]">judgment.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER MINI VISUALIZER */}
      <div className="mt-20 flex justify-center opacity-20">
        <div className="flex items-end gap-1 h-8">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: [2, Math.random() * 20 + 5, 2] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
              className={`w-[1px] ${i % 2 === 0 ? "bg-[#3B82F6]" : "bg-[#1F2937]"}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
