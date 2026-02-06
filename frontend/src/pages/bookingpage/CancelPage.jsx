// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function CancelPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(true);
//   const [booking, setBooking] = useState(null);
//   const [error, setError] = useState("");

//   // Fetch booking details
//   useEffect(() => {
//     if (!id || id === "undefined") {
//       setError("This booking link is missing or expired.");
//       setLoading(false);
//       return;
//     }

//     const fetchBooking = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/bookings/${id}`);
//         if (!res.ok) {
//           const data = await res.json();
//           throw new Error(data.message || "Booking not found");
//         }

//         const data = await res.json();
//         setBooking(data.booking);

//         // Check if cancellation is allowed (24h rule)
//         const now = new Date();
//         const bookingDate = new Date(
//           `${data.booking.date}T${data.booking.time}`,
//         );
//         const hoursDiff = (bookingDate - now) / (1000 * 60 * 60);

//         if (hoursDiff < 24) {
//           setError("❌ Booking cannot be cancelled less than 24 hours before.");
//         }
//       } catch (err) {
//         setError(err.message || "Booking not found");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBooking();
//   }, [id]);

//   const cancelBooking = async () => {
//     if (!booking) return;

//     setLoading(true);
//     setError("");

//     try {
//       const res = await fetch(`http://localhost:5000/api/bookings/${id}`, {
//         method: "DELETE",
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Cancel failed");

//       alert("✅ Booking cancelled successfully");
//       navigate("/", { state: { refreshBookings: true } });
//     } catch (err) {
//       setError(err.message || "Cancellation failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <section className="min-h-screen flex items-center justify-center text-white">
//         Loading booking details…
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="min-h-screen flex items-center justify-center text-white">
//         <div className="p-8 bg-black/40 border border-white/10 rounded-2xl text-center">
//           <p className="text-red-400">{error}</p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="min-h-screen flex items-center justify-center text-white">
//       <div className="p-10 bg-black/30 border border-white/10 rounded-2xl max-w-md text-center">
//         <h1 className="text-2xl font-bold mb-6">
//           Are you sure you want to cancel your booking?
//         </h1>

//         <p className="mb-4">
//           Booking for <strong>{booking.email}</strong> on{" "}
//           <strong>{booking.date}</strong> at <strong>{booking.time}</strong>
//         </p>

//         <div className="flex justify-center gap-4">
//           <button
//             onClick={() => navigate("/")}
//             disabled={loading}
//             className="px-6 py-3 rounded-lg border border-white/20"
//           >
//             Go Back
//           </button>

//           <button
//             onClick={cancelBooking}
//             disabled={loading}
//             className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition"
//           >
//             {loading ? "Cancelling..." : "Yes, cancel booking"}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

//============================================================
// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function CancelPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(true);
//   const [booking, setBooking] = useState(null);
//   const [error, setError] = useState("");
//   const [hoursLeft, setHoursLeft] = useState(0);

//   // Fetch booking details
//   useEffect(() => {
//     if (!id || id === "undefined") {
//       setError("This booking link is missing or expired.");
//       setLoading(false);
//       return;
//     }

//     const fetchBooking = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/bookings/${id}`);
//         if (!res.ok) {
//           const data = await res.json();
//           throw new Error(data.message || "Booking not found");
//         }

//         const data = await res.json();
//         setBooking(data.booking);

//         const now = new Date();
//         const bookingDate = new Date(
//           `${data.booking.date}T${data.booking.time}`,
//         );
//         const diffHours = (bookingDate - now) / (1000 * 60 * 60);
//         setHoursLeft(diffHours);

//         if (diffHours < 24) {
//           setError("❌ Booking cannot be cancelled less than 24 hours before.");
//         }
//       } catch (err) {
//         setError(err.message || "Booking not found");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBooking();
//   }, [id]);

//   // Countdown timer
//   useEffect(() => {
//     if (!booking) return;

//     const interval = setInterval(() => {
//       const now = new Date();
//       const bookingDate = new Date(`${booking.date}T${booking.time}`);
//       const diffHours = (bookingDate - now) / (1000 * 60 * 60);
//       setHoursLeft(diffHours);

//       if (diffHours < 0) clearInterval(interval);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [booking]);

//   const cancelBooking = async () => {
//     if (!booking) return;

//     setLoading(true);
//     setError("");

//     try {
//       const res = await fetch(`http://localhost:5000/api/bookings/${id}`, {
//         method: "DELETE",
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Cancel failed");

//       alert("✅ Booking cancelled successfully");
//       navigate("/", { state: { refreshBookings: true } });
//     } catch (err) {
//       setError(err.message || "Cancellation failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatCountdown = (hours) => {
//     if (hours <= 0) return "00:00:00";
//     const totalSeconds = Math.floor(hours * 3600);
//     const h = Math.floor(totalSeconds / 3600);
//     const m = Math.floor((totalSeconds % 3600) / 60);
//     const s = totalSeconds % 60;
//     return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
//   };

//   if (loading) {
//     return (
//       <section className="min-h-screen flex items-center justify-center text-white">
//         Loading booking details…
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="min-h-screen flex items-center justify-center text-white">
//         <div className="p-8 bg-black/40 border border-white/10 rounded-2xl text-center">
//           <p className="text-red-400">{error}</p>
//         </div>
//       </section>
//     );
//   }

//   // Progress bar width (0-100%)
//   const progressPercent = Math.max(0, Math.min(100, (hoursLeft / 24) * 100));

//   return (
//     <section className="min-h-screen flex items-center justify-center text-white">
//       <div className="p-10 bg-black/30 border border-white/10 rounded-2xl max-w-md text-center">
//         <h1 className="text-2xl font-bold mb-6">
//           Are you sure you want to cancel your booking?
//         </h1>

