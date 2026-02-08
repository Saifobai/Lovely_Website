import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Activity, Shield } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 md:pt-32 pb-12 overflow-hidden bg-[#050505] select-none border-t border-white/5 font-sans">
      {/* Top Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          {/* LEFT: BRAND IDENTITY */}
          <div className="lg:col-span-7 space-y-10 lg:space-y-12">
            <div className="space-y-6">
              <h3 className="text-white text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] italic">
                LOVELY
              </h3>
              <p className="text-lg md:text-2xl font-light text-slate-500 tracking-tight max-w-md italic leading-tight">
                Strategic clarity for those navigating complex global goals.
              </p>
            </div>

            {/* STATUS & LEGAL DISCLAIMER */}
            <div className="space-y-4 max-w-sm">
              <div className="flex items-center gap-3 text-blue-500 font-mono text-[10px] md:text-[12px] tracking-[0.4em] uppercase font-bold">
                <Activity size={12} className="animate-pulse" /> Legal Notice
              </div>
              <p className="text-slate-500 text-[10px] md:text-[11px] leading-relaxed border-l border-white/10 pl-6 italic tracking-widest uppercase">
                Lovely does not provide legal or tax advice. All regulated
                services are delivered exclusively through licensed external
                partners.
              </p>
            </div>
          </div>

          {/* RIGHT: NAVIGATION & SCROLL */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
            <FooterColumn
              title="Intelligence"
              links={[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ]}
            />

            <FooterColumn
              title="Protocols"
              links={[
                { name: "Legal Info", href: "/legal" },
                { name: "Privacy", href: "/privacy" },
                { name: "Terms", href: "/terms" },
              ]}
            />

            <div className="col-span-2 md:col-span-1 flex flex-col justify-end items-start md:items-end">
              <motion.button
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center group relative overflow-hidden transition-all duration-500 bg-white/[0.02] backdrop-blur-xl hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]"
              >
                <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-slate-500 relative z-10 group-hover:text-blue-500 transition-all group-hover:-rotate-45" />
              </motion.button>
              <span className="mt-4 font-mono text-[9px] md:text-[11px] text-slate-400 uppercase tracking-[0.4em] font-bold">
                Scroll_Up
              </span>
            </div>
          </div>
        </div>

        {/* Cinematic Watermark */}
        <div className="relative py-12 md:py-16 pointer-events-none">
          <h2 className="text-[14vw] font-black leading-none tracking-tighter text-white/[0.03] text-center uppercase italic whitespace-nowrap select-none">
            LOVELY_CORE
          </h2>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-[11px] md:text-[13px] font-mono text-slate-500 tracking-[0.3em] uppercase font-bold">
            <span>© LOVELY {currentYear}</span>
            <span className="hidden md:block text-white/10">|</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-[10px] md:text-[12px] font-mono text-slate-500 uppercase tracking-[0.2em] px-5 py-2 border border-white/5 rounded-full bg-white/[0.01] whitespace-nowrap">
              Built on{" "}
              <span className="text-blue-500 font-bold italic">
                Absolute Clarity
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="space-y-6 md:space-y-8">
      <h4 className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase font-black opacity-80">
        {title}
      </h4>
      <ul className="space-y-3 md:space-y-4">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-slate-500 hover:text-white transition-all text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] flex items-center group italic"
            >
              <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-blue-500 font-mono text-[10px]">
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
