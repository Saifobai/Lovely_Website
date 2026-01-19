import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "#home", label: t("navbar.you"), index: "01" },
    { href: "#about", label: t("navbar.us"), index: "02" },
    { href: "#services", label: t("navbar.services"), index: "03" },
    { href: "#contact", label: t("navbar.contact"), index: "04" },
  ];

  return (
    <header className="fixed top-0 w-full z-[100] flex justify-center pt-6 pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`
          pointer-events-auto
          relative flex items-center
          w-[88%]
          px-8 py-4
          rounded-2xl
          transition-all duration-700 ease-in-out
          ${
            scrolled
              ? "bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              : "bg-transparent border-transparent shadow-none"
          }
        `}
      >
        {/* LOGO - Stays on the far left */}
        <div className="flex items-center gap-2 group cursor-pointer shrink-0">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transition-transform duration-500 group-hover:rotate-[90deg]">
            <span className="text-white font-black text-xs italic">LS</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="ml-3 text-xl font-black tracking-tighter uppercase text-white">
              Lovely<span className="text-blue-500"></span>
            </span>
            <span className="text-[8px] font-mono text-slate-500 tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
              Boutique_Consulting
            </span>
          </div>
        </div>

        {/* RIGHT CONTENT - Pushed to the far right to create the large gap */}
        <div className="ml-auto flex items-center gap-12">
          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <NavLink key={item.index} {...item} />
            ))}
          </ul>

          {/* ACTIONS */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:block h-4 w-[1px] bg-white/10" />
            {/* <LanguageSwitcher /> */}

            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden flex flex-col gap-1.5 z-[110] relative"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <div
                className={`h-[1px] w-6 bg-white transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[7px] bg-blue-500" : ""
                }`}
              />
              <div
                className={`h-[1px] w-6 bg-white transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <div
                className={`h-[1px] w-6 bg-white transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[7px] bg-blue-500" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-transparent opacity-0 hover:opacity-100 pointer-events-none transition-opacity rounded-2xl" />
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-24 left-[6%] w-[88%] bg-black/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-8 md:hidden z-[90] shadow-2xl overflow-hidden"
          >
            <ul className="flex flex-col gap-6">
              {menuItems.map((item, i) => (
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.index}
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-4 text-white font-black text-2xl uppercase italic tracking-tighter hover:text-blue-500 transition-colors"
                  >
                    <span className="text-[10px] font-mono text-blue-500 not-italic">
                      [{item.index}]
                    </span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

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
