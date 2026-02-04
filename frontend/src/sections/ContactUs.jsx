// import {
//   motion,
//   useMotionTemplate,
//   useMotionValue,
//   AnimatePresence,
// } from "framer-motion";
// import {
//   ArrowRight,
//   ShieldCheck,
//   Terminal as TerminalIcon,
// } from "lucide-react";
// import Section from "../components/layout/Section";
// import { useTranslation } from "react-i18next";
// import { useEffect, useState } from "react";
// import { ContactServicesSelection } from "../constants";

// /* =========================
//    CONTACT PAGE
// ========================= */

// export default function ContactUs() {
//   const { t } = useTranslation();

//   return (
//     <Section id="contact" className="relative mt-20 lg:mt-32 pb-20">
//       {/* Ambient Glows */}
//       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3B82F6]/5 rounded-full blur-[140px] opacity-40 pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C2413A]/5 rounded-full blur-[120px] opacity-20 pointer-events-none" />

//       <div className="relative z-10 max-w-[1500px] mx-auto px-6">
//         <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
//           {/* LEFT */}
//           <div className="w-full lg:w-[45%] space-y-12">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-5xl md:text-7xl font-black uppercase leading-[0.9]"
//             >
//               {t("contact.title.line1")}
//               <br />
//               <span className="text-[#3B82F6] italic">
//                 {t("contact.title.line2")}
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="text-[#9CA3AF] text-lg md:text-2xl max-w-lg border-l border-[#3B82F6]/30 pl-6 italic"
//             >
//               {t("contact.description")
//                 .split(".")
//                 .filter(Boolean)
//                 .map((s, i) => (
//                   <span key={i} className="block">
//                     {s.trim()}.
//                   </span>
//                 ))}
//             </motion.p>
//           </div>

//           {/* RIGHT */}
//           <div className="w-full lg:w-[55%] relative group">
//             <div className="absolute -inset-1 bg-gradient-to-r from-[#3B82F6]/20 to-transparent blur-2xl rounded-[40px] opacity-0 group-hover:opacity-100 transition duration-1000" />
//             <HoloForm t={t} />
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// }

// /* =========================
//    FORM
// ========================= */

// const HoloForm = ({ t }) => {
//   const [focused, setFocused] = useState(null);
//   const [status, setStatus] = useState("idle");
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     company: "",
//     service: "",
//     message: "",
//   });

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const isFormValid =
//     form.name && form.email.includes("@") && form.service && form.message;

//   function handleMouseMove({ currentTarget, clientX, clientY }) {
//     const { left, top } = currentTarget.getBoundingClientRect();
//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!isFormValid) return;

//     setStatus("loading");
//     setTimeout(() => {
//       setStatus("success");
//       setForm({
//         name: "",
//         email: "",
//         company: "",
//         service: "",
//         message: "",
//       });
//       setTimeout(() => setStatus("idle"), 5000);
//     }, 2000);
//   }

//   return (
//     <form
//       onMouseMove={handleMouseMove}
//       onSubmit={handleSubmit}
//       className="relative bg-[#0B1320]/90 backdrop-blur-3xl border border-[#1F2937] p-8 md:p-14 rounded-[40px] shadow-2xl overflow-hidden"
//     >
//       {/* Spotlight */}
//       <motion.div
//         className="pointer-events-none absolute -inset-px rounded-[40px] opacity-0 group-hover:opacity-100 transition"
//         style={{
//           background: useMotionTemplate`
//             radial-gradient(
//               400px circle at ${mouseX}px ${mouseY}px,
//               rgba(59,130,246,0.1),
//               transparent 80%
//             )
//           `,
//         }}
//       />

//       <AnimatePresence mode="wait">
//         {status === "success" ? (
//           <motion.div
//             key="success"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="text-center py-20"
//           >
//             <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
//               <ShieldCheck size={40} />
//             </div>
//             <h3 className="text-3xl font-black uppercase italic mb-4">
//               Transmission_Received
//             </h3>
//             <p className="text-[#9CA3AF] italic">
//               A principal advisor will contact you shortly.
//             </p>
//           </motion.div>
//         ) : (
//           <div className="space-y-10 relative z-10">
//             <div className="grid md:grid-cols-2 gap-10">
//               <HoloInput
//                 label={t("contact.form.name.label")}
//                 placeholder={t("contact.form.name.placeholder")}
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 isFocused={focused === "name"}
//                 onFocus={() => setFocused("name")}
//                 onBlur={() => setFocused(null)}
//               />
//               <HoloInput
//                 label={t("contact.form.email.label")}
//                 placeholder={t("contact.form.email.placeholder")}
//                 type="email"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 isFocused={focused === "email"}
//                 onFocus={() => setFocused("email")}
//                 onBlur={() => setFocused(null)}
//               />
//             </div>

