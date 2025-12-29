import express from "express";
import {
    createCheckoutSession,
    stripeWebhook,
} from "../controllers/stripeController.js";

const router = express.Router();

// Create Stripe Checkout
router.post("/checkout", createCheckoutSession);

// Stripe Webhook (RAW BODY REQUIRED)
router.post(
    "/webhook",
    express.raw({ type: "application/json" }),
    stripeWebhook
);

export default router;
