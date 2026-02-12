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



export default router;