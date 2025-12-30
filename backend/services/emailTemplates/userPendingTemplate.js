export const userPendingTemplate = ({ date, time, timezone, paymentLink, bookingId }) => `
<div style="font-family:Arial; background:#ffffff; padding:20px;">
  <div style="max-width:600px; margin:auto; border:1px solid #eee; border-radius:12px; padding:30px;">

    <h2 style="color:#DC2626; text-align:center;">
      ⏳ Payment Required
    </h2>

    <p style="text-align:center; color:#444;">
      Your booking is reserved for <strong>1 hour</strong>.  
      Please complete payment to confirm.
    </p>

    <div style="background:#f3f3f3; padding:15px; border-radius:8px;">
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Timezone:</strong> ${timezone}</p>
    </div>

    <a href="${paymentLink}"
      style="display:block; margin-top:20px; background:#6B21A8; color:#fff; padding:14px; text-align:center; border-radius:8px; text-decoration:none;">
      💳 Complete Payment
    </a>

    <p style="margin-top:20px; font-size:13px; color:#666; text-align:center;">
      If payment is not completed within 1 hour, the slot will be released.
    </p>

    <a href="http://localhost:5173/cancel/${bookingId}"
      style="display:block; margin-top:10px; text-align:center; color:#6B21A8;">
      Cancel booking
    </a>

  </div>
</div>
`;
