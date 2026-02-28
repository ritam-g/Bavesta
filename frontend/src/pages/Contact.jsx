import Seo from "../components/Seo";
import Reveal from "../components/animations/Reveal";
import InquiryForm from "../components/forms/InquiryForm";

function Contact() {
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
                <span className="font-semibold text-pearl">Phone:</span> +1 (555) 620-9900
              </p>
              <p>
                <span className="font-semibold text-pearl">Email:</span> hello@bavesta.com
              </p>
              <p>
                <span className="font-semibold text-pearl">Address:</span> 128 Westlake Corporate Tower, New York, NY 10019
              </p>
              <p>
                <span className="font-semibold text-pearl">Hours:</span> Monday to Friday, 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <InquiryForm heading="Send Business Inquiry" />
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
