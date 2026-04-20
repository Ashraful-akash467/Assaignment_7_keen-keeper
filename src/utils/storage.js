const TIMELINE_KEY = 'keenkeeper_timeline';

export const getStoredTimeline = () => {
  try {
    const saved = localStorage.getItem(TIMELINE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const storeTimeline = (timeline) => {
  localStorage.setItem(TIMELINE_KEY, JSON.stringify(timeline));
};
