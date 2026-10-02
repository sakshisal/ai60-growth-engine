import { Clock3, Gift, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Clock3,
    value: "60 min",
    label: "Hands-on build",
  },
  {
    icon: Gift,
    value: "₹0",
    label: "Completely free",
  },
  {
    icon: Rocket,
    value: "1 project",
    label: "You actually build",
  },
  {
    icon: Users,
    value: "Peer-powered",
    label: "Learn & share",
  },
];

function StatsStrip() {
  return (
    <section className="relative border-y border-white/5 bg-white/[0.015]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="group flex items-center gap-4 border-white/5 p-6 first:border-r md:border-r"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] ring-1 ring-white/5 transition group-hover:bg-cyan-400/10">
                <Icon
                  size={18}
                  className="text-cyan-300"
                />
              </div>

              <div>
                <div className="font-display text-lg font-semibold text-white">
                  {stat.value}
                </div>

                <div className="mt-0.5 text-xs text-slate-500">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default StatsStrip;