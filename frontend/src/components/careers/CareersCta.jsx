import Reveal from "../animations/Reveal";

function CareersCta() {
  return (
    <section className="section-shell py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl bg-aurora p-10 text-center sm:p-14">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />

          <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Join the Team
          </p>
          <h2 className="relative mt-4 font-display text-3xl font-bold text-pearl sm:text-4xl">
            Ready to Make an Impact?
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-7 text-mist">
            We&rsquo;re looking for passionate hospitality professionals who want to grow with a
            purpose-driven company. Your next chapter starts here.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <a href="#apply-form">
              <button className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-transparent bg-gold px-8 py-3 text-sm font-semibold tracking-wide text-midnight transition-all duration-200 hover:bg-gold/90 hover:scale-[1.02] active:scale-[0.98]">
                Apply Now
              </button>
            </a>
            <a href="mailto:bavestahospitality@gmail.com">
              <button className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/20 bg-transparent px-8 py-3 text-sm font-semibold tracking-wide text-pearl transition-all duration-200 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]">
                Email HR Team
              </button>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default CareersCta;
