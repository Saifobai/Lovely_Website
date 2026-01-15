import { motion } from "framer-motion";
import { X, CreditCard } from "lucide-react";
import { useEffect } from "react";
import { useCountdown } from "../hooks/useCountdown";
import PaymentButtons from "./PaymentButtons";

export default function PendingPaymentModal({ booking, onClose }) {
  if (!booking || !booking.expiresAt) return null;

  const { expired } = useCountdown(booking.expiresAt);

  // Auto-close modal when expired
  // useEffect(() => {
  //   if (expired) {
  //     setTimeout(() => {
  //       onClose();
  //     }, 8000);
  //   }
  // }, [expired, onClose]);

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50 p-6">
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative bg-[#0b0b0b] border border-white/10 rounded-[40px] p-12 w-full max-w-2xl shadow-2xl"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition"
        >
          <X size={18} />
        </button>

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-500">
            <CreditCard size={28} />
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-500">
              Final Step
            </p>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Secure Your Session
            </h2>
          </div>
        </div>

        {!expired ? (
          <>
            {/* DESCRIPTION */}
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-12">
              Your time slot is temporarily reserved.
              <br />
              Complete the payment below to confirm your booking.
            </p>

            {/* PAYMENT BUTTONS */}
            <div className="max-w-md">
              <PaymentButtons bookingId={booking.id} />
            </div>
          </>
        ) : (
          <>
            <p className="text-red-500 text-lg mb-10">
              This reservation has expired and the slot has been released.
            </p>

            <button
              onClick={onClose}
              className="px-10 py-3 rounded-xl bg-white text-black font-bold uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform"
            >
              Return to Calendar
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
}
