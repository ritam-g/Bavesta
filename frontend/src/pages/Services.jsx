import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import ServiceCard from "../components/ui/ServiceCard";
import Reveal from "../components/animations/Reveal";
import api from "../services/api";
import { serviceFallback } from "../data/serviceData";

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await api.get("/services");
        setServices(data.length ? data : serviceFallback);
      } catch {
        setServices(serviceFallback);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="section-shell py-16 sm:py-20">
      <Seo
        title="Services"
        description="Explore Bavesta's premium hospitality services across recruitment, operations, consulting, compliance, and growth."
      />

      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">What We Offer</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-pearl sm:text-5xl">Bavesta Hospitality Services Pvt.Ltd.</h1>
        <p className="mt-4 max-w-3xl text-mist">
          Comprehensive service blocks designed to improve operational resilience, guest satisfaction, and business performance.
        </p>
      </Reveal>

      {loading ? (
        <p className="mt-10 text-mist">Loading services...</p>
      ) : (
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service._id} service={service} delay={index * 0.04} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Services;
