export const adminTemplate = ({ email, date, time }) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
    <h2 style="color: #DC2626;">📩 New Booking Received</h2>

    <p>A new consultation has been scheduled.</p>

    <div style="
      border: 1px solid #eee;
      border-radius: 10px;
      padding: 15px;
      background: #f9f9f9;
      margin: 20px 0;
    ">
      <p><strong>Client Email:</strong> ${email}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
    </div>

    <p>Open Google Calendar to review the booking.</p>
  </div>
`;
