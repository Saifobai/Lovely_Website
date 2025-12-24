// import Section from "../components/layout/Section";

// export function AboutUs() {
//   return (
//     <Section id="about" variant="darker">
//       {/* Badge */}
//       <span
//         className="inline-block bg-blue-500/10 text-blue-400
//         px-4 py-1 rounded-full text-sm mb-4"
//       >
//         About Us
//       </span>

//       {/* Heading */}
//       <h2 className="text-4xl font-bold max-w-2xl mb-6">
//         We Build Digital Products That Drive Growth
//       </h2>

//       {/* Description */}
//       <p className="text-gray-400 max-w-3xl leading-relaxed">
//         We are a{" "}
//         <span className="text-white font-medium">
//           boutique consulting collective
//         </span>{" "}
//         uniting experts in technology, immigration, business, real estate, and
//         event planning. Our strength lies in our partnerships with{" "}
//         <span className="text-white font-medium">
//           trusted professionals worldwide
//         </span>
//         —ensuring you receive accurate guidance and meaningful results.
//       </p>
//     </Section>
//   );
// }

//=======================================================

// import { motion } from "framer-motion";
// import Section from "../components/layout/Section";

// export function AboutUs() {
//   return (
//     <Section id="about" variant="deep">
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
//         {/* LEFT — SIGNAL */}
//         <motion.div
//           className="lg:col-span-4 space-y-8"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         >
//           {/* Badge */}
//           <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest border border-white/15 text-white/70 bg-white/5 backdrop-blur">
//             /// About Us
//           </span>

//           {/* Vertical Accent */}
//           <div className="h-24 w-px bg-gradient-to-b from-white/40 to-transparent" />
//         </motion.div>

//         {/* RIGHT — STORY */}
//         <motion.div
//           className="lg:col-span-8 space-y-10"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
//         >
//           {/* Heading */}
//           <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight max-w-3xl">
//             We design and guide{" "}
//             <span className="hollow-text">complex journeys</span>
//             <br />
//             into clear, confident outcomes.
//           </h2>

//           {/* Body */}
//           <div className="space-y-6 max-w-3xl text-gray-400 leading-relaxed text-lg">
//             <p>
//               We are a{" "}
//               <span className="text-white font-medium">
//                 boutique consulting collective
//               </span>{" "}
//               operating at the intersection of technology, immigration,
//               business, real estate, and live experiences.
//             </p>

//             <p>
//               Rather than scale teams, we scale{" "}
//               <span className="text-white font-medium">
//                 trust, precision, and partnerships
//               </span>
//               . Our work is powered by a carefully curated network of licensed
//               professionals, advisors, and operators across multiple
//               jurisdictions.
//             </p>

//             <p>
//               The result is simple: clients receive guidance that is not only
//               strategic, but{" "}
//               <span className="text-white font-medium">
//                 grounded, compliant, and human
//               </span>
//               .
//             </p>
//           </div>

//           {/* Signature */}
//           <div className="pt-6 flex items-center gap-6">
//             <div className="h-px w-16 bg-white/20" />
//             <span className="text-sm font-mono uppercase tracking-widest text-white/50">
//               Trusted. Precise. Global.
//             </span>
//           </div>
//         </motion.div>
//       </div>
//     </Section>
//   );
// }

//==============================================
import { motion } from "framer-motion";
import Section from "../components/layout/Section";
export function AboutUs() {
  return (
    <Section id="about">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 border-l border-white/10 pl-8">
          <p className="font-mono text-xs text-blue-500 uppercase tracking-widest mb-4">
            /// Identity
          </p>
          <h3 className="text-white text-2xl font-medium">LS DIGITAL AGENCY</h3>
        </div>
        <div className="lg:col-span-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light leading-tight text-white mb-12"
          >
            We transform{" "}
            <span className="hollow-text font-bold">abstract complexity</span>{" "}
            into tangible digital growth through precision engineering.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 text-slate-400 text-lg leading-relaxed">
            <p>
              Operating at the intersection of luxury design and functional
              technology, we scale trust rather than headcounts.
            </p>
            <p>
              Our result is guidance that is strategically grounded and
              human-centric across all jurisdictions.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
