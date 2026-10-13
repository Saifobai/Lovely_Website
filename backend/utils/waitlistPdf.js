import PDFDocument from "pdfkit";

/* ------------------------------------------------------------------ */
/*  Palette + page geometry (matches the waitlist page)                */
/* ------------------------------------------------------------------ */

const C = {
    navy: "#1b2a4a",
    deep: "#121e36",
    gold: "#c7b58a",
    lav: "#8279b5",
    lavSoft: "#c6bee9",
    ivory: "#f7f6f2",
    panel: "#eeedf3",
    line: "#e4e5eb",
    muted: "#687185",
    label: "#5e6677",
    white: "#ffffff",
};

const W = 595.28; // A4
const H = 841.89;
const M = 56; // side margin
const CW = W - M * 2; // content width
const BAND = 184; // header band height

const SERIF = "Times-Roman";
const SERIF_I = "Times-Italic";
const SANS = "Helvetica";
const SANS_B = "Helvetica-Bold";

const formatDate = (date) =>
    new Intl.DateTimeFormat("en-GB", {
        dateStyle: "long",
        timeStyle: "short",
        timeZone: process.env.WAITLIST_TIMEZONE || "Europe/Berlin",
    }).format(date);

/**
 * Builds the waitlist registration PDF fully in memory and resolves with a
 * Buffer (ready to attach to an email, nothing is written to disk).
 */
