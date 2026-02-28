import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import Button from "../components/ui/Button";
import Reveal from "../components/animations/Reveal";
import { getRoomById } from "../data/roomData";

function RoomDetails() {
  const { id } = useParams();
  const room = getRoomById(id);

  if (!room) {
    return (
      <section className="section-shell py-20">
        <p className="text-red-300">Room not found.</p>
      </section>
    );
  }

  return (
    <section className="section-shell py-16 sm:py-20">
      <Seo title={room.name} description={room.fullDescription} />

      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <img src={room.image} alt={room.name} className="h-80 w-full object-cover sm:h-[26rem]" />
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="glass-panel p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Room Detail</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold text-pearl">{room.name}</h1>
            <p className="mt-5 text-base leading-7 text-mist">{room.fullDescription}</p>

            <h2 className="mt-8 font-display text-2xl font-bold text-pearl">Amenities</h2>
            <ul className="mt-4 space-y-2 text-sm text-mist">
              {room.amenities.map((amenity) => (
                <li key={amenity} className="flex items-center gap-3">
                  <span className="inline-block h-2 w-2 rounded-full bg-gold" />
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass-panel p-7">
            <p className="text-xs uppercase tracking-[0.16em] text-mist">From</p>
            <p className="mt-2 font-display text-5xl font-extrabold text-gold">${room.pricePerNight}</p>
            <p className="mt-1 text-sm text-mist">per night</p>

            <div className="mt-8 grid gap-3">
              <Link to={`/book-hotel?room=${room.id}`}>
                <Button className="w-full">Book This Room</Button>
              </Link>
              <Link to="/rooms">
                <Button variant="slate" className="w-full">
                  Back To Rooms
                </Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default RoomDetails;
