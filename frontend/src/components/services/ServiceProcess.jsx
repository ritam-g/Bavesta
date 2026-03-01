import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function ServiceProcess({ process }) {
  return (
    <section className="section-shell py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">How We Work</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-pearl sm:text-4xl">Step-by-Step Process</h2>
      </motion.div>

      <div className="mt-10 hidden lg:block">
        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute left-0 top-9 h-[2px] w-full origin-left bg-gradient-to-r from-gold/20 via-gold/80 to-gold/20"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
            className="grid grid-cols-5 gap-5"
          >
            {process.map((step, index) => (
              <motion.article
                key={`${step.title}-${index}`}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="glass-panel relative h-full border-white/10 p-5 transition hover:border-gold/35"
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-gold/12 text-sm font-bold text-gold">
                  {index + 1}
                </span>
                <h3 className="font-display text-xl font-bold text-pearl">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-mist">{step.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-10 lg:hidden">
        <div className="relative pl-10">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute left-4 top-2 h-[calc(100%-0.5rem)] w-[2px] origin-top bg-gradient-to-b from-gold/30 via-gold/80 to-gold/30"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            {process.map((step, index) => (
              <motion.article key={`${step.title}-${index}`} variants={itemVariants} className="glass-panel border-white/10 p-5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 bg-gold/12 text-sm font-bold text-gold">
                  {index + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-pearl">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mist">{step.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServiceProcess;
