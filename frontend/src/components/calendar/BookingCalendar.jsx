// import { useEffect, useState } from "react";
// import { addDays, format, startOfWeek, addWeeks } from "date-fns";

// const TIMES = [
//   "09:00",
//   "09:30",
//   "10:00",
//   "10:30",
//   "11:00",
//   "11:30",
//   "14:00",
//   "14:30",
//   "15:00",
//   "15:30",
// ];

// export default function BookingCalendar() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState("");
//   const [email, setEmail] = useState("");
//   const [weekOffset, setWeekOffset] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [bookedTimes, setBookedTimes] = useState([]);
//   const [success, setSuccess] = useState(false);
//   const [confirmedBooking, setConfirmedBooking] = useState(null);
//   const [refreshKey, setRefreshKey] = useState(0);

//   const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

//   const start = startOfWeek(addWeeks(new Date(), weekOffset), {
//     weekStartsOn: 1,
//   });

//   const today = new Date();
//   today.setHours(0, 0, 0, 0);

//   const days = Array.from({ length: 7 }).map((_, i) => addDays(start, i));

//   const submitBooking = async () => {
//     if (!selectedDate || !selectedTime || !email) return;

//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/api/bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           date: format(selectedDate, "yyyy-MM-dd"),
//           time: selectedTime,
//           email,
//           timezone: userTimezone,
//         }),
//       });

//       const data = await response.json();
//       setLoading(false);

//       setConfirmedBooking({
//         bookingId: data.bookingId,
//         date: format(selectedDate, "MMMM dd, yyyy"),
//         time: selectedTime,
//         email,
//         timezone: userTimezone,
//         link: data.googleCalendarLink,
//       });

//       setSuccess(true); // 👈 ONLY show modal
//     } catch (error) {
//       setLoading(false);
//       console.error("Booking error:", error);
//     }
//   };

//   useEffect(() => {
//     const loadBookings = async () => {
//       const response = await fetch(
//         `http://localhost:5000/api/bookings/date/${format(
//           selectedDate,
//           "yyyy-MM-dd"
//         )}`
//       );

//       const data = await response.json();
//       setBookedTimes(data.bookedTimes || []);
//     };

//     loadBookings();
//   }, [selectedDate, refreshKey]);

//   const isToday =
//     format(selectedDate, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");

//   const currentTime = new Date().toTimeString().slice(0, 5);

//   return (
//     <>
//       <div className="bg-[#020617] border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-2">Book a Consultation</h2>

//         <p className="text-gray-400 mb-4">
//           Times shown in your timezone: <b>{userTimezone}</b>
//         </p>

//         <p className="text-gray-400 mb-8">30-minute strategy call</p>

//         {/* Calendar + Time */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Calendar */}
//           <div>
//             <div className="flex justify-between items-center mb-4">
//               <button
//                 onClick={() => setWeekOffset(weekOffset - 1)}
//                 className="text-gray-400 hover:text-white"
//               >
//                 ←
//               </button>
//               <span className="font-semibold">
//                 {format(start, "MMMM yyyy")}
//               </span>
//               <button
//                 onClick={() => setWeekOffset(weekOffset + 1)}
//                 className="text-gray-400 hover:text-white"
//               >
//                 →
//               </button>
//             </div>

//             <div className="grid grid-cols-7 gap-2">
//               {days.map((day) => {
//                 const active =
//                   format(day, "yyyy-MM-dd") ===
//                   format(selectedDate, "yyyy-MM-dd");

//                 const isPastDate = day < today;

//                 return (
//                   <button
//                     key={day}
//                     disabled={isPastDate}
//                     onClick={() => {
//                       setSelectedDate(day);
//                       setSelectedTime("");
//                     }}
//                     className={`p-3 rounded-lg text-sm transition
//                       ${
//                         isPastDate
//                           ? "opacity-20 cursor-not-allowed"
//                           : active
//                           ? "bg-blue-600 text-white"
//                           : "bg-white/5 hover:bg-white/10"
//                       }`}
//                   >
//                     <div className="font-medium">{format(day, "EEE")}</div>
//                     <div className="text-xs opacity-70">
//                       {format(day, "dd")}
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Time slots */}
//           <div>
//             <p className="font-semibold mb-4">Available Times</p>

