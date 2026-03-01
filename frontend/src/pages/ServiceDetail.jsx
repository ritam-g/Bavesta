import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import ServiceHero from "../components/services/ServiceHero";
import ServiceOverview from "../components/services/ServiceOverview";
import ServiceProcess from "../components/services/ServiceProcess";
import ServiceBenefits from "../components/services/ServiceBenefits";
import ServiceWhyChoose from "../components/services/ServiceWhyChoose";
import ServiceCTA from "../components/services/ServiceCTA";
import api from "../services/api";
import { serviceFallback } from "../data/serviceData";
import { getServiceDetailContent } from "../data/serviceDetailContent";

function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        setError("");
        const { data } = await api.get(`/services/${id}`);
        setService(data);
      } catch (fetchError) {
        const fallbackMatch = serviceFallback.find((item) => item._id === id);

        if (fallbackMatch) {
          setService(fallbackMatch);
          setError("");
        } else {
          setService(null);
          setError(fetchError.response?.data?.message || "Unable to load service details.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  const detailContent = useMemo(() => getServiceDetailContent(service), [service]);

  if (loading) {
    return (
      <section className="section-shell py-20">
        <Seo title="Service Details" description="Loading service details" />
        <div className="glass-panel animate-pulse p-8">
          <div className="h-4 w-44 rounded bg-white/10" />
          <div className="mt-5 h-10 w-3/4 rounded bg-white/10" />
          <div className="mt-4 h-4 w-5/6 rounded bg-white/10" />
          <div className="mt-2 h-4 w-2/3 rounded bg-white/10" />
        </div>
      </section>
    );
  }

  if (!service) {
    return (
      <section className="section-shell py-20">
        <Seo title="Service Not Found" description="Service detail could not be found" />
        <div className="glass-panel p-8">
          <p className="text-red-300">{error || "Service not found."}</p>
          <Link to="/services" className="mt-5 inline-flex text-sm font-semibold text-gold hover:text-pearl">
            Back to services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <Seo
        title={service.title}
        description={service.description || "Premium hospitality service detail and process information."}
      />

      <section className="section-shell py-12 sm:py-14">
        <ServiceHero title={service.title} tagline={detailContent.tagline} heroImage={detailContent.heroImage} />
      </section>

      <ServiceOverview
        overviewParagraphs={detailContent.overviewParagraphs}
        targetAudience={detailContent.targetAudience}
        overviewImage={detailContent.overviewImage}
      />

      <ServiceProcess process={detailContent.process} />
      <ServiceBenefits benefitCards={detailContent.benefitCards} />
      <ServiceWhyChoose whyChoosePoints={detailContent.whyChoosePoints} stats={detailContent.stats} />
      <ServiceCTA cta={detailContent.cta} />
    </>
  );
}

export default ServiceDetail;
