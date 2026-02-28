import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Button from "../components/ui/Button";
import Reveal from "../components/animations/Reveal";
import api from "../services/api";
import { roomData } from "../data/roomData";

function BookHotel() {
  const [searchParams] = useSearchParams();
  const roomParam = searchParams.get("room") || "";

  const defaultRoom = useMemo(() => roomData.find((room) => room.id === roomParam), [roomParam]);

  const [form, setForm] = useState({
    customerName: "",
    email: "",
    phone: "",
    roomId: defaultRoom?.id || roomData[0]?.id || "",
    checkInDate: "",
    checkOutDate: "",
    guests: 2,
    specialRequest: "",
  });
  const [status, setStatus] = useState({ loading: false, success: "", error: "" });

  useEffect(() => {
    if (!defaultRoom) return;
    setForm((prev) => ({ ...prev, roomId: defaultRoom.id }));
  }, [defaultRoom]);

  const selectedRoom = roomData.find((room) => room.id === form.roomId);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.customerName.trim()) return "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Valid email is required";
    if (form.phone.trim().length < 7) return "Valid phone number is required";

    const checkIn = new Date(form.checkInDate);
    const checkOut = new Date(form.checkOutDate);

    if (Number.isNaN(checkIn.getTime()) || Number.isNaN(checkOut.getTime())) {
      return "Select valid check-in and check-out dates";
    }

    if (checkOut <= checkIn) return "Check-out must be after check-in";

    return "";
  };

  const submit = async (event) => {
    event.preventDefault();
    const validationError = validate();

    if (validationError) {
      setStatus({ loading: false, success: "", error: validationError });
      return;
    }

    if (!selectedRoom) {
      setStatus({ loading: false, success: "", error: "Please select a room" });
      return;
    }

    setStatus({ loading: true, success: "", error: "" });

    try {
      const payload = {
        customerName: form.customerName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        roomId: selectedRoom.id,
        roomName: selectedRoom.name,
        checkInDate: form.checkInDate,
        checkOutDate: form.checkOutDate,
        guests: Number(form.guests),
        specialRequest: form.specialRequest.trim(),
      };

      const { data } = await api.post("/bookings/hotel", payload);
      setStatus({ loading: false, success: data.message || "Booking submitted successfully", error: "" });
      setForm((prev) => ({
        ...prev,
        customerName: "",
        email: "",
        phone: "",
        checkInDate: "",
        checkOutDate: "",
        guests: 2,
        specialRequest: "",
      }));
    } catch (error) {
      setStatus({
        loading: false,
        success: "",
        error: error.response?.data?.message || "Unable to submit booking right now",
      });
    }
  };

  return (
    <section className="section-shell py-16 sm:py-20">
      <Seo title="Book Hotel Room" description="Reserve your premium room with a seamless booking form." />

      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Hotel Booking</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-pearl sm:text-5xl">Book Your Room</h1>
        <p className="mt-4 max-w-3xl text-mist">
          Complete the booking form and our team will confirm your stay details shortly.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <form className="glass-panel p-7 sm:p-8" onSubmit={submit}>
            <div className="grid gap-3">
              <motion.input className="input-base" name="customerName" value={form.customerName} onChange={onChange} placeholder="Full name" required whileFocus={{ scale: 1.005 }} />
              <motion.input className="input-base" type="email" name="email" value={form.email} onChange={onChange} placeholder="Email" required whileFocus={{ scale: 1.005 }} />
              <motion.input className="input-base" name="phone" value={form.phone} onChange={onChange} placeholder="Phone number" required whileFocus={{ scale: 1.005 }} />

              <select className="input-base" name="roomId" value={form.roomId} onChange={onChange} required>
                {roomData.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} (${room.pricePerNight}/night)
                  </option>
                ))}
              </select>

              <div className="grid gap-3 sm:grid-cols-2">
                <input className="input-base" type="date" name="checkInDate" value={form.checkInDate} onChange={onChange} required />
                <input className="input-base" type="date" name="checkOutDate" value={form.checkOutDate} onChange={onChange} required />
              </div>

              <input className="input-base" type="number" min="1" max="12" name="guests" value={form.guests} onChange={onChange} required />

              <textarea className="input-base min-h-24" name="specialRequest" value={form.specialRequest} onChange={onChange} placeholder="Special request (optional)" />

              <Button type="submit" className="w-full" disabled={status.loading}>
                {status.loading ? "Submitting..." : "Confirm Hotel Booking"}
              </Button>

              {status.success && <p className="text-sm text-green-300">{status.success}</p>}
              {status.error && <p className="text-sm text-red-300">{status.error}</p>}
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass-panel p-7">
            <h2 className="font-display text-2xl font-bold text-pearl">Selected Room</h2>
            {selectedRoom ? (
              <>
                <img src={selectedRoom.image} alt={selectedRoom.name} className="mt-5 h-48 w-full rounded-xl object-cover" />
                <h3 className="mt-5 font-display text-2xl text-pearl">{selectedRoom.name}</h3>
                <p className="mt-2 text-sm text-mist">{selectedRoom.shortDescription}</p>
                <p className="mt-4 text-sm font-semibold text-gold">${selectedRoom.pricePerNight}/night</p>
              </>
            ) : (
              <p className="mt-4 text-sm text-mist">Select a room from the booking form.</p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default BookHotel;