//         <p className="mb-2">
//           Booking for <strong>{booking.email}</strong> on{" "}
//           <strong>{booking.date}</strong> at <strong>{booking.time}</strong>
//         </p>

//         {/* Countdown */}
//         <p className="mb-4 font-mono text-blue-400">
//           Time left to cancel: {formatCountdown(hoursLeft)}
//         </p>

//         {/* Progress bar */}
//         <div className="w-full bg-white/10 rounded-full h-2 mb-6">
//           <div
//             className="bg-blue-600 h-2 rounded-full transition-all"
//             style={{ width: `${progressPercent}%` }}
//           ></div>
//         </div>

//         <div className="flex justify-center gap-4">
//           <button
//             onClick={() => navigate("/")}
//             disabled={loading}
//             className="px-6 py-3 rounded-lg border border-white/20"
//           >
//             Go Back
//           </button>

//           <button
//             onClick={cancelBooking}
//             disabled={loading || hoursLeft <= 0}
//             className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition disabled:opacity-50"
//           >
//             {loading ? "Cancelling..." : "Yes, cancel booking"}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

//============================================================
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, ArrowLeft, Trash2 } from "lucide-react";

export default function CancelPage() {
  const { id } = useParams(); // This is the token from the URL /cancel/:id
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");
  const [hoursLeft, setHoursLeft] = useState(0);

  // 1. Fetch booking details to show the user what they are cancelling
  useEffect(() => {
    if (!id || id === "undefined") {
      setError("This cancellation link is missing or expired.");
      setLoading(false);
      return;
    }

    const fetchBooking = async () => {
      try {
        // NOTE: We use the token to find the booking details
        const res = await fetch(
          `http://localhost:5000/api/bookings/details/${id}`,
        );

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Booking not found");
        }

        const data = await res.json();
        setBooking(data.booking);

        const now = new Date();
        const bookingDate = new Date(
          `${data.booking.date}T${data.booking.time}`,
        );
        const diffHours = (bookingDate - now) / (1000 * 60 * 60);
        setHoursLeft(diffHours);

        if (diffHours < 24) {
          setError(
            "CANCELLATION_RESTRICTED: Sessions cannot be cancelled within 24 hours of start time.",
          );
        }
      } catch (err) {
        setError(err.message || "Invalid cancellation token.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [id]);

  // 2. The Cancel Action
  const handleCancel = async () => {
    if (!booking || loading) return;

    setLoading(true);
    try {
      // MATCHES YOUR BACKEND ROUTE: router.delete("/cancel/:token")
      const res = await fetch(
        `http://localhost:5000/api/bookings/cancel/${id}`,
        {
          method: "DELETE",
        },
      );

      const data = await res.json();
      if (!res.ok)
        throw new Error(data.error || "Cancellation protocol failed");

      alert("✅ Session successfully removed from system.");
      navigate("/");
    } catch (err) {
      setError(err.message || "Cancellation failed");
      setLoading(false);
    }
  };

  const formatCountdown = (hours) => {
    if (hours <= 0) return "00:00:00";
    const totalSeconds = Math.floor(hours * 3600);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  if (loading && !booking) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center font-mono text-xs text-blue-500 uppercase tracking-[0.3em]">
        Authenticating_Token...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#050505] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-[#0c0c0c] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl"
      >
        {/* HEADER */}
        <div className="bg-white/5 p-6 border-b border-white/5 flex items-center gap-3">
          <AlertTriangle size={18} className="text-red-500" />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400">
            Cancellation_Terminal
          </span>
        </div>

        <div className="p-8 md:p-10 text-center">
          {error ? (
            <div className="py-10">
              <p className="text-red-400 font-mono text-xs uppercase mb-8 leading-relaxed">
                {error}
              </p>
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 mx-auto text-white font-mono text-[10px] uppercase border-b border-white/20 pb-1"
              >
                <ArrowLeft size={12} /> Return to safety
              </button>
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-black italic uppercase text-white mb-6">
                Terminate <span className="text-red-600">Session?</span>
              </h1>

              <div className="bg-white/5 rounded-2xl p-6 mb-8 text-left border border-white/5">
                <div className="text-[10px] font-mono text-blue-500 mb-2 uppercase">
                  Subject_Details
                </div>
                <p className="text-slate-300 text-sm font-medium">
                  {booking.email}
                </p>
                <p className="text-slate-500 text-[10px] font-mono uppercase mt-1">
                  {booking.date} @ {booking.time}
                </p>
              </div>

              <div className="mb-10">
                <div className="flex justify-between text-[10px] font-mono uppercase text-slate-500 mb-2">
                  <span>Grace_Period</span>
                  <span className="text-blue-500">
                    {formatCountdown(hoursLeft)}
                  </span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1">
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{
                      width: `${Math.max(0, (hoursLeft / 24) * 100)}%`,
                    }}
                    className="bg-blue-600 h-full rounded-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => navigate("/")}
                  className="py-5 rounded-2xl border border-white/10 text-slate-400 font-black uppercase italic text-xs hover:bg-white/5 transition-all"
                >
                  Abnormal_Abort
                </button>

                <button
                  onClick={handleCancel}
                  disabled={loading || hoursLeft < 24}
                  className="py-5 rounded-2xl bg-red-600 text-white font-black uppercase italic text-xs flex items-center justify-center gap-2 hover:bg-red-700 transition-all disabled:opacity-20"
                >
                  <Trash2 size={14} />{" "}
                  {loading ? "Processing..." : "Confirm_Delete"}
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
}
