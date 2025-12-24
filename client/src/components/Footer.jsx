import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  ArrowUpRight,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Real-time clock for that "System" feel
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
    <footer className="relative bg-[#050505] pt-24 pb-10 overflow-hidden border-t border-white/5">
      {/* BACKGROUND DECORATION */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          {/* LEFT: Branding & HUD */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h3 className="text-white text-3xl font-bold tracking-tighter">
                LS<span className="text-blue-500">.</span>DIGITAL
              </h3>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                Engineering the digital frontier. We build high-performance
                ecosystems for world-class visionaries.
              </p>
            </div>

            {/* LIVE SYSTEM HUD */}
            <div className="flex gap-10 font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
              <div>
                <p className="text-blue-500 mb-1">Local Time</p>
                <p className="text-white text-sm">{time} UTC</p>
              </div>
              <div>
                <p className="text-blue-500 mb-1">Status</p>
                <p className="text-white text-sm animate-pulse">
                  System Online
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Links & Navigation */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <FooterColumn
              title="Protocol"
              links={["Hero", "About", "Services", "Contact"]}
            />
            <FooterColumn
              title="Socials"
              links={["LinkedIn", "Twitter", "Instagram", "GitHub"]}
            />
            <div className="flex flex-col justify-between items-end">
              <button
                onClick={scrollToTop}
                className="group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500"
              >
                <ArrowUpRight className="w-6 h-6 transition-transform group-hover:-rotate-45" />
              </button>
            </div>
          </div>
        </div>

        {/* THE BIG TYPE - CINEMATIC CLOSURE */}
        <div className="relative mb-10 select-none pointer-events-none">
          <h2 className="text-[15vw] font-bold leading-none tracking-tighter text-white/[0.02] text-center uppercase whitespace-nowrap">
            LS DIGITAL AGENCY
          </h2>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 tracking-widest uppercase">
            <Globe className="w-3 h-3 text-blue-500" />
            <span>Global Operations // 2024 - 2025</span>
          </div>

          <div className="flex gap-8">
            <SocialIcon icon={<Linkedin />} href="#" />
            <SocialIcon icon={<Twitter />} href="#" />
            <SocialIcon icon={<Instagram />} href="#" />
            <SocialIcon icon={<Github />} href="#" />
          </div>

          <p className="text-[10px] font-mono text-slate-600">
            &copy; LS_DIGITAL_ARCHIVE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}

// --- SUB-COMPONENTS ---

function FooterColumn({ title, links }) {
  return (
    <div className="space-y-6">
      <h4 className="text-blue-500 font-mono text-[10px] tracking-[0.3em] uppercase">
        {title}
      </h4>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center group"
            >
              <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-blue-500 font-mono text-[10px]">
                &gt;
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
      whileHover={{ y: -5, scale: 1.1 }}
      className="text-slate-500 hover:text-blue-500 transition-all duration-300"
    >
      {React.cloneElement(icon, { size: 18 })}
    </motion.a>
  );
}
