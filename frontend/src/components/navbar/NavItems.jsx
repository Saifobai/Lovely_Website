const NavItems = ({ children, active = false, href = "#" }) => {
  return (
    <li
      className={`relative group cursor-pointer transition-colors duration-300
        ${active ? "text-white" : "text-gray-300 hover:text-white"}
      `}
    >
      <a href={href} className="relative">
        {children}
      </a>

      {/* underline */}
      <span
        className={`
          absolute left-0 -bottom-2 h-[2px] w-full bg-blue-500 rounded-full
          origin-left transition-transform duration-300
          ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
        `}
      />
    </li>
  );
};

export default NavItems;
