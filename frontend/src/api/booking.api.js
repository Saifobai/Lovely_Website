export const createBooking = async (payload) => {
    const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    return res.json();
};

export const fetchBookedTimes = async (date) => {
    const res = await fetch(
        `http://localhost:5000/api/bookings/date/${date}`
    );
    return res.json();
};