//             <HoloInput
//               label={t("contact.form.company.label") || "Organization"}
//               placeholder={t("contact.form.company.placeholder")}
//               value={form.company}
//               onChange={(e) => setForm({ ...form, company: e.target.value })}
//               isFocused={focused === "company"}
//               onFocus={() => setFocused("company")}
//               onBlur={() => setFocused(null)}
//             />

//             <HoloInput
//               label={t("contact.form.service.label") || "Service"}
//               type="select"
//               placeholder="Select a service"
//               value={form.service}
//               options={ContactServicesSelection}
//               onChange={(e) => setForm({ ...form, service: e.target.value })}
//               isFocused={focused === "service"}
//               onFocus={() => setFocused("service")}
//               onBlur={() => setFocused(null)}
//             />

//             <HoloInput
//               label={t("contact.form.message.label")}
//               placeholder={t("contact.form.message.placeholder")}
//               type="textarea"
//               value={form.message}
//               onChange={(e) => setForm({ ...form, message: e.target.value })}
//               isFocused={focused === "message"}
//               onFocus={() => setFocused("message")}
//               onBlur={() => setFocused(null)}
//             />

//             <button
//               type="submit"
//               disabled={!isFormValid || status === "loading"}
//               className={`relative w-full py-6 rounded-xl uppercase tracking-[0.4em] font-black transition ${
//                 !isFormValid
//                   ? "bg-[#1F2937] text-[#4B5563] cursor-not-allowed"
//                   : "bg-white text-black hover:bg-[#3B82F6] hover:text-white"
//               }`}
//             >
//               {status === "loading" ? "Transmitting..." : "Initiate Contact"}
//               <ArrowRight className="inline ml-3" size={16} />
//             </button>
//           </div>
//         )}
//       </AnimatePresence>
//     </form>
//   );
// };

// /* =========================
//    INPUT
// ========================= */

// const HoloInput = ({
//   label,
//   placeholder,
//   type,
//   value,
//   onChange,
//   isFocused,
//   onFocus,
//   onBlur,
//   options,
//   required = false,
// }) => {
//   const arrowX = useMotionValue(0);
//   const arrowY = useMotionValue(0);

//   const isInvalid = required && !value;

//   function handleArrowMouseMove(e) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     arrowX.set((e.clientX - rect.left - rect.width / 2) * 0.25);
//     arrowY.set((e.clientY - rect.top - rect.height / 2) * 0.25);
//   }

//   function resetArrow() {
//     arrowX.set(0);
//     arrowY.set(0);
//   }

//   return (
//     <div className="relative">
//       <label
//         className={`block text-[9px] font-mono uppercase tracking-[0.3em] mb-2 transition-colors ${
//           isFocused ? "text-[#3B82F6]" : "text-[#4B5563]"
//         }`}
//       >
//         {label}
//       </label>

//       {/* TEXTAREA */}
//       {type === "textarea" && (
//         <textarea
//           rows={3}
//           value={value}
//           onChange={onChange}
//           onFocus={onFocus}
//           onBlur={onBlur}
//           placeholder={placeholder}
//           className="w-full bg-transparent border-b border-[#1F2937] py-2 text-[#F5F7FA] focus:border-[#3B82F6] outline-none resize-none"
//         />
//       )}

//       {/* SELECT */}
//       {type === "select" && (
//         <div className="relative">
//           <select
//             value={value}
//             onChange={onChange}
//             onFocus={onFocus}
//             onBlur={onBlur}
//             className="w-full bg-transparent border-b border-[#1F2937] py-2 pr-12 text-[#F5F7FA] focus:border-[#3B82F6] outline-none appearance-none cursor-pointer"
//           >
//             <option value="" disabled>
//               {placeholder}
//             </option>
//             {Object.entries(options).map(([key, label]) => (
//               <option key={key} value={key} className="bg-[#020617]">
//                 {label}
//               </option>
//             ))}
//           </select>

