// import { motion } from "framer-motion";
// import Section from "../components/layout/Section";
// import { useTranslation } from "react-i18next";
// import { CheckCircle2 } from "lucide-react";
// import React from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// import LanaImage from "../assets/Images/Lana_02.png";
// import LovelyImage from "../assets/Images/Lovely_02.jpeg";
// import SamImage from "../assets/Images/sam_02.jpeg";

// export function AboutUs() {
//   const { t } = useTranslation();

//   const baseTeam = [
//     {
//       name: "Lovely Ibañez",
//       role: "Founder & Principal Advisor",
//       image: LovelyImage,
//       position: "LEAD_STRATEGY",
//     },
//     {
//       name: "Sam Obaidi",
//       role: "Principal Advisor – Digital Strategy",
//       image: SamImage,
//       position: "DIGITAL_CAPITAL",
//     },
//     {
//       name: "Svetlana Saenkova",
//       role: "Principal Advisor – Innovation & Sustainability",
//       image: LanaImage,
//       position: "SUSTAINABILITY_FRAMEWORK",
//     },
//   ];

//   const team = [...baseTeam, ...baseTeam];

//   return (
//     <Section id="about" className="mt-8 lg:mt-12 bg-transparent">
//       <div className="mx-auto max-w-[1500px]">
//         {/* NARRATIVE */}
//         <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-20 lg:mb-32 items-start px-6">
//           {/* LEFT: Branding */}
//           <div className="w-full lg:w-[42%] border-l border-[#C2413A]/40 pl-6 lg:pl-8">
//             <h2 className="text-[#F5F7FA] text-5xl md:text-7xl font-black italic uppercase mb-4 tracking-tighter leading-[0.9]">
//               We are <br />
//               <span className="text-[#3B82F6]">Lovely</span>
//             </h2>

//             <h3 className="text-[#9CA3AF] text-lg md:text-2xl font-light italic leading-snug">
//               A boutique advisory for high-stakes,{" "}
//               <br className="hidden md:block" /> cross-border decisions.
//             </h3>
//           </div>

//           {/* RIGHT: Content */}
//           <div className="w-full lg:w-[58%] flex flex-col gap-6 lg:gap-8">
//             <p className="text-xl md:text-2xl text-[#F5F7FA] font-light leading-relaxed italic">
//               We simplify complexity and deliver outcomes that matter. Boutique
//               by choice. Focused by principle. Precise by design.
//             </p>

//             <div className="flex flex-col gap-4">
//               {[
//                 "We coordinate strategy, experts, and execution as your single point of clarity.",
//                 "We are strategists, advisors, and decision partners.",
//               ].map((point, i) => (
//                 <div
//                   key={i}
//                   className="flex items-start gap-4 bg-[#111827]/40 p-5 rounded-2xl border border-[#1F2937]"
//                 >
//                   <CheckCircle2
//                     size={18}
//                     className="text-[#3B82F6] mt-1 shrink-0"
//                   />
//                   <span className="text-sm md:text-base text-[#9CA3AF] italic">
//                     {point}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* SWIPER */}
//         <div className="relative py-10">
//           <div className="text-center mb-8 lg:mb-12">
//             <h3 className="text-[#F5F7FA] font-mono text-[10px] lg:text-sm tracking-[0.4em] lg:tracking-[0.5em] uppercase opacity-30">
//               Decision Partners
//             </h3>
//           </div>

//           <Swiper
//             modules={[Autoplay, Pagination]}
//             spaceBetween={20}
//             slidesPerView={1.1} // More peek on mobile
//             centeredSlides={true}
//             loop={true}
//             speed={1200}
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//             }}
//             pagination={{ clickable: true }}
//             breakpoints={{
//               640: { slidesPerView: 1.5, spaceBetween: 30 },
//               768: { slidesPerView: 2, spaceBetween: 40 },
//               1024: { slidesPerView: 3, spaceBetween: 40 },
//             }}
//             className="!pb-20 lg:!pb-24 !px-4"
//           >
//             {team.map((member, index) => (
//               <SwiperSlide key={`${member.name}-${index}`}>
//                 {({ isActive }) => (
//                   <TeamCard member={member} isActive={isActive} />
//                 )}
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           <div className="max-w-2xl mx-auto text-center mt-6 px-6">
//             <p className="text-[#4B5563] font-medium italic text-base lg:text-lg">
//               A boutique team bridging capital, technology, and global
//               execution.
//             </p>
//           </div>

