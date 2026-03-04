import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Button from "../components/ui/Button";
import ServiceCard from "../components/ui/ServiceCard";
import Reveal from "../components/animations/Reveal";
import api from "../services/api";
import { getServiceImage, serviceFallback } from "../data/serviceData";

const whyChooseUs = [
  {
    title: "Professional Hospitality Experts",
    description:
      "Specialized teams with operational experience across hotels, dining, and premium guest services.",
    icon: (
      <path d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm-8 20a8 8 0 0 1 16 0H4Z" />
    ),
  },
  {
    title: "End-to-End Management",
    description:
      "From recruitment and compliance to operations and guest journey, we manage complete service ecosystems.",
    icon: (
      <path d="M4 5h16v4H4V5Zm0 5h10v4H4v-4Zm0 5h16v4H4v-4Z" />
    ),
  },
  {
    title: "Trusted Industry Experience",
    description:
      "Proven consulting and execution support for hospitality brands aiming to scale quality and revenue.",
    icon: (
      <path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5Zm0 6 3 6H9l3-6Z" />
    ),
  },
  {
    title: "Premium Guest Experience",
    description:
      "Frameworks designed to improve service standards, retention, and high-value guest satisfaction.",
    icon: (
      <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z" />
    ),
  },
];

function Home() {
  const [services, setServices] = useState(serviceFallback);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await api.get("/services");
        setServices(data.length ? data : serviceFallback);
      } catch {
        setServices(serviceFallback);
      }
    };

    fetchServices();
  }, []);

  const heroServices = useMemo(() => {
    const list = services.length ? services : serviceFallback;
    return list.slice(0, 8);
  }, [services]);

  useEffect(() => {
    if (!heroServices.length) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroServices.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroServices.length]);

  useEffect(() => {
    if (activeSlide >= heroServices.length) {
      setActiveSlide(0);
    }
  }, [activeSlide, heroServices.length]);

  const activeService = heroServices[activeSlide] || serviceFallback[0];
  const activeServiceImage = getServiceImage(activeService.title);
  const activeServiceLink = activeService?._id ? `/services/${activeService._id}` : "/services";

  return (
    <>
      <Seo
        title="Luxury Hospitality & Hotel Services"
        description="Premium hospitality, hotel operations, and guest experience solutions with modern service execution."
      />

      <section className="relative min-h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.title}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              backgroundImage: `url(${activeServiceImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-label={activeService.title}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/58 to-midnight/82 sm:bg-gradient-to-r sm:from-midnight/90 sm:via-midnight/72 sm:to-midnight/82" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_18%,rgba(201,165,106,0.16),transparent_40%)] sm:bg-[radial-gradient(circle_at_84%_18%,rgba(201,165,106,0.18),transparent_35%)]" />

        <div className="section-shell relative z-10 flex min-h-screen items-end py-20 pb-28 pt-24 sm:items-center sm:py-24">
          <div className="w-full max-w-5xl rounded-2xl border border-white/10 bg-midnight/18 p-4 backdrop-blur-[2px] sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-0">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.22em]"
            >
              Service-Led Hospitality Excellence
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="mt-4 max-w-4xl font-display text-3xl font-extrabold leading-tight
  bg-gradient-to-r from-[#f5d27a] via-[#c9a56a] to-[#a67c2d]
  bg-clip-text text-transparent
  drop-shadow-[0_0_20px_rgba(201,165,106,0.25)]
  sm:mt-6 sm:text-6xl lg:text-7xl"
            >
              Bavesta Hospitality Services Pvt.Ltd.
            </motion.h1>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
                className="mt-5 sm:mt-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold/95 sm:text-sm sm:tracking-[0.18em]">
                  Featured Service {activeSlide + 1} / {heroServices.length}
                </p>
                <h2 className="mt-2 max-w-4xl font-display text-2xl font-bold leading-tight text-pearl sm:text-4xl lg:text-5xl">
                  {activeService.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-pearl/85 sm:mt-4 sm:text-lg sm:leading-7">
                  {activeService.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
            >
              <Link to={activeServiceLink} className="w-full sm:w-auto">
                <Button className="h-12 w-full px-5 text-sm sm:h-auto sm:w-auto sm:px-6">
                  Explore This Service
                </Button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <Button variant="ghost" className="h-12 w-full px-5 text-sm sm:h-auto sm:w-auto sm:px-6">
                  View All Services
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="mt-6  flex w-full flex-col items-start gap-2.5 sm:mt-8 sm:gap-3"
            >
              <div className="w-full overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex w-max items-center gap-2.5 rounded-full border border-white/20 bg-midnight/45 px-4 py-2.5 backdrop-blur-sm sm:gap-3 sm:px-5 sm:py-3">
                  {heroServices.map((service, index) => (
                    <button
                      key={service._id || service.title}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Go to ${service.title}`}
                      className="group relative h-2 w-10 rounded-full sm:w-14"
                    >
                      <span className="absolute inset-0 rounded-full bg-pearl/35 transition group-hover:bg-pearl/55" />
                      {index === activeSlide ? (
                        <motion.span
                          layoutId="active-hero-bar"
                          className="absolute inset-0 rounded-full bg-gold shadow-[0_0_0_1px_rgba(201,165,106,0.45)]"
                          transition={{ type: "spring", stiffness: 380, damping: 28 }}
                        />
                      ) : null}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pearl/80 sm:text-xs sm:tracking-[0.14em]">
                Now Showing - {activeService.title}
              </p>
            </motion.div>
          </div>
        </div>

        <a
          href="#services-preview"
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] font-semibold tracking-[0.2em] text-pearl/75 sm:bottom-8 sm:text-xs"
        >
          <motion.span
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            <span>SCROLL</span>
            <span className="inline-block h-6 w-3 rounded-full border border-pearl/70">
              <span className="mx-auto mt-1 block h-1.5 w-1.5 rounded-full bg-pearl" />
            </span>
          </motion.span>
        </a>
      </section>

      <section id="services-preview" className="section-shell pb-20 pt-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Services Preview</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-pearl sm:text-4xl">Hospitality Services</h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.slice(0, 8).map((service, index) => (
            <ServiceCard key={service._id} service={service} delay={index * 0.05} ctaLabel="Learn More" />
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Link to="/services">
            <Button variant="slate">View All Services</Button>
          </Link>
        </Reveal>
      </section>

      <section className="section-shell pb-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Why Choose Us</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-pearl sm:text-4xl">Trusted Hospitality Partner</h2>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                className="glass-panel h-full border-white/10 p-6 transition hover:border-gold/30"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-gold">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    {item.icon}
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-pearl">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-mist">{item.description}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
