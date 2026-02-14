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
//         y: 40,
//         opacity: 0,
//         stagger: 0.2,
//         duration: 1.2,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%",
//         },
//       });
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full py-24 md:py-40 mt-10 text-white overflow-hidden"
//     >
//       {/* Background Subtle Gradient */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50 pointer-events-none" />

//       <div className="max-w-[1540px] mx-auto px-6 md:px-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12">
//           {/* LEFT SIDE: Headline (Span 5) */}
//           <div className="lg:col-span-5">
//             <motion.h2 className="reveal-text text-5xl md:text-7xl font-black uppercase italic leading-[0.85] tracking-tighter">
//               We deliberately <br />
//               <span className="text-blue-600">remain small</span>
//             </motion.h2>
//           </div>

//           {/* THE GAP: col-span-1 hidden on mobile, creates clear air on desktop */}
//           <div className="hidden lg:block lg:col-span-1" />

//           {/* RIGHT SIDE: Philosophy & Points (Span 6) */}
//           <div className="lg:col-span-6 flex flex-col justify-between">
//             <div className="space-y-12">
//               {/* Logic: Splitting the text by the period to force the mission statement to a new line */}
//               <div className="reveal-text text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
//                 {"Large firms are built to scale frameworks, teams, and delivery. We’re built to stay close to decisions."
//                   .split(". ")
//                   .map((sentence, idx) => (
//                     <span
//                       key={idx}
//                       className={
//                         idx === 1
//                           ? "text-white font-bold italic block mt-6"
//                           : ""
//                       }
//                     >
//                       {sentence}
//                       {idx === 0 ? "." : ""}
//                     </span>
//                   ))}
//               </div>

//               <div className="reveal-text space-y-8">
//                 <h4 className="text-blue-500 font-bold tracking-[0.3em] text-[10px] flex items-center gap-4">
//                   <span className="w-8 h-[1px] bg-blue-500/30"></span>
//                   Our work typically begins where:
//                 </h4>
//                 <ul className="space-y-6">
//                   {[
//                     "The cost of a wrong decision is high",
//                     "Jurisdictions, capital, and execution collide",
//                     "Responsibility cannot be delegated down a hierarchy",
//                   ].map((point, i) => (
//                     <li key={i} className="flex items-start gap-5 group">
//                       <span className="mt-3 w-1 h-1 rounded-full bg-blue-600 group-hover:scale-[2] transition-transform duration-500 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
//                       <span className="text-lg md:text-xl text-slate-200 border-b border-white/5 pb-3 w-full group-hover:text-white group-hover:border-blue-500/30 transition-all duration-500">
//                         {point}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <p className="reveal-text text-slate-400 italic leading-relaxed max-w-xl text-sm md:text-base">
//                 We don’t optimize for volume. We optimize for judgment,
//                 discretion, and outcomes that endure. Engagements are selective
//                 and based on strategic fit.
//               </p>
//             </div>

//             {/* CTA Button */}
//             <div className="reveal-text mt-16">
//               <button
//                 onClick={() => navigate("/book")}
//                 className="group relative flex items-center gap-6 bg-white text-black px-8 py-6 rounded-full overflow-hidden transition-all hover:pr-12 active:scale-95"
//               >
//                 <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//                 <span className="relative z-10 font-black uppercase italic tracking-tighter text-lg md:text-xl group-hover:text-white transition-colors">
//                   Request a strategic conversation
//                 </span>
//                 <ArrowRight
//                   className="relative z-10 group-hover:translate-x-2 transition-transform group-hover:text-white"
//                   size={24}
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

//======================================================================
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
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-40 mt-10 ml-10 text-white overflow-hidden"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-[1540px]   mx-auto px-6 md:px-12 relative z-10">
        {/* FLEX CONTAINER */}
        <div className="flex flex-col lg:flex-row gap-y-12">
          {/* LEFT: Headline */}
          <div className="lg:w-[42%]">
            <motion.h2 className="reveal-text text-5xl md:text-6xl font-black uppercase italic leading-[0.85] tracking-tighter">
              We deliberately <br />
              <span className="text-blue-600">remain small</span>
            </motion.h2>
          </div>

          {/* GAP (Desktop only) */}
          <div className="hidden lg:block lg:w-[8%]" />

          {/* RIGHT: Philosophy & Points */}
          <div className="lg:w-[50%] lg:ml-6 flex flex-col justify-between">
            <div className="space-y-12">
              {/* Mission Statement */}
              <div className="reveal-text text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                {"Large firms are built to scale frameworks, teams, and delivery. We’re built to stay close to decisions."
                  .split(". ")
                  .map((sentence, idx) => (
                    <span
                      key={idx}
                      className={
                        idx === 1
                          ? "text-white font-bold italic block mt-6"
                          : ""
                      }
                    >
                      {sentence}
                      {idx === 0 ? "." : ""}
                    </span>
                  ))}
              </div>

              {/* Points */}
              <div className="reveal-text space-y-8">
                <h4 className="text-blue-500 font-bold tracking-[0.3em] text-[12px] flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-blue-500/30"></span>
                  Our work typically begins where:
                </h4>

                <ul className="space-y-6">
                  {[
                    "The cost of a wrong decision is high",
                    "Jurisdictions, capital, and execution collide",
                    "Responsibility cannot be delegated down a hierarchy",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-5 group">
                      <span className="mt-3 w-1 h-1 rounded-full bg-blue-600 group-hover:scale-[2] transition-transform duration-500 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                      <span className="text-lg md:text-xl text-slate-200 border-b border-white/5 pb-3 w-full group-hover:text-white group-hover:border-blue-500/30 transition-all duration-500">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="reveal-text text-slate-400 italic leading-relaxed max-w-xl text-sm md:text-base">
                We don’t optimize for volume. We optimize for judgment,
                discretion, and outcomes that endure. Engagements are selective
                and based on strategic fit.
              </p>
            </div>

            {/* CTA */}
            <div className="reveal-text mt-16">
              <button
                onClick={() => navigate("/book")}
                className="group relative flex items-center gap-6 bg-white text-black px-8 py-6 rounded-full overflow-hidden transition-all hover:pr-12 active:scale-95"
              >
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 font-black uppercase italic tracking-tighter text-lg md:text-xl group-hover:text-white transition-colors">
                  Request a strategic conversation
                </span>
                <ArrowRight
                  className="relative z-10 group-hover:translate-x-2 transition-transform group-hover:text-white"
                  size={24}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
