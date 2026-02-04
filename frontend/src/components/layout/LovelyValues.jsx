// import React from "react";
// import { motion } from "framer-motion";
// import { Zap, Puzzle, Users } from "lucide-react";

// const values = [
//   {
//     id: "01",
//     title: "Clarity",
//     subtitle: "SIMPLIFYING THE COMPLEX",
//     text: "We simplify complexity into confident decisions and outcomes that matter.",
//     icon: <Zap className="text-blue-400" size={20} />,
//     color: "from-blue-500/10",
//     glow: "shadow-blue-500/5",
//   },
//   {
//     id: "02",
//     title: "Creativity",
//     subtitle: "DISCIPLINARY CONTEXT",
//     text: "We connect disciplines and jurisdictions to solutions that actually work.",
//     icon: <Puzzle className="text-purple-400" size={20} />,
//     color: "from-purple-500/10",
//     glow: "shadow-purple-500/5",
//   },
//   {
//     id: "03",
//     title: "Collaboration",
//     subtitle: "COORDINATED EFFORT",
//     text: "We align clients, partners, and experts into one coordinated effort.",
//     icon: <Users className="text-red-400" size={20} />,
//     color: "from-red-500/10",
//     glow: "shadow-red-500/5",
//   },
// ];

// export default function LovelyValues() {
//   return (
//     <section className="relative py-32 overflow-hidden bg-transparent">
//       {/* Background Decorative Text - Scaled for tighter container */}
//       <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none">
//         <h2 className="text-[15vw] font-black uppercase italic leading-none">
//           Principles
//         </h2>
//       </div>

//       {/* 1. SYNCED CONTAINER (1300px) */}
//       <div className="relative z-10 w-full max-w-[1450px] mx-auto px-10 md:px-16 flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-32">
//         {/* LEFT: STATIC CONTENT (Aligned with Hero/WhyLovely headings) */}
//         <div className="flex-1 sticky top-32 space-y-8 max-w-[400px]">
//           <div className="space-y-4">
//             <h2 className="text-6xl md:text-7xl xl:text-[75px] font-black italic tracking-tighter uppercase text-white leading-[0.85]">
//               Lovely <br />
//               <span className="text-blue-500">Values</span>
//             </h2>
//           </div>
//           <p className="text-lg xl:text-xl text-slate-400 italic leading-relaxed">
//             Our work is guided by three principles: <br />
//             <span className="text-white font-bold">
//               Creativity. Collaboration. Clarity.
//             </span>
//           </p>
//         </div>

//         {/* RIGHT: KINETIC CARDS (Tighter sizing) */}
//         <div className="flex-[1.2] w-full space-y-6">
//           {values.map((value, idx) => (
//             <motion.div
//               key={value.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.8, delay: idx * 0.1 }}
//               className={`group relative p-8 xl:p-10 rounded-[32px] border border-white/10 bg-gradient-to-br ${value.color} to-transparent backdrop-blur-xl transition-all duration-500 hover:border-blue-500/30 shadow-2xl overflow-hidden`}
//             >
//               {/* Background ID Number */}
//               <span className="absolute -bottom-6 -right-2 text-[100px] font-black italic text-white/[0.02] select-none group-hover:text-white/[0.05] transition-all duration-700">
//                 {value.id}
//               </span>

//               <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
//                 {/* Icon Box - Slightly smaller to match boutique feel */}
//                 <div className="w-16 h-16 shrink-0 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-all duration-500">
//                   {value.icon}
//                 </div>

//                 <div className="space-y-2">
//                   <div>
//                     <h3 className="text-2xl xl:text-3xl font-black italic uppercase tracking-tighter text-white">
//                       {value.title}
//                     </h3>
//                     <p className="text-blue-400 font-mono text-[9px] uppercase tracking-[0.3em] font-bold">
//                       {value.subtitle}
//                     </p>
//                   </div>
//                   <p className="text-base xl:text-lg text-slate-300 leading-relaxed italic font-medium opacity-80 group-hover:opacity-100 transition-opacity">
//                     {value.text}
//                   </p>
//                 </div>
//               </div>

//               {/* HUD Corner Accent */}
//               <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <div className="w-6 h-6 border-t border-r border-blue-500/40 rounded-tr-lg" />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Atmospheric Glow */}
//       <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full" />
//     </section>
//   );
// }