//             <div className="grid grid-cols-2 gap-3">
//               {TIMES.map((t) => (
//                 <button
//                   key={t}
//                   disabled={
//                     bookedTimes.includes(t) || (isToday && t <= currentTime)
//                   }
//                   onClick={() => setSelectedTime(t)}
//                   className={`py-3 rounded-lg border transition
//                     ${
//                       bookedTimes.includes(t) || (isToday && t <= currentTime)
//                         ? "opacity-30 cursor-not-allowed"
//                         : selectedTime === t
//                         ? "bg-blue-600 border-blue-500"
//                         : "border-white/10 hover:border-blue-400"
//                     }`}
//                 >
//                   {bookedTimes.includes(t)
//                     ? `${t} (Booked)`
//                     : isToday && t <= currentTime
//                     ? `${t} (Past)`
//                     : t}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Email */}
//         <div className="mt-8">
//           <label className="text-sm text-gray-400">Email address</label>
//           <input
//             type="email"
//             className="w-full mt-2 px-4 py-3 rounded-lg
//             bg-black/40 border border-white/10
//             focus:border-blue-500 outline-none"
//             placeholder="you@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-end gap-4 mt-8">
//           <button className="px-6 py-3 rounded-lg border border-white/20">
//             Cancel
//           </button>
//           <button
//             onClick={submitBooking}
//             disabled={loading}
//             className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500"
//           >
//             {loading ? "Booking..." : "Confirm Booking"}
//           </button>
//         </div>
//       </div>

//       {/* SUCCESS POPUP */}
//       {success && confirmedBooking && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//           <div className="bg-white text-black p-8 rounded-2xl shadow-2xl w-[400px] text-center animate-fade-in">
//             <div className="text-4xl mb-4">🎉</div>

//             <h3 className="text-2xl font-bold mb-2">Booking Confirmed!</h3>

//             <p className="text-gray-600 mb-6">
//               Your consultation call has been scheduled.
//             </p>

//             <div className="bg-gray-100 p-4 rounded-xl text-left mb-6">
//               <p>
//                 <b>Date:</b> {confirmedBooking.date}
//               </p>
//               <p>
//                 <b>Time:</b> {confirmedBooking.time}
//               </p>
//               <p>
//                 <b>Timezone:</b> {confirmedBooking.timezone}
//               </p>
//               <p>
//                 <b>Email:</b> {confirmedBooking.email}
//               </p>
//             </div>

//             <button
//               onClick={() => {
//                 alert("✅ Booking confirmed! Adding to Google Calendar…");
//                 window.open(confirmedBooking.link, "_blank");

//                 // Close modal
//                 setSuccess(false);

//                 // Reset selection
//                 setSelectedTime("");
//                 setEmail("");

//                 // Trigger refresh

//                 setRefreshKey((prev) => prev + 1);
//               }}
//               className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg mb-3"
//             >
//               📅 Add to Google Calendar
//             </button>

//             <button
//               onClick={() => {
//                 setSuccess(false);
//                 setSelectedTime("");
//                 setEmail("");

//                 setRefreshKey((prev) => prev + 1);
//               }}
//               className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 text-white rounded-lg"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

//----------------------------------------------------------------
// Edited Code with Phone Number Field and SMS Integration
//----------------------------------------------------------------

//============== Version 2 ==================

// import React, { useEffect, useState, useRef } from "react";
// import { addDays, format, startOfWeek, addWeeks, isSameDay } from "date-fns";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Calendar,
//   Clock,
//   ChevronLeft,
//   ChevronRight,
//   CheckCircle2,
//   Globe,
//   Send,
// } from "lucide-react";

// const TIMES = [
//   "09:00",
//   "09:30",
//   "10:00",
//   "10:30",
//   "11:00",
//   "11:30",
//   "14:00",
//   "14:30",
//   "15:00",
//   "15:30",
// ];

// export default function BookingCalendar() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState("");
//   const [email, setEmail] = useState("");
//   const [weekOffset, setWeekOffset] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [bookedTimes, setBookedTimes] = useState([]);
//   const [success, setSuccess] = useState(false);
//   const [confirmedBooking, setConfirmedBooking] = useState(null);
//   const [refreshKey, setRefreshKey] = useState(0);

//   const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
//   const start = startOfWeek(addWeeks(new Date(), weekOffset), {
//     weekStartsOn: 1,
//   });
//   const today = new Date();
//   today.setHours(0, 0, 0, 0);

//   const days = Array.from({ length: 7 }).map((_, i) => addDays(start, i));

//   // Fetching Logic
//   useEffect(() => {
//     const loadBookings = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/bookings/date/${format(
//             selectedDate,
//             "yyyy-MM-dd"
//           )}`
//         );
//         const data = await response.json();
//         setBookedTimes(data.bookedTimes || []);
//       } catch (e) {
//         console.error("Network Error");
//       }
//     };
//     loadBookings();
//   }, [selectedDate, refreshKey]);

//   const submitBooking = async () => {
//     if (!selectedDate || !selectedTime || !email) return;
//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:5000/api/bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           date: format(selectedDate, "yyyy-MM-dd"),
//           time: selectedTime,
//           email,
//           timezone: userTimezone,
//         }),
//       });
//       const data = await response.json();
//       setConfirmedBooking({
//         bookingId: data.bookingId,
//         date: format(selectedDate, "MMMM dd, yyyy"),
//         time: selectedTime,
//         email,
//         timezone: userTimezone,
//         link: data.googleCalendarLink,
//       });
//       setSuccess(true);
//     } catch (error) {
//       console.error("Booking error:", error);
//     }
//     setLoading(false);
//   };

