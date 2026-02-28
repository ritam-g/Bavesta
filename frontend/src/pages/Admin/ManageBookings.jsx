import { useEffect, useMemo, useState } from "react";
import Seo from "../../components/Seo";
import Button from "../../components/ui/Button";
import api from "../../services/api";

function formatDateLabel(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleDateString();
}

function ManageBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState("");

  const loadBookings = async () => {
    try {
      setLoading(true);
      setError("");
      const { data } = await api.get("/bookings");
      setBookings(data);
    } catch {
      setBookings([]);
      setError("Unable to load bookings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const grouped = useMemo(
    () => ({
      hotel: bookings.filter((booking) => booking.bookingType === "hotel_room"),
      restaurant: bookings.filter((booking) => booking.bookingType === "restaurant_table"),
    }),
    [bookings],
  );

  const updateStatus = async (id, status) => {
    setUpdatingId(id);
    try {
      await api.put(`/bookings/${id}/status`, { status });
      await loadBookings();
    } catch {
      // no-op
    } finally {
      setUpdatingId("");
    }
  };

  const deleteBooking = async (id) => {
    if (!window.confirm("Delete this booking?")) return;
    setUpdatingId(id);
    try {
      await api.delete(`/bookings/${id}`);
      await loadBookings();
    } catch {
      // no-op
    } finally {
      setUpdatingId("");
    }
  };

  const renderBookingCard = (booking) => (
    <div key={booking._id} className="glass-panel p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-pearl">{booking.customerName}</p>
          <p className="text-xs text-mist">{booking.email} · {booking.phone}</p>
        </div>
        <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
          {booking.status}
        </span>
      </div>

      {booking.bookingType === "hotel_room" ? (
        <div className="mt-4 space-y-1 text-sm text-mist">
          <p><span className="text-pearl">Room:</span> {booking.roomName}</p>
          <p><span className="text-pearl">Check-in:</span> {formatDateLabel(booking.checkInDate)}</p>
          <p><span className="text-pearl">Check-out:</span> {formatDateLabel(booking.checkOutDate)}</p>
          <p><span className="text-pearl">Guests:</span> {booking.guests}</p>
        </div>
      ) : (
        <div className="mt-4 space-y-1 text-sm text-mist">
          <p><span className="text-pearl">Date:</span> {formatDateLabel(booking.reservationDate)}</p>
          <p><span className="text-pearl">Time:</span> {booking.reservationTime}</p>
          <p><span className="text-pearl">Guests:</span> {booking.guests}</p>
        </div>
      )}

      {booking.specialRequest && (
        <p className="mt-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm text-mist">
          {booking.specialRequest}
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {["pending", "confirmed", "cancelled"].map((status) => (
          <Button
            key={status}
            variant="ghost"
            disabled={updatingId === booking._id || booking.status === status}
            onClick={() => updateStatus(booking._id, status)}
          >
            Mark {status}
          </Button>
        ))}
        <Button variant="slate" disabled={updatingId === booking._id} onClick={() => deleteBooking(booking._id)}>
          Delete
        </Button>
      </div>
    </div>
  );

  return (
    <section className="section-shell py-10">
      <Seo title="Manage Bookings" description="View and manage hotel and restaurant bookings." />
      <h1 className="font-display text-4xl font-extrabold text-pearl">Manage Bookings</h1>

      {loading && <p className="mt-6 text-sm text-mist">Loading bookings...</p>}
      {error && <p className="mt-6 text-sm text-red-300">{error}</p>}

      <div className="mt-8 grid gap-8 xl:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold text-pearl">Hotel Room Bookings</h2>
          <div className="mt-4 space-y-4">
            {grouped.hotel.map(renderBookingCard)}
            {!loading && !grouped.hotel.length && <p className="text-sm text-mist">No hotel bookings found.</p>}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-pearl">Restaurant Reservations</h2>
          <div className="mt-4 space-y-4">
            {grouped.restaurant.map(renderBookingCard)}
            {!loading && !grouped.restaurant.length && <p className="text-sm text-mist">No restaurant reservations found.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManageBookings;
