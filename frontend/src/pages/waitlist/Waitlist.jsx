import { useState } from "react";
import toast from "react-hot-toast";

// Toast look that matches the page (navy + gold). <Toaster /> already lives in App.jsx.
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

// Same variable the contact form uses. It already ends in "/api" (the contact
// form calls `${API_URL}/contact/send`), so don't add another "/api" below.
const API_URL = import.meta.env.VITE_API_URL ?? "/api";

// U+FE0E forces the plain text glyph. Without it Windows renders ↗ as a
// blue emoji box.
const ARROW = "↗︎";

const NAV_LINKS = [
  { label: "How it works", id: "approach" },
  { label: "The network", id: "network" },
  { label: "For partners", id: "access" },
];

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const ROLES = [
  "Investor / Family Office",
  "Property Owner / Seller",
  "Developer / Operator",
  "Financing Partner",
  "Broker / Deal Originator",
  "Professional Adviser",
  "Other Stakeholder",
];

const INTERESTS = [
  "Real Estate",
  "Hospitality",
  "Infrastructure & Projects",
  "Operating Businesses",
  "Private Capital / Financing",
  "Cross-border Opportunities",
  "Multiple sectors",
];

const STAKEHOLDERS = [
  { icon: "◈", label: "Investors & Family Offices" },
  { icon: "⌂", label: "Property Owners" },
  { icon: "▦", label: "Developers" },
  { icon: ARROW, label: "Capital & Deal Partners" },
];

const FEATURES = [
  {
    number: "01 / ACCESS",
    title: "Curated opportunities",
    text: "Discover selectively shared, off-market opportunities across real estate, operating businesses and strategic projects.",
  },
  {
    number: "02 / CONNECTION",
    title: "Structured introductions",
    text: "Bring the right investors, owners, operators and capital partners into a conversation with a clear purpose.",
  },
  {
    number: "03 / DISCRETION",
    title: "Confidential by design",
    text: "Keep early conversations measured. Share sensitive details only when appropriate permissions and agreements are in place.",
  },
];

