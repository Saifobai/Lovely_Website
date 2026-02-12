import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Shield, Zap, Target, EyeOff, ChevronRight } from "lucide-react";

// Images
import building_01 from "../../assets/Images/building_01.jpeg";
import building_02 from "../../assets/Images/building_02.jpeg";
import building_03 from "../../assets/Images/building_03.jpeg";
import Ship_01 from "../../assets/Images/ship_01.jpeg";

export default function WhyLovely() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const imageCardRef = useRef(null);

  const data = [
    {
      id: "01",
      title: "Strategic Intersection",
      text: "We advise where capital, jurisdiction, and execution meet.",
      icon: <Zap size={18} />,
      image: building_01,
    },
    {
      id: "02",
      title: "Boutique Focus",
      text: "Boutique by choice, Focused by principle. Built for complex cross-border work.",
      icon: <Target size={18} />,
      image: building_02,
    },
    {
      id: "03",
      title: "Single Counterpart",
      text: "We coordinate licensed legal, tax, and technical experts as your single counterpart.",
      icon: <Shield size={18} />,
      image: building_03,
    },
    {
      id: "04",
      title: "Discretion & Trust",
      text: "We value discretion as much as outcomes and long-term trust over short-term wins.",
      icon: <EyeOff size={18} />,
      image: Ship_01,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [data.length]);

  useEffect(() => {
    // Only enable GSAP 3D hover on desktop (min-width: 1024px)
    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
      const ctx = gsap.context(() => {
        const onMove = (e) => {
          if (!imageCardRef.current) return;
          const { clientX, clientY } = e;
          const dx =
            (clientX - window.innerWidth / 2) / (window.innerWidth / 2);
          const dy =
            (clientY - window.innerHeight / 2) / (window.innerHeight / 2);
          gsap.to(imageCardRef.current, {
            rotateY: dx * 8,
            rotateX: dy * -8,
            duration: 1.5,
            ease: "power2.out",
          });
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
      });
      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      ref={containerRef}
      /* Lowered vertical padding for mobile */
      className="relative min-h-screen flex items-center justify-center py-20 lg:py-32 overflow-hidden bg-transparent"
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-24">
        {/* LEFT: THE INTERACTIVE LIST */}
        <div className="flex-1 space-y-8 lg:space-y-12 w-full order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 lg:mb-12 text-center lg:text-left"
          >
            <h2 className="text-5xl md:text-7xl xl:text-[85px] font-black italic tracking-tighter uppercase leading-[0.8] text-[#F5F7FA]">
              Why <br />
              <span className="text-[#3B82F6] italic">Lovely</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {data.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left group relative p-5 xl:p-8 rounded-2xl border transition-all duration-700 flex items-start gap-4 lg:gap-6 
                  ${
                    activeIndex === idx
                      ? "bg-[#111827]/60 border-[#3B82F6]/30 shadow-2xl scale-[1.02] lg:scale-100"
                      : "bg-transparent border-transparent opacity-40 hover:opacity-60"
                  }`}
              >
                {activeIndex === idx && (
                  <motion.div
                    layoutId="activeGlowLine"
                    className="absolute left-0 top-4 bottom-4 w-[2px] bg-[#3B82F6]"
                  />
                )}

                <div
                  className={`mt-1 p-2.5 rounded-xl transition-all duration-500 ${activeIndex === idx ? "text-[#3B82F6] bg-[#3B82F6]/10" : "text-[#9CA3AF] bg-[#111827]"}`}
                >
                  {item.icon}
                </div>

                <div className="space-y-1 pr-4">
                  <h4
                    className={`font-black uppercase tracking-[0.2em] text-[9px] lg:text-[10px] ${activeIndex === idx ? "text-[#3B82F6]" : "text-[#9CA3AF]"}`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`text-base lg:text-xl italic font-medium leading-tight transition-colors ${activeIndex === idx ? "text-[#F5F7FA]" : "text-[#9CA3AF]"}`}
                  >
                    {item.text}
                  </p>
                </div>

                <div
                  className={`ml-auto self-center transition-all duration-500 hidden sm:block ${activeIndex === idx ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                >
                  <ChevronRight className="text-[#3B82F6]" size={20} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: THE DYNAMIC IMAGE */}
        <div className="flex-[0.8] lg:flex-[1.2] relative w-full flex items-center justify-center lg:justify-end perspective-2000 order-1 lg:order-2">
          <div
            ref={imageCardRef}
            /* Adjusted aspect ratio and max-width for mobile */
            className="relative w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[580px] aspect-[4/5] lg:aspect-[4/5] z-10 shadow-2xl group"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Corner Accents - smaller on mobile */}
            <div className="absolute -top-2 -left-2 lg:-top-4 lg:-left-4 border-t-2 border-l-2 border-[#3B82F6]/40 w-8 h-8 lg:w-16 lg:h-16 z-30 pointer-events-none" />
            <div className="absolute -bottom-2 -right-2 lg:-bottom-4 lg:-right-4 border-b-2 border-r-2 border-[#3B82F6]/40 w-8 h-8 lg:w-16 lg:h-16 z-30 pointer-events-none" />

            <div className="relative w-full h-full rounded-[24px] lg:rounded-[40px] overflow-hidden border border-[#1F2937] bg-[#111827]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={data[activeIndex].image}
                    alt="Strategic Advisory"
                    className="w-full h-full object-cover grayscale brightness-75 lg:brightness-50 lg:group-hover:grayscale-0 lg:group-hover:brightness-100 transition-all duration-1000 ease-in-out"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Laser Line */}
              <motion.div
                animate={{ top: ["-5%", "105%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[1px] lg:h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent z-40 opacity-50 shadow-[0_0_15px_#3B82F6] pointer-events-none"
              />

              {/* Grid Overlay - subtle grid */}
              <div className="absolute inset-0 z-20 opacity-10 lg:opacity-20 bg-[linear-gradient(rgba(31,41,55,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(31,41,55,0.3)_1px,transparent_1px)] bg-[size:30px_30px] lg:bg-[size:40px_40px] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
