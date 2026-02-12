
// booking.api.js
const API_URL = import.meta.env.VITE_API_URL;

export async function createBooking(payload) {
    const res = await fetch(`${API_URL}/bookings/hold`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Hold failed");
    }
    return res.json();
}

export async function fetchBookedTimes(date) {
    const res = await fetch(`${API_URL}/bookings/date/${date}`);
    if (!res.ok) throw new Error("Failed to fetch slots");
    return res.json();
}



// payment.api.js


