// import { motion } from "framer-motion";
// import Section from "../components/layout/Section";
// import { useTranslation } from "react-i18next";
// import { Instagram, CheckCircle2 } from "lucide-react"; // Added CheckCircle for the list

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import LanaImage from "../assets/Images/Lana_01.jpg";
// import LovelyImage from "../assets/Images/Lovely_02.jpeg";

// export function AboutUs() {
//   const { t } = useTranslation();

//   const team = [
//     {
//       name: "Leon S.",
//       role: "Founder & Chief Architect",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
//     },
//     {
//       name: "Lovely L.",
//       role: "Head of Digital Strategy",
//       image: LovelyImage,
//     },
//     {
//       name: "Marcus V.",
//       role: "Lead Systems Engineer",
//       image:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
//     },
//     {
//       name: "Lana R.",
//       role: "Creative Director",
//       image: LanaImage,
//     },
//   ];

//   return (
//     <Section id="about">
//       {/* Narrative Section */}
//       <div className="grid lg:grid-cols-12 gap-16 mb-32 items-start">
//         <div className="lg:col-span-5 border-l border-blue-500/30 pl-8">
//           <p className="font-mono text-[10px] text-blue-500 uppercase tracking-[0.4em] mb-4">
//             {t("about.badge")}
//           </p>
//           <h2 className="text-white text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-4">
//             {t("about.title")}
//           </h2>
//           <h3 className="text-blue-400 text-xl md:text-2xl font-light leading-tight">
//             {t("about.subtitle")}
//           </h3>
//         </div>

//         <div className="lg:col-span-7 flex flex-col gap-8">
//           <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
//             {t("about.description")}
//           </p>

//           <div className="grid md:grid-cols-2 gap-4">
//             {t("about.points", { returnObjects: true }).map((point, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10"
//               >
//                 <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
//                 <span className="text-sm text-slate-400 font-medium">
//                   {point}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <p className="text-blue-500 font-mono text-xs uppercase tracking-widest mt-4">
//             {t("about.footer")}
//           </p>
//         </div>
//       </div>

//       {/* --- SWIPER SLIDER --- */}
//       <div className="relative py-10 group">
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={40}
//           slidesPerView={1.2}
//           centeredSlides={true}
//           loop={true}
//           speed={1000}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           pagination={{
//             clickable: true,
//             dynamicBullets: true,
//           }}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="team-swiper !pb-20"
//         >
//           {team.map((member, index) => (
//             <SwiperSlide key={index}>
//               {({ isActive }) => (
//                 <TeamCard member={member} isActive={isActive} />
//               )}
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <style
//           dangerouslySetInnerHTML={{
//             __html: `
//           .swiper-pagination-bullet { background: #1e293b !important; opacity: 1 !important; }
//           .swiper-pagination-bullet-active { background: #3b82f6 !important; box-shadow: 0 0 10px #3b82f6; }
//         `,
//           }}
//         />
//       </div>
//     </Section>
//   );
// }

// const TeamCard = ({ member, isActive }) => {
//   return (
//     <div
//       className={`relative bg-[#050505] border transition-all duration-700 rounded-[24px] overflow-hidden shadow-2xl
//       ${
//         isActive
//           ? "border-blue-500/40 scale-100"
//           : "border-white/5 scale-95 opacity-40 blur-[0.5px]"
//       }`}
//     >
//       {/* 1. TOP UI BAR */}
//       <div className="absolute top-4 left-4 right-4 z-30 flex justify-between items-center pointer-events-none">
//         <div
//           className={`px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
//         >
//           <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
//           <span className="text-[8px] font-mono text-white/70 uppercase tracking-[0.2em]">
//             Unit_Active
//           </span>
//         </div>
//         <span className="text-[10px] font-mono text-white/20 uppercase italic">
//           {member.name.split(" ")[0]}_Ref.742
//         </span>
//       </div>

//       {/* 2. IMAGE CONTAINER */}
//       <div className="relative aspect-square overflow-hidden border-b border-white/5">
//         <img
//           src={member.image}
//           className={`w-full h-full object-cover transition-all duration-1000
//             ${isActive ? "grayscale-0 scale-110 brightness-110" : "grayscale brightness-40"}`}
//         />