export const buildWaitlistPdf = ({
    firstName,
    lastName,
    email,
    role,
    interest,
    reference,
    submittedAt = new Date(),
}) =>
    new Promise((resolve, reject) => {
        const fullName = `${firstName} ${lastName}`.trim();

        const doc = new PDFDocument({
            size: "A4",
            margin: 0,
            info: {
                Title: `Waitlist registration — ${fullName}`,
                Author: "Private Markets",
                Subject: `Early access request ${reference}`,
            },
        });

        const chunks = [];
        doc.on("data", (c) => chunks.push(c));
        doc.on("end", () => resolve(Buffer.concat(chunks)));
        doc.on("error", reject);

        /* ------------------------- page background ------------------------ */
        doc.rect(0, 0, W, H).fill(C.ivory);

        /* ---------------------------- header band ------------------------- */
        doc.save();
        doc.rect(0, 0, W, BAND).clip();
        doc.rect(0, 0, W, BAND).fill(C.navy);
        // decorative gold rings (same motif as the hero)
        doc.lineWidth(1).strokeColor(C.gold);
        doc.strokeOpacity(0.32).circle(W - 40, BAND + 14, 130).stroke();
        doc.strokeOpacity(0.18).circle(W - 40, BAND + 14, 178).stroke();
        doc.strokeOpacity(0.1).circle(W - 40, BAND + 14, 226).stroke();
        doc.restore();

        // brand mark: rotated gold square with a small four-point star
        doc
            .save()
            .translate(M + 11, 54)
            .rotate(45)
            .lineWidth(1)
            .strokeColor(C.gold)
            .rect(-9, -9, 18, 18)
            .stroke()
            .restore();
        doc
            .save()
            .translate(M + 11, 54)
            .fillColor(C.gold)
            .polygon(
                [0, -5.5],
                [1.4, -1.4],
                [5.5, 0],
                [1.4, 1.4],
                [0, 5.5],
                [-1.4, 1.4],
                [-5.5, 0],
                [-1.4, -1.4],
            )
            .fill()
            .restore();

        doc
            .font(SANS_B)
            .fontSize(10)
            .fillColor(C.white)
            .text("PRIVATE MARKETS", M + 36, 49, {
                characterSpacing: 2.2,
                lineBreak: false,
            });
        doc
            .font(SANS_B)
            .fontSize(7)
            .fillColor(C.gold)
            .text("CONFIDENTIAL", M, 51, {
                width: CW,
                align: "right",
                characterSpacing: 2,
                lineBreak: false,
            });

        // hairline under the brand row
        doc
            .save()
            .strokeColor(C.white)
            .strokeOpacity(0.13)
            .lineWidth(1)
            .moveTo(M, 84)
            .lineTo(W - M, 84)
            .stroke()
            .restore();

        // eyebrow
        doc
            .save()
            .strokeColor(C.gold)
            .lineWidth(1)
            .moveTo(M, 116)
            .lineTo(M + 28, 116)
            .stroke()
            .restore();
        doc
            .font(SANS_B)
            .fontSize(8)
            .fillColor(C.gold)
            .text("EARLY ACCESS REQUEST", M + 40, 112, {
                characterSpacing: 2.6,
                lineBreak: false,
            });

        // title
        doc
            .font(SERIF)
            .fontSize(30)
            .fillColor(C.white)
            .text("Founding list ", M, 130, { continued: true, lineBreak: false })
            .font(SERIF_I)
            .fillColor(C.lavSoft)
            .text("registration", { lineBreak: false });

        /* ----------------------------- applicant -------------------------- */
        doc
            .font(SANS_B)
            .fontSize(8)
            .fillColor(C.lav)
            .text("APPLICANT", M, 224, { characterSpacing: 2.2, lineBreak: false });

        // shrink the name until it fits on one line (min 18pt), then ellipsise
        let nameSize = 36;
        doc.font(SERIF);
        while (nameSize > 18 && doc.fontSize(nameSize).widthOfString(fullName) > CW) {
            nameSize -= 1;
        }
        doc
            .font(SERIF)
            .fontSize(nameSize)
            .fillColor(C.navy)
            .text(fullName, M, 242, {
                width: CW,
                height: nameSize * 1.25,
                ellipsis: true,
            });

        doc
            .font(SANS)
            .fontSize(12)
            .fillColor(C.muted)
            .text(email, M, 292, { width: CW, height: 16, ellipsis: true });

        // gold divider
        doc
            .save()
            .strokeColor(C.gold)
            .lineWidth(1)
            .moveTo(M, 326)
            .lineTo(W - M, 326)
            .stroke()
            .restore();

        /* ----------------------------- detail card ------------------------ */
        const cardY = 348;
        const rowH = 98;
        const colW = CW / 2;

        doc
            .rect(M, cardY, CW, rowH * 2)
            .lineWidth(1)
            .fillAndStroke(C.white, C.line);
        doc
            .save()
            .strokeColor(C.line)
            .lineWidth(1)
            .moveTo(M + colW, cardY)
            .lineTo(M + colW, cardY + rowH * 2)
            .moveTo(M, cardY + rowH)
            .lineTo(M + CW, cardY + rowH)
            .stroke()
            .restore();

        const cells = [
            ["I’M JOINING AS", role],
            ["PRIMARY AREA OF INTEREST", interest],
            ["SUBMITTED", formatDate(submittedAt)],
            ["REFERENCE", reference],
        ];

        cells.forEach(([label, value], i) => {
            const x = M + (i % 2) * colW + 22;
            const y = cardY + Math.floor(i / 2) * rowH + 26;
            doc
                .font(SANS_B)
                .fontSize(7.5)
                .fillColor(C.label)
                .text(label, x, y, { characterSpacing: 1.6, lineBreak: false });
            doc
                .font(SERIF)
                .fontSize(16)
                .fillColor(C.navy)
                .text(value, x, y + 20, {
                    width: colW - 44,
                    height: 40,
                    ellipsis: true,
                });
        });

        /* ------------------------------ next step ------------------------- */
        const noteY = cardY + rowH * 2 + 26;
        doc.rect(M, noteY, CW, 92).fill(C.panel);
        doc.rect(M, noteY, 3, 92).fill(C.gold);
        doc
            .font(SANS_B)
            .fontSize(7.5)
            .fillColor(C.lav)
            .text("NEXT STEP", M + 24, noteY + 20, {
                characterSpacing: 2,
                lineBreak: false,
            });
        doc
            .font(SANS)
            .fontSize(10)
            .fillColor(C.muted)
            .text(
                `Contact ${firstName} directly at ${email} to continue the introduction process. Joining the waitlist is an expression of interest, not a guarantee of access.`,
                M + 24,
                noteY + 38,
                { width: CW - 48, height: 46, ellipsis: true, lineGap: 3 },
            );

        /* ------------------------------- footer --------------------------- */
        const footY = H - 74;
        doc.rect(0, footY, W, 74).fill(C.deep);
        doc
            .font(SANS_B)
            .fontSize(8)
            .fillColor(C.white)
            .text("PRIVATE MARKETS", M, footY + 20, {
                characterSpacing: 2,
                lineBreak: false,
            });
        doc
            .font(SANS_B)
            .fontSize(7)
            .fillColor(C.gold)
            .text(`REF ${reference}`, M, footY + 21, {
                width: CW,
                align: "right",
                characterSpacing: 1.5,
                lineBreak: false,
            });
        doc
            .font(SANS)
            .fontSize(6.5)
            .fillColor(C.white)
            .fillOpacity(0.45)
            .text(
                "Concept platform. Not represented as a regulated financial service, investment adviser, broker or marketplace. No investment offer, recommendation, verification or guarantee is made.",
                M,
                footY + 38,
                { width: CW, lineGap: 2 },
            );

        doc.end();
    });