

export const payWithStripe = async () => {
    const res = await fetch("http://localhost:5000/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            bookingId: pendingBooking.bookingId,
        }),
    });

    const data = await res.json();
    window.location.href = data.url;
};



export const payWithPaypal = async () => {
    const res = await fetch("http://localhost:5000/api/paypal/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            bookingId: pendingBooking.bookingId,
        }),
    });

    const data = await res.json();
    window.location.href = data.approveUrl;
};
