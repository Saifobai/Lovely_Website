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



// export const userConfirmedTemplate = ({
//   date,
//   time,
//   timezone,
//   link,
//   bookingId,
// }) => `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8" />
//   <title>Booking Confirmed</title>
// </head>
// <body style="margin:0; padding:0; background:#f6f6f6; font-family:Arial, Helvetica, sans-serif;">

//   <table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 0;">
//     <tr>
//       <td align="center">

//         <table width="600" cellpadding="0" cellspacing="0" style="
//           background:#ffffff;
//           border-radius:16px;
//           overflow:hidden;
//           border:1px solid #eeeeee;
//         ">

//           <!-- Header -->
//           <tr>
//             <td style="
//               background:#6B21A8;
//               padding:24px;
//               text-align:center;
//               color:#ffffff;
//             ">
//               <h1 style="margin:0; font-size:24px; font-weight:700;">
//                 🎉 Booking Confirmed
//               </h1>
//               <p style="margin:6px 0 0; font-size:14px; opacity:0.9;">
//                 Your consultation has been successfully scheduled
//               </p>
//             </td>
//           </tr>

//           <!-- Body -->
//           <tr>
//             <td style="padding:32px; color:#333333;">

//               <p style="font-size:15px; margin:0 0 20px;">
//                 Thank you for booking a consultation with <strong>Lovely</strong>.
//                 Below are your confirmed details:
//               </p>

//               <!-- Details Box -->
//               <table width="100%" cellpadding="0" cellspacing="0" style="
//                 background:#f5f5f5;
//                 border-radius:12px;
//                 padding:20px;
//                 margin-bottom:30px;
//               ">
//                 <tr>
//                   <td style="padding:6px 0;"><strong>Date:</strong></td>
//                   <td style="padding:6px 0;">${date}</td>
//                 </tr>
//                 <tr>
//                   <td style="padding:6px 0;"><strong>Time:</strong></td>
//                   <td style="padding:6px 0;">${time}</td>
//                 </tr>
//                 <tr>
//                   <td style="padding:6px 0;"><strong>Timezone:</strong></td>
//                   <td style="padding:6px 0;">${timezone}</td>
//                 </tr>
//               </table>

//               <!-- Calendar Button -->
//               <div style="text-align:center; margin-bottom:24px;">
//                 <a href="${link}" target="_blank" style="
//                   display:inline-block;
//                   background:#6B21A8;
//                   color:#ffffff;
//                   text-decoration:none;
//                   padding:14px 28px;
//                   border-radius:10px;
//                   font-size:15px;
//                   font-weight:bold;
//                 ">
//                   📅 Add to Google Calendar
//                 </a>
//               </div>

//               <!-- Cancel Link -->
//               <p style="font-size:13px; text-align:center; color:#666;">
//                 Need to cancel or reschedule?
//                 <br />
//                 <a href="http://localhost:5173/cancel/${bookingId}" target="_blank" style="
//                   color:#6B21A8;
//                   font-weight:bold;
//                   text-decoration:none;
//                 ">
//                   Cancel your booking
//                 </a>
//               </p>

//             </td>
//           </tr>

//           <!-- Footer -->
//           <tr>
//             <td style="
//               background:#fafafa;
//               padding:20px;
//               text-align:center;
//               font-size:12px;
//               color:#888;
//             ">
//               © ${new Date().getFullYear()} Lovely. All rights reserved.
//               <br />
//               If you have any questions, simply reply to this email.
//             </td>
//           </tr>

//         </table>

//       </td>
//     </tr>
//   </table>

// </body>
// </html>
// `;


//=====================================================================
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
  <title>Session Initialized</title>
