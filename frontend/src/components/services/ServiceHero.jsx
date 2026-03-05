import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

function ServiceHero({ title, tagline, heroImage }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 36]);

  return (
    <section ref={sectionRef} className="page-hero">
      <motion.div
        className="absolute inset-0"
        style={{
          y: bgY,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.28,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f3b]/94 via-[#0b223f]/84 to-[#0d2748]/86" />

      <div className="relative z-10">
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-xs font-semibold uppercase tracking-[0.13em] text-pearl/75"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-pearl">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/services" className="hover:text-pearl">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-gold">{title}</span>
        </motion.nav>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-6 inline-flex rounded-full border border-gold/45 bg-gold/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
        >
          Service Profile
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-5 max-w-5xl font-display text-4xl font-extrabold leading-tight text-pearl sm:text-5xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14 }}
          className="mt-4 max-w-3xl text-sm leading-7 text-pearl/85 sm:text-base"
        >
          {tagline}
        </motion.p>
      </div>
    </section>
  );
}

export default ServiceHero;
