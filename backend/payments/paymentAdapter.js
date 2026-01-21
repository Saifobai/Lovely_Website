// import Stripe from "stripe";
// import fetch from "node-fetch";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// const PAYPAL_BASE = process.env.PAYPAL_BASE_URL;

// async function getPayPalToken() {
//     const auth = Buffer.from(
//         `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
//     ).toString("base64");

//     const res = await fetch(`${PAYPAL_BASE}/v1/oauth2/token`, {
//         method: "POST",
//         headers: {
//             Authorization: `Basic ${auth}`,
//             "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: "grant_type=client_credentials",
//     });

//     const data = await res.json();
//     return data.access_token;
// }

// export async function createPaymentSession({ booking, provider }) {
//     const p = provider.toUpperCase();

//     if (booking.paymentIntentId) {
//         throw new Error("Payment already initialized");
//     }

//     // ---------- STRIPE ----------
//     if (p === "STRIPE") {
//         const session = await stripe.checkout.sessions.create(
//             {
//                 mode: "payment",
//                 customer_email: booking.email,

//                 line_items: [
//                     {
//                         price_data: {
//                             currency: booking.currency.toLowerCase(),
//                             unit_amount: booking.amount,
//                             product_data: {
//                                 name: booking.serviceId,
//                             },
//                         },
//                         quantity: 1,
//                     },
//                 ],

//                 metadata: {
//                     bookingId: booking._id.toString(),
//                 },

//                 success_url: `${process.env.FRONTEND_URL}/payment-success`,
//                 cancel_url: `${process.env.FRONTEND_URL}/payment-cancel`,
//             },
//             {
//                 idempotencyKey: booking._id.toString(),
//             }
//         );

//         return {
//             paymentIntentId: session.id,
//             paymentUrl: session.url,
//         };
//     }

//     // ---------- PAYPAL ----------
//     if (p === "PAYPAL") {
//         const token = await getPayPalToken();

//         const res = await fetch(`${PAYPAL_BASE}/v2/checkout/orders`, {
//             method: "POST",
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 intent: "CAPTURE",
//                 purchase_units: [
//                     {
//                         amount: {
//                             currency_code: booking.currency,
//                             value: (booking.amount / 100).toFixed(2),
//                         },
//                     },
//                 ],
//                 application_context: {
//                     return_url: `${process.env.FRONTEND_URL}/paypal-success?bookingId=${booking._id}`,
//                     cancel_url: `${process.env.FRONTEND_URL}/payment-cancel`,
//                 },
//             }),
//         });

//         const data = await res.json();
//         const approvalUrl = data.links?.find(l => l.rel === "approve")?.href;

//         if (!approvalUrl) {
//             throw new Error("PayPal approval URL missing");
//         }

//         return {
//             paymentIntentId: data.id,
//             paymentUrl: approvalUrl,
//         };
//     }

//     throw new Error(`Unsupported payment provider: ${provider}`);
// }



import Stripe from "stripe";
import fetch from "node-fetch";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const PAYPAL_BASE = process.env.PAYPAL_BASE_URL;

async function getPayPalToken() {
    const auth = Buffer.from(
        `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
    ).toString("base64");

    const res = await fetch(`${PAYPAL_BASE}/v1/oauth2/token`, {
        method: "POST",
        headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
    });

    const data = await res.json();
    return data.access_token;
}

export async function createPaymentSession({ booking, provider }) {
    const p = provider.toUpperCase();

    if (booking.paymentIntentId) {
        throw new Error("Payment already initialized");
    }

    if (p === "STRIPE") {
        const session = await stripe.checkout.sessions.create(
            {
                mode: "payment",
                customer_email: booking.email,
                line_items: [
                    {
                        price_data: {
                            currency: booking.currency.toLowerCase(),
                            unit_amount: booking.amount,
                            product_data: {
                                name: booking.serviceId,
                            },
                        },
                        quantity: 1,
                    },
                ],
                metadata: { bookingId: booking._id.toString() },
                success_url: `${process.env.FRONTEND_URL}/payment-success`,
                cancel_url: `${process.env.FRONTEND_URL}/payment-cancel`,
            },
            { idempotencyKey: booking._id.toString() }
        );

        return {
            paymentIntentId: session.id,
            paymentUrl: session.url,
        };
    }

    if (p === "PAYPAL") {
        const token = await getPayPalToken();

        const res = await fetch(`${PAYPAL_BASE}/v2/checkout/orders`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                intent: "CAPTURE",
                purchase_units: [
                    {
                        amount: {
                            currency_code: booking.currency,
                            value: (booking.amount / 100).toFixed(2),
                        },
                    },
                ],
                application_context: {
                    return_url: `${process.env.FRONTEND_URL}/paypal-success?bookingId=${booking._id}`,
                    cancel_url: `${process.env.FRONTEND_URL}/payment-cancel`,
                },
            }),
        });

        const data = await res.json();
        const approvalUrl = data.links?.find(l => l.rel === "approve")?.href;

        return {
            paymentIntentId: data.id,
            paymentUrl: approvalUrl,
        };
    }

    throw new Error("Unsupported payment provider");
}
