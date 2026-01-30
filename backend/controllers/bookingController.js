
import mongoose from "mongoose";
import Booking from "../models/bookingModel.js";
import { calendar } from "../config/calendar.js";

/**
 * ================================
 * CREATE TEMPORARY BOOKING HOLD
 * ================================
 * - 3 minutes expiration
 * - NO email
 * - NO calendar
 * - Blocks slot immediately
 */
export const createBookingHold = async (req, res) => {
    try {
        const { serviceId, date, time, email, timezone } = req.body;

        if (!serviceId || !date || !time || !email) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // ⛔ Prevent double booking
        const conflict = await Booking.findOne({
            date,
            time,
            status: { $in: ["HOLD", "CONFIRMED"] },
            expiresAt: { $gt: new Date() },
        });

        if (conflict) {
            return res.status(409).json({ error: "Slot already reserved" });
        }

        // ⏱️ 15-minute hold
        const expiresAt = new Date(Date.now() + 3 * 60 * 1000);

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
        console.error("Create hold error:", err);
        res.status(500).json({ error: "Failed to create booking hold" });
    }
};

/**
 * ================================
 * GET BOOKED TIMES (PER DATE)
 * ================================
 * - Includes HOLD + CONFIRMED
 * - Excludes expired holds
 */
export const getBookedTimes = async (req, res) => {
    try {
        const { date } = req.params;

        const bookings = await Booking.find({
            date,
            status: { $in: ["HOLD", "CONFIRMED"] },
            expiresAt: { $gt: new Date() },
        });

        res.json({
            slots: bookings.map((b) => b.time),
        });
    } catch (err) {
        console.error("Get booked times error:", err);
        res.status(500).json({ error: "Failed to fetch booked times" });
    }
};

/**
 * ================================
 * CANCEL CONFIRMED BOOKING
 * ================================
 * - Used ONLY from email cancel link
 * - Deletes Google Calendar event if exists
 */
export const cancelBooking = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid booking id" });
        }

        const booking = await Booking.findById(id);
        if (!booking) {
            return res.status(404).json({ error: "Booking not found" });
        }

        // Remove calendar event if confirmed
        if (booking.googleEventId) {
            await calendar.events.delete({
                calendarId: "primary",
                eventId: booking.googleEventId,
            });
        }

        await booking.deleteOne();

        res.json({ success: true });
    } catch (err) {
        console.error("Cancel booking error:", err);
        res.status(500).json({ error: "Failed to cancel booking" });
    }
};
