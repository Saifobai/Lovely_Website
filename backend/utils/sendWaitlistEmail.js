import nodemailer from "nodemailer";

let transporter;

// Built lazily so .env is guaranteed to be loaded before we read it.
const getTransporter = () => {
    if (transporter) return transporter;

    const { CONTACT_MAIL_HOST, CONTACT_MAIL_PORT, CONTACT_MAIL_USER, CONTACT_MAIL_PASS } =
        process.env;

    if (!CONTACT_MAIL_HOST || !CONTACT_MAIL_USER || !CONTACT_MAIL_PASS) {
        throw new Error(
            "Missing CONTACT_MAIL_HOST / CONTACT_MAIL_USER / CONTACT_MAIL_PASS in .env",
        );
    }

    const port = Number(CONTACT_MAIL_PORT) || 465;

    transporter = nodemailer.createTransport({
        host: CONTACT_MAIL_HOST,
        port,
        secure: port === 465, // 465 = SSL, 587 = STARTTLS
        auth: { user: CONTACT_MAIL_USER, pass: CONTACT_MAIL_PASS },
    });
    return transporter;
};

const esc = (s) =>
    String(s).replace(
        /[&<>"']/g,
        (ch) =>
            ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch],
    );

// "Sam Al-Obaidi" -> "Sam-Al-Obaidi" (names with no latin letters -> "applicant")
const slug = (s) =>
    s
        .normalize("NFKD")
        .replace(/[^\w]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 40) || "applicant";

/**
 * Emails the registration to the admin inbox with the PDF attached.
 * Replying to the email goes straight to the applicant (replyTo).
 */
export const sendWaitlistEmail = async ({
    firstName,
    lastName,
    email,
    role,
    interest,
    reference,
    pdf,
}) => {
    const fullName = `${firstName} ${lastName}`;
    const sender = process.env.CONTACT_MAIL_USER;

    await getTransporter().sendMail({
        // Hostinger requires the From address to be the authenticated mailbox.
        from: `"Private Markets Waitlist" <${sender}>`,
        // set WAITLIST_TO in .env to send somewhere else
        to: process.env.WAITLIST_TO || sender,
        replyTo: { name: fullName, address: email },
        subject: `New waitlist request — ${fullName}`,
        text: [
            `New early access request (${reference})`,
            "",
            `Name: ${fullName}`,
            `Email: ${email}`,
            `Role: ${role}`,
            `Interest: ${interest}`,
            "",
            "The full registration is attached as a PDF.",
        ].join("\n"),
        html: `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#20283a;max-width:520px">
        <p style="font-size:11px;letter-spacing:.16em;color:#8279b5;margin:0 0 8px">PRIVATE MARKETS · NEW REQUEST</p>
        <h2 style="font-family:Georgia,serif;font-weight:400;color:#1b2a4a;margin:0 0 16px">${esc(fullName)}</h2>
        <p style="margin:0 0 4px"><strong>Email:</strong> ${esc(email)}</p>
        <p style="margin:0 0 4px"><strong>Role:</strong> ${esc(role)}</p>
        <p style="margin:0 0 4px"><strong>Interest:</strong> ${esc(interest)}</p>
        <p style="margin:0 0 16px"><strong>Reference:</strong> ${esc(reference)}</p>
        <p style="font-size:13px;color:#687185">The full registration is attached as a PDF. Reply to this email to contact the applicant directly.</p>
      </div>`,
        attachments: [
            {
                filename: `Private-Markets_${slug(fullName)}_${reference}.pdf`,
                content: pdf,
                contentType: "application/pdf",
            },
        ],
    });
};