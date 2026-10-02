import {
  Bot,
  Code2,
  Lightbulb,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Choose an idea",
    description:
      "Start with a simple problem worth solving and turn your idea into a clear AI project.",
  },
  {
    number: "02",
    icon: Bot,
    title: "Connect AI",
    description:
      "Learn how to use AI capabilities to make your project useful, interactive and intelligent.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build the flow",
    description:
      "Put the pieces together and leave the workshop with something you can actually show.",
  },
];

function BuildSection() {
  return (
    <section
      id="build"
      className="relative py-28"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            <Sparkles size={14} />
            From idea to working project
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Don't just learn AI.
            <br />
            <span className="text-slate-500">
              Build with it.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
            The workshop is designed around a simple outcome:
            you start with an idea and finish with a working AI
            project you can understand and showcase.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="glass group relative overflow-hidden rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-600">
                    /{step.number}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                  />
                </div>

                {/* Icon */}
                <div className="mt-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 ring-1 ring-cyan-300/10">
                  <Icon
                    size={22}
                    className="text-cyan-300"
                  />
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>

                <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BuildSection;