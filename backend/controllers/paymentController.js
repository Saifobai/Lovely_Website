
// import Stripe from "stripe";
// import crypto from "crypto";
// import Booking from "../models/bookingModel.js";
// import { calendar } from "../config/calendar.js";
// import { sendUserConfirmedEmail, sendAdminEmail } from "../services/emailService.js";
// import { createPaypalOrder } from "../services/paypal.js";
// import { getServiceById } from "../utils/getServiceById.js";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// /* =========================
//    INIT PAYMENT
// ========================= */
// export const initPayment = async (req, res) => {
//     const { bookingId, provider } = req.body;

//     const booking = await Booking.findById(bookingId);
//     if (!booking || booking.status !== "HOLD") {
//         return res.status(400).json({ error: "Invalid booking" });
//     }

//     if (booking.expiresAt < new Date()) {
//         return res.status(410).json({ error: "Hold expired" });
//     }

//     const service = getServiceById(booking.serviceId);
//     if (!service) return res.status(400).json({ error: "Service missing" });

//     if (provider === "STRIPE") {
//         const session = await stripe.checkout.sessions.create({
//             mode: "payment",
//             line_items: [
//                 {
//                     price_data: {
//                         currency: service.currency.toLowerCase(),
//                         product_data: { name: service.title },
//                         unit_amount: service.priceCents,
//                     },
//                     quantity: 1,
//                 },
//             ],
//             metadata: { bookingId },
//             success_url: `${process.env.FRONTEND_URL}/success`,
//             cancel_url: `${process.env.FRONTEND_URL}/`,
//         });

//         booking.paymentProvider = "STRIPE";
//         booking.paymentIntentId = session.id;
//         await booking.save();

//         return res.json({ paymentUrl: session.url });
//     }

//     if (provider === "PAYPAL") {
//         const order = await createPaypalOrder({
//             bookingId,
//             amount: (service.priceCents / 100).toFixed(2),
//             currency: service.currency,
//         });

//         booking.paymentProvider = "PAYPAL";
//         booking.paymentIntentId = order.id;
//         await booking.save();

//         const link = order.links.find((l) => l.rel === "approve")?.href;
//         return res.json({ paymentUrl: link });
//     }

//     res.status(400).json({ error: "Unsupported provider" });
// };

// /* =========================
//    STRIPE WEBHOOK
// ========================= */
// export const stripeWebhook = async (req, res) => {
//     console.log("🟣 STRIPE WEBHOOK HIT");

//     let event;
//     try {
//         const sig = req.headers["stripe-signature"];
//         event = stripe.webhooks.constructEvent(
//             req.body,
//             sig,
//             process.env.STRIPE_WEBHOOK_SECRET
//         );
//         console.log("🔥 Stripe event received:", event.type);
//     } catch (err) {
//         console.error("❌ Stripe webhook signature error:", err.message);
//         return res.status(400).send("Webhook error");
//     }

//     if (event.type === "checkout.session.completed") {
//         const bookingId = event.data.object.metadata?.bookingId;
//         if (bookingId) {
//             console.log("🚀 confirmBooking called for:", bookingId);
//             await confirmBooking(bookingId, "STRIPE");
//         } else {
//             console.log("⚠️ Booking ID not found in metadata!", event.data.object);
//         }
//     }

//     res.json({ received: true });
// };






// /* =========================
//    PAYPAL SUCCESS
// ========================= */
// export const paypalSuccess = async (req, res) => {
//     const { bookingId } = req.query;
//     await confirmBooking(bookingId, "PAYPAL");
//     res.redirect(`${process.env.FRONTEND_URL}/success`);
// };

// /* =========================
//    FAKE CONFIRM
// ========================= */
// export const fakeConfirm = async (req, res) => {
//     if (process.env.NODE_ENV === "production") {
//         return res.status(403).json({ error: "Forbidden" });
//     }

//     const { bookingId } = req.body;
//     await confirmBooking(bookingId, "FAKE");

//     res.json({ success: true });
// };

// /* =========================
//    CONFIRM BOOKING
// ========================= */
// async function confirmBooking(bookingId, provider) {
//     const booking = await Booking.findById(bookingId);
//     if (!booking || booking.status !== "HOLD") return;
//     if (booking.expiresAt < new Date()) return;

//     const service = getServiceById(booking.serviceId);
//     if (!service) return;

//     booking.status = "CONFIRMED";
//     booking.paymentProvider = provider;
//     booking.cancelToken = crypto.randomUUID();
//     booking.expiresAt = null; // 🔥 disable TTL after confirmation
//     await booking.save();


//     const startISO = new Date(`${booking.date}T${booking.time}`).toISOString();
//     const endISO = new Date(
//         new Date(startISO).getTime() + service.durationMinutes * 60000
//     ).toISOString();

//     const event = await calendar.events.insert({
//         calendarId: "primary",
//         requestBody: {
//             summary: service.title,
//             start: { dateTime: startISO, timeZone: booking.timezone },
//             end: { dateTime: endISO, timeZone: booking.timezone },
//         },
//     });

//     booking.googleEventId = event.data.id;
//     await booking.save();

