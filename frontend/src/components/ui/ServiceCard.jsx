import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "./Card";
import Button from "./Button";
import { getServiceBadge, getServiceImage } from "../../data/serviceData";

function ServiceCard({ service, delay = 0, ctaLabel = "View Details" }) {
  const imageUrl = getServiceImage(service.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -5 }}
    >
      <Card className="group h-full overflow-hidden border-white/10 p-0 transition hover:border-gold/35 hover:bg-white/[0.08]">
        <div className="relative h-36 overflow-hidden border-b border-white/10 sm:h-40">
          <div
            className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/35 via-midnight/45 to-midnight/90" />
          <div className="relative flex items-start justify-between gap-4 p-5">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-sm font-bold text-gold">
              {getServiceBadge(service.title)}
            </span>
            <span className="rounded-full border border-white/15 bg-midnight/50 px-3 py-1 text-xs font-semibold text-pearl/90">
              {service.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-display text-xl font-bold leading-tight text-pearl">{service.title}</h3>
          <p className="mt-3 text-sm leading-6 text-mist">{service.description}</p>

          <div className="mt-6">
            <Link to={`/services/${service._id}`}>
              <Button variant="ghost" className="w-full">
                {ctaLabel}
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default ServiceCard;
