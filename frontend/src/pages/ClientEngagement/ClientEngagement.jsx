// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowLeft, Scale, Briefcase } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function ClientEngagement() {
//   const navigate = useNavigate();

//   return (
//     <main className="relative min-h-screen  text-white selection:bg-blue-500/30 overflow-x-hidden pb-40">
//       {/* NAVIGATION */}
//       <nav className="relative z-50 p-8 md:p-12">
//         <button
//           onClick={() => navigate(-1)}
//           className="group flex items-center gap-4 text-slate-500 hover:text-white transition-all"
//         >
//           <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-colors">
//             <ArrowLeft
//               size={18}
//               className="group-hover:-translate-x-1 transition-transform"
//             />
//           </div>
//           <span className="font-mono text-[10px] uppercase tracking-[0.4em]">
//             Back_to_Home
//           </span>
//         </button>
//       </nav>

//       <div className="relative z-10 max-w-[1000px] mx-auto px-6">
//         {/* HEADER SECTION */}
//         <header className="mb-32">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.8] text-[#F5F7FA]">
//               Client <br />
//               <span className="text-[#3B82F6] text-2xl md:text-3xl font-light normal-case tracking-tight block mt-4 leading-relaxed max-w-2xl">
//                 Client Engagement Terms (Online Bookings)
//               </span>
//             </h1>
//           </motion.div>
//         </header>

//         {/* VERBATIM CONTENT BODY */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 1 }}
//           className="space-y-12 text-slate-300 font-light leading-relaxed"
//         >
//           {/* INTRO */}
//           <section className="text-xl italic text-slate-400">
//             <p>
//               These Client Engagement Terms (“Terms”) govern the booking and
//               provision of consulting services by Lovely (“we”, “us”, “our”)
//               through this website. By booking and paying for an appointment,
//               you agree to these Terms.
//             </p>
//           </section>

//           {/* 1. PROVIDER */}
//           <section className="pt-12 border-t border-white/10">
//             <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
//               1. Provider Information
//             </h2>
//             <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 space-y-2 font-mono text-sm leading-relaxed">
//               <p className="text-white text-xl font-bold italic mb-4">
//                 Lovely (Boutique Consulting)
//               </p>
//               <p>Florastraße 31</p>
//               <p>40217 Düsseldorf, Germany</p>
//               <p>Email: info@lovely.com.de</p>
//               <p>Data Protection: dataprivacy@lovely.com.de</p>
//             </div>
//           </section>

//           {/* 2. SCOPE */}
//           <section className="pt-12 border-t border-white/10">
//             <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
//               2. Scope of Services
//             </h2>
//             <div className="space-y-6">
//               <p>
//                 Lovely provides boutique consulting and advisory services,
//                 including strategy, cross-border structuring, and business
//                 advisory services as described on the website or in individual
//                 offers.
//               </p>
//               <p>
//                 All services constitute services within the meaning of §§ 611
//                 ff. BGB (Dienstleistungen). No specific commercial or financial
//                 outcome is guaranteed.
//               </p>
//               <div className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-3xl">
//                 <p className="text-white font-bold mb-4 uppercase text-xs tracking-widest">
//                   A binding contract is formed when:
//                 </p>
//                 <ul className="space-y-2 font-mono text-xs uppercase text-slate-400">
//                   <li>01. the booking is completed online, and</li>
//                   <li>02. payment has been successfully processed, and</li>
//                   <li>03. booking confirmation is issued.</li>
//                 </ul>
//               </div>
//             </div>
//           </section>

//           {/* 3. PRICES */}
//           <section className="pt-12 border-t border-white/10">
//             <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
//               3. Prices and Payment
//             </h2>
//             <p>
//               All prices are stated in euros unless otherwise indicated and are
//               exclusive of statutory VAT where applicable. Payment is due
//               immediately upon booking via the available online payment methods.
//               Lovely reserves the right to refuse or cancel bookings in
//               justified cases (e.g., technical errors, incorrect pricing, or
//               force majeure).
//             </p>
//           </section>

