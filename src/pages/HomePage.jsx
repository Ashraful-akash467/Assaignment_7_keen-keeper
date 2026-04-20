import { UserPlus } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import FriendCard from '../components/FriendCard';
import LoadingScreen from '../components/LoadingScreen';
import SummaryCard from '../components/SummaryCard';
import { useTimeline } from '../context/TimelineContext';

export default function HomePage({ friends }) {
  const { timeline } = useTimeline();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const summary = useMemo(() => {
    const onTrack = friends.filter((friend) => friend.status === 'on-track').length;
    const needAttention = friends.filter((friend) => friend.status !== 'on-track').length;

    return [
      { value: friends.length, label: 'Total Friends' },
      { value: onTrack, label: 'On Track' },
      { value: needAttention, label: 'Need Attention' },
      { value: timeline.length, label: 'Interactions This Month' },
    ];
  }, [friends, timeline.length]);

  return (
    <div>
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Friends to keep close in your life
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#295d4f] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#224a3e]">
          <UserPlus size={16} />
          Add a Friend
        </button>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summary.map((item) => (
          <SummaryCard key={item.label} value={item.value} label={item.label} />
        ))}
      </section>

      <section className="mt-12 border-t border-slate-200 pt-8">
        <h2 className="text-2xl font-semibold text-slate-900">Your Friends</h2>

        {loading ? (
          <LoadingScreen />
        ) : (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}