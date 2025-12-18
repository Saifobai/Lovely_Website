// export const adminTemplate = ({ email, date, time }) => `
//   <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
//     <h2 style="color: #DC2626;">📩 New Booking Received</h2>

//     <p>A new consultation has been scheduled.</p>

//     <div style="
//       border: 1px solid #eee;
//       border-radius: 10px;
//       padding: 15px;
//       background: #f9f9f9;
//       margin: 20px 0;
//     ">
//       <p><strong>Client Email:</strong> ${email}</p>
//       <p><strong>Date:</strong> ${date}</p>
//       <p><strong>Time:</strong> ${time}</p>
//     </div>

//     <p>Open Google Calendar to review the booking.</p>
//   </div>
// `;


export const adminTemplate = ({ email, date, time }) => `
  <div style="font-family: Arial, sans-serif; background:#fafafa; padding:30px;">
    <div style="max-width:600px; margin:0 auto; background:white; border-radius:16px; padding:32px; border:1px solid #eee;">

      <!-- Logo -->
      <div style="text-align:center; margin-bottom:24px;">
        <div style="width:100px; height:40px; background:#6B21A8; margin:0 auto; border-radius:6px;"></div>
        <p style="font-size:14px; color:#6B21A8; margin-top:8px; font-weight:bold;">
          Lovely Booking
        </p>
      </div>

      <!-- Title -->
      <h2 style="font-size:24px; color:#6B21A8; font-weight:700; text-align:center; margin-bottom:8px;">
        📩 New Booking Received
      </h2>

      <!-- Subtitle -->
      <p style="text-align:center; font-size:16px; color:#444; margin-bottom:24px;">
        A new consultation call has been scheduled.
      </p>

      <!-- Details Box -->
      <div style="background:#f5f5f5; padding:20px; border-radius:12px; margin-bottom:32px;">
        <p style="font-size:16px; color:#333; margin:5px 0;">
          <strong>Client Email:</strong> ${email}
        </p>
        <p style="font-size:16px; color:#333; margin:5px 0;">
          <strong>Date:</strong> ${date}
        </p>
        <p style="font-size:16px; color:#333; margin:5px 0;">
          <strong>Time:</strong> ${time}
        </p>
      </div>

      <!-- Footer -->
      <p style="font-size:14px; color:#777; text-align:center;">
        View booking in Google Calendar.
      </p>
    </div>
  </div>
`;
