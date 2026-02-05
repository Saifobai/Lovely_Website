// import Stripe from "stripe";
// import mongoose from "mongoose";
// import Booking from "../models/bookingModel.js";
// import { calendar } from "../config/calendar.js";
// import { sendUserConfirmedEmail, sendAdminEmail } from "../services/emailService.js";

// import { createPaypalOrder } from "../services/paypal.js";
// import { getServiceById } from "../utils/getServiceById.js";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// /* =========================
//    INIT PAYMENT (Stripe / PayPal)
// ========================= */
// export const initPayment = async (req, res) => {
//     const { bookingId, provider } = req.body;

//     if (!provider) return res.status(400).json({ message: "provider required" });
//     if (!mongoose.Types.ObjectId.isValid(bookingId))
//         return res.status(400).json({ message: "Invalid booking id" });

//     const booking = await Booking.findById(bookingId);
//     if (!booking || booking.status !== "HOLD")
//         return res.status(400).json({ message: "Invalid booking" });
//     if (booking.expiresAt < new Date())
//         return res.status(410).json({ message: "Booking expired" });

//     const service = getServiceById(booking.serviceId);
//     if (!service) return res.status(400).json({ message: "Service not found" });

//     const amountCents = service.priceCents;
//     const currency = service.currency.toLowerCase();

//     // STRIPE
//     if (provider.toUpperCase() === "STRIPE") {
//         const session = await stripe.checkout.sessions.create({
//             mode: "payment",
//             payment_method_types: ["card"],
//             line_items: [
//                 {
//                     price_data: {
//                         currency,
//                         product_data: { name: service.title },
//                         unit_amount: amountCents,
//                     },
//                     quantity: 1,
//                 },
//             ],
//             metadata: { bookingId: booking._id.toString() },
//             success_url: `${process.env.FRONTEND_URL}/success?bookingId=${booking._id}`,
//             cancel_url: `${process.env.FRONTEND_URL}/cancel/${booking._id}`,
//         });

//         booking.paymentProvider = "STRIPE";
//         booking.paymentIntentId = session.id;
//         await booking.save();

//         return res.json({ paymentUrl: session.url });
//     }

//     // PAYPAL
//     if (provider.toUpperCase() === "PAYPAL") {
//         const order = await createPaypalOrder({
//             bookingId: booking._id.toString(),
//             amount: (amountCents / 100).toFixed(2),
//             currency: service.currency,
//         });

//         const approvalLink = order.links.find((l) => l.rel === "approve")?.href;
//         if (!approvalLink)
//             return res.status(500).json({ message: "PayPal approval link missing" });

//         booking.paymentProvider = "PAYPAL";
//         booking.paymentIntentId = order.id;
//         await booking.save();

//         return res.json({ paymentUrl: approvalLink });
//     }

//     res.status(400).json({ message: "Unsupported provider" });
// };

// /* =========================
//    STRIPE WEBHOOK (REAL)
// ========================= */
// export const stripeWebhook = async (req, res) => {
//     let event;
//     try {
//         const sig = req.headers["stripe-signature"];
//         event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
//     } catch (err) {
//         console.error("❌ Stripe webhook signature failed:", err.message);
//         return res.status(400).send(`Webhook Error: ${err.message}`);
//     }

//     if (event.type === "checkout.session.completed") {
//         const bookingId = event.data.object.metadata.bookingId;
//         await confirmBooking(bookingId, "STRIPE");
//     }

//     res.json({ received: true });
// };

// /* =========================
//    PAYPAL SUCCESS (REAL)
// ========================= */
// export const paypalSuccess = async (req, res) => {
//     const bookingId = req.query.bookingId;
//     await confirmBooking(bookingId, "PAYPAL");
//     res.redirect(`${process.env.FRONTEND_URL}/success`);
// };

// /* =========================
//    FAKE CONFIRM (DEV ONLY)
// ========================= */
// export const fakeStripeConfirm = async (req, res) => {
//     if (process.env.NODE_ENV === "production")
//         return res.status(403).json({ message: "Not allowed in production" });

//     const { bookingId } = req.body;
//     await confirmBooking(bookingId, "FAKE STRIPE");

//     res.json({ success: true, provider: "STRIPE", mode: "FAKE" });
// };

// export const fakePaypalConfirm = async (req, res) => {
//     if (process.env.NODE_ENV === "production")
//         return res.status(403).json({ message: "Not allowed in production" });

//     const { bookingId } = req.body;
//     await confirmBooking(bookingId, "FAKE PAYPAL");

//     res.json({ success: true, provider: "PAYPAL", mode: "FAKE" });
// };

// /* =========================
//    CONFIRM BOOKING (USED BY ALL)
// ========================= */
// async function confirmBooking(bookingId, provider) {
//     const booking = await Booking.findById(bookingId);
//     if (!booking || booking.status === "CONFIRMED") return;

//     const service = getServiceById(booking.serviceId);
//     if (!service) return;

//     // 1️⃣ Confirm booking
//     booking.status = "CONFIRMED";
//     await booking.save();

//     // 2️⃣ Google Calendar event
//     const startISO = new Date(`${booking.date}T${booking.time}`).toISOString();
//     const endISO = new Date(new Date(startISO).getTime() + service.durationMinutes * 60 * 1000).toISOString();

//     const event = await calendar.events.insert({
//         calendarId: "primary",
//         requestBody: {
//             summary: "Lovely Consultation",
//             description: booking.email,
//             start: { dateTime: startISO, timeZone: booking.timezone },
//             end: { dateTime: endISO, timeZone: booking.timezone },
//         },
//     });