//=======================================================================
import React from "react";
import { motion } from "framer-motion";
import { Zap, Puzzle, Users } from "lucide-react";

const values = [
  {
    id: "01",
    title: "Clarity",
    subtitle: "SIMPLIFYING THE COMPLEX",
    text: "We simplify complexity into confident decisions and outcomes that matter.",
    icon: <Zap className="text-blue-400" size={20} />,
    color: "from-blue-500/10",
  },
  {
    id: "02",
    title: "Creativity",
    subtitle: "DISCIPLINARY CONTEXT",
    text: "We connect disciplines and jurisdictions to solutions that actually work.",
    icon: <Puzzle className="text-purple-400" size={20} />,
    color: "from-purple-500/10",
  },
  {
    id: "03",
    title: "Collaboration",
    subtitle: "COORDINATED EFFORT",
    text: "We align clients, partners, and experts into one coordinated effort.",
    icon: <Users className="text-red-400" size={20} />,
    color: "from-red-500/10",
  },
];

export default function LovelyValues() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-transparent">
      {/* Background Decorative Text - Adjusted for mobile scale */}
      <div className="absolute top-10 lg:top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none z-0">
        <h2 className="text-[20vw] lg:text-[15vw] font-black uppercase italic leading-none">
          Principles
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-[1450px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-32">
        {/* LEFT: STATIC CONTENT */}
        {/* Removed 'sticky' on mobile to avoid overlapping issues */}
        <div className="flex-1 lg:sticky lg:top-32 space-y-6 lg:space-y-8 max-w-full lg:max-w-[400px] text-center lg:text-left">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl xl:text-[75px] font-black italic tracking-tighter uppercase text-white leading-[0.9] lg:leading-[0.85]">
              Lovely <br />
              <span className="text-blue-500">Values</span>
            </h2>
          </div>
          <p className="text-base lg:text-lg xl:text-xl text-slate-400 italic leading-relaxed">
            Our work is guided by three principles:{" "}
            <br className="hidden lg:block" />
            <span className="text-white font-bold">
              {" "}
              Creativity. Collaboration. Clarity.
            </span>
          </p>
        </div>

        {/* RIGHT: KINETIC CARDS */}
        <div className="flex-[1.2] w-full space-y-4 lg:space-y-6">
          {values.map((value, idx) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`group relative p-6 lg:p-10 rounded-[24px] lg:rounded-[32px] border border-white/10 bg-gradient-to-br ${value.color} to-transparent backdrop-blur-xl transition-all duration-500 hover:border-blue-500/30 shadow-2xl overflow-hidden`}
            >
              {/* Background ID Number - Scaled down for mobile */}
              <span className="absolute -bottom-4 -right-2 text-[70px] lg:text-[100px] font-black italic text-white/[0.02] select-none group-hover:text-white/[0.05] transition-all duration-700">
                {value.id}
              </span>

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-8">
                {/* Icon Box */}
                <div className="w-14 h-14 lg:w-16 lg:h-16 shrink-0 rounded-xl lg:rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-all duration-500">
                  {/* Scaled icons for mobile */}
                  {React.cloneElement(value.icon, { size: 18 })}
                </div>

                <div className="space-y-2">
                  <div>
                    <h3 className="text-xl lg:text-3xl font-black italic uppercase tracking-tighter text-white">
                      {value.title}
                    </h3>
                    <p className="text-blue-400 font-mono text-[8px] lg:text-[9px] uppercase tracking-[0.2em] lg:tracking-[0.3em] font-bold">
                      {value.subtitle}
                    </p>
                  </div>
                  <p className="text-sm lg:text-lg text-slate-300 leading-relaxed italic font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                    {value.text}
                  </p>
                </div>
              </div>

              {/* HUD Corner Accent - Hidden on touch to keep it clean */}
              <div className="absolute top-0 right-0 p-4 opacity-0 lg:group-hover:opacity-100 transition-opacity hidden lg:block">
                <div className="w-6 h-6 border-t border-r border-blue-500/40 rounded-tr-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute -bottom-24 -right-24 w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] bg-blue-600/5 blur-[100px] lg:blur-[120px] rounded-full" />
    </section>
  );
}
