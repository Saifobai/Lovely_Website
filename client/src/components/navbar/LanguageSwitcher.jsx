import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const currentLang = i18n.language.split("-")[0].toUpperCase(); // ✅ FIX

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

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg
        border border-white/20 text-sm font-medium
        hover:border-blue-400 transition"
      >
        🌍 {currentLang}
        <svg
          className={`w-4 h-4 transition ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 mt-3 w-36
          bg-black/80 backdrop-blur-xl
          border border-white/10 rounded-xl shadow-xl overflow-hidden"
        >
          <button
            onClick={() => changeLanguage("en")}
            className="w-full px-4 py-2 text-left hover:bg-white/10 transition"
          >
            🇬🇧 English
          </button>
          <button
            onClick={() => changeLanguage("de")}
            className="w-full px-4 py-2 text-left hover:bg-white/10 transition"
          >
            🇩🇪 Deutsch
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
