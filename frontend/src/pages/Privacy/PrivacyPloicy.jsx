import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Lock, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen  text-white selection:bg-blue-500/30 overflow-x-hidden pb-40">
      {/* HEADER NAVIGATION */}
      <nav className="relative z-50 p-8 md:p-12">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-4 text-slate-500 hover:text-white transition-all"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-colors">
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.4em]">
            Back_to_Home
          </span>
        </button>
      </nav>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6">
        {/* HEADER SECTION */}
        <header className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.8] text-[#F5F7FA]">
              Privacy <br />
              <span className="text-[#3B82F6] text-2xl md:text-3xl font-light normal-case tracking-tight block mt-4 leading-relaxed">
                At Lovely, we value your trust and respect your privacy.
              </span>
            </h1>
          </motion.div>
        </header>

        {/* VERBATIM CONTENT BODY */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-12 text-slate-300 font-light leading-relaxed"
        >
          {/* INTRO */}
          <section>
            <p className="text-xl italic text-slate-400">
              This Privacy Policy explains how we collect, use, and safeguard
              your personal data when you visit our website, as well as your
              rights under applicable data protection laws.
            </p>
          </section>

          {/* I. CONTROLLER */}
          <section className="pt-12 border-t border-white/10">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
              I. Controller
            </h2>
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 space-y-2 font-mono text-sm leading-relaxed">
              <p>
                The controller within the meaning of the General Data Protection
                Regulation (GDPR) and other applicable data protection laws is:
              </p>
              <p className="text-white text-xl font-bold italic pt-4">Lovely</p>
              <p>Represented by: Lovely Ibañez</p>
              <p>Florastraße 31</p>
              <p>40217 Düsseldorf, Germany</p>
              <p>Telephone: +49 (0) 211 15869836</p>
              <p>Email: dataprivacy@lovely.com.de</p>
              <p>Website: www.lovely.com.de</p>
            </div>
          </section>

          {/* II. GENERAL INFO */}
          <section className="pt-12 border-t border-white/10">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
              II. General Information on Data Processing
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-blue-500 font-bold uppercase text-xs tracking-widest mb-4">
                  1. Scope of Processing
                </h3>
                <p>
                  Personal data refers to any information relating to an
                  identified or identifiable natural person (e.g. name, email
                  address, IP address, or user behavior). We process personal
                  data only to the extent necessary to ensure the proper
                  functioning of our website and to provide our consulting
                  services. Processing generally takes place only with your
                  consent, unless legal provisions permit processing without
                  prior consent.
                </p>
              </div>
              <div>
                <h3 className="text-blue-500 font-bold uppercase text-xs tracking-widest mb-4">
                  2. Legal Basis for Processing
                </h3>
                <p className="mb-4">
                  Personal data is processed on the basis of the following legal
                  grounds:
                </p>
                <ul className="space-y-2 font-mono text-xs uppercase tracking-wide list-none p-0">
                  <li>• Art. 6(1)(a) GDPR – your consent</li>
                  <li>
                    • Art. 6(1)(b) GDPR – performance of a contract or
                    pre-contractual measures
                  </li>
                  <li>
                    • Art. 6(1)(c) GDPR – compliance with a legal obligation
                  </li>
                  <li>
                    • Art. 6(1)(f) GDPR – legitimate interests of our company
                  </li>
                </ul>
                <p className="mt-4">
                  You have the right to object to processing based on legitimate
                  interest pursuant to Art. 21 GDPR.
                </p>
              </div>
              <div>
                <h3 className="text-blue-500 font-bold uppercase text-xs tracking-widest mb-4">
                  3. Data Retention and Deletion
                </h3>
                <p>
                  Personal data is deleted or blocked as soon as the purpose of
                  storage no longer applies, unless statutory retention
                  obligations require continued storage.
                </p>
              </div>
              <div>
                <h3 className="text-blue-500 font-bold uppercase text-xs tracking-widest mb-4">
                  4. Disclosure to Third Parties
                </h3>
                <p>
                  Personal data is disclosed to third parties only where legally
                  permitted or necessary for contractual purposes. Where we use
                  external service providers, they are carefully selected,
                  contractually bound, and monitored in accordance with GDPR
                  requirements. Data transfers to third countries occur only
                  where: an adequate level of protection exists, your consent
                  has been given, or a legal basis applies.
                </p>
              </div>
              <div>
                <h3 className="text-blue-500 font-bold uppercase text-xs tracking-widest mb-4">
                  5. SSL Encryption
                </h3>
                <p>
                  For security reasons and to protect the transmission of
                  confidential content, this website uses SSL encryption. You
                  can recognize encrypted connections by “https://” in your
                  browser address bar.
                </p>
              </div>
            </div>
          </section>

          {/* III. WEBSITE ACCESS */}
          <section className="pt-12 border-t border-white/10">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
              III. Website Access and Log Files
            </h2>
            <div className="space-y-4">
              <p>
                When visiting our website for informational purposes only, the
                following data is automatically collected:
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 font-mono text-[10px] uppercase text-slate-500 mb-6">
                <li className="bg-white/5 p-2 px-4 rounded border border-white/5 italic">
                  Browser type/version
                </li>
                <li className="bg-white/5 p-2 px-4 rounded border border-white/5 italic">
                  Operating system
                </li>
                <li className="bg-white/5 p-2 px-4 rounded border border-white/5 italic">
                  Internet provider
                </li>
                <li className="bg-white/5 p-2 px-4 rounded border border-white/5 italic">
                  IP address
                </li>
                <li className="bg-white/5 p-2 px-4 rounded border border-white/5 italic">
                  Date and time
                </li>
                <li className="bg-white/5 p-2 px-4 rounded border border-white/5 italic">
                  Referrer URL
                </li>
              </ul>
              <p>
                These data are stored temporarily in log files and are not
                combined with other personal data.
              </p>
              <p>Legal basis: Art. 6(1)(f) GDPR (legitimate interest)</p>
              <p>
                Purpose: technical security, stability, and optimization of the
                website
              </p>
              <p>Storage period: deleted after the end of the session</p>
              <p>
                Objection is not possible, as this processing is technically
                required for website operation.
              </p>
            </div>
          </section>

          {/* IV. COOKIES */}
          <section className="pt-12 border-t border-white/10">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
              IV. Use of Cookies
            </h2>
            <div className="space-y-4">
              <p>
                Our website uses only technically necessary cookies and
                comparable session technologies required for the proper
                operation and security of our booking system and website
                functionality (e.g. session management and appointment
                processing). These cookies are not used for marketing,
                profiling, or cross-site tracking purposes. The legal basis for
                this processing is Art. 6(1)(f) GDPR (legitimate interest in
                providing a functional and secure booking service). You can
                configure your browser to block or delete cookies at any time.
                Please note that disabling cookies may limit the functionality
                of the booking system.
              </p>
              <p>
                We use cookies for: language preferences, session recognition,
                search terms.
              </p>
              <p>Legal basis: Art. 6(1)(f) GDPR</p>
              <p>Purpose: user-friendly website operation</p>
              <p>
                You can control cookies via your browser settings. Stored
                cookies can be deleted at any time. Disabling cookies may limit
                website functionality.
              </p>
            </div>
          </section>

          {/* V. CONTACT */}
          <section className="pt-12 border-t border-white/10">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
              V. Booking System and Contact Communication
            </h2>
            <div className="space-y-4">
              <p>
                When you use our booking system or contact us via email, the
                following data may be processed: name company name email address
                message content selected appointment time IP address date and
                time of submission Data is used exclusively to process your
                inquiry or booking. Legal basis: Art. 6(1)(a) GDPR (consent)
                Art. 6(1)(b) GDPR (contractual or pre-contractual communication)
                Art. 6(1)(f) GDPR (legitimate interest in communication) Data is
                deleted once communication is completed and no further legal
                obligations exist. You may withdraw your consent at any time by
                emailing: dataprivacy@lovely.com.de
              </p>
            </div>
          </section>

          {/* VI. GOOGLE ANALYTICS */}
          <section className="pt-12 border-t border-white/10">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
              VI. Website Analytics (Hostinger)
            </h2>
            <div className="space-y-4">
              <p>
                Our website uses a server-side analytics system provided by our
                hosting provider, Hostinger, to monitor and improve the
                technical performance, security, and stability of our website.
                The following data may be processed: number of visitors page
                views traffic sources country of access device and browser type
                bandwidth usage Data is collected exclusively at server level
                and does not involve the use of cookies or similar tracking
                technologies in the user’s browser. The collected information is
                used solely for statistical and technical purposes and is not
                combined with other data sources. No profiling or marketing
                tracking takes place. The legal basis for this processing is
                Art. 6(1)(f) GDPR (legitimate interest in ensuring the secure
                and efficient operation of our website). Data is not transferred
                to third parties for advertising or marketing purposes.
              </p>
            </div>
          </section>

          {/* VII. YOUR RIGHTS */}
          <section className="pt-12 border-t border-white/10">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
              VII. Your Rights
            </h2>
            <div className="space-y-4">
              <p>
                You have the right to: Access your data (Art. 15 GDPR),
                Rectification (Art. 16 GDPR), Erasure (Art. 17 GDPR),
                Restriction of processing (Art. 18 GDPR), Data portability (Art.
                20 GDPR), Objection (Art. 21 GDPR), Withdrawal of consent (Art.
                7(3) GDPR).
              </p>
              <div className="mt-8 p-8 bg-white/5 border border-white/10 rounded-3xl italic">
                <p className="text-white font-bold not-italic mb-2">
                  You also have the right to lodge a complaint with the
                  supervisory authority:
                </p>
                <p>
                  State Commissioner for Data Protection and Freedom of
                  Information NRW
                </p>
                <p>Postfach 20 04 44</p>
                <p>40102 Düsseldorf, Germany</p>
                <p>Email: poststelle@ldi.nrw.de</p>
              </div>
            </div>
          </section>

          {/* VIII. VERSION */}
          <section className="pt-12 border-t border-white/10 pb-20">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
              VIII. Version
            </h2>
            <p>This Privacy Policy may be printed or saved.</p>
            <p className="font-mono text-blue-500 uppercase tracking-widest mt-4">
              Last updated: Feb 2026
            </p>
          </section>
        </motion.div>
      </div>

      {/* GHOST BACKGROUND DECOR */}
      <div className="fixed bottom-[-5%] right-[-5%] select-none pointer-events-none opacity-[0.02] z-0">
        <h2 className="text-[25vw] font-black italic uppercase leading-none">
          Privacy
        </h2>
      </div>
    </main>
  );
}
