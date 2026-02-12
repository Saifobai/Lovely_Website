import { useState } from "react";
import { createBooking } from "../../api/booking.api";
import PendingPaymentModal from "./PendingPaymentModal";

export default function ExclusiveBookingDirect({ activeService }) {
  const [email, setEmail] = useState("");
  const [pendingBooking, setPendingBooking] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!email || loading) return;

    setLoading(true);
    try {
      const data = await createBooking({
        serviceId: activeService.id,
        email,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });

      setPendingBooking({
        id: data.bookingId,
        expiresAt: data.expiresAt,
      });
    } catch {
      alert("Error initializing booking");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <input
        type="email"
        placeholder="ENTER YOUR EMAIL ADDRESS"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-2xl font-mono text-xs"
      />

      <button
        onClick={submit}
        disabled={loading || !email}
        className="w-full mt-6 bg-blue-600 py-5 rounded-2xl font-black uppercase italic text-xs"
      >
        {loading ? "Initializing..." : "Secure slot"}
      </button>

      {pendingBooking && (
        <PendingPaymentModal
          booking={pendingBooking}
          onClose={() => setPendingBooking(null)}
        />
      )}
    </div>
  );
}
