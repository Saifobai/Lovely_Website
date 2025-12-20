import { useNavigate } from "react-router-dom";

import BookingCalendar from "../../components/calendar/BookingCalendar";
export default function BookingPage() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-[#020617] text-white py-32">
      <div className="w-[70%] mx-auto">
        {/* 🔙 Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center gap-2
          text-gray-300 hover:text-white transition"
        >
          ← Back to Home
        </button>

        {/* <h1 className="text-4xl font-bold mb-4">Book a Consultation</h1> */}

        {/* <p className="text-gray-400 mb-10">
          Choose a date and time that works for you.
        </p> */}
        <BookingCalendar />
      </div>
    </section>
  );
}
