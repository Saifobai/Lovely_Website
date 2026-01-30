// export async function createBooking(payload) {
//     const res = await fetch("http://localhost:5000/api/bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//     });

//     if (!res.ok) throw new Error("Booking failed");

//     return res.json();
// }

// export async function fetchBookedTimes(date) {
//     const res = await fetch(
//         `http://localhost:5000/api/bookings/date/${date}`
//     );

//     return res.json();
// }


//============================================================
export async function createBooking(payload) {
    const res = await fetch("http://localhost:5000/api/bookings/hold", {
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
    const res = await fetch(
        `http://localhost:5000/api/bookings/date/${date}`
    );

    if (!res.ok) throw new Error("Failed to fetch slots");

    return res.json();
}