//           {/* 4. CANCELLATION */}
//           <section className="pt-12 border-t border-white/10">
//             <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8 underline decoration-blue-500/50">
//               4. Cancellation Policy (Mandatory Disclosure)
//             </h2>
//             <div className="space-y-4">
//               <p>
//                 Cancellations must be made in writing by email or via the
//                 booking confirmation link.
//               </p>
//               <p>
//                 Cancellations received at least 24 hours before the scheduled
//                 appointment will be refunded in full.
//               </p>
//               <p>
//                 Cancellations made less than 24 hours before the appointment, as
//                 well as no-shows, are non-refundable.
//               </p>
//               <p className="italic text-slate-400 uppercase text-[10px] tracking-widest">
//                 This policy applies to all online bookings and confirmed
//                 appointments.
//               </p>
//             </div>
//           </section>

//           {/* 5. WITHDRAWAL */}
//           <section className="pt-12 border-t border-white/10">
//             <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
//               5. Right of Withdrawal (Consumers)
//             </h2>
//             <div className="space-y-4 italic">
//               <p>
//                 If you are a consumer within the meaning of §13 BGB, you
//                 generally have a statutory right of withdrawal of 14 days.
//               </p>
//               <p>
//                 However, you agree that Lovely may begin providing the booked
//                 service before the withdrawal period expires. By doing so, you
//                 acknowledge that your right of withdrawal expires once the
//                 service has been fully performed.
//               </p>
//               <p className="not-italic font-mono text-xs mt-6">
//                 Withdrawal requests must be sent to:{" "}
//                 <span className="text-blue-500 underline">
//                   hello@lovely.com.de
//                 </span>
//               </p>
//             </div>
//           </section>

//           {/* 6. OBLIGATIONS */}
//           <section className="pt-12 border-t border-white/10">
//             <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
//               6. Client Obligations
//             </h2>
//             <p>
//               Clients agree to: provide accurate and complete information
//               relevant to the consultation, attend appointments punctually,
//               refrain from misuse of the services or website. Lovely is not
//               responsible for delays or performance issues caused by incomplete
//               or incorrect client information.
//             </p>
//           </section>

//           {/* 7. CONFIDENTIALITY */}
//           <section className="pt-12 border-t border-white/10">
//             <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
//               7. Confidentiality
//             </h2>
//             <p>
//               Both parties agree to treat all non-public business information
//               exchanged in connection with the services as confidential. This
//               obligation continues beyond the termination of the contractual
//               relationship.
//             </p>
//           </section>

//           {/* 8. INTELLECTUAL PROPERTY */}
//           <section className="pt-12 border-t border-white/10">
//             <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
//               8. Intellectual Property
//             </h2>
//             <p>
//               All materials, concepts, documents, and recommendations provided
//               by Lovely remain our intellectual property unless expressly agreed
//               otherwise in writing. Clients may use such materials solely for
//               their own internal purposes.
//             </p>
//           </section>

//           {/* 9. LIABILITY */}
//           <section className="pt-12 border-t border-white/10">
//             <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
//               9. Liability
//             </h2>
//             <div className="space-y-4">
//               <p>
//                 Lovely is liable without limitation in cases of intent and gross
//                 negligence. In cases of simple negligence, Lovely is liable only
//                 for breach of a material contractual obligation and only for
//                 foreseeable, contract-typical damage. Liability for injury to
//                 life, body, or health and mandatory statutory liability remains
//                 unaffected.
//               </p>
//               <p className="p-4 bg-white/5 border border-white/5 text-blue-400 font-mono text-[10px] uppercase tracking-widest text-center">
//                 Lovely does not provide legal, tax, or financial advice unless
//                 explicitly agreed in writing.
//               </p>
//             </div>
//           </section>

