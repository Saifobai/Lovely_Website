import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-black select-none">
      {/* 1. ULTRA-THIN TOP LASER LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-500/0 via-purple-500/40 to-red-500/0" />

      {/* 2. ATMOSPHERIC GLOWS (More subtle) */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          {/* LEFT: BRAND IDENTITY */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-6">
              <h3 className="text-white text-6xl md:text-5xl font-black tracking-tighter uppercase leading-[0.8] italic">
                LOVELY
                <br />
                <span className="text-2xl md:text-3xl font-light not-italic text-slate-500 tracking-tight normal-case block mt-4">
                  Strategic clarity for complex ambitions.
                </span>
              </h3>

              <p className="text-slate-500 text-sm max-w-sm leading-relaxed border-l border-white/10 pl-6 italic">
                Lovely does not provide legal or tax advice. All regulated
                services are delivered exclusively through licensed external
                partners.
              </p>
            </div>
          </div>

          {/* RIGHT: NAVIGATION & SCROLL */}
          <div className="lg:col-span-6 flex flex-col md:flex-row justify-between gap-12">
            <FooterColumn
              title="Sitemap"
              links={["Hero", "About", "Services", "Contact"]}
            />

            <div className="flex flex-col justify-end items-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center group relative overflow-hidden transition-all duration-500 bg-white/5 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <ArrowUpRight className="w-6 h-6 text-slate-400 relative z-10 group-hover:text-white transition-all group-hover:-rotate-45" />
              </motion.button>
              <span className="mt-4 font-mono text-[9px] text-slate-600 uppercase tracking-widest">
                Back_to_top
              </span>
            </div>
          </div>
        </div>

        {/* 3. CINEMATIC BACKGROUND WATERMARK */}
        <div className="relative py-10">
          <h2 className="text-[12vw] font-black leading-none tracking-tighter text-white/[0.03] text-center uppercase italic whitespace-nowrap select-none">
            REIMAGINED
          </h2>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        {/* BOTTOM BAR: UPDATED COPYRIGHT */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500 tracking-[0.2em] uppercase">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 animate-pulse" />
            <span className="text-2xl md:text-sm">
              © 2026 LOVELY CONSULTING. ALL RIGHTS RESERVED.
            </span>
          </div>

          <div className=" flex items-center gap-6">
            <span className="text-2xl md:text-sm font-mono text-slate-500 uppercase tracking-widest px-3 py-1 border border-white/5 rounded-full bg-white/[0.02]">
              Built by Sam and Lovely
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="space-y-6">
      <h4 className="text-white/30 font-mono text-[9px] tracking-[0.3em] uppercase font-bold">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-slate-500 hover:text-blue-400 transition-all text-xs font-bold uppercase tracking-widest flex items-center group italic"
            >
              <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-blue-500/50 font-mono text-[8px]">
                //
              </span>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
