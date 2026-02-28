import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/animations/Reveal";
import RoomCard from "../components/ui/RoomCard";
import Button from "../components/ui/Button";
import { roomData } from "../data/roomData";

function Rooms() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <Seo
        title="Rooms"
        description="Explore premium room and suite experiences designed for luxury hospitality stays."
      />

      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Accommodation</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-pearl sm:text-5xl">
          Luxury Rooms & Suites
        </h1>
        <p className="mt-4 max-w-3xl text-mist">
          Curated room categories designed for comfort, elevated aesthetics, and premium guest experience.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {roomData.map((room, index) => (
          <RoomCard key={room.id} room={room} delay={index * 0.06} />
        ))}
      </div>

      <Reveal className="mt-12">
        <div className="glass-panel flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-mist">
            Need a custom package for groups, long stays, or corporate events?
          </p>
          <Link to="/contact?inquiry=hotel-package">
            <Button>Request Custom Package</Button>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export default Rooms;
