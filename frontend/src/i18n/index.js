import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./en/common.json";
import enNavbar from "./en/navbar.json";

import deCommon from "./de/common.json";
import deNavbar from "./de/navbar.json";

const savedLang = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            common: enCommon,
            navbar: enNavbar
        },
        de: {
            common: deCommon,
            navbar: deNavbar
        }
    },
    lng: savedLang,
    fallbackLng: "en",
    ns: ["common", "navbar"],
    defaultNS: "common",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
