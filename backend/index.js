// import "dotenv/config";
// import express from "express";
// import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";
// import cors from "cors";
// import connectToDb from "./config/mongodb.js"
// import bookingRoutes from "./routes/bookingsRoutes.js";
// import stripeRoutes from "./routes/stripeRoutes.js";
// import paypalRoutes from "./routes/paypalRoutes.js";
// import contactRoutes from "./routes/contactRoutes.js"
// import { expirePendingBookings } from "./jobs/expireBookings.js";
// // import "./services/emailReminderService.js";
// // import "./services/smsReminderService.js";




// // ======================
// // INIT APP
// // ======================
// const app = express();

// // ======================
// // STRIPE WEBHOOK (RAW BODY — MUST BE FIRST)
// // ======================
// app.use(
//     "/api/stripe/webhook",
//     express.raw({ type: "application/json" })
// );



// app.use(express.json());
// app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors({
//     origin: "http://localhost:5173",  // Change this to your frontend URL
//     credentials: true, // Allows cookies and authentication headers
// }));

// // connecting to the database
// connectToDb()


// setInterval(expirePendingBookings, 60 * 1000);

// // ======================
// // ROUTES
// // ======================
// app.use("/api/bookings", bookingRoutes);
// app.use("/api/stripe", stripeRoutes);
// app.use("/api/paypal", paypalRoutes);
// app.use("/api/contact", contactRoutes);

// app.listen(5000, () => console.log("Server running on port 5000"));



//========================================
import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectToDb from "./config/mongodb.js";
import bookingRoutes from "./routes/bookingsRoutes.js";
import stripeRoutes from "./routes/stripeRoutes.js";
import paypalRoutes from "./routes/paypalRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import { expirePendingBookings } from "./jobs/expireBookings.js";

// ======================
// INIT APP
// ======================
const app = express();

// ======================
// PATH FIX (ES MODULES)
// ======================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ======================
// STRIPE WEBHOOK (RAW BODY — MUST BE FIRST)
// ======================
app.use(
    "/api/stripe/webhook",
    express.raw({ type: "application/json" })
);

// ======================
// MIDDLEWARES
// ======================
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
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
app.use("/api/stripe", stripeRoutes);
app.use("/api/paypal", paypalRoutes);
app.use("/api/contact", contactRoutes);
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
