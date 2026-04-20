import { Globe, MessageCircleMore, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#1f5a4b] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">KeenKeeper</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-emerald-50/90">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <p className="mt-6 text-lg font-semibold">Social Links</p>
        <div className="mt-4 flex justify-center gap-3">
          {[Globe, MessageCircleMore, Send].map((Icon, index) => (
            <button
              key={index}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-800 transition hover:scale-105"
              aria-label="social icon"
            >
              <Icon size={16} />
            </button>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-emerald-50/70 md:flex-row">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
