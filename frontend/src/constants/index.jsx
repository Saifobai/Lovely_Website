const SERVICES = [
  {
    id: "ai-infrastructure",
    title: "AI & IT Infrastructure Diagnostic",
    price: "€150",
    duration: "15 MIN",
    desc: "Critical technical guidance for entities navigating digital evolution and AI integration.",
    details: [
      {
        time: "10:00",
        label: "TECHNICAL AUDIT",
        text: "Rapid evaluation of current technical pain points, system requirements, and security architecture.",
      },
      {
        time: "05:00",
        label: "ARCHITECTURE",
        text: "Delivery of initial solution logic and implementation support options.",
      },
    ],
  },
  {
    id: "business-diagnostic",
    title: "Strategic Business Diagnostic",
    price: "€150",
    duration: "15 MIN",
    desc: "Designed for founders and executives seeking surgical precision in business direction.",
    details: [
      {
        time: "10:00",
        label: "ANALYSIS",
        text: "High-level identification of core bottlenecks, growth trajectory, and operational priorities.",
      },
      {
        time: "05:00",
        label: "SYNTHESIS",
        text: "Initial focus area recommendations and deployment pathways for deeper engagement.",
      },
    ],
  },
  {
    id: "asset-rebuilding",
    title: "Asset & Community Rebuilding Diagnostic",
    price: "€150",
    duration: "15 MIN",
    desc: "High-conviction advisory for investors focused on impactful, location-specific real estate.",
    details: [
      {
        time: "10:00",
        label: "PORTFOLIO ALIGNMENT",
        text: "Review of investment capital, preferred jurisdictions, and revitalization goals.",
      },
      {
        time: "05:00",
        label: "ALLOCATION",
        text: "Presentation of tailored community development opportunities and decision-support logistics.",
      },
    ],
  },
  {
    id: "global-mobility",
    title: "Global Mobility Diagnostic",
    price: "€150",
    duration: "15 MIN",
    desc: "Direct advisory for high-net-worth individuals and professionals seeking global fluidity.",
    details: [
      {
        time: "10:00",
        label: "JURISDICTIONAL REVIEW",
        text: "Situational analysis of immigration pathways for Australia, Canada, Germany, New Zealand, and USA.",
      },
      {
        time: "05:00",
        label: "PROTOCOL",
        text: "Clear delineation of visa options and personalized guidance for residency planning.",
      },
    ],
  },
  {
    id: "exclusive-call",
    title: "Exclusive Introductory Call",
    price: "€1500-5000",
    duration: "30 MIN",
    isExclusive: true,
    desc: "By Invitation: Evaluation of vision, complementary skill sets, and long-term partnership viability.",
    details: [
      {
        time: "05:00",
        label: "CONVERGENCE",
        text: "Professional introductions and motivational background briefing.",
      },
      {
        time: "25:00",
        label: "SYNERGY ASSESSMENT",
        text: "Evaluation of vision, complementary skill sets, and long-term partnership viability.",
      },
    ],
  },
];

const CANCELLATION_POLICY = {
  deadlineHours: 24,
  refund: {
    beforeDeadline: "full",
    afterDeadline: "none",
    noShow: "none",
  },
  cancelMethod: "your account or by emailing support@yourdomain.com",
  text: `
Cancellations up to 24 hours before the appointment will be refunded in full.
Cancellations less than 24 hours before the appointment or no-shows are non-refundable.
`,
};
//================================================================

/* ==================== WEEKLY AVAILABILITY ==================== */
/*
Day
2 = Tuesday
3 = Wednesday
4 = Thursday
*/
const WEEKLY_AVAILABILITY = {
  2: {
    label: "AI & IT Infra, Strategic Diagnostic",
    times: ["10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00"],
  },
  3: {
    label: "Strategic, Exclusive Intro Call",
    times: ["10:30", "11:00", "11:30", "14:30", "15:00", "15:30"],
  },
  4: {
    label: "Asset, Community, Global Mobilization",
    times: ["10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00"],
  },
};

const ContactServicesSelection = {
  it: "AI & Technology Strategy",

  business: "Business Advisory",

  immigration: "Immigration Consulting Services",

  realestate: "Real Estate Advisory",

  events: "Qatar Strategic Access Program",

  mobility: "Global Mobility & Relocation",
};

export {
  SERVICES,
  CANCELLATION_POLICY,
  WEEKLY_AVAILABILITY,
  ContactServicesSelection,
};
