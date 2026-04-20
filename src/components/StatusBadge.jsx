const styles = {
  'on-track': 'bg-emerald-100 text-emerald-800',
  'almost due': 'bg-amber-100 text-amber-700',
  overdue: 'bg-red-100 text-red-600',
};

export default function StatusBadge({ status }) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold capitalize ${styles[status]}`}>
      {status}
    </span>
  );
}
