import Seo from "../components/Seo";
import Reveal from "../components/animations/Reveal";

function About() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <Seo title="About" description="Learn about Bavesta's mission, vision, and leadership in hospitality services." />

      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">About Bavesta</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-pearl sm:text-5xl">Built for Modern Hospitality Growth</h1>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="glass-panel p-7">
            <h2 className="font-display text-2xl font-bold text-pearl">Mission</h2>
            <p className="mt-3 text-sm leading-7 text-mist">
              To enable hospitality businesses to scale faster through talent excellence, operational precision, and guest-centric service design.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass-panel p-7">
            <h2 className="font-display text-2xl font-bold text-pearl">Vision</h2>
            <p className="mt-3 text-sm leading-7 text-mist">
              To become the most trusted strategic partner for premium hospitality operations, people systems, and service transformation.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <h2 className="font-display text-3xl font-extrabold text-pearl">Leadership</h2>
      </Reveal>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {[
          ["Sophia Bennett", "Chief Executive Officer"],
          ["Daniel Carter", "Director, Operations & Consulting"],
          ["Nina Rodriguez", "Head of Talent & Training"],
        ].map(([name, role], index) => (
          <Reveal key={name} delay={index * 0.08}>
            <div className="glass-panel p-6">
              <div className="h-12 w-12 rounded-full bg-gold/20" />
              <h3 className="mt-4 font-display text-xl font-bold text-pearl">{name}</h3>
              <p className="mt-2 text-sm text-mist">{role}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <h2 className="font-display text-3xl font-extrabold text-pearl">Growth Timeline</h2>
      </Reveal>
      <div className="mt-6 space-y-4">
        {[
          ["2018", "Bavesta launched with recruitment and consulting services for boutique hotels."],
          ["2021", "Expanded to payroll compliance and multi-property operations support."],
          ["2024", "Introduced guest management and external training solutions across regions."],
          ["2026", "Delivering integrated hospitality transformation programs at enterprise scale."],
        ].map(([year, text], index) => (
          <Reveal key={year} delay={index * 0.08}>
            <div className="glass-panel flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:gap-6">
              <span className="inline-flex min-w-16 rounded-md border border-gold/40 bg-gold/10 px-3 py-1 text-sm font-bold text-gold">
                {year}
              </span>
              <p className="text-sm leading-6 text-mist">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default About;
