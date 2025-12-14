export default function MegaSidebar({ active, setActive }) {
  const items = [
    { id: "enterprise", label: "Enterprise Software" },
    { id: "development", label: "Development Tools" },
    { id: "creative", label: "Creative Suite" },
    { id: "resources", label: "Resources" },
  ];

  return (
    <aside className="w-64 bg-[#f6fbf9] p-6">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`w-full text-left px-4 py-3 rounded-md mb-2 font-medium transition
            ${
              active === item.id
                ? "bg-green-100 text-green-700 border-l-4 border-green-500"
                : "text-gray-600 hover:bg-green-50"
            }`}
        >
          {item.label}
        </button>
      ))}
    </aside>
  );
}
