// import { useEffect, useState } from "react";
// import { WEEKLY_AVAILABILITY } from "../../constants/index";
// import { addDays, format, startOfWeek, addWeeks, isSameDay } from "date-fns";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, Globe } from "lucide-react";

// import { createBooking, fetchBookedTimes } from "../../api/booking.api";
// import PendingPaymentModal from "./PendingPaymentModal";
// import NavBtn from "../ui/NavBtn";
// export default function BookingCalendar({ activeService, isEmbedded = false }) {
//   /* ==================== GUARD ==================== */
//   if (!activeService) {
//     return (
//       <div className="p-10 text-slate-500 font-mono">
//         INITIALIZING_PROTOCOL...
//       </div>
//     );
//   }

//   /* ==================== STATE ==================== */
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState("");
//   const [email, setEmail] = useState("");
//   const [weekOffset, setWeekOffset] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [slots, setSlots] = useState([]);
//   const [pendingBooking, setPendingBooking] = useState(null);

//   const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

//   /* ==================== DATE LOGIC ==================== */
//   const start = startOfWeek(addWeeks(new Date(), weekOffset), {
//     weekStartsOn: 1,
//   });

//   const today = new Date();
//   today.setHours(0, 0, 0, 0);

//   const days = Array.from({ length: 7 }).map((_, i) => addDays(start, i));

//   const weekday = selectedDate.getDay();
//   const allowedTimes = WEEKLY_AVAILABILITY[weekday]?.times || [];
//   const dayLabel = WEEKLY_AVAILABILITY[weekday]?.label;

//   /* ==================== FETCH SLOTS ==================== */
//   const loadBookedSlots = async () => {
//     try {
//       const data = await fetchBookedTimes(format(selectedDate, "yyyy-MM-dd"));
//       setSlots(data.slots || []);
//     } catch (err) {
//       console.error("Error loading slots:", err);
//     }
//   };

//   useEffect(() => {
//     loadBookedSlots();
//   }, [selectedDate]);

//   /* 🔒 Reset time if day changes */
//   useEffect(() => {
//     setSelectedTime("");
//   }, [selectedDate]);

//   /* ==================== SUBMIT ==================== */
//   const submitBooking = async () => {
//     if (!selectedTime || !email) return;

//     setLoading(true);
//     try {
//       const data = await createBooking({
//         date: format(selectedDate, "yyyy-MM-dd"),
//         time: selectedTime,
//         email,
//         timezone,
//         serviceId: activeService.id,
//       });

//       setPendingBooking({
//         id: data.bookingId,
//         expiresAt: data.expiresAt,
//       });
//     } catch (err) {
//       console.error("Booking failed:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const isToday = isSameDay(selectedDate, new Date());
//   const currentTime = new Date().toTimeString().slice(0, 5);

//   /* ==================== RENDER ==================== */
//   return (
//     <div
//       className={`relative w-full h-full flex flex-col ${
//         isEmbedded ? "p-0" : "max-w-5xl mx-auto py-12 px-4"
//       }`}
//     >
//       <div
//         className={`flex-1 flex flex-col ${
//           isEmbedded
//             ? "bg-transparent"
//             : "bg-[#050505] border border-white/10 rounded-[32px]"
//         }`}
//       >
//         {/* ================= HEADER ================= */}
//         <div className="p-8 border-b border-white/5 flex justify-between items-end">
//           <div>
//             <h2 className="text-3xl font-black uppercase italic">
//               Select your
//               <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent italic">
//                 {" "}
//                 deployment window
//               </span>
//             </h2>
//             <p className="text-[9px] font-mono text-slate-500 mt-1 flex gap-2">
//               <Globe size={12} /> {timezone}
//             </p>
//           </div>

//           <div className="text-right">
//             <h3 className="text-xl font-black italic uppercase">
//               {activeService.title}
//             </h3>
//             <div className="text-[12px] font-mono text-slate-400 mt-1">
//               {activeService.durationMinutes} Min Strategy Call
//             </div>
//           </div>
//         </div>

//         {/* ================= GRID ================= */}
//         <div className="flex-1 grid lg:grid-cols-12">
//           {/* DATE PICKER */}
//           <div className="lg:col-span-7 p-8 border-r border-white/5">
//             <div className="flex justify-between mb-8">
//               <span className="text-[10px] font-mono text-blue-500">
//                 01. Select_Day
//               </span>
//               <div className="flex gap-4">
//                 <NavBtn
//                   icon={<ChevronLeft size={16} />}
//                   onClick={() => setWeekOffset((p) => p - 1)}
//                 />
//                 <span className="font-mono text-xs">
//                   {format(start, "MMM yyyy")}
//                 </span>
//                 <NavBtn
//                   icon={<ChevronRight size={16} />}
//                   onClick={() => setWeekOffset((p) => p + 1)}
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-7 gap-2">
//               {days.map((day, i) => {
//                 const active = isSameDay(day, selectedDate);
//                 const isPast = day < today;
//                 const isAllowed = WEEKLY_AVAILABILITY[day.getDay()];

