import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getStoredTimeline, storeTimeline } from '../utils/storage';

const TimelineContext = createContext(null);

const seedTimeline = [
  { id: 'seed-1', friendId: 2, type: 'text', title: 'Text with Emma Wilson', date: '2026-03-20' },
  { id: 'seed-2', friendId: 4, type: 'call', title: 'Call with James Wright', date: '2026-03-18' },
  { id: 'seed-3', friendId: 5, type: 'video', title: 'Video with Olivia Martinez', date: '2026-03-17' },
  { id: 'seed-4', friendId: 2, type: 'text', title: 'Text with Emma Wilson', date: '2026-03-15' },
  { id: 'seed-5', friendId: 6, type: 'call', title: 'Call with Aisha Patel', date: '2026-03-14' },
  { id: 'seed-6', friendId: 5, type: 'video', title: 'Video with Olivia Martinez', date: '2026-03-12' },
  { id: 'seed-7', friendId: 7, type: 'call', title: 'Call with Noa Nakamura', date: '2026-03-11' },
  { id: 'seed-8', friendId: 3, type: 'call', title: 'Call with Lisa Nakamura', date: '2026-03-10' },
  { id: 'seed-9', friendId: 8, type: 'video', title: 'Video with Mason Johnson', date: '2026-03-09' },
  { id: 'seed-10', friendId: 4, type: 'video', title: 'Video with James Wright', date: '2026-03-08' }
];

export function TimelineProvider({ children }) {
  const [timeline, setTimeline] = useState(() => {
    const stored = getStoredTimeline();
    return stored.length ? stored : seedTimeline;
  });

  useEffect(() => {
    storeTimeline(timeline);
  }, [timeline]);

  const addInteraction = (friend, type) => {
    const normalized = type.toLowerCase();
    const label = normalized.charAt(0).toUpperCase() + normalized.slice(1);
    const today = new Date().toISOString().slice(0, 10);

    const entry = {
      id: `${Date.now()}-${friend.id}-${normalized}`,
      friendId: friend.id,
      type: normalized,
      title: `${label} with ${friend.name}`,
      date: today,
    };

    setTimeline((current) => [entry, ...current]);
    return entry;
  };

  const analytics = useMemo(() => {
    const base = { call: 0, text: 0, video: 0 };
    for (const item of timeline) {
      base[item.type] = (base[item.type] ?? 0) + 1;
    }
    return [
      { name: 'Text', value: base.text },
      { name: 'Call', value: base.call },
      { name: 'Video', value: base.video },
    ];
  }, [timeline]);

  return (
    <TimelineContext.Provider value={{ timeline, addInteraction, analytics }}>
      {children}
    </TimelineContext.Provider>
  );
}

export const useTimeline = () => {
  const context = useContext(TimelineContext);
  if (!context) throw new Error('useTimeline must be used within TimelineProvider');
  return context;
};