//   const isToday = isSameDay(selectedDate, new Date());
//   const currentTime = new Date().toTimeString().slice(0, 5);

//   return (
//     <div className="relative w-full max-w-5xl mx-auto py-12 px-4 md:px-0">
//       <div className="bg-[#050505] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl backdrop-blur-xl">
//         {/* HEADER SECTION */}
//         <div className="p-8 border-b border-white/5 bg-white/[0.02] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
//           <div>
//             <h2 className="text-4xl font-bold tracking-tighter text-white uppercase italic">
//               Schedule <span className="hollow-text">Protocol</span>
//             </h2>
//             <p className="text-slate-500 font-mono text-xs mt-2 uppercase tracking-widest flex items-center gap-2">
//               <Globe size={14} className="text-blue-500" /> {userTimezone}
//             </p>
//           </div>
//           <div className="text-right hidden md:block">
//             <p className="text-white text-lg font-bold uppercase tracking-tight">
//               30-Min Strategy Call
//             </p>
//             <p className="text-slate-500 font-mono text-[10px] uppercase">
//               Slot Deployment // Phase 01
//             </p>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-12">
//           {/* LEFT: DATE PICKER */}
//           <div className="lg:col-span-7 p-8 border-r border-white/5">
//             <div className="flex justify-between items-center mb-8">
//               <h3 className="font-mono text-[10px] text-blue-500 uppercase tracking-[0.3em]">
//                 Select Date
//               </h3>
//               <div className="flex gap-2">
//                 <NavBtn
//                   onClick={() => setWeekOffset((prev) => prev - 1)}
//                   icon={<ChevronLeft size={18} />}
//                 />
//                 <span className="text-white font-bold min-w-[120px] text-center">
//                   {format(start, "MMMM yyyy")}
//                 </span>
//                 <NavBtn
//                   onClick={() => setWeekOffset((prev) => prev + 1)}
//                   icon={<ChevronRight size={18} />}
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-7 gap-3">
//               {days.map((day, idx) => {
//                 const active = isSameDay(day, selectedDate);
//                 const isPastDate = day < today;
//                 return (
//                   <motion.button
//                     key={idx}
//                     whileHover={!isPastDate ? { scale: 1.05, y: -2 } : {}}
//                     whileTap={!isPastDate ? { scale: 0.95 } : {}}
//                     disabled={isPastDate}
//                     onClick={() => {
//                       setSelectedDate(day);
//                       setSelectedTime("");
//                     }}
//                     className={`relative p-4 rounded-2xl flex flex-col items-center transition-all duration-300 border
//                       ${
//                         isPastDate
//                           ? "opacity-10 cursor-not-allowed border-transparent"
//                           : active
//                           ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
//                           : "bg-white/[0.03] border-white/10 hover:border-white/30"
//                       }`}
//                   >
//                     <span
//                       className={`text-[10px] font-mono uppercase mb-1 ${
//                         active ? "text-black/60" : "text-slate-500"
//                       }`}
//                     >
//                       {format(day, "EEE")}
//                     </span>
//                     <span className="text-xl font-bold tracking-tighter">
//                       {format(day, "dd")}
//                     </span>
//                     {active && (
//                       <motion.div
//                         layoutId="dot"
//                         className="absolute -bottom-1 w-1 h-1 bg-black rounded-full"
//                       />
//                     )}
//                   </motion.button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* RIGHT: TIME SLOTS */}
//           <div className="lg:col-span-5 p-8 bg-white/[0.01]">
//             <h3 className="font-mono text-[10px] text-blue-500 uppercase tracking-[0.3em] mb-8">
//               Available Uplinks
//             </h3>
//             <div className="grid grid-cols-2 gap-3 overflow-y-auto max-h-[350px] pr-2 custom-scrollbar">
//               {TIMES.map((t) => {
//                 const isBooked = bookedTimes.includes(t);
//                 const isPast = isToday && t <= currentTime;
//                 const isDisabled = isBooked || isPast;
//                 const isSelected = selectedTime === t;

//                 return (
//                   <button
//                     key={t}
//                     disabled={isDisabled}
//                     onClick={() => setSelectedTime(t)}
//                     className={`group relative py-4 rounded-xl font-mono text-sm transition-all duration-500 border
//                       ${
//                         isDisabled
//                           ? "opacity-20 cursor-not-allowed grayscale"
//                           : isSelected
//                           ? "bg-blue-600 border-blue-400 text-white"
//                           : "bg-white/5 border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5"
//                       }`}
//                   >
//                     {isSelected && (
//                       <motion.div
//                         layoutId="glow"
//                         className="absolute inset-0 bg-blue-500/20 blur-md rounded-xl"
//                       />
//                     )}
//                     <span className="relative z-10">
//                       {isBooked ? "BOOKED" : isPast ? "EXPIRED" : t}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM: EMAIL & ACTION */}
//         <div className="p-8 border-t border-white/5 bg-white/[0.02] flex flex-col md:flex-row items-end gap-6">
//           <div className="w-full relative group">
//             <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1 mb-2 block group-focus-within:text-blue-500 transition-colors">
//               Operator Email Address
//             </label>
//             <div className="relative">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="USER@DOMAIN.COM"
//                 className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all font-mono"
//               />
//               <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none opacity-20 group-focus-within:opacity-100 transition-opacity">
//                 <Send size={18} className="text-blue-500" />
//               </div>
//             </div>
//           </div>