//                 return (
//                   <button
//                     key={i}
//                     disabled={isPast || !isAllowed}
//                     onClick={() => setSelectedDate(day)}
//                     className={`aspect-[4/5] rounded-2xl border flex flex-col items-center justify-center ${
//                       isPast || !isAllowed
//                         ? "opacity-10 cursor-not-allowed"
//                         : active
//                           ? "bg-white text-black"
//                           : "border-white/5 text-slate-400"
//                     }`}
//                   >
//                     <span className="text-[8px] font-mono uppercase">
//                       {format(day, "EEE")}
//                     </span>
//                     <span className="text-xl font-black italic">
//                       {format(day, "dd")}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* TIME SLOTS */}
//           <div className="lg:col-span-5 p-8 bg-black/20">
//             <span className="text-[10px] font-mono text-blue-500">
//               02. Available_Times
//             </span>

//             {dayLabel && (
//               <p className="text-[10px] text-purple-400 font-mono mt-2">
//                 {dayLabel}
//               </p>
//             )}

//             <div className="grid grid-cols-2 gap-3 mt-6">
//               {allowedTimes.map((t) => {
//                 const slot = slots.find((s) => s.time === t);
//                 const status = slot?.status || "AVAILABLE";
//                 const past = isToday && t <= currentTime;
//                 const disabled = status !== "AVAILABLE" || past;

//                 return (
//                   <button
//                     key={t}
//                     disabled={disabled}
//                     onClick={() => setSelectedTime(t)}
//                     className={`py-4 rounded-xl font-mono text-xs border ${
//                       disabled
//                         ? "opacity-20"
//                         : selectedTime === t
//                           ? "bg-blue-600 text-white"
//                           : "bg-white/5 border-white/5"
//                     }`}
//                   >
//                     {disabled ? status : t}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* ================= FOOTER ================= */}
//         <div className="p-8 border-t border-white/5 bg-black/40">
//           <div className="flex gap-4 items-end">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="USER_ID@EMAIL.COM"
//               className="flex-1 bg-white/5 border border-white/10 px-6 py-4 rounded-xl font-mono text-xs"
//             />

//             <button
//               onClick={submitBooking}
//               disabled={loading || !selectedTime || !email}
//               className="min-w-[280px] h-[52px] bg-white text-black rounded-xl font-black uppercase italic text-xs disabled:opacity-20"
//             >
//               {loading ? "INITIALIZING..." : "EXECUTE_DEPLOYMENT"}
//             </button>
//           </div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {pendingBooking && (
//           <PendingPaymentModal
//             booking={pendingBooking}
//             onClose={() => {
//               setPendingBooking(null);
//               loadBookedSlots();
//             }}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

//====================================================================
//====================================================================
//====================================================================
import { useEffect, useState } from "react";
import { WEEKLY_AVAILABILITY } from "../../constants";
import { addDays, format, startOfWeek, addWeeks, isSameDay } from "date-fns";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe } from "lucide-react";

import { createBooking, fetchBookedTimes } from "../../api/booking.api";
import PendingPaymentModal from "./PendingPaymentModal";
import NavBtn from "../ui/NavBtn";

