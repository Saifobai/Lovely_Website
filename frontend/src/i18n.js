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
                    description: "Clarity-driven boutique consulting in Germany for businesses, founders, and global talent navigating complex decisions across business, mobility, technology, and place.",
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
                        core: "Core",
                        protocols: "Protocols",
                        activeNodes: "Active_Nodes",
                        encryption: "Encryption",
                        status: "Status",
                        ready: "Ready_To_Sync",
                    },
                    list: {
                        it: {
                            title: "AI & Technology Strategy",
                            description: "Leverage AI and technology to optimize high-stakes decisions, streamline operations, and scale strategic impact"
                        },
                        business: {
                            title: "Business Advisory",
                            description: "Design cross-border strategy, structure companies, and navigate operational complexity with clarity and precision"
                        },
                        immigration: {
                            title: "Immigration Consulting Services",
                            description: "End-to-end immigration guidance ensuring regulatory compliance across global jurisdictions."
                        },
                        realestate: {
                            title: "Real Estate Advisory",
                            description: "Identify, structure, and execute high-value property investments with cross-border insight and risk management."
                        },
                        events: {
                            title: "Qatar Strategic Access Program",
                            description: "Unlock market entry, partnerships, and regulatory navigation in Qatar through bespoke advisory support."
                        },
                        mobility: {
                            title: "Global Mobility & Relocation",
                            description: "Strategically move executives, teams, and operations across borders with compliance and operational clarity."
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
                        cta: "Initialize Consultation"
                    }
                },
                contact: {
                    badge: "Secure Uplink Active",
                    title: {
                        line1: "Connect",
                        line2: "With Us"
                    },
                    description: "Every engagement begins with a thoughtful conversation.\nIf you’re exploring strategic support or would like to understand how we work, please reach out using the form below.\nWe look forward to connecting with you.",

                    info: {
                        email: { label: "Secure Mail", sub: "Direct Protocol // Response < 4h" },
                        phone: { label: "Direct Line", sub: "Voice Uplink // 09:00 - 18:00" }
                    },
                    form: {
                        name: { label: "Name", placeholder: "ENTER NAME" },
                        email: { label: "Email", placeholder: "EMAIL@DOMAIN.COM" },
                        message: { label: "Message", placeholder: "DESCRIBE THE VISION..." },
                        submit: "Connect with our team",
                        loading: "Syncing...",
                        securityNote: "End-to-End Encryption Guaranteed",
                        successTitle: "Uplink Success",
                        successMessage: "Your transmission has been encrypted and received.",
                        reset: "[ Reset Terminal ]",
                        error: "Failed to send message. Please try again."
                    }
                },
                common: {
                    welcome: "Welcome",
                    description: "This is my website"
                }
            }
        },
        de: {
            translation: {
                navbar: {
                    you: "Du",
                    us: "Wir",
                    services: "Dienstleistungen",
                    contact: "Kontakt",
                    together: "Zusammen",
                    getStarted: "Loslegen"
                },
                hero: {
                    badge: "✨ Neue Funktion gestartet",
                    title: "Beschleunigen Sie Ihr Unternehmenswachstum",
                    description: "Klarstellungsorientierte Boutique-Beratung in Düsseldorf (oder einfach in Deutschland) für Unternehmen, Gründer und internationale Talente, die komplexe Entscheidungen in den Bereichen Wirtschaft, Mobilität, Technologie und Standort treffen.",
                    highlight: "40%",
                    descriptionEnd: "zu steigern und Betriebskosten zu senken.",
                    cta: "Beratung buchen →",
                    revenue: "Umsatzwachstum",
                    time: "Zeit gespart",
                    users: "Aktive Nutzer",
                    digital: "Beratung neu",
                    solutions: "gedacht",
                    bookBtn: "Beginnen Sie ein Gespräch"
                },
                about: {
                    badge: "/// System_Identität",
                    title: "Wir sind Lovely",
                    subtitle: "Boutique-Beratung mit Perspektive",
                    description: "Lovely ist Ihr strategischer Partner. Wir übersetzen Komplexität in klare Entscheidungen und koordiniertes Handeln, immer orientiert an Ihren Zielen.",
                    points: [
                        "Boutique-Mentalität, adaptiv und kundenorientiert",
                        "Maßgeschneiderte Lösungen durch enge Zusammenarbeit",
                        "Klarer Umfang, Kommunikation und Ergebnisse",
                        "Koordination von vertrauenswürdigen, lizenzierten Partnern"
                    ],
                    footer: "Geleitet von Kreativität, Kollaboration und Klarheit."
                },
                services: {
                    header: {
                        badge: "[ System_Fähigkeiten_Manifest ]",
                        core: "Kern",
                        protocols: "Protokolle",
                        activeNodes: "Aktive_Knoten",
                        encryption: "Verschlüsselung",
                        status: "Status",
                        ready: "Bereit_Zur_Synchronisation",
                    },
                    list: {
                        business: {
                            title: "Unternehmensberatung",
                            description: "Strategische Beratung für skalierbares Wachstum und operative Exzellenz."
                        },
                        immigration: {
                            title: "Einwanderungsberatung",
                            description: "Ganzheitliche Migrationsberatung mit vollständiger regulatorischer Konformität."
                        },
                        it: {
                            title: "IT-Beratung",
                            description: "Leistungsstarke IT-Architektur und sichere digitale Transformation."
                        },
                        realestate: {
                            title: "Immobilien – Kauf & Verkauf",
                            description: "Premium-Beratung für Immobilieninvestitionen und Transaktionen."
                        },
                        events: {
                            title: "Veranstaltungen",
                            description: "Professionelle Planung und Durchführung hochwertiger Events."
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
                        cta: "Beratung Initialisieren"
                    }
                },
                contact: {
                    badge: "Sicherer Uplink Aktiv",
                    title: {
                        line1: "Signal",
                        line2: "Initiieren."
                    },
                    description: "Bereit, Ihre Vision umzusetzen? Unser Kollektiv steht bereit, Ihre Anforderungen zu erfassen und einen Weg nach vorne zu entwickeln.",
                    info: {
                        email: { label: "Sichere E-Mail", sub: "Direktes Protokoll // Antwort < 4h" },
                        phone: { label: "Direkte Leitung", sub: "Sprachverbindung // 09:00 - 18:00" }
                    },
                    form: {
                        name: { label: "Identität / Name", placeholder: "NAME EINGEBEN" },
                        email: { label: "Koordinate / E-Mail", placeholder: "EMAIL@DOMAIN.COM" },
                        message: { label: "Mission / Nachricht", placeholder: "BESCHREIBEN SIE DIE VISION..." },
                        submit: "Verbindung Herstellen",
                        loading: "Synchronisierung...",
                        securityNote: "End-to-End-Verschlüsselung Garantiert",
                        successTitle: "Uplink Erfolgreich",
                        successMessage: "Ihre Übertragung wurde verschlüsselt und empfangen.",
                        reset: "[ Terminal Zurücksetzen ]",
                        error: "Übertragung fehlgeschlagen. Bitte versuchen Sie es erneut."
                    }
                },
                common: {
                    welcome: "Willkommen",
                    description: "Dies ist meine Website"
                }
            }
        }
    },
    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;