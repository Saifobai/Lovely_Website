import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import connectToDb from "./config/mongodb.js"
import bookingRoutes from "./routes/bookingsRoutes.js";
// import "./services/smsReminderService.js";


// middleware
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",  // Change this to your frontend URL
    credentials: true, // Allows cookies and authentication headers
}));

// connecting to the database
connectToDb()


app.use("/api/bookings", bookingRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));

