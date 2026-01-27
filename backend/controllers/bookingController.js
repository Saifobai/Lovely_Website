// import { google } from "googleapis";
// import Booking from "../models/bookingModel.js";
// import { sendAdminEmail, sendUserPendingPaymentEmail } from "../services/emailService.js";
// import mongoose from "mongoose";




// const privateKey = process.env.GOOGLE_PRIVATE_KEY;
// const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;

// if (!privateKey || !clientEmail) {
//     throw new Error("Google Calendar credentials missing");
// }

// const auth = new google.auth.JWT({
//     email: clientEmail,
//     key: privateKey.replace(/\\n/g, "\n"),
//     scopes: ["https://www.googleapis.com/auth/calendar"],
// });

// const calendar = google.calendar({ version: "v3", auth });


// ---------------------------------------
// CREATE BOOKING
// ---------------------------------------

// export const createBooking = async (req, res) => {
//     try {
//         const { date, time, email, timezone } = req.body;

//         if (!date || !time || !email || !timezone) {
//             return res.status(400).json({ message: "Missing required fields" });
//         }

//         const localDateTime = new Date(`${date}T${time}:00`);

//         const utcStart = new Date(
//             localDateTime.toLocaleString("en-US", { timeZone: timezone })
//         );

//         const utcEnd = new Date(utcStart.getTime() + 30 * 60000);

//         const event = {
//             summary: "Consultation Call",
//             description: `30 minute consultation with ${email}`,
//             start: {
//                 dateTime: utcStart.toISOString(),
//                 timeZone: "UTC",
//             },
//             end: {
//                 dateTime: utcEnd.toISOString(),
//                 timeZone: "UTC",
//             },
//         };

//         const googleEvent = await calendar.events.insert({
//             calendarId: "primary",
//             resource: event,
//         });

//         const startIso = utcStart.toISOString().replace(/-|:|\.\d\d\d/g, "");
//         const endIso = utcEnd.toISOString().replace(/-|:|\.\d\d\d/g, "");

//         const publicLink = encodeURI(
//             `https://calendar.google.com/calendar/u/0/r/eventedit?text=Consultation+Call&dates=${startIso}/${endIso}&details=30+minute+consultation&ctz=${timezone}`
//         );

//         const newBooking = await Booking.create({
//             date,
//             time,
//             email,
//             googleEventId: googleEvent.data.id
//         });

//         // Send emails
//         await sendUserEmail({
//             email,
//             date,
//             time,
//             timezone,
//             link: publicLink,
//             bookingId: newBooking._id.toString(),
//         });

//         await sendAdminEmail({
//             email,
//             date,
//             time,
//         });




//         res.json({
//             success: true,
//             googleCalendarLink: publicLink,
//             bookingId: newBooking._id.toString(),
//         });



//     } catch (error) {
//         console.error("Calendar booking error:", error);
//         res.status(500).json({ success: false, message: "Booking failed" });
//     }
// };



// ---------------------------------------
// GET BOOKED TIMES FOR A DATE
// ---------------------------------------
// export const getBookedTimes = async (req, res) => {
//     try {
//         const { date } = req.params;
//         const bookings = await Booking.find({ date });

//         res.json({
//             success: true,
//             bookedTimes: bookings.map((b) => b.time),
//         });

//     } catch (error) {
//         res.status(500).json({ success: false });
//     }
// };


// ---------------------------------------
// cancelBooking (not implemented)
// ---------------------------------------
// export const cancelBooking = async (req, res) => {
//     console.log("🔥 CANCEL ENDPOINT HIT 🔥", req.params.id);
//     try {
//         const { id } = req.params;

//         // 🚫 Guard against missing or invalid id
//         if (!id || id === "undefined") {
//             return res.status(400).json({
//                 success: false,
//                 message: "Missing booking id",
//             });
//         }

//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             return res.status(400).json({ message: "Invalid booking id" });
//         }

//         const booking = await Booking.findById(id);

//         if (!booking) {
//             return res.status(404).json({ message: "Booking not found" });
//         }

