import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { services as rawServices } from "../../constants";

/* ===============================
   VISUAL MAPPING
================================ */
const portalVisuals = {
  "Business Consulting Services": {
    gradient: "linear-gradient(135deg, #1c1c84, #000068)",
  },
  "Immigration Consulting Services": {
    gradient: "linear-gradient(135deg, #0f766e, #042f2e)",
  },
  "IT Consulting Services": {
    gradient: "linear-gradient(135deg, #4f46e5, #020617)",
  },
  "Real Estate – Buy & Sell": {
    gradient: "linear-gradient(135deg, #78350f, #1c1917)",
  },
  Events: {
    gradient: "linear-gradient(135deg, #831843, #020617)",
  },
};

/* ===============================
   TOP LEVEL SERVICES ONLY
================================ */
const services = rawServices.map((s) => ({
  title: s.title,
  visual: portalVisuals[s.title],
}));

export default function ServicesSection() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  /* ===============================
     CURSOR INERTIA
  ================================ */
  useEffect(() => {
    const xMove = gsap.quickTo(cursor.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMove = gsap.quickTo(cursor.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const xLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const move = (e) => {
      xMove(e.clientX);
      yMove(e.clientY);
      xLabel(e.clientX);
      yLabel(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="services"
      className="relative w-full min-h-screen bg-[#0a0a0a] text-white py-20 overflow-hidden"
    >
      <div className="noise-overlay" />

      {/* HEADER */}
      <div className="max-w-[1400px] mx-auto px-8 mb-20">
        <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-2 flex justify-between">
          <span>/// Services Registry</span>
          <span>[ System_Ready ]</span>
        </h2>
      </div>

      {/* SERVICES LIST */}
      <div className="max-w-[1400px] mx-auto px-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="group border-t border-gray-800/50 hover:border-white/20 py-16 flex justify-between items-center cursor-pointer"
            onMouseEnter={() => setModal({ active: true, index })}
            onMouseLeave={() => setModal({ active: false, index })}
            initial="rest"
            animate="rest"
            whileHover="hover"
          >
            {/* TITLE — PACED */}
            <motion.h2
              variants={{
                rest: {
                  x: 0,
                  skewX: 0,
                  opacity: 0.75,
                },
                hover: {
                  x: 18,
                  skewX: -4,
                  opacity: 1,
                  transition: {
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              className="hollow-text text-5xl md:text-8xl font-bold uppercase"
            >
              {service.title}
            </motion.h2>

            {/* LABEL — DELAYED */}
            <motion.span
              variants={{
                rest: {
                  opacity: 0,
                  x: -12,
                },
                hover: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.12,
                    duration: 0.35,
                    ease: "easeOut",
                  },
                },
              }}
              className="text-xs font-mono text-gray-400"
            >
              Initiate →
            </motion.span>
          </motion.div>
        ))}
      </div>

      {/* FLOATING PORTAL */}
      <motion.div
        ref={cursor}
        className="fixed top-0 left-0 w-[360px] h-[480px] rounded-xl overflow-hidden pointer-events-none z-10"
        style={{ mixBlendMode: "exclusion" }}
        variants={scaleAnimation}
        initial="initial"
        animate={modal.active ? "enter" : "closed"}
      >
        <div
          style={{ top: `-${modal.index * 100}%` }}
          className="relative h-full transition-all duration-500"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="h-full w-full relative"
              style={{ background: service.visual?.gradient }}
            >
              <div className="portal-shimmer absolute inset-0" />
              <span className="absolute bottom-6 left-6 text-white/20 text-3xl font-bold uppercase">
                {service.title}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CURSOR DOT */}
      <motion.div
        ref={cursorLabel}
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-white/30 backdrop-blur pointer-events-none z-20 flex items-center justify-center"
        variants={scaleAnimation}
        initial="initial"
        animate={modal.active ? "enter" : "closed"}
      >
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
      </motion.div>
    </section>
  );
}

/* ===============================
   SHARED MOTION
================================ */
const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.3 },
  },
};
