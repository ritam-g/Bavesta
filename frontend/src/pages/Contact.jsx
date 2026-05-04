import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Seo from "../components/Seo";
import InquiryForm from "../components/forms/InquiryForm";
import BulletPanel from "../components/company/BulletPanel";
import PageHero from "../components/company/PageHero";
import { companyProfile } from "../data/companyContent";
import { getServiceImage } from "../data/serviceData";

function Contact() {
  const [searchParams] = useSearchParams();
  const inquiryIntent = searchParams.get("inquiry");

  const intentMessage = useMemo(() => {
    const intentMap = {
      consultation: "I would like to discuss a consultation for our hospitality operations and growth objectives.",
      "book-hotel": "I would like to book a hotel stay.",
      "book-restaurant": "I would like to reserve a restaurant table.",
      "book-hotel-room": "I want to book a hotel room and need assistance with availability.",
      "reserve-restaurant-table": "I want to reserve a restaurant table for a specific date.",
      "hotel-package": "I need a custom hotel package for business or long-stay requirements.",
    };

    return intentMap[inquiryIntent] || "";
  }, [inquiryIntent]);

  return (
    <>
      <Seo
        title="Contact"
        description="Connect with BAVESTA Hospitality Services for operations management, manpower, compliance, consulting, and lifestyle support inquiries."
      />

      <PageHero
        kicker="Contact Us"
        breadcrumb="Contact"
        title="Let's Discuss Your Hospitality Goals"
        description="Share your requirement and our team will design a structured solution aligned to quality, compliance, and growth outcomes."
        image={getServiceImage("Guest Management")}
      />

      <section className="section-shell pb-20 mt-12">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <article className="glass-panel p-7">
              <h2 className="font-display text-2xl font-bold text-gray-900">Direct Contact</h2>
              <div className="mt-5 space-y-3 text-sm text-gray-600">
                <p><span className="font-semibold text-gray-900">Phone:</span> +91 8187077401</p>
                <p><span className="font-semibold text-gray-900">Phone:</span> +91 9640771603</p>
                <p><span className="font-semibold text-gray-900">Phone:</span> +91 7981088456</p>
                <p><span className="font-semibold text-gray-900">Email:</span> bavestahospitality@gmail.com</p>
              </div>
            </article>

            <BulletPanel title="Why Clients Engage BAVESTA" items={companyProfile.whyChooseUs} />
          </div>

          <InquiryForm heading="Send Business Inquiry" defaultMessage={intentMessage} />
        </div>
      </section>
    </>
  );
}

export default Contact;
