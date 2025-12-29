export default function NavBtn({ onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition"
    >
      {icon}
    </button>
  );
}
