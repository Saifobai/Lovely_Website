// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Globe, ArrowUpRight } from "lucide-react";

// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="relative pt-24 pb-12 overflow-hidden bg-black select-none">
//       {/* 1. ULTRA-THIN TOP LASER LINE */}
//       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-500/0 via-purple-500/40 to-red-500/0" />

//       {/* 2. ATMOSPHERIC GLOWS (More subtle) */}
//       <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

//       <div className="max-w-[1400px] mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-12 gap-16 mb-20">
//           {/* LEFT: BRAND IDENTITY */}
//           <div className="lg:col-span-6 space-y-10">
//             <div className="space-y-6">
//               <h3 className="text-white text-6xl md:text-5xl font-black tracking-tighter uppercase leading-[0.8] italic">
//                 LOVELY
//                 <br />
//                 <span className="text-2xl md:text-3xl font-light not-italic text-slate-500 tracking-tight normal-case block mt-4">
//                   Strategic clarity for complex ambitions.
//                 </span>
//               </h3>

//               <p className="text-slate-500 text-sm max-w-sm leading-relaxed border-l border-white/10 pl-6 italic">
//                 Lovely does not provide legal or tax advice. All regulated
//                 services are delivered exclusively through licensed external
//                 partners.
//               </p>
//             </div>
//           </div>

//           {/* RIGHT: NAVIGATION & SCROLL */}
//           <div className="lg:col-span-6 flex flex-col md:flex-row justify-between gap-12">
//             <FooterColumn
//               title="Sitemap"
//               links={["Home", "About", "Services", "Contact"]}
//             />

//             <div className="flex flex-col justify-end items-end">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={scrollToTop}
//                 className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center group relative overflow-hidden transition-all duration-500 bg-white/5 backdrop-blur-xl"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 <ArrowUpRight className="w-6 h-6 text-slate-400 relative z-10 group-hover:text-white transition-all group-hover:-rotate-45" />
//               </motion.button>
//               <span className="mt-4 font-mono text-[9px] text-slate-600 uppercase tracking-widest">
//                 Back_to_top
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* 3. CINEMATIC BACKGROUND WATERMARK */}
//         <div className="relative py-10">
//           <h2 className="text-[12vw] font-black leading-none tracking-tighter text-white/[0.03] text-center uppercase italic whitespace-nowrap select-none">
//             REIMAGINED
//           </h2>
//           <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
//         </div>

//         {/* BOTTOM BAR: UPDATED COPYRIGHT */}
//         <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500 tracking-[0.2em] uppercase">
//             <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 animate-pulse" />
//             <span className="text-2xl md:text-sm">
//               © 2026 LOVELY ALL RIGHTS RESERVED.
//             </span>
//           </div>