export default function BookingCalendar({ activeService, isEmbedded = false }) {
  /* ==================== GUARD ==================== */
  if (!activeService) {
    return (
      <div className="p-10 text-slate-500 font-mono">
        INITIALIZING_PROTOCOL...
      </div>
    );
  }

  /* ==================== STATE ==================== */
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [email, setEmail] = useState("");
  const [weekOffset, setWeekOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [slots, setSlots] = useState([]);

  /**
   * pendingBooking = TEMPORARY HOLD (not confirmed)
   * Expires automatically after 3 minutes (backend enforced)
   */
  const [pendingBooking, setPendingBooking] = useState(null);

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  /* ==================== DATE LOGIC ==================== */
  const start = startOfWeek(addWeeks(new Date(), weekOffset), {
    weekStartsOn: 1,
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days = Array.from({ length: 7 }).map((_, i) => addDays(start, i));

  const weekday = selectedDate.getDay();
  const allowedTimes = WEEKLY_AVAILABILITY[weekday]?.times || [];
  const dayLabel = WEEKLY_AVAILABILITY[weekday]?.label;

  /* ==================== FETCH SLOTS ==================== */
  const loadBookedSlots = async () => {
    try {
      const data = await fetchBookedTimes(format(selectedDate, "yyyy-MM-dd"));
      setSlots(data.slots || []);
    } catch (err) {
      console.error("Error loading slots:", err);
    }
  };

  useEffect(() => {
    loadBookedSlots();
    setSelectedTime("");
  }, [selectedDate]);

  /* ==================== PAY-FIRST HOLD ==================== */
  const submitBooking = async () => {
    if (!selectedTime || !email || loading) return;

    setLoading(true);

    try {
      /**
       * BACKEND FLOW:
       * - Creates PENDING booking
       * - Sets expiresAt = now + 3 minutes
       * - NO email sent yet
       * - NO calendar save yet
       */
      const data = await createBooking({
        date: format(selectedDate, "yyyy-MM-dd"),
        time: selectedTime,
        email,
        timezone,
        serviceId: activeService.id,
      });

      setPendingBooking({
        id: data.bookingId,
        expiresAt: data.expiresAt,
      });
    } catch (err) {
      console.error("Hold failed:", err);
      alert("Unable to reserve slot. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isToday = isSameDay(selectedDate, new Date());
  const currentTime = new Date().toTimeString().slice(0, 5);

  /* ==================== RENDER ==================== */
  return (
    <div
      className={`relative w-full h-full flex flex-col ${
        isEmbedded ? "p-0" : "max-w-5xl mx-auto py-12 px-4"
      }`}
    >
      <div
        className={`flex-1 flex flex-col ${
          isEmbedded
            ? "bg-transparent"
            : "bg-[#050505] border border-white/10 rounded-[32px]"
        }`}
      >
        {/* ================= HEADER ================= */}
        <div className="p-8 border-b border-white/5 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black uppercase italic">
              Select your{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent italic">
                deployment window
              </span>
            </h2>
            <p className="text-[9px] font-mono text-slate-500 mt-1 flex gap-2">
              <Globe size={12} /> {timezone}
            </p>
          </div>

          <div className="text-right">
            <h3 className="text-xl font-black italic uppercase">
              {activeService.title}
            </h3>
            <div className="text-[12px] font-mono text-slate-400 mt-1">
              {activeService.durationMinutes} Min Strategy Call
            </div>
          </div>
        </div>

        {/* ================= GRID ================= */}
        <div className="flex-1 grid lg:grid-cols-12">
          {/* DATE PICKER */}
          <div className="lg:col-span-7 p-8 border-r border-white/5">
            <div className="flex justify-between mb-8">
              <span className="text-[10px] font-mono text-blue-500">
                01. Select_Day
              </span>
              <div className="flex gap-4">
                <NavBtn
                  icon={<ChevronLeft size={16} />}
                  onClick={() => setWeekOffset((p) => p - 1)}
                />
                <span className="font-mono text-xs">
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
                    className={`aspect-[4/5] rounded-2xl border flex flex-col items-center justify-center ${
                      isPast || !isAllowed
                        ? "opacity-10 cursor-not-allowed"
                        : active
                          ? "bg-white text-black"
                          : "border-white/5 text-slate-400"
                    }`}
                  >
                    <span className="text-[8px] font-mono uppercase">
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

          {/* TIME SLOTS */}
          <div className="lg:col-span-5 p-8 bg-black/20">
            <span className="text-[10px] font-mono text-blue-500">
              02. Available_Times
            </span>

            {dayLabel && (
              <p className="text-[10px] text-purple-400 font-mono mt-2">
                {dayLabel}
              </p>
            )}

            <div className="grid grid-cols-2 gap-3 mt-6">
              {allowedTimes.map((t) => {
                const slot = slots.find((s) => s.time === t);
                const status = slot?.status || "AVAILABLE";
                const past = isToday && t <= currentTime;
                const disabled = status !== "AVAILABLE" || past;

                return (
                  <button
                    key={t}
                    disabled={disabled}
                    onClick={() => setSelectedTime(t)}
                    className={`py-4 rounded-xl font-mono text-xs border ${
                      disabled
                        ? "opacity-20"
                        : selectedTime === t
                          ? "bg-blue-600 text-white"
                          : "bg-white/5 border-white/5"
                    }`}
                  >
                    {disabled ? status : t}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="p-8 border-t border-white/5 bg-black/40">
          <div className="flex gap-4 items-end">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="USER_ID@EMAIL.COM"
              className="flex-1 bg-white/5 border border-white/10 px-6 py-4 rounded-xl font-mono text-xs"
            />

            <button
              onClick={submitBooking}
              disabled={loading || !selectedTime || !email}
              className="min-w-[280px] h-[52px] bg-white text-black rounded-xl font-black uppercase italic text-xs disabled:opacity-20"
            >
              {loading ? "CREATING HOLD..." : "PROCEED TO PAYMENT (3-MIN HOLD)"}
            </button>
          </div>
        </div>
      </div>

      {/* ================= PAYMENT MODAL ================= */}
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
