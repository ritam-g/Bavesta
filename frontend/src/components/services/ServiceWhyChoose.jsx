import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

function Counter({ value, suffix = "", duration = 1.2 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (value % 1 !== 0) return Number(latest).toFixed(1);
    return Math.round(latest);
  });

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.65 });

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(count, value, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [count, duration, inView, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

function ServiceWhyChoose({ whyChoosePoints, stats }) {
  return (
    <section className="section-shell py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Why Choose Us</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-pearl sm:text-4xl">Trusted Consulting Partnership</h2>
      </motion.div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-7"
        >
          <ul className="space-y-3 text-sm leading-7 text-mist sm:text-base">
            {whyChoosePoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-gold" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-panel border-white/10 p-5"
            >
              <p className="font-display text-4xl font-extrabold text-gold">
                <Counter value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-mist">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceWhyChoose;
