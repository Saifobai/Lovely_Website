// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import Footer from "../../components/Footer";
// import Hero from "../../components/home/Hero";
// import Manifesto from "../../components/layout/Manifesto";
// import Navbar from "../../components/navbar/Navbar";

// import { AboutUs } from "../../sections/AboutUs";
// import ContactUs from "../../sections/ContactUs";
// import ServicesSection from "../../sections/ServicesCode/ServicesSection";
// import WhyLovely from "../../components/layout/WhyLovely";
// import LovelyValues from "../../components/layout/LovelyValues";
// import Together from "../../components/layout/Together";
// import YouSection from "../../sections/YouSection";

// /* --- GLOBAL BACKGROUND ENGINE --- */
// const GlobalBackground = () => {
//   const interactiveRef = useRef(null);

//   useEffect(() => {
//     const onMove = (e) => {
//       const { clientX, clientY } = e;
//       gsap.to(interactiveRef.current, {
//         background: `radial-gradient(circle 800px at ${clientX}px ${clientY}px, rgba(147, 51, 234, 0.07), transparent 100%)`,
//         duration: 1,
//       });
//     };
//     window.addEventListener("mousemove", onMove);
//     return () => window.removeEventListener("mousemove", onMove);
//   }, []);

//   return (
//     <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
//       {/* 1. Interactive Mouse Glow */}
//       <div ref={interactiveRef} className="absolute inset-0" />

//       {/* 2. Primary Protocol Orbs (Fixed Position) */}
//       <div className="absolute top-[-5%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
//       <div
//         className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[150px] rounded-full animate-pulse"
//         style={{ animationDelay: "2s" }}
//       />
//       <div
//         className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-red-600/05 blur-[130px] rounded-full animate-pulse"
//         style={{ animationDelay: "4s" }}
//       />

//       {/* 3. The Tech Grid */}
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
//           backgroundSize: "80px 80px",
//         }}
//       />
//     </div>
//   );
// };

// export default function HomePage() {
//   return (
//     <main className="relative bg-[#050505] text-white">
//       {/* Background is 'fixed', so it stays behind as you scroll through sections */}
//       <GlobalBackground />

//       {/* Content wrapper must be relative and z-10 to stay above background */}
//       <div className="relative z-10">
//         <Navbar />
//         <Hero />
//         <YouSection />
//         <Manifesto />
//         <WhyLovely />
//         <LovelyValues />
//         <AboutUs />
//         <Together />
//         <ServicesSection />
//         <ContactUs />
//       </div>
//     </main>
//   );
// }

//===============================================================
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import Hero from "../../components/home/Hero";
// import Manifesto from "../../components/layout/Manifesto";
// import Navbar from "../../components/navbar/Navbar";

// import { AboutUs } from "../../sections/AboutUs";
// import ContactUs from "../../sections/ContactUs";
// import ServicesSection from "../../sections/ServicesCode/ServicesSection";
// import WhyLovely from "../../components/layout/WhyLovely";
// import LovelyValues from "../../components/layout/LovelyValues";
// import Together from "../../components/layout/Together";
// import YouSection from "../../sections/YouSection";

// /* --- CLEAN BACKGROUND ENGINE --- */
// const GlobalBackground = () => {
//   const interactiveRef = useRef(null);

//   useEffect(() => {
//     const onMove = (e) => {
//       const { clientX, clientY } = e;
//       // Moving the glow slightly to keep it subtle against the new blue
//       gsap.to(interactiveRef.current, {
//         background: `radial-gradient(circle 800px at ${clientX}px ${clientY}px, rgba(37, 99, 235, 0.1), transparent 100%)`,
//         duration: 1,
//       });
//     };
//     window.addEventListener("mousemove", onMove);
//     return () => window.removeEventListener("mousemove", onMove);
//   }, []);

//   return (
//     <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#121C2F]">
//       {/* Interactive Mouse Glow - Kept it for the 'Vibe', but changed to Blue tint */}
//       <div ref={interactiveRef} className="absolute inset-0" />

//       {/* Removed Orbs and Tech Grid Texture */}
//     </div>
//   );
// };

// export default function HomePage() {
//   return (
//     // Updated background here as well to prevent flickering during loads
//     <main className="relative bg-[#121C2F] text-white">
//       <GlobalBackground />

//       <div className="relative z-10">
//         <Navbar />
//         <Hero />
//         <YouSection />
//         <Manifesto />
//         <WhyLovely />
//         <LovelyValues />
//         <AboutUs />
//         <Together />
//         <ServicesSection />
//         <ContactUs />
//       </div>
//     </main>
//   );
// }

// //===============================================================
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import Footer from "../../components/Footer";
// import Hero from "../../components/home/Hero";
// import Manifesto from "../../components/layout/Manifesto";
// import Navbar from "../../components/navbar/Navbar";

// import { AboutUs } from "../../sections/AboutUs";
// import ContactUs from "../../sections/ContactUs";
// import ServicesSection from "../../sections/ServicesCode/ServicesSection";
// import WhyLovely from "../../components/layout/WhyLovely";
// import LovelyValues from "../../components/layout/LovelyValues";
// import Together from "../../components/layout/Together";
// import YouSection from "../../sections/YouSection";

// /* --- GLOBAL BACKGROUND ENGINE --- */
// const GlobalBackground = () => {
//   const interactiveRef = useRef(null);

