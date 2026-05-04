import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "./Card";
import Button from "./Button";
import { getServiceBadge, getServiceImage } from "../../data/serviceData";

function ServiceCard({ service, delay = 0, ctaLabel = "View Details" }) {
  const imageUrl = getServiceImage(service.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="h-full flex flex-col"
    >
      <Card className="group h-full flex flex-col overflow-hidden border-gray-200 p-0 transition hover:border-gray-300 hover:shadow-md bg-white">
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <div
            className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-gray-900 shadow-sm">
              {getServiceBadge(service.title)}
            </span>
            <span className="rounded-full bg-gray-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              {service.category}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-bold leading-tight text-gray-900">{service.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">{service.description}</p>

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
