import MegaCard from "./MegaCard";

export default function MegaContent({ data }) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {data.items.map((item, i) => (
        <MegaCard key={i} {...item} />
      ))}
    </div>
  );
}
