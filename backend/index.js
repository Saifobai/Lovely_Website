import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectToDb from "./config/mongodb.js";
import bookingRoutes from "./routes/bookingsRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js"
import contactRoutes from "./routes/contactRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js"
import { expirePendingBookings } from "./jobs/expireBookings.js";

const app = express();

// ======================
// MIDDLEWARES
// ======================
app.use(cors({ origin: true, credentials: true }));

// 🚨 CRITICAL: The Webhook MUST come before express.json()
// and it MUST use express.raw()
import { stripeWebhook } from "./controllers/paymentController.js";
app.post(
    "/api/payments/stripe-webhook",
    express.raw({ type: "application/json" }),
    stripeWebhook
);

// Now we can use JSON for everything else
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// ======================
// DATABASE & JOBS
// ======================
connectToDb();
setInterval(expirePendingBookings, 60 * 1000);

// ======================
// API ROUTES
// ======================
app.use("/api/bookings", bookingRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/services", serviceRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientPath));

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(clientPath, "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));