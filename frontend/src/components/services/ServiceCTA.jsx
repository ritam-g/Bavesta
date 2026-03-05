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
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-2xl border border-[#3b638f]/45 bg-[#0b213e]/88 p-8 shadow-luxe sm:p-10"
      >
        <div className="absolute -right-20 top-0 h-56 w-56 rounded-full bg-gold/18 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-44 w-44 rounded-full bg-[#2c4d78]/35 blur-3xl" />

        <div className="relative z-10">
          <h2 className="font-display text-3xl font-extrabold text-pearl sm:text-4xl">{cta.headline}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-pearl/85 sm:text-base">{cta.subtext}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to={cta.primaryHref}>
              <Button>{cta.primaryLabel}</Button>
            </Link>
            <Link to={cta.secondaryHref}>
              <Button variant="ghost">{cta.secondaryLabel}</Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ServiceCTA;
