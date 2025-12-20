import twilio from 'twilio';

const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);


export const sendSMS = async ({ phone, date, time, timezone }) => {

    try {
        await client.messages.create({
            body: `📅 Your booking is confirmed!\nDate: ${date}\nTime: ${time}\nTimezone: ${timezone}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phone,
        })
        console.log("SMS sent to:", phone);
    } catch (error) {
        console.error("SMS error:", error);
    }
}