// import { motion } from "framer-motion";
// import { X, ShieldAlert, CreditCard, Lock, ArrowRight } from "lucide-react";
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

//       // 🔥 Open payment in NEW TAB
//       window.open(paymentUrl, "_blank", "noopener,noreferrer");

//       // keep loading state (optional)
//       // setLoading(null);
//     } catch (err) {
//       console.error(err);
//       alert("Payment protocol failed. Please re-initialize.");
//       setLoading(null);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-3xl flex items-center justify-center z-[200] p-4">
//       <motion.div
//         initial={{ scale: 0.95, opacity: 0, y: 20 }}
//         animate={{ scale: 1, opacity: 1, y: 0 }}
//         className="relative bg-[#050505] border border-white/10 rounded-[32px] overflow-hidden w-full max-w-lg shadow-[0_0_100px_rgba(0,0,0,1)]"
//       >
//         {/* TOP STATUS BAR */}
//         <div className="bg-white/5 px-8 py-4 border-b border-white/5 flex justify-between items-center">
//           <div className="flex items-center gap-2">
//             <div
//               className={`w-2 h-2 rounded-full animate-pulse ${expired ? "bg-red-500" : "bg-blue-500"}`}
//             />
//             <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400">
//               {expired ? "Protocol_Expired" : "Awaiting_Transaction"}
//             </span>
//           </div>
//           <button
//             onClick={onClose}
//             disabled={!!loading}
//             className="text-slate-500 hover:text-white transition-colors"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         <div className="p-8 md:p-10">
//           {!expired ? (
//             <>
//               <div className="mb-10 text-center">
//                 <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-2">
//                   Secure your <span className="text-blue-600">Session</span>
//                 </h2>
//                 <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
//                   Hold terminates in
//                 </p>
//                 <div className="mt-4 text-5xl font-mono font-black italic text-blue-500 flex justify-center items-baseline gap-1">
//                   {String(minutes).padStart(2, "0")}
//                   <span className="text-xl animate-pulse">:</span>
//                   {String(seconds).padStart(2, "0")}
//                 </div>
//               </div>

//               {/* PROGRESS LINE */}
//               <div className="w-full h-[2px] bg-white/5 mb-10 overflow-hidden">
//                 <motion.div
//                   initial={{ width: "100%" }}
//                   animate={{ width: "0%" }}
//                   transition={{
//                     duration: minutes * 60 + seconds,
//                     ease: "linear",
//                   }}
//                   className="h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
//                 />
//               </div>

//               {/* POLICY DOSSIER */}
//               <div className="mb-8 p-6 rounded-2xl border border-white/5 bg-white/[0.02] relative group">
//                 <div className="flex items-center gap-2 mb-4 text-blue-500">
//                   <ShieldAlert size={14} />
//                   <span className="text-[10px] font-black uppercase tracking-widest">
//                     Terms_of_Engagement
//                   </span>
//                 </div>
//                 <ul className="space-y-3 text-[11px] font-mono text-slate-400 uppercase leading-relaxed">
//                   <li className="flex gap-2">
//                     <span className="text-blue-500">/</span> Full refund:{" "}
//                     {CANCELLATION_POLICY.deadlineHours}H notice
//                   </li>
//                   <li className="flex gap-2">
//                     <span className="text-blue-500">/</span> Late notice: zero
//                     refund policy
//                   </li>
//                   <li className="flex gap-2">
//                     <span className="text-blue-500">/</span> Method:{" "}
//                     {CANCELLATION_POLICY.cancelMethod}
//                   </li>
//                 </ul>
//               </div>

//               {/* CONSENT CHECKBOX */}
//               <label className="flex items-center gap-4 cursor-pointer group mb-10">
//                 <div className="relative">
//                   <input
//                     type="checkbox"
//                     className="peer sr-only"
//                     checked={acceptedPolicy}
//                     onChange={(e) => setAcceptedPolicy(e.target.checked)}
//                   />
//                   <div className="w-5 h-5 border border-white/20 rounded-md bg-white/5 peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all" />
//                   <Lock
//                     size={10}
//                     className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-opacity"
//                   />
//                 </div>
//                 <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">
//                   Confirm Policy Acknowledgement
//                 </span>
//               </label>

//               {/* ACTION BUTTONS */}
//               <div className="grid grid-cols-1 gap-4">
//                 <button
//                   onClick={() => pay("STRIPE")}
//                   disabled={loading || !acceptedPolicy}
//                   className="group relative w-full py-5 bg-white text-black rounded-2xl font-black uppercase italic text-xs tracking-[0.2em] transition-all hover:bg-blue-600 hover:text-white disabled:opacity-20"
//                 >
//                   <span className="flex items-center justify-center gap-2">
//                     {loading === "STRIPE"
//                       ? "Transacting..."
//                       : "Execute_Card_Payment"}
//                     <ArrowRight
//                       size={14}
//                       className="group-hover:translate-x-1 transition-transform"
//                     />
//                   </span>
//                 </button>

