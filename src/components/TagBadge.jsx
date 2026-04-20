export default function TagBadge({ children }) {
  return (
    <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
      {children}
    </span>
  );
}
