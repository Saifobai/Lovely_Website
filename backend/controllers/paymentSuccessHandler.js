import Booking from "../models/bookingModel.js";
import { google } from "googleapis";
import { sendUserConfirmedEmail } from "../services/emailService.js";

const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({ version: "v3", auth });

export const handlePaymentSuccess = async (bookingId) => {
    const booking = await Booking.findById(bookingId);

    if (!booking || booking.status !== "PENDING_PAYMENT") return;

    booking.status = "CONFIRMED";

    const localDateTime = new Date(`${booking.date}T${booking.time}:00`);
    const utcStart = new Date(
        localDateTime.toLocaleString("en-US", { timeZone: booking.timezone })
    );
    const utcEnd = new Date(utcStart.getTime() + 30 * 60000);

    const event = {
        summary: "Consultation Call",
        description: `30 minute consultation with ${booking.email}`,
        start: { dateTime: utcStart.toISOString(), timeZone: "UTC" },
        end: { dateTime: utcEnd.toISOString(), timeZone: "UTC" },
    };

    const googleEvent = await calendar.events.insert({
        calendarId: "primary",
        resource: event,
    });

    const startIso = utcStart.toISOString().replace(/-|:|\.\d\d\d/g, "");
    const endIso = utcEnd.toISOString().replace(/-|:|\.\d\d\d/g, "");

    const calendarLink = encodeURI(
        `https://calendar.google.com/calendar/u/0/r/eventedit?text=Consultation&dates=${startIso}/${endIso}&ctz=${booking.timezone}`
    );

    booking.googleEventId = googleEvent.data.id;
    booking.calendarLink = calendarLink;

    await booking.save();

    await sendUserConfirmedEmail({
        email: booking.email,
        date: booking.date,
        time: booking.time,
        timezone: booking.timezone,
        link: calendarLink,
        bookingId: booking._id.toString(),
    });
};
