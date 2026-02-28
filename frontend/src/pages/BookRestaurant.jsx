import { useState } from "react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Button from "../components/ui/Button";
import Reveal from "../components/animations/Reveal";
import api from "../services/api";

function BookRestaurant() {
  const [form, setForm] = useState({
    customerName: "",
    email: "",
    phone: "",
    reservationDate: "",
    reservationTime: "",
    guests: 2,
    specialRequest: "",
  });
  const [status, setStatus] = useState({ loading: false, success: "", error: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.customerName.trim()) return "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Valid email is required";
    if (form.phone.trim().length < 7) return "Valid phone number is required";
    if (!form.reservationDate) return "Reservation date is required";
    if (!form.reservationTime) return "Reservation time is required";
    return "";
  };

  const submit = async (event) => {
    event.preventDefault();
    const validationError = validate();

    if (validationError) {
      setStatus({ loading: false, success: "", error: validationError });
      return;
    }

    setStatus({ loading: true, success: "", error: "" });

    try {
      const payload = {
        customerName: form.customerName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        reservationDate: form.reservationDate,
        reservationTime: form.reservationTime,
        guests: Number(form.guests),
        specialRequest: form.specialRequest.trim(),
      };

      const { data } = await api.post("/bookings/restaurant", payload);
      setStatus({ loading: false, success: data.message || "Reservation submitted successfully", error: "" });
      setForm({
        customerName: "",
        email: "",
        phone: "",
        reservationDate: "",
        reservationTime: "",
        guests: 2,
        specialRequest: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: "",
        error: error.response?.data?.message || "Unable to submit reservation right now",
      });
    }
  };

  return (
    <section className="section-shell py-16 sm:py-20">
      <Seo title="Reserve Restaurant Table" description="Reserve your premium dining table with our seamless booking form." />

      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Restaurant Reservation</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-pearl sm:text-5xl">Reserve A Table</h1>
        <p className="mt-4 max-w-3xl text-mist">
          Book your dining experience with preferred date and timing. We will confirm your reservation shortly.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <form className="glass-panel p-7 sm:p-8" onSubmit={submit}>
            <div className="grid gap-3">
              <motion.input className="input-base" name="customerName" value={form.customerName} onChange={onChange} placeholder="Full name" required whileFocus={{ scale: 1.005 }} />
              <motion.input className="input-base" type="email" name="email" value={form.email} onChange={onChange} placeholder="Email" required whileFocus={{ scale: 1.005 }} />
              <motion.input className="input-base" name="phone" value={form.phone} onChange={onChange} placeholder="Phone number" required whileFocus={{ scale: 1.005 }} />

              <div className="grid gap-3 sm:grid-cols-2">
                <input className="input-base" type="date" name="reservationDate" value={form.reservationDate} onChange={onChange} required />
                <input className="input-base" type="time" name="reservationTime" value={form.reservationTime} onChange={onChange} required />
              </div>

              <input className="input-base" type="number" min="1" max="20" name="guests" value={form.guests} onChange={onChange} required />

              <textarea className="input-base min-h-24" name="specialRequest" value={form.specialRequest} onChange={onChange} placeholder="Special request (optional)" />

              <Button type="submit" className="w-full" disabled={status.loading}>
                {status.loading ? "Submitting..." : "Confirm Table Reservation"}
              </Button>

              {status.success && <p className="text-sm text-green-300">{status.success}</p>}
              {status.error && <p className="text-sm text-red-300">{status.error}</p>}
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass-panel p-7">
            <h2 className="font-display text-2xl font-bold text-pearl">Dining Experience</h2>
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80"
              alt="Restaurant dining setup"
              className="mt-5 h-48 w-full rounded-xl object-cover"
            />
            <p className="mt-5 text-sm leading-7 text-mist">
              Signature dining with curated menus, elegant ambiance, and personalized table service for every guest.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default BookRestaurant;
