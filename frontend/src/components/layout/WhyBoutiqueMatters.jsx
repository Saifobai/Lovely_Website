// import React, { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function WhyBoutiqueMatters() {
//   const navigate = useNavigate();
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".reveal-text", {
//         y: 30,
//         opacity: 0,
//         stagger: 0.15,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 85%",
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full py-20 md:py-40 text-white overflow-hidden"
//     >
//       {/* CSS for Shimmer Animation */}
//       <style>{`
//         @keyframes shimmer-btn {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//         .animate-shimmer {
//           animation: shimmer-btn 2.5s infinite;
//         }
//       `}</style>

//       {/* Background Subtle Gradient */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50 pointer-events-none" />

//       <div className="max-w-[1540px] mx-auto px-6 sm:px-10 md:px-16 relative z-10">
//         <div className="flex flex-col lg:flex-row lg:items-start gap-y-12">
//           {/* LEFT: Headline */}
//           <div className="w-full lg:w-[42%]">
//             <motion.h2 className="reveal-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase italic leading-[0.9] tracking-tighter">
//               We deliberately <br />
//               <span className="text-[#3B82F6] block mt-2">remain small</span>
//             </motion.h2>
//           </div>

//           {/* GAP (Desktop only) */}
//           <div className="hidden lg:block lg:w-[8%]" />

//           {/* RIGHT: Philosophy & Points */}
//           <div className="w-full lg:w-[50%] flex flex-col justify-between">
//             <div className="space-y-10 md:space-y-12">
//               {/* Mission Statement Split Logic */}
//               <div className="reveal-text text-lg sm:text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
//                 {"Large firms are built to scale frameworks, teams, and delivery. We’re built to stay close to decisions."
//                   .split(". ")
//                   .map((sentence, idx) => (
//                     <span
//                       key={idx}
//                       className={
//                         idx === 1
//                           ? "text-white font-bold italic block mt-4 md:mt-6"
//                           : ""
//                       }
//                     >
//                       {sentence}
//                       {idx === 0 ? "." : ""}
//                     </span>
//                   ))}
//               </div>

//               {/* Points */}
//               <div className="reveal-text space-y-6 md:space-y-8">
//                 <h4 className="text-[#3B82F6] font-bold tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[12px] flex items-center gap-4">
//                   <span className="w-8 h-[1px] bg-[#3B82F6]/30"></span>
//                   OUR WORK TYPICALLY BEGINS WHERE:
//                 </h4>

//                 <ul className="space-y-4 md:space-y-6">
//                   {[
//                     "The cost of a wrong decision is high",
//                     "Jurisdictions, capital, and execution collide",
//                     "Responsibility cannot be delegated down a hierarchy",
//                   ].map((point, i) => (
//                     <li
//                       key={i}
//                       className="flex items-start gap-4 md:gap-5 group"
//                     >
//                       <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#3B82F6] shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
//                       <span className="text-base md:text-xl text-slate-200 border-b border-white/5 pb-2 md:pb-3 w-full group-hover:text-white group-hover:border-[#3B82F6]/40 transition-all duration-500">
//                         {point}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <p className="reveal-text text-slate-400 italic leading-relaxed max-w-xl text-xs sm:text-sm md:text-base">
//                 We don’t optimize for volume. We optimize for judgment,
//                 discretion, and outcomes that endure. Engagements are selective
//                 and based on strategic fit.
//               </p>
//             </div>

//             {/* UPGRADED BUTTON: Responsive & Blue Theme */}
//             <div className="reveal-text mt-12 md:mt-16">
//               <button
//                 onClick={() => navigate("/book")}
//                 className="group relative h-16 lg:h-20 w-full max-w-[320px] overflow-hidden rounded-xl transition-all duration-500 shadow-2xl border border-[#3B82F6]/30"
//               >
//                 {/* Background State */}
//                 <div className="absolute inset-0 bg-[#3B82F6] transition-colors duration-500 group-hover:bg-[#2563EB]" />

//                 {/* Shimmer Effect Logic */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer opacity-30" />

//                 {/* Content */}
//                 <div className="relative z-10 flex items-center justify-between px-6 md:px-8">
//                   <span className="font-black uppercase italic tracking-tighter text-base md:text-lg text-white">
//                     Strategic conversation
//                   </span>
//                   <ArrowRight
//                     className="text-white group-hover:translate-x-1 transition-transform"
//                     size={20}
//                   />
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

//=====================================================================
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyBoutiqueMatters() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-40 text-white overflow-hidden"
    >
      <style>{`
        @keyframes shimmer-btn {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer-btn 2.5s infinite;
        }
      `}</style>

      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start">
          {/* LEFT: Headline - Centers text on mobile, left-aligns on desktop */}
          <div className="w-full lg:w-[42%] text-center lg:text-left mb-12 lg:mb-0">
            <motion.h2 className="reveal-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase italic leading-[0.9] tracking-tighter">
              We deliberately <br />
              <span className="text-[#3B82F6] block mt-2">remain small</span>
            </motion.h2>
          </div>

          {/* GAP (Desktop only) */}
          <div className="hidden lg:block lg:w-[8%]" />

          {/* RIGHT: Philosophy & Points */}
          <div className="w-full lg:w-[50%] flex flex-col">
            <div className="space-y-10 md:space-y-12 text-center lg:text-left">
              {/* Mission Statement */}
              <div className="reveal-text text-lg sm:text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                {"Large firms are built to scale frameworks, teams, and delivery. We’re built to stay close to decisions."
                  .split(". ")
                  .map((sentence, idx) => (
                    <span
                      key={idx}
                      className={
                        idx === 1
                          ? "text-white font-bold italic block mt-4 md:mt-6"
                          : ""
                      }
                    >
                      {sentence}
                      {idx === 0 ? "." : ""}
                    </span>
                  ))}
              </div>

              {/* Points */}
              <div className="reveal-text space-y-6 md:space-y-8">
                <h4 className="text-[#3B82F6] font-bold tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[12px] flex items-center justify-center lg:justify-start gap-4">
                  <span className="w-8 h-[1px] bg-[#3B82F6]/30"></span>
                  OUR WORK TYPICALLY BEGINS WHERE:
                </h4>

                <ul className="space-y-4 md:space-y-6 inline-block text-left mx-auto lg:mx-0">
                  {[
                    "The cost of a wrong decision is high",
                    "Jurisdictions, capital, and execution collide",
                    "Responsibility cannot be delegated down a hierarchy",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 md:gap-5 group"
                    >
                      <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-[#3B82F6] shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                      <span className="text-base md:text-xl text-slate-200 border-b border-white/5 pb-2 md:pb-3 w-full group-hover:text-white group-hover:border-[#3B82F6]/40 transition-all duration-500">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="reveal-text text-slate-400 italic leading-relaxed max-w-xl mx-auto lg:mx-0 text-xs sm:text-sm md:text-base">
                We don’t optimize for volume. We optimize for judgment,
                discretion, and outcomes that endure. Engagements are selective
                and based on strategic fit.
              </p>
            </div>

            {/* UPGRADED BUTTON: Centered on mobile, Left on desktop */}
            <div className="reveal-text mt-12 md:mt-16 flex justify-center lg:justify-start">
              <button
                onClick={() => navigate("/book")}
                className="group relative h-16 lg:h-20 w-full max-w-[320px] overflow-hidden rounded-xl transition-all duration-500 shadow-2xl border border-[#3B82F6]/30"
              >
                <div className="absolute inset-0 bg-[#3B82F6] transition-colors duration-500 group-hover:bg-[#2563EB]" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer opacity-30" />

                <div className="relative z-10 flex items-center justify-between px-6 md:px-8 h-full">
                  <span className="font-black uppercase italic tracking-tighter text-base md:text-lg text-white">
                    Strategic conversation
                  </span>
                  <ArrowRight
                    className="text-white group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
