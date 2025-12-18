import { useEffect, useState } from "react";
import { addDays, format, startOfWeek, addWeeks } from "date-fns";

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

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [email, setEmail] = useState("");
  const [weekOffset, setWeekOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [bookedTimes, setBookedTimes] = useState([]);
  const [success, setSuccess] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const start = startOfWeek(addWeeks(new Date(), weekOffset), {
    weekStartsOn: 1,
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days = Array.from({ length: 7 }).map((_, i) => addDays(start, i));

  const submitBooking = async () => {
    if (!selectedDate || !selectedTime || !email) return;

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: format(selectedDate, "yyyy-MM-dd"),
          time: selectedTime,
          email,
          timezone: userTimezone,
        }),
      });

      const data = await response.json();
      setLoading(false);

      setConfirmedBooking({
        bookingId: data.bookingId,
        date: format(selectedDate, "MMMM dd, yyyy"),
        time: selectedTime,
        email,
        timezone: userTimezone,
        link: data.googleCalendarLink,
      });

      setSuccess(true); // 👈 ONLY show modal
    } catch (error) {
      setLoading(false);
      console.error("Booking error:", error);
    }
  };

  useEffect(() => {
    const loadBookings = async () => {
      const response = await fetch(
        `http://localhost:5000/api/bookings/date/${format(
          selectedDate,
          "yyyy-MM-dd"
        )}`
      );

      const data = await response.json();
      setBookedTimes(data.bookedTimes || []);
    };

    loadBookings();
  }, [selectedDate, refreshKey]);

  const isToday =
    format(selectedDate, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");

  const currentTime = new Date().toTimeString().slice(0, 5);

  return (
    <>
      <div className="bg-[#020617] border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Book a Consultation</h2>

        <p className="text-gray-400 mb-4">
          Times shown in your timezone: <b>{userTimezone}</b>
        </p>

        <p className="text-gray-400 mb-8">30-minute strategy call</p>

        {/* Calendar + Time */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Calendar */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => setWeekOffset(weekOffset - 1)}
                className="text-gray-400 hover:text-white"
              >
                ←
              </button>
              <span className="font-semibold">
                {format(start, "MMMM yyyy")}
              </span>
              <button
                onClick={() => setWeekOffset(weekOffset + 1)}
                className="text-gray-400 hover:text-white"
              >
                →
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {days.map((day) => {
                const active =
                  format(day, "yyyy-MM-dd") ===
                  format(selectedDate, "yyyy-MM-dd");

                const isPastDate = day < today;

                return (
                  <button
                    key={day}
                    disabled={isPastDate}
                    onClick={() => {
                      setSelectedDate(day);
                      setSelectedTime("");
                    }}
                    className={`p-3 rounded-lg text-sm transition
                      ${
                        isPastDate
                          ? "opacity-20 cursor-not-allowed"
                          : active
                          ? "bg-blue-600 text-white"
                          : "bg-white/5 hover:bg-white/10"
                      }`}
                  >
                    <div className="font-medium">{format(day, "EEE")}</div>
                    <div className="text-xs opacity-70">
                      {format(day, "dd")}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time slots */}
          <div>
            <p className="font-semibold mb-4">Available Times</p>

            <div className="grid grid-cols-2 gap-3">
              {TIMES.map((t) => (
                <button
                  key={t}
                  disabled={
                    bookedTimes.includes(t) || (isToday && t <= currentTime)
                  }
                  onClick={() => setSelectedTime(t)}
                  className={`py-3 rounded-lg border transition
                    ${
                      bookedTimes.includes(t) || (isToday && t <= currentTime)
                        ? "opacity-30 cursor-not-allowed"
                        : selectedTime === t
                        ? "bg-blue-600 border-blue-500"
                        : "border-white/10 hover:border-blue-400"
                    }`}
                >
                  {bookedTimes.includes(t)
                    ? `${t} (Booked)`
                    : isToday && t <= currentTime
                    ? `${t} (Past)`
                    : t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="mt-8">
          <label className="text-sm text-gray-400">Email address</label>
          <input
            type="email"
            className="w-full mt-2 px-4 py-3 rounded-lg
            bg-black/40 border border-white/10
            focus:border-blue-500 outline-none"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button className="px-6 py-3 rounded-lg border border-white/20">
            Cancel
          </button>
          <button
            onClick={submitBooking}
            disabled={loading}
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500"
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {success && confirmedBooking && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white text-black p-8 rounded-2xl shadow-2xl w-[400px] text-center animate-fade-in">
            <div className="text-4xl mb-4">🎉</div>

            <h3 className="text-2xl font-bold mb-2">Booking Confirmed!</h3>

            <p className="text-gray-600 mb-6">
              Your consultation call has been scheduled.
            </p>

            <div className="bg-gray-100 p-4 rounded-xl text-left mb-6">
              <p>
                <b>Date:</b> {confirmedBooking.date}
              </p>
              <p>
                <b>Time:</b> {confirmedBooking.time}
              </p>
              <p>
                <b>Timezone:</b> {confirmedBooking.timezone}
              </p>
              <p>
                <b>Email:</b> {confirmedBooking.email}
              </p>
            </div>

            <button
              onClick={() => {
                alert("✅ Booking confirmed! Adding to Google Calendar…");
                window.open(confirmedBooking.link, "_blank");

                // Close modal
                setSuccess(false);

                // Reset selection
                setSelectedTime("");
                setEmail("");

                // Trigger refresh

                setRefreshKey((prev) => prev + 1);
              }}
              className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg mb-3"
            >
              📅 Add to Google Calendar
            </button>

            <button
              onClick={() => {
                setSuccess(false);
                setSelectedTime("");
                setEmail("");

                setRefreshKey((prev) => prev + 1);
              }}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