//           <button
//             onClick={submitBooking}
//             disabled={loading || !selectedTime || !email}
//             className="w-full md:w-auto min-w-[200px] h-[58px] rounded-xl bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all duration-500 disabled:opacity-20 disabled:grayscale"
//           >
//             {loading ? "Syncing..." : "Confirm Protocol"}
//           </button>
//         </div>
//       </div>

//       {/* SUCCESS MODAL (AWARD-WINNING STYLE) */}
//       <AnimatePresence>
//         {success && confirmedBooking && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-[100] p-6"
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               className="bg-[#0c0c0c] border border-white/10 p-10 rounded-[40px] max-w-md w-full text-center relative overflow-hidden"
//             >
//               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

//               <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-500">
//                 <CheckCircle2 size={40} />
//               </div>

//               <h3 className="text-3xl font-bold text-white mb-2 uppercase italic tracking-tighter">
//                 Transmission Confirmed
//               </h3>
//               <p className="text-slate-500 text-sm mb-8 font-mono tracking-wide">
//                 Uplink established successfully.
//               </p>

//               <div className="bg-white/5 rounded-2xl p-6 text-left space-y-3 border border-white/5 mb-8">
//                 <DetailRow label="Phase" value="Strategy Consultation" />
//                 <DetailRow
//                   label="Temporal"
//                   value={`${confirmedBooking.date} @ ${confirmedBooking.time}`}
//                 />
//                 <DetailRow label="Coordinate" value={confirmedBooking.email} />
//               </div>

//               <div className="flex flex-col gap-3">
//                 <button
//                   onClick={() => window.open(confirmedBooking.link, "_blank")}
//                   className="w-full py-4 bg-white text-black rounded-xl font-bold uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform"
//                 >
//                   📅 Add to Calendar
//                 </button>
//                 <button
//                   onClick={() => {
//                     setSuccess(false);
//                     setRefreshKey((k) => k + 1);
//                   }}
//                   className="w-full py-4 bg-white/5 text-white/50 rounded-xl font-mono text-[10px] uppercase tracking-widest hover:text-white transition-colors"
//                 >
//                   [ Terminate Session ]
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// // Sub-components for cleaner code
// const NavBtn = ({ onClick, icon }) => (
//   <button
//     onClick={onClick}
//     className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-400 transition-all duration-500"
//   >
//     {icon}
//   </button>
// );

// const DetailRow = ({ label, value }) => (
//   <div className="flex justify-between items-center border-b border-white/5 pb-2">
//     <span className="text-[10px] font-mono text-slate-500 uppercase">
//       {label}
//     </span>
//     <span className="text-sm text-white font-medium">{value}</span>
//   </div>
// );

//==============End of version 2 ==================
//================================================
//=================================================

//  frontend with twilio sms later
// import { useEffect, useState } from "react";
// import { addDays, format, startOfWeek, addWeeks } from "date-fns";

// const TIMES = [
//   "09:00",
//   "09:30",
//   "10:00",
//   "10:30",
//   "11:00",
//   "11:30",
//   "14:00",
//   "14:30",
//   "15:00",
//   "15:30",
// ];

// export default function BookingCalendar() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState(""); // ⬅ NEW PHONE FIELD
//   const [weekOffset, setWeekOffset] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [bookedTimes, setBookedTimes] = useState([]);
//   const [success, setSuccess] = useState(false);
//   const [confirmedBooking, setConfirmedBooking] = useState(null);
//   const [refreshKey, setRefreshKey] = useState(0);

//   const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

//   const start = startOfWeek(addWeeks(new Date(), weekOffset), {
//     weekStartsOn: 1,
//   });

//   const today = new Date();
//   today.setHours(0, 0, 0, 0);

//   const days = Array.from({ length: 7 }).map((_, i) => addDays(start, i));

//   const submitBooking = async () => {
//     if (!selectedDate || !selectedTime || !email) return;

//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/api/bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           date: format(selectedDate, "yyyy-MM-dd"),
//           time: selectedTime,
//           email,
//           phone, // ⬅ SEND PHONE TO BACKEND
//           timezone: userTimezone,
//         }),
//       });

//       const data = await response.json();
//       setLoading(false);

//       setConfirmedBooking({
//         bookingId: data.bookingId,
//         date: format(selectedDate, "MMMM dd, yyyy"),
//         time: selectedTime,
//         email,
//         phone,
//         timezone: userTimezone,
//         link: data.googleCalendarLink,
//       });

