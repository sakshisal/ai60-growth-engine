import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden pt-32"
    >
      {/* Background */}
      <div className="absolute inset-0 ai-grid opacity-60" />

      <div
        className="glow-orb left-[10%] top-[15%] h-72 w-72 bg-indigo-600/20"
      />

      <div
        className="glow-orb right-[5%] top-[30%] h-80 w-80 bg-cyan-500/15"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-24">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-slate-300">
            <Sparkles size={14} className="text-cyan-300" />
            FREE LIVE AI WORKSHOP
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
            60 MINUTES
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">
            Stop watching. Start building.
          </p>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            Build your first
            <br />
            <span className="text-gradient">
              AI project in 60 minutes.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            One hour. One working AI project. One more thing
            you can showcase in your portfolio or talk about in
            your next interview.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#register"
              className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-2xl shadow-indigo-500/10 transition hover:-translate-y-1 hover:bg-slate-100"
            >
              Reserve my free spot

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#build"
              className="rounded-xl border border-white/10 px-6 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              See what you'll build
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-400" />
              Beginner friendly
            </span>

            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-400" />
              100% free
            </span>

            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-400" />
              Build something real
            </span>
          </div>
        </motion.div>

        {/* Product visual */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="hero-glow glass overflow-hidden rounded-3xl">

            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>

              <div className="text-[11px] text-slate-600">
                ai60.project / build
              </div>

              <div className="w-12" />
            </div>

            {/* Mock project interface */}
            <div className="grid min-h-[280px] grid-cols-1 md:grid-cols-[0.8fr_1.2fr]">

              <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r">
                <div className="text-xs uppercase tracking-widest text-slate-600">
                  Your build
                </div>

                <div className="mt-5">
                  <div className="h-3 w-32 rounded bg-white/10" />
                  <div className="mt-3 h-2 w-48 rounded bg-white/5" />
                  <div className="mt-2 h-2 w-40 rounded bg-white/5" />
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    "Choose your idea",
                    "Connect AI",
                    "Build the flow",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.025] p-3"
                    >
                      <div
                        className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs ${
                          index === 0
                            ? "bg-cyan-400/10 text-cyan-300"
                            : "bg-white/5 text-slate-500"
                        }`}
                      >
                        {index + 1}
                      </div>

                      <span className="text-xs text-slate-400">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-slate-600">
                    AI Workspace
                  </span>

                  <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium text-emerald-300">
                    READY
                  </span>
                </div>

                <div className="mt-6 rounded-2xl border border-white/5 bg-black/20 p-5">
                  <div className="mb-4 flex items-center gap-2">
                    <Sparkles size={15} className="text-cyan-300" />
                    <span className="text-xs font-medium text-slate-300">
                      Your first AI project
                    </span>
                  </div>

                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="text-slate-600">
                      // build something useful
                    </div>
                    <div>
                      <span className="text-purple-300">const</span>{" "}
                      <span className="text-cyan-300">project</span>{" "}
                      <span className="text-slate-500">=</span>{" "}
                      <span className="text-emerald-300">
                        "your_idea"
                      </span>
                    </div>
                    <div>
                      <span className="text-purple-300">await</span>{" "}
                      <span className="text-cyan-300">buildWithAI</span>
                      <span className="text-slate-500">();</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px]">
                  <span className="text-slate-600">
                    Workshop progress
                  </span>

                  <span className="text-slate-400">
                    60 min
                  </span>
                </div>

                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "68%" }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300"
                  />
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;