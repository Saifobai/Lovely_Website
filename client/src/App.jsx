import React from "react";
import { useTranslation } from "react-i18next";
import HomePage from "./pages/Home/HomePage";
import Footer from "./components/Footer";
const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
