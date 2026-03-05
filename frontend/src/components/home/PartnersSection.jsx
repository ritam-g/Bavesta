import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function PartnersSection({ projects, partners }) {
  return (
    <section className="section-shell pb-14 md:pb-16">
      <div className="rounded-[30px] border border-[#ddd8ce] bg-[#f8f7f3] px-5 py-10 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-5xl text-center"
        >
          <h2 className="font-display text-4xl font-semibold leading-tight text-[#1e2633] md:text-5xl">
            We help you grow your hospitality business.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#3f4958] sm:text-lg">
            From operational planning and service standards to strategic sales support, we align execution with sustainable commercial growth.
          </p>
        </motion.div>

        <div className="mt-12">
          <h3 className="text-center font-display text-3xl font-semibold text-[#1e2633] sm:text-4xl">Our partners</h3>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner, index) => (
              <motion.article
                key={partner}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="flex h-20 items-center justify-center rounded-2xl border border-[#dbd6cc] bg-white px-4 text-center font-display text-2xl font-semibold tracking-wide text-[#2c3648]"
              >
                {partner}
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="overflow-hidden rounded-2xl border border-[#d8d2c6] bg-white shadow-[0_25px_55px_-42px_rgba(20,32,46,0.62)]"
            >
              <img src={project.image} alt={project.name} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="font-display text-3xl leading-tight text-[#1d2533] sm:text-[2rem]">{project.name}</h4>
                <p className="mt-3 text-base leading-7 text-[#465062] sm:text-lg">{project.shortDescription}</p>
                <Link to="/rooms" className="mt-6 inline-block">
                  <Button variant="accent">Know More</Button>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