//       setSuccess(true);

//     } catch (error) {
//       setLoading(false);
//       console.error("Booking error:", error);
//     }
//   };

//   useEffect(() => {
//     const loadBookings = async () => {
//       const response = await fetch(
//         `http://localhost:5000/api/bookings/date/${format(
//           selectedDate,
//           "yyyy-MM-dd"
//         )}`
//       );

//       const data = await response.json();
//       setBookedTimes(data.bookedTimes || []);
//     };

//     loadBookings();
//   }, [selectedDate, refreshKey]);

//   const isToday =
//     format(selectedDate, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");

//   const currentTime = new Date().toTimeString().slice(0, 5);

//   return (
//     <>
//       <div className="bg-[#020617] border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-2">Book a Consultation</h2>

//         <p className="text-gray-400 mb-4">
//           Times shown in your timezone: <b>{userTimezone}</b>
//         </p>

//         <p className="text-gray-400 mb-8">30-minute strategy call</p>

//         {/* Calendar + Time */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Calendar */}
//           <div>
//             <div className="flex justify-between items-center mb-4">
//               <button
//                 onClick={() => setWeekOffset(weekOffset - 1)}
//                 className="text-gray-400 hover:text-white"
//               >
//                 ←
//               </button>
//               <span className="font-semibold">
//                 {format(start, "MMMM yyyy")}
//               </span>
//               <button
//                 onClick={() => setWeekOffset(weekOffset + 1)}
//                 className="text-gray-400 hover:text-white"
//               >
//                 →
//               </button>
//             </div>

//             <div className="grid grid-cols-7 gap-2">
//               {days.map((day) => {
//                 const active =
//                   format(day, "yyyy-MM-dd") ===
//                   format(selectedDate, "yyyy-MM-dd");

//                 const isPastDate = day < today;

//                 return (
//                   <button
//                     key={day}
//                     disabled={isPastDate}
//                     onClick={() => {
//                       setSelectedDate(day);
//                       setSelectedTime("");
//                     }}
//                     className={`p-3 rounded-lg text-sm transition
//                       ${
//                         isPastDate
//                           ? "opacity-20 cursor-not-allowed"
//                           : active
//                           ? "bg-blue-600 text-white"
//                           : "bg-white/5 hover:bg-white/10"
//                       }`}
//                   >
//                     <div className="font-medium">{format(day, "EEE")}</div>
//                     <div className="text-xs opacity-70">
//                       {format(day, "dd")}
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Time slots */}
//           <div>
//             <p className="font-semibold mb-4">Available Times</p>

//             <div className="grid grid-cols-2 gap-3">
//               {TIMES.map((t) => (
//                 <button
//                   key={t}
//                   disabled={
//                     bookedTimes.includes(t) || (isToday && t <= currentTime)
//                   }
//                   onClick={() => setSelectedTime(t)}
//                   className={`py-3 rounded-lg border transition
//                     ${
//                       bookedTimes.includes(t) || (isToday && t <= currentTime)
//                         ? "opacity-30 cursor-not-allowed"
//                         : selectedTime === t
//                         ? "bg-blue-600 border-blue-500"
//                         : "border-white/10 hover:border-blue-400"
//                     }`}
//                 >
//                   {bookedTimes.includes(t)
//                     ? `${t} (Booked)`
//                     : isToday && t <= currentTime
//                     ? `${t} (Past)`
//                     : t}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Email */}
//         <div className="mt-8">
//           <label className="text-sm text-gray-400">Email address</label>
//           <input
//             type="email"
//             className="w-full mt-2 px-4 py-3 rounded-lg
//             bg-black/40 border border-white/10
//             focus:border-blue-500 outline-none"
//             placeholder="you@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         {/* Phone number */}
//         <div className="mt-4">
//           <label className="text-sm text-gray-400">Phone number</label>
//           <input
//             type="tel"
//             className="w-full mt-2 px-4 py-3 rounded-lg
//             bg-black/40 border border-white/10
//             focus:border-blue-500 outline-none"
//             placeholder="+123456789"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-end gap-4 mt-8">
//           <button className="px-6 py-3 rounded-lg border border-white/20">
//             Cancel
//           </button>
//           <button
//             onClick={submitBooking}
//             disabled={loading}
//             className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500"
//           >
//             {loading ? "Booking..." : "Confirm Booking"}
//           </button>
//         </div>
//       </div>

//       {/* SUCCESS POPUP */}
//       {success && confirmedBooking && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//           <div className="bg-white text-black p-8 rounded-2xl shadow-2xl w-[400px] text-center animate-fade-in">
//             <div className="text-4xl mb-4">🎉</div>

//             <h3 className="text-2xl font-bold mb-2">Booking Confirmed!</h3>

//             <p className="text-gray-600 mb-6">
//               Your consultation call has been scheduled.
//             </p>