//         // 🗓️ Attempt to delete Google Calendar event (non-blocking)
//         try {
//             if (booking.googleEventId) {
//                 await calendar.events.delete({
//                     calendarId: "primary",
//                     eventId: booking.googleEventId,
//                 });
//             }
//         } catch (googleError) {
//             console.warn(
//                 "⚠️ Google event delete failed (continuing):",
//                 booking.googleEventId
//             );
//         }

//         // ALWAYS delete from DB
//         await Booking.findByIdAndDelete(id);

//         res.json({ success: true });

//     } catch (error) {
//         console.error("Cancel error:", error);
//         res.status(500).json({ success: false, message: "Cancel failed" });
//     }
// };


// controller with twilio SMS integration removed

// import { google } from "googleapis";
// import Booking from "../models/bookingModel.js";
// import { sendAdminEmail, sendUserEmail } from "../services/emailService.js";
// import mongoose from "mongoose";
// import { sendSMS } from "../services/smsService.js";

// const privateKey = process.env.GOOGLE_PRIVATE_KEY;
// const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;

// if (!privateKey || !clientEmail) {
//     throw new Error("Google Calendar credentials missing");
// }

// const auth = new google.auth.JWT({
//     email: clientEmail,
//     key: privateKey.replace(/\\n/g, "\n"),
//     scopes: ["https://www.googleapis.com/auth/calendar"],
// });

// const calendar = google.calendar({ version: "v3", auth });


// // ---------------------------------------
// // CREATE BOOKING
// // ---------------------------------------
// export const createBooking = async (req, res) => {
//     try {
//         const { date, time, email, phone, timezone } = req.body;

//         if (!date || !time || !email || !phone || !timezone) {
//             return res.status(400).json({ message: "Missing required fields" });
//         }

//         const localDateTime = new Date(`${date}T${time}:00`);

//         const utcStart = new Date(
//             localDateTime.toLocaleString("en-US", { timeZone: timezone })
//         );

//         const utcEnd = new Date(utcStart.getTime() + 30 * 60000);

//         const event = {
//             summary: "Consultation Call",
//             description: `30 minute consultation with ${email}`,
//             start: {
//                 dateTime: utcStart.toISOString(),
//                 timeZone: "UTC",
//             },
//             end: {
//                 dateTime: utcEnd.toISOString(),
//                 timeZone: "UTC",
//             },
//         };

//         const googleEvent = await calendar.events.insert({
//             calendarId: "primary",
//             resource: event,
//         });

//         const startIso = utcStart.toISOString().replace(/-|:|\.\d\d\d/g, "");
//         const endIso = utcEnd.toISOString().replace(/-|:|\.\d\d\d/g, "");

//         const publicLink = encodeURI(
//             `https://calendar.google.com/calendar/u/0/r/eventedit?text=Consultation+Call&dates=${startIso}/${endIso}&details=30+minute+consultation&ctz=${timezone}`
//         );

//         const newBooking = await Booking.create({
//             date,
//             time,
//             email,
//             phone,
//             googleEventId: googleEvent.data.id,
//         });

//         await sendUserEmail({
//             email,
//             date,
//             time,
//             timezone,
//             link: publicLink,
//             bookingId: newBooking._id.toString(),
//         });

//         await sendAdminEmail({
//             email,
//             date,
//             time,
//             phone,
//         });

//         if (phone) {
//             await sendSMS({
//                 phone,
//                 date,
//                 time,
//                 timezone,
//             });
//         }

//         res.json({
//             success: true,
//             googleCalendarLink: publicLink,
//             bookingId: newBooking._id.toString(),
//         });

//     } catch (error) {
//         console.error("Calendar booking error:", error);
//         res.status(500).json({ success: false, message: "Booking failed" });
//     }
// };


// // ---------------------------------------
// // GET BOOKED TIMES FOR A DATE
// // ---------------------------------------
// export const getBookedTimes = async (req, res) => {
//     try {
//         const { date } = req.params;
//         const bookings = await Booking.find({ date });