//           {/* 10. DATA PROTECTION */}
//           <section className="pt-12 border-t border-white/10">
//             <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
//               10. Data Protection
//             </h2>
//             <p>
//               Personal data is processed in accordance with applicable data
//               protection laws and our Privacy Policy.
//             </p>
//           </section>

//           {/* 11. FORCE MAJEURE */}
//           <section className="pt-12 border-t border-white/10">
//             <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
//               11. Force Majeure
//             </h2>
//             <p>
//               Lovely shall not be liable for delays or non-performance caused by
//               events beyond reasonable control, including but not limited to
//               natural disasters, technical failures, or government measures.
//             </p>
//           </section>

//           {/* 12. CHANGES */}
//           <section className="pt-12 border-t border-white/10">
//             <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
//               12. Changes to These Terms
//             </h2>
//             <p>
//               Lovely reserves the right to amend these Terms at any time. The
//               version valid at the time of booking shall apply.
//             </p>
//           </section>

//           {/* 13. GOVERNING LAW */}
//           <section className="pt-12 border-t border-white/10">
//             <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
//               13. Governing Law and Jurisdiction
//             </h2>
//             <p>
//               These Terms are governed by the laws of the Federal Republic of
//               Germany, excluding the UN Convention on Contracts for the
//               International Sale of Goods (CISG). Where legally permissible, the
//               place of jurisdiction is Düsseldorf, Germany.
//             </p>
//           </section>

//           {/* 14. FINAL PROVISIONS */}
//           <section className="pt-12 border-t border-white/10">
//             <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-8">
//               14. Final Provisions
//             </h2>
//             <p>
//               Should any provision of these Terms be invalid or unenforceable,
//               the remaining provisions shall remain unaffected. The invalid
//               provision shall be replaced by a legally permissible provision
//               closest to the intended economic purpose.
//             </p>
//           </section>

//           {/* FOOTER METADATA */}
//           <section className="pt-20">
//             <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.5em] text-slate-500">
//               <span>Last updated: February 2026</span>
//               <div className="flex items-center gap-2">
//                 <Scale size={12} /> Legal_Protocol_DUS
//               </div>
//             </div>
//           </section>
//         </motion.div>
//       </div>

//       {/* GHOST BACKGROUND DECOR */}
//       <div className="fixed bottom-[-5%] left-[-5%] select-none pointer-events-none opacity-[0.02] z-0">
//         <h2 className="text-[25vw] font-black italic uppercase leading-none">
//           TERMS
//         </h2>
//       </div>
//     </main>
//   );
// }

