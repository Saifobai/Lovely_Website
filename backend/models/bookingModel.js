import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    date: String,
    time: String,
    email: String,
});

const Booking = mongoose.model("Booking", BookingSchema);
export default Booking;
