// import { motion } from "framer-motion";
// import { X } from "lucide-react";
// import { useState } from "react";
// import { initPayment } from "../../api/payment.api";
// import { useCountdown } from "../hooks/useCountdown";
// import { CANCELLATION_POLICY } from "../../constants/index";

// export default function PendingPaymentModal({ booking, onClose }) {
//   const { expired } = useCountdown(booking.expiresAt);
//   const [loading, setLoading] = useState(null);
//   const [acceptedPolicy, setAcceptedPolicy] = useState(false);

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

//             {/* 🔒 Cancellation Policy */}
//             <div className="mb-6 p-4 rounded-xl border border-white/10 bg-white/5 text-sm leading-relaxed">
//               <h3 className="font-semibold mb-2">Cancellation Policy</h3>

//               <ul className="space-y-1 text-white/80">
//                 <li>
//                   • Cancellations up to{" "}
//                   <strong>{CANCELLATION_POLICY.deadlineHours} hours</strong>{" "}
//                   before the appointment are refunded in full.
//                 </li>

//                 <li>
//                   • Cancellations less than {CANCELLATION_POLICY.deadlineHours}{" "}
//                   hours before the appointment or no-shows are{" "}
//                   <strong>non-refundable</strong>.
//                 </li>

//                 <li>
//                   • To cancel, please use{" "}
//                   <strong>{CANCELLATION_POLICY.cancelMethod}</strong>.
//                 </li>
//               </ul>
//             </div>

//             {/* ✅ Acceptance checkbox */}
//             <label className="flex items-start gap-3 text-sm text-white/80 mb-6">
//               <input
//                 type="checkbox"
//                 checked={acceptedPolicy}
//                 onChange={(e) => setAcceptedPolicy(e.target.checked)}
//                 className="mt-1"
//               />
//               <span>I have read and agree to the cancellation policy.</span>
//             </label>

//             {/* 💳 Payment buttons */}
//             <div className="space-y-4">
//               <button
//                 onClick={() => pay("STRIPE")}
//                 disabled={loading || !acceptedPolicy}
//                 className="w-full py-4 bg-white text-black rounded-xl font-bold uppercase disabled:opacity-50"
//               >
//                 {loading === "STRIPE" ? "Redirecting..." : "Pay with Card"}
//               </button>

//               <button
//                 onClick={() => pay("PAYPAL")}
//                 disabled={loading || !acceptedPolicy}
//                 className="w-full py-4 border border-white/20 text-white rounded-xl font-bold uppercase disabled:opacity-50"
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

//================================================================
//================================================================
// import { motion } from "framer-motion";
// import { X } from "lucide-react";
// import { useState } from "react";
// import { initPayment } from "../../api/payment.api";
// import { useCountdown } from "../hooks/useCountdown";
// import { CANCELLATION_POLICY } from "../../constants";

// export default function PendingPaymentModal({ booking, onClose }) {
//   const { expired, minutes, seconds } = useCountdown(booking.expiresAt);
//   const [loading, setLoading] = useState(null);
//   const [acceptedPolicy, setAcceptedPolicy] = useState(false);

//   const pay = async (provider) => {
//     try {
//       setLoading(provider);

//       const { paymentUrl } = await initPayment({
//         bookingId: booking.id,
//         provider,
//       });

//       if (!paymentUrl) throw new Error("No payment URL");

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
//         {/* Close */}
//         <button
//           onClick={onClose}
//           disabled={!!loading}
//           className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center disabled:opacity-30"
//         >
//           <X size={18} />
//         </button>

//         {!expired ? (
//           <>
//             <h2 className="text-2xl font-bold mb-4">Complete Payment</h2>

//             {/* ⏳ Countdown */}
//             <div className="text-center mb-6">
//               <p className="text-xs uppercase tracking-widest text-slate-400">
//                 Reservation expires in
//               </p>
//               <div className="mt-2 text-3xl font-mono font-bold text-red-500">
//                 {String(minutes).padStart(2, "0")}:
//                 {String(seconds).padStart(2, "0")}
//               </div>
//             </div>

//             {/* Progress bar */}
//             <div className="w-full h-1 bg-white/10 rounded overflow-hidden mb-6">
//               <motion.div
//                 initial={{ width: "100%" }}
//                 animate={{ width: "0%" }}
//                 transition={{
//                   duration: minutes * 60 + seconds,
//                   ease: "linear",
//                 }}
//                 className="h-full bg-red-500"
//               />
//             </div>

//             {/* Cancellation Policy */}
//             <div className="mb-6 p-4 rounded-xl border border-white/10 bg-white/5 text-sm">
//               <h3 className="font-semibold mb-2">Cancellation Policy</h3>
//               <ul className="space-y-1 text-white/80">
//                 <li>
//                   • Full refund if cancelled{" "}
//                   <strong>{CANCELLATION_POLICY.deadlineHours}h</strong> before.
//                 </li>
//                 <li>
//                   • Less than {CANCELLATION_POLICY.deadlineHours}h or no-show =
//                   <strong> no refund</strong>.
//                 </li>
//                 <li>
//                   • Cancel via{" "}
//                   <strong>{CANCELLATION_POLICY.cancelMethod}</strong>.
//                 </li>
//               </ul>
//             </div>

