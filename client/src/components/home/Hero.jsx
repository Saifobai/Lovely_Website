import hero_l from "../../assets/hero_l.png";
import { useNavigate } from "react-router-dom";
import Section from "../layout/Section";

export default function Hero() {
  const navigate = useNavigate();
  const openConsultation = () => {
    // smooth scroll to contact
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // open calendar after scroll
    setTimeout(() => {
      window.dispatchEvent(new Event("open-calendar"));
    }, 600);
  };

  return (
    <Section id="hero" variant="gradient">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 bg-[#1c1c84]/10 text-[#1c1c84] px-4 py-1 rounded-full text-sm">
            ✨ New Feature Launch
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Accelerate Your Business <br /> Growth
          </h1>

          <p className="text-gray-400 max-w-xl">
            Our powerful SaaS platform helps modern teams increase productivity
            by
            <span className="text-white font-semibold"> 40%</span> and reduce
            operational costs.
          </p>

          <button
            onClick={() => navigate("/book")}
            className="bg-[#1c1c84] hover:bg-[#000068] px-8 py-4 rounded-xl"
          >
            Get Consultant →
          </button>
        </div>

        {/* RIGHT SIDE — UNCHANGED */}
        <div className="relative flex justify-center items-center">
          <img
            src={hero_l}
            alt="LS Digital Agency"
            className="w-[50%] max-w-xl object-contain drop-shadow-2xl"
          />

          <div className="absolute -top-10 left-6 bg-[#0a0f1f] border border-white/10 px-6 py-4 rounded-2xl text-base backdrop-blur-xl animate-revenueMove shadow-xl">
            <span className="text-green-400 font-bold text-xl">+127%</span>
            <span className="text-gray-300 ml-2">Revenue Growth</span>
          </div>

          <div className="absolute bottom-10 left-12 bg-[#0a0f1f] border border-white/10 px-6 py-4 rounded-2xl text-base backdrop-blur-xl animate-timeMove shadow-xl">
            <span className="text-yellow-400 font-bold text-xl">40%</span>
            <span className="text-gray-300 ml-2">Time Saved</span>
          </div>

          <div className="absolute bottom-14 right-14 bg-[#0a0f1f] border border-white/10 px-6 py-4 rounded-2xl text-base backdrop-blur-xl animate-usersFloat shadow-xl">
            <span className="text-blue-400 font-bold text-xl">2.4k</span>
            <span className="text-gray-300 ml-2">Active Users</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
