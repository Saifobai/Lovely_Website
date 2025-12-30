// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import BookingCalendar from "../../components/calendar/BookingCalendar";

// const BackgroundSystem = () => (
//   <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//     <div
//       className="absolute inset-0 opacity-[0.12]"
//       style={{
//         backgroundImage: `linear-gradient(to right, #ffffff0a 1px, transparent 1px),
//                           linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)`,
//         backgroundSize: "80px 80px",
//       }}
//     />
//     <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[160px]" />
//     <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[140px]" />
//   </div>
// );

// export default function BookingPage() {
//   const navigate = useNavigate();

//   return (
//     <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex items-center justify-center py-12">
//       <BackgroundSystem />

//       {/* Main Scaling Wrapper:
//           scale-90 or scale-[0.8] decreases the visual size.
//           origin-center ensures it stays balanced.
//       */}
//       <div className="relative z-10 w-full max-w-[1250px] mx-auto transform scale-[0.85] origin-center">
//         {/* TOP NAVIGATION: Technical Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex items-end justify-between mb-12 border-b border-white/5 pb-8"
//         >
//           <div className="space-y-2">
//             <button
//               onClick={() => navigate("/")}
//               className="group flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-slate-500 hover:text-blue-400 transition-all"
//             >
//               <span className="group-hover:-translate-x-2 transition-transform">
//                 ←
//               </span>
//               TERMINATE_SESSION
//             </button>
//             <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
//               DEPLOYMENT <span className="text-blue-600">SCHEDULER</span>
//             </h1>
//           </div>

//           <div className="hidden md:flex flex-col items-end gap-1 font-mono text-[9px] text-slate-500">
//             <span>STATUS: READY_FOR_SYNC</span>
//             <span className="text-blue-500/50">ENCRYPTION: AES_256_ACTIVE</span>
//           </div>
//         </motion.div>

//         {/* MAIN INTERFACE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.98 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//           className="relative group"
//         >
//           {/* Subtle glow behind the calendar */}
//           <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full group-hover:bg-blue-600/10 transition-colors duration-1000" />

//           <div className="relative z-10 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[40px] shadow-2xl overflow-hidden">
//             <BookingCalendar />
//           </div>

//           {/* Decorative Corner Accents */}
//           <div className="absolute -top-2 -right-2 w-16 h-16 border-t border-r border-blue-500/30 rounded-tr-3xl pointer-events-none" />
//           <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b border-l border-blue-500/30 rounded-bl-3xl pointer-events-none" />
//         </motion.div>

//         {/* FOOTER METRICS */}
//         <div className="mt-8 flex gap-10 opacity-20 hover:opacity-100 transition-opacity duration-500">
//           <div className="flex flex-col gap-1">
//             <span className="text-[8px] font-mono uppercase tracking-widest text-blue-500">
//               Sync_Node
//             </span>
//             <span className="text-[10px] font-bold">EUROPE_BERLIN</span>
//           </div>
//           <div className="flex flex-col gap-1">
//             <span className="text-[8px] font-mono uppercase tracking-widest text-blue-500">
//               Avg_Latency
//             </span>
//             <span className="text-[10px] font-bold">0.004 MS</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import BookingCalendar from "../../components/calendar/BookingCalendar";

// const BackgroundSystem = () => (
//   <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//     <div
//       className="absolute inset-0 opacity-[0.12]"
//       style={{
//         backgroundImage: `linear-gradient(to right, #ffffff0a 1px, transparent 1px),
//                           linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)`,
//         backgroundSize: "80px 80px",
//       }}
//     />
//     <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[160px]" />
//     <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[140px]" />
//   </div>
// );

// export default function BookingPage() {
//   const navigate = useNavigate();

//   return (
//     <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex items-center justify-center py-12">
//       <BackgroundSystem />

//       <div className="relative z-10 w-full max-w-[1400px] mx-auto transform scale-[0.85] origin-center px-12">
//         <div className="grid lg:grid-cols-[1fr_2fr] gap-20 items-center">
//           {/* LEFT COLUMN: System Identity */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//             className="space-y-12"
//           >
//             {/* Back Button */}
//             <button
//               onClick={() => navigate("/")}
//               className="group flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-slate-500 hover:text-blue-400 transition-all"
//             >
//               <span className="group-hover:-translate-x-2 transition-transform">
//                 ←
//               </span>
//               TERMINATE_SESSION
//             </button>

//             {/* Main Brandingstack */}
//             <div className="space-y-4">
//               <div className="h-[1px] w-24 bg-blue-600" />
//               <h1 className="text-6xl xl:text-7xl font-black tracking-tighter uppercase italic leading-[0.9]">
//                 DEPLOYMENT <br />
//                 <span className="text-blue-600">SCHEDULER</span>
//               </h1>
//               <p className="text-slate-500 font-mono text-xs tracking-widest uppercase">
//                 Phase_01 // Slot_Selection
//               </p>
//             </div>

