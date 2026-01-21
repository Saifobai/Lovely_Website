import express from "express";
import { initPayment } from "../controllers/bookingController.js";


const router = express.Router();

router.post("/init", initPayment);

export default router;
