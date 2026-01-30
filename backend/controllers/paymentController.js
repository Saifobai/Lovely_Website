// import Stripe from "stripe";
// import mongoose from "mongoose";
// import Booking from "../models/bookingModel.js";
// import { calendar } from "../config/calendar.js";
// import sendMail from "../config/mailer.js";
// import { adminTemplate } from "../services/emailTemplates/adminTemplate.js";
// import { userConfirmedTemplate } from "../services/emailTemplates/userConfirmedTemplate.js";
// import { createPaypalOrder } from "../services/paypal.js"
// import { getServiceById } from "../utils/getServiceById.js";



// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


// /**
//  * ================================
//  * INIT PAYMENT (STRIPE)
//  * ================================
//  */
// export const initPayment = async (req, res) => {
//     const { bookingId } = req.body;
//     const provider = req.body.provider?.toUpperCase();


//     if (!provider) {
//         return res.status(400).json({ message: "provider required" });
//     }

//     if (!mongoose.Types.ObjectId.isValid(bookingId)) {
//         return res.status(400).json({ message: "Invalid booking id" });
//     }

//     const booking = await Booking.findById(bookingId);

//     if (!booking || booking.status !== "HOLD") {
//         return res.status(400).json({ message: "Invalid booking" });
//     }

//     if (booking.expiresAt < new Date()) {
//         return res.status(410).json({ message: "Booking expired" });
//     }

//     const service = getServiceById(booking.serviceId);

//     if (!service) {
//         return res.status(400).json({ message: "Service not found" });
//     }

//     const amountCents = service.priceCents;
//     const currency = service.currency.toLowerCase();

//     // =========================
//     // STRIPE
//     // =========================
//     if (provider === "STRIPE") {
//         const session = await stripe.checkout.sessions.create({
//             mode: "payment",
//             payment_method_types: ["card"],
//             line_items: [
//                 {
//                     price_data: {
//                         currency,
//                         product_data: {
//                             name: service.title,
//                         },
//                         unit_amount: amountCents,
//                     },
//                     quantity: 1,
//                 },
//             ],
//             metadata: {
//                 bookingId: booking._id.toString(),
//             },
//             success_url: `${process.env.FRONTEND_URL}/success`,
//             cancel_url: `${process.env.FRONTEND_URL}/cancel`,
//         });

//         booking.paymentProvider = "STRIPE";
//         booking.paymentIntentId = session.id;
//         await booking.save();

//         return res.json({ paymentUrl: session.url });
//     }

//     // =========================
//     // PAYPAL
//     // =========================
//     if (provider === "PAYPAL") {
//         const order = await createPaypalOrder({
//             bookingId: booking._id.toString(),
//             amount: (amountCents / 100).toFixed(2),
//             currency: service.currency,
//         });

//         const approvalLink = order.links.find(
//             (l) => l.rel === "approve"
//         )?.href;

//         if (!approvalLink) {
//             throw new Error("No PayPal approval link");
//         }

//         booking.paymentProvider = "PAYPAL";
//         booking.paymentIntentId = order.id;
//         await booking.save();

//         return res.json({ paymentUrl: approvalLink });
//     }

//     res.status(400).json({ message: "Unsupported provider" });
// };



// /**
//  * ================================
//  * STRIPE WEBHOOK
//  * ================================
//  */
// export const stripeWebhook = async (req, res) => {
//     // 🧪 DEV / LOCAL MODE → allow fake webhook (Postman)
//     if (process.env.NODE_ENV !== "production") {
//         try {
//             const event = req.body;

//             if (event.type === "checkout.session.completed") {
//                 const bookingId = event.data.object.metadata.bookingId;
//                 await confirmBooking(bookingId);
//             }

//             return res.json({ received: true, mode: "test" });
//         } catch (err) {
//             console.error("❌ Test webhook error:", err);
//             return res.status(500).json({ received: false });
//         }
//     }

//     // 🔐 PRODUCTION MODE → Stripe signature verification
//     let event;
//     try {
//         const sig = req.headers["stripe-signature"];

//         event = stripe.webhooks.constructEvent(
//             req.body,
//             sig,
//             process.env.STRIPE_WEBHOOK_SECRET
//         );
//     } catch (err) {
//         console.error("❌ Stripe webhook signature failed:", err.message);
//         return res.status(400).send(`Webhook Error: ${err.message}`);
//     }

