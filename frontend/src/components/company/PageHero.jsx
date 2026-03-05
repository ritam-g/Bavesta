import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function PageHero({ kicker, title, description, image, breadcrumb }) {
  return (
    <section className="section-shell py-12 sm:py-14">
      <div className="page-hero">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: image ? `url(${image})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e37]/92 via-[#0b223f]/84 to-[#0c233f]/86" />

        <div className="relative z-10">
          {breadcrumb && (
            <motion.nav
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-xs font-semibold uppercase tracking-[0.13em] text-pearl/75"
              aria-label="Breadcrumb"
            >
              <Link to="/" className="hover:text-pearl">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gold">{breadcrumb}</span>
            </motion.nav>
          )}

          {kicker && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mt-6 inline-flex rounded-full border border-gold/45 bg-gold/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
            >
              {kicker}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-tight text-pearl sm:text-5xl"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.14 }}
              className="mt-4 max-w-3xl text-sm leading-7 text-pearl/85 sm:text-base"
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
