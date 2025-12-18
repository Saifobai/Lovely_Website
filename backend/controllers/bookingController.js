import { google } from "googleapis";
import Booking from "../models/bookingModel.js";
import { sendAdminEmail, sendUserEmail } from "../services/emailService.js";
import mongoose from "mongoose";


const privateKey = process.env.GOOGLE_PRIVATE_KEY;
const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;

if (!privateKey || !clientEmail) {
    throw new Error("Google Calendar credentials missing");
}

const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({ version: "v3", auth });


// ---------------------------------------
// CREATE BOOKING
// ---------------------------------------

export const createBooking = async (req, res) => {
    try {
        const { date, time, email, timezone } = req.body;

        if (!date || !time || !email || !timezone) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const localDateTime = new Date(`${date}T${time}:00`);

        const utcStart = new Date(
            localDateTime.toLocaleString("en-US", { timeZone: timezone })
        );

        const utcEnd = new Date(utcStart.getTime() + 30 * 60000);

        const event = {
            summary: "Consultation Call",
            description: `30 minute consultation with ${email}`,
            start: {
                dateTime: utcStart.toISOString(),
                timeZone: "UTC",
            },
            end: {
                dateTime: utcEnd.toISOString(),
                timeZone: "UTC",
            },
        };

        const googleEvent = await calendar.events.insert({
            calendarId: "primary",
            resource: event,
        });

        const startIso = utcStart.toISOString().replace(/-|:|\.\d\d\d/g, "");
        const endIso = utcEnd.toISOString().replace(/-|:|\.\d\d\d/g, "");

        const publicLink = encodeURI(
            `https://calendar.google.com/calendar/u/0/r/eventedit?text=Consultation+Call&dates=${startIso}/${endIso}&details=30+minute+consultation&ctz=${timezone}`
        );

        const newBooking = await Booking.create({
            date,
            time,
            email,
            googleEventId: googleEvent.data.id
        });

        // Send emails
        await sendUserEmail({
            email,
            date,
            time,
            timezone,
            link: publicLink,
            bookingId: newBooking._id.toString(),
        });

        await sendAdminEmail({
            email,
            date,
            time,
        });


        res.json({
            success: true,
            googleCalendarLink: publicLink,
            bookingId: newBooking._id.toString(),
        });



    } catch (error) {
        console.error("Calendar booking error:", error);
        res.status(500).json({ success: false, message: "Booking failed" });
    }
};



// ---------------------------------------
// GET BOOKED TIMES FOR A DATE
// ---------------------------------------
export const getBookedTimes = async (req, res) => {
    try {
        const { date } = req.params;
        const bookings = await Booking.find({ date });

        res.json({
            success: true,
            bookedTimes: bookings.map((b) => b.time),
        });

    } catch (error) {
        res.status(500).json({ success: false });
    }
};


// ---------------------------------------
// cancelBooking (not implemented)
// ---------------------------------------
export const cancelBooking = async (req, res) => {
    console.log("🔥 CANCEL ENDPOINT HIT 🔥", req.params.id);
    try {
        const { id } = req.params;

        // 🚫 Guard against missing or invalid id
        if (!id || id === "undefined") {
            return res.status(400).json({
                success: false,
                message: "Missing booking id",
            });
        }

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid booking id" });
        }

        const booking = await Booking.findById(id);

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        // 🗓️ Attempt to delete Google Calendar event (non-blocking)
        try {
            if (booking.googleEventId) {
                await calendar.events.delete({
                    calendarId: "primary",
                    eventId: booking.googleEventId,
                });
            }
        } catch (googleError) {
            console.warn(
                "⚠️ Google event delete failed (continuing):",
                booking.googleEventId
            );
        }

        // ALWAYS delete from DB
        await Booking.findByIdAndDelete(id);

        res.json({ success: true });

    } catch (error) {
        console.error("Cancel error:", error);
        res.status(500).json({ success: false, message: "Cancel failed" });
    }
};



