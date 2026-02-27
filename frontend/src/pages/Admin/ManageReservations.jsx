import { useEffect, useState } from "react";
import Seo from "../../components/Seo";
import Card from "../../components/ui/Card";
import api from "../../services/api";

function ManageReservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const { data } = await api.get("/reservations");
        setReservations(data);
      } catch {
        setReservations([]);
      }
    };

    fetchReservations();
  }, []);

  return (
    <section className="section-shell py-12">
      <Seo title="Manage Reservations" description="Admin table reservation management." />
      <h1 className="font-display text-4xl text-cocoa">Manage Reservations</h1>
      <div className="mt-8 space-y-4">
        {reservations.map((reservation) => (
          <Card key={reservation._id}>
            <h2 className="font-semibold text-cocoa">{reservation.name}</h2>
            <p className="text-sm text-espresso/75">{reservation.email} · {reservation.phone}</p>
            <p className="mt-2 text-sm text-espresso/75">
              {new Date(reservation.date).toLocaleDateString()} at {reservation.time} · Guests: {reservation.numberOfGuests}
            </p>
            {reservation.specialRequest && (
              <p className="mt-2 text-sm text-espresso/70">Special request: {reservation.specialRequest}</p>
            )}
            <p className="mt-2 text-xs uppercase tracking-wider text-gold">Status: {reservation.status}</p>
          </Card>
        ))}
        {reservations.length === 0 && <p className="text-sm text-espresso/70">No reservations found.</p>}
      </div>
    </section>
  );
}

export default ManageReservations;
