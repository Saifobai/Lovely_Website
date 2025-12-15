import Section from "../components/layout/Section";

export function AboutUs() {
  return (
    <Section id="about" variant="darker">
      {/* Badge */}
      <span
        className="inline-block bg-blue-500/10 text-blue-400
        px-4 py-1 rounded-full text-sm mb-4"
      >
        About Us
      </span>

      {/* Heading */}
      <h2 className="text-4xl font-bold max-w-2xl mb-6">
        We Build Digital Products That Drive Growth
      </h2>

      {/* Description */}
      <p className="text-gray-400 max-w-3xl leading-relaxed">
        We are a{" "}
        <span className="text-white font-medium">
          boutique consulting collective
        </span>{" "}
        uniting experts in technology, immigration, business, real estate, and
        event planning. Our strength lies in our partnerships with{" "}
        <span className="text-white font-medium">
          trusted professionals worldwide
        </span>
        —ensuring you receive accurate guidance and meaningful results.
      </p>
    </Section>
  );
}
