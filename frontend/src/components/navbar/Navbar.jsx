import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import LogoImage from "../../assets/Images/favicon_in_dark_blue.png";

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(false);
  };

  const menuItems = [
    { href: "#you", label: t("navbar.you") || "you", index: "01" },
    { href: "#about", label: t("navbar.us") || "About", index: "02" },
    {
      href: "#together",
      label: t("navbar.together") || "Together",
      index: "03",
    },
    {
      href: "#services",
      label: t("navbar.services") || "Services",
      index: "04",
    },
    { href: "#contact", label: t("navbar.contact") || "Contact", index: "05" },
  ];

  return (
    <header className="fixed top-0 w-full z-[100] flex justify-center pointer-events-none transition-all duration-500">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`
          pointer-events-auto
          relative flex items-center
          w-[92%] md:w-[88%]
          px-8 transition-all duration-700 ease-in-out z-[110]
          ${
            scrolled
              ? "mt-4 bg-[#0B1320]/80 backdrop-blur-2xl border border-[#1F2937] shadow-2xl py-3 rounded-2xl"
              : "mt-10 bg-transparent border-transparent py-6 rounded-none"
          }
        `}
      >
        {/* LOGO */}
        <a
          href="#"
          onClick={scrollToTop}
          className="flex items-center gap-2 group cursor-pointer shrink-0 transition-transform active:scale-95"
        >
          <div className="w-12 h-12 bg-[#111827] rounded-lg flex items-center justify-center transition-transform duration-500  shadow-[0_0_15px_rgba(59,130,246,0.1)] border border-[#1F2937] overflow-hidden">
            <img
              src={LogoImage}
              alt="Logo"
              className="w-full h-full object-contain p-1.5"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="ml-2 text-4xl font-black tracking-tighter uppercase text-[#F5F7FA] italic">
              Lovely
            </span>
            <span className="ml-2 text-[11px] font-mono text-[#9CA3AF] tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
              Boutique Consulting
            </span>
          </div>
        </a>

        {/* DESKTOP MENU */}
        <div className="ml-auto flex items-center gap-12">
          <ul className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <NavLink
                key={item.index}
                {...item}
                onClick={(e) => handleLinkClick(e, item.href)}
              />
            ))}
          </ul>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden flex flex-col gap-1.5 z-[120] relative pointer-events-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div
              className={`h-[1px] w-6 bg-[#F5F7FA] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px] bg-[#3B82F6]" : ""}`}
            />
            <div
              className={`h-[1px] w-6 bg-[#F5F7FA] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <div
              className={`h-[1px] w-6 bg-[#F5F7FA] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px] bg-[#3B82F6]" : ""}`}
            />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-[#0B1320]/60 backdrop-blur-sm z-[90] pointer-events-auto"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed top-24 left-[6%] w-[88%] bg-[#111827] border border-[#1F2937] rounded-2xl p-8 md:hidden z-[100] shadow-2xl pointer-events-auto"
            >
              <ul className="flex flex-col gap-6">
                {menuItems.map((item, i) => (
                  <motion.li
                    key={item.index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className="flex items-center gap-4 text-[#F5F7FA] font-black text-2xl uppercase italic tracking-tighter hover:text-[#3B82F6] transition-colors"
                    >
                      <span className="text-[10px] font-mono text-[#3B82F6]">
                        [{item.index}]
                      </span>
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavLink = ({ href, label, index, onClick }) => (
  <li className="relative group">
    <a
      href={href}
      onClick={onClick}
      className="flex items-start gap-1 py-2 text-[20px] font-bold uppercase tracking-[0.2em] text-[#9CA3AF] hover:text-[#F5F7FA] transition-colors"
    >
      {label}
    </a>
    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#3B82F6] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
  </li>
);

export default Navbar;
