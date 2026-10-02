import { ArrowUpRight, Sparkles } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4 sm:px-6">
        <nav className="glass rounded-2xl px-4 py-3">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a
              href="#top"
              className="flex items-center gap-2.5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                <Sparkles size={18} className="text-cyan-300" />
              </div>

              <div>
                <div className="font-display text-lg font-bold tracking-tight">
                  AI60
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  Build • Ship • Showcase
                </div>
              </div>
            </a>

            {/* Navigation */}
            <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
              <a
                href="#build"
                className="transition hover:text-white"
              >
                What you'll build
              </a>

              <a
                href="#how-it-works"
                className="transition hover:text-white"
              >
                How it works
              </a>

              <a
                href="#growth-dashboard"
                className="transition hover:text-white"
              >
                Registered Students
              </a>
            </div>

            {/* CTA */}
            <a
              href="#register"
              className="group flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Reserve my spot
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;