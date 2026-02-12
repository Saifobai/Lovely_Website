
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        serviceId: { type: String, required: true },

        name: String,
        email: { type: String, required: true },

        date: { type: String },
        time: { type: String },
        timezone: { type: String },


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
            required: false,
            index: { expires: 0 },
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
