import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useEffect } from "react";
import { useCountdown } from "../hooks/useCountdown";
import PaymentButtons from "./PaymentButtons";

export default function PendingPaymentModal({ booking, onClose }) {
  if (!booking || !booking.expiresAt) return null;

  const { minutes, seconds, expired } = useCountdown(booking.expiresAt);

  // Auto-close modal when expired (UX + calendar refresh)
  useEffect(() => {
    if (expired) {
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  }, [expired, onClose]);

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-8 w-full max-w-md"
      >
        <div className="flex items-center gap-3 text-blue-500 mb-6">
          <Clock />
          <span className="font-mono text-sm uppercase">Pending Payment</span>
        </div>

        {!expired ? (
          <>
            <p className="text-white text-lg mb-4">Complete payment within:</p>

            <div className="text-4xl font-bold text-white mb-6">
              {minutes}:{seconds.toString().padStart(2, "0")}
            </div>

            <PaymentButtons bookingId={booking.id} />
          </>
        ) : (
          <>
            <p className="text-red-500 text-lg mb-6">
              This booking has expired.
            </p>

            <button
              onClick={onClose}
              className="w-full py-4 bg-white text-black rounded-xl font-bold"
            >
              Return to Calendar
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
}
