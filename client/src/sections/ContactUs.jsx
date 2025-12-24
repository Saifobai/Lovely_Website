// import { useEffect, useState } from "react";
// import ContactInfoCard from "../components/contact/ContactInfoCard";
// import ContactForm from "../components/contact/ContactForm";
// import { Mail, Phone, MapPin } from "lucide-react";
// import Section from "../components/layout/Section";

// const ContactUs = () => {
//   const [openCalendar, setOpenCalendar] = useState(false);

//   // ✅ listen for hero CTA
//   useEffect(() => {
//     const handler = () => setOpenCalendar(true);
//     window.addEventListener("open-calendar", handler);
//     return () => window.removeEventListener("open-calendar", handler);
//   }, []);

//   return (
//     <Section id="contact" className="relative py-28 bg-[#020617]">
//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         {/* LEFT */}
//         <div>
//           <span
//             className="inline-flex items-center gap-2 px-4 py-1 rounded-full
//             bg-blue-500/10 text-blue-400 text-sm mb-6"
//           >
//             🚀 Let’s Build Something Amazing
//           </span>

//           <h2 className="text-4xl font-bold leading-tight mb-4">
//             Ready to Transform Your Digital Presence?
//           </h2>

//           <p className="text-gray-400 max-w-xl mb-10">
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//             accusantium doloremque laudantium.
//           </p>

//           <div className="space-y-6">
//             <ContactInfoCard
//               icon={<Mail />}
//               title="Email"
//               value="hello@example.com"
//               subtitle="We reply within 4 hours"
//             />

//             <ContactInfoCard
//               icon={<Phone />}
//               title="Phone"
//               value="+1 (555) 234-5678"
//               subtitle="Mon–Fri, 9AM–6PM"
//             />

//             {/* 🔥 NEW BOOK APPOINTMENT CARD
//             <BookAppointmentCard onClick={() => setOpenCalendar(true)} /> */}
//           </div>
//         </div>

//         {/* RIGHT */}
//         <ContactForm />
//       </div>
//     </Section>
//   );
// };

// export default ContactUs;

//=======================================================

// import React, { useState, useRef, useEffect } from "react";
// import {
//   motion,
//   useMotionTemplate,
//   useMotionValue,
//   useSpring,
// } from "framer-motion";
// import { Mail, Phone, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
// import Section from "../components/layout/Section";

// // --- MAIN COMPONENT ---
// export default function ContactUs() {
//   return (
//     <Section
//       id="contact"
//       className="relative py-28 bg-[#0a0a0a] overflow-hidden"
//     >
//       {/* ATMOSPHERE: Noise & Glow */}
//       <div className="noise-overlay"></div>
//       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
//           {/* --- LEFT COLUMN: INFO & VIBES --- */}
//           <div className="space-y-12">
//             {/* Header */}
//             <div className="space-y-6">
//               <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs font-mono uppercase tracking-widest backdrop-blur-md">
//                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
//                 System Online
//               </span>

//               <h2 className="text-5xl md:text-7xl font-bold leading-none text-white tracking-tight">
//                 Let's Start <br />
//                 <span className="hollow-text">The Protocol.</span>
//               </h2>

//               <p className="text-gray-400 text-lg max-w-md leading-relaxed">
//                 Ready to deploy your vision? We are standing by to intercept
//                 your signal. Transmission channels are open.
//               </p>
//             </div>

//             {/* 3D Tilt Cards */}
//             <div className="space-y-4">
//               <TiltCard
//                 icon={<Mail className="w-6 h-6" />}
//                 label="Encrypted Channel"
//                 value="hello@ls-digital.com"
//                 sub="Response time: < 4hrs"
//               />
//               <TiltCard
//                 icon={<Phone className="w-6 h-6" />}
//                 label="Voice Uplink"
//                 value="+1 (555) 234-5678"
//                 sub="Mon–Fri, 09:00–18:00"
//               />
//             </div>
//           </div>

