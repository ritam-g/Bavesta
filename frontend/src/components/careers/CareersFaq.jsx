import { useState } from "react";
import Reveal from "../animations/Reveal";
import SectionHeader from "../company/SectionHeader";

const faqs = [
  {
    q: "Who can apply for positions at BAVESTA?",
    a: "We welcome applications from freshers, experienced professionals, and hospitality graduates across India. Each role has specific requirements listed in the job description.",
  },
  {
    q: "What is the typical recruitment process?",
    a: "After you submit your application, our HR team reviews your profile within 3–5 business days. Shortlisted candidates are contacted for a phone screening, followed by an interview round.",
  },
  {
    q: "Do you offer internship or fresher programs?",
    a: "Yes. We actively hire freshers and offer structured internship programs designed to give hands-on exposure to hotel operations, guest services, and hospitality management.",
  },
  {
    q: "What file formats are accepted for resume upload?",
    a: "We accept PDF, DOC, and DOCX formats, with a maximum file size of 5 MB. Please ensure your resume is clearly formatted and up to date.",
  },
  {
    q: "Can I apply for multiple roles simultaneously?",
    a: "Yes, you may submit separate applications for different roles. Please tailor each application to the specific position you are applying for.",
  },
  {
    q: "Is relocation support provided?",
    a: "Depending on the role and seniority, BAVESTA does consider relocation support on a case-by-case basis. This will be discussed during the offer stage.",
  },
];

function CareersFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="bg-gray-50 py-20">
      <div className="section-shell">
        <SectionHeader
          kicker="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before applying to join our team."
        />

        <div className="mx-auto mt-12 max-w-2xl space-y-3">
          {faqs.map((item, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="glass-panel overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="text-sm font-semibold text-gray-900">{item.q}</span>
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="border-t border-gray-100 px-6 pb-5 pt-3 text-sm leading-7 text-gray-500">
                    {item.a}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareersFaq;
