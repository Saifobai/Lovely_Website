import Booking from "../models/bookingModel.js";

export async function expirePendingBookings() {
    await Booking.updateMany(
        {
            status: "HOLD",
            expiresAt: { $lt: new Date() },
        },
        { status: "EXPIRED" }
    );
}
