// import express from "express";
// import {

//     cancelBooking,
//     stripeWebhook,
//     paypalSuccess,
//     createBooking,
//     getBookedTimes,
// } from "../controllers/bookingController.js";

// const router = express.Router();

// router.post("/", createBooking);
// router.get("/date/:date", getBookedTimes);
// router.delete("/:id", cancelBooking);

// router.post(
//     "/stripe-webhook",
//     express.raw({ type: "application/json" }),
//     stripeWebhook
// );

// router.get("/paypal-success", paypalSuccess);

// export default router;


//============================================================
import express from "express";
import {
    createBookingHold,
    cancelBooking,

    getBookingById,
    getBookingsByDate,
    getBookingByToken,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/hold", createBookingHold);
router.get("/date/:date", getBookingsByDate);
router.get("/:id", getBookingById);
router.delete("/cancel/:token", cancelBooking);

router.get("/details/:id", getBookingByToken);



export default router;
