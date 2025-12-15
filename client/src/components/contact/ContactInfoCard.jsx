const ContactInfoCard = ({ icon, title, value, subtitle }) => {
  return (
    <div
      className="group relative rounded-xl p-6 bg-white/5 backdrop-blur-xl
      border border-white/10 transition-all duration-300
      hover:-translate-y-1 hover:border-blue-500/40
      hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]"
    >
      {/* Glow layer */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
        transition duration-300 bg-blue-500/10 blur-xl"
      />

      <div className="relative flex items-start gap-4">
        <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
          {icon}
        </div>

        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-gray-200">{value}</p>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
