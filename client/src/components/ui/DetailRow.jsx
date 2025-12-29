export default function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between border-b border-white/5 pb-2">
      <span className="text-[10px] text-slate-500 uppercase">{label}</span>
      <span className="text-sm text-white">{value}</span>
    </div>
  );
}