//           {/* Dropdown Illusion Glow */}
//           <motion.div
//             initial={false}
//             animate={{
//               opacity: isFocused ? 1 : 0,
//               scaleY: isFocused ? 1 : 0.6,
//             }}
//             transition={{ duration: 0.35, ease: "easeOut" }}
//             className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-b from-[#3B82F6]/10 to-transparent"
//           />

//           {/* Magnetic Arrow */}
//           <motion.div
//             onMouseMove={handleArrowMouseMove}
//             onMouseLeave={resetArrow}
//             style={{ x: arrowX, y: arrowY }}
//             animate={{
//               rotate: isFocused ? 180 : 0,
//               color: isFocused ? "#3B82F6" : "#4B5563",
//             }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             className="pointer-events-auto absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
//           >
//             <svg
//               width="14"
//               height="14"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <polyline points="6 9 12 15 18 9" />
//             </svg>
//           </motion.div>
//         </div>
//       )}

//       {/* INPUT */}
//       {!type && (
//         <input
//           type="text"
//           value={value}
//           onChange={onChange}
//           onFocus={onFocus}
//           onBlur={onBlur}
//           placeholder={placeholder}
//           className="w-full bg-transparent border-b border-[#1F2937] py-2 text-[#F5F7FA] focus:border-[#3B82F6] outline-none"
//         />
//       )}

//       {/* Underline + Invalid Pulse */}
//       <motion.div
//         animate={{
//           width: isFocused ? "100%" : "0%",
//           opacity: isFocused ? 1 : 0,
//           boxShadow:
//             isInvalid && !isFocused
//               ? "0 0 12px rgba(59,130,246,0.6)"
//               : "0 0 10px rgba(59,130,246,0.9)",
//         }}
//         transition={{
//           width: { duration: 0.4 },
//           boxShadow: isInvalid
//             ? { repeat: Infinity, duration: 1.6, repeatType: "mirror" }
//             : { duration: 0.3 },
//         }}
//         className="absolute bottom-0 left-0 h-px bg-[#3B82F6]"
//       />
//     </div>
//   );
// };

//============================================================================
//============================================================================
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Section from "../components/layout/Section";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ContactServicesSelection } from "../constants";

/* =========================
   CONTACT PAGE
========================= */

export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <Section id="contact" className="relative mt-20 lg:mt-32 pb-20">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3B82F6]/5 rounded-full blur-[140px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C2413A]/5 rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* LEFT */}
          <div className="w-full lg:w-[45%] space-y-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black uppercase leading-[0.9]"
            >
              {t("contact.title.line1")}
              <br />
              <span className="text-[#3B82F6] italic">
                {t("contact.title.line2")}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#9CA3AF] text-lg md:text-2xl max-w-lg border-l border-[#3B82F6]/30 pl-6 italic"
            >
              {t("contact.description")
                .split(".")
                .filter(Boolean)
                .map((s, i) => (
                  <span key={i} className="block">
                    {s.trim()}.
                  </span>
                ))}
            </motion.p>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-[55%] relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3B82F6]/20 to-transparent blur-2xl rounded-[40px] opacity-0 group-hover:opacity-100 transition duration-1000" />
            <HoloForm t={t} />
          </div>
        </div>
      </div>
    </Section>
  );
}

/* =========================
   FORM
========================= */

