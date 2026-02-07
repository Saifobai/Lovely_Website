import { CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] p-6">
      <div className="bg-[#0c0c0c] p-10 md:p-16 rounded-[40px] border border-white/10 text-center max-w-xl w-full shadow-2xl">
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={40} className="text-green-500" />
        </div>

        <h1 className="text-4xl font-black text-white mb-4 uppercase italic tracking-tighter">
          Booking <span className="text-blue-500">Confirmed</span>
        </h1>

        <p className="text-slate-400 mb-10 font-mono text-xs uppercase tracking-[0.2em] leading-relaxed">
          Your strategic session is now officially scheduled. Check your email
          for the calendar invitation and access links.
        </p>

        <button
          onClick={() => navigate("/")}
          className="w-full group flex items-center justify-center gap-3 px-8 py-5 bg-white text-black rounded-2xl font-black uppercase italic text-sm transition-all hover:bg-blue-600 hover:text-white"
        >
          Return to Home Page{" "}
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </div>
  );
}
