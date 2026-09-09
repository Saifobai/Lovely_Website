import React from "react";
import { motion } from "framer-motion";

const Section = ({ children, id, className = "" }) => {
  return (
    <motion.section
      id={id}
      // 1. Initial State: Lowered and invisible
      initial={{ opacity: 0, y: 50 }}
      // 2. While In View: Lift up and fade in
      whileInView={{ opacity: 1, y: 0 }}
      // 3. Viewport Config: once: true means it won't re-animate if you scroll back up
      viewport={{ once: true, margin: "-150px" }}
      // 4. Transition: High-end smooth "Sway" ease
      transition={{
        duration: 0.9,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={`relative w-full min-h-screen flex items-center justify-center  overflow-hidden ${className}`}
    >
      {/* Cinematic Grain Overlay */}
      <div className="noise-overlay pointer-events-none opacity-[0.03]" />

      {/* Structural Container */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 relative z-10">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
