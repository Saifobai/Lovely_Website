import express from "express";
import {
    initPayment,
    paypalSuccess,
    fakeConfirm,
} from "../controllers/paymentController.js";

const router = express.Router();

// Initialize payment (Stripe or PayPal)
router.post("/init", initPayment);

// PayPal specific callback
router.get("/paypal-success", paypalSuccess);

// Fake confirmation for local development only
router.post("/fake-confirm", fakeConfirm);

/**
 * NOTE: The Stripe Webhook route is defined in index.js 
 * directly to ensure it uses express.raw() before 
 * express.json() hits it.
 */

export default router;