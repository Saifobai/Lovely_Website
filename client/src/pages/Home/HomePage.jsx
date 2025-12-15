import Hero from "../../components/home/Hero";
import Navbar from "../../components/navbar/Navbar";
import { AboutUs } from "../../sections/AboutUs";
import ContactUs from "../../sections/ContactUs";

export default function HomePage() {
  return (
    <section id="home" className="min-h-screen bg-[#020617] text-white">
      <Hero />
      <AboutUs />
      <ContactUs />
    </section>
  );
}
