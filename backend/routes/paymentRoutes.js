import express from "express";
import { initPayment, paypalSuccess, stripeWebhook } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/init", initPayment);
router.post("/stripe-webhook", stripeWebhook);
router.get("/paypal-success", paypalSuccess);

export default router;