//==================================================================
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Scale, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ClientEngagement() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen text-white selection:bg-blue-500/30 overflow-x-hidden pb-20 md:pb-40">
      {/* NAVIGATION */}
      <nav className="relative z-50 p-6 md:p-12">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-4 text-slate-500 hover:text-white transition-all"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-colors">
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
          </div>
          <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em]">
            Back_to_Home
          </span>
        </button>
      </nav>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6">
        {/* HEADER SECTION */}
        <header className="mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] md:leading-[0.8] text-[#F5F7FA]">
              Client <br />
              <span className="text-[#3B82F6] text-lg sm:text-2xl md:text-3xl font-light normal-case tracking-tight block mt-4 leading-relaxed max-w-2xl">
                Client Engagement Terms (Online Bookings)
              </span>
            </h1>
          </motion.div>
        </header>

        {/* VERBATIM CONTENT BODY */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="space-y-10 md:space-y-12 text-slate-300 font-light leading-relaxed text-sm md:text-base"
        >
          {/* INTRO */}
          <section className="text-lg md:text-xl italic text-slate-400">
            <p>
              These Client Engagement Terms (“Terms”) govern the booking and
              provision of consulting services by Lovely (“we”, “us”, “our”)
              through this website. By booking and paying for an appointment,
              you agree to these Terms.
            </p>
          </section>

          {/* 1. PROVIDER */}
          <section className="pt-10 md:pt-12 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-6 md:mb-8">
              1. Provider Information
            </h2>
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl md:rounded-3xl p-6 md:p-8 space-y-2 font-mono text-[11px] md:text-sm leading-relaxed">
              <p className="text-white text-lg md:text-xl font-bold italic mb-4">
                Lovely (Boutique Consulting)
              </p>
              <p>Florastraße 31</p>
              <p>40217 Düsseldorf, Germany</p>
              <p>Email: info@lovely.com.de</p>
              <p>Data Protection: dataprivacy@lovely.com.de</p>
            </div>
          </section>

          {/* 2. SCOPE */}
          <section className="pt-10 md:pt-12 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-6 md:mb-8">
              2. Scope of Services
            </h2>
            <div className="space-y-6">
              <p>
                Lovely provides boutique consulting and advisory services,
                including strategy, cross-border structuring, and business
                advisory services as described on the website or in individual
                offers.
              </p>
              <p>
                All services constitute services within the meaning of §§ 611
                ff. BGB (Dienstleistungen). No specific commercial or financial
                outcome is guaranteed.
              </p>
              <div className="p-6 md:p-8 bg-blue-600/5 border border-blue-500/20 rounded-2xl md:rounded-3xl">
                <p className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">
                  A binding contract is formed when:
                </p>
                <ul className="space-y-2 font-mono text-[10px] uppercase text-slate-400">
                  <li>01. the booking is completed online, and</li>
                  <li>02. payment has been successfully processed, and</li>
                  <li>03. booking confirmation is issued.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. PRICES */}
          <section className="pt-10 md:pt-12 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-6 md:mb-8">
              3. Prices and Payment
            </h2>
            <p>
              All prices are stated in euros unless otherwise indicated and are
              exclusive of statutory VAT where applicable. Payment is due
              immediately upon booking via the available online payment methods.
              Lovely reserves the right to refuse or cancel bookings in
              justified cases (e.g., technical errors, incorrect pricing, or
              force majeure).
            </p>
          </section>

          {/* 4. CANCELLATION */}
          <section className="pt-10 md:pt-12 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-6 md:mb-8 underline decoration-blue-500/50">
              4. Cancellation Policy (Mandatory Disclosure)
            </h2>
            <div className="space-y-4">
              <p>
                Cancellations must be made in writing by email or via the
                booking confirmation link.
              </p>
              <p>
                Cancellations received at least 24 hours before the scheduled
                appointment will be refunded in full.
              </p>
              <p>
                Cancellations made less than 24 hours before the appointment, as
                well as no-shows, are non-refundable.
              </p>
              <p className="italic text-slate-400 uppercase text-[9px] md:text-[10px] tracking-widest">
                This policy applies to all online bookings and confirmed
                appointments.
              </p>
            </div>
          </section>

          {/* 5. WITHDRAWAL */}
          <section className="pt-10 md:pt-12 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-6 md:mb-8">
              5. Right of Withdrawal (Consumers)
            </h2>
            <div className="space-y-4 italic">
              <p>
                If you are a consumer within the meaning of §13 BGB, you
                generally have a statutory right of withdrawal of 14 days.
              </p>
              <p>
                However, you agree that Lovely may begin providing the booked
                service before the withdrawal period expires. By doing so, you
                acknowledge that your right of withdrawal expires once the
                service has been fully performed.
              </p>
              <p className="not-italic font-mono text-[11px] md:text-xs mt-6">
                Withdrawal requests must be sent to:{" "}
                <span className="text-blue-500 underline">
                  hello@lovely.com.de
                </span>
              </p>
            </div>
          </section>

          {/* 6. OBLIGATIONS */}
          <section className="pt-10 md:pt-12 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-6 md:mb-8">
              6. Client Obligations
            </h2>
            <p>
              Clients agree to: provide accurate and complete information
              relevant to the consultation, attend appointments punctually,
              refrain from misuse of the services or website. Lovely is not
              responsible for delays or performance issues caused by incomplete
              or incorrect client information.
            </p>
          </section>

          {/* 7. CONFIDENTIALITY */}
          <section className="pt-10 md:pt-12 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-6 md:mb-8">
              7. Confidentiality
            </h2>
            <p>
              Both parties agree to treat all non-public business information
              exchanged in connection with the services as confidential. This
              obligation continues beyond the termination of the contractual
              relationship.
            </p>
          </section>

          {/* 8. INTELLECTUAL PROPERTY */}
          <section className="pt-10 md:pt-12 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-6 md:mb-8">
              8. Intellectual Property
            </h2>
            <p>
              All materials, concepts, documents, and recommendations provided
              by Lovely remain our intellectual property unless expressly agreed
              otherwise in writing. Clients may use such materials solely for
              their own internal purposes.
            </p>
          </section>

          {/* 9. LIABILITY */}
          <section className="pt-10 md:pt-12 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-6 md:mb-8">
              9. Liability
            </h2>
            <div className="space-y-4">
              <p>
                Lovely is liable without limitation in cases of intent and gross
                negligence. In cases of simple negligence, Lovely is liable only
                for breach of a material contractual obligation and only for
                foreseeable, contract-typical damage. Liability for injury to
                life, body, or health and mandatory statutory liability remains
                unaffected.
              </p>
              <div className="p-4 bg-white/5 border border-white/5 text-blue-400 font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-center leading-relaxed">
                Lovely does not provide legal, tax, or financial advice unless
                explicitly agreed in writing.
              </div>
            </div>
          </section>

          {/* 10. DATA PROTECTION */}
          <section className="pt-10 md:pt-12 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-6 md:mb-8">
              10. Data Protection
            </h2>
            <p>
              Personal data is processed in accordance with applicable data
              protection laws and our Privacy Policy.
            </p>
          </section>

          {/* 11. FORCE MAJEURE */}
          <section className="pt-10 md:pt-12 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-6 md:mb-8">
              11. Force Majeure
            </h2>
            <p>
              Lovely shall not be liable for delays or non-performance caused by
              events beyond reasonable control, including but not limited to
              natural disasters, technical failures, or government measures.
            </p>
          </section>

          {/* 12. CHANGES */}
          <section className="pt-10 md:pt-12 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-6 md:mb-8">
              12. Changes to These Terms
            </h2>
            <p>
              Lovely reserves the right to amend these Terms at any time. The
              version valid at the time of booking shall apply.
            </p>
          </section>

          {/* 13. GOVERNING LAW */}
          <section className="pt-10 md:pt-12 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-6 md:mb-8">
              13. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms are governed by the laws of the Federal Republic of
              Germany, excluding the UN Convention on Contracts for the
              International Sale of Goods (CISG). Where legally permissible, the
              place of jurisdiction is Düsseldorf, Germany.
            </p>
          </section>

          {/* 14. FINAL PROVISIONS */}
          <section className="pt-10 md:pt-12 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-6 md:mb-8">
              14. Final Provisions
            </h2>
            <p>
              Should any provision of these Terms be invalid or unenforceable,
              the remaining provisions shall remain unaffected. The invalid
              provision shall be replaced by a legally permissible provision
              closest to the intended economic purpose.
            </p>
          </section>

          {/* FOOTER METADATA */}
          <section className="pt-16 md:pt-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-slate-500 text-center md:text-left">
              <span></span>
              <div className="flex items-center gap-2"></div>
            </div>
          </section>
        </motion.div>
      </div>

      {/* GHOST BACKGROUND DECOR */}
      {/* Optimized: Hidden on mobile to prevent layout breakage, visible on larger screens */}
      <div className="fixed bottom-[-5%] left-[-5%] select-none pointer-events-none opacity-[0.02] z-0 hidden sm:block">
        <h2 className="text-[25vw] font-black italic uppercase leading-none">
          TERMS
        </h2>
      </div>
    </main>
  );
}
