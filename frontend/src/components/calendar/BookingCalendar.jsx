// //==========================================================
// import React, { useEffect, useState } from "react";
// import { addDays, format, startOfWeek, addWeeks, isSameDay } from "date-fns";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, Globe, Info } from "lucide-react";

// import { TIMES } from "../../constants/time";
// import { createBooking, fetchBookedTimes } from "../../api/booking.api";

// import PendingPaymentModal from "./PendingPaymentModal";
// import NavBtn from "../ui/NavBtn";

// export default function BookingCalendar({ activeService, isEmbedded = false }) {
//   if (!activeService) {
//     return (
//       <div className="p-10 text-slate-500 font-mono">
//         INITIALIZING_PROTOCOL...
//       </div>
//     );
//   }

//   /* -------------------- STATE -------------------- */
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState("");
//   const [email, setEmail] = useState("");
//   const [umsatz, setUmsatz] = useState(""); // Revenue state
//   const [weekOffset, setWeekOffset] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [slots, setSlots] = useState([]);
//   const [pendingBooking, setPendingBooking] = useState(null);

//   const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

//   /* -------------------- DATE LOGIC -------------------- */
//   const start = startOfWeek(addWeeks(new Date(), weekOffset), {
//     weekStartsOn: 1,
//   });
//   const today = new Date();
//   today.setHours(0, 0, 0, 0);
//   const days = Array.from({ length: 7 }).map((_, i) => addDays(start, i));

//   /* -------------------- FETCH BOOKED SLOTS -------------------- */
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

//   /* -------------------- SUBMIT BOOKING -------------------- */
//   const submitBooking = async () => {
//     if (!selectedTime || !email) return;
//     if (activeService.isInvitation && !umsatz) return;

//     setLoading(true);
//     try {
//       const data = await createBooking({
//         date: format(selectedDate, "yyyy-MM-dd"),
//         time: selectedTime,
//         email,
//         timezone,
//         umsatz: activeService.isInvitation ? umsatz : null,
//         serviceId: activeService.id,
//       });

//       setPendingBooking({
//         id: data.bookingId,
//         expiresAt: data.expiresAt,
//       });
//     } catch (err) {
//       console.error("Booking failed:", err);
//     }
//     setLoading(false);
//   };

//   const isToday = isSameDay(selectedDate, new Date());
//   const currentTime = new Date().toTimeString().slice(0, 5);

//   return (
//     <div
//       className={`relative w-full h-full flex flex-col transition-all duration-700 ${isEmbedded ? "p-0 bg-transparent" : "max-w-5xl mx-auto py-12 px-4"}`}
//     >
//       <div
//         className={`flex-1 flex flex-col h-full ${isEmbedded ? "bg-transparent border-none" : "bg-[#050505] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl"}`}
//       >
//         {/* ---------- HEADER: UPDATED PRICE STYLING ---------- */}
//         <div className="p-8 border-b border-white/5 flex justify-between items-end">
//           <div>
//             <h2 className="text-3xl font-black uppercase italic text-white tracking-tighter">
//               Schedule{" "}
//               <span className="text-blue-500 font-outline-1">Protocol</span>
//             </h2>
//             <p className="text-[9px] font-mono text-slate-500 mt-1 flex items-center gap-2 uppercase tracking-widest">
//               <Globe size={12} className="text-blue-500/50" /> {timezone}
//             </p>
//           </div>

//           <div className="text-right">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeService.id}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//                 className="flex flex-col items-end text-right"
//               >
//                 {/* Protocol Title - Clean & Bold */}
//                 <h3 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter text-white leading-none mb-2">
//                   {activeService.title}
//                 </h3>

//                 {/* Price Row - Elegant & Large */}
//                 <div className="flex items-end gap-2">
//                   <span className="text-4xl font-extralight tracking-tight">
//                     {(activeService.priceCents / 100).toLocaleString("en-EU")}
//                   </span>

//                   <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">
//                     EUR
//                   </span>
//                 </div>

//                 <div className="mt-1 text-[11px] font-mono tracking-widest text-slate-500">
//                   {activeService.durationMinutes} MIN
//                 </div>