//           {/* --- RIGHT COLUMN: THE HOLOGRAPHIC FORM --- */}
//           <div className="relative">
//             {/* Decorative Grid behind form */}
//             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150"></div>

//             <HoloForm />
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// }

// // --- SUB-COMPONENT: 3D TILT CARD ---
// // Uses Framer Motion to calculate mouse position relative to card center
// const TiltCard = ({ icon, label, value, sub }) => {
//   const ref = useRef(null);

//   // Motion values for rotation
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // Smooth spring animation for the rotation
//   const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
//   const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

//   const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

//   const handleMouseMove = (e) => {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;

//     // Calculate mouse position relative to center of card
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;

//     const xPct = mouseX / width - 0.5;
//     const yPct = mouseY / height - 0.5;

//     x.set(yPct * -20); // Rotate X based on Y movement
//     y.set(xPct * 20); // Rotate Y based on X movement
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{ transformStyle: "preserve-3d", transform }}
//       className="group relative w-full bg-white/5 border border-white/10 p-6 rounded-2xl cursor-pointer hover:bg-white/10 transition-colors duration-300"
//     >
//       <div
//         style={{ transform: "translateZ(50px)" }}
//         className="flex items-center gap-6"
//       >
//         <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-all duration-300">
//           {icon}
//         </div>
//         <div>
//           <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">
//             {label}
//           </p>
//           <h4 className="text-xl font-bold text-white">{value}</h4>
//           <p className="text-sm text-gray-400 mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
//             {sub}
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // --- SUB-COMPONENT: HOLOGRAPHIC FORM ---
// const HoloForm = () => {
//   const [focused, setFocused] = useState(null);
//   const [status, setStatus] = useState("idle"); // idle, loading, success

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStatus("loading");
//     setTimeout(() => setStatus("success"), 2000); // Simulate API call
//   };

