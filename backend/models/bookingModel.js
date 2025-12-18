import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    date: { type: String, required: true },
    time: { type: String, required: true },
    email: { type: String, required: true },
    googleEventId: { type: String, required: true }
});

const Booking = mongoose.model("Booking", BookingSchema);
export default Booking;