//             <div className="bg-gray-100 p-4 rounded-xl text-left mb-6">
//               <p>
//                 <b>Date:</b> {confirmedBooking.date}
//               </p>
//               <p>
//                 <b>Time:</b> {confirmedBooking.time}
//               </p>
//               <p>
//                 <b>Timezone:</b> {confirmedBooking.timezone}
//               </p>
//               <p>
//                 <b>Email:</b> {confirmedBooking.email}
//               </p>
//               <p>
//                 <b>Phone:</b> {confirmedBooking.phone}
//               </p>
//             </div>

//             <button
//               onClick={() => {
//                 alert("📅 Opening Google Calendar…");
//                 window.open(confirmedBooking.link, "_blank");

//                 setSuccess(false);
//                 setSelectedTime("");
//                 setEmail("");
//                 setPhone("");

//                 setRefreshKey((prev) => prev + 1);
//               }}
//               className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg mb-3"
//             >
//               📅 Add to Google Calendar
//             </button>

//             <button
//               onClick={() => {
//                 setSuccess(false);
//                 setSelectedTime("");
//                 setEmail("");
//                 setPhone("");

//                 setRefreshKey((prev) => prev + 1);
//               }}
//               className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 text-white rounded-lg"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

//===========================================================
//===========END OF VERSION 3 ==========================
//===========================================================

//===========================================================
//=================== Version 4 =========================
//===========================================================

// import React, { useEffect, useState } from "react";
// import { addDays, format, startOfWeek, addWeeks, isSameDay } from "date-fns";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, Globe } from "lucide-react";

// import { TIMES } from "../../constants/time";
// import { createBooking, fetchBookedTimes } from "../../api/booking.api";

// import PendingPaymentModal from "./PendingPaymentModal";
// import NavBtn from "../ui/NavBtn";

// /* ======================================================
//    BOOKING CALENDAR
// ====================================================== */
// export default function BookingCalendar() {
//   /* -------------------- STATE -------------------- */
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState("");
//   const [email, setEmail] = useState("");
//   const [weekOffset, setWeekOffset] = useState(0);
//   const [loading, setLoading] = useState(false);

//   // const [bookedTimes, setBookedTimes] = useState([]);
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
//     const data = await fetchBookedTimes(format(selectedDate, "yyyy-MM-dd"));
//     setSlots(data.slots || []);
//   };

//   useEffect(() => {
//     loadBookedSlots();
//   }, [selectedDate]);

//   /* -------------------- SUBMIT BOOKING -------------------- */
//   const submitBooking = async () => {
//     if (!selectedTime || !email) return;

//     setLoading(true);

//     try {
//       const data = await createBooking({
//         date: format(selectedDate, "yyyy-MM-dd"),
//         time: selectedTime,
//         email,
//         timezone,
//       });

//       // ✅ REQUIRED NORMALIZED SHAPE
//       setPendingBooking({
//         id: data.bookingId,
//         expiresAt: data.expiresAt,
//       });
//     } catch (err) {
//       console.error("Booking failed:", err);
//     }

//     setLoading(false);
//   };

//   /* -------------------- TIME RULES -------------------- */
//   const isToday = isSameDay(selectedDate, new Date());
//   const currentTime = new Date().toTimeString().slice(0, 5);

//   /* ======================================================
//      RENDER
//   ======================================================= */
//   return (
//     <div className="relative w-full max-w-5xl mx-auto py-12 px-4">
//       <div className="bg-[#050505] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
//         {/* ---------- HEADER ---------- */}
//         <div className="p-8 border-b border-white/5 flex justify-between items-center">
//           <div>
//             <h2 className="text-4xl font-bold uppercase italic text-white">
//               Schedule <span className="text-blue-500">Protocol</span>
//             </h2>
//             <p className="text-xs font-mono text-slate-500 mt-2 flex items-center gap-2">
//               <Globe size={14} /> {timezone}
//             </p>
//           </div>

//           <div className="hidden md:block text-right">
//             <p className="text-white font-bold">30-Min Strategy Call</p>
//             <p className="text-xs text-slate-500 font-mono">
//               Phase-01 Deployment
//             </p>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-12">
//           {/* ---------- DATE PICKER ---------- */}
//           <div className="lg:col-span-7 p-8 border-r border-white/5">
//             <div className="flex justify-between items-center mb-8">
//               <h3 className="text-xs font-mono text-blue-500 uppercase">
//                 Select Date
//               </h3>

//               <div className="flex gap-2 items-center">
//                 <NavBtn
//                   icon={<ChevronLeft size={18} />}
//                   onClick={() => setWeekOffset((p) => p - 1)}
//                 />

//                 <span className="text-white font-bold min-w-[120px] text-center">
//                   {format(start, "MMMM yyyy")}
//                 </span>

//                 <NavBtn
//                   icon={<ChevronRight size={18} />}
//                   onClick={() => setWeekOffset((p) => p + 1)}
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-7 gap-3">
//               {days.map((day, i) => {
//                 const active = isSameDay(day, selectedDate);
//                 const isPast = day < today;