//     await sendUserConfirmedEmail({
//         email: booking.email,
//         date: booking.date,
//         time: booking.time,
//         timezone: booking.timezone,
//         link: `https://calendar.google.com/calendar/u/0/r/eventedit/${event.data.id}`,
//         bookingId: booking.cancelToken,
//     });

//     await sendAdminEmail({
//         email: booking.email,
//         date: booking.date,
//         time: booking.time,
//     });
// }


//=========================
import Stripe from "stripe";
import crypto from "crypto";
import Booking from "../models/bookingModel.js";
import { calendar } from "../config/calendar.js";
import { sendUserConfirmedEmail, sendAdminEmail } from "../services/emailService.js";
import { getServiceById } from "../utils/getServiceById.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const initPayment = async (req, res) => {
    const { bookingId, provider } = req.body;
    const booking = await Booking.findById(bookingId);

    if (!booking || booking.status !== "HOLD") {
        return res.status(400).json({ error: "Invalid booking or already processed" });
    }

    const service = getServiceById(booking.serviceId);

    if (provider === "STRIPE") {
        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            line_items: [{
                price_data: {
                    currency: service.currency.toLowerCase(),
                    product_data: { name: service.title },
                    unit_amount: service.priceCents,
                },
                quantity: 1,
            }],
            metadata: { bookingId: bookingId.toString() }, // Ensure ID is a string
            success_url: `${process.env.FRONTEND_URL}/success?id=${bookingId}`,
            cancel_url: `${process.env.FRONTEND_URL}/`,
        });

        booking.paymentProvider = "STRIPE";
        booking.paymentIntentId = session.id;
        await booking.save();
        return res.json({ paymentUrl: session.url });
    }
    // ... PayPal logic remains the same
};

export const stripeWebhook = async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
        event = stripe.webhooks.constructEvent(
            req.body, // This is the raw body from express.raw()
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        console.error(`❌ Webhook Error: ${err.message}`);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        const bookingId = session.metadata?.bookingId;

        if (bookingId) {
            console.log("✅ Payment verified. Confirming booking:", bookingId);
            await confirmBooking(bookingId, "STRIPE");
        }
    }

    res.json({ received: true });
};


/* =========================
   PAYPAL SUCCESS CALLBACK
========================= */
export const paypalSuccess = async (req, res) => {
    try {
        const { bookingId } = req.query;

        if (!bookingId) {
            return res.status(400).json({ error: "No booking ID provided" });
        }

        console.log("🟡 PayPal return hit for booking:", bookingId);

        // This calls the same confirmation logic as Stripe
        await confirmBooking(bookingId, "PAYPAL");

        // Redirect the user to your frontend success page
        res.redirect(`${process.env.FRONTEND_URL}/success?id=${bookingId}`);
    } catch (err) {
        console.error("❌ PayPal Success Error:", err);
        res.redirect(`${process.env.FRONTEND_URL}/payment-error`);
    }
};

/* =========================
   FAKE CONFIRM (FOR TESTING)
========================= */
export const fakeConfirm = async (req, res) => {
    // Safety check: Only allow this in development
    if (process.env.NODE_ENV === "production") {
        return res.status(403).json({ error: "Forbidden in production" });
    }

    const { bookingId } = req.body;

    if (!bookingId) {
        return res.status(400).json({ error: "Missing bookingId" });
    }

    console.log("🛠️ Manually triggering confirmation for:", bookingId);

    // We call our internal helper function
    await confirmBooking(bookingId, "FAKE_TEST");

    res.json({
        success: true,
        message: "Manual confirmation triggered. Check console for email/calendar logs."
    });
};

async function confirmBooking(bookingId, provider) {
    try {
        const booking = await Booking.findById(bookingId);

        // If it's already confirmed, don't run again (idempotency)
        if (!booking || booking.status === "CONFIRMED") return;

        const service = getServiceById(booking.serviceId);

        // Update Status
        booking.status = "CONFIRMED";
        booking.paymentProvider = provider;
        booking.cancelToken = crypto.randomUUID();
        booking.expiresAt = null; // Important: Stop the cleanup job from deleting this
        await booking.save();

        // Calendar Entry
        const startISO = new Date(`${booking.date}T${booking.time}`).toISOString();
        const endISO = new Date(new Date(startISO).getTime() + service.durationMinutes * 60000).toISOString();

        const event = await calendar.events.insert({
            calendarId: "primary",
            requestBody: {
                summary: `Consultation: ${service.title}`,
                description: `Client: ${booking.email}`,
                start: { dateTime: startISO, timeZone: booking.timezone },
                end: { dateTime: endISO, timeZone: booking.timezone },
            },
        });

        booking.googleEventId = event.data.id;
        await booking.save();

        // Emails - Wrapped in try/catch so one failure doesn't crash the whole confirm process
        try {
            await sendUserConfirmedEmail({
                email: booking.email,
                date: booking.date,
                time: booking.time,
                timezone: booking.timezone,
                link: event.data.htmlLink, // Use the actual Google Link
                bookingId: booking.cancelToken,
            });

            await sendAdminEmail({
                email: booking.email,
                date: booking.date,
                time: booking.time,
            });
            console.log("📧 Emails sent successfully");
        } catch (emailErr) {
            console.error("❌ Email failed but booking is confirmed:", emailErr);
        }

    } catch (err) {
        console.error("❌ Critical error in confirmBooking:", err);
    }
}