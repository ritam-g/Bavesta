import { useState } from "react";
import Seo from "../components/Seo";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import api from "../services/api";

const menu = {
  Starters: ["Roasted Pumpkin Soup", "Truffle Arancini", "Seared Scallops"],
  Mains: ["Herb-Crusted Salmon", "Braised Lamb Shoulder", "Wild Mushroom Risotto"],
  Desserts: ["Saffron Creme Brulee", "Chocolate Opera Cake", "Citrus Panna Cotta"],
};

function Restaurant() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    numberOfGuests: 2,
    specialRequest: "",
  });
  const [status, setStatus] = useState({ loading: false, message: "", error: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitReservation = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, message: "", error: "" });

    try {
      const { data } = await api.post("/reservations", form);
      setStatus({ loading: false, message: data.message, error: "" });
      setForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        numberOfGuests: 2,
        specialRequest: "",
      });
    } catch (err) {
      setStatus({
        loading: false,
        message: "",
        error: err.response?.data?.message || "Unable to reserve at the moment.",
      });
    }
  };

  return (
    <section className="section-shell py-16">
      <Seo
        title="Restaurant"
        description="Explore signature dishes and reserve your table online at Grand Aurelia Restaurant."
      />
      <h1 className="font-display text-4xl text-cocoa">Restaurant Experience</h1>
      <p className="mt-3 max-w-2xl text-espresso/75">
        Seasonal ingredients, expressive flavors, and an intimate dining ambiance.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="grid gap-5">
          {Object.entries(menu).map(([category, items]) => (
            <Card key={category}>
              <h2 className="font-display text-2xl text-cocoa">{category}</h2>
              <ul className="mt-3 space-y-2 text-sm text-espresso/80">
                {items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <Card>
          <h2 className="font-display text-2xl text-cocoa">Reserve A Table</h2>
          <form className="mt-4 space-y-3" onSubmit={submitReservation}>
            <input name="name" placeholder="Full name" className="input-base" value={form.name} onChange={onChange} required />
            <input name="email" type="email" placeholder="Email" className="input-base" value={form.email} onChange={onChange} required />
            <input name="phone" placeholder="Phone" className="input-base" value={form.phone} onChange={onChange} required />
            <div className="grid gap-3 sm:grid-cols-2">
              <input name="date" type="date" className="input-base" value={form.date} onChange={onChange} required />
              <input name="time" type="time" className="input-base" value={form.time} onChange={onChange} required />
            </div>
            <input
              name="numberOfGuests"
              type="number"
              min="1"
              className="input-base"
              value={form.numberOfGuests}
              onChange={onChange}
              required
            />
            <textarea
              name="specialRequest"
              placeholder="Special request"
              className="input-base min-h-24"
              value={form.specialRequest}
              onChange={onChange}
            />
            <Button type="submit" disabled={status.loading} className="w-full">
              {status.loading ? "Submitting..." : "Reserve Table"}
            </Button>
            {status.message && <p className="text-sm text-green-700">{status.message}</p>}
            {status.error && <p className="text-sm text-red-700">{status.error}</p>}
          </form>
        </Card>
      </div>
    </section>
  );
}

export default Restaurant;
