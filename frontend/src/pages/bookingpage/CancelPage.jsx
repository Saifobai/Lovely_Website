import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  Clock,
  ArrowLeft,
  Trash2,
  ShieldAlert,
} from "lucide-react";
import { toast } from "react-hot-toast";

export default function CancelPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");
  const [hoursLeft, setHoursLeft] = useState(0);

  useEffect(() => {
    if (!id || id === "undefined") {
      setError("AUTHENTICATION_ERROR: Token missing or expired.");
      setLoading(false);
      return;
    }

    const fetchBooking = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/bookings/details/${id}`,
        );
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Session not found in registry");
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
            "PROTOCOL_RESTRICTION: Sessions locked within 24h of execution.",
          );
        }
      } catch (err) {
        setError(err.message || "Invalid security token.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [id]);

  const handleCancel = async () => {
    if (!booking || loading) return;
    setLoading(true);

    // Create a loading toast ID so we can update it later
    const toastId = toast.loading("Executing_Deletion_Protocol...", {
      style: {
        background: "#0c0c0c",
        color: "#3B82F6",
        border: "1px solid rgba(59, 130, 246, 0.2)",
        fontSize: "10px",
        fontFamily: "monospace",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
      },
    });

    try {
      const res = await fetch(
        `http://localhost:5000/api/bookings/cancel/${id}`,
        {
          method: "DELETE",
        },
      );

      if (!res.ok) throw new Error("Deletion protocol failed.");

      // Update toast to success
      toast.success("Registry_Updated: Session Removed.", {
        id: toastId,
        duration: 4000,
        style: {
          background: "#0c0c0c",
          color: "#10b981", // Emerald green
          border: "1px solid rgba(16, 185, 129, 0.2)",
          fontSize: "10px",
          fontFamily: "monospace",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        },
      });

      // Brief delay so they see the success toast before redirecting
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      toast.error(err.message || "Protocol_Error", {
        id: toastId,
        style: {
          background: "#0c0c0c",
          color: "#ef4444", // Red
          border: "1px solid rgba(239, 68, 68, 0.2)",
          fontSize: "10px",
          fontFamily: "monospace",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        },
      });
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
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center font-mono text-[10px] text-blue-500 uppercase tracking-[0.5em]">
        <motion.div
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Verifying_Secure_Token...
        </motion.div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#050505] relative flex items-center justify-center p-6 overflow-hidden font-sans">
      {/* BACKGROUND GHOST TEXT */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <h2 className="absolute top-[10%] -left-[5%] text-[20vw] font-black italic text-white/[0.02] uppercase leading-none -rotate-12">
          Terminate
        </h2>
        <h2 className="absolute bottom-[10%] -right-[5%] text-[20vw] font-black italic text-red-600/[0.02] uppercase leading-none rotate-12">
          Protocol
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[40px] relative z-10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {/* TOP GLOW ACCENT */}
        <div
          className={`absolute top-0 left-0 w-full h-[2px] ${error ? "bg-red-600" : "bg-blue-600"} opacity-50`}
        />

        {/* HEADER */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
          <div className="flex items-center gap-3">
            <ShieldAlert
              size={14}
              className={error ? "text-red-500" : "text-blue-500"}
            />
            <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-slate-500 font-bold">
              Secure_Terminal_v2.0
            </span>
          </div>
          {booking && !error && (
            <span className="text-[9px] font-mono text-red-500/80 animate-pulse">
              ● LIVE SESSION
            </span>
          )}
        </div>

        <div className="p-8 md:p-12 text-center">
          {error ? (
            <div className="space-y-8 py-4">
              <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto">
                <AlertTriangle className="text-red-500" size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="text-white font-black italic uppercase text-xl tracking-tighter">
                  Access Denied
                </h3>
                <p className="text-slate-500 font-mono text-[10px] uppercase leading-relaxed max-w-xs mx-auto tracking-widest">
                  {error}
                </p>
              </div>
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 text-white/60 hover:text-white font-mono text-[11px] uppercase tracking-[0.2em] transition-all border border-white/10 px-6 py-3 rounded-full hover:bg-white/5"
              >
                <ArrowLeft size={12} /> Return to Dashboard
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-2 mb-10">
                <h1 className="text-4xl md:text-5xl font-black italic uppercase text-white tracking-tighter leading-none">
                  End <span className="text-red-600">Session?</span>
                </h1>
                <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.3em]">
                  Action_Irreversible
                </p>
              </div>

              {/* DETAILS CARD */}
              <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-6 mb-8 text-left group hover:border-blue-500/20 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-[9px] font-mono text-blue-500 uppercase tracking-[0.2em] font-bold">
                    Registry_Details
                  </div>
                  <Clock size={12} className="text-slate-600" />
                </div>
                <div className="space-y-1">
                  <p className="text-white text-lg font-light tracking-tight">
                    {booking.email}
                  </p>
                  <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.1em]">
                    Scheduled:{" "}
                    <span className="text-slate-300">{booking.date}</span> —{" "}
                    <span className="text-slate-300">{booking.time}</span>
                  </p>
                </div>
              </div>

              {/* PROGRESS / GRACE PERIOD */}
              <div className="mb-10 space-y-3">
                <div className="flex justify-between items-end text-[9px] font-mono uppercase tracking-[0.2em]">
                  <span className="text-slate-500">Grace_Period_Remaining</span>
                  <span
                    className={
                      hoursLeft < 48
                        ? "text-red-500 font-bold"
                        : "text-blue-500"
                    }
                  >
                    {formatCountdown(hoursLeft)}
                  </span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-[2px] overflow-hidden">
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{
                      width: `${Math.max(0, (hoursLeft / 72) * 100)}%`, // Visualizing 72h window
                    }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`h-full ${hoursLeft < 48 ? "bg-red-600" : "bg-blue-600"}`}
                  />
                </div>
              </div>

              {/* ACTIONS */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => navigate("/")}
                  className="py-5 rounded-2xl border border-white/5 bg-white/[0.02] text-slate-400 font-black uppercase italic text-[10px] tracking-[0.2em] hover:text-white hover:bg-white/5 transition-all"
                >
                  Keep Session
                </button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCancel}
                  disabled={loading || hoursLeft < 24}
                  className="py-5 rounded-2xl bg-red-600 text-white font-black uppercase italic text-[10px] tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-red-700 shadow-[0_10px_30px_rgba(220,38,38,0.2)] transition-all disabled:opacity-10 disabled:grayscale cursor-pointer"
                >
                  <Trash2 size={14} />
                  {loading ? "Wiping_Data..." : "Confirm_Delete"}
                </motion.button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
}
