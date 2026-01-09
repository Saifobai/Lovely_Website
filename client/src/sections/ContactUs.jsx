import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Mail, ArrowRight, ShieldCheck, Cpu, Globe, Zap } from "lucide-react";
import Section from "../components/layout/Section";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <Section id="contact" className="bg-[#050505]">
      {/* Atmosphere */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none opacity-30" />

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
        {/* --- LEFT COLUMN: SYSTEM STATUS PANEL --- */}
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.2em]">
                {t("contact.badge")}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold leading-[0.9] text-white tracking-tighter uppercase"
            >
              {t("contact.title.line1")} <br />
              <span className="hollow-text italic">
                {t("contact.title.line2")}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg max-w-md leading-relaxed border-l border-blue-500/30 pl-6"
            >
              {t("contact.description")}
            </motion.p>
          </div>

          {/* NEW WINNING COMPONENT: System Terminal */}
          <SystemTerminal />
        </div>

        {/* --- RIGHT COLUMN: THE FORM --- */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-[40px] blur-2xl opacity-50" />
          <HoloForm t={t} />
        </div>
      </div>
    </Section>
  );
}

const SystemTerminal = () => {
  const [logs, setLogs] = useState(["> Initializing connection..."]);

  useEffect(() => {
    const messages = [
      "> Encryption protocol: AES-256",
      "> Global node: Active",
      "> Latency: 14ms",
      "> LS_Digital system: Ready",
      "> Waiting for user input...",
    ];
    let i = 0;
    const interval = setInterval(() => {
      setLogs((prev) => [...prev.slice(-4), messages[i]]);
      i = (i + 1) % messages.length;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <MetricBox icon={<Cpu size={14} />} label="CPU" value="12%" />
        <MetricBox icon={<Globe size={14} />} label="Nodes" value="24/24" />
        <MetricBox icon={<Zap size={14} />} label="Uptime" value="99.9%" />
      </div>

      <div className="bg-black/40 border border-white/5 rounded-2xl p-6 font-mono text-[11px] space-y-2 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse" />
        <p className="text-blue-500/50 mb-4 uppercase tracking-[0.2em]">
          Console_Output
        </p>
        {logs.map((log, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-slate-400"
          >
            {log}
          </motion.p>
        ))}
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-3 bg-blue-500 ml-1 translate-y-0.5"
        />
      </div>
    </div>
  );
};

const MetricBox = ({ icon, label, value }) => (
  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl group hover:border-blue-500/30 transition-all duration-500">
    <div className="text-blue-500 mb-2 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <p className="text-[10px] text-slate-500 uppercase font-mono">{label}</p>
    <p className="text-white font-bold font-mono tracking-tighter">{value}</p>
  </div>
);

// ... HoloForm and HoloInput stay the same as your code ...
const HoloForm = ({ t }) => {
  const [focused, setFocused] = useState(null);
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-[580px] flex flex-col items-center justify-center bg-white/[0.02] border border-blue-500/20 rounded-3xl p-12 text-center backdrop-blur-xl"
      >
        <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-400 mb-8 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
          <ShieldCheck className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4 tracking-tighter uppercase font-mono">
          Handshake_Complete
        </h3>
        <p className="text-slate-400 leading-relaxed max-w-xs">
          Message encrypted and transmitted via secure node.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-10 text-xs font-mono text-slate-500 hover:text-blue-400 transition-colors uppercase tracking-[0.2em]"
        >
          {t("contact.form.reset")}
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0c0c0c]/90 backdrop-blur-2xl border border-white/10 p-10 rounded-[32px] shadow-3xl relative overflow-hidden group"
    >
      <div className="space-y-10">
        <HoloInput
          label={t("contact.form.name.label")}
          placeholder={t("contact.form.name.placeholder")}
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
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
          onChange={handleChange}
          isFocused={focused === "email"}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
        />
        <HoloInput
          label={t("contact.form.message.label")}
          placeholder={t("contact.form.message.placeholder")}
          type="textarea"
          name="message"
          value={form.message}
          onChange={handleChange}
          isFocused={focused === "message"}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-white text-black font-bold py-5 rounded-xl hover:bg-blue-600 hover:text-white transition-all uppercase text-xs tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
        >
          {status === "loading"
            ? t("contact.form.loading")
            : t("contact.form.submit")}
        </button>
        <p className="text-center text-[10px] font-mono text-slate-600 uppercase tracking-widest">
          {t("contact.form.securityNote")}
        </p>
      </div>
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
          name={name}
          value={value}
          onChange={onChange}
          rows={3}
          className="w-full bg-transparent border-b border-white/10 py-2 text-white text-lg placeholder-white/5 focus:outline-none resize-none transition-all focus:border-blue-500"
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      ) : (
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          className="w-full bg-transparent border-b border-white/10 py-2 text-white text-lg placeholder-white/5 focus:outline-none transition-all focus:border-blue-500"
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
