import { motion } from "framer-motion";

function ContactBand() {
  return (
    <section className="section-shell pb-16 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-gray-200 bg-white px-8 py-12 shadow-sm"
      >
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 border border-gray-100">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 17.92v3a2 2 0 0 1-2.18 2A19.77 19.77 0 0 1 3.08 6.18 2 2 0 0 1 5.06 4h3a2 2 0 0 1 2 1.72c.12.89.33 1.77.64 2.6a2 2 0 0 1-.45 2.11L9.1 11.6a16 16 0 0 0 3.3 3.3l1.16-1.15a2 2 0 0 1 2.11-.45c.84.31 1.71.53 2.6.64A2 2 0 0 1 22 17.92Z" />
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-bold text-gray-900">Get in Touch</h3>
            <p className="mt-2 text-gray-600 font-medium">
              (+91) 8187077401 | 9640771603 | 7981088456
            </p>
            <p className="mt-1 text-gray-500">bavestahospitality@gmail.com</p>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left border-t border-gray-100 pt-10 md:border-t-0 md:border-l md:pl-10 md:pt-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 border border-gray-100">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-bold text-gray-900">Location</h3>
            <p className="mt-2 text-gray-600 font-medium">Hyderabad, India</p>
            <p className="mt-1 text-gray-500">Headquarters</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactBand;
