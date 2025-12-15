import express from "express";
import cors from "cors";
import { google } from "googleapis";

const app = express();
app.use(cors());
app.use(express.json());

const auth = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/calendar"]
);

const calendar = google.calendar({ version: "v3", auth });

app.post("/api/book", async (req, res) => {
    const { name, email, date } = req.body;

    const event = {
        summary: `Meeting with ${name}`,
        description: email,
        start: { dateTime: date },
        end: { dateTime: new Date(new Date(date).getTime() + 30 * 60000) },
    };

    await calendar.events.insert({
        calendarId: "primary",
        resource: event,
    });

    res.json({ success: true });
});

app.listen(5000, () => console.log("Server running on 5000"));
