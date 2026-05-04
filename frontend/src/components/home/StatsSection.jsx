import { motion } from "framer-motion";

function StatsSection({ points, stats }) {
  return (
    <section className="section-shell pb-16 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="rounded-3xl bg-gray-900 px-6 py-12 text-white shadow-lg sm:px-12 sm:py-16"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              Your comprehensive hospitality partner.
            </h2>
            <div className="mt-8 space-y-6">
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex-shrink-0 h-6 w-6 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                     <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-gray-300 leading-relaxed sm:text-lg">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 border-t border-gray-800 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            {stats.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-gray-800 bg-gray-800/50 px-8 py-6 text-center">
                <p className="font-display text-4xl font-bold text-white sm:text-5xl">{metric.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-400 uppercase tracking-wide">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default StatsSection;
