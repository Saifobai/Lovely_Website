export const exclusiveConfirmedTemplate = ({
  firstName,
  bookingId,
}) => `
<!DOCTYPE html>
<html>
<body style="background-color: #050505; color: #cbd5e1; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; line-height: 1.6; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto; border: 1px solid rgba(255,255,255,0.05); border-radius: 24px; overflow: hidden; background-color: rgba(255,255,255,0.01);">
        
        <div style="height: 2px; background: linear-gradient(to right, transparent, #3B82F6, transparent);"></div>
        
        <div style="padding: 40px;">
            <div style="margin-bottom: 40px;">
                <h1 style="color: #ffffff; font-size: 24px; font-weight: 900; letter-spacing: -0.05em; text-transform: uppercase;  margin: 0;">
                    LOVELY
                </h1>
                <p style="font-family: monospace; font-size: 10px; color: #3B82F6; ; letter-spacing: 0.4em; margin: 5px 0 0 0;">
                    Exclusive Engagement
                </p>
            </div>

            <div style="margin-bottom: 30px;">
                <p style="color: #ffffff; font-size: 18px; font-weight: 300; ">
                    Dear ${firstName || "Partner"},
                </p>
                <p style="font-size: 15px; color: #94a3b8; font-weight: 300;">
                    Your interest in our boutique consulting services has been recorded.
                </p>
            </div>

            <div style="background-color: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 30px; border-radius: 16px; margin-bottom: 30px;">
                <p style="margin: 0 0 15px 0; font-size: 14px;">
                    As this is a by-invitation introduction between selected European and Gulf-based companies, 
                    we personally coordinate each meeting to ensure relevance, and alignment on both sides.
                </p>
                
                <p style="font-family: monospace; font-size: 11px; color: #3B82F6; text-transform: uppercase; letter-spacing: 0.2em; margin: 30px 0 10px 0;">
                    Next Steps:
                </p>
                <p style="margin: 0; font-size: 14px; border-left: 2px solid #3B82F6; padding-left: 20px;">
                    You will receive a follow-up email shortly. 
                    <strong>Please prepare three preferred date and time options</strong>, 
                    ideally between 09:00 and 15:00 (CET / German time).
                </p>
            </div>

            <p style="font-size: 14px; color: #94a3b8; font-style: italic; margin-bottom: 40px;">
                Once received, we will discreetly coordinate and confirm the mutually agreed time.
            </p>

            <div style="margin-bottom: 40px;">
                <p style="margin: 0; color: #ffffff; font-weight: bold; ">Lovely Team</p>
                <p style="margin: 0; font-size: 11px; font-family: monospace; color: #3B82F6;  letter-spacing: 0.2em;">
                    build with intention
                </p>
            </div>

            <div style="padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.05);">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                        <td style="font-family: monospace; font-size: 9px; color: #475569; text-transform: uppercase; letter-spacing: 0.2em;">
                            
                        </td>
                        <td align="right">
                            <a href="${process.env.FRONTEND_URL}/cancel/${bookingId}" 
                               style="font-family: monospace; font-size: 10px; color: #3b82f6; text-decoration: none; text-transform: uppercase; letter-spacing: 0.1em; border: 1px solid #3b82f6; padding: 6px 12px; border-radius: 4px;">
                                Cancel Booking
                            </a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    
    <p style="text-align: center; font-family: monospace; font-size: 9px; color: #334155; text-transform: uppercase; letter-spacing: 0.3em; margin-top: 30px;">
        
    </p>
</body>
</html>
`;
