import cron from "node-cron";
import Booking from "../models/bookingModel.js";
import { sendSMS } from "./smsService.js";

function getUTCDateTime(date, time) {
    return new Date(`${date}T${time}:00Z`);
}

cron.schedule("* * * * *", async () => {
    try {
        const bookings = await Booking.find({ reminderSent: false });

        for (const booking of bookings) {
            const eventTimeUTC = getUTCDateTime(booking.date, booking.time);
            const nowUTC = new Date();

            const timeDiff = eventTimeUTC - nowUTC;
            const diffMinutes = Math.floor(timeDiff / 1000 / 60);

            // If event is 120 minutes away (2 hours)
            if (diffMinutes <= 120 && diffMinutes > 118) {
                await sendSMS({
                    phone: booking.phone,
                    date: booking.date,
                    time: booking.time,
                });

                booking.reminderSent = true;
                await booking.save();
            }
        }

    } catch (error) {
        console.log("Reminder error:", error);
    }
});

console.log("📱 SMS Reminder Service Active...");
