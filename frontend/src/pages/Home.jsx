import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Button from "../components/ui/Button";
import ServiceCard from "../components/ui/ServiceCard";
import Reveal from "../components/animations/Reveal";
import api from "../services/api";
import { serviceFallback } from "../data/serviceData";

function Home() {
  const [services, setServices] = useState([]);

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

  return (
    <>
      <Seo
        title="Premium Hospitality Services"
        description="Bavesta delivers recruitment, operations, consulting, training, and guest excellence solutions for hospitality businesses."
      />

      <section className="relative min-h-[92vh] overflow-hidden bg-aurora">
        <div className="absolute inset-0 noise-bg opacity-20" />
        <motion.div
          className="absolute -left-16 top-24 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
          animate={{ x: [0, 35, -12, 0], y: [0, -25, 12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
          animate={{ x: [0, -22, 18, 0], y: [0, 20, -15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="section-shell relative z-10 flex min-h-[92vh] items-center py-20">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold"
            >
              Hospitality Services & Hotel Management
            </motion.p>

            <motion.h1
              className="mt-6 font-display text-4xl font-extrabold leading-tight text-pearl sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Build Stronger Hotels Through Smart Operations, Talent, and Guest-Centric Growth.
            </motion.h1>

            <motion.p
              className="mt-6 max-w-3xl text-base leading-7 text-mist sm:text-lg"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We partner with hospitality brands to scale recruitment, compliance, guest management, and revenue strategy using a high-performance service framework.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/services">
                <Button>Explore Services</Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost">Talk to Our Team</Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <a href="#services-preview" className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs font-semibold tracking-[0.18em] text-mist">
          SCROLL
        </a>
      </section>

      <section id="services-preview" className="section-shell py-20">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold text-pearl sm:text-4xl">Core Service Portfolio</h2>
          <p className="mt-3 max-w-3xl text-mist">
            Eight integrated services tailored for hotels, resorts, and hospitality operations that demand premium delivery standards.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 8).map((service, index) => (
            <ServiceCard key={service._id} service={service} delay={index * 0.04} />
          ))}
        </div>
      </section>

      <section className="section-shell pb-20">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold text-pearl sm:text-4xl">Why Leading Brands Choose Bavesta</h2>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Hospitality-First Expertise", "Our team has domain experience across hotels, restaurants, and guest services."],
            ["Execution + Advisory", "We blend strategic planning with practical implementation support on the ground."],
            ["Measurable Outcomes", "Every engagement is linked to occupancy, service quality, and operational metrics."],
          ].map(([title, description], index) => (
            <Reveal key={title} delay={index * 0.08}>
              <div className="glass-panel p-6">
                <h3 className="font-display text-xl font-bold text-pearl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-mist">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell pb-20">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold text-pearl sm:text-4xl">Client Testimonials</h2>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {[
            {
              quote:
                "Bavesta helped us transform workforce planning and service consistency across three properties in under six months.",
              name: "Ariana Mitchell",
              role: "Regional Hotel Director",
            },
            {
              quote:
                "Their consulting team improved our guest journey standards and directly impacted online ratings and repeat bookings.",
              name: "Rohan Kapoor",
              role: "General Manager, Urban Luxe Hotels",
            },
          ].map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <div className="glass-panel p-7">
                <p className="text-base leading-7 text-pearl">"{item.quote}"</p>
                <p className="mt-5 text-sm font-semibold text-gold">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-mist">{item.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell pb-20">
        <Reveal>
          <div className="glass-panel overflow-hidden p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-pearl sm:text-4xl">
                  Ready to elevate your hospitality operation?
                </h2>
                <p className="mt-3 max-w-2xl text-mist">
                  Share your goals and we will design a custom service plan across talent, operations, and guest excellence.
                </p>
              </div>
              <Link to="/contact">
                <Button className="w-full sm:w-auto">Start a Conversation</Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

export default Home;
