
import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectToDb from "./config/mongodb.js";
import bookingRoutes from "./routes/bookingsRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js"
import contactRoutes from "./routes/contactRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js"
import testRoutes from "./routes/testRoutes.js";
import { expirePendingBookings } from "./jobs/expireBookings.js";
import { stripeWebhook } from "./controllers/PaymentController.js";


// ======================
// INIT APP
// ======================
const app = express();



//================================
//STRIPE WEBHOOK (RAW BODY)
//================================

app.post(
    "/api/payments/stripe-webhook",
    bodyParser.raw({ type: "application/json" }),
    stripeWebhook
);

// ======================
// PATH FIX (ES MODULES)
// ======================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// ======================
// MIDDLEWARES
// ======================
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: true, // allow frontend domain
        credentials: true,
    })
);

// ======================
// DATABASE
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
app.use("/api/test", testRoutes);

// ======================
// SERVE REACT (VITE BUILD)
// ======================
const clientPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientPath));

// React fallback (Express 5 / Node 22 SAFE)
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(clientPath, "index.html"));
});

// ======================
// START SERVER
// ======================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
