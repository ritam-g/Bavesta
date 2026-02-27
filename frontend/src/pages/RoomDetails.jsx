import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import Button from "../components/ui/Button";
import api from "../services/api";

function RoomDetails() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const { data } = await api.get(`/rooms/${id}`);
        setRoom(data);
      } catch (err) {
        setError(err.response?.data?.message || "Room not found.");
      }
    };

    fetchRoom();
  }, [id]);

  if (error) {
    return (
      <section className="section-shell py-16">
        <p className="text-red-700">{error}</p>
      </section>
    );
  }

  if (!room) {
    return (
      <section className="section-shell py-16">
        <p>Loading room details...</p>
      </section>
    );
  }

  const imageBase = (import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api").replace("/api", "");

  return (
    <section className="section-shell py-16">
      <Seo title={room.name} description={room.description} />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="grid gap-4">
          {(room.images?.length ? room.images : ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900"]).map((src, idx) => (
            <img
              key={`${src}-${idx}`}
              src={src.startsWith("/") ? `${imageBase}${src}` : src}
              alt={`${room.name} ${idx + 1}`}
              className="h-64 w-full rounded-xl object-cover"
            />
          ))}
        </div>
        <div>
          <h1 className="font-display text-4xl text-cocoa">{room.name}</h1>
          <p className="mt-2 text-sm uppercase tracking-wider text-gold">{room.type}</p>
          <p className="mt-4 text-espresso/80">{room.description}</p>
          <p className="mt-4 font-semibold text-cocoa">Capacity: {room.capacity} guests</p>
          <p className="mt-2 text-lg font-bold text-gold">${room.pricePerNight} / night</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {(room.amenities || []).map((amenity) => (
              <span key={amenity} className="rounded-full bg-sand/35 px-4 py-1 text-xs font-semibold text-cocoa">
                {amenity}
              </span>
            ))}
          </div>
          <Link to={`/booking?roomId=${room._id}`} className="mt-8 inline-block">
            <Button>Book This Room</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RoomDetails;
