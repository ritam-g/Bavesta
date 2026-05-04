import { motion } from "framer-motion";

function BulletPanel({ title, items }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className="glass-panel p-7"
    >
      <h3 className="font-display text-2xl font-bold text-gray-900">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-gray-600 sm:text-base">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default BulletPanel;
