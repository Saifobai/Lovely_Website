// import mongoose from "mongoose";

// const BookingSchema = new mongoose.Schema(
//     {
//         date: String,
//         time: String,
//         email: String,
//         timezone: String,

//         status: {
//             type: String,
//             enum: ["PENDING_PAYMENT", "CONFIRMED", "CANCELLED", "EXPIRED"],
//             default: "PENDING_PAYMENT",
//         },

//         paymentProvider: {
//             type: String,
//             enum: ["STRIPE", "PAYPAL"],
//         },

//         paymentIntentId: String,

//         googleEventId: String,
//         calendarLink: String,

//         expiresAt: {
//             type: Date,
//             required: true,
//         },
//     },
//     { timestamps: true }
// );

// export default mongoose.model("Booking", BookingSchema);



// import mongoose from "mongoose";

// const BookingSchema = new mongoose.Schema(
//     {
//         date: String,
//         time: String,
//         email: String,
//         timezone: String,

//         serviceId: String,
//         amount: Number,
//         currency: String,

//         status: {
//             type: String,
//             enum: ["PENDING_PAYMENT", "CONFIRMED", "CANCELLED", "EXPIRED"],
//             default: "PENDING_PAYMENT",
//         },

//         paymentProvider: {
//             type: String,
//             enum: ["STRIPE", "PAYPAL"],
//         },

//         paymentIntentId: String,

//         googleEventId: String,
//         calendarLink: String,

//         expiresAt: Date,
//     },
//     { timestamps: true }
// );

// export default mongoose.model("Booking", BookingSchema);



import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
    {
        date: String,
        time: String,
        email: String,
        timezone: String,

        serviceId: String,
        amount: Number,
        currency: String,

        status: {
            type: String,
            enum: ["PENDING_PAYMENT", "CONFIRMED", "CANCELLED", "EXPIRED"],
            default: "PENDING_PAYMENT",
        },

        paymentProvider: {
            type: String,
            enum: ["STRIPE", "PAYPAL"],
        },

        paymentIntentId: String,

        googleEventId: String,
        calendarLink: String,

        expiresAt: Date,
    },
    { timestamps: true }
);

const Booking = mongoose.model("Booking", BookingSchema);

export default Booking;
