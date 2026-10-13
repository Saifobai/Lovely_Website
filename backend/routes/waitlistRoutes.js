import { Router } from "express";
import rateLimit from "express-rate-limit";
import { submitWaitlist } from "../controllers/waitlistController.js";

const router = Router();

// 5 requests per IP per 15 minutes: plenty for people, painful for spam.
const waitlistLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        message: "Too many requests. Please try again in a few minutes.",
    },
});

router.post("/", waitlistLimiter, submitWaitlist);

export default router;