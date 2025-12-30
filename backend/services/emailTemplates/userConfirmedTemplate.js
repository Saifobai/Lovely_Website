// export const userTemplate = ({ date, time, timezone, link, bookingId }) => `
//   <div style="font-family:Arial, Helvetica, sans-serif; background:#ffffff; padding:20px;">
//     <div style="max-width:600px; margin:0 auto; border:1px solid #eeeeee; border-radius:12px; padding:30px;">

//       <h2 style="color:#6B21A8; font-size:24px; text-align:center; margin-bottom:20px;">
//         🎉 Booking Confirmed!
//       </h2>

//       <p style="text-align:center; font-size:15px; color:#444; margin-bottom:30px;">
//         Thank you for scheduling a consultation call.
//       </p>

//       <div style="padding:15px; background:#f3f3f3; border-radius:8px; font-size:15px; color:#333; margin-bottom:30px;">
//         <p><strong>Date:</strong> ${date}</p>
//         <p><strong>Time:</strong> ${time}</p>
//         <p><strong>Timezone:</strong> ${timezone}</p>
//       </div>

//       <a href="${link}" target="_blank"
//         style="
//           display:block;
//           text-align:center;
//           background:#6B21A8;
//           color:white;
//           padding:14px 0;
//           border-radius:8px;
//           text-decoration:none;
//           font-size:16px;
//           font-weight:bold;
//         ">
//         📅 Add to Google Calendar
//       </a>

//       <br><br>

//       <a href="http://localhost:5173/cancel/${bookingId}" 
//        target="_blank"
//        style="color:#6B21A8; font-weight:bold;">
//       Cancel booking
//     </a>

//       <p style="text-align:center; font-size:13px; color:#666; margin-top:30px;">
//         If you have any questions, reply to this email.
//       </p>
//     </div>
//   </div>
// `;



export const userConfirmedTemplate = ({
  date,
  time,
  timezone,
  link,
  bookingId,
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Booking Confirmed</title>
</head>
<body style="margin:0; padding:0; background:#f6f6f6; font-family:Arial, Helvetica, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 0;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0" style="
          background:#ffffff;
          border-radius:16px;
          overflow:hidden;
          border:1px solid #eeeeee;
        ">

          <!-- Header -->
          <tr>
            <td style="
              background:#6B21A8;
              padding:24px;
              text-align:center;
              color:#ffffff;
            ">
              <h1 style="margin:0; font-size:24px; font-weight:700;">
                🎉 Booking Confirmed
              </h1>
              <p style="margin:6px 0 0; font-size:14px; opacity:0.9;">
                Your consultation has been successfully scheduled
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px; color:#333333;">

              <p style="font-size:15px; margin:0 0 20px;">
                Thank you for booking a consultation with <strong>Lovely</strong>.
                Below are your confirmed details:
              </p>

              <!-- Details Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="
                background:#f5f5f5;
                border-radius:12px;
                padding:20px;
                margin-bottom:30px;
              ">
                <tr>
                  <td style="padding:6px 0;"><strong>Date:</strong></td>
                  <td style="padding:6px 0;">${date}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;"><strong>Time:</strong></td>
                  <td style="padding:6px 0;">${time}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;"><strong>Timezone:</strong></td>
                  <td style="padding:6px 0;">${timezone}</td>
                </tr>
              </table>

              <!-- Calendar Button -->
              <div style="text-align:center; margin-bottom:24px;">
                <a href="${link}" target="_blank" style="
                  display:inline-block;
                  background:#6B21A8;
                  color:#ffffff;
                  text-decoration:none;
                  padding:14px 28px;
                  border-radius:10px;
                  font-size:15px;
                  font-weight:bold;
                ">
                  📅 Add to Google Calendar
                </a>
              </div>

              <!-- Cancel Link -->
              <p style="font-size:13px; text-align:center; color:#666;">
                Need to cancel or reschedule?
                <br />
                <a href="http://localhost:5173/cancel/${bookingId}" target="_blank" style="
                  color:#6B21A8;
                  font-weight:bold;
                  text-decoration:none;
                ">
                  Cancel your booking
                </a>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="
              background:#fafafa;
              padding:20px;
              text-align:center;
              font-size:12px;
              color:#888;
            ">
              © ${new Date().getFullYear()} Lovely. All rights reserved.
              <br />
              If you have any questions, simply reply to this email.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;
