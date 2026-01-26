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

  const team = [
    {
      name: "Leon S.",
      role: "Founder & Chief Architect",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    },
    { name: "Lovely L.", role: "Head of Digital Strategy", image: LovelyImage },
    {
      name: "Marcus V.",
      role: "Lead Systems Engineer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
    },
    { name: "Lana R.", role: "Creative Director", image: LanaImage },
  ];

  return (
    <Section id="about">
      {/* NARRATIVE */}
      <div className="grid lg:grid-cols-12 gap-16 mb-32 items-start">
        <div className="lg:col-span-5 border-l border-rose-500/40 pl-8">
          <p className="font-mono text-[10px] text-rose-100 uppercase tracking-[0.4em] mb-4">
            {/* {t("about.badge")} */}
          </p>

          <h2 className="text-white text-5xl md:text-7xl font-black italic uppercase mb-4">
            <span className="text-white text-transparent">
              {t("about.title")}
            </span>
          </h2>

          <h3 className="text-white text-xl md:text-2xl font-light">
            {t("about.subtitle")}
          </h3>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-8">
          <p className="text-xl md:text-2xl text-slate-300 font-light">
            {t("about.description")}
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {t("about.points", { returnObjects: true }).map((point, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10"
              >
                <CheckCircle2 size={16} className="text-rose-400 shrink-0" />
                <span className="text-sm text-slate-400">{point}</span>
              </div>
            ))}
          </div>

          <p className="text-purple-400 font-mono text-xs uppercase tracking-widest">
            {t("about.footer")}
          </p>
        </div>
      </div>

      {/* SWIPER */}
      <div className="relative py-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1.2}
          centeredSlides
          loop
          speed={1000}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-20"
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <TeamCard member={member} isActive={isActive} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

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
          ? "border-purple-500/40"
          : "border-white/5 opacity-40 blur-[0.5px]"
      }`}
    >
      {/* TOP BAR */}
      <div className="absolute top-4 left-4 right-4 flex justify-between z-30">
        <div
          className={`px-2 py-1 bg-black/60 border border-rose-500/30 rounded font-mono text-[8px] uppercase tracking-widest text-rose-400 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          UNIT_ACTIVE
        </div>
        <span className="text-[10px] font-mono text-white/20">
          {member.name.split(" ")[0]}_742
        </span>
      </div>

      {/* IMAGE */}
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

      {/* CONTENT */}
      <div className="p-6">
        <h4 className="text-xl font-bold uppercase text-white">
          {member.name}
        </h4>
        <p className="text-[10px] font-mono text-purple-400">
          &gt;&gt; {member.role}
        </p>

        {isActive && (
          <div className="mt-6 flex justify-end">
            <Instagram
              size={22}
              className="text-rose-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.6)] animate-spin-slow"
            />
          </div>
        )}
      </div>

      {/* BOTTOM GLOW */}
      <div
        className={`absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent transition-all duration-1000 ${
          isActive ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      />
    </div>
  );
};