//                 <button
//                   onClick={() => pay("PAYPAL")}
//                   disabled={loading || !acceptedPolicy}
//                   className="w-full py-5 border border-white/10 text-slate-400 rounded-2xl font-black uppercase italic text-xs tracking-[0.2em] hover:bg-white/5 hover:text-white transition-all disabled:opacity-20 flex items-center justify-center gap-2"
//                 >
//                   <CreditCard size={14} />
//                   {loading === "PAYPAL" ? "Redirecting..." : "PayPal_Portal"}
//                 </button>
//               </div>
//             </>
//           ) : (
//             <div className="text-center py-10">
//               <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <ShieldAlert size={32} />
//               </div>
//               <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-2">
//                 Token_Expired
//               </h3>
//               <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-10">
//                 The reservation window has closed.
//               </p>
//               <button
//                 onClick={onClose}
//                 className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase italic text-xs tracking-[0.2em] hover:bg-red-500 hover:text-white transition-all"
//               >
//                 Re-initialize Protocol
//               </button>
//             </div>
//           )}
//         </div>

//         {/* BOTTOM DECOR */}
//         <div className="h-1 w-full bg-gradient-to-r from-transparent via-blue-600/50 to-transparent opacity-30" />
//       </motion.div>
//     </div>
//   );
// }

//============================================================================
// import { motion } from "framer-motion";
// import { X, ShieldAlert, CreditCard, Lock, ArrowRight } from "lucide-react";
// import { useState } from "react";
// import { initPayment } from "../../api/payment.api";
// import { useCountdown } from "../hooks/useCountdown";
// import { CANCELLATION_POLICY } from "../../constants";

// export default function PendingPaymentModal({ booking, onClose }) {
//   const { expired, minutes, seconds } = useCountdown(booking.expiresAt);
//   const [loading, setLoading] = useState(null);
//   const [acceptedPolicy, setAcceptedPolicy] = useState(false);

//   // 🔹 Handles real payments
//   const pay = async (provider) => {
//     try {
//       setLoading(provider);

//       const { paymentUrl } = await initPayment({
//         bookingId: booking.id,
//         provider,
//       });

//       if (!paymentUrl) throw new Error("No payment URL");

//       // Open Stripe / PayPal in new tab
//       window.open(paymentUrl, "_blank", "noopener,noreferrer");
//     } catch (err) {
//       console.error(err);
//       alert("Payment protocol failed. Please re-initialize.");
//       setLoading(null);
//     }
//   };

//   // 🔹 Handles fake local test payments (emails + booking confirm)
//   const payFake = async (provider) => {
//     try {
//       setLoading(provider);

//       const url =
//         provider === "STRIPE"
//           ? "http://localhost:5000/api/payments/stripe-fake-confirm"
//           : "http://localhost:5000/api/payments/paypal-fake-confirm";

//       const res = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ bookingId: booking.id }),
//       });

//       const data = await res.json();
//       if (data.success) alert(`✅ Fake ${provider} payment confirmed!`);
//     } catch (err) {
//       console.error(err);
//       alert("Fake payment failed");
//     } finally {
//       setLoading(null);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-3xl flex items-center justify-center z-[200] p-4">
//       <motion.div
//         initial={{ scale: 0.95, opacity: 0, y: 20 }}
//         animate={{ scale: 1, opacity: 1, y: 0 }}
//         className="relative bg-[#050505] border border-white/10 rounded-[32px] overflow-hidden w-full max-w-lg shadow-[0_0_100px_rgba(0,0,0,1)]"
//       >
//         {/* TOP STATUS BAR */}
//         <div className="bg-white/5 px-8 py-4 border-b border-white/5 flex justify-between items-center">
//           <div className="flex items-center gap-2">
//             <div
//               className={`w-2 h-2 rounded-full animate-pulse ${
//                 expired ? "bg-red-500" : "bg-blue-500"
//               }`}
//             />
//             <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400">
//               {expired ? "Protocol_Expired" : "Awaiting_Transaction"}
//             </span>
//           </div>
//           <button
//             onClick={onClose}
//             disabled={!!loading}
//             className="text-slate-500 hover:text-white transition-colors"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         <div className="p-8 md:p-10">
//           {!expired ? (
//             <>
//               {/* Countdown */}
//               <div className="mb-10 text-center">
//                 <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-2">
//                   Secure your <span className="text-blue-600">Session</span>
//                 </h2>
//                 <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
//                   Hold terminates in
//                 </p>
//                 <div className="mt-4 text-5xl font-mono font-black italic text-blue-500 flex justify-center items-baseline gap-1">
//                   {String(minutes).padStart(2, "0")}
//                   <span className="text-xl animate-pulse">:</span>
//                   {String(seconds).padStart(2, "0")}
//                 </div>
//               </div>