//         res.json({
//             success: true,
//             bookedTimes: bookings.map((b) => b.time),
//         });

//     } catch (error) {
//         res.status(500).json({ success: false });
//     }
// };


// // ---------------------------------------
// // CANCEL BOOKING
// // ---------------------------------------
// export const cancelBooking = async (req, res) => {
//     console.log("🔥 CANCEL ENDPOINT HIT 🔥", req.params.id);

//     try {
//         const { id } = req.params;

//         if (!id || id === "undefined") {
//             return res.status(400).json({
//                 success: false,
//                 message: "Missing booking id",
//             });
//         }

//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             return res.status(400).json({ message: "Invalid booking id" });
//         }

//         const booking = await Booking.findById(id);

//         if (!booking) {
//             return res.status(404).json({ message: "Booking not found" });
//         }

//         try {
//             if (booking.googleEventId) {
//                 await calendar.events.delete({
//                     calendarId: "primary",
//                     eventId: booking.googleEventId,
//                 });
//             }
//         } catch (googleError) {
//             console.warn(
//                 "⚠️ Google event delete failed (continuing):",
//                 booking.googleEventId
//             );
//         }

//         await Booking.findByIdAndDelete(id);

//         res.json({ success: true });

//     } catch (error) {
//         console.error("Cancel error:", error);
//         res.status(500).json({ success: false, message: "Cancel failed" });
//     }
// };




// ===================================== code with payment version =====================//

// export const createBooking = async (req, res) => {
//     try {
//         const { date, time, email, timezone } = req.body;

//         if (!date || !time || !email || !timezone) {
//             return res.status(400).json({ message: "Missing required fields" });
//         }

//         // ⏳ Hold for 1 hour
//         const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

//         const booking = await Booking.create({
//             date,
//             time,
//             email,
//             timezone,
//             expiresAt,
//             status: "PENDING_PAYMENT",
//         });

//         // TODO: create Stripe session here
//         const paymentLink = `http://localhost:5173/pay/${booking._id}`;

//         // 🔔 Send PENDING email (new template)
//         await sendUserPendingPaymentEmail({
//             email,
//             date,
//             time,
//             timezone,
//             bookingId: booking._id.toString(),
//             paymentLink,
//             expiresAt,
//         });

//         await sendAdminEmail({ email, date, time });

//         res.json({
//             success: true,
//             bookingId: booking._id,
//             status: "PENDING_PAYMENT",
//             expiresAt,
//         });

//     } catch (error) {
//         console.error("Booking error:", error);
//         res.status(500).json({ success: false });
//     }
// };




// export const getBookedTimes = async (req, res) => {
//     try {
//         const { date } = req.params;
//         const now = new Date();

//         const bookings = await Booking.find({
//             date,
//             status: { $in: ["PENDING_PAYMENT", "CONFIRMED"] },
//         });

//         const slots = bookings.map((b) => {
//             const isExpired =
//                 b.status === "PENDING_PAYMENT" &&
//                 now - new Date(b.createdAt) > 60 * 60 * 1000;

//             return {
//                 time: b.time,
//                 status: isExpired ? "AVAILABLE" : b.status,
//             };
//         });

//         return res.json({ slots }); // ✅ HERE
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Failed to load slots" });
//     }
// };



// import { google } from "googleapis";
// import mongoose from "mongoose";
// import Booking from "../models/Booking.js";
// import { SERVICES } from "../services/servicesCatalog.js";
// import {
//     sendAdminEmail,
//     sendUserPendingPaymentEmail,
// } from "../services/emailService.js";
// import { createPaymentSession } from "../payments/paymentAdapter.js";
// import { handlePaymentSuccess } from "../payments/paymentSuccess.js";

// /* ---------------- GOOGLE CALENDAR ---------------- */

// const auth = new google.auth.JWT({
//     email: process.env.GOOGLE_CLIENT_EMAIL,
//     key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
//     scopes: ["https://www.googleapis.com/auth/calendar"],
// });

