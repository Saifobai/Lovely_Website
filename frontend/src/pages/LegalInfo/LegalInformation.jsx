import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LegalInformation() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    // REMOVED h-screen overflow-hidden to allow scrolling on mobile
    <main className="relative min-h-screen w-full bg-[#020617] text-white selection:bg-blue-500/30 overflow-x-hidden">
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
            Back_To_Home
          </span>
        </button>
      </nav>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row gap-12 lg:gap-24 w-full items-start"
        >
          {/* LEFT COLUMN - Title area */}
          <div className="w-full lg:w-[42%] lg:pt-10 flex-shrink-0">
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.85]">
                Legal <br />
                <span className="text-blue-600">Information</span>
              </h1>

              <p className="text-slate-500 text-[10px] md:text-xs font-mono uppercase tracking-widest mt-8 max-w-sm leading-relaxed">
                Information pursuant to Section 5 of the German Digital Services
                Act (DDG).
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Card area */}
          <div className="w-full lg:w-[58%]">
            <motion.div
              variants={itemVariants}
              className="w-full 
                         bg-white/[0.02] backdrop-blur-3xl
                         border border-white/10 rounded-[30px] md:rounded-[40px]
                         p-6 md:p-16 space-y-12 md:space-y-16"
            >
              {/* ENTITY */}
              <section className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tight">
                  Lovely
                </h3>

                <div className="flex items-start gap-4 text-slate-400 italic">
                  <MapPin size={18} className="text-blue-500 mt-1 shrink-0" />
                  <p className="text-lg md:text-xl uppercase tracking-tight leading-relaxed">
                    Florastraße 31
                    <br />
                    40217 Düsseldorf, Germany
                  </p>
                </div>
              </section>

              {/* REPRESENTATION + CONTACT */}
              <section className="flex flex-col md:flex-row gap-10 md:gap-16">
                <div className="flex-1">
                  <p className="text-xl md:text-2xl font-black italic uppercase tracking-tight">
                    Lovely Ibañez
                  </p>
                </div>

                <div className="flex-1">
                  <div className="space-y-4">
                    <a
                      href="tel:+49211158698936"
                      className="flex items-center gap-3 text-slate-300 hover:text-blue-500 transition-colors group"
                    >
                      <Phone size={14} className="text-blue-500" />
                      <span className="font-mono text-sm break-all">
                        +49 211 158698936
                      </span>
                    </a>

                    <a
                      href="mailto:hello@lovely.com.de"
                      className="flex items-center gap-3 text-slate-300 hover:text-blue-500 transition-colors group"
                    >
                      <Mail size={14} className="text-blue-500" />
                      <span className="font-mono text-sm tracking-wider break-all">
                        hello@lovely.com.de
                      </span>
                    </a>
                  </div>
                </div>
              </section>

              {/* DISPUTE */}
              <section>
                <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/5">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-blue-500/80">
                    Consumer Dispute Resolution
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed italic">
                    We do not participate in dispute resolution proceedings
                    before a consumer arbitration board and are not legally
                    required to do so.
                  </p>
                </div>
              </section>

              {/* FOOTER */}
              <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 opacity-20"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* GIANT BACKGROUND TEXT - Hidden on small mobile to avoid layout shifts */}
      <div className="absolute bottom-[-2%] right-[-5%] pointer-events-none select-none opacity-[0.02] hidden sm:block">
        <h2 className="text-[25vw] font-black italic uppercase leading-none">
          LEGAL
        </h2>
      </div>
    </main>
  );
}
