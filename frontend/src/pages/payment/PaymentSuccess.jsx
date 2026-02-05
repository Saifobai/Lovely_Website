import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="bg-[#0c0c0c] p-12 rounded-3xl border border-white/10 text-center">
        <CheckCircle2 size={64} className="text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-white mb-2">
          Booking Confirmed
        </h1>
        <p className="text-slate-400 mb-6">
          Your session is now officially booked. A confirmation email has been
          sent.
        </p>
        <button
          onClick={() => navigate("/book")}
          className="px-8 py-4 bg-white text-black rounded-xl font-bold"
        >
          Return to Calendar
        </button>
      </div>
    </div>
  );
}
