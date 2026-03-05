import { motion } from "framer-motion";

function MissionVisionCards({ vision, mission }) {
  return (
    <section className="mt-10 grid gap-5 md:grid-cols-2">
      <motion.article
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="glass-panel p-7"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Vision</p>
        <p className="mt-4 text-sm leading-7 text-mist sm:text-base">{vision}</p>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="glass-panel p-7"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Mission</p>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-mist sm:text-base">
          {mission.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 inline-block h-2 w-2 rounded-full bg-gold" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.article>
    </section>
  );
}

export default MissionVisionCards;
