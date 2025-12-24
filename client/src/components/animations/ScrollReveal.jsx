import React from "react";
import { motion } from "framer-motion";

const ScrollReveal = ({ children, color = "#3b82f6" }) => {
  return (
    <div className="relative overflow-hidden w-full">
      {/* 1. THE WIPING TRANSITION LAYER */}
      <motion.div
        variants={{
          hidden: { left: 0, width: "0%" },
          visible: {
            width: ["0%", "100%", "0%"],
            left: ["0%", "0%", "100%"],
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          backgroundColor: color,
          zIndex: 20,
        }}
      />

      {/* 2. THE CONTENT MOTION */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }} // Delay it so it appears after the wipe
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
