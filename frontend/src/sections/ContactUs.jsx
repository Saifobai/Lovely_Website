import {
  motion,
  useMotionTemplate,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { ArrowDown, ArrowRight, ShieldCheck } from "lucide-react";
import Section from "../components/layout/Section";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { ContactServicesSelection } from "../constants";

const API_URL = import.meta.env.VITE_API_URL;

export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <Section
      id="contact"
      className="relative mt-12 lg:mt-32 pb-20 overflow-hidden"
    >
      {/* Background Blobs - Slightly smaller for mobile to prevent layout shift */}
      <div className="absolute top-0 right-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-[#3B82F6]/5 rounded-full blur-[80px] lg:blur-[140px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] lg:w-[500px] h-[250px] lg:h-[500px] bg-[#C2413A]/5 rounded-full blur-[70px] lg:blur-[120px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
          {/* LEFT: Content */}
          <div className="w-full lg:w-[45%] space-y-8 lg:space-y-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-[0.95] tracking-tighter"
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
              className="text-[#9CA3AF] text-base sm:text-lg md:text-2xl max-w-lg border-l border-[#3B82F6]/30 pl-4 sm:pl-6 italic"
            >
              {t("contact.description")
                .split(".")
                .filter(Boolean)
                .map((s, i) => (
                  <span key={i} className="block mb-1">
                    {s.trim()}.
                  </span>
                ))}
            </motion.p>
          </div>

          {/* RIGHT: Form */}
          <div className="w-full lg:w-[55%] relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3B82F6]/20 to-transparent blur-2xl rounded-[30px] lg:rounded-[40px] opacity-0 lg:group-hover:opacity-100 transition duration-1000" />
            <HoloForm t={t} />
          </div>
        </div>
      </div>
    </Section>
  );
}

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

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid || status === "loading") return;

    setStatus("loading");

    try {
      const res = await fetch(`${API_URL}/contact/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: `
          Service: ${ContactServicesSelection[form.service]}
          Company: ${form.company || "—"}

          ${form.message}
                `.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  }

  return (
    <form
      onMouseMove={handleMouseMove}
      onSubmit={handleSubmit}
      className="relative bg-[#0B1320]/90 backdrop-blur-3xl border border-[#1F2937] p-6 sm:p-10 lg:p-14 rounded-[30px] lg:rounded-[40px] shadow-2xl overflow-visible"
    >
      {/* Only show radial gradient on devices with hover capabilities */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[30px] lg:rounded-[40px] hidden lg:block"
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
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-sm italic text-center"
          >
            Failed to send message. Please try again.
          </motion.p>
        )}

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 lg:py-20"
          >
            <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 lg:mb-8 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl lg:text-3xl font-black uppercase italic mb-2">
              Transmission_Received
            </h3>
            <p className="text-[#9CA3AF] text-sm lg:text-base italic">
              Your message has been sent successfully .
            </p>
          </motion.div>
        ) : (
          <div className="space-y-8 lg:space-y-10 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
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
              label="Select your service"
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
              className={`w-full py-5 lg:py-6 rounded-xl  tracking-[0.2em] lg:tracking-[0.4em] font-black text-xs lg:text-sm transition ${
                !isFormValid
                  ? "bg-[#1F2937] text-[#4B5563] cursor-not-allowed"
                  : "bg-white text-black active:scale-95 lg:hover:bg-[#3B82F6] lg:hover:text-white"
              }`}
            >
              {status === "loading" ? "Transmitting..." : "Engage with Us"}
              <ArrowRight className="inline ml-2" size={14} />
            </button>
          </div>
        )}
      </AnimatePresence>
    </form>
  );
};

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
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isEmailValid =
    type === "email" ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) : true;

  const handleSelect = (val) => {
    onChange({ target: { value: val } });
    setIsOpen(false);
    onBlur();
  };

  return (
    <div className="relative" ref={containerRef}>
      <label
        className={`block text-[9px] font-mono uppercase tracking-[0.2em] mb-2 transition-colors duration-300 ${isFocused || isOpen ? "text-[#3B82F6]" : "text-[#4B5563]"}`}
      >
        {label}
      </label>

      {type === "textarea" && (
        <textarea
          rows={2}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-[#1F2937] py-2 text-sm lg:text-base text-[#F5F7FA] outline-none resize-none placeholder:text-[#1F2937]"
        />
      )}

      {type === "select" && (
        <div className="relative">
          <div
            onClick={() => {
              setIsOpen(!isOpen);
              onFocus();
            }}
            className="w-full border-b border-[#1F2937] py-2 flex justify-between items-center cursor-pointer"
          >
            <span
              className={`text-sm lg:text-base transition-all duration-300 ${value ? "text-[#F5F7FA]" : "text-[#1F2937] font-mono italic"}`}
            >
              {value ? options[value] : placeholder}
            </span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              className={`${isOpen ? "text-[#3B82F6]" : "text-[#4B5563]"}`}
            >
              <ArrowDown size={14} />
            </motion.div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute left-0 right-0 top-full mt-2 z-[100] bg-[#0B1320] border border-[#1F2937] rounded-xl overflow-y-auto max-h-[200px] shadow-2xl"
              >
                {Object.entries(options).map(([key, label], idx) => (
                  <div
                    key={key}
                    onClick={() => handleSelect(key)}
                    className="px-5 py-4 text-xs lg:text-sm font-medium text-[#9CA3AF] active:bg-[#3B82F6]/20 lg:hover:text-white lg:hover:bg-[#3B82F6]/10 cursor-pointer flex justify-between items-center transition-all"
                  >
                    <span className="uppercase tracking-widest">{label}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
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
          className="w-full bg-transparent border-b border-[#1F2937] py-2 text-sm lg:text-base text-[#F5F7FA] outline-none placeholder:text-[#1F2937]"
        />
      )}

      <motion.div
        animate={{
          width: isFocused || isOpen ? "100%" : "0%",
          opacity: isFocused || isOpen ? 1 : 0,
        }}
        className="absolute bottom-0 left-0 h-px bg-[#3B82F6] shadow-[0_0_10px_#3B82F6]"
      />
    </div>
  );
};
