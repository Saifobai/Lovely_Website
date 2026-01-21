// import { motion } from "framer-motion";
// import { X, CreditCard } from "lucide-react";
// import { useEffect } from "react";
// import { useCountdown } from "../hooks/useCountdown";
// import PaymentButtons from "./PaymentButtons";

// export default function PendingPaymentModal({ booking, onClose }) {
//   if (!booking || !booking.expiresAt) return null;

//   const { expired } = useCountdown(booking.expiresAt);

//   return (
//     <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50 p-6">
//       <motion.div
//         initial={{ scale: 0.92, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.35, ease: "easeOut" }}
//         className="relative bg-[#0b0b0b] border border-white/10 rounded-[40px] p-12 w-full max-w-2xl shadow-2xl"
//       >
//         {/* CLOSE BUTTON */}
//         <button
//           onClick={onClose}
//           className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition"
//         >
//           <X size={18} />
//         </button>

//         {/* HEADER */}
//         <div className="flex items-center gap-4 mb-10">
//           <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-500">
//             <CreditCard size={28} />
//           </div>

//           <div>
//             <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-500">
//               Final Step
//             </p>
//             <h2 className="text-3xl font-bold text-white tracking-tight">
//               Secure Your Session
//             </h2>
//           </div>
//         </div>

//         {!expired ? (
//           <>
//             {/* DESCRIPTION */}
//             <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-12">
//               Your time slot is temporarily reserved.
//               <br />
//               Complete the payment below to confirm your booking.
//             </p>

//             {/* PAYMENT BUTTONS */}
//             <div className="max-w-md">
//               <PaymentButtons bookingId={booking.id} />
//             </div>
//           </>
//         ) : (
//           <>
//             <p className="text-red-500 text-lg mb-10">
//               This reservation has expired and the slot has been released.
//             </p>

//             <button
//               onClick={onClose}
//               className="px-10 py-3 rounded-xl bg-white text-black font-bold uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform"
//             >
//               Return to Calendar
//             </button>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// }

//===================================================
//=================== Edited Files ===================
//===================================================
// import { motion } from "framer-motion";
// import { X, CreditCard, Paypal } from "lucide-react";
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
//       window.location.href = paymentUrl;
//     } catch (err) {
//       console.error(err);
//       alert("Payment initialization failed");
//       setLoading(null);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50 p-6">
//       <motion.div
//         initial={{ scale: 0.92, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.35, ease: "easeOut" }}
//         className="relative bg-[#0b0b0b] border border-white/10 rounded-[40px] p-12 w-full max-w-2xl shadow-2xl"
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white"
//         >
//           <X size={18} />
//         </button>

//         {!expired ? (
//           <>
//             <h2 className="text-3xl font-bold text-white mb-6">
//               Confirm & Deploy
//             </h2>

//             <p className="text-slate-400 mb-10">
//               Your slot is reserved temporarily. Complete payment to finalize.
//             </p>

//             <div className="space-y-4 max-w-md">
//               <button
//                 onClick={() => pay("STRIPE")}
//                 disabled={loading}
//                 className="w-full py-4 rounded-xl bg-white text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-blue-500 hover:text-white transition"
//               >
//                 <CreditCard size={18} />
//                 {loading === "STRIPE" ? "Redirecting…" : "Pay with Card"}
//               </button>

//               <button
//                 onClick={() => pay("PAYPAL")}
//                 disabled={loading}
//                 className="w-full py-4 rounded-xl bg-blue-600 text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-blue-700 transition"
//               >
//                 <Paypal size={18} />
//                 {loading === "PAYPAL" ? "Redirecting…" : "Pay with PayPal"}
//               </button>
//             </div>
//           </>
//         ) : (
//           <>
//             <p className="text-red-500 text-lg mb-10">
//               This reservation has expired.
//             </p>
//             <button
//               onClick={onClose}
//               className="px-10 py-3 rounded-xl bg-white text-black font-bold uppercase"
//             >
//               Return to Calendar
//             </button>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// }

//===================================================\
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
//         throw new Error("Missing payment URL");
//       }

//       // Hard redirect to provider
//       window.location.href = paymentUrl;
//     } catch (err) {
//       console.error("Payment init failed:", err);
//       alert("Payment initialization failed");
//       setLoading(null);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50 p-6">
//       <motion.div
//         initial={{ scale: 0.92, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.35, ease: "easeOut" }}
//         className="relative bg-[#0b0b0b] border border-white/10 rounded-[40px] p-12 w-full max-w-2xl shadow-2xl"
//       >
//         {/* CLOSE */}
//         <button
//           onClick={onClose}
//           className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white"
//         >
//           <X size={18} />
//         </button>

//         {!expired ? (
//           <>
//             <h2 className="text-3xl font-bold text-white mb-6">
//               Confirm & Deploy
//             </h2>

//             <p className="text-slate-400 mb-10">
//               Your slot is reserved temporarily. Complete payment to finalize.
//             </p>

//             <div className="space-y-4 max-w-md">
//               {/* STRIPE */}
//               <button
//                 onClick={() => pay("STRIPE")}
//                 disabled={loading !== null}
//                 className="w-full py-4 rounded-xl bg-white text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-blue-500 hover:text-white transition disabled:opacity-40"
//               >
//                 <CreditCard size={18} />
//                 {loading === "STRIPE" ? "Redirecting…" : "Pay with Card"}
//               </button>

//               {/* PAYPAL */}
//               <button
//                 onClick={() => pay("PAYPAL")}
//                 disabled={loading !== null}
//                 className="w-full py-4 rounded-xl bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:border-yellow-500 hover:text-yellow-400 transition disabled:opacity-40"
//               >
//                 <CreditCard size={18} />
//                 {loading === "PAYPAL" ? "Redirecting…" : "Pay with PayPal"}
//               </button>
//             </div>
//           </>
//         ) : (
//           <>
//             <p className="text-red-500 text-lg mb-10">
//               This reservation has expired.
//             </p>
//             <button
//               onClick={onClose}
//               className="px-10 py-3 rounded-xl bg-white text-black font-bold uppercase"
//             >
//               Return to Calendar
//             </button>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// }

//===================================================
import { motion } from "framer-motion";
import { X, CreditCard } from "lucide-react";
import { useState } from "react";
import { initPayment } from "../../api/payment.api";
import { useCountdown } from "../hooks/useCountdown";

export default function PendingPaymentModal({ booking, onClose }) {
  const { expired } = useCountdown(booking.expiresAt);
  const [loading, setLoading] = useState(null);

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

            <div className="space-y-4">
              <button
                onClick={() => pay("STRIPE")}
                disabled={loading}
                className="w-full py-4 bg-white text-black rounded-xl font-bold uppercase"
              >
                {loading === "STRIPE" ? "Redirecting..." : "Pay with Card"}
              </button>

              <button
                onClick={() => pay("PAYPAL")}
                disabled={loading}
                className="w-full py-4 border border-white/20 text-white rounded-xl font-bold uppercase"
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
