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
                    getStarted: "Get Started"
                },

                hero: {
                    badge: "✨ New Feature Launch",
                    title: "Accelerate Your Business Growth",
                    description:
                        "Our powerful SaaS platform helps modern teams increase productivity by",
                    highlight: "40%",
                    descriptionEnd: "and reduce operational costs.",
                    cta: "Get Consultant →",
                    revenue: "Revenue Growth",
                    time: "Time Saved",
                    users: "Active Users"
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
                    getStarted: "Loslegen"
                },

                hero: {
                    badge: "✨ Neue Funktion gestartet",
                    title: "Beschleunigen Sie Ihr Unternehmenswachstum",
                    description:
                        "Unsere leistungsstarke SaaS-Plattform hilft modernen Teams, die Produktivität um",
                    highlight: "40%",
                    descriptionEnd: "zu steigern und Betriebskosten zu senken.",
                    cta: "Beratung buchen →",
                    revenue: "Umsatzwachstum",
                    time: "Zeit gespart",
                    users: "Aktive Nutzer"
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
