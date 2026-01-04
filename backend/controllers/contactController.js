import { contactMail } from "../services/contactMailService.js";

export const sendContactMessage = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing fields" });
    }

    try {
        await contactMail.sendMail({
            from: `"Lovely Contact" <${process.env.CONTACT_MAIL_USER}>`,
            to: process.env.CONTACT_MAIL_USER,
            replyTo: email,
            subject: `📩 Contact Message — ${name}`,
            html: `
        <div style="font-family:Arial;padding:20px;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
        });

        res.json({ success: true });
    } catch (err) {
        console.error("Contact email error:", err);
        res.status(500).json({ error: "Failed to send message" });
    }
};
