import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Seo from "../components/Seo";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import api from "../services/api";

function Booking() {
  const [searchParams] = useSearchParams();
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState({
    customerName: "",
    email: "",
    phone: "",
    roomId: searchParams.get("roomId") || "",
    checkInDate: "",
    checkOutDate: "",
    guests: 1,
  });
  const [status, setStatus] = useState({ loading: false, message: "", error: "" });

  useEffect(() => {
    const loadRooms = async () => {
      try {
        const { data } = await api.get("/rooms?available=true");
        setRooms(data);
      } catch {
        setRooms([]);
      }
    };

    loadRooms();
  }, []);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, message: "", error: "" });

    try {
      const { data } = await api.post("/bookings", form);
      setStatus({ loading: false, message: data.message, error: "" });
      setForm({
        customerName: "",
        email: "",
        phone: "",
        roomId: searchParams.get("roomId") || "",
        checkInDate: "",
        checkOutDate: "",
        guests: 1,
      });
    } catch (err) {
      setStatus({
        loading: false,
        message: "",
        error: err.response?.data?.message || "Unable to place booking right now.",
      });
    }
  };

  return (
    <section className="section-shell py-16">
      <Seo title="Room Booking" description="Book your room online in a few easy steps." />
      <h1 className="font-display text-4xl text-cocoa">Book Your Stay</h1>
      <p className="mt-3 text-espresso/75">Select your room, stay dates, and guest details.</p>

      <Card className="mt-10 max-w-3xl">
        <form className="grid gap-4" onSubmit={submit}>
          <input name="customerName" className="input-base" placeholder="Full name" value={form.customerName} onChange={onChange} required />
          <input name="email" type="email" className="input-base" placeholder="Email" value={form.email} onChange={onChange} required />
          <input name="phone" className="input-base" placeholder="Phone" value={form.phone} onChange={onChange} required />

          <select name="roomId" className="input-base" value={form.roomId} onChange={onChange} required>
            <option value="">Select room</option>
            {rooms.map((room) => (
              <option key={room._id} value={room._id}>
                {room.name} ({room.type}) - ${room.pricePerNight}/night
              </option>
            ))}
          </select>

          <div className="grid gap-4 sm:grid-cols-2">
            <input name="checkInDate" type="date" className="input-base" value={form.checkInDate} onChange={onChange} required />
            <input name="checkOutDate" type="date" className="input-base" value={form.checkOutDate} onChange={onChange} required />
          </div>

          <input
            name="guests"
            type="number"
            min="1"
            className="input-base"
            value={form.guests}
            onChange={onChange}
            required
          />

          <Button type="submit" className="w-full" disabled={status.loading}>
            {status.loading ? "Submitting..." : "Confirm Booking Request"}
          </Button>

          {status.message && <p className="text-sm text-green-700">{status.message}</p>}
          {status.error && <p className="text-sm text-red-700">{status.error}</p>}
        </form>
      </Card>
    </section>
  );
}

export default Booking;
