import { motion } from "framer-motion";

function CareerHero() {
  return (
    <section className="relative overflow-hidden bg-aurora min-h-[88vh] flex items-center">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-navy/70 blur-2xl" />
      </div>

      <div className="section-shell relative z-10 py-24">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
          We&rsquo;re Hiring
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          className="mt-6 font-display text-5xl font-bold leading-tight text-pearl sm:text-6xl lg:text-7xl"
        >
          Build Your Career <br />
          <span className="text-gold">With Us</span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.65, ease: "easeOut" }}
          className="mt-6 max-w-xl text-base leading-7 text-mist sm:text-lg"
        >
          Join a growing hospitality and hotel management company focused on
          professional service, operational excellence, and guest experience.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#open-roles">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-transparent bg-gold px-8 py-3 text-sm font-semibold tracking-wide text-midnight transition-all duration-200 hover:bg-gold/90"
            >
              View Opportunities
            </motion.button>
          </a>
          <a href="#apply-form">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/20 bg-transparent px-8 py-3 text-sm font-semibold tracking-wide text-pearl transition-all duration-200 hover:bg-white/10"
            >
              Apply Now
            </motion.button>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.65, ease: "easeOut" }}
          className="mt-20 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {[
            ["10+", "Open Roles"],
            ["200+", "Team Members"],
            ["5+", "Cities"],
            ["100%", "Growth Focused"],
          ].map(([value, label]) => (
            <div key={label} className="border-l border-gold/30 pl-5">
              <p className="font-display text-3xl font-bold text-pearl">{value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-mist">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CareerHero;
