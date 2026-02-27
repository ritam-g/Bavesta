import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import api from "../services/api";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadRooms = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/rooms");
        setRooms(data);
      } catch (err) {
        setError(err.response?.data?.message || "Unable to load rooms right now.");
      } finally {
        setLoading(false);
      }
    };

    loadRooms();
  }, []);

  const filteredRooms = useMemo(() => {
    if (selectedType === "All") return rooms;
    return rooms.filter((room) => room.type === selectedType);
  }, [rooms, selectedType]);

  return (
    <section className="section-shell py-16">
      <Seo title="Rooms" description="Explore luxury hotel rooms and book your stay online." />
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl text-cocoa">Rooms & Suites</h1>
          <p className="mt-2 text-espresso/75">Choose from curated spaces designed for comfort and elegance.</p>
        </div>
        <label className="text-sm font-semibold text-cocoa">
          Filter by type
          <select
            className="input-base mt-2 min-w-44"
            value={selectedType}
            onChange={(event) => setSelectedType(event.target.value)}
          >
            {["All", "Deluxe", "Suite", "Standard"].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>

      {loading && <p className="mt-8">Loading rooms...</p>}
      {error && <p className="mt-8 text-red-700">{error}</p>}

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRooms.map((room) => (
          <Card key={room._id}>
            <img
              src={room.images?.[0] ? `${(import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api").replace("/api", "")}${room.images[0]}` : "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900"}
              alt={room.name}
              className="h-44 w-full rounded-md object-cover"
            />
            <h2 className="mt-4 font-display text-2xl text-cocoa">{room.name}</h2>
            <p className="text-sm text-espresso/75">{room.type} · Up to {room.capacity} guests</p>
            <p className="mt-3 text-sm text-espresso/75">{room.description}</p>
            <p className="mt-3 font-semibold text-gold">${room.pricePerNight} / night</p>
            <div className="mt-4 flex gap-3">
              <Link to={`/rooms/${room._id}`}>
                <Button variant="ghost">View Details</Button>
              </Link>
              <Link to={`/booking?roomId=${room._id}`}>
                <Button>Book Now</Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Rooms;