//               {/* Progress Line */}
//               <div className="w-full h-[2px] bg-white/5 mb-10 overflow-hidden">
//                 <motion.div
//                   initial={{ width: "100%" }}
//                   animate={{ width: "0%" }}
//                   transition={{
//                     duration: minutes * 60 + seconds,
//                     ease: "linear",
//                   }}
//                   className="h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
//                 />
//               </div>

//               {/* Policy */}
//               <div className="mb-8 p-6 rounded-2xl border border-white/5 bg-white/[0.02] relative group">
//                 <div className="flex items-center gap-2 mb-4 text-blue-500">
//                   <ShieldAlert size={14} />
//                   <span className="text-[10px] font-black uppercase tracking-widest">
//                     Terms_of_Engagement
//                   </span>
//                 </div>
//                 <ul className="space-y-3 text-[11px] font-mono text-slate-400 uppercase leading-relaxed">
//                   <li className="flex gap-2">
//                     <span className="text-blue-500">/</span> Full refund:{" "}
//                     {CANCELLATION_POLICY.deadlineHours}H notice
//                   </li>
//                   <li className="flex gap-2">
//                     <span className="text-blue-500">/</span> Late notice: zero
//                     refund policy
//                   </li>
//                   <li className="flex gap-2">
//                     <span className="text-blue-500">/</span> Method:{" "}
//                     {CANCELLATION_POLICY.cancelMethod}
//                   </li>
//                 </ul>
//               </div>

//               {/* Consent */}
//               <label className="flex items-center gap-4 cursor-pointer group mb-10">
//                 <div className="relative">
//                   <input
//                     type="checkbox"
//                     className="peer sr-only"
//                     checked={acceptedPolicy}
//                     onChange={(e) => setAcceptedPolicy(e.target.checked)}
//                   />
//                   <div className="w-5 h-5 border border-white/20 rounded-md bg-white/5 peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all" />
//                   <Lock
//                     size={10}
//                     className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-opacity"
//                   />
//                 </div>
//                 <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">
//                   Confirm Policy Acknowledgement
//                 </span>
//               </label>

//               {/* Action Buttons */}
//               <div className="grid grid-cols-1 gap-4">
//                 {/* Real Payments */}
//                 <button
//                   onClick={() => pay("STRIPE")}
//                   disabled={loading || !acceptedPolicy}
//                   className="group relative w-full py-5 bg-white text-black rounded-2xl font-black uppercase italic text-xs tracking-[0.2em] transition-all hover:bg-blue-600 hover:text-white disabled:opacity-20"
//                 >
//                   <span className="flex items-center justify-center gap-2">
//                     {loading === "STRIPE"
//                       ? "Redirecting..."
//                       : "Execute_Card_Payment"}
//                     <ArrowRight
//                       size={14}
//                       className="group-hover:translate-x-1 transition-transform"
//                     />
//                   </span>
//                 </button>

//                 <button
//                   onClick={() => pay("PAYPAL")}
//                   disabled={loading || !acceptedPolicy}
//                   className="w-full py-5 border border-white/10 text-slate-400 rounded-2xl font-black uppercase italic text-xs tracking-[0.2em] hover:bg-white/5 hover:text-white transition-all disabled:opacity-20 flex items-center justify-center gap-2"
//                 >
//                   <CreditCard size={14} />
//                   {loading === "PAYPAL" ? "Redirecting..." : "PayPal_Portal"}
//                 </button>

//                 {/* Fake Test Payments */}
//                 <button
//                   onClick={() => payFake("STRIPE")}
//                   disabled={loading || !acceptedPolicy}
//                   className="w-full py-4 bg-green-600 text-white rounded-2xl font-black uppercase italic text-xs tracking-[0.2em] hover:bg-green-700 transition-all disabled:opacity-20"
//                 >
//                   {loading === "STRIPE" ? "Processing..." : "FAKE Stripe Test"}
//                 </button>

//                 <button
//                   onClick={() => payFake("PAYPAL")}
//                   disabled={loading || !acceptedPolicy}
//                   className="w-full py-4 bg-yellow-600 text-white rounded-2xl font-black uppercase italic text-xs tracking-[0.2em] hover:bg-yellow-700 transition-all disabled:opacity-20"
//                 >
//                   {loading === "PAYPAL" ? "Processing..." : "FAKE PayPal Test"}
//                 </button>
//               </div>
//             </>
//           ) : (
//             <div className="text-center py-10">
//               <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <ShieldAlert size={32} />
//               </div>
//               <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-2">
//                 Token_Expired
//               </h3>
//               <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-10">
//                 The reservation window has closed.
//               </p>
//               <button
//                 onClick={onClose}
//                 className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase italic text-xs tracking-[0.2em] hover:bg-red-500 hover:text-white transition-all"
//               >
//                 Re-initialize Protocol
//               </button>
//             </div>
//           )}
//         </div>

