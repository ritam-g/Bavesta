import { motion } from "framer-motion";

function ClientsSection({ clients }) {
  return (
    <section className="bg-white py-16 sm:py-24 border-b border-gray-100">
      <div className="section-shell">
        <h2 className="text-center font-display text-2xl font-semibold text-gray-900 sm:text-3xl">Trusted by Industry Leaders</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          We collaborate with established enterprise partners who trust our structured execution model.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex h-16 w-36 items-center justify-center rounded-xl bg-gray-50 px-4 text-center font-display text-xl font-bold text-gray-400 grayscale transition hover:grayscale-0 hover:bg-gray-100 hover:text-gray-800"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
