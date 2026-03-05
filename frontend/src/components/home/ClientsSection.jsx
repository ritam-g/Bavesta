import { motion } from "framer-motion";

function ClientsSection({ clients }) {
  return (
    <section className="section-shell py-14 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="rounded-[30px] border border-[#ddd8ce] bg-[#f8f7f4] px-5 py-10 shadow-[0_20px_45px_-35px_rgba(27,35,47,0.35)] sm:px-10"
      >
        <h2 className="text-center font-display text-3xl font-semibold text-[#1d2431] sm:text-4xl">Our Clients</h2>
        <p className="mx-auto mt-4 max-w-4xl text-center text-base leading-7 text-[#404958] sm:text-lg sm:leading-8">
          We collaborate with established hospitality and enterprise partners who trust our structured execution model and consistent service quality.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client, index) => (
            <motion.article
              key={client}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="flex h-20 items-center justify-center rounded-2xl border border-[#dfd9ce] bg-white px-4 text-center font-display text-2xl font-semibold text-[#17304d] shadow-[0_15px_35px_-28px_rgba(18,29,44,0.45)] sm:text-3xl"
            >
              {client}
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default ClientsSection;
