import Hero from "../../components/home/Hero";
import Navbar from "../../components/Navbar";
import { AboutPage } from "../about/AboutPage";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />
      <Hero />
      <AboutPage />
    </div>
  );
}
