
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                navbar: {
                    you: "You",
                    us: "Us",
                    services: "Services",
                    contact: "Contact",
                    together: "Together",
                    getStarted: "Get Started"
                },

                hero: {
                    badge: "✨ New Feature Launch",
                    title: "Accelerate Your Business Growth",
                    description:
                        "Clarity-driven boutique consulting in Germany for businesses, founders, and global talent navigating complex decisions across business, mobility, technology, and place.",
                    highlight: "40%",
                    descriptionEnd: "and reduce operational costs.",
                    cta: "Get Consultant →",
                    revenue: "Revenue Growth",
                    time: "Time Saved",
                    users: "Active Users",
                    digital: "Consulting",
                    solutions: "Reimagined",
                    bookBtn: "Start a Conversation"
                },

                about: {
                    badge: "/// System_Identity",
                    title: "We are Lovely",
                    subtitle: "A boutique for clear thinking.",
                    description: "We help turn complexity into decisions.",
                    points: [
                        "We work boutique by choice focused, thoughtful, and precise.",
                        "We listen before we design.",
                        "We think before we speak.",
                        "We collaborate before we conclude."
                    ],
                    footer: "We are strategists, listeners, and decision partners."
                },

                services: {
                    header: {
                        badge: "[ System_Capabilities_Manifest ]",
                        core: "Services",
                        protocols:
                            "Work designed around your objectives.\nEvery engagement adapts to your context and delivers measurable outcomes",
                        activeNodes: "Active_Nodes",
                        encryption: "Encryption",
                        status: "Status",
                        ready: "Ready_To_Sync"
                    },

                    list: {
                        mobility: {
                            title: "Global Mobility",
                            description: "Strategically move executives, teams, and operations across borders with compliance and operational clarity.",
                            sections: {
                                germany: {
                                    title: "Germany Desk",
                                    items: ["Tourist Visa", "Student Visa"]
                                },
                                relocation: {
                                    title: "Relocation & Residency Services (via trusted partners)",
                                    items: [
                                        "Work & Residence Permits",
                                        "City Hall Registration",
                                        "Bank Account Opening",
                                        "Home Search & Relocation",
                                        "Change of Address",
                                        "Child Benefit Applications",
                                        "Tax Class Optimization (Couples & Families)",
                                        "Driver’s License Translation & Conversion (with Exam)",
                                        "Driver’s License Translation & Conversion (without Exam)"
                                    ]
                                },
                                countries: {
                                    title: "Other Countries (via trusted partners)",
                                    australia: ["Student Visa", "Work & Travel"],
                                    newZealand: ["Student Visa"],
                                    canada: ["Study Permits", "Work Permits"],
                                    usa: [
                                        "Tourist (B-1/B-2)",
                                        "Student (F-1)",
                                        "Fiancé(e) (K-1)",
                                        "Professional Workers (H-1B)",
                                        "Investor Visa (E-1 / E-2)",
                                        "Canadians & Mexicans (TN)",
                                        "Extraordinary Ability (O-1)",
                                        "Intra-Corporate Transfers (L-1)",
                                        "Family-Based Green Cards",
                                        "Employment-Based Green Cards (EB-1, EB-2, EB-3, EB-4, EB-5)",
                                        "Citizenship Pathways"
                                    ]
                                }
                            }
                        },

                        business: {
                            title: "Business Advisory",
                            description: "Design cross-border strategy, structure companies, and navigate operational complexity with clarity and precision.",
                            sections: {
                                corporate: {
                                    title: "Corporate Clients (B2B)",
                                    items: [
                                        "Company Formation",
                                        "GmbH",
                                        "UG",
                                        "Branch Office",
                                        "Grants & Public Incentives Guidance",
                                        "Qatar Market Entry (by invitation only)"
                                    ]
                                },
                                startups: {
                                    title: "Entrepreneurs & Startups (B2C)",
                                    items: [
                                        "Business Plan Development",
                                        "Digital Presence",
                                        "Website Development",
                                        "AI Chatbots & Automation"
                                    ]
                                }
                            }
                        },

                        ai: {
                            title: "AI & Digital Transformation",
                            description: "Leverage AI and technology to optimize high-stakes decisions, streamline operations, and scale strategic impact.",
                            items: [
                                "Website Chatbots",
                                "WhatsApp / SMS / Messenger Bots",
                                "AI Knowledge Systems",
                                "Business Process Optimization"
                            ]
                        },

                        realestate: {
                            title: "Strategic Real Estate",
                            description: "Identify, structure, and execute high-value property investments with cross-border insight and risk management.",
                            subtitle: "(with external partners)",
                            sections: {
                                investors: {
                                    title: "Investors & Developers (B2B)",
                                    items: [
                                        "Off-Market Investment Sourcing",
                                        "Institutional Portfolios",
                                        "Private Seller Mandates",
                                        "Early Pre-Market Assets"
                                    ]
                                },
                                individuals: {
                                    title: "Individuals & Families (B2C)",
                                    items: ["Residential Search (On-Market & Off-Market)"]
                                }
                            }
                        },

                        executive: {
                            title: "Executive Development",
                            items: [
                                "Improvisation Coaching",
                                "Communication Skills",
                                "Leadership Presence",
                                "Intercultural Competence",
                                "Confidence & Personal Impact",
                                "Innovation & Adaptability"
                            ]
                        },

                        events: {
                            title: "Curated Events",
                            description: "Exclusive briefings, roundtables, and networking tailored for investors and senior decision-makers.",
                            items: [
                                "Training Programs & Workshops",
                                "Executive Coaching Sessions",
                                "Curated Private Events"
                            ]
                        }
                    },

                    modal: {
                        protocolActive: "Protocol Active",
                        deployment: "High-Performance Deployment",
                        capabilities: "Capabilities",
                        realtime: "Real-time Analytics",
                        secure: "Secure Architecture",
                        global: "Global Compliance",
                        systemStatus: "System status",
                        optimal: "Optimal",
                        cta: "Engage with Us"
                    }
                },

                contact: {
                    badge: "Secure Uplink Active",
                    title: { line1: "Connect", line2: "With Us" },
                    description:
                        "Every engagement begins with a thoughtful conversation.\nIf you’re exploring strategic support or would like to understand how we work, please reach out using the form below.\nWe look forward to connecting with you.",
                    info: {
                        email: { label: "Secure Mail", sub: "Direct Protocol // Response < 4h" },
                        phone: { label: "Direct Line", sub: "Voice Uplink // 09:00 - 18:00" }
                    },
                    form: {
                        name: { label: "Name", placeholder: "Enter your name" },
                        email: { label: "Email", placeholder: "email@domain.com" },
                        company: { label: "Company", placeholder: "Enter your company name" },
                        message: { label: "Message", placeholder: "Describe the challenge you’re navigating…" },
                        submit: "Connect with our team",
                        loading: "Syncing...",
                        securityNote: "End-to-End Encryption Guaranteed",
                        successTitle: "Uplink Success",
                        successMessage: "Your transmission has been encrypted and received.",
                        reset: "[ Reset Terminal ]",
                        error: "Failed to send message. Please try again."
                    }
                }
            }
        },

        /* ------------------ GERMAN ------------------ */

        de: {
            translation: {
                navbar: {
                    you: "Du",
                    us: "Wir",
                    services: "Leistungen",
                    contact: "Kontakt",
                    together: "Zusammen",
                    getStarted: "Loslegen"
                },

                services: {
                    header: {
                        badge: "[ System_Fähigkeiten_Manifest ]",
                        core: "Leistungen",
                        protocols:
                            "Arbeit, ausgerichtet auf Ihre Ziele.\nJedes Mandat passt sich Ihrem Kontext an und liefert messbare Ergebnisse",
                        activeNodes: "Aktive_Knoten",
                        encryption: "Verschlüsselung",
                        status: "Status",
                        ready: "Bereit_Zur_Synchronisation"
                    },

                    list: {
                        mobility: {
                            title: "Globale Mobilität",
                            sections: {
                                germany: {
                                    title: "Deutschland Desk",
                                    items: ["Touristenvisum", "Studentenvisum"]
                                },
                                relocation: {
                                    title: "Relocation & Aufenthalt (über Partner)",
                                    items: [
                                        "Arbeits- & Aufenthaltstitel",
                                        "Anmeldung beim Einwohnermeldeamt",
                                        "Kontoeröffnung",
                                        "Wohnungssuche & Umzug",
                                        "Adressänderung",
                                        "Kindergeldanträge",
                                        "Steuerklassenoptimierung",
                                        "Führerscheinumschreibung (mit Prüfung)",
                                        "Führerscheinumschreibung (ohne Prüfung)"
                                    ]
                                },
                                countries: {
                                    title: "Weitere Länder (über Partner)",
                                    australia: ["Studentenvisum", "Work & Travel"],
                                    newZealand: ["Studentenvisum"],
                                    canada: ["Studiengenehmigung", "Arbeitserlaubnis"],
                                    usa: [
                                        "Touristenvisum (B-1/B-2)",
                                        "Studentenvisum (F-1)",
                                        "Verlobtenvisum (K-1)",
                                        "Fachkräftevisum (H-1B)",
                                        "Investorenvisum (E-1 / E-2)",
                                        "TN-Status (Kanada & Mexiko)",
                                        "Außergewöhnliche Fähigkeiten (O-1)",
                                        "Unternehmensinterner Transfer (L-1)",
                                        "Familienbasierte Green Cards",
                                        "Arbeitsbasierte Green Cards",
                                        "Einbürgerung & Staatsbürgerschaft"
                                    ]
                                }
                            }
                        },

                        business: {
                            title: "Unternehmensberatung",
                            sections: {
                                corporate: {
                                    title: "Unternehmen (B2B)",
                                    items: [
                                        "Firmengründung",
                                        "GmbH",
                                        "UG",
                                        "Zweigniederlassung",
                                        "Fördermittel & Subventionen",
                                        "Markteintritt Katar (nur auf Einladung)"
                                    ]
                                },
                                startups: {
                                    title: "Gründer & Startups (B2C)",
                                    items: [
                                        "Businessplan-Erstellung",
                                        "Digitale Präsenz",
                                        "Webseitenentwicklung",
                                        "KI-Chatbots & Automatisierung"
                                    ]
                                }
                            }
                        },

                        ai: {
                            title: "KI & Digitale Transformation",
                            items: [
                                "Website-Chatbots",
                                "WhatsApp / SMS / Messenger Bots",
                                "KI-Wissenssysteme",
                                "Optimierung von Geschäftsprozessen"
                            ]
                        },

                        realestate: {
                            title: "Strategische Immobilien",
                            subtitle: "(mit externen Partnern)",
                            sections: {
                                investors: {
                                    title: "Investoren & Entwickler (B2B)",
                                    items: [
                                        "Off-Market-Investments",
                                        "Institutionelle Portfolios",
                                        "Exklusive Verkäufermandate",
                                        "Frühphasen-Assets"
                                    ]
                                },
                                individuals: {
                                    title: "Privatpersonen & Familien (B2C)",
                                    items: ["Wohnimmobiliensuche (On- & Off-Market)"]
                                }
                            }
                        },

                        executive: {
                            title: "Executive Development",
                            items: [
                                "Improvisationscoaching",
                                "Kommunikationsstärke",
                                "Führung & Präsenz",
                                "Interkulturelle Kompetenz",
                                "Selbstsicherheit & Wirkung",
                                "Innovation & Anpassungsfähigkeit"
                            ]
                        },

                        events: {
                            title: "Events & Trainings",
                            items: [
                                "Trainingsprogramme & Workshops",
                                "Executive-Coachings",
                                "Kuratierten Private Events"
                            ]
                        }
                    },

                    modal: {
                        protocolActive: "Protokoll Aktiv",
                        deployment: "Hochleistungsbereitstellung",
                        capabilities: "Fähigkeiten",
                        realtime: "Echtzeit-Analysen",
                        secure: "Sichere Architektur",
                        global: "Globale Konformität",
                        systemStatus: "Systemstatus",
                        optimal: "Optimal",
                        cta: "Beratung Starten"
                    }
                }
            }
        }
    },

    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
});

export default i18n;
