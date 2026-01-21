
import { google } from "googleapis";
import { fromZonedTime } from "date-fns-tz";
import { SERVICES } from "../config/services.js";
import { sendUserConfirmedEmail } from "../services/emailService.js";
import Booking from "../models/bookingModel.js";

const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({ version: "v3", auth });

export async function handlePaymentSuccess(bookingId) {
    const booking = await Booking.findById(bookingId);
    if (!booking || booking.status !== "PENDING_PAYMENT") return;

    const service = SERVICES.find(s => s.id === booking.serviceId);
    if (!service) return;

    booking.status = "CONFIRMED";

    const startUTC = fromZonedTime(
        `${booking.date} ${booking.time}`,
        booking.timezone
    );

    const endUTC = new Date(
        startUTC.getTime() + service.durationMinutes * 60000
    );

    const event = await calendar.events.insert({
        calendarId: "primary",
        resource: {
            summary: service.title,
            description: `Consultation with ${booking.email}`,
            start: { dateTime: startUTC.toISOString() },
            end: { dateTime: endUTC.toISOString() },
        },
    });

    booking.googleEventId = event.data.id;
    booking.calendarLink = event.data.htmlLink;

    await booking.save();

    await sendUserConfirmedEmail({
        email: booking.email,
        date: booking.date,
        time: booking.time,
        timezone: booking.timezone,
        link: booking.calendarLink,
    });
}
