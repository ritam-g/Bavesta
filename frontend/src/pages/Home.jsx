import { useEffect, useMemo, useState } from "react";
import Seo from "../components/Seo";
import HeroShowcase from "../components/home/HeroShowcase";
import ClientsSection from "../components/home/ClientsSection";
import VoicesSection from "../components/home/VoicesSection";
import StatsSection from "../components/home/StatsSection";
import PartnersSection from "../components/home/PartnersSection";
import InsightsSection from "../components/home/InsightsSection";
import ContactBand from "../components/home/ContactBand";
import api from "../services/api";
import { companyProfile } from "../data/companyContent";
import { getServiceImage, serviceFallback } from "../data/serviceData";
import { roomData } from "../data/roomData";

const clientLogos = ["GE", "IBM", "ICICI", "OLA", "TAJ", "ITC", "Radisson", "Conrad"];
const partnerLogos = ["Golden Palms", "Rosetta", "Taj Mahal", "Four Seasons", "Conrad", "Novotel", "Marriott", "Radisson"];

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

  const serviceSlides = useMemo(() => {
    const list = services.length ? services : serviceFallback;
    return list.slice(0, 8).map((service) => ({
      id: service._id || service.title,
      title: service.title,
      description: service.description,
      image: getServiceImage(service.title),
    }));
  }, [services]);

  useEffect(() => {
    if (!serviceSlides.length) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % serviceSlides.length);
    }, 5200);

    return () => clearInterval(interval);
  }, [serviceSlides.length]);

  useEffect(() => {
    if (activeSlide >= serviceSlides.length) setActiveSlide(0);
  }, [activeSlide, serviceSlides.length]);

  const voices = useMemo(
    () =>
      serviceSlides.map((slide, index) => ({
        title: `How ${slide.title} delivered measurable hospitality outcomes`,
        tag: `Case Study ${index + 1}`,
        image: slide.image,
      })),
    [serviceSlides],
  );

  const insightPosts = useMemo(
    () =>
      serviceSlides.slice(0, 3).map((slide) => ({
        title: slide.description,
        image: slide.image,
      })),
    [serviceSlides],
  );

  const statsPoints = [
    "Conferences, team programs, travel, and guest workflows executed with performance precision.",
    "Business insights, industry partnerships, and optimized systems that improve hospitality outcomes.",
    "Fast-response operations for dynamic requests without compromising quality or compliance.",
  ];

  const stats = [
    { value: "6+", label: "years of experience" },
    { value: "14k", label: "happy clients" },
    { value: "100%", label: "compliance commitment" },
  ];

  return (
    <>
      <Seo
        title="BAVESTA Hospitality Services"
        description="Premium hospitality operations, consulting, manpower solutions, compliance, guest management, and business development services."
      />

      <HeroShowcase slides={serviceSlides} activeIndex={activeSlide} onSelect={setActiveSlide} />
      <ClientsSection clients={clientLogos} />
      <VoicesSection items={voices} />
      <StatsSection points={statsPoints} stats={stats} />
      <PartnersSection projects={roomData.slice(0, 3)} partners={partnerLogos} />
      <InsightsSection posts={insightPosts} />
      <ContactBand />

      <section className="section-shell pb-8">
        <p className="mx-auto max-w-5xl text-center text-lg leading-8 text-[#465062]">
          {companyProfile.commitment}
        </p>
      </section>
    </>
  );
}

export default Home;