const HoloForm = ({ t }) => {
  const [focused, setFocused] = useState(null);
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const isFormValid =
    form.name && form.email.includes("@") && form.service && form.message;

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    }, 2000);
  }

  return (
    <form
      onMouseMove={handleMouseMove}
      onSubmit={handleSubmit}
      className="relative bg-[#0B1320]/90 backdrop-blur-3xl border border-[#1F2937] p-8 md:p-14 rounded-[40px] shadow-2xl overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[40px]"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(59,130,246,0.1),
              transparent 80%
            )
          `,
        }}
      />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
              <ShieldCheck size={40} />
            </div>
            <h3 className="text-3xl font-black uppercase italic mb-4">
              Transmission_Received
            </h3>
            <p className="text-[#9CA3AF] italic">
              A principal advisor will contact you shortly.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-10 relative z-10">
            <div className="grid md:grid-cols-2 gap-10">
              <HoloInput
                label={t("contact.form.name.label")}
                placeholder={t("contact.form.name.placeholder")}
                value={form.name}
                required
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                isFocused={focused === "name"}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
              />
              <HoloInput
                label={t("contact.form.email.label")}
                placeholder={t("contact.form.email.placeholder")}
                type="email"
                value={form.email}
                required
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                isFocused={focused === "email"}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <HoloInput
              label={t("contact.form.company.label")}
              placeholder={t("contact.form.company.placeholder")}
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              isFocused={focused === "company"}
              onFocus={() => setFocused("company")}
              onBlur={() => setFocused(null)}
            />

            <HoloInput
              label={t("contact.form.service.label")}
              type="select"
              placeholder="Select a service"
              value={form.service}
              required
              options={ContactServicesSelection}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              isFocused={focused === "service"}
              onFocus={() => setFocused("service")}
              onBlur={() => setFocused(null)}
            />

            <HoloInput
              label={t("contact.form.message.label")}
              placeholder={t("contact.form.message.placeholder")}
              type="textarea"
              value={form.message}
              required
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              isFocused={focused === "message"}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
            />

            <button
              type="submit"
              disabled={!isFormValid || status === "loading"}
              className={`w-full py-6 rounded-xl uppercase tracking-[0.4em] font-black transition ${
                !isFormValid
                  ? "bg-[#1F2937] text-[#4B5563] cursor-not-allowed"
                  : "bg-white text-black hover:bg-[#3B82F6] hover:text-white"
              }`}
            >
              {status === "loading" ? "Transmitting..." : "Initiate Contact"}
              <ArrowRight className="inline ml-3" size={16} />
            </button>
          </div>
        )}
      </AnimatePresence>
    </form>
  );
};

/* =========================
   INPUT
========================= */

const HoloInput = ({
  label,
  placeholder,
  type,
  value,
  onChange,
  isFocused,
  onFocus,
  onBlur,
  options,
  required = false,
}) => {
  const arrowX = useMotionValue(0);
  const arrowY = useMotionValue(0);

  const isInvalid = required && !value;
  const isEmailValid =
    type === "email" ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) : true;

  function handleArrowMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    arrowX.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    arrowY.set((e.clientY - rect.top - rect.height / 2) * 0.25);
  }

  function resetArrow() {
    arrowX.set(0);
    arrowY.set(0);
  }

  return (
    <div className="relative">
      <label
        className={`block text-[9px] font-mono uppercase tracking-[0.3em] mb-2 ${
          isFocused ? "text-[#3B82F6]" : "text-[#4B5563]"
        }`}
      >
        {label}
      </label>

      {type === "textarea" && (
        <textarea
          rows={3}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-[#1F2937] py-2 text-[#F5F7FA] outline-none resize-none"
        />
      )}

      {type === "select" && (
        <div className="relative">
          <select
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className="w-full bg-transparent border-b border-[#1F2937] py-2 pr-12 text-slate-400 outline-none appearance-none cursor-pointer"
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {Object.entries(options).map(([key, label]) => (
              <option key={key} value={key} className="bg-[#020617]">
                {label}
              </option>
            ))}
          </select>

          <motion.div
            animate={{
              rotate: isFocused ? 180 : 0,
              color: isFocused ? "#3B82F6" : "#4B5563",
            }}
            style={{ x: arrowX, y: arrowY }}
            onMouseMove={handleArrowMouseMove}
            onMouseLeave={resetArrow}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </div>
      )}

      {type !== "textarea" && type !== "select" && (
        <input
          type={type || "text"}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-[#1F2937] py-2 text-[#F5F7FA] outline-none"
        />
      )}

      <motion.div
        animate={{
          width: isFocused ? "100%" : "0%",
          opacity: isFocused ? 1 : 0,
          boxShadow:
            isInvalid || (type === "email" && !isEmailValid)
              ? "0 0 12px rgba(59,130,246,0.6)"
              : "0 0 10px rgba(59,130,246,0.9)",
        }}
        transition={{
          width: { duration: 0.4 },
          boxShadow:
            isInvalid || (type === "email" && !isEmailValid)
              ? { repeat: Infinity, duration: 1.6, repeatType: "mirror" }
              : { duration: 0.3 },
        }}
        className="absolute bottom-0 left-0 h-px bg-[#3B82F6]"
      />
    </div>
  );
};
