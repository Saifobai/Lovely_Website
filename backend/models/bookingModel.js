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



// import mongoose from "mongoose";

// const bookingSchema = new mongoose.Schema(
//     {
//         serviceId: { type: String, required: true },

//         name: String,
//         email: String,

//         date: { type: String, required: true },
//         time: { type: String, required: true },
//         timezone: { type: String, required: true },

//         status: {
//             type: String,
//             enum: ["HOLD", "CONFIRMED", "CANCELLED", "EXPIRED"],
//             default: "HOLD",
//         },

//         paymentProvider: {
//             type: String,
//             enum: ["STRIPE", "PAYPAL"],
//         },

//         paymentIntentId: String,

//         expiresAt: {
//             type: Date,
//             required: true,
//             index: true,
//         },
//     },
//     { timestamps: true }
// );

// // Mongo auto-delete expired holds (hard safety)
// bookingSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// export default mongoose.model("Booking", bookingSchema);


//===================================================================
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        serviceId: { type: String, required: true },

        name: String,
        email: { type: String, required: true },

        date: { type: String, required: true },
        time: { type: String, required: true },
        timezone: { type: String, required: true },

        status: {
            type: String,
            enum: ["HOLD", "CONFIRMED", "CANCELLED"],
            default: "HOLD",
        },

        paymentProvider: {
            type: String,
            enum: ["STRIPE", "PAYPAL", "FAKE"],
        },

        paymentIntentId: String,

        cancelToken: {
            type: String,
            index: true,
        },

        expiresAt: {
            type: Date,
            required: true,
            index: true,
        },

        googleEventId: String,
    },
    { timestamps: true }
);

// 🔥 Auto-delete expired holds
bookingSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// Prevent double booking (same service, date, time)
bookingSchema.index(
    { serviceId: 1, date: 1, time: 1 },
    { unique: true, partialFilterExpression: { status: { $ne: "CANCELLED" } } }
);

export default mongoose.model("Booking", bookingSchema);