//                 return (
//                   <motion.button
//                     key={i}
//                     disabled={isPast}
//                     whileHover={!isPast ? { scale: 1.05 } : {}}
//                     onClick={() => {
//                       setSelectedDate(day);
//                       setSelectedTime("");
//                     }}
//                     className={`p-4 rounded-2xl border transition
//                       ${
//                         isPast
//                           ? "opacity-10 cursor-not-allowed"
//                           : active
//                           ? "bg-white text-black"
//                           : "bg-white/5 text-white hover:border-blue-500"
//                       }`}
//                   >
//                     <span className="text-xs font-mono uppercase">
//                       {format(day, "EEE")}
//                     </span>
//                     <div className="text-xl font-bold">{format(day, "dd")}</div>
//                   </motion.button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* ---------- TIME SLOTS ---------- */}
//           <div className="lg:col-span-5 p-8 bg-white/[0.01]">
//             <h3 className="text-xs font-mono text-blue-500 uppercase mb-8">
//               Available Slots
//             </h3>

//             <div className="grid grid-cols-2 gap-3 max-h-[360px] overflow-y-auto">
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
//                     className={`py-4 rounded-xl font-mono text-sm border transition
//         ${
//           isConfirmed
//             ? "opacity-30 cursor-not-allowed bg-white/10"
//             : isPending
//             ? "opacity-40 cursor-wait border-yellow-500/40 text-yellow-400"
//             : selectedTime === t
//             ? "bg-blue-600 text-white"
//             : "bg-white/5 hover:border-blue-500"
//         }
//       `}
//                   >
//                     {isConfirmed
//                       ? "BOOKED"
//                       : isPending
//                       ? "PENDING"
//                       : past
//                       ? "EXPIRED"
//                       : t}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* ---------- EMAIL + ACTION ---------- */}
//         <div className="p-8 border-t border-white/5 flex flex-col md:flex-row gap-6">
//           <input
//             type="email"
//             placeholder="user@email.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="flex-1 bg-white/5 px-6 py-4 rounded-xl text-white"
//           />

//           <button
//             onClick={submitBooking}
//             disabled={loading || !selectedTime || !email}
//             className="min-w-[220px] bg-white text-black rounded-xl font-bold uppercase tracking-widest text-xs"
//           >
//             {loading ? "Processing..." : "Proceed to Payment"}
//           </button>
//         </div>
//       </div>

//       {/* ---------- PENDING PAYMENT MODAL ---------- */}
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

//===========================================================
//=================== END OF VERSION 4 =========================
//===========================================================

//===========================================================
//=================== Version 5 =========================
//===========================================================

import React, { useEffect, useState } from "react";
import { addDays, format, startOfWeek, addWeeks, isSameDay } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe } from "lucide-react";

import { TIMES } from "../../constants/time";
import { createBooking, fetchBookedTimes } from "../../api/booking.api";

import PendingPaymentModal from "./PendingPaymentModal";
import NavBtn from "../ui/NavBtn";

/**
 * @param {string} serviceTitle - Dynamic title passed from the parent selection
 * @param {boolean} isEmbedded - If true, removes outer borders/bg to fit split-panel
 */
