import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function FinalCTA({ onRegister }) {
  return (
    <section
      id="register"
      className="relative px-6 py-28"
    >
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-indigo-500/10 via-slate-900 to-cyan-500/10 p-8 sm:p-12 lg:p-16">

        {/* Decorative glows */}
        <div className="glow-orb -left-20 -top-20 h-56 w-56 bg-indigo-500/20" />
        <div className="glow-orb -bottom-20 -right-20 h-56 w-56 bg-cyan-500/15" />

        <div className="relative text-center">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 flex justify-center">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300">
                <Sparkles
                  size={14}
                  className="text-cyan-300"
                />
                Your next project could start here
              </div>
            </div>

            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to build
              <br />
              <span className="text-gradient">
                instead of just watch?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400">
              Reserve your free spot and spend the next 60 minutes
              turning an idea into something you can actually show.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button onClick={onRegister}
                type="button"
                className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-2xl transition hover:-translate-y-1 hover:bg-slate-100"
              >
                Reserve my free spot

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2
                  size={14}
                  className="text-emerald-400"
                />
                Free registration
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2
                  size={14}
                  className="text-emerald-400"
                />
                60-minute format
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2
                  size={14}
                  className="text-emerald-400"
                />
                Build something practical
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;