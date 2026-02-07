
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
  <style>
    /* Adding web font support for systems that allow it */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=JetBrains+Mono&display=swap');
  </style>
</head>
<body style="margin:0; padding:0; background-color:#050505; font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; color:#ffffff;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#050505; padding:50px 0;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0" style="
          background:#0a0a0a;
          border-radius:40px;
          overflow:hidden;
          border:1px solid rgba(255,255,255,0.1);
        ">

          <tr>
            <td style="height:6px; background: linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa);"></td>
          </tr>

          <tr>
            <td style="padding:60px 50px 30px; text-align:left;">
              
              <h1 style="margin:0; font-size:32px; font-weight:900; font-style:italic; text-transform:uppercase; color:#ffffff; line-height:0.85; letter-spacing:-3px;">
                Booking <br />
                <span style="color:#3b82f6;">Confirmed.</span>
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding:0 50px 40px;">
              

              <table width="100%" cellpadding="0" cellspacing="0" style="
                background: rgba(255,255,255,0.02);
                border: 1px solid rgba(255,255,255,0.05);
                border-radius:24px;
                padding:32px;
                margin-bottom:32px;
              ">
                <tr>
                  <td style="padding:10px 0; font-family:'JetBrains Mono', monospace; color:#64748b; font-size:11px; text-transform:uppercase; letter-spacing:1px;">Scheduled_Date</td>
                  <td style="padding:10px 0; font-size:16px; color:#ffffff; text-align:right; font-weight:700; font-style:italic; text-transform:uppercase;">${date}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0; font-family:'JetBrains Mono', monospace; color:#64748b; font-size:11px; text-transform:uppercase; letter-spacing:1px;">Entry_Time</td>
                  <td style="padding:10px 0; font-size:16px; color:#3b82f6; text-align:right; font-weight:700; font-style:italic; text-transform:uppercase;">${time} <span style="font-size:10px; color:#64748b;">(${timezone})</span></td>
                </tr>
                <tr>
                  <td style="padding:10px 0; font-family:'JetBrains Mono', monospace; color:#64748b; font-size:11px; text-transform:uppercase; letter-spacing:1px;">Transmission_ID</td>
                  <td style="padding:10px 0; font-size:11px; color:#475569; text-align:right; font-family:'JetBrains Mono', monospace;">${bookingId.toUpperCase()}</td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="
                border: 1px dashed rgba(255,255,255,0.05);
                background: rgba(255,255,255,0.02);
                border-radius:20px;
                padding:24px;
                margin-bottom:40px;
              ">
                <tr>
                  <td style="font-family:'JetBrains Mono', monospace; color:#ffffff; font-size:10px; text-transform:uppercase; font-weight:bold; letter-spacing:2px; padding-bottom:12px;">
                    REFUND_PROTOCOL_ENFORCED
                  </td>
                </tr>
                <tr>
                  <td style="font-size:12px; color:#64748b; line-height:1.6; font-style:italic;">
                    • Full restoration available if terminated > 24h prior.<br />
                    • Late-stage cancellations are non-refundable.<br />
                    
                  </td>
                </tr>
              </table>

              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <a href="${link}" target="_blank" style="
                      background: #3b82f6;
                      color: #ffffff;
                      text-decoration: none;
                      padding: 22px 40px;
                      border-radius: 16px;
                      font-size: 13px;
                      font-weight: 900;
                      text-transform: uppercase;
                      display: inline-block;
                      letter-spacing: 2px;
                      box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
                    ">
                      Sync to Google Calendar
                    </a>
                  </td>
                </tr>
              </table>

              <div style="margin-top:50px; text-align:center; border-top:1px solid rgba(255,255,255,0.05); padding-top:30px;">
                <p style="font-size:10px; font-family:'JetBrains Mono', monospace; color:#475569; text-transform:uppercase; letter-spacing:1px;">
                 
                  <a href="http://localhost:5173/cancel/${bookingId}" style="color:#3b82f6; text-decoration:none; font-weight:bold; margin-left:8px;">
                    [ CANCELLATION_LINK ]
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
              border-top:1px solid rgba(255,255,255,0.05);
            ">
              <div style="margin-bottom:20px;">
                <span style="font-size:24px; font-weight:900; font-style:italic; text-transform:uppercase; color:#ffffff; letter-spacing:-1px;">Lovely</span>
                
              </div>
              
            </td>
          </tr>

        </table>

        <p style="margin-top:30px; font-size:10px; color:#333; text-align:center; font-family:'JetBrains Mono', monospace; text-transform:uppercase; letter-spacing:2px;">
          © ${new Date().getFullYear()} LOVELY.
        </p>

      </td>
    </tr>
  </table>

</body>
</html>

`;