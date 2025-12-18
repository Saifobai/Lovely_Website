import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CancelPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🚫 Invalid / broken cancel link
  if (!id || id === "undefined") {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
        <div className="p-8 bg-black/40 border border-white/10 rounded-2xl text-center">
          <h1 className="text-xl font-bold mb-4">Invalid cancellation link</h1>
          <p className="text-gray-400">
            This booking link is missing or expired.
          </p>
        </div>
      </section>
    );
  }

  const cancelBooking = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`http://localhost:5000/api/bookings/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Cancel failed");
      }

      alert("✅ Booking cancelled successfully");
      navigate("/", { state: { refreshBookings: true } });
    } catch (err) {
      setError(err.message || "Cancellation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
      <div className="p-10 bg-black/30 border border-white/10 rounded-2xl max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">
          Are you sure you want to cancel your booking?
        </h1>

        {error && <p className="text-red-400 mb-4">❌ {error}</p>}

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
            disabled={loading}
            className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition"
          >
            {loading ? "Cancelling..." : "Yes, cancel booking"}
          </button>
        </div>
      </div>
    </section>
  );
}
