

import nodemailer from "nodemailer";

import { userConfirmedTemplate } from "./emailTemplates/userConfirmedTemplate.js";
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


export const sendUserConfirmedEmail = async ({
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
        subject: "✅ Your Booking Is Confirmed",
        html: userConfirmedTemplate({
            date,
            time,
            timezone,
            link,
            bookingId,
        }),
    });
};

/* =========================
   ADMIN – CONFIRMED ONLY
========================= */
export const sendAdminEmail = async ({ email, date, time }) => {
    await mail.sendMail({
        from: `"Lovely Booking" <${process.env.MAIL_USER}>`,
        to: process.env.MAIL_USER,
        subject: "📩 New Confirmed Booking",
        html: adminTemplate({ email, date, time }),
    });
};
