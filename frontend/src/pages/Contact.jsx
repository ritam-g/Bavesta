import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/animations/Reveal";
import InquiryForm from "../components/forms/InquiryForm";

function Contact() {
  const [searchParams] = useSearchParams();
  const inquiryIntent = searchParams.get("inquiry");

  const intentMessage = useMemo(() => {
    const intentMap = {
      "book-hotel": "I would like to book a hotel stay.",
      "book-restaurant": "I would like to reserve a restaurant table.",
      "book-hotel-room": "I want to book a hotel room and need assistance with availability.",
      "reserve-restaurant-table": "I want to reserve a restaurant table for a specific date.",
      "hotel-package": "I need a custom hotel package for business or long-stay requirements.",
    };

    return intentMap[inquiryIntent] || "";
  }, [inquiryIntent]);

  return (
    <section className="section-shell py-16 sm:py-20">
      <Seo title="Contact" description="Send your hospitality inquiry to Bavesta and our team will connect with you." />

      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact Us</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-pearl sm:text-5xl">Let&apos;s Discuss Your Hospitality Goals</h1>
        <p className="mt-4 max-w-3xl text-mist">
          Tell us where you need support, from staffing and compliance to full operations and guest management.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="glass-panel p-7">
            <h2 className="font-display text-2xl font-bold text-pearl">Direct Contact</h2>
            <div className="mt-5 space-y-4 text-sm text-mist">
              <p>
                <span className="font-semibold text-pearl">Phone:</span> +91 8187077401
              </p>
              <p>
                <span className="font-semibold text-pearl">Phone:</span> +91 9640771603
              </p>
              <p>
                <span className="font-semibold text-pearl">Phone:</span> +91 7981088456
              </p>
              <p>
                <span className="font-semibold text-pearl">Email:</span> bavestahospitality@gmail.com
              </p>
              {/* <p>
                <span className="font-semibold text-pearl">Address:</span> 128 Westlake Corporate Tower, New York, NY 10019
              </p> */}
              {/* <p>
                <span className="font-semibold text-pearl">Hours:</span> Monday to Friday, 9:00 AM - 6:00 PM
              </p> */}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <InquiryForm heading="Send Business Inquiry" defaultMessage={intentMessage} />
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
