export const createPaypalOrder = async (bookingId) => {
    const res = await fetch(
        "http://localhost:5000/api/paypal/create-order",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ bookingId }),
        }
    );
    return res.json();
};
