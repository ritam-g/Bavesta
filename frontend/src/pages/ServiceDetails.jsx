import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/animations/Reveal";
import InquiryForm from "../components/forms/InquiryForm";
import api from "../services/api";
import { serviceFallback } from "../data/serviceData";

function ServiceDetails() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchService = async () => {
      try {
        const { data } = await api.get(`/services/${id}`);
        setService(data);
      } catch {
        const fallback = serviceFallback.find((item) => item._id === id);
        if (fallback) setService(fallback);
        else setError("Service not found");
      }
    };

    fetchService();
  }, [id]);

  if (error) {
    return (
      <section className="section-shell py-20">
        <p className="text-red-300">{error}</p>
      </section>
    );
  }

  if (!service) {
    return (
      <section className="section-shell py-20">
        <p className="text-mist">Loading service details...</p>
      </section>
    );
  }

  return (
    <section className="section-shell py-16 sm:py-20">
      <Seo title={service.title} description={service.description} />

      <Reveal>
        <div className="glass-panel p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{service.category}</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-pearl sm:text-5xl">{service.title}</h1>
          <p className="mt-5 max-w-4xl text-base leading-7 text-mist">{service.description}</p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="glass-panel p-7 sm:p-8">
            <h2 className="font-display text-2xl font-bold text-pearl">Key Benefits</h2>
            <ul className="mt-5 space-y-3 text-sm text-mist">
              {(service.benefits || []).map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-gold" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <InquiryForm serviceId={service._id} heading="Request Service Consultation" compact />
        </Reveal>
      </div>
    </section>
  );
}

export default ServiceDetails;
