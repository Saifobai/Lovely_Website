import { useLanguage } from "../context/LanguageContext";

const OPTIONS = [
  { code: "en", label: "EN", name: "English" },
  { code: "de", label: "DE", name: "Deutsch" },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language / Sprache"
      className="flex items-center border border-white/30 text-[10px] font-bold tracking-[.12em] md:text-[11px]"
    >
      {OPTIONS.map(({ code, label, name }) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            aria-label={name}
            lang={code}
            className={`cursor-pointer px-2.5 py-[7px] transition duration-200 md:px-3 md:py-[9px] ${
              active
                ? "bg-[#c7b58a] text-[#1b2a4a]"
                : "text-white/70 hover:text-white"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
