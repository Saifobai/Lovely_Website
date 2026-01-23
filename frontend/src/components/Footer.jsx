import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  ArrowUpRight,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Activity,
  Cpu,
} from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-32 pb-10 overflow-hidden bg-black select-none">
      {/* 1. THE TOP LASER LINE (Blue -> Purple -> Red) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 opacity-50" />

      {/* 2. BACKGROUND ATMOSPHERE */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none opacity-20" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-32">
          {/* LEFT: SYSTEM IDENTITY */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em] font-black">
                  Uplink_Established
                </span>
              </div>

              {/* 3. GRADIENT LOGO (Blue -> Purple -> Red) */}
              <h3 className="text-white text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
                LS
                <br />
                <span className="italic bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                  DIGITAL
                </span>
              </h3>

              <p className="text-slate-400 text-lg max-w-sm leading-relaxed border-l-2 border-purple-500/40 pl-6 italic font-light">
                Engineering the digital frontier. Building high-performance
                ecosystems for world-class visionaries.
              </p>
            </div>

            {/* 4. HUD METRICS with matching icons */}
            <div className="flex gap-4">
              <FooterMetric
                icon={<Cpu size={14} />}
                label="SYS_LOAD"
                value="12%"
                color="text-blue-500"
              />
              <FooterMetric
                icon={<Activity size={14} />}
                label="OS_PULSE"
                value="SECURE"
                color="text-red-500"
              />
            </div>
          </div>

          {/* RIGHT: NAVIGATION */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <FooterColumn
              title="Protocol"
              links={["Hero", "About", "Services", "Contact"]}
            />
            <FooterColumn
              title="Connect"
              links={["LinkedIn", "Twitter", "Instagram", "GitHub"]}
            />

            <div className="flex flex-col justify-end items-end">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="w-20 h-20 rounded-3xl border border-white/10 flex items-center justify-center group relative overflow-hidden transition-all duration-500 bg-white/5 backdrop-blur-xl"
              >
                {/* 5. HOVER GRADIENT BORDER */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <ArrowUpRight className="w-8 h-8 text-white relative z-10 group-hover:text-black transition-transform group-hover:-rotate-45" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* 6. CINEMATIC WATERMARK with low opacity gradient line */}
        <div className="relative mb-20">
          <h2 className="text-[15vw] font-black leading-none tracking-tighter text-white/[0.02] text-center uppercase italic whitespace-nowrap">
            Digital Architecture
          </h2>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-red-500/20" />
        </div>

        {/* BOTTOM PROTOCOL BAR */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500 tracking-[0.3em] uppercase font-black">
            <Globe className="w-4 h-4 text-blue-500" />
            <span>Operational_Grid // 2024 - 2026</span>
          </div>

          {/* SOCIALS with Hover Gradients */}
          <div className="flex gap-10">
            <SocialIcon icon={<Linkedin />} href="#" />
            <SocialIcon icon={<Twitter />} href="#" />
            <SocialIcon icon={<Instagram />} href="#" />
            <SocialIcon icon={<Github />} href="#" />
          </div>

          <div className="text-[9px] font-mono text-slate-600 uppercase tracking-widest bg-white/5 px-4 py-1 border border-white/10 rounded-md">
            SIG: 0x82FB_LSD
          </div>
        </div>
      </div>
    </footer>
  );
}

// Sub-components
function FooterMetric({ icon, label, value, color }) {
  return (
    <div className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl flex-1 group hover:border-purple-500/30 transition-all duration-500">
      <div
        className={`${color} mb-2 group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>
      <p className="text-[9px] text-slate-500 uppercase font-mono tracking-widest font-black">
        {label}
      </p>
      <p className="text-white font-bold font-mono text-base tracking-tighter">
        {value}
      </p>
    </div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="space-y-8">
      <h4 className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase font-black">
        {title}_Uplink
      </h4>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-slate-500 hover:text-white transition-all text-sm font-black uppercase tracking-widest flex items-center group italic"
            >
              <span className="w-0 group-hover:w-6 overflow-hidden transition-all duration-300 text-purple-500 font-mono text-[10px]">
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

function SocialIcon({ icon, href }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -5, color: "#a855f7" }}
      className="text-slate-600 transition-all duration-300"
    >
      {React.cloneElement(icon, { size: 18 })}
    </motion.a>
  );
}
