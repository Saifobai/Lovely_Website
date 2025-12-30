// // import nodemailer from "nodemailer";
// // import { userTemplate } from "./emailTemplates/userTemplate.js";
// // import { adminTemplate } from "./emailTemplates/adminTemplate.js";

// // export const mail = nodemailer.createTransport({
// //     host: process.env.MAIL_HOST,
// //     port: process.env.MAIL_PORT,
// //     secure: false,
// //     auth: {
// //         user: process.env.MAIL_USER,
// //         pass: process.env.MAIL_PASS,
// //     },
// // });

// // // User email
// // export const sendUserEmail = async ({
// //     email,
// //     date,
// //     time,
// //     timezone,
// //     link,
// //     bookingId,
// // }) => {
// //     await mail.sendMail({
// //         from: `"Lovely Booking" <${process.env.MAIL_USER}>`,
// //         to: email,
// //         subject: "Your Booking Confirmation",
// //         html: userTemplate({ date, time, timezone, link, bookingId }),
// //     });
// // };


// // export const sendUserConfirmedEmail = async ({
// //     email,
// //     date,
// //     time,
// //     timezone,
// //     link,
// //     bookingId,
// // }) => {
// //     await mail.sendMail({
// //         from: `"Lovely Booking" <${process.env.MAIL_USER}>`,
// //         to: email,
// //         subject: "✅ Your Booking Is Confirmed",
// //         html: userTemplate({
// //             date,
// //             time,
// //             timezone,
// //             link,
// //             bookingId,
// //             isConfirmed: true,
// //         }),
// //     });
// // };




// // // Admin email
// // export const sendAdminEmail = async ({ email, date, time }) => {
// //     console.log("📩 Sending admin email...");
// //     console.log("To:", process.env.MAIL_USER);
// //     await mail.sendMail({
// //         from: `"Lovely Booking" <${process.env.MAIL_USER}>`,
// //         to: process.env.MAIL_USER,
// //         subject: "New Booking Scheduled",
// //         html: adminTemplate({ email, date, time }),
// //     });
// // };



// //=================================================

// import nodemailer from "nodemailer";
// import { userTemplate } from "./emailTemplates/userConfirmedTemplate.js";
// import { adminTemplate } from "./emailTemplates/adminTemplate.js";

// export const mail = nodemailer.createTransport({
//     host: process.env.MAIL_HOST,
//     port: process.env.MAIL_PORT,
//     secure: false,
//     auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//     },
// });






// /* =========================
//    USER – PENDING PAYMENT
// ========================= */
// export const sendUserPendingPaymentEmail = async ({
//     email,
//     date,
//     time,
//     timezone,
//     paymentLink,
//     bookingId,
// }) => {
//     try {
//         const info = await mail.sendMail({
//             from: `"Lovely Booking" <${process.env.MAIL_USER}>`,
//             to: email,
//             subject: "⏳ Complete Your Booking Payment",
//             html: userTemplate({
//                 date,
//                 time,
//                 timezone,
//                 bookingId,
//                 paymentLink,
//                 status: "PENDING_PAYMENT",
//             }),
//         });

//         console.log("✅ User pending email sent:", info.messageId);

//     } catch (err) {
//         console.error("❌ User pending email FAILED:", err);
//     }
// };






// /* =========================
//    USER – CONFIRMED
// ========================= */
// export const sendUserConfirmedEmail = async ({
//     email,
//     date,
//     time,
//     timezone,
//     link,
//     bookingId,
// }) => {
//     await mail.sendMail({
//         from: `"Lovely Booking" <${process.env.MAIL_USER}>`,
//         to: email,
//         subject: "✅ Your Booking Is Confirmed",
//         html: userTemplate({
//             date,
//             time,
//             timezone,
//             bookingId,
//             link,
//             status: "CONFIRMED",
//         }),
//     });
// };

// /* =========================
//    ADMIN NOTIFICATION
// ========================= */
// export const sendAdminEmail = async ({ email, date, time }) => {
//     await mail.sendMail({
//         from: `"Lovely Booking" <${process.env.MAIL_USER}>`,
//         to: process.env.MAIL_USER,
//         subject: "New Booking Scheduled",
//         html: adminTemplate({ email, date, time }),
//     });
// };


import nodemailer from "nodemailer";
import { userPendingTemplate } from "./emailTemplates/userPendingTemplate.js";
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

/* =========================
   USER – PENDING PAYMENT
========================= */
export const sendUserPendingPaymentEmail = async ({
    email,
    date,
    time,
    timezone,
    paymentLink,
    bookingId,
}) => {
    await mail.sendMail({
        from: `"Lovely Booking" <${process.env.MAIL_USER}>`,
        to: email,
        subject: "⏳ Complete Your Booking Payment",
        html: userPendingTemplate({
            date,
            time,
            timezone,
            paymentLink,
            bookingId,
        }),
    });
};

/* =========================
   USER – CONFIRMED
========================= */
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
