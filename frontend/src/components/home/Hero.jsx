import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Section from "../layout/Section";

// Import images
import LoveLy_03 from "../../assets/Images/Lovely_03.jpeg";
import LoveLy_04 from "../../assets/Images/Lovely_04.jpeg";

export default function Hero() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const orbRef = useRef(null);
  const hudRef = useRef(null);

  // Track mobile state for JSX logic
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = window.matchMedia("(max-width: 1024px)").matches;
    setIsMobile(checkMobile);

    const ctx = gsap.context(() => {
      // Only run GSAP mouse parallax on desktop
      if (!checkMobile) {
        const onMove = (e) => {
          const { clientX, clientY } = e;
          const cx = window.innerWidth / 2;
          const cy = window.innerHeight / 2;
          const dx = (clientX - cx) / cx;
          const dy = (clientY - cy) / cy;

          gsap.to(hudRef.current, {
            x: dx * 30,
            y: dy * 30,
            rotateX: dy * -10,
            rotateY: dx * 10,
            duration: 1.5,
            ease: "power2.out",
          });

          gsap.to(orbRef.current, {
            x: dx * -20,
            y: dy * -20,
            duration: 2.5,
            ease: "power3.out",
          });
        };

        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      id="home"
      className="pt-24 lg:pt-32 perspective-1000 flex items-center min-h-screen overflow-hidden bg-[#0B1320]"
    >
      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-[1600px] mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-32 xl:gap-64"
      >
        {/* LEFT: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 lg:space-y-12 flex-1 text-center lg:text-left z-30"
        >
          <div className="space-y-4 lg:space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-8xl xl:text-[90px] font-black leading-[0.9] lg:leading-[0.8] tracking-[-0.05em] text-[#F5F7FA] uppercase italic">
              {t("hero.digital")} <br />
              <span className="text-[#3B82F6] italic">
                {t("hero.solutions")}
              </span>
            </h1>
          </div>

          <p className="text-[#9CA3AF] text-base lg:text-lg xl:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed font-medium border-l-2 border-[#1F2937] pl-8 italic">
            {t("hero.description")}
          </p>

          <div className="flex justify-center lg:justify-start">
            <motion.button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative h-16 lg:h-20 w-full max-w-[320px] overflow-hidden rounded-xl transition-all duration-500 shadow-2xl border border-[#3B82F6]/30"
            >
              <div className="absolute inset-0 bg-[#3B82F6] transition-colors duration-500 group-hover:bg-[#2563EB]" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] opacity-30" />

              <span className="relative z-10 text-[#F5F7FA] font-black italic uppercase tracking-[0.2em] text-sm">
                {t("hero.bookBtn")} →
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT: THE CORE INTERFACE */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-[650px] flex-1 flex items-center justify-center lg:justify-end w-full">
          <div
            ref={hudRef}
            className="absolute inset-0 z-20 pointer-events-none"
          />

          <div
            ref={orbRef}
            className="relative w-64 h-64 sm:w-80 sm:h-80 xl:w-[450px] xl:h-[450px]"
          >
            {/* Background Glows */}
            <div className="absolute inset-0 bg-[#3B82F6]/10 rounded-full blur-[80px] lg:blur-[120px] animate-pulse" />
            <div className="absolute inset-10 bg-[#111827]/40 rounded-full blur-[60px] lg:blur-[100px]" />

            {/* Rotating Rings */}
            <div className="absolute inset-[-15%] border border-[#1F2937] rounded-full animate-spin-slow opacity-40" />
            <div className="absolute inset-[-5%] border border-[#3B82F6]/20 rounded-full animate-spin-slower" />

            {/* Main Orb Container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative border border-[#1F2937] bg-[#111827]/80 backdrop-blur-3xl rounded-[30px] lg:rounded-[40px] flex items-center justify-center overflow-hidden shadow-2xl group"
            >
              {/* Scanline/Overlay effect */}
              <div className="absolute inset-0 bg-[#0B1320]/20 z-10 pointer-events-none" />

              {/* BASE IMAGE: Always present (Grayscale) */}
              <img
                src={LoveLy_04}
                alt="Digital Core"
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 transition-transform duration-1000 group-hover:scale-105"
              />

              {/* TOP IMAGE: Color Layer (Auto-animates on Mobile, Hovers on Desktop) */}
              <motion.img
                src={LoveLy_03}
                alt="Digital Core Hover"
                initial={isMobile ? { opacity: 0 } : false}
                animate={
                  isMobile
                    ? {
                        opacity: [0, 1, 1, 0], // Fade In -> Stay Color -> Fade Out
                      }
                    : {}
                }
                transition={
                  isMobile
                    ? {
                        duration: 4,
                        repeat: Infinity,
                        times: [0, 0.4, 0.6, 1],
                        ease: "easeInOut",
                      }
                    : {}
                }
                // On Desktop, we use standard CSS classes for hover
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 
                  ${!isMobile ? "opacity-0 group-hover:opacity-100" : ""}`}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
