export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white/30 text-sm font-mono">
          © 2026 Growth AI. Construit pentru performanță.
        </div>
        <div className="flex gap-8 text-white/30 text-xs uppercase tracking-widest font-bold">
          <a href="#" className="hover:text-pink-500 transition-colors">Twitter</a>
          <a href="#" className="hover:text-purple-500 transition-colors">GitHub</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
}
