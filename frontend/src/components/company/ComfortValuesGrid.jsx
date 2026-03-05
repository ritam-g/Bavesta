import { motion } from "framer-motion";

function ComfortValuesGrid({ values }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {values.map((value, index) => (
        <motion.article
          key={`${value.letter}-${value.title}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: index * 0.05 }}
          whileHover={{ y: -4 }}
          className="glass-panel h-full border-white/10 p-6 transition hover:border-gold/35"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gold/45 bg-gold/10 font-display text-xl font-bold text-gold">
            {value.letter}
          </span>
          <h3 className="mt-4 font-display text-xl font-bold text-pearl">{value.title}</h3>
          <p className="mt-3 text-sm leading-6 text-mist">{value.description}</p>
        </motion.article>
      ))}
    </div>
  );
}

export default ComfortValuesGrid;
