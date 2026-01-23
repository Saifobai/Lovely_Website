// const Section = ({ children, id, variant = "dark" }) => {
//   const variants = {
//     dark: "bg-[#020617]",
//     darker: "bg-[#010314]",
//     gradient: "bg-gradient-to-b from-[#020617] via-[#010314] to-[#020617]",
//   };

//   return (
//     <section
//       id={id}
//       className={`
//         width-full
//         min-h-screen
//         flex items-center
//         ${variants[variant]}
//       `}
//     >
//       <div className="w-[75%] mx-auto px-10 py-32 relative">{children}</div>
//     </section>
//   );
// };

// export default Section;

//==============================================

// const Section = ({ children, id, variant = "base" }) => {
//   const variants = {
//     base: "bg-site-base",
//     deep: "bg-site-deep",
//     surface: "bg-site-surface",
//     gradient: "bg-gradient-to-b from-site-base via-site-deep to-site-base",
//   };

//   return (
//     <section
//       id={id}
//       className={`
//         w-full
//         min-h-screen
//         flex items-center
//         ${variants[variant]}
//         relative
//         overflow-hidden
//       `}
//     >
//       {/* subtle separation layer */}
//       <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.015),transparent)] pointer-events-none" />

//       <div className="w-[75%] mx-auto px-10 py-32 relative z-10">
//         {children}
//       </div>
//     </section>
//   );
// };

// export default Section;

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
