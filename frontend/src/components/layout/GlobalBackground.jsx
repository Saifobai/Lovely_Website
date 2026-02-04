import { useEffect, useRef } from "react";
import gsap from "gsap";

const GlobalBackground = () => {
  const interactiveRef = useRef(null);

  useEffect(() => {
    // Disable mouse tracking on touch devices
    if ("ontouchstart" in window) return;

    const onMove = (e) => {
      const { clientX, clientY } = e;

      gsap.to(interactiveRef.current, {
        x: clientX - 400,
        y: clientY - 400,
        duration: 1.8,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0B1320]">
      {/* Interactive Strategic Blue Light */}
      <div
        ref={interactiveRef}
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.07] blur-[120px]"
        style={{ backgroundColor: "#3B82F6" }}
      />

      {/* Strategic Blue Atmosphere */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[#3B82F6]/05 blur-[150px] rounded-full animate-pulse" />

      {/* Deep Steel Shadow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#111827]/40 blur-[150px] rounded-full" />

      {/* Muted Crimson Accent */}
      <div
        className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-[#C2413A]/05 blur-[130px] rounded-full animate-pulse"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
};

export default GlobalBackground;