//         {isActive && (
//           <>
//             <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-blue-500/50 z-20" />
//             <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-blue-500/50 z-20" />
//             <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-blue-500/50 z-20" />
//             <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-blue-500/50 z-20" />
//             <div className="absolute inset-0 w-full h-[1px] bg-blue-400/30 shadow-[0_0_15px_#3b82f6] z-20 animate-scan pointer-events-none" />
//           </>
//         )}

//         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
//       </div>

//       {/* 3. CONTENT AREA */}
//       <div className="p-6">
//         <div className="flex justify-between items-end">
//           <div className="space-y-1">
//             <div className="flex items-center gap-2">
//               <div
//                 className={`h-[1px] bg-blue-500 transition-all duration-700 ${isActive ? "w-4" : "w-0"}`}
//               />
//               <p className="text-[8px] font-mono text-blue-500 uppercase tracking-widest">
//                 Class_Partner
//               </p>
//             </div>
//             <h4
//               className={`text-xl font-bold uppercase tracking-tight transition-colors duration-700 ${
//                 isActive ? "text-white" : "text-slate-600"
//               }`}
//             >
//               {member.name}
//             </h4>
//             <p className="text-[10px] text-slate-200 font-mono tracking-tighter opacity-80">
//               {`>> ${member.role}`}
//             </p>
//           </div>

//           {/* AUTOMATED INSTAGRAM HUD */}
//           <a
//             href="#"
//             className={`group/icon relative flex items-center justify-center w-12 h-12 transition-all duration-700 ${
//               isActive
//                 ? "opacity-100 cursor-pointer"
//                 : "opacity-0 pointer-events-none"
//             }`}
//           >
//             {/* Brackets - Now trigger on isActive */}
//             <div
//               className={`absolute border-l border-t border-blue-500 transition-all duration-500 top-0 left-0 ${isActive ? "w-3 h-3 opacity-100" : "w-0 h-0 opacity-0"}`}
//             />
//             <div
//               className={`absolute border-r border-b border-blue-500 transition-all duration-500 bottom-0 right-0 ml-auto mt-auto ${isActive ? "w-3 h-3 opacity-100" : "w-0 h-0 opacity-0"}`}
//             />

//             {/* Hex Shield - Now trigger on isActive */}
//             <div
//               className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0"}`}
//             >
//               <svg
//                 viewBox="0 0 100 100"
//                 className="w-full h-full animate-spin-slow text-blue-500/30"
//               >
//                 <path
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeDasharray="15 10"
//                   d="M50 5 L90 25 L90 75 L50 95 L100 75 L10 75 L10 25 Z"
//                 />
//               </svg>
//             </div>

//             {/* Glitch Crosshair - Now trigger on isActive */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div
//                 className={`bg-blue-400 transition-all duration-1000 ${isActive ? "w-full opacity-30" : "w-0 opacity-0"} h-[1px]`}
//               />
//               <div
//                 className={`bg-blue-400 transition-all duration-1000 ${isActive ? "h-full opacity-30" : "h-0 opacity-0"} w-[1px] absolute`}
//               />
//             </div>

//             {/* Icon - Now triggers animations on isActive */}
//             <div className="relative z-10">
//               <Instagram
//                 size={20}
//                 className={`transition-all duration-700 ${
//                   isActive
//                     ? "text-blue-400 scale-110 rotate-[360deg] drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
//                     : "text-transparent scale-50"
//                 }`}
//               />
//               {/* Ghost Pulse */}
//               <Instagram
//                 size={20}
//                 className={`absolute top-0 left-0 text-rose-500 pointer-events-none ${isActive ? "animate-ping opacity-40" : "opacity-0"}`}
//               />
//             </div>

//             {/* Label - Now trigger on isActive */}
//             <span
//               className={`absolute -bottom-2 right-0 font-mono text-[6px] text-blue-500 transition-all duration-700 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
//             >
//               EXT_LINK_SGNL
//             </span>
//           </a>
//         </div>
//       </div>

//       {/* Bottom Data Glow */}
//       <div
//         className={`absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-1000 ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}`}
//       />
//     </div>
//   );
// };

//==============================================
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
