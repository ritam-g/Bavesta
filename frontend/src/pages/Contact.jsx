import { useState } from "react";
import Seo from "../components/Seo";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import api from "../services/api";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, message: "", error: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, message: "", error: "" });

    try {
      const { data } = await api.post("/contact", form);
      setStatus({ loading: false, message: data.message, error: "" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        loading: false,
        message: "",
        error: err.response?.data?.message || "Unable to submit inquiry now.",
      });
    }
  };

  return (
    <section className="section-shell py-16">
      <Seo title="Contact" description="Send inquiries to Grand Aurelia Hotel & Restaurant." />
      <h1 className="font-display text-4xl text-cocoa">Contact Us</h1>
      <p className="mt-3 text-espresso/75">For events, custom bookings, or general inquiries, reach out to our team.</p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="font-display text-2xl">General Contact</h2>
          <p className="mt-3 text-sm text-espresso/75">Phone: +1 (555) 810-8800</p>
          <p className="text-sm text-espresso/75">Email: hello@grandaurelia.com</p>
          <p className="mt-4 text-sm text-espresso/75">Open 24/7 for hotel bookings and concierge support.</p>
        </Card>

        <Card>
          <h2 className="font-display text-2xl">Online Inquiry</h2>
          <form className="mt-4 space-y-3" onSubmit={submit}>
            <input className="input-base" name="name" placeholder="Your name" value={form.name} onChange={onChange} required />
            <input className="input-base" name="email" type="email" placeholder="Your email" value={form.email} onChange={onChange} required />
            <textarea
              className="input-base min-h-32"
              name="message"
              placeholder="Your message"
              value={form.message}
              onChange={onChange}
              required
            />
            <Button type="submit" className="w-full" disabled={status.loading}>
              {status.loading ? "Sending..." : "Send Message"}
            </Button>
            {status.message && <p className="text-sm text-green-700">{status.message}</p>}
            {status.error && <p className="text-sm text-red-700">{status.error}</p>}
          </form>
        </Card>
      </div>
    </section>
  );
}

export default Contact;
