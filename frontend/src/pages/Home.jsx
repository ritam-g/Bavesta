import { useEffect, useMemo, useState } from "react";
import Seo from "../components/Seo";
import HeroShowcase from "../components/home/HeroShowcase";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ProcessSection from "../components/home/ProcessSection";
import VoicesSection from "../components/home/VoicesSection";
import StatsSection from "../components/home/StatsSection";
import ContactBand from "../components/home/ContactBand";
import api from "../services/api";
import { companyProfile } from "../data/companyContent";
import { getServiceImage, serviceFallback } from "../data/serviceData";

const mockTestimonials = [
  {
    title: "BAVESTA transformed our operations. Our RevPAR increased by 15% in just 6 months.",
    tag: "Luxury Resort, Goa",
    image: "https://images.unsplash.com/photo-1542314831-c6a4d14d8c85?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Their staffing solutions are unparalleled. We hired an entire executive team seamlessly.",
    tag: "Boutique Hotel, Mumbai",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Flawless PF & ESIC compliance management. It saved us from massive legal headaches.",
    tag: "Restaurant Chain, Bangalore",
    image: "https://images.unsplash.com/photo-1551882547-ff40c0d5bf8f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Exceptional VIP guest coordination for our annual corporate retreat.",
    tag: "Corporate Client, Delhi",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
  }
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
        title="Home"
        description="Premium hospitality operations, consulting, manpower solutions, compliance, guest management, and business development services."
        url="/"
      />

      <HeroShowcase slides={serviceSlides} activeIndex={activeSlide} onSelect={setActiveSlide} />
      
      <WhyChooseUs />
      
      <StatsSection points={statsPoints} stats={stats} />
      
      <ProcessSection />
      
      <div className="bg-white py-12">
        <VoicesSection items={mockTestimonials} />
      </div>

      <ContactBand />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-600">
          {companyProfile.commitment}
        </p>
      </section>
    </>
  );
}

export default Home;
