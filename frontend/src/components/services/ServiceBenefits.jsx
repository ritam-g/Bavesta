import { motion } from "framer-motion";
import { benefitIconPaths } from "../../data/serviceDetailContent";

function ServiceBenefits({ benefitCards }) {
  return (
    <section className="section-shell py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Benefits</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-pearl sm:text-4xl">Value You Can Expect</h2>
      </motion.div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {benefitCards.map((item, index) => (
          <motion.article
            key={`${item.title}-${index}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="glass-panel h-full border-white/10 p-6 transition hover:border-gold/35 hover:shadow-[0_18px_45px_-22px_rgba(201,165,106,0.55)]"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/45 bg-gold/10 text-gold">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d={benefitIconPaths[item.icon] || benefitIconPaths.spark} />
              </svg>
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-pearl">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-mist">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default ServiceBenefits;
