import Booking from "../models/bookingModel";

export const expireBookings = async () => {
    const now = new Date();

    await Booking.updateMany(
        {
            status: "PENDING_PAYMENT",
            expiresAt: { $lt: now },
        },
        { status: "EXPIRED" }
    );
};
