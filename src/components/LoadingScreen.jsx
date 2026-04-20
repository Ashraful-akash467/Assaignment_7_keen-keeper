export default function LoadingScreen() {
  return (
    <div className="flex min-h-[260px] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-[#295d4f]" />
        <p className="text-sm text-slate-500">Loading your friendships...</p>
      </div>
    </div>
  );
}