//     booking.googleEventId = event.data.id;
//     await booking.save();

//     // 3️⃣ Send emails
//     try {
//         await sendUserConfirmedEmail({
//             email: booking.email,
//             date: booking.date,
//             time: booking.time,
//             timezone: booking.timezone,
//             link: `https://calendar.google.com/calendar/u/0/r/eventedit/${event.data.id}`,
//             bookingId: booking._id,
//         });

//         await sendAdminEmail({ email: booking.email, date: booking.date, time: booking.time });
//         console.log(`📧 Emails sent to user/admin for booking ${booking._id} via ${provider}`);
//     } catch (err) {
//         console.error("❌ Email sending failed:", err);
//     }
// }

// /* =========================
//    CONFIRM PAYMENT (Frontend POST)
// ========================= */
// export const confirmPayment = async (req, res) => {
//     const { bookingId } = req.body;
//     if (!bookingId) return res.status(400).json({ success: false, message: "bookingId required" });

//     await confirmBooking(bookingId, "MANUAL/FRONTEND");

//     res.json({ success: true });
// };


//===================================================================
import Stripe from "stripe";
import crypto from "crypto";
import Booking from "../models/bookingModel.js";
import { calendar } from "../config/calendar.js";
import { sendUserConfirmedEmail, sendAdminEmail } from "../services/emailService.js";
import { createPaypalOrder } from "../services/paypal.js";
import { getServiceById } from "../utils/getServiceById.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/* =========================
   INIT PAYMENT
========================= */
export const initPayment = async (req, res) => {
    const { bookingId, provider } = req.body;

    const booking = await Booking.findById(bookingId);
    if (!booking || booking.status !== "HOLD") {
        return res.status(400).json({ error: "Invalid booking" });
    }

    if (booking.expiresAt < new Date()) {
        return res.status(410).json({ error: "Hold expired" });
    }

    const service = getServiceById(booking.serviceId);
    if (!service) return res.status(400).json({ error: "Service missing" });

    if (provider === "STRIPE") {
        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            line_items: [
                {
                    price_data: {
                        currency: service.currency.toLowerCase(),
                        product_data: { name: service.title },
                        unit_amount: service.priceCents,
                    },
                    quantity: 1,
                },
            ],
            metadata: { bookingId },
            success_url: `${process.env.FRONTEND_URL}/success`,
            cancel_url: `${process.env.FRONTEND_URL}/`,
        });

        booking.paymentProvider = "STRIPE";
        booking.paymentIntentId = session.id;
        await booking.save();

        return res.json({ paymentUrl: session.url });
    }

    if (provider === "PAYPAL") {
        const order = await createPaypalOrder({
            bookingId,
            amount: (service.priceCents / 100).toFixed(2),
            currency: service.currency,
        });

        booking.paymentProvider = "PAYPAL";
        booking.paymentIntentId = order.id;
        await booking.save();

        const link = order.links.find((l) => l.rel === "approve")?.href;
        return res.json({ paymentUrl: link });
    }

    res.status(400).json({ error: "Unsupported provider" });
};

/* =========================
   STRIPE WEBHOOK
========================= */
export const stripeWebhook = async (req, res) => {
    let event;
    try {
        const sig = req.headers["stripe-signature"];
        event = stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        return res.status(400).send("Webhook error");
    }

    if (event.type === "checkout.session.completed") {
        const bookingId = event.data.object.metadata.bookingId;
        await confirmBooking(bookingId, "STRIPE");
    }

    res.json({ received: true });
};

/* =========================
   PAYPAL SUCCESS
========================= */
export const paypalSuccess = async (req, res) => {
    const { bookingId } = req.query;
    await confirmBooking(bookingId, "PAYPAL");
    res.redirect(`${process.env.FRONTEND_URL}/success`);
};

/* =========================
   FAKE CONFIRM
========================= */
export const fakeConfirm = async (req, res) => {
    if (process.env.NODE_ENV === "production") {
        return res.status(403).json({ error: "Forbidden" });
    }

    const { bookingId } = req.body;
    await confirmBooking(bookingId, "FAKE");

    res.json({ success: true });
};

/* =========================
   CONFIRM BOOKING
========================= */
async function confirmBooking(bookingId, provider) {
    const booking = await Booking.findById(bookingId);
    if (!booking || booking.status !== "HOLD") return;
    if (booking.expiresAt < new Date()) return;

    const service = getServiceById(booking.serviceId);
    if (!service) return;

    booking.status = "CONFIRMED";
    booking.paymentProvider = provider;
    booking.cancelToken = crypto.randomUUID();
    await booking.save();

    const startISO = new Date(`${booking.date}T${booking.time}`).toISOString();
    const endISO = new Date(
        new Date(startISO).getTime() + service.durationMinutes * 60000
    ).toISOString();

    const event = await calendar.events.insert({
        calendarId: "primary",
        requestBody: {
            summary: service.title,
            start: { dateTime: startISO, timeZone: booking.timezone },
            end: { dateTime: endISO, timeZone: booking.timezone },
        },
    });

    booking.googleEventId = event.data.id;
    await booking.save();

    await sendUserConfirmedEmail({
        email: booking.email,
        date: booking.date,
        time: booking.time,
        timezone: booking.timezone,
        link: `https://calendar.google.com/calendar/u/0/r/eventedit/${event.data.id}`,
        bookingId: booking.cancelToken,
    });

    await sendAdminEmail({
        email: booking.email,
        date: booking.date,
        time: booking.time,
    });
}