//           <div className=" flex items-center gap-6">
//             <span className="text-2xl md:text-sm font-mono text-slate-500 uppercase tracking-widest px-3 py-1 border border-white/5 rounded-full bg-white/[0.02]">
//               Built by Sam and Lovely
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function FooterColumn({ title, links }) {
//   return (
//     <div className="space-y-6">
//       <h4 className="text-white/30 font-mono text-[9px] tracking-[0.3em] uppercase font-bold">
//         {title}
//       </h4>
//       <ul className="space-y-3">
//         {links.map((link) => (
//           <li key={link}>
//             <a
//               href={`#${link.toLowerCase()}`}
//               className="text-slate-500 hover:text-blue-400 transition-all text-xs font-bold uppercase tracking-widest flex items-center group italic"
//             >
//               <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-blue-500/50 font-mono text-[8px]">
//                 //
//               </span>
//               {link}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

//===================================================================
//===================================================================
// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowUpRight, Shield } from "lucide-react";

// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="relative pt-24 pb-12 overflow-hidden bg-[#05080F] select-none">
//       {/* 1. INSTITUTIONAL TOP BORDER */}
//       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent" />

//       {/* 2. SUBTLE AMBIANCE */}
//       <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[140px] pointer-events-none" />

//       <div className="max-w-[1400px] mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-12 gap-16 mb-20">
//           {/* LEFT: BRAND IDENTITY */}
//           <div className="lg:col-span-7 space-y-10">
//             <div className="space-y-8">
//               <h3 className="text-[#F5F7FA] text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8] italic">
//                 LOVELY
//                 <br />
//                 <span className="text-xl md:text-2xl font-light not-italic text-[#4B5563] tracking-tight normal-case block mt-6 max-w-md">
//                   Strategic clarity for those navigating complex global
//                   ambitions.
//                 </span>
//               </h3>

//               <div className="flex flex-col gap-4 text-[#4B5563] text-[11px] max-w-sm leading-relaxed border-l border-[#1F2937] pl-8 italic uppercase tracking-wider">
//                 <p>
//                   Lovely operates as a strategic advisory firm. We do not
//                   provide legal, tax, or regulated financial advice.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: NAVIGATION & SCROLL */}
//           <div className="lg:col-span-5 flex flex-col md:flex-row justify-between gap-12 pt-4">
//             <FooterColumn
//               title="Navigation"
//               links={["Home", "About", "Services", "Contact"]}
//             />

//             <div className="flex flex-col justify-end items-end">
//               <motion.button
//                 whileHover={{ y: -5 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={scrollToTop}
//                 className="w-20 h-20 rounded-3xl border border-[#1F2937] flex items-center justify-center group relative overflow-hidden transition-all duration-500 bg-[#0B1320]/50 backdrop-blur-xl hover:border-[#3B82F6]/50"
//               >
//                 <div className="absolute inset-0 bg-[#3B82F6]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 <ArrowUpRight className="w-8 h-8 text-[#4B5563] relative z-10 group-hover:text-[#F5F7FA] transition-all group-hover:-rotate-45" />
//               </motion.button>
//               <span className="mt-4 font-mono text-[9px] text-[#4B5563] uppercase tracking-[0.3em] font-bold">
//                 Return_To_Top
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* 3. CINEMATIC WATERMARK */}
//         <div className="relative py-12">
//           <h2 className="text-[13vw] font-black leading-none tracking-tighter text-[#1F2937]/10 text-center uppercase italic whitespace-nowrap select-none">
//             Lovely 2026
//           </h2>
//         </div>

//         {/* BOTTOM BAR */}
//         <div className="pt-10 border-t border-[#1F2937] flex flex-col md:flex-row items-center justify-between gap-8">
//           <div className="flex items-center gap-4 text-[12px] font-mono text-[#4b535f] tracking-[0.2em] uppercase">
//             <span>© 2026 LOVELY ALL RIGHTS RESERVED.</span>
//           </div>

//           <div className="flex items-center gap-6">
//             {/* FIXED SPAN: Applied the "Institutional Node" styling */}
//             <span className="text-[12px] font-mono text-[#505864] uppercase tracking-[0.2em] px-4 py-2 border border-[#1F2937] rounded-xl bg-[#0B1320]/50 whitespace-nowrap">
//               Made by <span className="text-[#3B82F6] font-bold">Lovely</span> &{" "}
//               <span className="text-[#F5F7FA]">Sam</span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function FooterColumn({ title, links }) {
//   return (
//     <div className="space-y-8">
//       <h4 className="text-[#F5F7FA]/20 font-mono text-[10px] tracking-[0.4em] uppercase font-black">
//         {title}
//       </h4>
//       <ul className="space-y-4">
//         {links.map((link) => (
//           <li key={link}>
//             <a
//               href={`#${link.toLowerCase()}`}
//               className="text-[#4B5563] hover:text-[#3B82F6] transition-all text-[11px] font-bold uppercase tracking-[0.2em] flex items-center group italic"
//             >
//               <span className="w-0 group-hover:w-5 overflow-hidden transition-all duration-300 text-[#3B82F6] font-mono text-[10px]">
//                 //
//               </span>
//               {link}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function SocialLink({ label }) {
//   return (
//     <a
//       href="#"
//       className="text-[#4B5563] hover:text-[#F5F7FA] font-mono text-[10px] transition-colors uppercase font-bold tracking-widest"
//     >
//       [{label}]
//     </a>
//   );
// }

