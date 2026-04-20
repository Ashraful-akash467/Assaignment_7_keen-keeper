import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';
import TagBadge from './TagBadge';

export default function FriendCard({ friend }) {
  return (
    <Link
      to={`/friends/${friend.id}`}
      className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="mx-auto h-16 w-16 rounded-full object-cover"
      />
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{friend.name}</h3>
      <p className="mt-1 text-xs text-slate-400">{friend.days_since_contact}d ago</p>

      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {friend.tags.map((tag) => (
          <TagBadge key={tag}>{tag}</TagBadge>
        ))}
      </div>

      <div className="mt-3">
        <StatusBadge status={friend.status} />
      </div>
    </Link>
  );
}