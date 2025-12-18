import express from "express";
import { createBooking, getBookedTimes, cancelBooking } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/date/:date", getBookedTimes);
router.delete("/:id", cancelBooking);


export default router;