//           <style
//             dangerouslySetInnerHTML={{
//               __html: `
//                 .swiper-pagination-bullet { background:#1F2937; opacity:1; transition: all 0.3s ease; }
//                 .swiper-pagination-bullet-active {
//                   background: #3B82F6;
//                   box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
//                   width: 24px;
//                   border-radius: 4px;
//                 }
//               `,
//             }}
//           />
//         </div>
//       </div>
//     </Section>
//   );
// }

// const TeamCard = ({ member, isActive }) => {
//   return (
//     <div
//       className={`relative bg-[#0B1320] border rounded-[24px] lg:rounded-[32px] overflow-hidden transition-all duration-700 ease-out
//         ${
//           isActive
//             ? "border-[#3B82F6]/40 shadow-2xl scale-100 grayscale-0"
//             : "border-[#1F2937] opacity-40 scale-95 grayscale blur-[0.5px]"
//         }`}
//     >
//       {/* Image Container - Aspect Ratio remains 4/4.2 for reduced height */}
//       <div className="relative aspect-[4/4.2] overflow-hidden border-b border-[#1F2937] bg-[#0d1624]">
//         <img
//           src={member.image}
//           alt={member.name}
//           className={`w-full h-full object-cover transition-all duration-[1500ms] ${
//             isActive
//               ? "scale-110 brightness-90 saturate-50" // Base size slightly larger
//               : "scale-105 brightness-40" // Shrunk but still covering edges
//           }`}
//           style={{ objectPosition: "50% 20%" }}
//         />

//         {isActive && (
//           <>
//             <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320] via-transparent to-transparent opacity-80" />
//             <motion.div
//               initial={{ top: "0%" }}
//               animate={{ top: "100%" }}
//               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//               className="absolute left-0 w-full h-[1px] bg-[#3B82F6]/30 z-40"
//             />
//           </>
//         )}
//       </div>

//       {/* Info Body */}
//       <div className="p-5 lg:p-8">
//         <h4 className="text-lg lg:text-xl font-black uppercase text-[#F5F7FA] tracking-tighter">
//           {member.name}
//         </h4>
//         <p className="text-[10px] font-mono text-[#3B82F6] mt-1 uppercase tracking-widest leading-relaxed">
//           {member.role}
//         </p>
//       </div>

//       {/* Active Line Indicator */}
//       <div
//         className={`absolute bottom-0 left-0 h-[2px] bg-[#3B82F6] transition-all duration-700 ${
//           isActive ? "w-full opacity-100" : "w-0 opacity-0"
//         }`}
//       />
//     </div>
//   );
// };

//==================================================================
import { motion } from "framer-motion";
import Section from "../components/layout/Section";
import { useTranslation } from "react-i18next";
import { CheckCircle2 } from "lucide-react";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import LanaImage from "../assets/Images/Lana_02.png";
import LovelyImage from "../assets/Images/Lovely_02.jpeg";
import SamImage from "../assets/Images/sam_02.jpeg";