//   if (status === "success") {
//     return (
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="h-full min-h-[400px] flex flex-col items-center justify-center bg-white/5 border border-green-500/30 rounded-3xl p-8 text-center backdrop-blur-xl"
//       >
//         <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-6">
//           <CheckCircle className="w-10 h-10" />
//         </div>
//         <h3 className="text-2xl font-bold text-white mb-2">
//           Transmission Received
//         </h3>
//         <p className="text-gray-400">
//           Our agents are analyzing your data. Expect contact shortly.
//         </p>
//         <button
//           onClick={() => setStatus("idle")}
//           className="mt-8 text-sm text-gray-500 hover:text-white underline decoration-gray-700 underline-offset-4"
//         >
//           Send another transmission
//         </button>
//       </motion.div>
//     );
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-[#0f1115]/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group"
//     >
//       {/* SCANLINE EFFECT */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-50 group-hover:animate-scanline pointer-events-none" />

//       <div className="space-y-8">
//         <HoloInput
//           label="Identity // Name"
//           placeholder="John Doe"
//           type="text"
//           isFocused={focused === "name"}
//           onFocus={() => setFocused("name")}
//           onBlur={() => setFocused(null)}
//         />
//         <HoloInput
//           label="Coordinates // Email"
//           placeholder="john@example.com"
//           type="email"
//           isFocused={focused === "email"}
//           onFocus={() => setFocused("email")}
//           onBlur={() => setFocused(null)}
//         />
//         <HoloInput
//           label="Transmission // Message"
//           placeholder="Tell us about your mission..."
//           type="textarea"
//           isFocused={focused === "message"}
//           onFocus={() => setFocused("message")}
//           onBlur={() => setFocused(null)}
//         />

//         <button
//           type="submit"
//           disabled={status === "loading"}
//           className="w-full relative overflow-hidden bg-white text-black font-bold py-5 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
//         >
//           <div className="relative z-10 flex items-center justify-center gap-2">
//             {status === "loading" ? (
//               <>
//                 <Loader2 className="animate-spin w-5 h-5" />
//                 <span>PROCESSING...</span>
//               </>
//             ) : (
//               <>
//                 <span>INITIATE UPLINK</span>
//                 <ArrowRight className="w-5 h-5" />
//               </>
//             )}
//           </div>
//           {/* Button Glitch Hover Effect */}
//           <div className="absolute inset-0 bg-blue-500 translate-y-[100%] hover:translate-y-0 transition-transform duration-300 mix-blend-difference" />
//         </button>
//       </div>
//     </form>
//   );
// };

// // --- SUB-COMPONENT: CUSTOM INPUT FIELD ---
// const HoloInput = ({
//   label,
//   placeholder,
//   type,
//   isFocused,
//   onFocus,
//   onBlur,
// }) => {
//   return (
//     <div className="relative group">
//       <label
//         className={`block text-xs font-mono uppercase tracking-widest mb-2 transition-colors ${
//           isFocused ? "text-blue-400" : "text-gray-500"
//         }`}
//       >
//         {label}
//       </label>

//       {type === "textarea" ? (
//         <textarea
//           rows={4}
//           className="w-full bg-transparent border-b border-white/20 py-3 text-white text-lg placeholder-white/20 focus:outline-none resize-none transition-colors"
//           placeholder={placeholder}
//           onFocus={onFocus}
//           onBlur={onBlur}
//         />
//       ) : (
//         <input
//           type={type}
//           className="w-full bg-transparent border-b border-white/20 py-3 text-white text-lg placeholder-white/20 focus:outline-none transition-colors"
//           placeholder={placeholder}
//           onFocus={onFocus}
//           onBlur={onBlur}
//         />
//       )}

//       {/* Animated Bottom Line */}
//       <div
//         className={`absolute bottom-0 left-0 h-[1px] bg-blue-500 transition-all duration-500 ease-out ${
//           isFocused
//             ? "w-full opacity-100 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
//             : "w-0 opacity-0"
//         }`}
//       />
//     </div>
//   );
// };

//========================================================

import React, { useState, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  Mail,
  Phone,
  ArrowRight,
  CheckCircle,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import Section from "../components/layout/Section";

// --- MAIN CONTACT US COMPONENT ---
export default function ContactUs() {
  return (
    <Section id="contact" className="bg-[#050505]">
      {/* 1. ATMOSPHERE: Deep Glows & Grid */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none opacity-30" />

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
        {/* --- LEFT COLUMN: BRAND NARRATIVE --- */}
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.2em]">
                Secure Uplink Active
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold leading-[0.9] text-white tracking-tighter"
            >
              INITIATE <br />
              <span className="hollow-text italic">THE SIGNAL.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg max-w-md leading-relaxed border-l border-white/10 pl-6"
            >
              Ready to deploy your vision? Our collective is standing by to
              intercept your requirements and engineer a path forward.
            </motion.p>
          </div>

          {/* 3D TILT INFO CARDS */}
          <div className="space-y-4">
            <TiltCard
              icon={<Mail className="w-5 h-5 text-blue-400" />}
              label="Secure Mail"
              value="hello@ls-digital.com"
              sub="Direct Protocol // Response < 4h"
            />
            <TiltCard
              icon={<Phone className="w-5 h-5 text-blue-400" />}
              label="Direct Line"
              value="+1 (555) 012-3456"
              sub="Voice Uplink // 09:00 - 18:00"
            />
          </div>
        </div>

        {/* --- RIGHT COLUMN: THE HOLOGRAPHIC INTERFACE --- */}
        <div className="relative">
          {/* Subtle Background Detail */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/5 to-purple-600/5 rounded-[40px] blur-2xl" />
          <HoloForm />
        </div>
      </div>
    </Section>
  );
}

// --- TILT CARD SUB-COMPONENT ---
const TiltCard = ({ icon, label, value, sub }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const ySpring = useSpring(y, { stiffness: 400, damping: 40 });
  const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(((e.clientY - rect.top) / rect.height - 0.5) * -15);
    y.set(((e.clientX - rect.left) / rect.width - 0.5) * 15);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ transformStyle: "preserve-3d", transform }}
      className="group relative bg-white/[0.03] border border-white/10 p-6 rounded-2xl cursor-pointer hover:bg-white/[0.06] transition-colors duration-500"
    >
      <div
        style={{ transform: "translateZ(40px)" }}
        className="flex items-center gap-6"
      >
        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors duration-500">
          {icon}
        </div>
        <div>
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            {label}
          </p>
          <h4 className="text-xl font-bold text-white tracking-tight">
            {value}
          </h4>
          <p className="text-xs text-slate-500 mt-1 font-mono">{sub}</p>
        </div>
      </div>
    </motion.div>
  );
};

