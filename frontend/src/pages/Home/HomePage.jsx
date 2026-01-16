import Footer from "../../components/Footer";
import Hero from "../../components/home/Hero";
import Manifesto from "../../components/layout/Manifesto";
import Navbar from "../../components/navbar/Navbar";

import { AboutUs } from "../../sections/AboutUs";
import ContactUs from "../../sections/ContactUs";
import ServicesSection from "../../sections/ServicesCode/ServicesSection";

export default function HomePage() {
  return (
    <section id="home" className="min-h-screen bg-[#020617] text-white">
      <Hero />
      <Manifesto />
      <AboutUs />

      <ServicesSection />
      <ContactUs />
    </section>
  );
}
