import SectionHeader from "../company/SectionHeader";
import Reveal from "../animations/Reveal";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We analyze your hospitality business needs, challenges, and goals to build a tailored roadmap.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Our experts design a comprehensive plan covering staffing, compliance, operations, and revenue optimization.",
  },
  {
    number: "03",
    title: "Execution & Staffing",
    description: "We deploy premium talent, implement systems, and handle all ground-level operational requirements.",
  },
  {
    number: "04",
    title: "Growth & Management",
    description: "Continuous monitoring, training, and strategic adjustments to ensure long-term ROI and service excellence.",
  }
];

function ProcessSection() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="section-shell">
        <SectionHeader
          kicker="The Process"
          title="How We Transform Operations"
          description="A systematic, proven approach to elevating your hospitality business from consultation to sustained growth."
          dark
        />

        <div className="mt-20 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.15}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-900 border-2 border-[#b8924a] flex items-center justify-center text-[#b8924a] font-display text-xl font-bold mb-6 shadow-[0_0_15px_rgba(184,146,74,0.3)]">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
