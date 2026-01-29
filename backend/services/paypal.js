import fetch from "node-fetch";

const BASE_URL = process.env.PAYPAL_BASE_URL;

async function getAccessToken() {
    const auth = Buffer.from(
        `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
    ).toString("base64");

    const res = await fetch(`${BASE_URL}/v1/oauth2/token`, {
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

export async function createPaypalOrder({ bookingId, amount, currency }) {
    const accessToken = await getAccessToken();

    const res = await fetch(`${BASE_URL}/v2/checkout/orders`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            intent: "CAPTURE",
            purchase_units: [
                {
                    reference_id: bookingId,
                    amount: {
                        currency_code: currency,
                        value: amount,
                    },
                },
            ],
            application_context: {
                return_url: `${process.env.BACKEND_URL}/payment/paypal-success?bookingId=${bookingId}`,
                cancel_url: `${process.env.FRONTEND_URL}/cancel`,
            },
        }),
    });

    return res.json();
}
