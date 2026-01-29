// import { motion } from "framer-motion";
// import { X, CreditCard } from "lucide-react";
// import { useState } from "react";
// import { initPayment } from "../../api/payment.api";
// import { useCountdown } from "../hooks/useCountdown";

// export default function PendingPaymentModal({ booking, onClose }) {
//   const { expired } = useCountdown(booking.expiresAt);
//   const [loading, setLoading] = useState(null);

//   const pay = async (provider) => {
//     try {
//       setLoading(provider);

//       const { paymentUrl } = await initPayment({
//         bookingId: booking.id,
//         provider,
//       });

//       if (!paymentUrl) {
//         throw new Error("No payment URL returned");
//       }

//       window.location.href = paymentUrl;
//     } catch (err) {
//       console.error(err);
//       alert("Payment failed. Please try again.");
//       setLoading(null);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50 p-6">
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         className="relative bg-[#0b0b0b] border border-white/10 rounded-3xl p-10 w-full max-w-xl"
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center"
//         >
//           <X size={18} />
//         </button>

//         {!expired ? (
//           <>
//             <h2 className="text-2xl font-bold mb-6">Complete Payment</h2>

//             <div className="space-y-4">
//               <button
//                 onClick={() => pay("STRIPE")}
//                 disabled={loading}
//                 className="w-full py-4 bg-white text-black rounded-xl font-bold uppercase"
//               >
//                 {loading === "STRIPE" ? "Redirecting..." : "Pay with Card"}
//               </button>

//               <button
//                 onClick={() => pay("PAYPAL")}
//                 disabled={loading}
//                 className="w-full py-4 border border-white/20 text-white rounded-xl font-bold uppercase"
//               >
//                 {loading === "PAYPAL" ? "Redirecting..." : "Pay with PayPal"}
//               </button>
//             </div>
//           </>
//         ) : (
//           <>
//             <p className="text-red-500 mb-6">This reservation has expired.</p>
//             <button
//               onClick={onClose}
//               className="px-8 py-3 bg-white text-black rounded-xl font-bold"
//             >
//               Back to calendar
//             </button>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// }

//===================================================================
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { initPayment } from "../../api/payment.api";
import { useCountdown } from "../hooks/useCountdown";
import { CANCELLATION_POLICY } from "../../constants/index";

export default function PendingPaymentModal({ booking, onClose }) {
  const { expired } = useCountdown(booking.expiresAt);
  const [loading, setLoading] = useState(null);
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  const pay = async (provider) => {
    try {
      setLoading(provider);

      const { paymentUrl } = await initPayment({
        bookingId: booking.id,
        provider,
      });

      if (!paymentUrl) {
        throw new Error("No payment URL returned");
      }

      window.location.href = paymentUrl;
    } catch (err) {
      console.error(err);
      alert("Payment failed. Please try again.");
      setLoading(null);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50 p-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-[#0b0b0b] border border-white/10 rounded-3xl p-10 w-full max-w-xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center"
        >
          <X size={18} />
        </button>

        {!expired ? (
          <>
            <h2 className="text-2xl font-bold mb-6">Complete Payment</h2>

            {/* 🔒 Cancellation Policy */}
            <div className="mb-6 p-4 rounded-xl border border-white/10 bg-white/5 text-sm leading-relaxed">
              <h3 className="font-semibold mb-2">Cancellation Policy</h3>

              <ul className="space-y-1 text-white/80">
                <li>
                  • Cancellations up to{" "}
                  <strong>{CANCELLATION_POLICY.deadlineHours} hours</strong>{" "}
                  before the appointment are refunded in full.
                </li>

                <li>
                  • Cancellations less than {CANCELLATION_POLICY.deadlineHours}{" "}
                  hours before the appointment or no-shows are{" "}
                  <strong>non-refundable</strong>.
                </li>

                <li>
                  • To cancel, please use{" "}
                  <strong>{CANCELLATION_POLICY.cancelMethod}</strong>.
                </li>
              </ul>
            </div>

            {/* ✅ Acceptance checkbox */}
            <label className="flex items-start gap-3 text-sm text-white/80 mb-6">
              <input
                type="checkbox"
                checked={acceptedPolicy}
                onChange={(e) => setAcceptedPolicy(e.target.checked)}
                className="mt-1"
              />
              <span>I have read and agree to the cancellation policy.</span>
            </label>

            {/* 💳 Payment buttons */}
            <div className="space-y-4">
              <button
                onClick={() => pay("STRIPE")}
                disabled={loading || !acceptedPolicy}
                className="w-full py-4 bg-white text-black rounded-xl font-bold uppercase disabled:opacity-50"
              >
                {loading === "STRIPE" ? "Redirecting..." : "Pay with Card"}
              </button>

              <button
                onClick={() => pay("PAYPAL")}
                disabled={loading || !acceptedPolicy}
                className="w-full py-4 border border-white/20 text-white rounded-xl font-bold uppercase disabled:opacity-50"
              >
                {loading === "PAYPAL" ? "Redirecting..." : "Pay with PayPal"}
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-red-500 mb-6">This reservation has expired.</p>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-white text-black rounded-xl font-bold"
            >
              Back to calendar
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
}
