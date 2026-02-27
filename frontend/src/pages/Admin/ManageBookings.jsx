import { useEffect, useState } from "react";
import Seo from "../../components/Seo";
import Card from "../../components/ui/Card";
import api from "../../services/api";

function ManageBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data } = await api.get("/bookings");
        setBookings(data);
      } catch {
        setBookings([]);
      }
    };

    fetchBookings();
  }, []);

  return (
    <section className="section-shell py-12">
      <Seo title="Manage Bookings" description="Admin room booking management." />
      <h1 className="font-display text-4xl text-cocoa">Manage Bookings</h1>
      <div className="mt-8 space-y-4">
        {bookings.map((booking) => (
          <Card key={booking._id}>
            <h2 className="font-semibold text-cocoa">{booking.customerName}</h2>
            <p className="text-sm text-espresso/75">{booking.email} · {booking.phone}</p>
            <p className="mt-2 text-sm text-espresso/75">
              Room: {booking.roomId?.name || "N/A"} ({booking.roomId?.type || ""})
            </p>
            <p className="text-sm text-espresso/75">
              {new Date(booking.checkInDate).toLocaleDateString()} - {new Date(booking.checkOutDate).toLocaleDateString()} · Guests: {booking.guests}
            </p>
            <p className="mt-2 text-xs uppercase tracking-wider text-gold">Status: {booking.status}</p>
          </Card>
        ))}
        {bookings.length === 0 && <p className="text-sm text-espresso/70">No bookings found.</p>}
      </div>
    </section>
  );
}

export default ManageBookings;
