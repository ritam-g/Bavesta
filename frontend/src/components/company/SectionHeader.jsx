import { motion } from "framer-motion";

function SectionHeader({ kicker, title, description, centered = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}
    >
      {kicker && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{kicker}</p>}
      <h2 className="mt-3 font-display text-3xl font-extrabold text-pearl sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-sm leading-7 text-mist sm:text-base">{description}</p>}
    </motion.div>
  );
}

export default SectionHeader;