//                 {/* Technical Metadata */}
//                 <div className="flex items-center gap-3">
//                   <div className="h-[1px] w-8 bg-blue-500/30" />
//                   <p className="text-[9px] md:text-[10px] text-slate-500 font-mono uppercase tracking-[0.3em]">
//                     Slot_Duration //{" "}
//                     <span className="text-slate-300">
//                       {activeService.duration}
//                     </span>
//                   </p>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* ---------- CALENDAR MAIN GRID ---------- */}
//         <div className="flex-1 grid lg:grid-cols-12 overflow-hidden">
//           {/* DATE PICKER */}
//           <div className="lg:col-span-7 p-8 border-r border-white/5 overflow-y-auto">
//             <div className="flex justify-between items-center mb-8">
//               <h3 className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.2em]">
//                 01. Select_Date
//               </h3>
//               <div className="flex gap-4 items-center">
//                 <NavBtn
//                   icon={<ChevronLeft size={16} />}
//                   onClick={() => setWeekOffset((p) => p - 1)}
//                 />
//                 <span className="text-white font-mono text-xs font-bold min-w-[100px] text-center uppercase tracking-widest">
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
//                 return (
//                   <motion.button
//                     key={i}
//                     disabled={isPast}
//                     whileHover={
//                       !isPast && !active
//                         ? {
//                             backgroundColor: "rgba(255, 255, 255, 0.05)",
//                             y: -2,
//                           }
//                         : {}
//                     }
//                     onClick={() => setSelectedDate(day)}
//                     className={`relative flex flex-col items-center justify-center aspect-[4/5] rounded-2xl border transition-all duration-500 ${isPast ? "opacity-10 grayscale cursor-not-allowed" : ""} ${active ? "bg-white text-black border-white shadow-2xl scale-105 z-10" : "bg-transparent border-white/5 text-slate-400"}`}
//                   >
//                     <span
//                       className={`text-[8px] font-mono uppercase mb-2 ${active ? "text-black/60" : "text-slate-600"}`}
//                     >
//                       {format(day, "EEE")}
//                     </span>
//                     <span className="text-xl font-black italic tracking-tighter">
//                       {format(day, "dd")}
//                     </span>
//                     {active && (
//                       <motion.div
//                         layoutId="glow"
//                         className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full -z-10"
//                       />
//                     )}
//                   </motion.button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* TIME SLOTS */}
//           <div className="lg:col-span-5 p-8 bg-black/20 overflow-y-auto">
//             <h3 className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.2em] mb-8">
//               02. Available_Slots
//             </h3>
//             <div className="grid grid-cols-2 gap-3 pb-4">
//               {TIMES.map((t) => {
//                 const slot = slots.find((s) => s.time === t);
//                 const status = slot?.status || "AVAILABLE";
//                 const isPending = status === "PENDING_PAYMENT";
//                 const isConfirmed = status === "CONFIRMED";
//                 const past = isToday && t <= currentTime;
//                 const disabled = isPending || isConfirmed || past;

//                 return (
//                   <button
//                     key={t}
//                     disabled={disabled}
//                     onClick={() => setSelectedTime(t)}
//                     className={`py-4 rounded-xl font-mono text-[11px] border transition-all duration-300 ${isConfirmed ? "opacity-20 bg-white/5 border-transparent" : isPending ? "opacity-40 border-yellow-500/40 text-yellow-500 italic" : selectedTime === t ? "bg-blue-600 border-blue-500 text-white shadow-lg" : "bg-white/5 border-white/5 text-slate-300 hover:border-blue-500/50 hover:text-white"}`}
//                   >
//                     {isConfirmed
//                       ? "BOOKED"
//                       : isPending
//                         ? "PENDING"
//                         : past
//                           ? "EXPIRED"
//                           : t}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* ---------- FOOTER: DYNAMIC DATA BREAKDOWN & ACTION ---------- */}
//         <div className="p-8 border-t border-white/5 bg-black/40">
//           {/* REAL DATA BREAKDOWN SECTION */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//             {activeService.details?.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="border-l border-blue-500/30 pl-4 space-y-1"
//               >
//                 <p className="text-[10px] font-mono text-blue-500 tracking-widest">
//                   [{item.time}] {item.label}
//                 </p>
//                 <p className="text-[11px] text-slate-400 uppercase leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="flex flex-col md:flex-row gap-4 items-end">
//             <div className="flex flex-col flex-1 w-full gap-3">
//               <label className="text-[8px] font-mono text-slate-600 uppercase tracking-[0.3em] ml-1">
//                 Terminal_Identity_Verification
//               </label>
//               <input
//                 type="email"
//                 placeholder="USER_ID@EMAIL.COM"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white font-mono text-xs tracking-widest focus:outline-none focus:border-blue-500/50 transition-all"
//               />

