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
        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Vision</p>
        <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">{vision}</p>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="glass-panel p-7"
      >
        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Mission</p>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600 sm:text-base">
          {mission.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.article>
    </section>
  );
}

export default MissionVisionCards;