//     try {
//         if (event.type === "checkout.session.completed") {
//             const bookingId = event.data.object.metadata.bookingId;
//             await confirmBooking(bookingId);
//         }

//         res.json({ received: true });
//     } catch (err) {
//         console.error("Webhook handling error:", err);
//         res.status(500).json({ received: false });
//     }
// };



// /** * ================================
//  * PAYPAL SUCCESS HANDLER
//  * ================================
//  */

// export const paypalSuccess = async (req, res) => {
//     await confirmBooking(req.query.bookingId);
//     res.redirect(`${process.env.FRONTEND_URL}/success`);
// };


// // 🧪 FAKE PayPal confirmation (DEV ONLY)
// export const fakePaypalConfirm = async (req, res) => {
//     if (process.env.NODE_ENV === "production") {
//         return res.status(403).json({ message: "Not allowed in production" });
//     }

//     const { bookingId } = req.body;

//     if (!bookingId) {
//         return res.status(400).json({ message: "bookingId required" });
//     }

//     await confirmBooking(bookingId);

//     res.json({
//         success: true,
//         provider: "PAYPAL",
//         mode: "FAKE",
//     });
// };



// /**
//  * ================================
//  * CONFIRM BOOKING (PAYMENT SUCCESS)
//  * ================================
//  */
// async function confirmBooking(bookingId) {
//     const booking = await Booking.findById(bookingId);

//     if (!booking || booking.status === "CONFIRMED") return;

//     // 1️⃣ Mark confirmed
//     booking.status = "CONFIRMED";
//     await booking.save();

//     // 2️⃣ Create Google Calendar event
//     const startISO = new Date(`${booking.date}T${booking.time}`).toISOString();
//     const endISO = new Date(
//         new Date(startISO).getTime() + 15 * 60 * 1000
//     ).toISOString();

//     const event = await calendar.events.insert({
//         calendarId: "primary",
//         requestBody: {
//             summary: "Lovely Consultation",
//             description: booking.email,
//             start: {
//                 dateTime: startISO,
//                 timeZone: booking.timezone,
//             },
//             end: {
//                 dateTime: endISO,
//                 timeZone: booking.timezone,
//             },
//         },
//     });

//     booking.googleEventId = event.data.id;
//     await booking.save();

//     // 3️⃣ Send ADMIN email
//     await sendMail({
//         to: process.env.ADMIN_EMAIL,
//         subject: "📩 New Booking Confirmed",
//         html: adminTemplate({
//             email: booking.email,
//             date: booking.date,
//             time: booking.time,
//         }),
//     });

//     // 4️⃣ Send USER confirmation email
//     await sendMail({
//         to: booking.email,
//         subject: "🎉 Your Booking Is Confirmed",
//         html: userConfirmedTemplate({
//             date: booking.date,
//             time: booking.time,
//             timezone: booking.timezone,
//             bookingId: booking._id,
//             link: `https://calendar.google.com/calendar/u/0/r/eventedit/${event.data.id}`,
//         }),
//     });
// }



//====================================================================
//====================================================================
//====================================================================
import Stripe from "stripe";
import mongoose from "mongoose";
import Booking from "../models/bookingModel.js";
import { calendar } from "../config/calendar.js";
import sendMail from "../config/mailer.js";
import { adminTemplate } from "../services/emailTemplates/adminTemplate.js";
import { userConfirmedTemplate } from "../services/emailTemplates/userConfirmedTemplate.js";
import { createPaypalOrder } from "../services/paypal.js";
import { getServiceById } from "../utils/getServiceById.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * ================================
 * INIT PAYMENT (STRIPE / PAYPAL)
 * ================================
 */
