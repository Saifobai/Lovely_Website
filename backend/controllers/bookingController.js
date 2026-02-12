
import mongoose from "mongoose";
import crypto from "crypto";
import Booking from "../models/bookingModel.js";
import { calendar } from "../config/calendar.js";
import { getServiceById } from "../utils/getServiceById.js";

/* =========================
   CREATE HOLD (5 MIN)
========================= */
export const createBookingHold = async (req, res) => {
    try {
        const { serviceId, date, time, email, timezone } = req.body;

        if (!serviceId || !email) {
            return res.status(400).json({ error: "Missing fields" });
        }

        const service = getServiceById(serviceId);
        if (!service) {
            return res.status(400).json({ error: "Invalid service" });
        }

        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

        const booking = await Booking.create({
            serviceId,
            email,
            date: service.isExclusive ? null : date,
            time: service.isExclusive ? null : time,
            timezone: service.isExclusive ? null : timezone,
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
    const { token } = req.params; // This is the cancelToken from the URL

    // 1. Find the booking by the secret token
    const booking = await Booking.findOne({ cancelToken: token });
    if (!booking) {
        return res.status(404).json({ error: "Invalid or expired cancellation link" });
    }

    if (booking.status !== "CONFIRMED") {
        return res.status(400).json({ error: "Booking is not in a cancellable state" });
    }

    // 2. Check the 24-hour policy
    const start = new Date(`${booking.date}T${booking.time}`);
    const twentyFourHoursBefore = start.getTime() - (24 * 60 * 60 * 1000);

    if (Date.now() > twentyFourHoursBefore) {
        return res.status(403).json({
            error: "Cancellation window has closed (less than 24h remaining)"
        });
    }

    // 3. Delete from Google Calendar (with error handling)
    if (booking.googleEventId) {
        try {
            await calendar.events.delete({
                calendarId: "primary",
                eventId: booking.googleEventId,
            });
            console.log("📅 Google Event deleted");
        } catch (error) {
            console.error("⚠️ Google Event already gone or could not be deleted:", error.message);
            // We continue anyway so the database updates
        }
    }

    // 4. Update Database
    booking.status = "CANCELLED";
    // Optional: Clear the token so it can't be used twice
    booking.cancelToken = null;
    await booking.save();

    console.log(`✅ Booking ${booking._id} cancelled by user.`);
    res.json({ success: true, message: "Appointment cancelled successfully" });
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


// get booking by date 
export const getBookingsByDate = async (req, res) => {
    const { date } = req.params;
    try {
        // We find bookings that are either on HOLD (within 5 mins) OR already CONFIRMED
        const bookings = await Booking.find({
            date,
            status: { $in: ["HOLD", "CONFIRMED"] }
        }).select("time status");

        res.json({ slots: bookings.map(b => ({ time: b.time, status: b.status })) });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch slots" });
    }
};


// controllers/bookingController.js
export const getBookingByToken = async (req, res) => {
    try {
        const { id } = req.params; // This is the token from the URL

        // Find the booking where cancelToken matches the ID in the URL
        const booking = await Booking.findOne({ cancelToken: id });

        if (!booking) {
            return res.status(404).json({ error: "Cancellation link is invalid or expired." });
        }

        res.json({ booking });
    } catch (error) {
        console.error("Error fetching booking by token:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};