import hero_l from "../../assets/hero_l.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Section from "../layout/Section";

export default function Hero() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Section id="hero" variant="gradient">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 bg-[#1c1c84]/10 text-[#1c1c84] px-4 py-1 rounded-full text-sm">
            {t("hero.badge")}
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {t("hero.title")}
          </h1>

          <p className="text-gray-400 max-w-xl">
            {t("hero.description")}{" "}
            <span className="text-white font-semibold">
              {t("hero.highlight")}
            </span>{" "}
            {t("hero.descriptionEnd")}
          </p>

          <button
            onClick={() => navigate("/book")}
            className="bg-[#1c1c84] hover:bg-[#000068] px-8 py-4 rounded-xl"
          >
            {t("hero.cta")}
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center">
          <img
            src={hero_l}
            alt="LS Digital Agency"
            className="w-[50%] max-w-xl object-contain drop-shadow-2xl"
          />

          <div className="absolute -top-10 left-6 bg-[#0a0f1f] border border-white/10 px-6 py-4 rounded-2xl text-base backdrop-blur-xl animate-revenueMove shadow-xl">
            <span className="text-green-400 font-bold text-xl">+127%</span>
            <span className="text-gray-300 ml-2">{t("hero.revenue")}</span>
          </div>

          <div className="absolute bottom-10 left-12 bg-[#0a0f1f] border border-white/10 px-6 py-4 rounded-2xl text-base backdrop-blur-xl animate-timeMove shadow-xl">
            <span className="text-yellow-400 font-bold text-xl">40%</span>
            <span className="text-gray-300 ml-2">{t("hero.time")}</span>
          </div>

          <div className="absolute bottom-14 right-14 bg-[#0a0f1f] border border-white/10 px-6 py-4 rounded-2xl text-base backdrop-blur-xl animate-usersFloat shadow-xl">
            <span className="text-blue-400 font-bold text-xl">2.4k</span>
            <span className="text-gray-300 ml-2">{t("hero.users")}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
