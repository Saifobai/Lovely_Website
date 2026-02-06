import React, { useEffect, useState } from "react";
import { WEEKLY_AVAILABILITY } from "../../constants";
import { addDays, format, startOfWeek, addWeeks, isSameDay } from "date-fns";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe, Lock } from "lucide-react";
import { createBooking, fetchBookedTimes } from "../../api/booking.api";
import PendingPaymentModal from "./PendingPaymentModal";
import NavBtn from "../ui/NavBtn";

export default function BookingCalendar({ activeService, isEmbedded }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [email, setEmail] = useState("");
  const [weekOffset, setWeekOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [slots, setSlots] = useState([]);
  const [pendingBooking, setPendingBooking] = useState(null);

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const start = startOfWeek(addWeeks(new Date(), weekOffset), {
    weekStartsOn: 1,
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days = Array.from({ length: 7 }).map((_, i) => addDays(start, i));

  const weekday = selectedDate.getDay();
  const allowedTimes = WEEKLY_AVAILABILITY[weekday]?.times || [];
  const dayLabel = WEEKLY_AVAILABILITY[weekday]?.label;

  const loadBookedSlots = async () => {
    try {
      const data = await fetchBookedTimes(format(selectedDate, "yyyy-MM-dd"));
      setSlots(data.slots || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadBookedSlots();
    setSelectedTime("");
  }, [selectedDate]);

  const submitBooking = async () => {
    if (!selectedTime || !email || loading) return;
    setLoading(true);
    try {
      const data = await createBooking({
        date: format(selectedDate, "yyyy-MM-dd"),
        time: selectedTime,
        email,
        timezone,
        serviceId: activeService.id,
      });
      setPendingBooking({ id: data.bookingId, expiresAt: data.expiresAt });
    } catch {
      alert("refresh and try again.");
    } finally {
      setLoading(false);
    }
  };

  const isToday = isSameDay(selectedDate, new Date());
  const currentTime = new Date().toTimeString().slice(0, 5);

  return (
    <div className="flex flex-col min-h-[600px] md:min-h-[700px] h-full">
      {/* HEADER */}
      <div className="p-5 sm:p-6 md:p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter">
            What is the{" "}
            <span className="text-blue-500">Best date for you?</span>
          </h2>
          <p className="text-[10px] font-mono text-slate-500 mt-1 flex items-center gap-2">
            <Globe size={12} className="text-blue-500" /> {timezone}
          </p>
        </div>

        <div className="text-right">
          <h3 className="text-lg font-black italic uppercase">
            {activeService.title}
          </h3>
          <div className="text-[10px] font-mono text-blue-500 tracking-widest uppercase">
            {activeService.durationMinutes} Min Strategic Slot
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* DAY PICKER */}
        <div className="lg:col-span-7 p-5 sm:p-6 md:p-8 lg:border-r border-white/5">
          <div className="flex justify-between items-center mb-8">
            <span className="text-[10px] font-mono text-blue-500 tracking-[0.3em] uppercase">
              Select_Day
            </span>
            <div className="flex items-center gap-4">
              <NavBtn
                icon={<ChevronLeft size={16} />}
                onClick={() => setWeekOffset((p) => p - 1)}
              />
              <span className="font-mono text-xs uppercase">
                {format(start, "MMM yyyy")}
              </span>
              <NavBtn
                icon={<ChevronRight size={16} />}
                onClick={() => setWeekOffset((p) => p + 1)}
              />
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {days.map((day, i) => {
              const active = isSameDay(day, selectedDate);
              const isPast = day < today;
              const isAllowed = WEEKLY_AVAILABILITY[day.getDay()];

              return (
                <button
                  key={i}
                  disabled={isPast || !isAllowed}
                  onClick={() => setSelectedDate(day)}
                  className={`aspect-[4/5] rounded-xl border flex flex-col items-center justify-center transition-all
                    ${
                      isPast || !isAllowed
                        ? "opacity-10 cursor-not-allowed border-transparent"
                        : active
                          ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20"
                          : "border-white/10 text-slate-400 hover:border-blue-500/50"
                    }`}
                >
                  <span className="text-[8px] font-mono uppercase mb-1">
                    {format(day, "EEE")}
                  </span>
                  <span className="text-xl font-black italic">
                    {format(day, "dd")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TIME PICKER */}
        <div className="lg:col-span-5 p-5 sm:p-6 md:p-8 bg-white/[0.01]">
          <span className="text-[10px] font-mono text-blue-500 tracking-[0.3em] uppercase">
            Available_Times
          </span>

          {dayLabel && (
            <p className="text-[10px] text-blue-400/50 font-mono mt-2 mb-6 uppercase tracking-widest">
              {dayLabel}
            </p>
          )}

          <div className="grid grid-cols-2 gap-3 max-h-[50vh] md:max-h-[400px] overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
            {allowedTimes.map((t) => {
              const slot = slots.find((s) => s.time === t);
              const status = slot?.status || "AVAILABLE";
              const past = isToday && t <= currentTime;

              // A slot is disabled if it's in the past OR its status is NOT Available
              const disabled = status !== "AVAILABLE" || past;

              return (
                <button
                  key={t}
                  disabled={disabled}
                  onClick={() => setSelectedTime(t)}
                  className={`py-4 rounded-xl font-mono text-xs border transition-all
        ${
          disabled
            ? "opacity-30 border-white/5 cursor-not-allowed bg-red-950/10 text-red-100"
            : selectedTime === t
              ? "bg-blue-600 border-blue-500 text-white"
              : "bg-white/5 border-white/5 hover:border-blue-500/40"
        }`}
                >
                  {/* If disabled because of a booking, show "RESERVED", otherwise show the time */}
                  {status === "CONFIRMED"
                    ? "BOOKED"
                    : status === "HOLD"
                      ? "PENDING"
                      : t}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="p-5 sm:p-6 md:p-8 border-t border-white/5 bg-black/40">
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-stretch md:items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ENTER YOUR EMAIL ADDRESS"
            className="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-2xl font-mono text-xs focus:border-blue-500 outline-none"
          />

          <button
            onClick={submitBooking}
            disabled={loading || !selectedTime || !email}
            className="w-full md:w-auto min-w-full md:min-w-[300px] bg-blue-600 hover:bg-blue-700 text-white py-5 px-10 rounded-2xl font-black uppercase italic text-xs tracking-[0.2em] transition-all flex items-center justify-center gap-3 disabled:opacity-20 shadow-xl shadow-blue-900/20"
          >
            {loading ? (
              "Initializing_Protocol..."
            ) : (
              <>
                <Lock size={14} /> Secure slot
              </>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {pendingBooking && (
          <PendingPaymentModal
            booking={pendingBooking}
            onClose={() => {
              setPendingBooking(null);
              loadBookedSlots();
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
