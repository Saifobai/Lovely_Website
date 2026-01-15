import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

export default function PaymentSuccess() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const confirmPayment = async () => {
      try {
        const sessionId = params.get("session_id");
        const bookingId = params.get("bookingId"); // PayPal

        const res = await fetch("http://localhost:5000/api/payments/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId, bookingId }),
        });

        const data = await res.json();
        if (data.success) setConfirmed(true);
      } catch (err) {
        console.error("Payment confirmation failed");
      } finally {
        setLoading(false);
      }
    };

    confirmPayment();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        Verifying payment...
      </div>
    );
  }

  if (!confirmed) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        Payment verification failed
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="bg-[#0c0c0c] p-12 rounded-3xl border border-white/10 text-center">
        <CheckCircle2 size={64} className="text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-white mb-2">
          Booking Confirmed
        </h1>
        <p className="text-slate-400 mb-6">
          Your session is now officially booked.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-4 bg-white text-black rounded-xl font-bold"
        >
          Return to Calendar
        </button>
      </div>
    </div>
  );
}
