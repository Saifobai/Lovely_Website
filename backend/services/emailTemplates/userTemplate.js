export const userTemplate = ({ date, time, timezone, link, bookingId }) => `
  <div style="font-family:Arial, Helvetica, sans-serif; background:#ffffff; padding:20px;">
    <div style="max-width:600px; margin:0 auto; border:1px solid #eeeeee; border-radius:12px; padding:30px;">

      <h2 style="color:#6B21A8; font-size:24px; text-align:center; margin-bottom:20px;">
        🎉 Booking Confirmed!
      </h2>

      <p style="text-align:center; font-size:15px; color:#444; margin-bottom:30px;">
        Thank you for scheduling a consultation call.
      </p>

      <div style="padding:15px; background:#f3f3f3; border-radius:8px; font-size:15px; color:#333; margin-bottom:30px;">
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Timezone:</strong> ${timezone}</p>
      </div>

      <a href="${link}" target="_blank"
        style="
          display:block;
          text-align:center;
          background:#6B21A8;
          color:white;
          padding:14px 0;
          border-radius:8px;
          text-decoration:none;
          font-size:16px;
          font-weight:bold;
        ">
        📅 Add to Google Calendar
      </a>

      <br><br>

      <a href="http://localhost:5173/cancel/${bookingId}" 
       target="_blank"
       style="color:#6B21A8; font-weight:bold;">
      Cancel booking
    </a>

      <p style="text-align:center; font-size:13px; color:#666; margin-top:30px;">
        If you have any questions, reply to this email.
      </p>
    </div>
  </div>
`;
