import { motion } from "framer-motion";
import Section from "../components/layout/Section";
import { useTranslation } from "react-i18next";
import { CheckCircle2 } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import LanaImage from "../assets/Images/Lana_01.jpg";
import LovelyImage from "../assets/Images/Lovely_02.jpeg";
import SamImage from "../assets/Images/sam_01.png";

export function AboutUs() {
  const { t } = useTranslation();

  const baseTeam = [
    {
      name: "Lovely Ibañez",
      role: "Founder & Principal Advisor",
      image: LovelyImage,
      position: "LEAD_STRATEGY",
    },
    {
      name: "Sam Obaidi",
      role: "Principal Advisor – Digital Strategy",
      image: SamImage,
      position: "DIGITAL_CAPITAL",
    },
    {
      name: "Svetlana Saenkova",
      role: "Principal Advisor – Innovation & Sustainability",
      image: LanaImage,
      position: "SUSTAINABILITY_FRAMEWORK",
    },
  ];

  const team = [...baseTeam, ...baseTeam];

  return (
    <Section id="about" className="mt-12 bg-transparent">
      {/* WIDTH CONTAINER */}
      <div className="mx-auto max-w-[1500px]">
        {/* NARRATIVE */}
        <div className="flex flex-col lg:flex-row gap-16 mb-32 items-start px-6">
          {/* LEFT */}
          <div className="w-full lg:w-[42%] border-l border-[#C2413A]/40 pl-8">
            <h2 className="text-[#F5F7FA] text-5xl md:text-7xl font-black italic uppercase mb-4 tracking-tighter">
              We are <br />
              <span className="text-[#3B82F6]">Lovely</span>
            </h2>

            <h3 className="text-[#9CA3AF] text-xl md:text-2xl font-light italic">
              A boutique advisory for high-stakes, <br /> cross-border
              decisions.
            </h3>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-[58%] flex flex-col gap-8">
            <p className="text-xl md:text-2xl text-[#F5F7FA] font-light leading-relaxed italic">
              We simplify complexity and deliver outcomes that matter. Boutique
              by choice. Focused by principle. Precise by design.
            </p>

            <div className="grid md:grid-cols-1 gap-4">
              {[
                "We coordinate strategy, experts, and execution as your single point of clarity.",
                "We are strategists, advisors, and decision partners.",
              ].map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-[#111827]/40 p-5 rounded-2xl border border-[#1F2937]"
                >
                  <CheckCircle2 size={18} className="text-[#3B82F6] shrink-0" />
                  <span className="text-base text-[#9CA3AF] italic">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SWIPER */}
        <div className="relative py-10">
          <div className="text-center mb-12">
            <h3 className="text-[#F5F7FA] font-mono text-sm tracking-[0.5em] uppercase opacity-30">
              Decision Partners
            </h3>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={40}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-24"
          >
            {team.map((member, index) => (
              <SwiperSlide key={`${member.name}-${index}`}>
                {({ isActive }) => (
                  <TeamCard member={member} isActive={isActive} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="max-w-2xl mx-auto text-center mt-8 px-6">
            <p className="text-[#4B5563] font-medium italic text-lg">
              A boutique team bridging capital, technology, and global
              execution.
            </p>
          </div>

          <style
            dangerouslySetInnerHTML={{
              __html: `
                .swiper-pagination-bullet { background:#1F2937; opacity:1; }
                .swiper-pagination-bullet-active {
                  background: #3B82F6;
                  box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
                }
              `,
            }}
          />
        </div>
      </div>
    </Section>
  );
}

const TeamCard = ({ member, isActive }) => {
  return (
    <div
      className={`relative bg-[#0B1320] border rounded-[32px] overflow-hidden transition-all duration-1000 ease-out
        ${
          isActive
            ? "border-[#3B82F6]/30 shadow-2xl scale-100"
            : "border-[#1F2937] opacity-30 scale-90 grayscale blur-[1px]"
        }`}
    >
      {/* Dossier ID Header */}
      <div className="absolute top-6 left-6 right-6 flex justify-between z-30">
        <div
          className={`px-2 py-1 bg-[#0B1320]/80 border border-[#3B82F6]/20 rounded font-mono text-[9px] uppercase tracking-widest text-[#3B82F6] ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          {member.position}
        </div>
        <span className="text-[10px] font-mono text-[#4B5563] uppercase">
          ID_{member.name.split(" ")[0]}_PRTCL
        </span>
      </div>

      {/* Image */}
      <div className="relative aspect-[7/6] overflow-hidden border-b border-[#1F2937]">
        <img
          src={member.image}
          className={`w-full h-full object-cover transition-all duration-[2000ms] ${
            isActive
              ? "scale-105 brightness-90 saturate-50"
              : "scale-100 brightness-40"
          }`}
        />

        {isActive && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320] via-transparent to-transparent opacity-80" />

            <motion.div
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[1px] bg-[#3B82F6]/20 z-40"
            />
          </>
        )}
      </div>

      <div className="p-10">
        <h4 className="text-2xl font-black uppercase text-[#F5F7FA] tracking-tighter">
          {member.name}
        </h4>
        <p className="text-[11px] font-mono text-[#3B82F6] mt-2 uppercase tracking-widest">
          {member.role}
        </p>
      </div>

      <div
        className={`absolute bottom-0 left-0 h-[2px] bg-[#3B82F6] transition-all duration-1000 ${
          isActive ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      />
    </div>
  );
};