// const calendar = google.calendar({ version: "v3", auth });

// /* ---------------- CREATE BOOKING (PHASE 1) ---------------- */

// export const createBooking = async (req, res) => {
//     try {
//         const { date, time, email, timezone, serviceId } = req.body;

//         if (!date || !time || !email || !timezone || !serviceId) {
//             return res.status(400).json({ message: "Missing required fields" });
//         }

//         const service = SERVICES.find(s => s.id === serviceId);
//         if (!service) {
//             return res.status(400).json({ message: "Invalid service" });
//         }

//         const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

//         const booking = await Booking.create({
//             date,
//             time,
//             email,
//             timezone,
//             serviceId,
//             amount: service.priceCents,
//             currency: service.currency,
//             expiresAt,
//             status: "PENDING_PAYMENT",
//         });

//         const paymentLink = `${process.env.FRONTEND_URL}/pay/${booking._id}`;

//         await sendUserPendingPaymentEmail({
//             email,
//             date,
//             time,
//             timezone,
//             bookingId: booking._id.toString(),
//             paymentLink,
//             expiresAt,
//         });

//         await sendAdminEmail({ email, date, time });

//         res.json({
//             success: true,
//             bookingId: booking._id,
//             expiresAt,
//             status: booking.status,
//         });

//     } catch (err) {
//         console.error("Booking error:", err);
//         res.status(500).json({ success: false });
//     }
// };

// /* ---------------- INIT PAYMENT (PHASE 2) ---------------- */

// export const initPayment = async (req, res) => {
//     const { bookingId, provider } = req.body;

//     if (!mongoose.Types.ObjectId.isValid(bookingId)) {
//         return res.status(400).json({ message: "Invalid booking id" });
//     }

//     const booking = await Booking.findById(bookingId);
//     if (!booking || booking.status !== "PENDING_PAYMENT") {
//         return res.status(404).json({ message: "Booking not found" });
//     }

//     if (booking.expiresAt < new Date()) {
//         return res.status(410).json({ message: "Booking expired" });
//     }

//     const payment = await createPaymentSession({ booking, provider });

//     booking.paymentProvider = provider.toUpperCase();
//     booking.paymentIntentId = payment.paymentIntentId;
//     await booking.save();

//     res.json(payment);
// };

// /* ---------------- PAYMENT SUCCESS (PHASE 3) ---------------- */

// export const stripeWebhook = async (req, res) => {
//     const event = req.body;

//     if (event.type === "checkout.session.completed") {
//         const bookingId = event.data.object.metadata.bookingId;
//         await handlePaymentSuccess(bookingId);
//     }

//     res.json({ received: true });
// };

// export const paypalSuccess = async (req, res) => {
//     const { bookingId } = req.query;
//     await handlePaymentSuccess(bookingId);
//     res.redirect(`${process.env.FRONTEND_URL}/payment-success`);
// };

// /* ---------------- CANCEL BOOKING ---------------- */

// export const cancelBooking = async (req, res) => {
//     try {
//         const { id } = req.params;

//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             return res.status(400).json({ message: "Invalid booking id" });
//         }

//         const booking = await Booking.findById(id);
//         if (!booking) {
//             return res.status(404).json({ message: "Booking not found" });
//         }

//         try {
//             if (booking.googleEventId) {
//                 await calendar.events.delete({
//                     calendarId: "primary",
//                     eventId: booking.googleEventId,
//                 });
//             }
//         } catch {
//             console.warn("Google event delete failed");
//         }

//         await Booking.findByIdAndDelete(id);
//         res.json({ success: true });

//     } catch (err) {
//         console.error("Cancel error:", err);
//         res.status(500).json({ success: false });
//     }
// };

// /* ---------------- GET BOOKED TIMES ---------------- */

// export const getBookedTimes = async (req, res) => {
//     const { date } = req.params;
//     const now = new Date();

//     const bookings = await Booking.find({
//         date,
//         status: { $in: ["PENDING_PAYMENT", "CONFIRMED"] },
//     });

