import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "./Card";
import Button from "./Button";
import { getServiceBadge } from "../../data/serviceData";

function ServiceCard({ service, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -5 }}
    >
      <Card className="group h-full border-white/10 transition hover:border-gold/35 hover:bg-white/[0.08]">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-sm font-bold text-gold">
            {getServiceBadge(service.title)}
          </span>
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-mist">
            {service.category}
          </span>
        </div>

        <h3 className="mt-6 font-display text-xl font-bold leading-tight text-pearl">{service.title}</h3>
        <p className="mt-3 text-sm leading-6 text-mist">{service.description}</p>

        <div className="mt-6">
          <Link to={`/services/${service._id}`}>
            <Button variant="ghost" className="w-full">
              View Details
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}

export default ServiceCard;
