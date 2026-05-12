import Reveal from "../animations/Reveal";
import SectionHeader from "../company/SectionHeader";

const benefits = [
  {
    title: "Career Growth",
    desc: "Structured career ladders and fast-track programs that reward performance and ambition within the hospitality sector.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    ),
  },
  {
    title: "Professional Environment",
    desc: "A structured, respectful workplace that champions collaboration, integrity, and professional excellence across all levels.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
  {
    title: "Industry Exposure",
    desc: "Cross-functional experience across hotel operations, guest services, consulting, and hospitality staffing domains.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
  },
  {
    title: "Learning & Development",
    desc: "Continuous training programs, mentorship, and certifications to keep your skills sharp and your trajectory rising.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
  },
];

function WhyJoinUs() {
  return (
    <section className="section-shell py-20">
      <SectionHeader
        kicker="Why BAVESTA"
        title="A Career Worth Building"
        description="We invest in our people as much as we invest in our clients. At BAVESTA, you become part of something meaningful."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <div className="group glass-panel flex flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  {item.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default WhyJoinUs;
