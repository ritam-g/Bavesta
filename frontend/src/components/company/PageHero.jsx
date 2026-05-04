import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function PageHero({ kicker, title, description, image, breadcrumb }) {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="section-shell py-16 sm:py-24">
        <div className="max-w-4xl">
          {breadcrumb && (
            <motion.nav
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-xs font-semibold uppercase tracking-wider text-gray-500"
              aria-label="Breadcrumb"
            >
              <Link to="/" className="hover:text-gray-900 transition">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{breadcrumb}</span>
            </motion.nav>
          )}

          {kicker && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mt-6 inline-flex rounded-full bg-gray-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-600 border border-gray-200"
            >
              {kicker}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-tight text-gray-900 sm:text-5xl"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.14 }}
              className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
