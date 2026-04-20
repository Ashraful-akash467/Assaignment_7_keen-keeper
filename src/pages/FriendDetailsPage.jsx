import {
  Archive,
  CalendarClock,
  Mail,
  MessageSquare,
  Pencil,
  Phone,
  Trash2,
  Video,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';
import TagBadge from '../components/TagBadge';
import { useTimeline } from '../context/TimelineContext';

function StatTile({ value, label }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <div className="text-4xl font-bold text-[#234f44]">{value}</div>
      <div className="mt-2 text-sm text-slate-500">{label}</div>
    </div>
  );
}

function ActionButton({ icon: Icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-6 text-slate-700 transition hover:border-[#295d4f] hover:bg-white"
    >
      <Icon size={26} />
      <span className="mt-3 text-lg font-medium">{label}</span>
    </button>
  );
}

export default function FriendDetailsPage({ friends }) {
  const { id } = useParams();
  const friend = friends.find((item) => String(item.id) === id);
  const { addInteraction } = useTimeline();

  if (!friend) {
    return <div className="rounded-xl bg-white p-10 shadow-sm">Friend not found.</div>;
  }

  const handleInteraction = (type) => {
    const entry = addInteraction(friend, type);
    toast.success(`${entry.title} added to timeline`);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
      <aside className="space-y-4">
        <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <img
            src={friend.picture}
            alt={friend.name}
            className="mx-auto h-20 w-20 rounded-full object-cover"
          />
          <h1 className="mt-4 text-3xl font-semibold">{friend.name}</h1>

          <div className="mt-3">
            <StatusBadge status={friend.status} />
          </div>

          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {friend.tags.map((tag) => (
              <TagBadge key={tag}>{tag}</TagBadge>
            ))}
          </div>

          <p className="mt-4 text-slate-500">“{friend.bio}”</p>
          <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-500">
            <Mail size={14} />
            Preferred: {friend.preferred_contact}
          </p>
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 font-medium shadow-sm">
          <CalendarClock size={16} />
          Snooze 2 Weeks
        </button>

        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 font-medium shadow-sm">
          <Archive size={16} />
          Archive
        </button>

        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-100 bg-white px-4 py-3 font-medium text-red-500 shadow-sm">
          <Trash2 size={16} />
          Delete
        </button>
      </aside>

      <section className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <StatTile value={friend.days_since_contact} label="Days Since Contact" />
          <StatTile value={friend.goal} label="Goal (Days)" />
          <StatTile
            value={new Date(friend.next_due_date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
            label="Next Due"
          />
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-[#234f44]">Relationship Goal</h2>
              <p className="mt-3 text-slate-500">
                Connect every <span className="font-bold text-slate-900">{friend.goal} days</span>
              </p>
            </div>

            <button className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-4 py-2 text-sm font-medium">
              <Pencil size={14} />
              Edit
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#234f44]">Quick Check-In</h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <ActionButton icon={Phone} label="Call" onClick={() => handleInteraction('call')} />
            <ActionButton icon={MessageSquare} label="Text" onClick={() => handleInteraction('text')} />
            <ActionButton icon={Video} label="Video" onClick={() => handleInteraction('video')} />
          </div>
        </div>
      </section>
    </div>
  );
}