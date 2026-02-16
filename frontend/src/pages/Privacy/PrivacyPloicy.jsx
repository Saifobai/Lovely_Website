import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Lock, FileText, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen bg-[#020617] text-white selection:bg-blue-500/30 overflow-x-hidden pb-20">
      {/* HEADER NAVIGATION */}
      <nav className="relative z-50 p-6 md:p-12">
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
            Back_to_Home
          </span>
        </button>
      </nav>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-10">
        {/* HEADER SECTION */}
        <header className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8] text-[#F5F7FA]">
              Privacy <br />
              <span className="text-[#3B82F6] text-xl md:text-3xl font-light normal-case tracking-tight block mt-6 leading-relaxed max-w-2xl opacity-80">
                At Lovely, we value your trust and respect your privacy.
              </span>
            </h1>
          </motion.div>
        </header>

        {/* CONTENT BODY */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-16 md:space-y-24 text-slate-300 font-light leading-relaxed"
        >
          {/* INTRO */}
          <section>
            <p className="text-xl md:text-2xl italic text-slate-400 leading-snug">
              This Privacy Policy explains how we collect, use, and safeguard
              your personal data when you visit our website, as well as your
              rights under applicable data protection laws.
            </p>
          </section>

          {/* I. CONTROLLER */}
          <section className="pt-12 border-t border-white/10">
            <div className="flex items-center gap-4 mb-8">
              <Shield className="text-[#3B82F6]" size={24} />
              <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">
                I. Controller
              </h2>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-[32px] p-6 md:p-10 space-y-3 font-mono text-xs md:text-sm leading-relaxed">
              <p className="text-slate-500 mb-4 uppercase tracking-widest">
                Administrative Contact
              </p>
              <p className="text-white text-xl md:text-2xl font-bold italic">
                Lovely
              </p>
              <p>
                Represented by:{" "}
                <span className="text-white">Lovely Ibañez</span>
              </p>
              <p>Florastraße 31</p>
              <p>40217 Düsseldorf, Germany</p>
              <p className="pt-4 text-[#3B82F6]">T: +49 (0) 211 15869836</p>
              <p className="text-[#3B82F6]">E: dataprivacy@lovely.com.de</p>
            </div>
          </section>

          {/* II. GENERAL INFO */}
          <section className="pt-12 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white mb-10">
              II. Data Processing
            </h2>
            <div className="grid grid-cols-1 gap-12">
              <div className="space-y-4">
                <h3 className="text-[#3B82F6] font-bold uppercase text-[10px] tracking-[0.3em]">
                  1. Scope of Processing
                </h3>
                <p className="text-base md:text-lg">
                  Personal data refers to any information relating to an
                  identified or identifiable natural person. We process data
                  only to ensure the proper functioning of our consulting
                  services.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-[#3B82F6] font-bold uppercase text-[10px] tracking-[0.3em]">
                  2. Legal Grounds
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-[10px] md:text-xs uppercase">
                  {[
                    "Art. 6(1)(a) Consent",
                    "Art. 6(1)(b) Contractual",
                    "Art. 6(1)(c) Legal Obligation",
                    "Art. 6(1)(f) Legitimate Interests",
                  ].map((item) => (
                    <li
                      key={item}
                      className="bg-white/5 p-4 rounded-xl border border-white/5"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* III. ACCESS LOGS */}
          <section className="pt-12 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white mb-8">
              III. Technical Log Files
            </h2>
            <p className="mb-8 text-base md:text-lg">
              The following technical metadata is automatically collected for
              security:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-[9px] md:text-[10px] uppercase text-slate-400">
              {[
                "Browser Type",
                "OS Version",
                "Provider",
                "IP Address",
                "Timestamp",
                "Referrer URL",
              ].map((log) => (
                <div
                  key={log}
                  className="bg-white/5 p-3 rounded-lg border border-white/5 flex items-center gap-2"
                >
                  <div className="w-1 h-1 bg-[#3B82F6] rounded-full" /> {log}
                </div>
              ))}
            </div>
          </section>

          {/* VII. YOUR RIGHTS */}
          <section className="pt-12 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white mb-8">
              VII. Your Rights
            </h2>
            <div className="space-y-6">
              <p className="text-base md:text-lg">
                Under the GDPR, you have the following irrevocable rights
                regarding your personal data:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Access",
                  "Rectification",
                  "Erasure",
                  "Restriction",
                  "Portability",
                  "Objection",
                  "Withdrawal",
                ].map((right) => (
                  <span
                    key={right}
                    className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#3B82F6]"
                  >
                    {right}
                  </span>
                ))}
              </div>
              <div className="mt-8 p-6 md:p-10 bg-white/5 border border-white/10 rounded-[32px] italic">
                <p className="text-white font-bold not-italic mb-4 uppercase text-xs tracking-widest text-[#3B82F6]">
                  Supervisory Authority:
                </p>
                <div className="space-y-1 text-sm md:text-base not-italic">
                  <p className="text-white font-bold">LDI NRW</p>
                  <p>Postfach 20 04 44</p>
                  <p>40102 Düsseldorf, Germany</p>
                  <p className="text-[#3B82F6] mt-4">poststelle@ldi.nrw.de</p>
                </div>
              </div>
            </div>
          </section>

          {/* VIII. VERSION */}
          <footer className="pt-12 border-t border-white/10"></footer>
        </motion.div>
      </div>

      {/* GHOST BACKGROUND DECOR */}
      <div className="fixed bottom-[-2%] right-[-5%] select-none pointer-events-none opacity-[0.02] z-0 hidden lg:block">
        <h2 className="text-[25vw] font-black italic uppercase leading-none">
          Privacy
        </h2>
      </div>
    </main>
  );
}
