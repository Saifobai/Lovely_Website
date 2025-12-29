import Stripe from "stripe";
import Booking from "../models/bookingModel.js";
import { handlePaymentSuccess } from "./paymentSuccessHandler.js";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// ----------------------------------------
// CREATE CHECKOUT SESSION
// ----------------------------------------
export const createCheckoutSession = async (req, res) => {
    try {
        const { bookingId } = req.body;

        const booking = await Booking.findById(bookingId);

        if (!booking || booking.status !== "PENDING_PAYMENT") {
            return res.status(400).json({ message: "Invalid booking" });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            customer_email: booking.email,

            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: "30-Minute Strategy Consultation",
                        },
                        unit_amount: 5000, // $50.00
                    },
                    quantity: 1,
                },
            ],

            metadata: {
                bookingId: booking._id.toString(),
            },

            success_url: `${process.env.FRONTEND_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.FRONTEND_URL}/payment-cancelled`,
        });

        res.json({ url: session.url });

    } catch (err) {
        console.error("Stripe session error:", err);
        res.status(500).json({ message: "Payment failed" });
    }
};

// ----------------------------------------
// STRIPE WEBHOOK
// ----------------------------------------
export const stripeWebhook = async (req, res) => {
    const sig = req.headers["stripe-signature"];

    let event;

    try {
        event = stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        console.error("Webhook signature error:", err.message);
        return res.status(400).send(`Webhook Error`);
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        const bookingId = session.metadata.bookingId;

        await handlePaymentSuccess(bookingId);
    }

    res.json({ received: true });
};