//         {/* BOTTOM DECOR */}
//         <div className="h-1 w-full bg-gradient-to-r from-transparent via-blue-600/50 to-transparent opacity-30" />
//       </motion.div>
//     </div>
//   );
// }

//============================================================================
import { motion } from "framer-motion";
import { X, ShieldAlert, CreditCard, Lock, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { initPayment } from "../../api/payment.api";
import { useCountdown } from "../hooks/useCountdown";
import { CANCELLATION_POLICY } from "../../constants";

export default function PendingPaymentModal({ booking, onClose }) {
  const { expired, minutes, seconds } = useCountdown(booking.expiresAt);
  const [loading, setLoading] = useState(null);
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  // Freeze animation duration once
  const durationRef = useRef(minutes * 60 + seconds);

  useEffect(() => {
    if (expired) setLoading(null);
  }, [expired]);

  // 🔹 REAL PAYMENTS (Stripe / PayPal)
  const pay = async (provider) => {
    try {
      setLoading(provider);

      const { paymentUrl } = await initPayment({
        bookingId: booking.id,
        provider,
      });

      if (!paymentUrl) throw new Error("Missing payment URL");

      window.open(paymentUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.error(err);
      alert("Payment initialization failed. Please retry.");
      setLoading(null);
    }
  };

  // 🔹 FAKE LOCAL PAYMENTS (SAFE)
  const payFake = async (provider) => {
    try {
      setLoading(provider);

      const url =
        provider === "STRIPE"
          ? "http://localhost:5000/api/payments/stripe-fake-confirm"
          : "http://localhost:5000/api/payments/paypal-fake-confirm";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId: booking.id }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data?.message || "Fake payment rejected");
      }

      alert(`✅ Fake ${provider} payment confirmed`);
      onClose(); // close modal & refresh slots
    } catch (err) {
      console.error(err);
      alert("Fake payment failed or reservation expired.");
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
        {/* HEADER */}
        <div className="bg-white/5 px-8 py-4 border-b border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full animate-pulse ${
                expired ? "bg-red-500" : "bg-blue-500"
              }`}
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
              {/* Countdown */}
              <div className="mb-10 text-center">
                <h2 className="text-4xl font-black italic uppercase mb-2">
                  Secure your <span className="text-blue-600">Session</span>
                </h2>
                <p className="text-[10px] font-mono text-slate-500 uppercase">
                  Hold terminates in
                </p>
                <div className="mt-4 text-5xl font-mono font-black italic text-blue-500">
                  {String(minutes).padStart(2, "0")}:
                  {String(seconds).padStart(2, "0")}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-[2px] bg-white/5 mb-10">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{
                    duration: durationRef.current,
                    ease: "linear",
                  }}
                  className="h-full bg-blue-600"
                />
              </div>

              {/* Policy */}
              <div className="mb-8 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2 mb-4 text-blue-500">
                  <ShieldAlert size={14} />
                  <span className="text-[10px] font-black uppercase">
                    Terms_of_Engagement
                  </span>
                </div>
                <ul className="space-y-3 text-[11px] font-mono text-slate-400 uppercase">
                  <li>
                    / Full refund: {CANCELLATION_POLICY.deadlineHours}H notice
                  </li>
                  <li>/ Late notice: zero refund</li>
                  <li>/ Method: {CANCELLATION_POLICY.cancelMethod}</li>
                </ul>
              </div>

              {/* Consent */}
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

              {/* Actions */}
              <div className="grid gap-4">
                <button
                  onClick={() => pay("STRIPE")}
                  disabled={loading || !acceptedPolicy}
                  className="py-5 bg-white text-black rounded-2xl font-black uppercase disabled:opacity-20"
                >
                  {loading === "STRIPE" ? "Redirecting..." : "Pay with Card"}
                </button>

                <button
                  onClick={() => pay("PAYPAL")}
                  disabled={loading || !acceptedPolicy}
                  className="py-5 border border-white/10 text-slate-400 rounded-2xl uppercase disabled:opacity-20"
                >
                  {loading === "PAYPAL" ? "Redirecting..." : "Pay with PayPal"}
                </button>

                <button
                  onClick={() => payFake("STRIPE")}
                  disabled={loading || !acceptedPolicy}
                  className="py-4 bg-green-600 text-white rounded-2xl uppercase"
                >
                  Fake Stripe Test
                </button>

                <button
                  onClick={() => payFake("PAYPAL")}
                  disabled={loading || !acceptedPolicy}
                  className="py-4 bg-yellow-600 text-white rounded-2xl uppercase"
                >
                  Fake PayPal Test
                </button>
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