// --- HOLOGRAPHIC FORM SUB-COMPONENT ---
const HoloForm = () => {
  const [focused, setFocused] = useState(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 2200);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-[580px] flex flex-col items-center justify-center bg-white/[0.02] border border-blue-500/20 rounded-3xl p-12 text-center backdrop-blur-xl"
      >
        <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-400 mb-8">
          <ShieldCheck className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4 tracking-tighter uppercase font-mono">
          Uplink Success
        </h3>
        <p className="text-slate-400 leading-relaxed max-w-xs">
          Your transmission has been encrypted and received. An operator will
          contact you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-10 text-xs font-mono text-slate-500 hover:text-blue-400 transition-colors uppercase tracking-[0.2em]"
        >
          [ Reset Terminal ]
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0c0c0c]/90 backdrop-blur-2xl border border-white/10 p-10 rounded-[32px] shadow-3xl relative overflow-hidden group"
    >
      {/* HUD Scanline Effect */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scanline pointer-events-none" />

      <div className="space-y-10">
        <HoloInput
          label="Identity / Name"
          placeholder="ENTER NAME"
          type="text"
          isFocused={focused === "name"}
          onFocus={() => setFocused("name")}
          onBlur={() => setFocused(null)}
        />
        <HoloInput
          label="Coordinate / Email"
          placeholder="EMAIL@DOMAIN.COM"
          type="email"
          isFocused={focused === "email"}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
        />
        <HoloInput
          label="Mission / Message"
          placeholder="DESCRIBE THE VISION..."
          type="textarea"
          isFocused={focused === "message"}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full relative overflow-hidden bg-white text-black font-bold py-5 rounded-xl transition-all hover:bg-blue-600 hover:text-white group/btn"
        >
          <div className="relative z-10 flex items-center justify-center gap-3">
            {status === "loading" ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" />
                <span className="font-mono tracking-widest uppercase">
                  Syncing...
                </span>
              </>
            ) : (
              <>
                <span className="font-mono tracking-[0.2em] uppercase text-xs">
                  Establish Uplink
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </>
            )}
          </div>
        </button>

        <p className="text-center text-[10px] font-mono text-slate-600 uppercase tracking-widest">
          End-to-End Encryption Guaranteed
        </p>
      </div>
    </form>
  );
};

// --- INPUT FIELD SUB-COMPONENT ---
const HoloInput = ({
  label,
  placeholder,
  type,
  isFocused,
  onFocus,
  onBlur,
}) => {
  return (
    <div className="relative">
      <label
        className={`block text-[10px] font-mono uppercase tracking-[0.2em] mb-3 transition-colors duration-500 ${
          isFocused ? "text-blue-400" : "text-slate-600"
        }`}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          rows={3}
          className="w-full bg-transparent border-b border-white/10 py-2 text-white text-lg placeholder-white/5 focus:outline-none resize-none transition-colors"
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      ) : (
        <input
          type={type}
          className="w-full bg-transparent border-b border-white/10 py-2 text-white text-lg placeholder-white/5 focus:outline-none transition-colors"
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}
      <div
        className={`absolute bottom-0 left-0 h-[1px] bg-blue-500 transition-all duration-700 ease-in-out ${
          isFocused ? "w-full shadow-[0_0_15px_#3b82f6]" : "w-0"
        }`}
      />
    </div>
  );
};
