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


// export const adminTemplate = ({ email, date, time }) => `
//   <div style="font-family: Arial, sans-serif; background:#fafafa; padding:30px;">
//     <div style="max-width:600px; margin:0 auto; background:white; border-radius:16px; padding:32px; border:1px solid #eee;">

//       <!-- Logo -->
//       <div style="text-align:center; margin-bottom:24px;">
//         <div style="width:100px; height:40px; background:#6B21A8; margin:0 auto; border-radius:6px;"></div>
//         <p style="font-size:14px; color:#6B21A8; margin-top:8px; font-weight:bold;">
//           Lovely Booking
//         </p>
//       </div>

//       <!-- Title -->
//       <h2 style="font-size:24px; color:#6B21A8; font-weight:700; text-align:center; margin-bottom:8px;">
//         📩 New Booking Received
//       </h2>

//       <!-- Subtitle -->
//       <p style="text-align:center; font-size:16px; color:#444; margin-bottom:24px;">
//         A new consultation call has been scheduled.
//       </p>

//       <!-- Details Box -->
//       <div style="background:#f5f5f5; padding:20px; border-radius:12px; margin-bottom:32px;">
//         <p style="font-size:16px; color:#333; margin:5px 0;">
//           <strong>Client Email:</strong> ${email}
//         </p>
//         <p style="font-size:16px; color:#333; margin:5px 0;">
//           <strong>Date:</strong> ${date}
//         </p>
//         <p style="font-size:16px; color:#333; margin:5px 0;">
//           <strong>Time:</strong> ${time}
//         </p>
//       </div>

//       <!-- Footer -->
//       <p style="font-size:14px; color:#777; text-align:center;">
//         View booking in Google Calendar.
//       </p>
//     </div>
//   </div>
// `;

//===============================================================
//===============================================================
export const adminTemplate = ({ email, date, time }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
</head>
<body style="margin:0; padding:0; background-color:#050505; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color:#ffffff;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#050505; padding:40px 0;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0" style="
          background:#0a0a0a;
          border-radius:24px;
          overflow:hidden;
          border:1px solid #222222;
        ">

          <tr>
            <td style="height:4px; background: linear-gradient(90deg, #2563eb, #9333ea, #ef4444);"></td>
          </tr>

          <tr>
            <td style="padding:40px 40px 20px;">
              
              <h1 style="margin:0; font-size:32px; font-weight:900; font-style:italic; text-transform:uppercase; color:#ffffff; letter-spacing:-1px;">
                New <span style="color:#2563eb;">Appointment</span> Found.
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding:0 40px 40px;">
              
              <table width="100%" cellpadding="0" cellspacing="0" style="
                background: #000000;
                border: 1px solid #1a1a1a;
                border-radius:12px;
                padding:24px;
              ">
                <tr>
                  <td style="padding-bottom:20px; border-bottom:1px solid #1a1a1a;">
                    <p style="margin:0; font-family:monospace; color:#444; font-size:10px; text-transform:uppercase; letter-spacing:1px;">Client_Identifier</p>
                    <p style="margin:4px 0 0; font-size:16px; color:#ffffff; font-weight:bold;">${email}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 0; border-bottom:1px solid #1a1a1a;">
                    <table width="100%">
                      <tr>
                        <td width="50%">
                          <p style="margin:0; font-family:monospace; color:#444; font-size:10px; text-transform:uppercase; letter-spacing:1px;">Sync_Date</p>
                          <p style="margin:4px 0 0; font-size:14px; color:#ffffff; font-weight:bold;">${date}</p>
                        </td>
                        <td width="50%">
                          <p style="margin:0; font-family:monospace; color:#444; font-size:10px; text-transform:uppercase; letter-spacing:1px;">Target_Time</p>
                          <p style="margin:4px 0 0; font-size:14px; color:#ffffff; font-weight:bold;">${time}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:20px;">
                    <p style="margin:0; font-family:monospace; color:#444; font-size:10px; text-transform:uppercase; letter-spacing:1px;">Session_Status</p>
                    <p style="margin:4px 0 0; font-size:12px; color:#3b82f6; font-weight:bold; text-transform:uppercase;">Authorized & Locked</p>
                  </td>
                </tr>
              </table>

              <div style="margin-top:32px; text-align:center;">
                <a href="https://calendar.google.com/" target="_blank" style="
                  display:inline-block;
                  background: #2563eb;
                  color: #ffffff;
                  text-decoration: none;
                  padding: 14px 28px;
                  border-radius: 8px;
                  font-size: 13px;
                  font-weight: 800;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                ">
                  Open Command Center
                </a>
              </div>

            </td>
          </tr>

          <tr>
            <td style="
              background:#000;
              padding:24px;
              text-align:center;
              border-top:1px solid #1a1a1a;
            ">
              <p style="margin:0; font-family:monospace; font-size:9px; color:#333; text-transform:uppercase; letter-spacing:2px;">
                Lovely_Systems // Internal_Audit_Relay
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;