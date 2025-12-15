import { useEffect, useState } from "react";
import ContactInfoCard from "../components/contact/ContactInfoCard";
import ContactForm from "../components/contact/ContactForm";

import CalendarModal from "../components/calendar/CalendarModal";
import { Mail, Phone, MapPin } from "lucide-react";
import BookAppointmentCard from "../components/calendar/BookAppointmentCard";
import Section from "../components/layout/Section";

const ContactUs = () => {
  const [openCalendar, setOpenCalendar] = useState(false);

  // ✅ listen for hero CTA
  useEffect(() => {
    const handler = () => setOpenCalendar(true);
    window.addEventListener("open-calendar", handler);
    return () => window.removeEventListener("open-calendar", handler);
  }, []);

  return (
    <Section id="contact" className="relative py-28 bg-[#020617]">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <span
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full
            bg-blue-500/10 text-blue-400 text-sm mb-6"
          >
            🚀 Let’s Build Something Amazing
          </span>

          <h2 className="text-4xl font-bold leading-tight mb-4">
            Ready to Transform Your Digital Presence?
          </h2>

          <p className="text-gray-400 max-w-xl mb-10">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>

          <div className="space-y-6">
            <ContactInfoCard
              icon={<Mail />}
              title="Email"
              value="hello@example.com"
              subtitle="We reply within 4 hours"
            />

            <ContactInfoCard
              icon={<Phone />}
              title="Phone"
              value="+1 (555) 234-5678"
              subtitle="Mon–Fri, 9AM–6PM"
            />

            {/* 🔥 NEW BOOK APPOINTMENT CARD
            <BookAppointmentCard onClick={() => setOpenCalendar(true)} /> */}
          </div>
        </div>

        {/* RIGHT */}
        <ContactForm />
      </div>

      {/* 🔥 CALENDAR POPUP */}
      {openCalendar && <CalendarModal onClose={() => setOpenCalendar(false)} />}
    </Section>
  );
};

export default ContactUs;
