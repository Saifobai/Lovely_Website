import React from "react";
import { motion } from "framer-motion";
import { Zap, Puzzle, Users } from "lucide-react";

const values = [
  {
    id: "01",
    title: "Clarity",
    subtitle: "We don’t add layers. We remove them.",
    text: "Lovely translates complexity into confident decisions, connecting strategy, execution, and trusted expertise into outcomes that move you forward.",
    icon: <Zap className="text-blue-400" size={24} />,
    color: "from-blue-500/20",
    glow: "shadow-blue-500/10",
  },
  {
    id: "02",
    title: "Creativity",
    subtitle: "We don’t start with frameworks. We start with context.",
    text: "Our creativity lies in connecting disciplines—business, mobility, IT, and real estate—into decisions that actually work in the real world.",
    icon: <Puzzle className="text-purple-400" size={24} />,
    color: "from-purple-500/20",
    glow: "shadow-purple-500/10",
  },
  {
    id: "03",
    title: "Collaboration",
    subtitle: "Progress is built together.",
    text: "We align clients, partners, and expertise into one coordinated effort with shared goals and clear roles.",
    icon: <Users className="text-red-400" size={24} />,
    color: "from-red-500/20",
    glow: "shadow-red-500/10",
  },
];

export default function LovelyValues() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-transparent">
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[20vw] font-black uppercase italic leading-none">
          Values
        </h2>
      </div>

      <div className="max-w-[1500px] mx-auto grid lg:grid-cols-12 gap-16 items-start">
        {/* LEFT: STATIC CONTENT */}
        <div className="lg:col-span-4 sticky top-32 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* <div className="h-px w-8 bg-blue-500" />
              <span className="text-blue-400 font-mono text-[10px] tracking-[0.5em] uppercase font-bold">
                Our_DNA
              </span> */}
            </div>
            <h2 className="text-6xl md:text-7xl font-black italic tracking-tighter uppercase text-white leading-[0.9]">
              Lovely <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-red-500">
                Values
              </span>
            </h2>
          </div>
          <p className="text-xl text-slate-400 italic leading-relaxed max-w-sm">
            Lovely is built around three core values that shape everything we
            do.
          </p>
        </div>

        {/* RIGHT: KINETIC CARDS */}
        <div className="lg:col-span-8 grid md:grid-cols-1 gap-6">
          {values.map((value, idx) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ y: -5 }}
              className={`group relative p-10 rounded-[40px] border border-white/10 bg-gradient-to-br ${value.color} to-transparent backdrop-blur-xl transition-all duration-500 ${value.glow} hover:border-white/20 shadow-2xl overflow-hidden`}
            >
              {/* Background ID Number */}
              <span className="absolute -bottom-10 -right-4 text-[150px] font-black italic text-white/[0.03] select-none group-hover:text-white/[0.07] transition-all duration-700">
                {value.id}
              </span>

              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-10">
                {/* Icon Circle */}
                <div className="w-20 h-20 shrink-0 rounded-3xl bg-black/40 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white">
                      {value.title}
                    </h3>
                    <p className="text-blue-400 font-mono text-[10px] uppercase tracking-widest font-bold">
                      {value.subtitle}
                    </p>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed max-w-2xl italic font-medium">
                    {value.text}
                  </p>
                </div>
              </div>

              {/* Animated Corner Accent */}
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Rear Atmospheric Glow */}
      <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full" />
    </section>
  );
}
