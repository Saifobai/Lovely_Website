import { motion } from "framer-motion";
import Section from "../components/layout/Section";
import { useTranslation } from "react-i18next";
import { Linkedin, Instagram } from "lucide-react";

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function AboutUs() {
  const { t } = useTranslation();

  const team = [
    {
      name: "Leon S.",
      role: "Founder & Chief Architect",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    },
    {
      name: "Sarah L.",
      role: "Head of Digital Strategy",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
    },
    {
      name: "Marcus V.",
      role: "Lead Systems Engineer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
    },
    {
      name: "Elena R.",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800",
    },
  ];

  return (
    <Section id="about">
      {/* Narrative Section */}
      <div className="grid lg:grid-cols-12 gap-12 mb-24">
        <div className="lg:col-span-4 border-l border-blue-500/30 pl-8">
          <p className="font-mono text-[10px] text-blue-500 uppercase tracking-[0.4em] mb-4">
            /// System_Identity
          </p>
          <h3 className="text-white text-2xl font-bold tracking-tighter">
            LS DIGITAL
          </h3>
        </div>
        <div className="lg:col-span-8">
          <h2 className="text-4xl md:text-6xl font-light leading-tight text-white mb-12">
            {t("about.we")}{" "}
            <span className="hollow-text font-bold italic">
              {t("about.abstract")}
            </span>{" "}
            {t("about.into")}
          </h2>
        </div>
      </div>

      {/* --- SWIPER SLIDER --- */}
      <div className="relative py-10 group">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="team-swiper !pb-16"
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <TeamCard member={member} isActive={isActive} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CSS for custom dots (Add this to your index.css or a style tag) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .swiper-pagination-bullet { background: #1e293b !important; opacity: 1 !important; }
          .swiper-pagination-bullet-active { background: #3b82f6 !important; box-shadow: 0 0 10px #3b82f6; }
        `,
          }}
        />
      </div>
    </Section>
  );
}

const TeamCard = ({ member, isActive }) => {
  return (
    <div
      className={`relative bg-[#050505] border transition-all duration-700 rounded-xl overflow-hidden shadow-2xl 
      ${
        isActive
          ? "border-blue-500/50 scale-100"
          : "border-white/10 scale-95 opacity-50"
      }`}
    >
      <div className="relative aspect-[10/9] overflow-hidden">
        <img
          src={member.image}
          className={`w-full h-full object-cover transition-all duration-700 
            ${
              isActive
                ? "grayscale-0 brightness-100"
                : "grayscale brightness-50"
            }`}
        />

        {/* Scan Line - only visible when active */}
        {isActive && (
          <div className="absolute inset-0 w-full h-[1px] bg-blue-400 shadow-[0_0_15px_#3b82f6] z-20 animate-scan pointer-events-none" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
      </div>

      <div className="p-6 border-t border-white/5">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[9px] font-mono text-blue-500 uppercase tracking-widest opacity-50">
              Core_Unit
            </p>
            <h4
              className={`text-xl font-bold uppercase transition-colors duration-700 ${
                isActive ? "text-white" : "text-slate-600"
              }`}
            >
              {member.name}
            </h4>
            <p className="text-[10px] text-slate-500 font-mono italic">{`// ${member.role}`}</p>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className={`transition-all duration-500 ${
                isActive
                  ? "text-blue-500 drop-shadow-[0_0_8px_#3b82f6]"
                  : "text-slate-700"
              }`}
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className={`transition-all duration-500 ${
                isActive
                  ? "text-rose-500 drop-shadow-[0_0_8px_#f43f5e]"
                  : "text-slate-700"
              }`}
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
