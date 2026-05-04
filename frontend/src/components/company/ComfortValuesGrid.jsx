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
          className="glass-panel h-full border-gray-200 p-6 transition hover:border-gray-300 hover:shadow-md bg-white"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 font-display text-xl font-bold text-gray-900 border border-gray-200">
            {value.letter}
          </span>
          <h3 className="mt-4 font-display text-xl font-bold text-gray-900">{value.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">{value.description}</p>
        </motion.article>
      ))}
    </div>
  );
}

export default ComfortValuesGrid;
