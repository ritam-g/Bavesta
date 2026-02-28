import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import api from "../../services/api";

function InquiryForm({ serviceId = "", heading = "Send an Inquiry", compact = false, defaultMessage = "" }) {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    serviceId,
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: "", error: "" });

  useEffect(() => {
    setForm((prev) => ({ ...prev, serviceId }));
  }, [serviceId]);

  useEffect(() => {
    if (!defaultMessage) return;
    setForm((prev) => ({
      ...prev,
      message: prev.message || defaultMessage,
    }));
  }, [defaultMessage]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await api.get("/services");
        setServices(data);
      } catch {
        setServices([]);
      }
    };

    fetchServices();
  }, []);

  const selectedService = useMemo(
    () => services.find((service) => service._id === form.serviceId),
    [services, form.serviceId],
  );

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Enter a valid email";
    if (form.phone.trim().length < 7) return "Enter a valid phone number";
    if (form.message.trim().length < 10) return "Message must be at least 10 characters";
    return "";
  };

  const submit = async (event) => {
    event.preventDefault();
    const validationMessage = validate();

    if (validationMessage) {
      setStatus({ loading: false, success: "", error: validationMessage });
      return;
    }

    setStatus({ loading: true, success: "", error: "" });

    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        serviceId: form.serviceId || undefined,
        message: form.message.trim(),
      };

      const { data } = await api.post("/inquiries", payload);
      setStatus({ loading: false, success: data.message || "Inquiry submitted successfully", error: "" });
      setForm((prev) => ({
        ...prev,
        name: "",
        email: "",
        phone: "",
        message: "",
      }));
    } catch (error) {
      setStatus({
        loading: false,
        success: "",
        error: error.response?.data?.message || "Unable to submit inquiry at the moment",
      });
    }
  };

  const fieldMotion = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.35 },
    transition: { duration: 0.35, ease: "easeOut" },
  };

  return (
    <form className={`glass-panel ${compact ? "p-6" : "p-7 sm:p-8"}`} onSubmit={submit}>
      <h3 className="font-display text-2xl font-bold text-pearl">{heading}</h3>
      <p className="mt-2 text-sm text-mist">Tell us your business needs and our team will reach out with a tailored plan.</p>

      <div className="mt-6 space-y-3">
        <motion.div {...fieldMotion}>
          <input
            className="input-base"
            name="name"
            placeholder="Your full name"
            value={form.name}
            onChange={onChange}
            required
          />
        </motion.div>

        <motion.div {...fieldMotion} transition={{ ...fieldMotion.transition, delay: 0.03 }}>
          <input
            className="input-base"
            type="email"
            name="email"
            placeholder="Work email"
            value={form.email}
            onChange={onChange}
            required
          />
        </motion.div>

        <motion.div {...fieldMotion} transition={{ ...fieldMotion.transition, delay: 0.06 }}>
          <input
            className="input-base"
            name="phone"
            placeholder="Phone number"
            value={form.phone}
            onChange={onChange}
            required
          />
        </motion.div>

        <motion.div {...fieldMotion} transition={{ ...fieldMotion.transition, delay: 0.09 }}>
          <select
            className="input-base"
            name="serviceId"
            value={form.serviceId}
            onChange={onChange}
            disabled={Boolean(serviceId)}
          >
            <option value="">General inquiry</option>
            {services.map((service) => (
              <option key={service._id} value={service._id}>
                {service.title}
              </option>
            ))}
          </select>
        </motion.div>

        {selectedService && (
          <p className="rounded-lg border border-gold/25 bg-gold/10 px-3 py-2 text-xs text-gold">
            Inquiry linked to: {selectedService.title}
          </p>
        )}

        <motion.div {...fieldMotion} transition={{ ...fieldMotion.transition, delay: 0.12 }}>
          <textarea
            className="input-base min-h-28"
            name="message"
            placeholder="How can we support your hospitality operation?"
            value={form.message}
            onChange={onChange}
            required
          />
        </motion.div>

        <Button type="submit" className="w-full" disabled={status.loading}>
          {status.loading ? "Submitting..." : "Submit Inquiry"}
        </Button>

        {status.success && <p className="text-sm text-green-300">{status.success}</p>}
        {status.error && <p className="text-sm text-red-300">{status.error}</p>}
      </div>
    </form>
  );
}

export default InquiryForm;
