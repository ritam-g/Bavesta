import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "./Card";
import Button from "./Button";

function RoomCard({ room, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <Card className="group h-full overflow-hidden border-white/10 p-0 transition duration-300 hover:border-gold/35 hover:shadow-[0_25px_60px_-30px_rgba(8,18,33,0.9)]">
        <div className="overflow-hidden">
          <motion.img
            src={room.image}
            alt={room.name}
            className="h-56 w-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-2xl font-bold text-pearl">{room.name}</h3>
            <span className="rounded-full border border-gold/35 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
              ${room.pricePerNight}/night
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-mist">{room.shortDescription}</p>

          <div className="mt-5">
            <Link to={`/rooms/${room.id}`}>
              <Button variant="ghost" className="w-full">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default RoomCard;
