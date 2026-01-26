import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Footer from "../../components/Footer";
import Hero from "../../components/home/Hero";
import Manifesto from "../../components/layout/Manifesto";
import Navbar from "../../components/navbar/Navbar";

import { AboutUs } from "../../sections/AboutUs";
import ContactUs from "../../sections/ContactUs";
import ServicesSection from "../../sections/ServicesCode/ServicesSection";
import WhyLovely from "../../components/layout/WhyLovely";
import LovelyValues from "../../components/layout/LovelyValues";
import Together from "../../components/layout/Together";
import YouSection from "../../sections/YouSection";

/* --- GLOBAL BACKGROUND ENGINE --- */
const GlobalBackground = () => {
  const interactiveRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      const { clientX, clientY } = e;
      gsap.to(interactiveRef.current, {
        background: `radial-gradient(circle 800px at ${clientX}px ${clientY}px, rgba(147, 51, 234, 0.07), transparent 100%)`,
        duration: 1,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
      {/* 1. Interactive Mouse Glow */}
      <div ref={interactiveRef} className="absolute inset-0" />

      {/* 2. Primary Protocol Orbs (Fixed Position) */}
      <div className="absolute top-[-5%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[150px] rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-red-600/05 blur-[130px] rounded-full animate-pulse"
        style={{ animationDelay: "4s" }}
      />

      {/* 3. The Tech Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
};

export default function HomePage() {
  return (
    <main className="relative bg-[#050505] text-white">
      {/* Background is 'fixed', so it stays behind as you scroll through sections */}
      <GlobalBackground />

      {/* Content wrapper must be relative and z-10 to stay above background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <YouSection />
        <Manifesto />
        <WhyLovely />
        <LovelyValues />
        <AboutUs />
        <Together />
        <ServicesSection />
        <ContactUs />
      </div>
    </main>
  );
}
