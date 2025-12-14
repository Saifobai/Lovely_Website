import hero_l from "../../assets/hero_l.png";
export default function Hero() {
  return (
    <section className="w-[80%] mx-auto grid md:grid-cols-2 gap-12 px-10 py-32 items-center mt-20 relative overflow-hidden">
      <div className="space-y-6">
        <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-1 rounded-full text-sm">
          ✨ New Feature Launch
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Accelerate Your Business <br /> Growth
        </h1>

        <p className="text-gray-400 max-w-xl">
          Our powerful SaaS platform helps modern teams increase productivity by
          <span className="text-white font-semibold"> 40%</span> and reduce
          operational costs. Join over
          <span className="text-white font-semibold"> 10,000+</span> companies
          already transforming their workflow.
        </p>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-medium shadow-lg shadow-blue-600/20">
            Start Free Trial →
          </button>

          <button className="flex items-center gap-2 border border-white/20 hover:bg-white/5 px-6 py-3 rounded-xl shadow-lg shadow-black/10">
            Watch Demo
          </button>
        </div>
      </div>

      {/* RIGHT SIDE — LS GRAPHIC */}
      <div className="relative flex justify-center items-center">
        <img
          src={hero_l}
          alt="LS Digital Agency"
          className="w-[50%] max-w-xl object-contain drop-shadow-2xl"
        />

        {/* Floating Cards with Animation */}
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
    </section>
  );
}
