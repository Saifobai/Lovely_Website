// "node:" prefix = always Node's built-in module, never an npm package of the same name.
import { randomBytes } from "node:crypto";
import { buildWaitlistPdf } from "../utils/waitlistPdf.js";
import { sendWaitlistEmail } from "../utils/sendWaitlistEmail.js";

// Keep these in sync with the dropdowns in Waitlist.jsx.
const ROLES = [
    "Investor / Family Office",
    "Property Owner / Seller",
    "Developer / Operator",
    "Financing Partner",
    "Broker / Deal Originator",
    "Professional Adviser",
    "Other Stakeholder",
];

const INTERESTS = [
    "Real Estate",
    "Hospitality",
    "Infrastructure & Projects",
    "Operating Businesses",
    "Private Capital / Financing",
    "Cross-border Opportunities",
    "Multiple sectors",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// trim, drop control characters (blocks header/line-break tricks), cap length
const clean = (value, max) =>
    typeof value === "string"
        ? value
            .replace(/[\u0000-\u001f\u007f]/g, " ")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, max)
        : "";

const makeReference = (date) => {
    const ymd = date.toISOString().slice(0, 10).replace(/-/g, "");
    return `PM-${ymd}-${randomBytes(2).toString("hex").toUpperCase()}`;
};

export const submitWaitlist = async (req, res) => {
    // Tracks which step we're in so a failure says exactly where it happened.
    let stage = "validate";

    try {
        const body = req.body ?? {};

        // Honeypot: bots fill the hidden field. Pretend it worked, do nothing.
        if (body.website) return res.status(200).json({ success: true });

        const firstName = clean(body.firstName, 60);
        const lastName = clean(body.lastName, 60);
        const email = clean(body.email, 254).toLowerCase();
        const role = clean(body.role, 80);
        const interest = clean(body.interest, 80);

        if (!firstName || !lastName) {
            return res.status(400).json({
                success: false,
                message: "Please enter your first and last name.",
            });
        }
        if (!EMAIL_RE.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address.",
            });
        }
        if (!ROLES.includes(role) || !INTERESTS.includes(interest)) {
            return res.status(400).json({
                success: false,
                message: "Please choose a role and an area of interest.",
            });
        }

        stage = "reference";
        const submittedAt = new Date();
        const reference = makeReference(submittedAt);

        stage = "pdf";
        const pdf = await buildWaitlistPdf({
            firstName,
            lastName,
            email,
            role,
            interest,
            reference,
            submittedAt,
        });

        stage = "email";
        await sendWaitlistEmail({
            firstName,
            lastName,
            email,
            role,
            interest,
            reference,
            pdf,
        });

        console.log(`[waitlist] ok ${reference} (${email})`);
        return res.status(201).json({ success: true, reference });
    } catch (err) {
        // Full detail always goes to the server console.
        console.error(`[waitlist] failed at stage "${stage}":`, err);

        return res.status(500).json({
            success: false,
            message:
                "We couldn't submit your request right now. Please try again shortly.",
            // Technical detail only outside production, to make debugging easy.
            ...(process.env.NODE_ENV !== "production" && {
                debug: `${stage}: ${err.code ? `${err.code} — ` : ""}${err.message}`,
            }),
        });
    }
};