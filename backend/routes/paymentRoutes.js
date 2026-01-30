import express from "express";
import { fakePaypalConfirm, initPayment, paypalSuccess, stripeWebhook } from "../controllers/PaymentController.js";


const router = express.Router();

router.post("/init", initPayment);
router.get("/paypal-success", paypalSuccess);


// Stripe webhook endpoint fake for testing in dev/local mode
router.post("/test-confirm/:bookingId", async (req, res) => {
    await confirmBooking(req.params.bookingId);
    res.json({ success: true, mode: "manual-test" });
});

// 🧪 FAKE PayPal (DEV ONLY)
router.post("/paypal-fake-confirm", fakePaypalConfirm);


export default router;
