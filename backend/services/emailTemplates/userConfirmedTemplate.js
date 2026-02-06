
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
//   <title>Session Initialized</title>
// </head>
// <body style="margin:0; padding:0; background-color:#050505; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color:#ffffff;">

//   <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#050505; padding:40px 0;">
//     <tr>
//       <td align="center">

//         <table width="600" cellpadding="0" cellspacing="0" style="
//           background:#0a0a0a;
//           border-radius:24px;
//           overflow:hidden;
//           border:1px solid #333333;
//           box-shadow: 0 20px 50px rgba(0,0,0,0.5);
//         ">

//           <tr>
//             <td style="height:4px; background: linear-gradient(90deg, #2563eb, #9333ea, #ef4444);"></td>
//           </tr>

//           <tr>
//             <td style="padding:48px 40px 20px; text-align:left;">

//               <h1 style="margin:16px 0 0; font-size:42px; font-weight:900; font-style:italic; text-transform:uppercase; color:#ffffff; line-height:0.9; letter-spacing:-2px;">
//                 Session <br />
//                 <span style="color:#9333ea;">Initialized.</span>
//               </h1>
//             </td>
//           </tr>

//           <tr>
//             <td style="padding:0 40px 40px;">
//               <p style="font-size:16px; line-height:1.6; color:#94a3b8; font-style:italic; margin-bottom:32px;">
//                 Your boutique advisory module has been deployed. We have reserved your slot in the global execution calendar.
//               </p>

//               <table width="100%" cellpadding="0" cellspacing="0" style="
//                 background: rgba(255,255,255,0.03);
//                 border: 1px solid rgba(255,255,255,0.1);
//                 border-radius:16px;
//                 padding:24px;
//                 margin-bottom:32px;
//               ">
//                 <tr>
//                   <td style="padding:8px 0; font-family:monospace; color:#64748b; font-size:12px; text-transform:uppercase;">Scheduled_Date</td>
//                   <td style="padding:8px 0; font-size:15px; color:#ffffff; text-align:right; font-weight:bold;">${date}</td>
//                 </tr>
//                 <tr>
//                   <td style="padding:8px 0; font-family:monospace; color:#64748b; font-size:12px; text-transform:uppercase;">Entry_Time</td>
//                   <td style="padding:8px 0; font-size:15px; color:#ffffff; text-align:right; font-weight:bold;">${time} (${timezone})</td>
//                 </tr>
//                 <tr>
//                   <td style="padding:8px 0; font-family:monospace; color:#64748b; font-size:12px; text-transform:uppercase;">Status</td>
//                   <td style="padding:8px 0; font-size:12px; color:#10b981; text-align:right; font-weight:bold; text-transform:uppercase;">● Live_Confirmed</td>
//                 </tr>
//               </table>

//               <table width="100%" border="0" cellspacing="0" cellpadding="0">
//                 <tr>
//                   <td align="center">
//                     <a href="${link}" target="_blank" style="
//                       background: #ffffff;
//                       color: #000000;
//                       text-decoration: none;
//                       padding: 16px 32px;
//                       border-radius: 12px;
//                       font-size: 14px;
//                       font-weight: 900;
//                       text-transform: uppercase;
//                       display: inline-block;
//                       letter-spacing: 1px;
//                     ">
//                       Sync to Google Calendar
//                     </a>
//                   </td>
//                 </tr>
//               </table>

//               <div style="margin-top:40px; text-align:center; border-top:1px solid rgba(255,255,255,0.05); padding-top:24px;">
//                 <p style="font-size:11px; font-family:monospace; color:#475569; text-transform:uppercase; letter-spacing:1px;">
//                   Need to terminate or reschedule? 
//                   <a href="http://localhost:5173/cancel/${bookingId}" style="color:#ef4444; text-decoration:none; font-weight:bold; margin-left:8px;">
//                     [ Cancel_Booking ]
//                   </a>
//                 </p>
//               </div>

//             </td>
//           </tr>

//           <tr>
//             <td style="
//               background:#000000;
//               padding:30px;
//               text-align:center;
//               border-top:1px solid #1a1a1a;
//             ">
//               <div style="margin-bottom:15px;">
//                 <span style="font-size:18px; font-weight:900; italic; text-transform:uppercase; color:#ffffff; letter-spacing:-1px;">Lovely</span>
//                 <span style="display:block; font-size:8px; font-family:monospace; color:#444; text-transform:uppercase; letter-spacing:3px; margin-top:4px;">Boutique_Consulting_Group</span>
//               </div>
//               <p style="font-size:10px; color:#333; margin:0; font-family:monospace; text-transform:uppercase;">
//                 Encryption: AES_256_ACTIVE // Session_ID: ${bookingId.substring(0, 8)}
//               </p>
//             </td>
//           </tr>

//         </table>

//         <p style="margin-top:20px; font-size:10px; color:#444; text-align:center; font-family:monospace; text-transform:uppercase;">
//           © ${new Date().getFullYear()} LOVELY. STRATEGY. PRECISION. OUTCOMES.
//         </p>

//       </td>
//     </tr>
//   </table>

// </body>
// </html>
// `;

//==============================================================
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
                margin-bottom:24px;
              ">
                <tr>
                  <td style="padding:8px 0; font-family:monospace; color:#64748b; font-size:12px; text-transform:uppercase;">Scheduled_Date</td>
                  <td style="padding:8px 0; font-size:15px; color:#ffffff; text-align:right; font-weight:bold;">${date}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0; font-family:monospace; color:#64748b; font-size:12px; text-transform:uppercase;">Entry_Time</td>
                  <td style="padding:8px 0; font-size:15px; color:#ffffff; text-align:right; font-weight:bold;">${time} (${timezone})</td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="
                background: rgba(239, 68, 68, 0.05);
                border: 1px solid rgba(239, 68, 68, 0.2);
                border-radius:16px;
                padding:20px;
                margin-bottom:32px;
              ">
                <tr>
                  <td style="font-family:monospace; color:#ef4444; font-size:11px; text-transform:uppercase; font-weight:bold; letter-spacing:1px; padding-bottom:10px;">
                    Policy_Protocol: Refund_Eligibility
                  </td>
                </tr>
                <tr>
                  <td style="font-size:12px; color:#94a3b8; line-height:1.5;">
                    • Full refund available until 24 hours prior to session.<br />
                    • Cancellations within 24 hours or no-shows are non-refundable.<br />
                    • Use the terminal link below for all termination requests.
                  </td>
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
                  Protocol Termination Required? 
                  <a href="http://localhost:5173/cancel/${bookingId}" style="color:#ef4444; text-decoration:none; font-weight:bold; margin-left:8px;">
                    [ ACCESS_CANCEL_TERMINAL ]
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
                <span style="font-size:18px; font-weight:900; font-style:italic; text-transform:uppercase; color:#ffffff; letter-spacing:-1px;">Lovely</span>
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