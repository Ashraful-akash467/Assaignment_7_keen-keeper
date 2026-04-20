import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#295d4f]">404</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-4 max-w-md text-slate-500">The page you are looking for does not exist or may have been moved.</p>
      <Link to="/" className="mt-6 rounded-md bg-[#295d4f] px-5 py-3 text-sm font-semibold text-white">Back to Home</Link>
    </div>
  );
}
