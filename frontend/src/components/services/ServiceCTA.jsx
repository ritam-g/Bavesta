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
        className="relative overflow-hidden rounded-2xl bg-gray-900 px-8 py-12 shadow-lg sm:px-12 sm:py-16"
      >
        <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-32 w-32 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{cta.headline}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-300">{cta.subtext}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to={cta.primaryHref}>
              <Button className="w-full sm:w-auto border-transparent bg-white text-gray-900 hover:bg-gray-100">{cta.primaryLabel}</Button>
            </Link>
            <Link to={cta.secondaryHref}>
              <Button className="w-full sm:w-auto border-gray-700 bg-transparent text-white hover:bg-gray-800 hover:border-gray-600">{cta.secondaryLabel}</Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ServiceCTA;
