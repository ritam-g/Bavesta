import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../../components/Seo";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";

function Dashboard() {
  const { logout, user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [bookingRes, reservationRes, messageRes, roomRes] = await Promise.all([
          api.get("/bookings"),
          api.get("/reservations"),
          api.get("/contact"),
          api.get("/rooms"),
        ]);

        setBookings(bookingRes.data);
        setReservations(reservationRes.data);
        setMessages(messageRes.data);
        setRooms(roomRes.data);
      } catch {
        setBookings([]);
        setReservations([]);
        setMessages([]);
        setRooms([]);
      }
    };

    fetchAll();
  }, []);

  const stats = useMemo(
    () => [
      ["Rooms", rooms.length],
      ["Bookings", bookings.length],
      ["Reservations", reservations.length],
      ["Messages", messages.length],
    ],
    [rooms.length, bookings.length, reservations.length, messages.length],
  );

  return (
    <section className="section-shell py-12">
      <Seo title="Admin Dashboard" description="Manage hotel and restaurant operations." />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-4xl text-cocoa">Dashboard</h1>
          <p className="mt-1 text-sm text-espresso/75">Welcome, {user?.name || "Admin"}</p>
        </div>
        <Button variant="dark" onClick={logout}>
          Logout
        </Button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([label, value]) => (
          <Card key={label}>
            <p className="text-sm uppercase tracking-wider text-espresso/70">{label}</p>
            <p className="mt-2 font-display text-4xl text-gold">{value}</p>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/admin/rooms">
          <Button>Manage Rooms</Button>
        </Link>
        <Link to="/admin/bookings">
          <Button variant="ghost">Manage Bookings</Button>
        </Link>
        <Link to="/admin/reservations">
          <Button variant="ghost">Manage Reservations</Button>
        </Link>
      </div>

      <Card className="mt-8">
        <h2 className="font-display text-2xl text-cocoa">Recent Contact Messages</h2>
        <div className="mt-4 space-y-3">
          {messages.slice(0, 5).map((message) => (
            <div key={message._id} className="rounded-lg border border-sand/60 p-3">
              <p className="text-sm font-semibold text-cocoa">{message.name} ({message.email})</p>
              <p className="mt-1 text-sm text-espresso/80">{message.message}</p>
            </div>
          ))}
          {messages.length === 0 && <p className="text-sm text-espresso/70">No inquiries yet.</p>}
        </div>
      </Card>
    </section>
  );
}

export default Dashboard;
