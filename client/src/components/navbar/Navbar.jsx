// import { useEffect, useRef, useState } from "react";
// import { useTranslation } from "react-i18next";
// import MegaMenu from "../MegaMenu";
// import NavItems from "./NavItems";
// import LanguageSwitcher from "./LanguageSwitcher";

// const Navbar = () => {
//   const { t } = useTranslation();
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const megaRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (megaRef.current && !megaRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };

//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-black/60 backdrop-blur-md shadow-xl" : "bg-transparent"
//       }`}
//     >
//       <nav className="w-[80%] mx-auto px-6 py-5 flex items-center justify-between text-white">
//         {/* LOGO */}
//         <div className="text-2xl font-bold">Lovely</div>

//         {/* LINKS */}
//         <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
//           <NavItems href="#home">{t("navbar.you")}</NavItems>
//           <NavItems href="#about">{t("navbar.us")}</NavItems>
//           <NavItems href="#services">{t("navbar.services")}</NavItems>

//           {/* <li ref={megaRef} className="relative group cursor-pointer">
//             <button
//               onClick={() => setOpen((prev) => !prev)}
//               className="flex items-center gap-1 text-gray-300 hover:text-white transition"
//             >
//               {t("navbar.services")}
//               <svg
//                 className="w-4 h-4 mt-[1px]"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M6 9l6 6 6-6" />
//               </svg>
//             </button>

//             <span
//               className="absolute left-0 -bottom-2 h-[2px] w-full bg-blue-500 rounded-full
//               scale-x-0 origin-left transition-transform duration-300
//               group-hover:scale-x-100"
//             />

//             {open && <MegaMenu />}
//           </li> */}

//           <NavItems href="#contact">{t("navbar.contact")}</NavItems>
//         </ul>

//         {/* LANGUAGE */}
//         <LanguageSwitcher />
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

// import { useEffect, useRef, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { motion, AnimatePresence } from "framer-motion";
// import NavItems from "./NavItems";
// import LanguageSwitcher from "./LanguageSwitcher";

// const Navbar = () => {
//   const { t } = useTranslation();
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="fixed top-0 w-full z-[100] flex justify-center pt-6 transition-all duration-500">
//       {/* FLOATING DOCK CONTAINER
//           Transitions from invisible to a sharp, blurred pill on scroll
//       */}
//       <motion.nav
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//         className={`
//           relative flex items-center justify-between transition-all duration-700 ease-in-out
//           ${
//             scrolled
//               ? "w-[90%] md:w-[70%] px-8 py-3 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
//               : "w-[95%] px-10 py-6 bg-transparent border border-transparent rounded-none"
//           }
//         `}
//       >
//         {/* LOGO AREA */}
//         <div className="flex items-center gap-2 group cursor-pointer">
//           <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transition-transform duration-500 group-hover:rotate-[90deg]">
//             <span className="text-white font-black text-xs italic">LS</span>
//           </div>
//           <div className="flex flex-col leading-none">
//             <span className="text-xl font-black tracking-tighter uppercase text-white">
//               Lovely<span className="text-blue-500">.</span>
//             </span>
//             <span className="text-[8px] font-mono text-slate-500 tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
//               Digital_Agency
//             </span>
//           </div>
//         </div>

//         {/* CENTERED LINKS (Hidden on Mobile) */}
//         <ul className="hidden md:flex items-center gap-10">
//           <NavLink href="#home" label={t("navbar.you")} index="01" />
//           <NavLink href="#about" label={t("navbar.us")} index="02" />
//           <NavLink href="#services" label={t("navbar.services")} index="03" />
//           <NavLink href="#contact" label={t("navbar.contact")} index="04" />
//         </ul>

//         {/* RIGHT ACTION AREA */}
//         <div className="flex items-center gap-6">
//           <div className="hidden sm:block h-4 w-[1px] bg-white/10" />
//           <LanguageSwitcher />

//           {/* MOBILE TOGGLE (Minimalist) */}
//           <button
//             className="md:hidden flex flex-col gap-1.5"
//             onClick={() => setMobileOpen(!mobileOpen)}
//           >
//             <div
//               className={`h-[1px] w-6 bg-white transition-all ${
//                 mobileOpen ? "rotate-45 translate-y-2" : ""
//               }`}
//             />
//             <div
//               className={`h-[1px] w-6 bg-white transition-all ${
//                 mobileOpen ? "opacity-0" : ""
//               }`}
//             />
//             <div
//               className={`h-[1px] w-6 bg-white transition-all ${
//                 mobileOpen ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             />
//           </button>
//         </div>

//         {/* BACKGROUND GLOW TRACKER (Subtle) */}
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity rounded-2xl" />
//       </motion.nav>
//     </header>
//   );
// };

// /* --- ENHANCED NAV LINK COMPONENT --- */
// const NavLink = ({ href, label, index }) => (
//   <li className="relative group">
//     <a
//       href={href}
//       className="flex items-start gap-1 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors duration-300"
//     >
//       <span className="text-[7px] font-mono text-blue-500 mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity">
//         {index}
//       </span>
//       {label}
//     </a>
//     {/* The Technical Underline */}
//     <span className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500 scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
//     <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-1" />
//   </li>
// );

// export default Navbar;

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import NavItems from "./NavItems";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-[100] flex justify-center pt-6">
      <motion.nav
        initial={{ opacity: 1, y: 0 }}
        animate={{
          backdropFilter: "blur(24px)",
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`
          relative flex items-center justify-between
          w-[92%] md:w-[72%]
          px-8 py-4
          rounded-2xl
          border border-white/10
          bg-black/40 backdrop-blur-2xl
          shadow-[0_20px_50px_rgba(0,0,0,0.45)]
          transition-all duration-500
          ${scrolled ? "bg-black/55 shadow-[0_30px_70px_rgba(0,0,0,0.65)]" : ""}
        `}
      >
        {/* LOGO */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transition-transform duration-500 group-hover:rotate-[90deg]">
            <span className="text-white font-black text-xs italic">LS</span>
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter uppercase text-white">
              Lovely<span className="text-blue-500">.</span>
            </span>
            <span className="text-[8px] font-mono text-slate-500 tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
              Digital_Agency
            </span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-10">
          <NavLink href="#home" label={t("navbar.you")} index="01" />
          <NavLink href="#about" label={t("navbar.us")} index="02" />
          <NavLink href="#services" label={t("navbar.services")} index="03" />
          <NavLink href="#contact" label={t("navbar.contact")} index="04" />
        </ul>

        {/* ACTIONS */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:block h-4 w-[1px] bg-white/10" />
          <LanguageSwitcher />

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div
              className={`h-[1px] w-6 bg-white transition-all ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <div
              className={`h-[1px] w-6 bg-white transition-all ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`h-[1px] w-6 bg-white transition-all ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* SUBTLE GLOW */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-transparent opacity-0 hover:opacity-100 pointer-events-none transition-opacity rounded-2xl" />
      </motion.nav>
    </header>
  );
};

/* NAV LINK */
const NavLink = ({ href, label, index }) => (
  <li className="relative group">
    <a
      href={href}
      className="flex items-start gap-1 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors"
    >
      <span className="text-[7px] font-mono text-blue-500 mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity">
        {index}
      </span>
      {label}
    </a>

    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500 scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-1" />
  </li>
);

export default Navbar;
