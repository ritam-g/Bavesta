import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../ui/Button";

function ServiceCTA({ cta }) {
  return (
    <section className="section-shell pb-20 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-[#102346] via-[#122b54] to-[#0f2344] p-8 shadow-luxe sm:p-10"
      >
        <motion.div
          className="absolute -right-12 top-0 h-40 w-40 rounded-full bg-gold/15 blur-3xl"
          animate={{ x: [0, -12, 0], y: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <h2 className="relative z-10 font-display text-3xl font-extrabold text-pearl sm:text-4xl">{cta.headline}</h2>
        <p className="relative z-10 mt-4 max-w-3xl text-sm leading-7 text-pearl/85 sm:text-base">{cta.subtext}</p>

        <div className="relative z-10 mt-8 flex flex-wrap gap-3">
          <Link to={cta.primaryHref}>
            <Button>{cta.primaryLabel}</Button>
          </Link>
          <Link to={cta.secondaryHref}>
            <Button variant="ghost">{cta.secondaryLabel}</Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default ServiceCTA;
