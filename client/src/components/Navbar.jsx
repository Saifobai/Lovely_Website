import { useEffect, useRef, useState } from "react";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavItem = ({ children, active = false }) => (
    <li
      className={`relative cursor-pointer transition ${
        active ? "text-white" : "text-gray-300 hover:text-white"
      }`}
    >
      {children}
      <span
        className={`
          absolute left-0 -bottom-2 h-[2px] w-full bg-blue-500 rounded-full
          origin-left transition-transform duration-300
          ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
        `}
      />
    </li>
  );

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-md shadow-xl" : "bg-transparent"
      }`}
    >
      <nav className="w-[80%] mx-auto px-6 py-5 flex items-center justify-between text-white">
        {/* LOGO */}
        <div className="text-2xl font-bold">
          Lovely<span className="text-blue-500">.</span>
        </div>

        {/* LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavItem active>Home</NavItem>

          <li className="relative group">
            <NavItem>About</NavItem>
          </li>

          <li className="relative group">
            <NavItem>Services</NavItem>
          </li>

          <li className="relative group">
            <NavItem>Portfolio</NavItem>
          </li>

          {/* MEGA MENU */}
          <li ref={megaRef} className="relative group">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center gap-1 text-gray-300 hover:text-white transition"
            >
              Megamenu
              <svg
                className="w-4 h-4 mt-[1px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <span
              className="
                absolute left-0 -bottom-2 h-[2px] w-full bg-blue-500 rounded-full
                scale-x-0 origin-left transition-transform duration-300
                group-hover:scale-x-100
              "
            />

            {open && <MegaMenu />}
          </li>

          <li className="relative group">
            <NavItem>Contact</NavItem>
          </li>
        </ul>

        {/* CTA */}
        <button className="bg-blue-600 hover:bg-blue-500 transition px-5 py-2 rounded-lg text-sm font-semibold">
          Get Started
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
