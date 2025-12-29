// import mongoose from "mongoose";

// const BookingSchema = new mongoose.Schema({
//     date: { type: String, required: true },
//     time: { type: String, required: true },
//     email: { type: String, required: true },
//     googleEventId: { type: String, required: true },
//     reminderSent: { type: Boolean, default: false },
// });

// const Booking = mongoose.model("Booking", BookingSchema);
// export default Booking;


//===================== code with payment version =====================//

import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    date: String,
    time: String,
    email: String,
    timezone: String,

    status: {
        type: String,
        enum: ["PENDING_PAYMENT", "CONFIRMED", "CANCELLED", "EXPIRED"],
        default: "PENDING_PAYMENT",
    },

    paymentProvider: {
        type: String,
        enum: ["STRIPE", "PAYPAL"],
    },

    paymentIntentId: String, // Stripe session OR PayPal order id

    googleEventId: String,
    calendarLink: String,

    expiresAt: {
        type: Date,
        required: true,
        index: { expires: 0 }
    },
});

export default mongoose.model("Booking", BookingSchema);
