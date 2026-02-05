import express from "express";
import {
    initPayment,
    paypalSuccess,
    stripeWebhook,
    fakeConfirm,
} from "../controllers/paymentController.js";

const router = express.Router();

router.post("/init", initPayment);
router.get("/paypal-success", paypalSuccess);
router.post("/stripe-webhook", express.raw({ type: "application/json" }), stripeWebhook);

// Fake (local only)
router.post("/fake-confirm", fakeConfirm);

export default router;
