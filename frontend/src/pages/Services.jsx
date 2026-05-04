import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import ServiceCard from "../components/ui/ServiceCard";
import SectionHeader from "../components/company/SectionHeader";
import BulletPanel from "../components/company/BulletPanel";
import PageHero from "../components/company/PageHero";
import api from "../services/api";
import { serviceFallback, getServiceImage } from "../data/serviceData";
import { companyProfile } from "../data/companyContent";

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
    <>
      <Seo
        title="Services"
        description="Explore integrated BAVESTA hospitality services covering operations, manpower, compliance, consulting, events, sales, training, and lifestyle support."
      />

      <PageHero
        kicker="Our Services"
        breadcrumb="Services"
        title="Integrated Hospitality Solutions for Businesses and Individuals"
        description="From operations and manpower to compliance, consulting, event support, sales growth, and lifestyle assistance, BAVESTA delivers end-to-end service capability under one trusted framework."
        image={getServiceImage("Hotel Sales & Business Development")}
      />

      <section className="section-shell pb-20 mt-12">
        <SectionHeader
          kicker="Execution Model"
          title="How We Deliver"
          description="Every assignment is executed through structured governance, legal compliance controls, and measurable performance checkpoints."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="glass-panel p-8 sm:p-10">
            <h3 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">Service Delivery Approach</h3>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              <li className="flex items-start gap-4">
                <span className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                <span>Structured management frameworks for scalable execution.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                <span>Ethical, transparent, and legally compliant operational systems.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                <span>Customized models for business outcomes and individual convenience.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                <span>Performance visibility through disciplined reporting and review cycles.</span>
              </li>
            </ul>
          </article>

          <BulletPanel title="Mission Priorities" items={companyProfile.mission} />
        </div>

        {loading ? (
          <p className="mt-12 text-center text-gray-500">Loading services...</p>
        ) : (
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service._id} service={service} delay={index * 0.05} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Services;
