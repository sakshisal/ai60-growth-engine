import {
  ArrowRight,
  ClipboardCheck,
  Hammer,
  Share2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Reserve your spot",
    description:
      "Tell us a little about yourself and save your free place in the workshop.",
  },
  {
    number: "02",
    icon: Hammer,
    title: "Build for 60 minutes",
    description:
      "Follow a practical, hands-on flow and turn an idea into a working AI project.",
  },
  {
    number: "03",
    icon: Share2,
    title: "Show & share",
    description:
      "Take your project further, showcase what you built and invite friends to join.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-28"
    >
      {/* Background glow */}
      <div className="glow-orb left-[35%] top-[25%] h-64 w-64 bg-indigo-500/10" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            <Sparkles size={14} />
            Simple by design
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            From zero to
            <br />
            <span className="text-gradient">something you can show.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400">
            No long course. No endless tutorials. Just a focused
            session designed to get you building quickly.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-16">

          {/* Connecting line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-14 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />

          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="relative"
                >
                  <div className="glass group rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20">

                    {/* Number + icon */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="font-mono text-xs text-slate-600">
                        STEP {step.number}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 ring-1 ring-white/10 transition group-hover:ring-cyan-300/20">
                        <Icon
                          size={19}
                          className="text-cyan-300"
                        />
                      </div>
                    </div>

                    <h3 className="mt-10 font-display text-xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-xs font-medium text-slate-600 transition group-hover:text-cyan-300">
                      Step {index + 1}
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;