//               {/* CONDITIONAL UMSATZ INPUT */}
//               <AnimatePresence>
//                 {activeService.isInvitation && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className="space-y-3 pt-1"
//                   >
//                     <label className="text-[8px] font-mono text-blue-500 uppercase tracking-[0.3em] ml-1 flex items-center gap-2">
//                       <Info size={10} /> Qualification_Metric: Annual_Revenue
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="ENTER_ANNUAL_UMSATZ (e.g. 5M+)"
//                       value={umsatz}
//                       onChange={(e) => setUmsatz(e.target.value)}
//                       className="w-full bg-blue-500/5 border border-blue-500/30 px-6 py-4 rounded-xl text-blue-400 font-mono text-xs tracking-widest focus:border-blue-500 outline-none transition-all placeholder:text-blue-900"
//                     />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <button
//               onClick={submitBooking}
//               disabled={
//                 loading ||
//                 !selectedTime ||
//                 !email ||
//                 (activeService.isInvitation && !umsatz)
//               }
//               className="w-full md:w-auto min-w-[280px] h-[52px] bg-white text-black rounded-xl font-black uppercase italic tracking-[0.2em] text-[11px] transition-all hover:bg-blue-500 hover:text-white disabled:opacity-20 shadow-xl"
//             >
//               {loading ? "INITIALIZING..." : "EXECUTE_DEPLOYMENT"}
//             </button>
//           </div>

//           {/* <p className="mt-6 text-[9px] font-mono text-slate-400 uppercase text-center tracking-widest border-t border-white/5 pt-6">
//             {activeService.desc}
//           </p> */}
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

//==========================================================
import React, { useEffect, useState } from "react";
import { addDays, format, startOfWeek, addWeeks, isSameDay } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe } from "lucide-react";

import { TIMES } from "../../constants/time";
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
  const [pendingBooking, setPendingBooking] = useState(null);

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  /* ==================== DATE LOGIC ==================== */
  const start = startOfWeek(addWeeks(new Date(), weekOffset), {
    weekStartsOn: 1,
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days = Array.from({ length: 7 }).map((_, i) => addDays(start, i));

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
  }, [selectedDate]);

  /* ==================== SUBMIT ==================== */
  const submitBooking = async () => {
    if (!selectedTime || !email) return;

    setLoading(true);
    try {
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
      console.error("Booking failed:", err);
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
            : "bg-[#050505] border border-white/10 rounded-[32px] shadow-2xl"
        }`}
      >
        {/* ================= HEADER ================= */}
        <div className="p-8 border-b border-white/5 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black uppercase italic text-white">
              Schedule <span className="text-blue-500">Protocol</span>
            </h2>
            <p className="text-[9px] font-mono text-slate-500 mt-1 flex gap-2">
              <Globe size={12} /> {timezone}
            </p>
          </div>

          <div className="text-right">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-black italic uppercase text-white mb-2">
                {activeService.title}
              </h3>

              <div className="flex items-end gap-2 justify-end">
                <span className="text-4xl font-extralight">
                  {(activeService.priceCents / 100).toLocaleString("en-EU")}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {activeService.currency}
                </span>
              </div>

              <div className="text-[11px] font-mono text-slate-500 mt-1">
                {activeService.durationMinutes} MIN
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= GRID ================= */}
        <div className="flex-1 grid lg:grid-cols-12">
          {/* DATE PICKER */}
          <div className="lg:col-span-7 p-8 border-r border-white/5">
            <div className="flex justify-between mb-8">
              <span className="text-[10px] font-mono text-blue-500">
                01. Select_Date
              </span>
              <div className="flex gap-4">
                <NavBtn
                  icon={<ChevronLeft size={16} />}
                  onClick={() => setWeekOffset((p) => p - 1)}
                />
                <span className="font-mono text-xs text-white">
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

                return (
                  <button
                    key={i}
                    disabled={isPast}
                    onClick={() => setSelectedDate(day)}
                    className={`aspect-[4/5] rounded-2xl border flex flex-col items-center justify-center ${
                      isPast
                        ? "opacity-10"
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
              02. Available_Slots
            </span>

            <div className="grid grid-cols-2 gap-3 mt-8">
              {TIMES.map((t) => {
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
              className="flex-1 bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white font-mono text-xs"
            />

            <button
              onClick={submitBooking}
              disabled={loading || !selectedTime || !email}
              className="min-w-[280px] h-[52px] bg-white text-black rounded-xl font-black uppercase italic text-xs disabled:opacity-20"
            >
              {loading ? "INITIALIZING..." : "EXECUTE_DEPLOYMENT"}
            </button>
          </div>
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
