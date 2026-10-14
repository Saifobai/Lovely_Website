import { LanguageProvider, useLanguage } from "../context/LanguageContext";
import Waitlist from "./waitlist/Waitlist";
import WaitlistDE from "./waitlist/WaitlistDE";

const Switch = () => {
  const { lang } = useLanguage();
  return lang === "de" ? <WaitlistDE /> : <Waitlist />;
};

const WaitlistPage = () => (
  <LanguageProvider>
    <Switch />
  </LanguageProvider>
);

export default WaitlistPage;
