import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "pm-lang";
const SUPPORTED = ["en", "de"];

// Saved choice wins. First visit: German browsers get DE, everyone else EN.
// For a hard EN default, replace the navigator check with `return "en"`.
const detectLanguage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(saved)) return saved;
  } catch {
    /* storage blocked, fall through */
  }
  if (
    typeof navigator !== "undefined" &&
    navigator.language?.toLowerCase().startsWith("de")
  ) {
    return "de";
  }
  return "en";
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  // Lazy init = right language on first render, no flash of the wrong page.
  const [lang, setLangState] = useState(detectLanguage);

  const setLang = useCallback((next) => {
    if (SUPPORTED.includes(next)) setLangState(next);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    const previous = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = previous;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
};
