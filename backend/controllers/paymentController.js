
import Stripe from "stripe";
import crypto from "crypto";
import Booking from "../models/bookingModel.js";
import { calendar } from "../config/calendar.js";
import { sendUserExclusiveEmail, sendUserConfirmedEmail, sendAdminEmail } from "../services/emailService.js";
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

// async function confirmBooking(bookingId, provider) {
//     try {
//         const booking = await Booking.findById(bookingId);
//         if (!booking || booking.status === "CONFIRMED") return;

//         const service = getServiceById(booking.serviceId);

//         // 1. Generate the working PUBLIC Google Link
//         const datePart = booking.date.replace(/-/g, '');
//         const timePart = booking.time.slice(0, 5).replace(/:/g, ''); // Ensure HHMM format
//         const startTimestamp = `${datePart}T${timePart}00`;

//         const endDateTime = new Date(`${booking.date}T${booking.time}`);
//         endDateTime.setMinutes(endDateTime.getMinutes() + service.durationMinutes);
//         const endTimestamp = endDateTime.toISOString().replace(/-|:|\.\d\d\d/g, "").slice(0, 15);

//         const publicGoogleLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(service.title)}&dates=${startTimestamp}/${endTimestamp}&details=${encodeURIComponent("Your strategic session is confirmed.")}&location=${encodeURIComponent("Online Session")}&sf=true&output=xml`;

//         // 2. Update Status and Security
//         booking.status = "CONFIRMED";
//         booking.paymentProvider = provider;
//         booking.cancelToken = crypto.randomUUID(); // Generate the token for the cancel link
//         booking.expiresAt = null; // Prevent the DB from deleting the record
//         await booking.save();

//         // 3. Insert into YOUR Google Calendar (Admin view)
//         const startISO = new Date(`${booking.date}T${booking.time}`).toISOString();
//         const endISO = new Date(new Date(startISO).getTime() + service.durationMinutes * 60000).toISOString();

//         const event = await calendar.events.insert({
//             calendarId: "primary",
//             requestBody: {
//                 summary: `Consultation: ${service.title}`,
//                 description: `Client: ${booking.email}`,
//                 start: { dateTime: startISO, timeZone: booking.timezone },
//                 end: { dateTime: endISO, timeZone: booking.timezone },
//             },
//         });

//         booking.googleEventId = event.data.id;
//         await booking.save();

//         // 4. Send Emails (Use the publicGoogleLink here!)
//         try {
//             await sendUserConfirmedEmail({
//                 email: booking.email,
//                 date: booking.date,
//                 time: booking.time,
//                 timezone: booking.timezone,
//                 link: publicGoogleLink, // <--- USE THE PUBLIC LINK HERE
//                 bookingId: booking.cancelToken,
//             });

//             await sendAdminEmail({
//                 email: booking.email,
//                 date: booking.date,
//                 time: booking.time,
//             });
//             console.log("📧 Emails sent successfully with working calendar link");
//         } catch (emailErr) {
//             console.error("❌ Email failed but booking is confirmed:", emailErr);
//         }

//     } catch (err) {
//         console.error("❌ Critical error in confirmBooking:", err);
//     }
// }


async function confirmBooking(bookingId, provider) {
    try {
        const booking = await Booking.findById(bookingId);
        if (!booking || booking.status === "CONFIRMED") return;

        const service = getServiceById(booking.serviceId);

        booking.status = "CONFIRMED";
        booking.paymentProvider = provider;
        booking.cancelToken = crypto.randomUUID();
        booking.expiresAt = null;

        await booking.save();

        // 🔥 IF NOT EXCLUSIVE → CREATE GOOGLE EVENT
        if (!service.isExclusive) {
            const startISO = new Date(`${booking.date}T${booking.time}`).toISOString();
            const endISO = new Date(
                new Date(startISO).getTime() + service.durationMinutes * 60000
            ).toISOString();

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
        }

        // 🔥 SEND CORRECT EMAIL
        if (service.isExclusive) {
            await sendUserExclusiveEmail({
                email: booking.email,
                bookingId: booking.cancelToken,
            });
        } else {
            const datePart = booking.date.replace(/-/g, "");
            const timePart = booking.time.slice(0, 5).replace(/:/g, "");
            const startTimestamp = `${datePart}T${timePart}00`;

            const endDateTime = new Date(`${booking.date}T${booking.time}`);
            endDateTime.setMinutes(
                endDateTime.getMinutes() + service.durationMinutes
            );

            const endTimestamp = endDateTime
                .toISOString()
                .replace(/-|:|\.\d\d\d/g, "")
                .slice(0, 15);

            const publicGoogleLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                service.title
            )}&dates=${startTimestamp}/${endTimestamp}`;

            await sendUserConfirmedEmail({
                email: booking.email,
                date: booking.date,
                time: booking.time,
                timezone: booking.timezone,
                link: publicGoogleLink,
                bookingId: booking.cancelToken,
            });
        }

        await sendAdminEmail({
            email: booking.email,
            date: booking.date || "Manual Scheduling Required",
            time: booking.time || "-",
        });

        console.log("✅ Booking confirmed successfully");
    } catch (err) {
        console.error("❌ Error in confirmBooking:", err);
    }
}
