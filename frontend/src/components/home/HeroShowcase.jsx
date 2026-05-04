import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function HeroShowcase({ slides, activeIndex, onSelect }) {
  if (!slides.length) return null;

  const activeSlide = slides[activeIndex] || slides[0];

  return (
    <section className="relative overflow-hidden bg-white border-b border-gray-100">
      <div className="section-shell relative py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="inline-flex rounded-full bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-200">
              Premium Hospitality Services
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Hospitality growth you can trust.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              BAVESTA delivers hotel operations, workforce solutions, compliance, consulting, and guest experience programs with disciplined execution and premium service quality.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/services" className="w-full sm:w-auto">
                <Button variant="accent" className="w-full justify-center px-8 py-3">
                  Explore Services
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="neutral" className="w-full justify-center px-8 py-3">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <figure className="overflow-hidden rounded-2xl bg-gray-50 shadow-sm border border-gray-100">
              <motion.img
                key={activeSlide.image}
                src={activeSlide.image}
                alt={activeSlide.title}
                className="h-[400px] w-full object-cover lg:h-[500px]"
                initial={{ opacity: 0.8, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <figcaption className="bg-white px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Featured Service</p>
                <p className="mt-1 font-display text-xl font-semibold text-gray-900">{activeSlide.title}</p>
              </figcaption>
            </figure>
            
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Select ${slide.title}`}
                  onClick={() => onSelect(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-8 bg-gray-900" : "w-2 bg-gray-200 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroShowcase;
