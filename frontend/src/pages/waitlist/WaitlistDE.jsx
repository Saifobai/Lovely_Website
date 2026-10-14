import { useState } from "react";
import toast from "react-hot-toast";
import LanguageSwitcher from "../../components/LanguageSwitcher";

// Toast look that matches the page (navy + gold). <Toaster /> already lives in App.jsx.
// Only used for errors now; success has its own card.
const TOAST_OPTIONS = {
  id: "waitlist", // one toast at a time, no stacking on repeated clicks
  style: {
    background: "#1b2a4a",
    color: "#f7f6f2",
    border: "1px solid #c7b58a",
    borderRadius: 0,
    fontSize: "13px",
    padding: "14px 16px",
    maxWidth: "420px",
  },
  iconTheme: { primary: "#c7b58a", secondary: "#1b2a4a" },
};

const API_URL = import.meta.env.VITE_API_URL ?? "/api";

// U+FE0E forces the plain text glyph (Windows would render a blue emoji box).
const ARROW = "↗︎";

const NAV_LINKS = [
  { label: "So funktioniert’s", id: "approach" },
  { label: "Das Netzwerk", id: "network" },
  { label: "Für Partner", id: "access" },
];

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/*  `value` = English string the backend validates. Never translate    */
/*  `value`, only `label`.                                             */
/* ------------------------------------------------------------------ */

const ROLES = [
  { value: "Investor / Family Office", label: "Investor / Family Office" },
  {
    value: "Property Owner / Seller",
    label: "Immobilieneigentümer / Verkäufer",
  },
  { value: "Developer / Operator", label: "Projektentwickler / Betreiber" },
  { value: "Financing Partner", label: "Finanzierungspartner" },
  { value: "Broker / Deal Originator", label: "Makler / Deal-Originator" },
  { value: "Professional Adviser", label: "Professioneller Berater" },
  { value: "Other Stakeholder", label: "Sonstiger Beteiligter" },
];

const INTERESTS = [
  { value: "Real Estate", label: "Immobilien" },
  { value: "Hospitality", label: "Hospitality" },
  { value: "Infrastructure & Projects", label: "Infrastruktur & Projekte" },
  { value: "Operating Businesses", label: "Operative Unternehmen" },
  {
    value: "Private Capital / Financing",
    label: "Privates Kapital / Finanzierung",
  },
  {
    value: "Cross-border Opportunities",
    label: "Grenzüberschreitende Optionen",
  },
  { value: "Multiple sectors", label: "Mehrere Sektoren" },
];

const STAKEHOLDERS = [
  { icon: "◈", label: "Investoren & Family Offices" },
  { icon: "⌂", label: "Immobilieneigentümer" },
  { icon: "▦", label: "Projektentwickler" },
  { icon: ARROW, label: "Kapital- & Deal-Partner" },
];

const FEATURES = [
  {
    number: "01 / ZUGANG",
    title: "Kuratierte Optionen",
    text: "Entdecken Sie selektiv geteilte Off-Market-Optionen in Immobilien, operativen Unternehmen und strategischen Projekten.",
  },
  {
    number: "02 / VERBINDUNG",
    title: "Strukturierte Vermittlung",
    text: "Bringen Sie die richtigen Investoren, Eigentümer, Betreiber und Kapitalgeber mit klarem Anliegen ins Gespräch.",
  },
  {
    number: "03 / DISKRETION",
    title: "Vertraulich von Grund auf",
    text: "Frühe Gespräche bleiben bewusst zurückhaltend. Sensible Details werden erst geteilt, wenn die passenden Freigaben und Vereinbarungen vorliegen.",
  },
];

const ACCESS_POINTS = [
  "Für qualifizierte Investoren, Eigentümer, Projektentwickler und professionelle Partner.",
  "Konzipiert für direkte, relevante Kontakte – nicht für Massenmarkt-Inserate.",
  "Die Anmeldung zur Warteliste ist eine Interessensbekundung, keine Zugangsgarantie.",
];

const EMPTY_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  interest: "",
  website: "", // honeypot: real users never see or fill this field
};

/* ------------------------------------------------------------------ */
/*  Shared class strings                                               */
/* ------------------------------------------------------------------ */

const SERIF = "font-[Georgia,'Times_New_Roman',serif]";
const SHELL =
  "mx-auto w-full max-w-[1240px] px-[18px] sm:px-[23px] md:px-[34px]";

