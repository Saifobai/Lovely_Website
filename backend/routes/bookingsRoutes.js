import express from "express";
import { createBooking, getBookedTimes } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/:date", getBookedTimes);

export default router;
