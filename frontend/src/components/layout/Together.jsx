import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Eye, Heart, CheckCircle2 } from "lucide-react";

const principles = [
  {
    title: "Deep Understanding",
    desc: "We start by listening, not assuming.",
    icon: <Compass size={20} />,
  },
  {
    title: "Shared Perspective",
    desc: "We align on success before designing solutions.",
    icon: <Eye size={20} />,
  },
  {
    title: "Long-Term Partnership",
    desc: "We support today’s decisions with tomorrow in mind.",
    icon: <Heart size={20} />,
  },
];

const processSteps = [
  { step: "01", title: "Objectives", desc: "Identify key outcomes" },
  { step: "02", title: "Roadmap", desc: "Strategic architecture" },
  { step: "03", title: "Coordinate", desc: "Expert synchronization" },
  { step: "04", title: "Completion", desc: "Sustained implementation" },
];

export default function Together() {
  const [masterIndex, setMasterIndex] = useState(0);
  const totalSteps = principles.length + processSteps.length;

  useEffect(() => {
    // Increased delay to 4 seconds to allow users to actually read the text
    const sequenceTimer = setInterval(() => {
      setMasterIndex((prev) => (prev + 1) % totalSteps);
    }, 4000);
    return () => clearInterval(sequenceTimer);
  }, [totalSteps]);

  return (
    <section
      id="together"
      className="relative py-24 lg:py-40 px-6 bg-transparent overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto">
        {/* SECTION 1: PRINCIPLES */}
        <div className="mb-24 lg:mb-40">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start lg:items-end mb-16 lg:mb-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex-1"
            >
              <h3 className="text-5xl md:text-6xl font-black italic uppercase leading-[0.85] tracking-tighter text-[#F5F7FA]">
                Together
                <span className="block mt-3 text-[#3B82F6] text-xl md:text-3xl font-light normal-case tracking-tight">
                  How results are built.
                </span>
              </h3>
            </motion.div>

            <p className="flex-1 text-lg lg:text-2xl text-[#9CA3AF] italic border-l border-[#3B82F6]/40 pl-6 lg:pl-10 max-w-xl">
              Collaboration is our foundation. We walk with you through every
              strategic milestone.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
            {principles.map((p, i) => {
              const isActive = masterIndex === i;
              return (
                <div
                  key={i}
                  onClick={() => setMasterIndex(i)}
                  className={`cursor-pointer relative p-8 rounded-[30px] lg:rounded-[40px] transition-all duration-1000 border flex-1 ${
                    isActive
                      ? "bg-[#111827]/60 border-[#3B82F6]/40 shadow-2xl scale-[1.02] opacity-100"
                      : "bg-[#111827]/10 border-transparent opacity-40 scale-100 grayscale hover:grayscale-0 hover:opacity-60"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="syncBar"
                      className="absolute top-0 left-10 right-10 h-[2px] bg-[#3B82F6]"
                    />
                  )}

                  <div
                    className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 transition-all duration-500 ${
                      isActive
                        ? "bg-[#3B82F6]/20 text-[#3B82F6]"
                        : "bg-[#111827] text-[#4B5563]"
                    }`}
                  >
                    {p.icon}
                  </div>

                  <h4 className="text-[#F5F7FA] font-black text-xl lg:text-2xl mb-3 italic uppercase tracking-tighter">
                    {p.title}
                  </h4>
                  <p className="text-[#9CA3AF] text-base lg:text-lg font-medium italic leading-snug">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: PROCESS FLOW */}
        <div className="max-w-[1200px] mx-auto relative">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-[#F5F7FA] font-mono text-[10px] lg:text-sm tracking-[0.4em] lg:tracking-[0.6em] uppercase opacity-30">
              Execution Framework
            </h2>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0">
            {/* Desktop Horizontal Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-[#1F2937]">
              <motion.div
                animate={{
                  width:
                    masterIndex >= 3
                      ? `${((masterIndex - 3) / (processSteps.length - 1)) * 100}%`
                      : "0%",
                }}
                className="h-full bg-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              />
            </div>

            {processSteps.map((s, i) => {
              const stepIndex = i + 3;
              const isActive = masterIndex === stepIndex;

              return (
                <div
                  key={i}
                  onClick={() => setMasterIndex(stepIndex)}
                  className="relative z-10 w-full md:w-1/4 px-4 transition-all duration-700 cursor-pointer"
                >
                  <div
                    className={`w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-[#0B1320] border transition-all duration-700 flex items-center justify-center mb-6 lg:mb-8 mx-auto relative ${
                      isActive
                        ? "border-[#3B82F6] shadow-[0_0_40px_rgba(59,130,246,0.2)] scale-110"
                        : "border-[#1F2937] opacity-20"
                    }`}
                  >
                    <span
                      className={`text-2xl lg:text-3xl font-black italic ${isActive ? "text-[#3B82F6]" : "text-[#4B5563]"}`}
                    >
                      {s.step}
                    </span>

                    {isActive && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{ scale: 1.4, opacity: 0 }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 rounded-full border border-[#3B82F6]"
                      />
                    )}
                  </div>

                  <div
                    className={`text-center transition-all duration-700 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 md:opacity-20 translate-y-4 md:translate-y-0"}`}
                  >
                    <h4 className="text-[#F5F7FA] font-black italic uppercase text-base lg:text-lg mb-2 tracking-tighter">
                      {s.title}
                    </h4>
                    <p className="text-[#3B82F6] text-[9px] lg:text-[10px] font-mono uppercase tracking-[0.2em]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FOOTER CALLOUT */}
        <motion.div
          animate={
            masterIndex === totalSteps - 1
              ? { scale: 1.01, borderColor: "rgba(59, 130, 246, 0.3)" }
              : { scale: 1 }
          }
          className="mt-24 lg:mt-40 max-w-5xl mx-auto p-8 lg:p-16 rounded-[40px] lg:rounded-[60px] bg-[#111827]/40 border border-[#1F2937] text-center relative overflow-hidden backdrop-blur-sm"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent" />

          <h4 className="text-2xl lg:text-4xl font-black italic text-[#F5F7FA] mb-8 uppercase tracking-tighter max-w-3xl mx-auto leading-tight">
            Success is measured by the clarity of the path and the strength of
            the outcome.
          </h4>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {[
              "Institutional Precision",
              "Absolute Discretion",
              "End-to-End Coordination",
            ].map((text, i) => (
              <span
                key={i}
                className="flex items-center gap-3 text-[9px] lg:text-[11px] font-mono text-[#9CA3AF] uppercase tracking-[0.2em] lg:tracking-[0.3em]"
              >
                <CheckCircle2 size={14} className="text-[#3B82F6]" /> {text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
