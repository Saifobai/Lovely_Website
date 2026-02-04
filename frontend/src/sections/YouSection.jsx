import React from "react";
import { motion } from "framer-motion";
import Section from "../components/layout/Section";

export default function YouSection() {
  return (
    <Section
      id="you"
      className="relative py-16 lg:py-24 bg-transparent overflow-hidden"
    >
      {/* 1. INSTITUTIONAL HUD BACKGROUND */}
      {/* Hidden horizontal lines on small mobile to keep it clean, shown on md+ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#1F2937] to-transparent hidden md:block" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#1F2937] to-transparent hidden md:block" />
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#3B82F6]/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-[#C2413A]/5 blur-[100px] rounded-full" />
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="max-w-[1600px] mx-auto relative z-10 px-6 flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-32 xl:gap-64">
        {/* LEFT SIDE: THE HEADLINE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          /* Center text on mobile for better balance */
          className="space-y-6 lg:space-y-10 flex-1 text-center lg:text-left"
        >
          {/* Responsive Heading: 6xl for mobile, 90px for desktop */}
          <h2 className="text-6xl md:text-8xl xl:text-[90px] font-black italic text-[#F5F7FA] uppercase leading-[0.8] tracking-tighter">
            YOU
          </h2>

          <p className="text-xl md:text-2xl lg:text-3xl font-bold italic text-[#9CA3AF] leading-relaxed max-w-md mx-auto lg:mx-0">
            You’re navigating decisions that shape capital, companies, and
            lives. You balance growth with risk, speed with structure, and
            vision with execution.
          </p>
        </motion.div>

        {/* RIGHT SIDE: THE PROTOCOL CARD */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            /* Reduced padding on mobile (p-8) vs desktop (p-16) */
            className="relative w-full max-w-[600px] p-8 md:p-16 rounded-[30px] lg:rounded-[40px] bg-[#111827]/60 border border-[#1F2937] backdrop-blur-2xl shadow-2xl overflow-hidden group"
          >
            {/* Scanning Laser */}
            <motion.div
              animate={{ y: ["-100%", "300%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F7FA]/5 to-transparent pointer-events-none"
            />

            <div className="space-y-6 lg:space-y-10 relative z-10">
              <p className="text-lg lg:text-xl text-[#9CA3AF] font-medium leading-relaxed italic">
                You don’t need more opinions. <br />
                You need <span className="text-[#F5F7FA]">clarity</span>{" "}
                grounded in{" "}
                <span className="text-[#3B82F6] font-semibold">reality</span>.
              </p>

              <div className="h-[1px] w-full bg-[#1F2937]" />

              <p className="text-lg lg:text-xl font-medium text-[#9CA3AF] leading-relaxed italic">
                We <span className="text-[#F5F7FA] font-semibold">listen</span>{" "}
                first, then{" "}
                <span className="text-[#F5F7FA] font-semibold">design</span>{" "}
                strategies calibrated to your objectives and operating
                jurisdictions because complex decisions demand{" "}
                <span className="text-[#3B82F6] font-semibold">judgment</span>,
                not templates.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER MINI VISUALIZER */}
      {/* Increased mt-12 for mobile to prevent crowding */}
      <div className="mt-12 lg:mt-20 flex justify-center opacity-20">
        <div className="flex items-end gap-1 h-8">
          {[...Array(15)].map(
            (
              _,
              i, // Reduced count slightly for mobile performance
            ) => (
              <motion.div
                key={i}
                animate={{ height: [2, Math.random() * 20 + 5, 2] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.05,
                }}
                className={`w-[1px] ${i % 2 === 0 ? "bg-[#3B82F6]" : "bg-[#1F2937]"}`}
              />
            ),
          )}
        </div>
      </div>
    </Section>
  );
}
