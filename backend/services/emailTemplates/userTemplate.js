export const userTemplate = ({ date, time, timezone }) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
    <h2 style="color: #2563EB;">🎉 Your Booking is Confirmed!</h2>

    <p>Thank you for booking a consultation.</p>

    <div style="
      border: 1px solid #eee;
      border-radius: 10px;
      padding: 15px;
      background: #f9f9f9;
      margin: 20px 0;
    ">
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Timezone:</strong> ${timezone}</p>
    </div>

    <p>We look forward to speaking with you.</p>
    <br>
    <p style="font-size: 14px; color: #999;">
      If you have questions, reply directly to this email.
    </p>
  </div>
`;
