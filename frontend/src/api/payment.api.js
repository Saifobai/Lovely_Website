
const API_URL = import.meta.env.VITE_API_URL;
export async function initPayment({ bookingId, provider }) {
    const res = await fetch(
        `${API_URL}/payments/init`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ bookingId, provider }),
        }
    );

    if (!res.ok) {
        throw new Error("Payment initialization failed");
    }

    return res.json();
}
