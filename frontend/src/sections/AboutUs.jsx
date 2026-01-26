import { motion } from "framer-motion";
import Section from "../components/layout/Section";
import { useTranslation } from "react-i18next";
import { Instagram, CheckCircle2 } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import LanaImage from "../assets/Images/Lana_01.jpg";
import LovelyImage from "../assets/Images/Lovely_02.jpeg";

export function AboutUs() {
  const { t } = useTranslation();

  const baseTeam = [
    {
      name: "Lovely Ibañez",
      role: "Founder & Principal Advisor",
      image: LovelyImage,
      position: "Your Left",
    },
    {
      name: "Sam Obaidi",
      role: "Principal Advisor – Digital Strategy",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      position: "The Middle",
    },
    {
      name: "Svetlana Saenkova",
      role: "Principal Advisor – Innovation & Sustainability",
      image: LanaImage,
      position: "Your Right",
    },
  ];

  // Doubling the array to ensure Swiper has enough items to loop infinitely
  const team = [...baseTeam, ...baseTeam];

  return (
    <Section id="about" className="mt-12">
      {/* NARRATIVE */}
      <div className="grid lg:grid-cols-12 gap-16 mb-32 items-start">
        <div className="lg:col-span-5 border-l border-rose-500/40 pl-8">
          <h2 className="text-white text-5xl md:text-7xl font-black italic uppercase mb-4">
            We are <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-red-500">
              Lovely
            </span>
          </h2>

          <h3 className="text-white text-xl md:text-2xl font-light italic">
            A boutique advisory for high-stakes, cross-border decisions.
          </h3>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-8">
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
            We simplify complexity and deliver outcomes that matter. Boutique by
            choice. Focused by principle. Precise by design.
          </p>

          <div className="grid md:grid-cols-1 gap-4">
            {[
              "We coordinate strategy, experts, and execution as your single point of clarity.",
              "We are strategists, advisors, and decision partners.",
            ].map((point, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10"
              >
                <CheckCircle2 size={18} className="text-rose-400 shrink-0" />
                <span className="text-base text-slate-300 italic">{point}</span>
              </div>
            ))}
          </div>

          <p className="text-purple-400 font-mono text-xs uppercase tracking-widest">
            // OUR ADVISORY PRINCIPALS
          </p>
        </div>
      </div>

      {/* SWIPER */}
      <div className="relative py-10">
        <div className="text-center mb-12">
          <h3 className="text-white font-mono text-sm tracking-[0.5em] uppercase opacity-50">
            Decision Partners
          </h3>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          speed={1200} // Slightly slower, more premium transition
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-20"
        >
          {team.map((member, index) => (
            <SwiperSlide key={`${member.name}-${index}`}>
              {({ isActive }) => (
                <TeamCard member={member} isActive={isActive} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="max-w-2xl mx-auto text-center mt-8">
          <p className="text-slate-500 font-medium italic text-lg">
            A boutique team bridging capital, technology, and global execution.
          </p>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
            .swiper-pagination-bullet { background:#2a0f1f; opacity:1; }
            .swiper-pagination-bullet-active {
              background: linear-gradient(to right,#ec4899,#9333ea);
              box-shadow:0 0 12px rgba(236,72,153,.6);
            }
          `,
          }}
        />
      </div>
    </Section>
  );
}

/* ================= TEAM CARD ================= */

const TeamCard = ({ member, isActive }) => {
  return (
    <div
      className={`relative bg-[#050505] border rounded-[24px] overflow-hidden transition-all duration-700
      ${
        isActive
          ? "border-purple-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          : "border-white/5 opacity-40 blur-[0.5px]"
      }`}
    >
      <div className="absolute top-4 left-4 right-4 flex justify-between z-30">
        <div
          className={`px-2 py-1 bg-black/60 border border-rose-500/30 rounded font-mono text-[8px] uppercase tracking-widest text-rose-400 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          {member.position}
        </div>
        <span className="text-[10px] font-mono text-white/20 uppercase">
          SECURE_ID_{member.name.split(" ")[0]}
        </span>
      </div>

      <div className="relative aspect-square overflow-hidden border-b border-white/5">
        <img
          src={member.image}
          className={`w-full h-full object-cover transition-all duration-1000 ${
            isActive ? "scale-110 brightness-110" : "grayscale brightness-40"
          }`}
        />

        {isActive && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute inset-0 h-[1px] bg-gradient-to-r from-transparent via-rose-500 to-transparent shadow-[0_0_18px_rgba(236,72,153,0.7)] animate-scan" />
          </>
        )}
      </div>

      <div className="p-8">
        <h4 className="text-2xl font-bold uppercase text-white tracking-tighter">
          {member.name}
        </h4>
        <p className="text-[11px] font-mono text-purple-400 mt-1">
          &gt;&gt; {member.role}
        </p>
      </div>

      <div
        className={`absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent transition-all duration-1000 ${
          isActive ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      />
    </div>
  );
};
