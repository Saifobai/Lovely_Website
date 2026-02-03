import {
  motion,
  useMotionTemplate,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { Mail, ArrowRight, ShieldCheck } from "lucide-react";
import Section from "../components/layout/Section";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <Section id="contact" className="relative mt-20">
      {/* Refined Ambient Backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3B82F6]/5 rounded-full blur-[140px] pointer-events-none opacity-40" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C2413A]/5 rounded-full blur-[120px] pointer-events-none opacity-20" />

      {/* WIDTH CONTAINER */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6">
        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* LEFT */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-6xl font-black leading-[0.85] text-[#F5F7FA] tracking-tighter uppercase"
              >
                {t("contact.title.line1")} <br />
                <span className="text-[#3B82F6] italic">
                  {t("contact.title.line2")}
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[#9CA3AF] text-xl md:text-2xl max-w-md leading-relaxed border-l border-[#C2413A]/40 pl-8 italic font-light space-y-4"
              >
                {t("contact.description")
                  .split(".")
                  .filter(Boolean)
                  .map((sentence, i) => (
                    <span key={i} className="block">
                      {sentence.trim()}.
                    </span>
                  ))}
              </motion.p>
            </div>

            <SystemTerminal t={t} />
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3B82F6]/10 to-[#C2413A]/10 rounded-[40px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <HoloForm t={t} />
          </div>
        </div>
      </div>
    </Section>
  );
}

const SystemTerminal = ({ t }) => {
  const [logs, setLogs] = useState(["> Initializing secure uplink..."]);

  useEffect(() => {
    const messages = [
      "> Protocol: AES_256_STRICT",
      "> Gateway: Node_Dubai_Secure",
      "> Latency: 8ms // Status: Optimal",
      "> Decision_Partner: Active",
      "> Packet_Verification: Verified",
    ];
    let i = 0;
    const interval = setInterval(() => {
      setLogs((prev) => [...prev.slice(-3), messages[i]]);
      i = (i + 1) % messages.length;
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return <div className="space-y-6 max-w-sm"></div>;
};

const HoloForm = ({ t }) => {
  const [focused, setFocused] = useState(null);
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid =
    form.name.trim() &&
    form.email.trim() &&
    form.company.trim() &&
    form.message.trim() &&
    isEmailValid(form.email);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "", company: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 2000);
  };

  return (
    <form
      onMouseMove={handleMouseMove}
      onSubmit={handleSubmit}
      className="relative bg-[#0B1320]/80 backdrop-blur-3xl border border-[#1F2937] p-10 md:p-14 rounded-[40px] shadow-2xl overflow-hidden group/form"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[40px] opacity-0 group-hover/form:opacity-100 transition duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.05),
              transparent 80%
            )
          `,
        }}
      />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full flex items-center justify-center text-[#3B82F6] mx-auto mb-8">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black text-[#F5F7FA] mb-4 tracking-tighter uppercase italic">
              Handshake_Confirmed
            </h3>
            <p className="text-[#9CA3AF] text-lg italic">
              Message received. A principal advisor will contact you.
            </p>
          </motion.div>
        ) : (
          <motion.div key="form" className="space-y-12 relative z-10">
            <HoloInput
              label={t("contact.form.name.label")}
              placeholder={t("contact.form.name.placeholder")}
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              isFocused={focused === "name"}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
            />
            <HoloInput
              label={t("contact.form.email.label")}
              placeholder={t("contact.form.email.placeholder")}
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              isFocused={focused === "email"}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
            />

            <HoloInput
              label={t("contact.form.company.label")}
              placeholder={t("contact.form.company.placeholder")}
              type="text"
              name="company"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              isFocused={focused === "company"}
              onFocus={() => setFocused("company")}
              onBlur={() => setFocused(null)}
            />

            <HoloInput
              label={t("contact.form.message.label")}
              placeholder={t("contact.form.message.placeholder")}
              type="textarea"
              name="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              isFocused={focused === "message"}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
            />

            <button
              type="submit"
              disabled={status === "loading" || !isFormValid}
              className={`group relative w-full py-6 rounded-2xl overflow-hidden transition-all active:scale-[0.99] ${
                !isFormValid ? "bg-[#1F2937] cursor-not-allowed" : "bg-white"
              }`}
            >
              <div className="absolute inset-0 bg-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span
                className={`relative z-10 font-black uppercase text-xs tracking-[0.4em] flex items-center justify-center gap-3 transition-colors ${
                  !isFormValid
                    ? "text-[#4B5563]"
                    : "text-black group-hover:text-white"
                }`}
              >
                {status === "loading"
                  ? "Transmitting..."
                  : t("contact.form.submit")}
                <ArrowRight size={16} />
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

const HoloInput = ({
  label,
  placeholder,
  type,
  name,
  value,
  onChange,
  isFocused,
  onFocus,
  onBlur,
}) => (
  <div className="relative group/input">
    <label
      className={`block text-[9px] font-bold font-mono uppercase tracking-[0.4em] mb-4 transition-colors duration-500 ${
        isFocused ? "text-[#3B82F6]" : "text-[#4B5563]"
      }`}
    >
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={2}
        onFocus={onFocus}
        onBlur={onBlur}
        className="w-full bg-transparent border-b border-[#1F2937] py-3 text-[#F5F7FA] text-lg placeholder-[#1F2937] focus:outline-none resize-none transition-all focus:border-[#3B82F6]"
        placeholder={placeholder}
      />
    ) : (
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
        className="w-full bg-transparent border-b border-[#1F2937] py-3 text-[#F5F7FA] text-lg placeholder-[#1F2937] focus:outline-none transition-all focus:border-[#3B82F6]"
        placeholder={placeholder}
      />
    )}
    <div
      className={`absolute bottom-0 left-0 h-[1px] bg-[#3B82F6] transition-all duration-1000 ${
        isFocused
          ? "w-full opacity-100 shadow-[0_0_10px_#3B82F6]"
          : "w-0 opacity-0"
      }`}
    />
  </div>
);