const ACCESS_POINTS = [
  "For qualified investors, owners, developers and professional partners.",
  "Designed for direct, relevant introductions—not mass-market listings.",
  "Joining the waitlist is an expression of interest, not a guarantee of access.",
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
/*  Shared class strings (Tailwind v4, arbitrary values keep the       */
/*  original palette: navy #1b2a4a, gold #c7b58a, ivory #f7f6f2 ...)    */
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
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const Waitlist = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // In-page smooth scroll that leaves the router / address bar alone.
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
        // The server adds a technical `debug` field outside production.
        if (data.debug) console.error("[waitlist] server says:", data.debug);
        throw new Error(
          data.message || "Something went wrong. Please try again.",
        );
      }

      setSubmitted(true);
      toast.success(
        "Request received. We’ll be in touch if there’s a relevant introduction.",
        { ...TOAST_OPTIONS, duration: 6000 },
      );
    } catch (err) {
      // fetch() rejects with a TypeError when the server can't be reached.
      toast.error(
        err instanceof TypeError
          ? "We couldn't reach the server. Please check your connection and try again."
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
          {/* background image */}
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
            srcSet="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80 1200w, https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85 2000w"
            sizes="100vw"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-[center_44%] opacity-[.96]"
          />
          {/* gradient overlays */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,26,49,.96),rgba(20,33,59,.75))] md:bg-[linear-gradient(90deg,rgba(15,26,49,.98)_0%,rgba(20,33,59,.91)_45%,rgba(20,33,59,.22)_100%)]" />
          <div className="absolute inset-0 hidden bg-[linear-gradient(0deg,rgba(13,24,45,.55),transparent_50%)] md:block" />
          {/* decorative gold ring */}
          <div className="pointer-events-none absolute -right-[140px] -bottom-[220px] size-[440px] rounded-full border border-[rgba(199,181,138,.22)] shadow-[0_0_0_45px_rgba(199,181,138,.035),0_0_0_95px_rgba(199,181,138,.025)]" />

          {/* Page's own top bar (the main site navbar is hidden on /waitlist) */}
          <header className="absolute inset-x-0 top-0 z-20 mx-auto flex h-[72px] max-w-[1240px] items-center justify-between border-b border-white/[.13] px-[18px] text-white sm:px-[23px] md:h-[82px] md:px-[34px]">
            <a
              href="#top"
              onClick={(e) => scrollToId(e, "top")}
              aria-label="Private Markets — back to top"
              className="flex items-center gap-2.5 text-[10px] font-bold tracking-[.12em] sm:text-[11px] md:gap-3 md:text-[13px] md:tracking-[.18em]"
            >
              <span className="grid size-[29px] shrink-0 rotate-45 place-items-center border border-[#c7b58a] font-[Georgia,serif] text-[15px] text-[#c7b58a]">
                <span className="-rotate-45">✦</span>
              </span>
              <span>PRIVATE MARKETS</span>
            </a>

            <nav
              aria-label="Main navigation"
              className="flex items-center gap-[34px] text-xs text-white/80"
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
              <a
                href="#access"
                onClick={(e) => scrollToId(e, "access")}
                className="border border-white/50 px-[11px] py-[9px] text-[10px] text-white transition duration-200 hover:bg-white hover:text-[#1b2a4a] md:px-[17px] md:py-[11px] md:text-xs"
              >
                {`Request access  ${ARROW}`}
              </a>
            </nav>
          </header>

          <div className={`${SHELL} relative z-10`}>
            <div className="max-w-[740px]">
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.23em] text-[#c7b58a] before:h-px before:w-[30px] before:shrink-0 before:bg-[#c7b58a] before:content-['']">
                A private network for exceptional opportunities
              </div>

              <h1
                className={`${SERIF} mt-[26px] mb-6 max-w-[760px] text-[clamp(40px,6vw,76px)] leading-[1.06] font-normal tracking-[-.035em]`}
              >
                Where private capital meets{" "}
                <em className="font-normal text-[#c6bee9]">
                  off-market opportunity.
                </em>
              </h1>

              <p className="mb-[31px] max-w-[565px] text-sm leading-[1.8] text-white/75 md:text-base">
                A discreet network connecting qualified investors, property
                owners, developers and financing partners around carefully
                introduced opportunities.
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href="#access"
                  onClick={(e) => scrollToId(e, "access")}
                  className={`${BTN} w-full bg-[#f7f6f2] text-[#1b2a4a] hover:bg-[#dcd6f2] sm:w-auto`}
                >
                  Join the waitlist <span>{ARROW}</span>
                </a>
                <a
                  href="#approach"
                  onClick={(e) => scrollToId(e, "approach")}
                  className={`${BTN} pl-0 text-white`}
                >
                  Explore the network{" "}
                  <span className="text-lg text-[#c7b58a]">→</span>
                </a>
              </div>

              <div className="mt-[39px] flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase leading-relaxed tracking-[.1em] text-white/55">
                {[
                  "Invitation-led",
                  "Confidential by design",
                  "International reach",
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
              Built for the people behind the deals
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
                  A more considered way to connect
                </div>
                <h2
                  className={`${SERIF} mt-3 max-w-[600px] text-[36px] leading-[1.13] font-normal tracking-[-.025em] text-[#1b2a4a] md:text-[clamp(34px,4vw,49px)]`}
                >
                  Less noise.
                  <br />
                  Better introductions.
                </h2>
              </div>
              <p className="mt-5 mb-1 max-w-[370px] text-[13px] leading-[1.8] text-[#687185] md:mt-0">
                Important opportunities deserve more than a crowded listing. The
                network is designed to help relevant parties connect with
                clarity, discretion and purpose.
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
            {/* copy */}
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[.19em] text-[#8279b5]">
                Founding network · Early access
              </div>
              <h2
                className={`${SERIF} mt-[13px] mb-[19px] text-[36px] leading-[1.12] font-normal tracking-[-.03em] text-[#1b2a4a] md:text-[clamp(36px,4vw,52px)]`}
              >
                Be in the room
                <br />
                before the deal
                <br />
                goes public.
              </h2>
              <p className="max-w-[470px] text-[13px] leading-[1.9] text-[#687185]">
                Register your interest to be considered for early access. Tell
                us how you participate in the deal ecosystem so we can
                understand where relevant introductions may exist.
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

            {/* form */}
            <form
              id="waitlist-form"
              onSubmit={handleSubmit}
              className="border border-[#e3e1eb] bg-white px-[19px] py-6 shadow-[0_18px_50px_rgba(27,42,74,.07)] sm:p-[34px]"
            >
              <div className="mb-[26px] flex items-center justify-between gap-3">
                <h3
                  className={`${SERIF} m-0 text-[25px] font-normal text-[#1b2a4a]`}
                >
                  Request early access
                </h3>
                <span className="shrink-0 border border-[#e4e0f1] px-[9px] py-[7px] text-[9px] uppercase tracking-[.13em] text-[#8c84b8]">
                  Founding list
                </span>
              </div>

              {/* Locks every field + the button while sending / after success */}
              <fieldset
                disabled={loading || submitted}
                className="m-0 min-w-0 border-0 p-0 disabled:opacity-80"
              >
                {/* Honeypot: hidden from people, tempting for bots */}
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
                      First name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      autoComplete="given-name"
                      placeholder="Your first name"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      className={CONTROL}
                    />
                  </div>
                  <div className="mb-[17px]">
                    <label htmlFor="lastName" className={LABEL}>
                      Last name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      autoComplete="family-name"
                      placeholder="Your last name"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      className={CONTROL}
                    />
                  </div>
                </div>

                <div className="mb-[17px]">
                  <label htmlFor="email" className={LABEL}>
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={CONTROL}
                  />
                </div>

                <div className="mb-[17px]">
                  <label htmlFor="role" className={LABEL}>
                    I’m joining as…
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
                      Select your role
                    </option>
                    {ROLES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-[17px]">
                  <label htmlFor="interest" className={LABEL}>
                    Primary area of interest
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
                      Select an area
                    </option>
                    {INTERESTS.map((i) => (
                      <option key={i} value={i}>
                        {i}
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
                      ? "Sending…"
                      : submitted
                        ? "Request received"
                        : "Request a place on the list"}
                  </span>
                  <span>{submitted ? "✓" : ARROW}</span>
                </button>
              </fieldset>

              <p className="mt-[14px] mb-0 text-[10px] leading-[1.7] text-[#8a90a0] md:text-[9px]">
                By submitting, you agree that your details may be used to
                respond to your access request. Add your final privacy notice
                and consent wording before launch.
              </p>
            </form>
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
                The right introduction changes everything.
              </h2>
              <p className="m-0 text-xs text-white/60">
                Join the founding waitlist for Private Markets.
              </p>
            </div>
            <a
              href="#access"
              onClick={(e) => scrollToId(e, "access")}
              className={`${BTN} w-full whitespace-nowrap bg-[#f7f6f2] text-[#1b2a4a] hover:bg-[#dcd6f2] md:w-auto`}
            >
              Request early access <span>{ARROW}</span>
            </a>
          </div>
        </section>
      </main>

      {/* =========================== FOOTER ============================ */}
      <footer className="bg-[#121e36] py-[25px] text-[10px] text-white/55">
        <div className={SHELL}>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-5">
            <div className="text-[10px] font-bold tracking-[.16em] text-white">
              PRIVATE MARKETS
            </div>
            <div>Discreet connections. Considered opportunities.</div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href="#access" onClick={(e) => scrollToId(e, "access")}>
                Contact
              </a>
              <a href="#access" onClick={(e) => scrollToId(e, "access")}>
                Privacy
              </a>
              <a href="#top" onClick={(e) => scrollToId(e, "top")}>
                Back to top ↑
              </a>
            </div>
          </div>
          <p className="mt-[10px] max-w-[780px] text-[10px] leading-[1.6] text-white/35 md:text-[9px]">
            Concept landing page for design review. The platform is not
            represented as a regulated financial service, investment adviser,
            broker or marketplace. No investment offer, recommendation,
            verification or guarantee is made. Final legal wording, data
            protection notices, and any applicable regulatory review should be
            completed before launch.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Waitlist;