export function AboutUs() {
  const { t } = useTranslation();

  const baseTeam = [
    {
      name: "Lovely Ibañez",
      role: "Founder & Principal Advisor",
      image: LovelyImage,
      position: "LEAD_STRATEGY",
      eyeY: "30%",
    },
    {
      name: "Sam Obaidi",
      role: "Principal Advisor – Digital Strategy",
      image: SamImage,
      position: "DIGITAL_CAPITAL",
      eyeY: "26%",
    },
    {
      name: "Svetlana Saenkova",
      role: "Principal Advisor – Innovation & Sustainability",
      image: LanaImage,
      position: "SUSTAINABILITY_FRAMEWORK",
      eyeY: "34%",
    },
  ];

  const team = [...baseTeam, ...baseTeam];

  return (
    <Section id="about" className="mt-8 lg:mt-12 bg-transparent">
      <div className="mx-auto max-w-[1500px]">
        {/* NARRATIVE */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-20 lg:mb-32 items-start px-6">
          {/* LEFT */}
          <div className="w-full lg:w-[42%] border-l border-[#C2413A]/40 pl-6 lg:pl-8">
            <h2 className="text-[#F5F7FA] text-5xl md:text-7xl font-black italic uppercase mb-4 tracking-tighter leading-[0.9]">
              We are <br />
              <span className="text-[#3B82F6]">Lovely</span>
            </h2>

            <h3 className="text-[#9CA3AF] text-lg md:text-2xl font-light italic leading-snug">
              A boutique advisory for high-stakes,
              <br className="hidden md:block" /> cross-border decisions.
            </h3>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-[58%] flex flex-col gap-6 lg:gap-8">
            <p className="text-xl md:text-2xl text-[#F5F7FA] font-light leading-relaxed italic">
              We simplify complexity and deliver outcomes that matter. Boutique
              by choice. Focused by principle. Precise by design.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "We coordinate strategy, experts, and execution as your single point of clarity.",
                "We are strategists, advisors, and decision partners.",
              ].map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-[#111827]/40 p-5 rounded-2xl border border-[#1F2937]"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#3B82F6] mt-1 shrink-0"
                  />
                  <span className="text-sm md:text-base text-[#9CA3AF] italic">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SWIPER */}
        <div className="relative py-10">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-[#F5F7FA] font-mono text-[10px] lg:text-sm tracking-[0.4em] lg:tracking-[0.5em] uppercase opacity-30">
              Decision Partners
            </h3>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1.1}
            centeredSlides
            loop
            speed={1200}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 30 },
              768: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="!pb-20 lg:!pb-24 !px-4"
          >
            {team.map((member, index) => (
              <SwiperSlide key={`${member.name}-${index}`}>
                {({ isActive }) => (
                  <TeamCard member={member} isActive={isActive} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="max-w-2xl mx-auto text-center mt-6 px-6">
            <p className="text-[#4B5563] font-medium italic text-base lg:text-lg">
              A boutique team bridging capital, technology, and global
              execution.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const TeamCard = ({ member, isActive }) => {
  return (
    <div
      className={`relative bg-[#0B1320] border rounded-[24px] lg:rounded-[32px] overflow-hidden transition-all duration-700 ease-out
        ${
          isActive
            ? "border-[#3B82F6]/40 shadow-2xl scale-100 grayscale-0"
            : "border-[#1F2937] opacity-40 scale-95 grayscale blur-[0.5px]"
        }`}
    >
      {/* IMAGE */}
      <div className="relative aspect-[4/4.2] overflow-hidden border-b border-[#1F2937] bg-[#0d1624]">
        <img
          src={member.image}
          alt={member.name}
          className={`w-full h-full object-cover transition-all duration-[1500ms] ${
            isActive
              ? "scale-110 brightness-90 saturate-50"
              : "scale-[1.08] brightness-40"
          }`}
          style={{
            objectPosition: `50% ${member.eyeY ?? "30%"}`,
          }}
        />

        {isActive && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320] via-transparent to-transparent opacity-80" />
            <motion.div
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[1px] bg-[#3B82F6]/30 z-40"
            />
          </>
        )}
      </div>

      {/* INFO */}
      <div className="p-5 lg:p-8">
        <h4 className="text-lg lg:text-xl font-black uppercase text-[#F5F7FA] tracking-tighter">
          {member.name}
        </h4>
        <p className="text-[10px] font-mono text-[#3B82F6] mt-1 uppercase tracking-widest leading-relaxed">
          {member.role}
        </p>
      </div>

      {/* ACTIVE LINE */}
      <div
        className={`absolute bottom-0 left-0 h-[2px] bg-[#3B82F6] transition-all duration-700 ${
          isActive ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      />
    </div>
  );
};
