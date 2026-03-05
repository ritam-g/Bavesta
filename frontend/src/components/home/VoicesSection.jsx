import { useMemo, useState } from "react";
import { motion } from "framer-motion";

function VoicesSection({ items }) {
  const [activeStart, setActiveStart] = useState(0);
  const total = items.length;

  const visibleItems = useMemo(() => {
    if (!total) return [];
    return Array.from({ length: Math.min(3, total) }, (_, index) => items[(activeStart + index) % total]);
  }, [activeStart, items, total]);

  const next = () => setActiveStart((prev) => (prev + 1) % total);
  const prev = () => setActiveStart((prev) => (prev - 1 + total) % total);

  if (!total) return null;

  return (
    <section className="section-shell pb-14 md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="rounded-[30px] border border-[#ded8ce] bg-[#f2f1ec] px-5 py-10 sm:px-8 lg:px-10"
      >
        <h2 className="text-center font-display text-3xl font-semibold text-[#1d2431] sm:text-4xl">Our clients&apos; voice</h2>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {visibleItems.map((item, index) => (
            <motion.article
              key={`${item.title}-${activeStart}-${index}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-[#d8d2c7] bg-white shadow-[0_22px_45px_-34px_rgba(25,35,51,0.45)]"
            >
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.13em] text-[#ffdb83]">{item.tag}</p>
                <p className="mt-2 text-base font-semibold leading-7 text-white sm:text-lg">{item.title}</p>
              </div>
              <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f12222]/90 shadow-[0_15px_30px_-20px_rgba(241,34,34,0.9)]">
                <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <p className="font-medium tracking-[0.08em] text-[#4e5665]">
            {String(activeStart + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#d0cbc3]">
            <motion.div
              key={activeStart}
              initial={{ width: 0 }}
              animate={{ width: `${((activeStart + 1) / total) * 100}%` }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="h-full rounded-full bg-[#7a3f9f]"
            />
          </div>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonials"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#cbc5bc] bg-white text-[#2a3649] transition hover:border-[#a79f93] hover:bg-[#f6f5f1]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="m15 6-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonials"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#cbc5bc] bg-white text-[#2a3649] transition hover:border-[#a79f93] hover:bg-[#f6f5f1]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default VoicesSection;
