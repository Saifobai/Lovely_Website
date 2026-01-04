import nodemailer from "nodemailer";

export const contactMail = nodemailer.createTransport({
    host: process.env.CONTACT_MAIL_HOST,
    port: process.env.CONTACT_MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.CONTACT_MAIL_USER,
        pass: process.env.CONTACT_MAIL_PASS,
    },
});
