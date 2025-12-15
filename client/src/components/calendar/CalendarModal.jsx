import { useState } from "react";

const TIMES = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
];

export default function CalendarModal({ onClose }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submitBooking = async () => {
    if (!date || !time || !email) {
      alert("Please complete all fields");
      return;
    }

    setLoading(true);

    await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date, time, email }),
    });

    setLoading(false);
    alert("✅ Booking confirmed! Check your email/calendar.");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#020617] border border-white/10 rounded-2xl p-8 w-[400px]">
        <h3 className="text-xl font-bold mb-4">Book a 30-min Call</h3>

        <label className="block text-sm mb-2">Date</label>
        <input
          type="date"
          className="w-full mb-4 px-4 py-2 rounded bg-black/40 border border-white/10"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label className="block text-sm mb-2">Time</label>
        <select
          className="w-full mb-4 px-4 py-2 rounded bg-black/40 border border-white/10"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">Select time</option>
          {TIMES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        <label className="block text-sm mb-2">Email</label>
        <input
          type="email"
          className="w-full mb-6 px-4 py-2 rounded bg-black/40 border border-white/10"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded border border-white/20"
          >
            Cancel
          </button>
          <button
            onClick={submitBooking}
            disabled={loading}
            className="flex-1 py-2 rounded bg-blue-600 hover:bg-blue-500"
          >
            {loading ? "Booking..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}
