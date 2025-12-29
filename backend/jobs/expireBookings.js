import Booking from "../models/bookingModel.js";

export const expirePendingBookings = async () => {
    const now = new Date();

    const expired = await Booking.updateMany(
        {
            status: "PENDING_PAYMENT",
            expiresAt: { $lt: now },
        },
        { status: "EXPIRED" }
    );

    if (expired.modifiedCount > 0) {
        console.log(`⏳ Expired ${expired.modifiedCount} bookings`);
    }
};
