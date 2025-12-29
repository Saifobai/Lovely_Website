import express from "express";
import {
    createPayPalOrder,
    capturePayPalOrder,
} from "../controllers/paypalController.js";

const router = express.Router();

router.post("/create-order", createPayPalOrder);
router.post("/capture/:orderId", capturePayPalOrder);

export default router;
