import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Button from "../components/ui/Button";
import ServiceCard from "../components/ui/ServiceCard";
import RoomCard from "../components/ui/RoomCard";
import Reveal from "../components/animations/Reveal";
import api from "../services/api";
import { serviceFallback } from "../data/serviceData";
import { roomData } from "../data/roomData";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=2200&q=80",
    alt: "Luxury hotel lobby",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2200&q=80",
    alt: "Premium hospitality reception",
  },
  {
    image:
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=2200&q=80",
    alt: "Elegant fine dining hall",
  },
];

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
  const [services, setServices] = useState([]);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Seo
        title="Luxury Hospitality & Hotel Services"
        description="Premium hospitality, hotel operations, and guest experience solutions with modern service execution."
      />

      <section className="relative min-h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroSlides[activeSlide].image}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              backgroundImage: `url(${heroSlides[activeSlide].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-label={heroSlides[activeSlide].alt}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-midnight/85 via-midnight/65 to-midnight/78" />

        <div className="section-shell relative z-10 flex min-h-screen items-center py-24">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold"
            >
              Premium Hospitality Experience
            </motion.p>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-pearl sm:text-6xl lg:text-7xl">
              {"Experience Luxury Hospitality".split(" ").map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  className="mr-3 inline-block"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 + index * 0.08, ease: "easeOut" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="mt-6 max-w-2xl text-base leading-7 text-pearl/85 sm:text-lg"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
            >
              Discover premium hotel stays, refined dining experiences, and modern hospitality solutions built for 5-star guest satisfaction.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
            >
              <Link to="/contact?inquiry=book-hotel">
                <Button className="px-6">Book Hotel</Button>
              </Link>
              <Link to="/contact?inquiry=book-restaurant">
                <Button variant="ghost" className="px-6">
                  Book Restaurant
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <a
          href="#rooms-preview"
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs font-semibold tracking-[0.2em] text-pearl/75"
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

      <section id="rooms-preview" className="section-shell py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Rooms Showcase</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-pearl sm:text-4xl">Signature Rooms & Suites</h2>
          <p className="mt-4 max-w-3xl text-mist">
            A curated selection of premium rooms designed with comfort, elegance, and modern hospitality standards.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {roomData.map((room, index) => (
            <RoomCard key={room.id} room={room} delay={index * 0.08} />
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Link to="/rooms">
            <Button variant="slate">View All Rooms</Button>
          </Link>
        </Reveal>
      </section>

      <section className="section-shell pb-20">
        <Reveal>
          <div className="rounded-2xl border border-gold/25 bg-gradient-to-br from-[#102346] via-[#122a4f] to-[#0e1e38] p-8 shadow-luxe sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-pearl sm:text-4xl">Book Your Stay Today</h2>
                <p className="mt-3 text-base text-mist">Reserve Your Dining Experience</p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-pearl/80">
                  Plan a complete luxury hospitality experience with seamless hotel and restaurant reservations through our concierge team.
                </p>
              </div>
              <div className="grid gap-3 sm:min-w-72">
                <Link to="/contact?inquiry=book-hotel-room">
                  <Button className="w-full">Book Hotel Room</Button>
                </Link>
                <Link to="/contact?inquiry=reserve-restaurant-table">
                  <Button variant="ghost" className="w-full">
                    Reserve Restaurant Table
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-20">
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
