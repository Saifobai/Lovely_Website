import { google } from "googleapis";
import Booking from "../models/bookingModel.js";
import { sendAdminEmail, sendUserEmail } from "../services/emailService.js";


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

        await calendar.events.insert({
            calendarId: "primary",
            resource: event,
        });

        const startIso = utcStart.toISOString().replace(/-|:|\.\d\d\d/g, "");
        const endIso = utcEnd.toISOString().replace(/-|:|\.\d\d\d/g, "");

        const publicLink = encodeURI(
            `https://calendar.google.com/calendar/u/0/r/eventedit?text=Consultation+Call&dates=${startIso}/${endIso}&details=30+minute+consultation&ctz=${timezone}`
        );

        await Booking.create({ date, time, email });

        // Send emails
        await sendUserEmail({
            email,
            date,
            time,
            timezone,
        });

        await sendAdminEmail({
            email,
            date,
            time,
        });


        res.json({
            success: true,
            googleCalendarLink: publicLink,
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
