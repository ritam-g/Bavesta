import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

function ServiceHero({ title, tagline, heroImage }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 48]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden rounded-3xl border border-white/10">
      <motion.div
        className="absolute inset-0"
        style={{
          y: bgY,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight/88 via-midnight/78 to-midnight/70" />

      <div className="section-shell relative z-10 py-14 sm:py-16 lg:py-20">
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-[0.14em] text-pearl/75"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-pearl">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/services" className="hover:text-pearl">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gold">{title}</span>
        </motion.nav>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mt-8 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
        >
          Service Detail
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 max-w-5xl font-display text-4xl font-extrabold leading-tight text-pearl sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-5 max-w-3xl text-base leading-7 text-pearl/85 sm:text-lg"
        >
          {tagline}
        </motion.p>
      </div>
    </section>
  );
}

export default ServiceHero;