</head>
<body style="margin:0; padding:0; background-color:#050505; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color:#ffffff;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#050505; padding:40px 0;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0" style="
          background:#0a0a0a;
          border-radius:24px;
          overflow:hidden;
          border:1px solid #333333;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        ">

          <tr>
            <td style="height:4px; background: linear-gradient(90deg, #2563eb, #9333ea, #ef4444);"></td>
          </tr>

          <tr>
            <td style="padding:48px 40px 20px; text-align:left;">
             
              <h1 style="margin:16px 0 0; font-size:42px; font-weight:900; font-style:italic; text-transform:uppercase; color:#ffffff; line-height:0.9; letter-spacing:-2px;">
                Session <br />
                <span style="color:#9333ea;">Initialized.</span>
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding:0 40px 40px;">
              <p style="font-size:16px; line-height:1.6; color:#94a3b8; font-style:italic; margin-bottom:32px;">
                Your boutique advisory module has been deployed. We have reserved your slot in the global execution calendar.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="
                background: rgba(255,255,255,0.03);
                border: 1px solid rgba(255,255,255,0.1);
                border-radius:16px;
                padding:24px;
                margin-bottom:32px;
              ">
                <tr>
                  <td style="padding:8px 0; font-family:monospace; color:#64748b; font-size:12px; text-transform:uppercase;">Scheduled_Date</td>
                  <td style="padding:8px 0; font-size:15px; color:#ffffff; text-align:right; font-weight:bold;">${date}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-family:monospace; color:#64748b; font-size:12px; text-transform:uppercase;">Entry_Time</td>
                  <td style="padding:8px 0; font-size:15px; color:#ffffff; text-align:right; font-weight:bold;">${time} (${timezone})</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-family:monospace; color:#64748b; font-size:12px; text-transform:uppercase;">Status</td>
                  <td style="padding:8px 0; font-size:12px; color:#10b981; text-align:right; font-weight:bold; text-transform:uppercase;">● Live_Confirmed</td>
                </tr>
              </table>

              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <a href="${link}" target="_blank" style="
                      background: #ffffff;
                      color: #000000;
                      text-decoration: none;
                      padding: 16px 32px;
                      border-radius: 12px;
                      font-size: 14px;
                      font-weight: 900;
                      text-transform: uppercase;
                      display: inline-block;
                      letter-spacing: 1px;
                    ">
                      Sync to Google Calendar
                    </a>
                  </td>
                </tr>
              </table>

              <div style="margin-top:40px; text-align:center; border-top:1px solid rgba(255,255,255,0.05); padding-top:24px;">
                <p style="font-size:11px; font-family:monospace; color:#475569; text-transform:uppercase; letter-spacing:1px;">
                  Need to terminate or reschedule? 
                  <a href="http://lovely.consulting/cancel/${bookingId}" style="color:#ef4444; text-decoration:none; font-weight:bold; margin-left:8px;">
                    [ Cancel_Booking ]
                  </a>
                </p>
              </div>

            </td>
          </tr>

          <tr>
            <td style="
              background:#000000;
              padding:30px;
              text-align:center;
              border-top:1px solid #1a1a1a;
            ">
              <div style="margin-bottom:15px;">
                <span style="font-size:18px; font-weight:900; italic; text-transform:uppercase; color:#ffffff; letter-spacing:-1px;">Lovely</span>
                <span style="display:block; font-size:8px; font-family:monospace; color:#444; text-transform:uppercase; letter-spacing:3px; margin-top:4px;">Boutique_Consulting_Group</span>
              </div>
              <p style="font-size:10px; color:#333; margin:0; font-family:monospace; text-transform:uppercase;">
                Encryption: AES_256_ACTIVE // Session_ID: ${bookingId.substring(0, 8)}
              </p>
            </td>
          </tr>

        </table>

        <p style="margin-top:20px; font-size:10px; color:#444; text-align:center; font-family:monospace; text-transform:uppercase;">
          © ${new Date().getFullYear()} LOVELY. STRATEGY. PRECISION. OUTCOMES.
        </p>

      </td>
    </tr>
  </table>

</body>
</html>
`;