//             {/* Accept policy */}
//             <label className="flex gap-3 text-sm text-white/80 mb-6">
//               <input
//                 type="checkbox"
//                 checked={acceptedPolicy}
//                 onChange={(e) => setAcceptedPolicy(e.target.checked)}
//               />
//               <span>I agree to the cancellation policy.</span>
//             </label>

//             {/* Payment buttons */}
//             <div className="space-y-4">
//               <button
//                 onClick={() => pay("STRIPE")}
//                 disabled={loading || !acceptedPolicy}
//                 className="w-full py-4 bg-white text-black rounded-xl font-bold uppercase disabled:opacity-50"
//               >
//                 {loading === "STRIPE" ? "Redirecting..." : "Pay with Card"}
//               </button>

//               <button
//                 onClick={() => pay("PAYPAL")}
//                 disabled={loading || !acceptedPolicy}
//                 className="w-full py-4 border border-white/20 text-white rounded-xl font-bold uppercase disabled:opacity-50"
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

//================================================================
import { motion } from "framer-motion";
import { X, ShieldAlert, CreditCard, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { initPayment } from "../../api/payment.api";
import { useCountdown } from "../hooks/useCountdown";
import { CANCELLATION_POLICY } from "../../constants";

export default function PendingPaymentModal({ booking, onClose }) {
  const { expired, minutes, seconds } = useCountdown(booking.expiresAt);
  const [loading, setLoading] = useState(null);
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  const pay = async (provider) => {
    try {
      setLoading(provider);
      const { paymentUrl } = await initPayment({
        bookingId: booking.id,
        provider,
      });
      if (!paymentUrl) throw new Error("No payment URL");
      window.location.href = paymentUrl;
    } catch (err) {
      console.error(err);
      alert("Payment protocol failed. Please re-initialize.");
      setLoading(null);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-3xl flex items-center justify-center z-[200] p-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative bg-[#050505] border border-white/10 rounded-[32px] overflow-hidden w-full max-w-lg shadow-[0_0_100px_rgba(0,0,0,1)]"
      >
        {/* TOP STATUS BAR */}
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
            className="text-slate-500 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8 md:p-10">
          {!expired ? (
            <>
              <div className="mb-10 text-center">
                <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-2">
                  Secure your <span className="text-blue-600">Session</span>
                </h2>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  Hold terminates in
                </p>
                <div className="mt-4 text-5xl font-mono font-black italic text-blue-500 flex justify-center items-baseline gap-1">
                  {String(minutes).padStart(2, "0")}
                  <span className="text-xl animate-pulse">:</span>
                  {String(seconds).padStart(2, "0")}
                </div>
              </div>

              {/* PROGRESS LINE */}
              <div className="w-full h-[2px] bg-white/5 mb-10 overflow-hidden">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{
                    duration: minutes * 60 + seconds,
                    ease: "linear",
                  }}
                  className="h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                />
              </div>

              {/* POLICY DOSSIER */}
              <div className="mb-8 p-6 rounded-2xl border border-white/5 bg-white/[0.02] relative group">
                <div className="flex items-center gap-2 mb-4 text-blue-500">
                  <ShieldAlert size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Terms_of_Engagement
                  </span>
                </div>
                <ul className="space-y-3 text-[11px] font-mono text-slate-400 uppercase leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-blue-500">/</span> Full refund:{" "}
                    {CANCELLATION_POLICY.deadlineHours}H notice
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500">/</span> Late notice: zero
                    refund policy
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500">/</span> Method:{" "}
                    {CANCELLATION_POLICY.cancelMethod}
                  </li>
                </ul>
              </div>

              {/* CONSENT CHECKBOX */}
              <label className="flex items-center gap-4 cursor-pointer group mb-10">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={acceptedPolicy}
                    onChange={(e) => setAcceptedPolicy(e.target.checked)}
                  />
                  <div className="w-5 h-5 border border-white/20 rounded-md bg-white/5 peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all" />
                  <Lock
                    size={10}
                    className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">
                  Confirm Policy Acknowledgement
                </span>
              </label>

              {/* ACTION BUTTONS */}
              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={() => pay("STRIPE")}
                  disabled={loading || !acceptedPolicy}
                  className="group relative w-full py-5 bg-white text-black rounded-2xl font-black uppercase italic text-xs tracking-[0.2em] transition-all hover:bg-blue-600 hover:text-white disabled:opacity-20"
                >
                  <span className="flex items-center justify-center gap-2">
                    {loading === "STRIPE"
                      ? "Transacting..."
                      : "Execute_Card_Payment"}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </button>

                <button
                  onClick={() => pay("PAYPAL")}
                  disabled={loading || !acceptedPolicy}
                  className="w-full py-5 border border-white/10 text-slate-400 rounded-2xl font-black uppercase italic text-xs tracking-[0.2em] hover:bg-white/5 hover:text-white transition-all disabled:opacity-20 flex items-center justify-center gap-2"
                >
                  <CreditCard size={14} />
                  {loading === "PAYPAL" ? "Redirecting..." : "PayPal_Portal"}
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldAlert size={32} />
              </div>
              <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-2">
                Token_Expired
              </h3>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-10">
                The reservation window has closed.
              </p>
              <button
                onClick={onClose}
                className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase italic text-xs tracking-[0.2em] hover:bg-red-500 hover:text-white transition-all"
              >
                Re-initialize Protocol
              </button>
            </div>
          )}
        </div>

        {/* BOTTOM DECOR */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-blue-600/50 to-transparent opacity-30" />
      </motion.div>
    </div>
  );
}