//   useEffect(() => {
//     const onMove = (e) => {
//       const { clientX, clientY } = e;
//       gsap.to(interactiveRef.current, {
//         background: `radial-gradient(circle 800px at ${clientX}px ${clientY}px, rgba(147, 51, 234, 0.07), transparent 100%)`,
//         duration: 1,
//       });
//     };
//     window.addEventListener("mousemove", onMove);
//     return () => window.removeEventListener("mousemove", onMove);
//   }, []);

//   return (
//     <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
//       {/* 1. Interactive Mouse Glow - KEPT */}
//       <div ref={interactiveRef} className="absolute inset-0" />

//       {/* 2. Primary Protocol Orbs (Fixed Position) - KEPT */}
//       <div className="absolute top-[-5%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
//       <div
//         className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[150px] rounded-full animate-pulse"
//         style={{ animationDelay: "2s" }}
//       />
//       <div
//         className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-red-600/05 blur-[130px] rounded-full animate-pulse"
//         style={{ animationDelay: "4s" }}
//       />

//       {/* 3. The Tech Grid was removed from here */}
//     </div>
//   );
// };

// export default function HomePage() {
//   return (
//     <main className="relative bg-[#050505] text-white">
//       <GlobalBackground />

//       <div className="relative z-10">
//         <Navbar />
//         <Hero />
//         <YouSection />
//         <Manifesto />
//         <WhyLovely />
//         <LovelyValues />
//         <AboutUs />
//         <Together />
//         <ServicesSection />
//         <ContactUs />
//         <Footer />
//       </div>
//     </main>
//   );
// }

//===============================================================
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import Footer from "../../components/Footer";
// import Hero from "../../components/home/Hero";
// import Manifesto from "../../components/layout/Manifesto";
// import Navbar from "../../components/navbar/Navbar";

// import { AboutUs } from "../../sections/AboutUs";
// import ContactUs from "../../sections/ContactUs";
// import ServicesSection from "../../sections/ServicesCode/ServicesSection";
// import WhyLovely from "../../components/layout/WhyLovely";
// import LovelyValues from "../../components/layout/LovelyValues";
// import Together from "../../components/layout/Together";
// import YouSection from "../../sections/YouSection";

// /* --- GLOBAL BACKGROUND ENGINE --- */
// const GlobalBackground = () => {
//   const interactiveRef = useRef(null);

//   useEffect(() => {
//     const onMove = (e) => {
//       const { clientX, clientY } = e;

//       // Instead of a gradient, we shift the position of a solid-color light source
//       // This creates a "Flashlight" effect using your solid #0B1320 color
//       gsap.to(interactiveRef.current, {
//         x: clientX - 400, // Centers the 800px circle on the mouse
//         y: clientY - 400,
//         duration: 1.5,
//         ease: "power2.out",
//       });
//     };

//     window.addEventListener("mousemove", onMove);
//     return () => window.removeEventListener("mousemove", onMove);
//   }, []);

//   return (
//     <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
//       {/* 1. SOLID NAVY LIGHT SOURCE (#0B1320) */}
//       <div
//         ref={interactiveRef}
//         className="absolute w-[800px] h-[800px] rounded-full opacity-40 blur-[120px]"
//         style={{ backgroundColor: "#0B1320" }}
//       />

//       {/* 2. PRIMARY PROTOCOL ORBS */}
//       <div className="absolute top-[-5%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />

//       <div
//         className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[150px] rounded-full animate-pulse"
//         style={{ animationDelay: "2s" }}
//       />

//       <div
//         className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-red-600/05 blur-[130px] rounded-full animate-pulse"
//         style={{ animationDelay: "4s" }}
//       />
//     </div>
//   );
// };

// /* --- MAIN HOME PAGE COMPONENT --- */
// export default function HomePage() {
//   return (
//     <main className="relative bg-[#050505] text-white selection:bg-blue-500/30">
//       <GlobalBackground />

//       <div className="relative z-10">
//         <Navbar />

//         <Hero />
//         <YouSection />
//         <Manifesto />
//         <WhyLovely />
//         <LovelyValues />
//         <AboutUs />
//         <Together />
//         <ServicesSection />
//         <ContactUs />

//         <Footer />
//       </div>
//     </main>
//   );
// }

//===============================================================
//==============================================================
//==============================================================
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

      // Flashlight effect using Strategic Blue (#3B82F6)
      // This creates a "Clarity" beam over the Midnight Graphite background
      gsap.to(interactiveRef.current, {
        x: clientX - 400,
        y: clientY - 400,
        duration: 1.8, // Slightly slower for a "heavy" premium feel
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0B1320]">
      {/* 1. STRATEGIC BLUE LIGHT SOURCE (#3B82F6) */}
      <div
        ref={interactiveRef}
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.07] blur-[120px]"
        style={{ backgroundColor: "#3B82F6" }}
      />

      {/* 2. INSTITUTIONAL ATMOSPHERE ORBS */}
      {/* Strategic Blue Orb */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[#3B82F6]/05 blur-[150px] rounded-full animate-pulse" />

      {/* Deep Steel Shadow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#111827]/40 blur-[150px] rounded-full" />

      {/* Muted Crimson Accent (Capital) - Very subtle pulse in the distance */}
      <div
        className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-[#C2413A]/05 blur-[130px] rounded-full animate-pulse"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
};

/* --- MAIN HOME PAGE COMPONENT --- */
export default function HomePage() {
  return (
    // Base Background: Midnight Graphite Blue (#0B1320)
    // Selection: Strategic Blue (#3B82F6)
    <main className="relative bg-[#0B1320] text-[#F5F7FA] selection:bg-[#3B82F6]/30">
      <GlobalBackground />

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
