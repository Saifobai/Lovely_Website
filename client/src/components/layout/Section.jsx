const Section = ({ children, id, variant = "dark" }) => {
  const variants = {
    dark: "bg-[#020617]",
    darker: "bg-[#010314]",
    gradient: "bg-gradient-to-b from-[#020617] via-[#010314] to-[#020617]",
  };

  return (
    <section
      id={id}
      className={`
        width-full
        min-h-screen
        flex items-center
        ${variants[variant]}
      `}
    >
      <div className="w-[75%] mx-auto px-10 py-32 relative">{children}</div>
    </section>
  );
};

export default Section;
