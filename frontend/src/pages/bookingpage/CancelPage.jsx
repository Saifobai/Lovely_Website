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
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CancelPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");
  const [hoursLeft, setHoursLeft] = useState(0);

  // Fetch booking details
  useEffect(() => {
    if (!id || id === "undefined") {
      setError("This booking link is missing or expired.");
      setLoading(false);
      return;
    }

    const fetchBooking = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/bookings/${id}`);
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || "Booking not found");
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
          setError("❌ Booking cannot be cancelled less than 24 hours before.");
        }
      } catch (err) {
        setError(err.message || "Booking not found");
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [id]);

  // Countdown timer
  useEffect(() => {
    if (!booking) return;

    const interval = setInterval(() => {
      const now = new Date();
      const bookingDate = new Date(`${booking.date}T${booking.time}`);
      const diffHours = (bookingDate - now) / (1000 * 60 * 60);
      setHoursLeft(diffHours);

      if (diffHours < 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [booking]);

  const cancelBooking = async () => {
    if (!booking) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`http://localhost:5000/api/bookings/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Cancel failed");

      alert("✅ Booking cancelled successfully");
      navigate("/", { state: { refreshBookings: true } });
    } catch (err) {
      setError(err.message || "Cancellation failed");
    } finally {
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

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center text-white">
        Loading booking details…
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center text-white">
        <div className="p-8 bg-black/40 border border-white/10 rounded-2xl text-center">
          <p className="text-red-400">{error}</p>
        </div>
      </section>
    );
  }

  // Progress bar width (0-100%)
  const progressPercent = Math.max(0, Math.min(100, (hoursLeft / 24) * 100));

  return (
    <section className="min-h-screen flex items-center justify-center text-white">
      <div className="p-10 bg-black/30 border border-white/10 rounded-2xl max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">
          Are you sure you want to cancel your booking?
        </h1>

        <p className="mb-2">
          Booking for <strong>{booking.email}</strong> on{" "}
          <strong>{booking.date}</strong> at <strong>{booking.time}</strong>
        </p>

        {/* Countdown */}
        <p className="mb-4 font-mono text-blue-400">
          Time left to cancel: {formatCountdown(hoursLeft)}
        </p>

        {/* Progress bar */}
        <div className="w-full bg-white/10 rounded-full h-2 mb-6">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            disabled={loading}
            className="px-6 py-3 rounded-lg border border-white/20"
          >
            Go Back
          </button>

          <button
            onClick={cancelBooking}
            disabled={loading || hoursLeft <= 0}
            className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition disabled:opacity-50"
          >
            {loading ? "Cancelling..." : "Yes, cancel booking"}
          </button>
        </div>
      </div>
    </section>
  );
}