//     const slots = bookings.map(b => {
//         const expired =
//             b.status === "PENDING_PAYMENT" && b.expiresAt < now;

//         return {
//             time: b.time,
//             status: expired ? "AVAILABLE" : b.status,
//         };
//     });

//     res.json({ slots });
// };


//========================================================================
//==================================== code with payment version =====================//
import { google } from "googleapis";
import mongoose from "mongoose";
import { SERVICES } from "../config/services.js";
import {
    sendAdminEmail,
    sendUserPendingPaymentEmail,
} from "../services/emailService.js";
import { createPaymentSession } from "../payments/paymentAdapter.js";
import { handlePaymentSuccess } from "../payments/paymentSuccess.js";
import Booking from "../models/bookingModel.js";

const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({ version: "v3", auth });

export const createBooking = async (req, res) => {
    try {
        const { date, time, email, timezone, serviceId } = req.body;

        if (!date || !time || !email || !timezone || !serviceId) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const service = SERVICES.find(s => s.id === serviceId);
        if (!service) {
            return res.status(400).json({ message: "Invalid service" });
        }

        const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

        const booking = await Booking.create({
            date,
            time,
            email,
            timezone,
            serviceId,
            amount: service.priceCents,
            currency: service.currency,
            expiresAt,
        });

        const paymentLink = `${process.env.FRONTEND_URL}/pay/${booking._id}`;

        await sendUserPendingPaymentEmail({
            email,
            date,
            time,
            timezone,
            bookingId: booking._id.toString(),
            paymentLink,
            expiresAt,
        });

        await sendAdminEmail({ email, date, time });

        res.json({
            success: true,
            bookingId: booking._id,
            expiresAt,
            status: booking.status,
        });

    } catch (err) {
        console.error("Booking error:", err);
        res.status(500).json({ success: false });
    }
};

export const initPayment = async (req, res) => {
    const { bookingId, provider } = req.body;

    if (!mongoose.Types.ObjectId.isValid(bookingId)) {
        return res.status(400).json({ message: "Invalid booking id" });
    }

    const booking = await Booking.findById(bookingId);
    if (!booking || booking.status !== "PENDING_PAYMENT") {
        return res.status(404).json({ message: "Booking not found" });
    }

    if (booking.expiresAt < new Date()) {
        return res.status(410).json({ message: "Booking expired" });
    }

    const payment = await createPaymentSession({ booking, provider });

    booking.paymentProvider = provider.toUpperCase();
    booking.paymentIntentId = payment.paymentIntentId;
    await booking.save();

    res.json(payment);
};

export const stripeWebhook = async (req, res) => {
    const event = req.body;

    if (event.type === "checkout.session.completed") {
        const bookingId = event.data.object.metadata.bookingId;
        await handlePaymentSuccess(bookingId);
    }

    res.json({ received: true });
};

export const paypalSuccess = async (req, res) => {
    const { bookingId } = req.query;
    await handlePaymentSuccess(bookingId);
    res.redirect(`${process.env.FRONTEND_URL}/payment-success`);
};

export const cancelBooking = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid booking id" });
        }

        const booking = await Booking.findById(id);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        if (booking.googleEventId) {
            await calendar.events.delete({
                calendarId: "primary",
                eventId: booking.googleEventId,
            });
        }

        await Booking.findByIdAndDelete(id);
        res.json({ success: true });

    } catch (err) {
        console.error("Cancel error:", err);
        res.status(500).json({ success: false });
    }
};

export const getBookedTimes = async (req, res) => {
    const { date } = req.params;
    const now = new Date();

    const bookings = await Booking.find({
        date,
        status: { $in: ["PENDING_PAYMENT", "CONFIRMED"] },
    });

    const slots = bookings.map(b => ({
        time: b.time,
        status:
            b.status === "PENDING_PAYMENT" && b.expiresAt < now
                ? "AVAILABLE"
                : b.status,
    }));

    res.json({ slots });
};
