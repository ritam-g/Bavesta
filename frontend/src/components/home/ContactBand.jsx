import { motion } from "framer-motion";

function ContactBand() {
  return (
    <section className="section-shell pb-14 md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="rounded-[22px] border border-[#e5b30a] bg-[#f8c616] px-6 py-10"
      >
        <div className="grid gap-8 text-[#252a35] md:grid-cols-3 md:gap-0">
          <article className="md:pr-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/50 md:mx-0">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 17.92v3a2 2 0 0 1-2.18 2A19.77 19.77 0 0 1 3.08 6.18 2 2 0 0 1 5.06 4h3a2 2 0 0 1 2 1.72c.12.89.33 1.77.64 2.6a2 2 0 0 1-.45 2.11L9.1 11.6a16 16 0 0 0 3.3 3.3l1.16-1.15a2 2 0 0 1 2.11-.45c.84.31 1.71.53 2.6.64A2 2 0 0 1 22 17.92Z" />
              </svg>
            </div>
            <p className="mt-4 text-center text-lg font-semibold leading-tight md:text-left lg:text-xl">
              (+91) 8187077401 | 9640771603 | 7981088456
            </p>
            <p className="mt-3 text-center text-base font-medium md:text-left lg:text-lg">bavestahospitality@gmail.com</p>
          </article>

          <article className="border-[#c99e10] md:border-l md:px-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/50 md:mx-0">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v6l4 2" />
              </svg>
            </div>
            <p className="mt-4 text-center text-lg font-semibold leading-tight md:text-left lg:text-xl">Mon - Sat 9.30 am to 6.00 pm</p>
            <p className="mt-3 text-center text-base md:text-left lg:text-lg">Sunday Closed</p>
          </article>

          <article className="border-[#c99e10] md:border-l md:px-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/50 md:mx-0">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <p className="mt-4 text-center text-lg font-semibold leading-tight md:text-left lg:text-xl">Bengaluru</p>
            <p className="mt-3 text-center text-base md:text-left lg:text-lg">India</p>
          </article>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactBand;
