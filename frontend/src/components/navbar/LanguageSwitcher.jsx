// import { useEffect, useRef, useState } from "react";
// import { useTranslation } from "react-i18next";

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();
//   const [open, setOpen] = useState(false);
//   const ref = useRef(null);

//   const currentLang = i18n.language.split("-")[0].toUpperCase(); // ✅ FIX

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//     localStorage.setItem("lang", lang);
//     setOpen(false);
//   };

//   return (
//     <div ref={ref} className="relative">
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex items-center gap-2 px-4 py-2 rounded-lg
//         border border-white/20 text-sm font-medium
//         hover:border-blue-400 transition"
//       >
//         🌍 {currentLang}
//         <svg
//           className={`w-4 h-4 transition ${open ? "rotate-180" : ""}`}
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <path d="M6 9l6 6 6-6" />
//         </svg>
//       </button>

//       {open && (
//         <div
//           className="absolute right-0 mt-3 w-36
//           bg-black/80 backdrop-blur-xl
//           border border-white/10 rounded-xl shadow-xl overflow-hidden"
//         >
//           <button
//             onClick={() => changeLanguage("en")}
//             className="w-full px-4 py-2 text-left hover:bg-white/10 transition"
//           >
//             🇬🇧 English
//           </button>
//           <button
//             onClick={() => changeLanguage("de")}
//             className="w-full px-4 py-2 text-left hover:bg-white/10 transition"
//           >
//             🇩🇪 Deutsch
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LanguageSwitcher;

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const currentLang = i18n.language.split("-")[0].toUpperCase();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setOpen(false);
  };

  const languages = [
    { code: "en", label: "EN", full: "English" },
    { code: "de", label: "DE", full: "Deutsch" },
  ];

  return (
    <div ref={ref} className="relative">
      {/* TRIGGER BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="group flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-500"
      >
        <div className="relative w-2 h-2">
          <span className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-40" />
          <span className="absolute inset-0 bg-blue-500 rounded-full" />
        </div>

        <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">
          LOCALE // {currentLang}
        </span>

        <svg
          className={`w-3 h-3 text-blue-500 transition-transform duration-500 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* DROPDOWN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 mt-4 w-40 bg-[#0a0a0b]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden z-[110]"
          >
            <div className="p-2 flex flex-col gap-1">
              <div className="px-3 py-2 text-[8px] font-mono text-slate-500 uppercase tracking-widest border-b border-white/5 mb-1">
                Select_Protocol
              </div>

              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`
                    group flex items-center justify-between w-full px-3 py-2.5 rounded-xl transition-all duration-300
                    ${
                      currentLang === lang.label
                        ? "bg-blue-600/10"
                        : "hover:bg-white/5"
                    }
                  `}
                >
                  <span
                    className={`text-[11px] font-bold tracking-widest uppercase transition-colors ${
                      currentLang === lang.label
                        ? "text-blue-400"
                        : "text-white/60 group-hover:text-white"
                    }`}
                  >
                    {lang.full}
                  </span>
                  <span className="text-[9px] font-mono text-blue-500/40 group-hover:text-blue-500 transition-colors">
                    [{lang.label}]
                  </span>
                </button>
              ))}
            </div>

            {/* Bottom Tech Detail */}
            <div className="bg-white/5 px-4 py-2 flex justify-between items-center">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-white/20 rounded-full" />
                <div className="w-1 h-1 bg-white/20 rounded-full" />
              </div>
              <span className="text-[7px] font-mono text-slate-600 uppercase tracking-tighter italic">
                Active_Link
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
