import fetch from "node-fetch";
import Booking from "../models/bookingModel.js";


const PAYPAL_BASE = process.env.PAYPAL_BASE_URL;

async function getAccessToken() {
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



//====================== PayPal Order  ======================//
export const createPayPalOrder = async (req, res) => {
    const { bookingId } = req.body;

    const booking = await Booking.findById(bookingId);
    if (!booking || booking.status !== "PENDING_PAYMENT") {
        return res.status(400).json({ error: "Invalid booking" });
    }

    const token = await getAccessToken();

    const order = await fetch(`${PAYPAL_BASE}/v2/checkout/orders`, {
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
                        currency_code: "USD",
                        value: "50.00", // consultation price
                    },
                },
            ],
            application_context: {
                return_url: `${process.env.FRONTEND_URL}/paypal-success?bookingId=${bookingId}`,
                cancel_url: `${process.env.FRONTEND_URL}/paypal-cancel?bookingId=${bookingId}`,
            },
        }),
    });

    const data = await order.json();

    booking.paymentProvider = "PAYPAL";
    booking.paymentIntentId = data.id;
    await booking.save();

    res.json({
        orderId: data.id,
        approvalUrl: data.links.find((l) => l.rel === "approve").href,
    });
};



//====================== Capture PayPal Order  ======================//

export const capturePayPalOrder = async (req, res) => {
    const { orderId } = req.params;

    const booking = await Booking.findOne({
        paymentIntentId: orderId,
        status: "PENDING_PAYMENT",
    });

    if (!booking) {
        return res.status(404).json({ error: "Booking not found" });
    }

    const token = await getAccessToken();

    const capture = await fetch(
        `${PAYPAL_BASE}/v2/checkout/orders/${orderId}/capture`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );

    const data = await capture.json();

    if (data.status === "COMPLETED") {
        await handlePaymentSuccess(booking._id);
        return res.json({ success: true });
    }

    res.status(400).json({ error: "Payment not completed" });
};
