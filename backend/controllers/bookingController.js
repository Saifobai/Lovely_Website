
// import mongoose from "mongoose";
// import Booking from "../models/bookingModel.js";
// import { calendar } from "../config/calendar.js";

// /**
//  * ================================
//  * CREATE TEMPORARY BOOKING HOLD
//  * ================================
//  * - 3 minutes expiration
//  * - NO email
//  * - NO calendar
//  * - Blocks slot immediately
//  */
// export const createBookingHold = async (req, res) => {
//     try {
//         const { serviceId, date, time, email, timezone } = req.body;

//         if (!serviceId || !date || !time || !email) {
//             return res.status(400).json({ error: "Missing required fields" });
//         }

//         // ⛔ Prevent double booking
//         const conflict = await Booking.findOne({
//             date,
//             time,
//             status: { $in: ["HOLD", "CONFIRMED"] },
//             expiresAt: { $gt: new Date() },
//         });

//         if (conflict) {
//             return res.status(409).json({ error: "Slot already reserved" });
//         }

//         // ⏱️ 15-minute hold
//         const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

//         const booking = await Booking.create({
//             serviceId,
//             date,
//             time,
//             email,
//             timezone,
//             expiresAt,
//             status: "HOLD",
//         });

//         res.json({
//             bookingId: booking._id,
//             expiresAt,
//         });
//     } catch (err) {
//         console.error("Create hold error:", err);
//         res.status(500).json({ error: "Failed to create booking hold" });
//     }
// };

// /**
//  * ================================
//  * GET BOOKED TIMES (PER DATE)
//  * ================================
//  * - Includes HOLD + CONFIRMED
//  * - Excludes expired holds
//  */
// export const getBookedTimes = async (req, res) => {
//     try {
//         const { date } = req.params;

//         const bookings = await Booking.find({
//             date,
//             status: { $in: ["HOLD", "CONFIRMED"] },
//             expiresAt: { $gt: new Date() },
//         });

//         res.json({
//             slots: bookings.map((b) => b.time),
//         });
//     } catch (err) {
//         console.error("Get booked times error:", err);
//         res.status(500).json({ error: "Failed to fetch booked times" });
//     }
// };

// /**
//  * ================================
//  * CANCEL CONFIRMED BOOKING
//  * ================================
//  * - Used ONLY from email cancel link
//  * - Deletes Google Calendar event if exists
//  */
// export const cancelBooking = async (req, res) => {
//     try {
//         const { id } = req.params;

//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             return res.status(400).json({ error: "Invalid booking id" });
//         }

//         const booking = await Booking.findById(id);
//         if (!booking) {
//             return res.status(404).json({ error: "Booking not found" });
//         }

//         if (booking.status !== "CONFIRMED") {
//             return res.status(400).json({ error: "Booking not confirmed" });
//         }

//         const appointmentStart = new Date(
//             `${booking.date}T${booking.time}:00`
//         );

//         const cancelDeadline = new Date(
//             appointmentStart.getTime() - 24 * 60 * 60 * 1000
//         );

//         if (new Date() > cancelDeadline) {
//             return res.status(403).json({
//                 error: "Cancellation window closed (less than 24h remaining)",
//             });
//         }

//         // Remove Google Calendar event
//         if (booking.googleEventId) {
//             await calendar.events.delete({
//                 calendarId: "primary",
//                 eventId: booking.googleEventId,
//             });
//         }

//         booking.status = "CANCELLED";
//         await booking.save();

//         res.json({ success: true });
//     } catch (err) {
//         console.error("Cancel booking error:", err);
//         res.status(500).json({ error: "Failed to cancel booking" });
//     }
// };



// // controllers/bookingController.js
// export const getBookingById = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(400).json({ message: "Invalid booking id" });
//     }

//     const booking = await Booking.findById(id);
//     if (!booking) {
//         return res.status(404).json({ message: "Booking not found" });
//     }

//     res.json({ booking });
// };


//===================================================================
import mongoose from "mongoose";
import crypto from "crypto";
import Booking from "../models/bookingModel.js";
import { calendar } from "../config/calendar.js";

/* =========================
   CREATE HOLD (5 MIN)
========================= */
export const createBookingHold = async (req, res) => {
    try {
        const { serviceId, date, time, email, timezone } = req.body;

        if (!serviceId || !date || !time || !email || !timezone) {
            return res.status(400).json({ error: "Missing fields" });
        }

        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

        const booking = await Booking.create({
            serviceId,
            date,
            time,
            email,
            timezone,
            expiresAt,
            status: "HOLD",
        });

        res.json({
            bookingId: booking._id,
            expiresAt,
        });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({ error: "Slot already reserved" });
        }
        console.error(err);
        res.status(500).json({ error: "Failed to create hold" });
    }
};

/* =========================
   GET BOOKED TIMES
========================= */
export const getBookedTimes = async (req, res) => {
    const { date } = req.params;

    const bookings = await Booking.find({
        date,
        status: { $in: ["HOLD", "CONFIRMED"] },
        expiresAt: { $gt: new Date() },
    });

    res.json({
        slots: bookings.map((b) => ({
            time: b.time,
            status: b.status,
        })),
    });
};

/* =========================
   CANCEL BOOKING (TOKEN)
========================= */
export const cancelBooking = async (req, res) => {
    const { token } = req.params;

    const booking = await Booking.findOne({ cancelToken: token });
    if (!booking) return res.status(404).json({ error: "Invalid token" });

    if (booking.status !== "CONFIRMED") {
        return res.status(400).json({ error: "Not cancellable" });
    }

    const start = new Date(`${booking.date}T${booking.time}`);
    if (Date.now() > start.getTime() - 24 * 60 * 60 * 1000) {
        return res.status(403).json({ error: "Cancellation window closed" });
    }

    if (booking.googleEventId) {
        await calendar.events.delete({
            calendarId: "primary",
            eventId: booking.googleEventId,
        });
    }

    booking.status = "CANCELLED";
    await booking.save();

    res.json({ success: true });
};

/* =========================
   GET BOOKING
========================= */
export const getBookingById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid id" });
    }

    const booking = await Booking.findById(id);
    if (!booking) return res.status(404).json({ error: "Not found" });

    res.json({ booking });
};