//===================================================================
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Activity, Scale } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-32 pb-12 overflow-hidden bg-[#050505] select-none border-t border-white/5 font-sans">
      {/* 1. TOP GLOW ACCENT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          {/* LEFT: BRAND IDENTITY */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h3 className="text-white text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] italic">
                LOVELY
              </h3>
              <p className="text-xl md:text-2xl font-light text-slate-500 tracking-tight max-w-md italic">
                Strategic clarity for those navigating complex global goals.
              </p>
            </div>

            {/* STATUS & LEGAL DISCLAIMER */}
            <div className="space-y-6 max-w-sm">
              <div className="flex items-center gap-3 text-blue-500 font-mono text-[12px] tracking-[0.4em] uppercase">
                <Activity size={12} className="animate-pulse" /> Legal Notice
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed border-l border-white/10 pl-6 italic  tracking-widest">
                Lovely does not provide legal or tax advice. All regulated
                services are delivered exclusively through licensed external
                partners.
              </p>
            </div>
          </div>

          {/* RIGHT: NAVIGATION & SCROLL */}
          <div className="lg:col-span-5 flex flex-col md:flex-row justify-between gap-12">
            <FooterColumn
              title=""
              links={[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ]}
            />

            {/* 🔒 LEGAL COLUMN (IMPRESSUM & PRIVACY HERE) */}
            <FooterColumn
              title=""
              links={[
                { name: "Legal Information", href: "/legal" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Client Engagement Terms", href: "/client-engagement" },
              ]}
            />

            <div className="flex flex-col justify-end items-end">
              <motion.button
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group relative overflow-hidden transition-all duration-500 bg-white/[0.02] backdrop-blur-xl hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]"
              >
                <ArrowUpRight className="w-8 h-8 text-slate-500 relative z-10 group-hover:text-blue-500 transition-all group-hover:-rotate-45" />
              </motion.button>
              <span className="mt-4 font-mono text-[11px] text-slate-400 uppercase tracking-[0.4em] font-bold">
                Scroll_Up
              </span>
            </div>
          </div>
        </div>

        {/* 3. CINEMATIC WATERMARK */}
        <div className="relative py-16">
          <h2 className="text-[15vw] font-black leading-none tracking-tighter text-white/[0.02] text-center uppercase italic whitespace-nowrap select-none">
            LOVELY_CORE
          </h2>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 text-[13px] font-mono text-slate-400 tracking-[0.3em] uppercase">
            <span>© Lovely 2026</span>
            <span className="hidden md:block text-white/10">|</span>
            {/* 🔒 QUICK LINK TO IMPRESSUM */}
            <a
              href="/impressum"
              className="hover:text-blue-500 transition-colors flex items-center gap-2"
            ></a>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-[13px] font-mono text-slate-400 uppercase tracking-[0.2em] px-5 py-2 border border-white/5 rounded-full bg-white/[0.02] whitespace-nowrap">
              Built on{" "}
              <span className="text-blue-500 font-bold">Clarity</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="space-y-8">
      <h4 className="text-blue-500 font-mono text-[9px] tracking-[0.5em] uppercase font-black opacity-80">
        {title}
      </h4>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-slate-500 hover:text-white transition-all text-[11px] font-bold uppercase tracking-[0.3em] flex items-center group italic"
            >
              <span className="w-0 group-hover:w-6 overflow-hidden transition-all duration-300 text-blue-500 font-mono text-[10px]">
                {">"}
              </span>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