//             {/* Technical Status Panel */}
//             <div className="space-y-6 border-l border-white/10 pl-8 py-2">
//               <div className="flex flex-col gap-1">
//                 <span className="text-[9px] font-mono text-blue-500/60 uppercase tracking-widest">
//                   System_Status
//                 </span>
//                 <span className="text-sm font-bold tracking-tight">
//                   READY_FOR_SYNC
//                 </span>
//               </div>

//               <div className="flex flex-col gap-1">
//                 <span className="text-[9px] font-mono text-blue-500/60 uppercase tracking-widest">
//                   Security_Protocol
//                 </span>
//                 <span className="text-sm font-bold tracking-tight text-emerald-500">
//                   AES_256_ACTIVE
//                 </span>
//               </div>

//               <div className="flex flex-col gap-1">
//                 <span className="text-[9px] font-mono text-blue-500/60 uppercase tracking-widest">
//                   Network_Node
//                 </span>
//                 <span className="text-sm font-bold tracking-tight uppercase">
//                   Europe_Berlin_Hub
//                 </span>
//               </div>
//             </div>

//             {/* Micro Metrics */}
//             <div className="flex gap-8 opacity-40">
//               <div className="flex flex-col">
//                 <span className="text-[8px] font-mono uppercase">LATENCY</span>
//                 <span className="text-xs font-bold">0.004 MS</span>
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-[8px] font-mono uppercase">UPTIME</span>
//                 <span className="text-xs font-bold">99.9%</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* RIGHT COLUMN: Interactive Calendar */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, x: 40 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//             className="relative group"
//           >
//             {/* Ambient Glow behind calendar */}
//             <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full group-hover:bg-blue-600/10 transition-colors duration-1000" />

//             <div className="relative z-10 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[48px] shadow-2xl overflow-hidden p-2">
//               <BookingCalendar />
//             </div>

//             {/* Decorative Corner Framing */}
//             <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-blue-600/20 rounded-tr-[60px] pointer-events-none" />
//             <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-blue-600/20 rounded-bl-[60px] pointer-events-none" />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BookingCalendar from "../../components/calendar/BookingCalendar";

const BackgroundSystem = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage: `linear-gradient(to right, #ffffff0a 1px, transparent 1px), 
                          linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }}
    />
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[160px]" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[140px]" />
  </div>
);

export default function BookingPage() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex items-center justify-center py-12">
      <BackgroundSystem />

      {/* Increased max-width to 1600px to allow the calendar to spread out more */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto transform scale-[0.85] origin-center px-12">
        {/* Increased gap to 32 (gap-32) 
            Changed grid ratio to [0.8fr_2.2fr] to push the calendar width even more 
        */}
        <div className="grid lg:grid-cols-[0.8fr_2.2fr] gap-32 items-center">
          {/* LEFT COLUMN: System Identity */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <button
              onClick={() => navigate("/")}
              className="group flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-slate-500 hover:text-blue-400 transition-all"
            >
              <span className="group-hover:-translate-x-2 transition-transform">
                ←
              </span>
              TERMINATE_SESSION
            </button>

            <div className="space-y-4">
              <div className="h-[1px] w-24 bg-blue-600" />
              <h1 className="text-5xl xl:text-6xl font-black tracking-tighter uppercase italic leading-[0.9]">
                DEPLOYMENT <br />
                <span className="text-blue-600">SCHEDULER</span>
              </h1>
              <p className="text-slate-500 font-mono text-[10px] tracking-[0.3em] uppercase opacity-70">
                Phase_01 // Slot_Selection
              </p>
            </div>

            <div className="space-y-6 border-l border-white/10 pl-8 py-2">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-mono text-blue-500/60 uppercase tracking-widest">
                  System_Status
                </span>
                <span className="text-sm font-bold tracking-tight">
                  READY_FOR_SYNC
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-mono text-blue-500/60 uppercase tracking-widest">
                  Security_Protocol
                </span>
                <span className="text-sm font-bold tracking-tight text-emerald-500 uppercase">
                  Aes_256_Active
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-mono text-blue-500/60 uppercase tracking-widest">
                  Network_Node
                </span>
                <span className="text-sm font-bold tracking-tight uppercase">
                  Europe_Berlin_Hub
                </span>
              </div>
            </div>

            <div className="flex gap-8 opacity-40">
              <div className="flex flex-col">
                <span className="text-[8px] font-mono uppercase">LATENCY</span>
                <span className="text-xs font-bold tracking-tighter">
                  0.004 MS
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-mono uppercase">UPTIME</span>
                <span className="text-xs font-bold tracking-tighter">
                  99.9%
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Wider Interactive Calendar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative group w-full"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full group-hover:bg-blue-600/10 transition-colors duration-1000" />

            {/* Calendar Container: Added extra horizontal padding (px-6) to let internal content breathe */}
            <div className="relative z-10 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[48px] shadow-2xl overflow-hidden p-4 px-6">
              <BookingCalendar />
            </div>

            {/* Corner Framings - Adjusted to fit the wider container */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-blue-600/20 rounded-tr-[60px] pointer-events-none transition-all group-hover:border-blue-600/40" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-2 border-l-2 border-blue-600/20 rounded-bl-[60px] pointer-events-none transition-all group-hover:border-blue-600/40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