const BTN =
  "inline-flex min-h-12 cursor-pointer items-center justify-center gap-[13px] border border-transparent px-5 text-xs font-[650] tracking-[.015em] transition duration-200";

const LABEL =
  "mb-2 block text-[10px] font-bold uppercase tracking-[.08em] text-[#5e6677]";

const CONTROL =
  "h-[46px] w-full rounded-none border border-[#dfe1e8] bg-[#fcfcfd] px-[13px] text-base text-[#30394d] outline-none transition md:text-xs focus:border-[#8c82bf] focus:shadow-[0_0_0_3px_rgba(166,155,218,.14)]";

/* ------------------------------------------------------------------ */
/*  Success card (replaces the form after a successful submit)         */
/* ------------------------------------------------------------------ */

const SuccessCard = ({ name }) => (
  <div
    role="status"
    className="border border-[#e3e1eb] bg-white px-[19px] py-8 shadow-[0_18px_50px_rgba(27,42,74,.07)] sm:p-[34px]"
  >
    <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#c7b58a] text-sm text-[#c7b58a]">
      ✓
    </div>
    <p className={`${SERIF} mb-4 text-[22px] text-[#1b2a4a]`}>
      Guten Tag {name},
    </p>
    <div className="space-y-4 text-[13px] leading-[1.85] text-[#4d5669]">
      <p>
        vielen Dank für Ihr Interesse an unseren internationalen
        Off-Market-Deals.
      </p>
      <p>
        Wir freuen uns, Sie auf unserer Warteliste begrüßen zu dürfen. Ihr
        Interesse bedeutet uns viel, und wir freuen uns darauf, Ihnen bald
        exklusive Möglichkeiten und Neuigkeiten vorstellen zu dürfen.
      </p>
      <p>
        Wir bereiten derzeit etwas Besonderes vor. Sobald es Neuigkeiten gibt,
        werden Sie zu den Ersten gehören, die davon erfahren.
      </p>
      <p className={`${SERIF} text-[17px] italic text-[#8279b5]`}>
        Sie stehen auf unserer Liste. Exklusive Möglichkeiten sind auf dem Weg.
      </p>
      <p>Gute Dinge sind es wert, dass man auf sie wartet.</p>
    </div>
    <p className="mt-6 text-[13px] leading-[1.7] text-[#4d5669]">
      Mit besten Grüßen
      <br />
      <span className={`${SERIF} text-[16px] text-[#1b2a4a]`}>
        Ihr Lovely Team
      </span>
    </p>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const WaitlistDE = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollToId = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading || submitted || !e.currentTarget.reportValidity()) return;

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data.debug) console.error("[waitlist] server says:", data.debug);
        // Server messages are English, so map by status code to German.
        throw new Error(
          res.status === 400
            ? "Bitte überprüfen Sie Ihre Angaben und versuchen Sie es erneut."
            : res.status === 429
              ? "Zu viele Versuche. Bitte warten Sie einen Moment und versuchen Sie es erneut."
              : "Ihre Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es in Kürze erneut.",
        );
      }

      setSubmittedName(form.firstName.trim());
      setSubmitted(true);
      document
        .getElementById("access")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    } catch (err) {
      toast.error(
        err instanceof TypeError
          ? "Der Server ist nicht erreichbar. Bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut."
          : err.message,
        { ...TOAST_OPTIONS, duration: 6000 },
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f7f6f2] font-sans leading-normal text-[#20283a]">
      <main>
        {/* ============================ HERO ============================ */}
        <section
          id="top"
          className="relative flex min-h-[690px] items-center overflow-hidden bg-[#1b2a4a] pt-[125px] pb-20 text-white md:pt-[138px]"
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
            srcSet="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80 1200w, https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85 2000w"
            sizes="100vw"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-[center_44%] opacity-[.96]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,26,49,.96),rgba(20,33,59,.75))] md:bg-[linear-gradient(90deg,rgba(15,26,49,.98)_0%,rgba(20,33,59,.91)_45%,rgba(20,33,59,.22)_100%)]" />
          <div className="absolute inset-0 hidden bg-[linear-gradient(0deg,rgba(13,24,45,.55),transparent_50%)] md:block" />
          <div className="pointer-events-none absolute -right-[140px] -bottom-[220px] size-[440px] rounded-full border border-[rgba(199,181,138,.22)] shadow-[0_0_0_45px_rgba(199,181,138,.035),0_0_0_95px_rgba(199,181,138,.025)]" />

          <header className="absolute inset-x-0 top-0 z-20 mx-auto flex h-[72px] max-w-[1240px] items-center justify-between border-b border-white/[.13] px-[18px] text-white sm:px-[23px] md:h-[82px] md:px-[34px]">
            <a
              href="#top"
              onClick={(e) => scrollToId(e, "top")}
              aria-label="Off-market Deals — nach oben"
              className="flex items-center gap-2.5 text-[10px] font-bold tracking-[.12em] sm:text-[11px] md:gap-3 md:text-[13px] md:tracking-[.18em]"
            >
              <span className="grid size-[29px] shrink-0 rotate-45 place-items-center border border-[#c7b58a] font-[Georgia,serif] text-[15px] text-[#c7b58a]">
                <span className="-rotate-45">✦</span>
              </span>
              <span className="hidden min-[400px]:inline">
                OFF-MARKET DEALS
              </span>
            </a>

            <nav
              aria-label="Hauptnavigation"
              className="flex items-center gap-3 text-xs text-white/80 md:gap-[34px]"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToId(e, link.id)}
                  className="hidden transition hover:text-white md:inline"
                >
                  {link.label}
                </a>
              ))}
              <LanguageSwitcher />
              <a
                href="#access"
                onClick={(e) => scrollToId(e, "access")}
                className="border border-white/50 px-[11px] py-[9px] text-[10px] text-white transition duration-200 hover:bg-white hover:text-[#1b2a4a] md:px-[17px] md:py-[11px] md:text-xs"
              >
                {`Zugang anfragen  ${ARROW}`}
              </a>
            </nav>
          </header>

          <div className={`${SHELL} relative z-10`}>
            <div className="max-w-[740px]">
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.23em] text-[#c7b58a] before:h-px before:w-[30px] before:shrink-0 before:bg-[#c7b58a] before:content-['']">
                Ein privates Netzwerk für außergewöhnliche Optionen
              </div>

              <h1
                className={`${SERIF} mt-[26px] mb-6 max-w-[760px] text-[clamp(36px,5.6vw,72px)] leading-[1.06] font-normal tracking-[-.035em]`}
              >
                Wo privates Kapital auf{" "}
                <em className="font-normal text-[#c6bee9]">
                  Off-Market-Chancen trifft.
                </em>
              </h1>

              <p className="mb-[31px] max-w-[565px] text-sm leading-[1.8] text-white/75 md:text-base">
                Ein diskretes Netzwerk, das qualifizierte Investoren,
                Eigentümer, Projektentwickler und Finanzierungspartner rund um
                sorgfältig vermittelte Optionen zusammenbringt.
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href="#access"
                  onClick={(e) => scrollToId(e, "access")}
                  className={`${BTN} w-full bg-[#f7f6f2] text-[#1b2a4a] hover:bg-[#dcd6f2] sm:w-auto`}
                >
                  Auf die Warteliste <span>{ARROW}</span>
                </a>
                <a
                  href="#approach"
                  onClick={(e) => scrollToId(e, "approach")}
                  className={`${BTN} pl-0 text-white`}
                >
                  Netzwerk entdecken{" "}
                  <span className="text-lg text-[#c7b58a]">→</span>
                </a>
              </div>

              <div className="mt-[39px] flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase leading-relaxed tracking-[.1em] text-white/55">
                {[
                  "Nur auf Einladung",
                  "Vertraulich von Grund auf",
                  "Internationale Reichweite",
                ].map((note) => (
                  <span key={note} className="flex items-center gap-2">
                    <i className="inline-block size-1 rounded-full bg-[#c7b58a]" />
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================= STAKEHOLDER STRIP ===================== */}
        <section
          id="network"
          className="scroll-mt-28 border-b border-[#e4e5eb] bg-white"
        >
          <div
            className={`${SHELL} flex min-h-[108px] flex-col items-start justify-between gap-5 py-6 md:flex-row md:items-center md:gap-6 md:py-0`}
          >
            <div className="max-w-[160px] text-[10px] uppercase tracking-[.16em] text-[#7a8190]">
              Für die Menschen hinter den Deals
            </div>
            <div className="grid w-full grid-cols-1 gap-4 min-[420px]:grid-cols-2 md:flex md:w-auto md:flex-wrap md:items-center md:gap-9">
              {STAKEHOLDERS.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-[11px] text-[11px] font-semibold text-[#3e475a] md:text-xs"
                >
                  <span className="grid size-[30px] shrink-0 place-items-center rounded-full border border-[#dedfea] text-[13px] text-[#7770a9]">
                    {s.icon}
                  </span>
                  {s.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================== APPROACH =========================== */}
        <section id="approach" className="scroll-mt-28 py-[75px] md:py-[100px]">
          <div className={SHELL}>
            <div className="mb-10 block md:flex md:items-end md:justify-between md:gap-[35px]">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[.19em] text-[#8279b5]">
                  Eine durchdachtere Art der Vernetzung
                </div>
                <h2
                  className={`${SERIF} mt-3 max-w-[600px] text-[36px] leading-[1.13] font-normal tracking-[-.025em] text-[#1b2a4a] md:text-[clamp(34px,4vw,49px)]`}
                >
                  Weniger Öffentlichkeit.
                  <br />
                  Mehr Zugang.
                </h2>
              </div>
              <p className="mt-5 mb-1 max-w-[370px] text-[13px] leading-[1.8] text-[#687185] md:mt-0">
                Wichtige Optionen verdienen mehr als ein überfülltes Inserat.
                Das Netzwerk hilft den richtigen Parteien, sich mit Klarheit,
                Diskretion und Zielstrebigkeit zu verbinden.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {FEATURES.map((f) => (
                <article
                  key={f.number}
                  className="border border-[#e4e5eb] bg-white px-7 pt-[29px] pb-[30px] transition duration-[250ms] hover:-translate-y-[3px] hover:shadow-[0_24px_70px_rgba(18,31,57,.12)] md:min-h-[218px]"
                >
                  <div className={`${SERIF} text-[13px] text-[#9a91c9]`}>
                    {f.number}
                  </div>
                  <h3
                    className={`${SERIF} mt-5 mb-[11px] text-[23px] font-normal text-[#1b2a4a] md:mt-[29px]`}
                  >
                    {f.title}
                  </h3>
                  <p className="m-0 max-w-[300px] text-xs leading-[1.85] text-[#687185]">
                    {f.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ======================== ACCESS / FORM ======================== */}
        <section
          id="access"
          className="scroll-mt-28 bg-[#eeedf3] py-[70px] md:py-[90px]"
        >
          <div
            className={`${SHELL} grid grid-cols-1 items-start gap-9 lg:grid-cols-[1fr_.82fr] lg:gap-[75px]`}
          >
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[.19em] text-[#8279b5]">
                Früher Zugang
              </div>
              <h2
                className={`${SERIF} mt-[13px] mb-[19px] text-[36px] leading-[1.12] font-normal tracking-[-.03em] text-[#1b2a4a] md:text-[clamp(36px,4vw,52px)]`}
              >
                Seien Sie dabei,
                <br />
                bevor der Deal
                <br />
                öffentlich wird.
              </h2>
              <p className="max-w-[470px] text-[13px] leading-[1.9] text-[#687185]">
                Melden Sie Ihr Interesse an, um für den frühen Zugang
                berücksichtigt zu werden. Schildern Sie uns, wie Sie am
                Deal-Ökosystem teilnehmen, damit wir erkennen können, wo
                relevante Kontakte entstehen könnten.
              </p>
              <div className="mt-[30px] grid gap-4">
                {ACCESS_POINTS.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-[13px] text-xs text-[#4d5669]"
                  >
                    <span className="grid size-[21px] flex-none place-items-center rounded-full border border-[#c8c2e3] text-[11px] text-[#746ba9]">
                      ✓
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* form, or the success card once submitted */}
            {submitted ? (
              <SuccessCard name={submittedName} />
            ) : (
              <form
                id="waitlist-form"
                onSubmit={handleSubmit}
                className="border border-[#e3e1eb] bg-white px-[19px] py-6 shadow-[0_18px_50px_rgba(27,42,74,.07)] sm:p-[34px]"
              >
                <div className="mb-[26px] flex items-center justify-between gap-3">
                  <h3
                    className={`${SERIF} m-0 text-[25px] font-normal text-[#1b2a4a]`}
                  >
                    Frühen Zugang anfragen
                  </h3>
                </div>

                <fieldset
                  disabled={loading}
                  className="m-0 min-w-0 border-0 p-0 disabled:opacity-80"
                >
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[13px]">
                    <div className="mb-[17px]">
                      <label htmlFor="firstName" className={LABEL}>
                        Vorname
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        autoComplete="given-name"
                        placeholder="Ihr Vorname"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        className={CONTROL}
                      />
                    </div>
                    <div className="mb-[17px]">
                      <label htmlFor="lastName" className={LABEL}>
                        Nachname
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        autoComplete="family-name"
                        placeholder="Ihr Nachname"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        className={CONTROL}
                      />
                    </div>
                  </div>

                  <div className="mb-[17px]">
                    <label htmlFor="email" className={LABEL}>
                      Geschäftliche E-Mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="sie@firma.de"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className={CONTROL}
                    />
                  </div>

                  <div className="mb-[17px]">
                    <label htmlFor="role" className={LABEL}>
                      Ich melde mich an als…
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      required
                      className={CONTROL}
                    >
                      <option value="" disabled>
                        Rolle auswählen
                      </option>
                      {ROLES.map((r) => (
                        <option key={r.value} value={r.value}>
                          {r.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-[17px]">
                    <label htmlFor="interest" className={LABEL}>
                      Hauptinteressengebiet
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      required
                      className={CONTROL}
                    >
                      <option value="" disabled>
                        Bereich auswählen
                      </option>
                      {INTERESTS.map((i) => (
                        <option key={i.value} value={i.value}>
                          {i.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="mt-[5px] flex min-h-[49px] w-full cursor-pointer items-center justify-between border-0 bg-[#1b2a4a] px-[17px] text-xs font-[650] text-white transition hover:bg-[#24385d] disabled:cursor-not-allowed"
                  >
                    <span>
                      {loading
                        ? "Wird gesendet…"
                        : "Platz auf der Liste anfragen"}
                    </span>
                    <span>{ARROW}</span>
                  </button>
                </fieldset>

                <p className="mt-[14px] mb-0 text-[10px] leading-[1.7] text-[#8a90a0] md:text-[9px]">
                  Mit dem Absenden erklären Sie sich damit einverstanden, dass
                  Ihre Angaben zur Bearbeitung Ihrer Zugangsanfrage verwendet
                  werden. Fügen Sie vor dem Launch Ihre endgültige
                  Datenschutzerklärung und Einwilligungsformulierung hinzu.
                </p>
              </form>
            )}
          </div>
        </section>

        {/* ========================= BOTTOM CTA ========================== */}
        <section className="bg-[#1b2a4a] py-12 text-white">
          <div
            className={`${SHELL} flex flex-col items-start justify-between gap-6 md:flex-row md:items-center`}
          >
            <div>
              <h2
                className={`${SERIF} mb-1.5 text-[24px] font-normal md:text-[28px]`}
              >
                Die richtige Vermittlung verändert alles.
              </h2>
              <p className="m-0 text-xs text-white/60">
                Tragen Sie sich in die Warteliste von Off-market Deals ein.
              </p>
            </div>
            <a
              href="#access"
              onClick={(e) => scrollToId(e, "access")}
              className={`${BTN} w-full whitespace-nowrap bg-[#f7f6f2] text-[#1b2a4a] hover:bg-[#dcd6f2] md:w-auto`}
            >
              Frühen Zugang anfragen <span>{ARROW}</span>
            </a>
          </div>
        </section>
      </main>

      {/* =========================== FOOTER ============================ */}
      <footer className="bg-[#121e36] py-[25px] text-[10px] text-white/55">
        <div className={SHELL}>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-5">
            <div className="text-[10px] font-bold tracking-[.16em] text-white">
              OFF-MARKET DEALS
            </div>
            <div>Diskrete Verbindungen. Durchdachte Optionen.</div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href="#access" onClick={(e) => scrollToId(e, "access")}>
                Kontakt
              </a>
              <a href="#access" onClick={(e) => scrollToId(e, "access")}>
                Datenschutz
              </a>
              <a href="#top" onClick={(e) => scrollToId(e, "top")}>
                Nach oben ↑
              </a>
            </div>
          </div>
          <p className="mt-[10px] max-w-[780px] text-[10px] leading-[1.6] text-white/35 md:text-[9px]">
            Konzept-Landingpage zur Design-Prüfung. Die Plattform wird nicht als
            regulierte Finanzdienstleistung, Anlageberatung,
            Maklerdienstleistung oder Marktplatz dargestellt. Es wird kein
            Anlageangebot, keine Empfehlung, Verifizierung oder Garantie
            abgegeben. Endgültige rechtliche Formulierungen, Datenschutzhinweise
            und eine etwaige regulatorische Prüfung sollten vor dem Launch
            abgeschlossen werden.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WaitlistDE;
