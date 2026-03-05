import { motion } from "framer-motion";

function StatsSection({ points, stats }) {
  return (
    <section className="section-shell pb-14 md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="rounded-[34px] border border-[#7149a4] bg-[#643687] px-6 py-10 text-white shadow-[0_28px_70px_-45px_rgba(63,29,104,0.9)] sm:px-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Your comprehensive hospitality partner.
            </h2>
            <div className="mt-8 space-y-6">
              {points.map((point, index) => (
                <motion.article
                  key={point}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.38, delay: index * 0.05 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 h-11 w-11 rounded-full border border-white/45 bg-white/10" />
                  <p className="max-w-2xl text-base leading-7 text-white/95 sm:text-lg sm:leading-8">{point}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="grid gap-5 border-t border-white/30 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {stats.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/20 bg-white/10 px-6 py-5">
                <p className="font-display text-5xl leading-none text-white sm:text-6xl">{metric.value}</p>
                <p className="mt-2 text-base font-medium text-white/95 sm:text-lg">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default StatsSection;
