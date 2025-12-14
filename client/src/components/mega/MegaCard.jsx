export default function MegaCard({ icon: Icon, title, description, linkText }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
      <Icon className="text-green-600 mb-4" size={22} />
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-500 mb-4">{description}</p>
      <span className="text-green-600 font-medium">{linkText} →</span>
    </div>
  );
}
