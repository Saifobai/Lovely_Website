export const SERVICES = [
    {
        id: "ai-infrastructure",
        title: "AI & IT Infrastructure Diagnostic",
        priceCents: 100,
        currency: "EUR",
        durationMinutes: 15,
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
        priceCents: 15000,
        currency: "EUR",
        durationMinutes: 15,
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
        priceCents: 15000,
        currency: "EUR",
        durationMinutes: 15,
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
        priceCents: 15000,
        currency: "EUR",
        durationMinutes: 15,
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
        title: "Exclusive Introductory Call (By Invitation)",
        // Range: €1500 - €5000 based on Umsatz
        priceCents: 150000,
        priceMaxCents: 500000,
        currency: "EUR",
        durationMinutes: 30,
        isExclusive: true,
        requiresUmsatz: true,
        desc: "By Invitation: Evaluation of long-term partnership viability. Clients must provide annual Umsatz.",
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