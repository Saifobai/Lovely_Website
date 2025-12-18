import nodemailer from "nodemailer";
import { userTemplate } from "./emailTemplates/userTemplate.js";
import { adminTemplate } from "./emailTemplates/adminTemplate.js";

export const mail = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

// User email
export const sendUserEmail = async ({
    email,
    date,
    time,
    timezone,
    link,
    bookingId,
}) => {
    await mail.sendMail({
        from: `"Lovely Booking" <${process.env.MAIL_USER}>`,
        to: email,
        subject: "Your Booking Confirmation",
        html: userTemplate({ date, time, timezone, link, bookingId }),
    });
};

// Admin email
export const sendAdminEmail = async ({ email, date, time }) => {
    console.log("📩 Sending admin email...");
    console.log("To:", process.env.MAIL_USER);
    await mail.sendMail({
        from: `"Lovely Booking" <${process.env.MAIL_USER}>`,
        to: process.env.MAIL_USER,
        subject: "New Booking Scheduled",
        html: adminTemplate({ email, date, time }),
    });
};
