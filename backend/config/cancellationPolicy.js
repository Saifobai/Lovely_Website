// src/constants/cancellationPolicy.js
export const CANCELLATION_POLICY = {
    deadlineHours: 24,
    refund: {
        beforeDeadline: "full",
        afterDeadline: "none",
        noShow: "none",
    },
    cancelMethod: "your account or by emailing hello@lovely.com.de",
    text: `
Cancellations up to 24 hours before the appointment will be refunded in full.
Cancellations less than 24 hours before the appointment or no-shows are non-refundable.
`,
};
