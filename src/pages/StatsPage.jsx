import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { useTimeline } from '../context/TimelineContext';

const COLORS = ['#7c3aed', '#1f5a4b', '#45b36b'];

export default function StatsPage() {
  const { analytics } = useTimeline();

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-4xl font-bold text-slate-900">Friendship Analytics</h1>
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-500">By Interaction Type</p>
        <div className="mx-auto mt-4 h-[340px] max-w-xl">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={analytics} dataKey="value" nameKey="name" innerRadius={70} outerRadius={105} paddingAngle={4}>
                {analytics.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          {analytics.map((item, index) => (
            <div key={item.name} className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