export const initPayment = async (req, res) => {
    const { bookingId, provider } = req.body;

    if (!provider) {
        return res.status(400).json({ message: "provider required" });
    }

    if (!mongoose.Types.ObjectId.isValid(bookingId)) {
        return res.status(400).json({ message: "Invalid booking id" });
    }

    const booking = await Booking.findById(bookingId);

    if (!booking || booking.status !== "HOLD") {
        return res.status(400).json({ message: "Invalid booking" });
    }

    if (booking.expiresAt < new Date()) {
        return res.status(410).json({ message: "Booking expired" });
    }

    const service = getServiceById(booking.serviceId);
    if (!service) {
        return res.status(400).json({ message: "Service not found" });
    }

    const amountCents = service.priceCents;
    const currency = service.currency.toLowerCase();

    // =========================
    // STRIPE
    // =========================
    if (provider.toUpperCase() === "STRIPE") {
        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency,
                        product_data: { name: service.title },
                        unit_amount: amountCents,
                    },
                    quantity: 1,
                },
            ],
            metadata: {
                bookingId: booking._id.toString(),
            },
            success_url: `${process.env.FRONTEND_URL}/success`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`,
        });

        booking.paymentProvider = "STRIPE";
        booking.paymentIntentId = session.id;
        await booking.save();

        return res.json({ paymentUrl: session.url });
    }

    // =========================
    // PAYPAL
    // =========================
    if (provider.toUpperCase() === "PAYPAL") {
        const order = await createPaypalOrder({
            bookingId: booking._id.toString(),
            amount: (amountCents / 100).toFixed(2),
            currency: service.currency,
        });

        const approvalLink = order.links.find(l => l.rel === "approve")?.href;
        if (!approvalLink) {
            return res.status(500).json({ message: "PayPal approval link missing" });
        }

        booking.paymentProvider = "PAYPAL";
        booking.paymentIntentId = order.id;
        await booking.save();

        return res.json({ paymentUrl: approvalLink });
    }

    res.status(400).json({ message: "Unsupported provider" });
};

/**
 * ================================
 * STRIPE WEBHOOK (REAL ONLY)
 * ================================
 */
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
        console.error("❌ Stripe webhook signature failed:", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
        const bookingId = event.data.object.metadata.bookingId;
        await confirmBooking(bookingId);
    }

    res.json({ received: true });
};

/**
 * ================================
 * PAYPAL SUCCESS (REAL)
 * ================================
 */
export const paypalSuccess = async (req, res) => {
    await confirmBooking(req.query.bookingId);
    res.redirect(`${process.env.FRONTEND_URL}/success`);
};

/**
 * ================================
 * FAKE PAYPAL (DEV ONLY)
 * ================================
 */
export const fakePaypalConfirm = async (req, res) => {
    if (process.env.NODE_ENV === "production") {
        return res.status(403).json({ message: "Not allowed in production" });
    }

    const { bookingId } = req.body;
    if (!bookingId) {
        return res.status(400).json({ message: "bookingId required" });
    }

    await confirmBooking(bookingId);

    res.json({
        success: true,
        provider: "PAYPAL",
        mode: "FAKE",
    });
};

/**
 * ================================
 * CONFIRM BOOKING (FINAL STEP)
 * ================================
 */
async function confirmBooking(bookingId) {
    const booking = await Booking.findById(bookingId);
    if (!booking || booking.status !== "HOLD") return;

    const service = getServiceById(booking.serviceId);
    if (!service) return;

    // 1️⃣ Confirm booking
    booking.status = "CONFIRMED";
    await booking.save();

    // 2️⃣ Google Calendar
    const startISO = new Date(`${booking.date}T${booking.time}`).toISOString();
    const endISO = new Date(
        new Date(startISO).getTime() + service.durationMinutes * 60 * 1000
    ).toISOString();

    const event = await calendar.events.insert({
        calendarId: "primary",
        requestBody: {
            summary: "Lovely Consultation",
            description: booking.email,
            start: { dateTime: startISO, timeZone: booking.timezone },
            end: { dateTime: endISO, timeZone: booking.timezone },
        },
    });

    booking.googleEventId = event.data.id;
    await booking.save();

    // 3️⃣ Emails (non-blocking)
    try {
        await sendMail({
            to: process.env.ADMIN_EMAIL,
            subject: "📩 New Booking Confirmed",
            html: adminTemplate({
                email: booking.email,
                date: booking.date,
                time: booking.time,
            }),
        });

        await sendMail({
            to: booking.email,
            subject: "🎉 Your Booking Is Confirmed",
            html: userConfirmedTemplate({
                date: booking.date,
                time: booking.time,
                timezone: booking.timezone,
                bookingId: booking._id,
                link: `https://calendar.google.com/calendar/u/0/r/eventedit/${event.data.id}`,
            }),
        });
    } catch (err) {
        console.error("Email error:", err);
    }
}
