import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function HeroShowcase({ slides, activeIndex, onSelect }) {
  if (!slides.length) return null;

  const activeSlide = slides[activeIndex] || slides[0];
  const rightTop = slides[(activeIndex + 1) % slides.length] || activeSlide;
  const rightBottom = slides[(activeIndex + 2) % slides.length] || activeSlide;

  return (
    <section className="relative overflow-hidden border-b border-[#e5ded0] bg-[#f4f2ed]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_10%,rgba(241,137,45,0.12),transparent_36%),radial-gradient(circle_at_90%_86%,rgba(77,92,126,0.14),transparent_36%)]" />

      <div className="section-shell relative py-10 md:py-12 xl:py-16">
        <div className="grid gap-8 xl:grid-cols-[1.03fr_1fr] xl:items-end">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.45 }}
          >
            <span className="inline-flex rounded-full border border-[#d8ccbc] bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6d5f4f]">
              Premium Hospitality Services
            </span>
            <h1 className="mt-6 max-w-3xl text-balance font-display text-[clamp(2.1rem,5.2vw,4.4rem)] font-semibold leading-[1.03] text-[#1d2431]">
              For hospitality growth you can trust, at every stage.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#4d5563] md:text-lg">
              BAVESTA delivers hotel operations, workforce solutions, compliance, consulting, and guest experience programs with disciplined execution and premium service quality.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/book-hotel" className="w-full sm:w-auto">
                <Button variant="accent" className="w-full px-7 sm:w-auto">
                  Book Hotel
                </Button>
              </Link>
              <Link to="/book-restaurant" className="w-full sm:w-auto">
                <Button variant="neutral" className="w-full px-7 sm:w-auto">
                  Book Restaurant
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="grid gap-4 sm:grid-cols-[1.2fr_0.9fr]"
          >
            <figure className="overflow-hidden rounded-[22px] border border-[#dfd7c9] bg-white p-1.5 shadow-[0_30px_70px_-44px_rgba(45,55,72,0.45)]">
              <motion.img
                key={activeSlide.image}
                src={activeSlide.image}
                alt={activeSlide.title}
                className="h-[300px] w-full rounded-[16px] object-cover sm:h-[420px]"
                initial={{ scale: 1.06, opacity: 0.55 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
              />
              <figcaption className="px-4 pb-3 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8f7d62]">Featured Service</p>
                <p className="mt-1 font-display text-2xl font-semibold text-[#1d2431]">{activeSlide.title}</p>
              </figcaption>
            </figure>

            <div className="grid gap-4">
              {[rightTop, rightBottom].map((slide) => (
                <figure
                  key={`${slide.title}-tile`}
                  className="overflow-hidden rounded-[20px] border border-[#dfd7c9] bg-white p-1.5 shadow-[0_26px_60px_-48px_rgba(45,55,72,0.5)]"
                >
                  <img src={slide.image} alt={slide.title} className="h-[188px] w-full rounded-[14px] object-cover" />
                </figure>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Select ${slide.title}`}
              onClick={() => onSelect(index)}
              className="group h-2.5 w-8 rounded-full bg-[#beb9b1] transition hover:bg-[#99938a] sm:w-12"
            >
              {index === activeIndex ? (
                <motion.span
                  layoutId="hero-progress-dot"
                  className="block h-full w-full rounded-full bg-[#e0ad1f]"
                  transition={{ type: "spring", stiffness: 340, damping: 28 }}
                />
              ) : null}
            </button>
          ))}
          <p className="ml-1 text-xs font-semibold tracking-[0.16em] text-[#6f7684]">
            {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroShowcase;
