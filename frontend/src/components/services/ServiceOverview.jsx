import { motion } from "framer-motion";

function ServiceOverview({ overviewParagraphs, targetAudience, overviewImage }) {
  return (
    <section className="section-shell py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass-panel p-7 sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Service Overview</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-pearl sm:text-4xl">What This Service Is</h2>

          <div className="mt-5 space-y-4 text-sm leading-7 text-mist sm:text-base">
            {overviewParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className="mt-8 font-display text-2xl font-bold text-pearl">Who It Is For</h3>
          <ul className="mt-4 space-y-2 text-sm text-mist sm:text-base">
            {targetAudience.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.04 }}
          className="overflow-hidden rounded-2xl border border-white/10"
        >
          <img src={overviewImage} alt="Service overview" className="h-80 w-full object-cover sm:h-[26rem]" />
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceOverview;
