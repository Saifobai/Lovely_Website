export const createStripeSession = async (bookingId) => {
    const res = await fetch(
        "http://localhost:5000/api/stripe/create-checkout-session",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ bookingId }),
        }
    );
    return res.json();
};
