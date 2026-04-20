import { MessageSquare, Phone, Video } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useTimeline } from '../context/TimelineContext';

const iconMap = {
  call: Phone,
  text: MessageSquare,
  video: Video,
};

const iconColor = {
  call: 'text-pink-500 bg-pink-50',
  text: 'text-violet-500 bg-violet-50',
  video: 'text-slate-600 bg-slate-100',
};

export default function TimelinePage() {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState('all');

  const filteredTimeline = useMemo(() => {
    return timeline.filter((entry) => filter === 'all' || entry.type === filter);
  }, [filter, timeline]);

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-4xl font-bold text-slate-900">Timeline</h1>
      <div className="mt-6 w-full max-w-xs">
        <label className="mb-2 block text-sm font-medium text-slate-500">Filter timeline</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm outline-none"
        >
          <option value="all">All</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>

      <div className="mt-6 space-y-3">
        {filteredTimeline.map((entry) => {
          const Icon = iconMap[entry.type];
          return (
            <div key={entry.id} className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white px-4 py-4 shadow-sm">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${iconColor[entry.type]}`}>
                <Icon size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold text-slate-800">{entry.title}</h3>
                <p className="text-sm text-slate-400">{new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
