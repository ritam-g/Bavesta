import { motion } from "framer-motion";

function LeadershipGrid({ leaders }) {
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {leaders.map((leader, index) => (
        <motion.article
          key={leader.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
          className="glass-panel h-full border-gray-200 bg-white p-8 hover:border-gray-300 transition hover:shadow-sm"
        >
          <img
            src={leader.image}
            alt={leader.name}
            className="h-16 w-16 rounded-full border border-gray-200 object-cover"
            loading="lazy"
          />
          <h3 className="mt-5 font-display text-2xl font-bold text-gray-900">{leader.name}</h3>
          <p className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500">{leader.role}</p>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">{leader.bio}</p>
        </motion.article>
      ))}
    </div>
  );
}

export default LeadershipGrid;
