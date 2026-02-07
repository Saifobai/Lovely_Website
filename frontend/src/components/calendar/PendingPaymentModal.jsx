import { motion } from "framer-motion";
import { X, ShieldAlert, CreditCard, Lock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { initPayment } from "../../api/payment.api";
import { useCountdown } from "../hooks/useCountdown";
import { CANCELLATION_POLICY } from "../../constants";

export default function PendingPaymentModal({ booking, onClose }) {
  const { expired, minutes, seconds } = useCountdown(booking.expiresAt);
  const [loading, setLoading] = useState(null);
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  const durationRef = useRef(minutes * 60 + seconds);

  useEffect(() => {
    if (expired) setLoading(null);
  }, [expired]);

  const pay = async (provider) => {
    try {
      setLoading(provider);
      const { paymentUrl } = await initPayment({
        bookingId: booking.id,
        provider,
      });

      if (!paymentUrl) throw new Error("Missing payment URL");

      // Redirect in the same tab to ensure the modal/timer is cleared
      window.location.href = paymentUrl;
    } catch (err) {
      console.error(err);
      alert("Payment initialization failed. Please retry.");
      setLoading(null);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-3xl flex items-center justify-center z-[200] p-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative bg-[#050505] border border-white/10 rounded-[32px] w-full max-w-lg overflow-hidden"
      >
        <div className="bg-white/5 px-8 py-4 border-b border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full animate-pulse ${expired ? "bg-red-500" : "bg-blue-500"}`}
            />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400">
              {expired ? "Protocol_Expired" : "Awaiting_Transaction"}
            </span>
          </div>
          <button
            onClick={onClose}
            disabled={!!loading}
            className="text-slate-500 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8 md:p-10">
          {!expired ? (
            <>
              <div className="mb-10 text-center">
                <h2 className="text-2xl font-black italic uppercase mb-2">
                  Secure your <span className="text-blue-600">Session</span>
                </h2>

                <div className="mt-4 text-2xl font-mono font-black italic text-blue-500">
                  {String(minutes).padStart(2, "0")}:
                  {String(seconds).padStart(2, "0")}
                </div>
              </div>

              <div className="w-full h-[2px] bg-white/5 mb-10">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: durationRef.current, ease: "linear" }}
                  className="h-full bg-blue-600"
                />
              </div>

              <div className="mb-8 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2 mb-4 text-blue-500">
                  <ShieldAlert size={14} />
                  <span className="text-[10px] font-black uppercase">
                    Cancel policy
                  </span>
                </div>
                <ul className="space-y-3 text-[12px] font-mono text-slate-400">
                  <li>Full refund: {CANCELLATION_POLICY.text}</li>

                  <li>Email: {CANCELLATION_POLICY.cancelMethod}</li>
                </ul>
              </div>

              <label className="flex items-center gap-4 cursor-pointer mb-10">
                <input
                  type="checkbox"
                  checked={acceptedPolicy}
                  onChange={(e) => setAcceptedPolicy(e.target.checked)}
                  className="accent-blue-600"
                />
                <span className="text-[10px] font-mono uppercase text-slate-400">
                  Confirm Policy Acknowledgement
                </span>
              </label>

              <div className="grid gap-4">
                <button
                  onClick={() => pay("STRIPE")}
                  disabled={loading || !acceptedPolicy}
                  className="py-5 bg-white text-black rounded-2xl font-black uppercase disabled:opacity-20 flex items-center justify-center gap-2"
                >
                  {loading === "STRIPE" ? (
                    "Redirecting..."
                  ) : (
                    <>
                      <CreditCard size={18} /> Pay with Card
                    </>
                  )}
                </button>

                {/* <button
                  onClick={() => pay("PAYPAL")}
                  disabled={loading || !acceptedPolicy}
                  className="py-5 border border-white/10 text-slate-400 rounded-2xl uppercase disabled:opacity-20"
                >
                  {loading === "PAYPAL" ? "Redirecting..." : "Pay with PayPal"}
                </button> */}
              </div>
            </>
          ) : (
            <div className="text-center py-10">
              <ShieldAlert size={40} className="text-red-500 mx-auto mb-6" />
              <h3 className="text-2xl font-black uppercase mb-2">
                Token Expired
              </h3>
              <p className="text-xs font-mono text-slate-500 mb-8">
                Reservation window closed.
              </p>
              <button
                onClick={onClose}
                className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase"
              >
                Reinitialize
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