export default function BookingCalendar({ serviceTitle, isEmbedded = false }) {
  /* -------------------- STATE -------------------- */
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [email, setEmail] = useState("");
  const [weekOffset, setWeekOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [slots, setSlots] = useState([]);
  const [pendingBooking, setPendingBooking] = useState(null);

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  /* -------------------- DATE LOGIC -------------------- */
  const start = startOfWeek(addWeeks(new Date(), weekOffset), {
    weekStartsOn: 1,
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days = Array.from({ length: 7 }).map((_, i) => addDays(start, i));

  /* -------------------- FETCH BOOKED SLOTS -------------------- */
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

  /* -------------------- SUBMIT BOOKING -------------------- */
  const submitBooking = async () => {
    if (!selectedTime || !email) return;
    setLoading(true);
    try {
      const data = await createBooking({
        date: format(selectedDate, "yyyy-MM-dd"),
        time: selectedTime,
        email,
        timezone,
      });

      setPendingBooking({
        id: data.bookingId,
        expiresAt: data.expiresAt,
      });
    } catch (err) {
      console.error("Booking failed:", err);
    }
    setLoading(false);
  };

  const isToday = isSameDay(selectedDate, new Date());
  const currentTime = new Date().toTimeString().slice(0, 5);

  return (
    <div
      className={`relative w-full h-full flex flex-col transition-all duration-700 ${
        isEmbedded ? "p-0 bg-transparent" : "max-w-5xl mx-auto py-12 px-4"
      }`}
    >
      <div
        className={`flex-1 flex flex-col h-full ${
          isEmbedded
            ? "bg-transparent border-none"
            : "bg-[#050505] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl"
        }`}
      >
        {/* ---------- HEADER ---------- */}
        <div className="p-8 border-b border-white/5 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-black uppercase italic text-white tracking-tighter">
              Schedule{" "}
              <span className="text-blue-500 font-outline-1">Protocol</span>
            </h2>
            <p className="text-[9px] font-mono text-slate-500 mt-1 flex items-center gap-2 uppercase tracking-widest">
              <Globe size={12} className="text-blue-500/50" /> {timezone}
            </p>
          </div>

          <div className="hidden md:block text-right">
            <AnimatePresence mode="wait">
              <motion.p
                key={serviceTitle}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-white font-bold italic uppercase text-sm tracking-tight"
              >
                {serviceTitle}
              </motion.p>
            </AnimatePresence>
            <p className="text-[9px] text-slate-500 font-mono uppercase tracking-tighter">
              Phase-01 Deployment
            </p>
          </div>
        </div>

        <div className="flex-1 grid lg:grid-cols-12 overflow-hidden">
          {/* ---------- DATE PICKER (Left Side of internal grid) ---------- */}
          <div className="lg:col-span-7 p-8 border-r border-white/5 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.2em]">
                01. Select_Date
              </h3>

              <div className="flex gap-4 items-center">
                <NavBtn
                  icon={<ChevronLeft size={16} />}
                  onClick={() => setWeekOffset((p) => p - 1)}
                />
                <span className="text-white font-mono text-xs font-bold min-w-[100px] text-center uppercase tracking-widest">
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
                  <motion.button
                    key={i}
                    disabled={isPast}
                    // HIGH-END HOVER EFFECT
                    whileHover={
                      !isPast && !active
                        ? {
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            borderColor: "rgba(37, 99, 235, 0.5)",
                            y: -2,
                          }
                        : {}
                    }
                    onClick={() => setSelectedDate(day)}
                    className={`relative flex flex-col items-center justify-center aspect-[4/5] rounded-2xl border transition-all duration-500
        ${isPast ? "opacity-10 grayscale cursor-not-allowed" : ""}
        ${
          active
            ? "bg-white text-black border-white shadow-[0_20px_40px_rgba(255,255,255,0.1)] scale-105 z-10"
            : "bg-transparent border-white/5 text-slate-400"
        }
      `}
                  >
                    {/* Visual indicator for active state */}
                    {active && (
                      <motion.div
                        layoutId="glow"
                        className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full -z-10"
                      />
                    )}

                    <span
                      className={`text-[8px] font-mono uppercase mb-2 ${
                        active ? "text-black/60" : "text-slate-600"
                      }`}
                    >
                      {format(day, "EEE")}
                    </span>
                    <span className="text-xl font-black italic tracking-tighter">
                      {format(day, "dd")}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* ---------- TIME SLOTS (Right Side of internal grid) ---------- */}
          <div className="lg:col-span-5 p-8 bg-black/20 overflow-y-auto">
            <h3 className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.2em] mb-8">
              02. Available_Slots
            </h3>

            <div className="grid grid-cols-2 gap-3 pb-4">
              {TIMES.map((t) => {
                const slot = slots.find((s) => s.time === t);
                const status = slot?.status || "AVAILABLE";
                const isPending = status === "PENDING_PAYMENT";
                const isConfirmed = status === "CONFIRMED";
                const past = isToday && t <= currentTime;
                const disabled = isPending || isConfirmed || past;

                return (
                  <button
                    key={t}
                    disabled={disabled}
                    onClick={() => setSelectedTime(t)}
                    className={`py-4 rounded-xl font-mono text-[11px] border transition-all duration-300
                      ${
                        isConfirmed
                          ? "opacity-20 cursor-not-allowed bg-white/5 border-transparent"
                          : isPending
                          ? "opacity-40 cursor-wait border-yellow-500/40 text-yellow-500 italic"
                          : selectedTime === t
                          ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                          : "bg-white/5 border-white/5 text-slate-300 hover:border-blue-500/50 hover:text-white"
                      }
                    `}
                  >
                    {isConfirmed
                      ? "BOOKED"
                      : isPending
                      ? "PENDING"
                      : past
                      ? "EXPIRED"
                      : t}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ---------- EMAIL + ACTION FOOTER ---------- */}
        <div className="p-8 border-t border-white/5 bg-black/40 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <input
              type="email"
              placeholder="TERMINAL_ID@EMAIL.COM"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white font-mono text-xs tracking-widest focus:outline-none focus:border-blue-500/50 transition-all placeholder:opacity-30"
            />
          </div>

          <button
            onClick={submitBooking}
            disabled={loading || !selectedTime || !email}
            className="w-full md:w-auto min-w-[240px] px-8 py-4 bg-white text-black rounded-xl font-black uppercase italic tracking-[0.2em] text-[11px] transition-all hover:bg-blue-500 hover:text-white disabled:opacity-20 disabled:hover:bg-white disabled:hover:text-black shadow-xl"
          >
            {loading ? "INITIALIZING..." : "EXECUTE_PAYMENT"}
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
