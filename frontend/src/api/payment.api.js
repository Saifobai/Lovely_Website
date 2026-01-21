export async function initPayment({ bookingId, provider }) {
    const res = await fetch(
        "http://localhost:5000/api/payments/init",
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
