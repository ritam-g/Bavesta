import { useState, useRef, useEffect } from "react";
import SectionHeader from "../company/SectionHeader";
import Button from "../ui/Button";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  linkedin: "",
  portfolio: "",
  message: "",
};

function Field({ label, id, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block mb-1.5 font-semibold text-gray-700 text-sm">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-red-600 text-xs">{error}</p>}
    </div>
  );
}

function ApplicationForm({ selectedRole, onRoleConsumed }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    if (selectedRole) {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      onRoleConsumed?.();
    }
  }, [selectedRole, onRoleConsumed]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    const subject = encodeURIComponent(`New Job Application - ${form.name}`);
    const body = encodeURIComponent(`
Full Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
LinkedIn: ${form.linkedin}
Portfolio: ${form.portfolio}

Message:
${form.message}
    `.trim());

    const mailtoUrl = `mailto:bavestahospitality@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    
    // Optional: reset form after redirect
    setForm(initialForm);
  };

  const inputCls = (field) =>
    `input-base w-full rounded-lg border px-4 py-2 outline-none transition-all ${
      errors[field] ? "border-red-400 focus:border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-gray-900"
    }`;

  return (
    <section id="apply-form" ref={sectionRef} className="py-20 section-shell">
      <SectionHeader
        kicker="Apply Now"
        title="Start Your BAVESTA Journey"
        description="Fill in the details below. Our HR team personally reviews every application."
      />

      <div className="mx-auto mt-12 max-w-2xl">
        <form onSubmit={handleSubmit} noValidate className="bg-white shadow-sm p-8 sm:p-10 border rounded-2xl glass-panel">
          <div className="gap-5 grid sm:grid-cols-2">
            
            <Field label="Full Name" id="name" required error={errors.name}>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Arjun Mehta"
                value={form.name}
                onChange={handleChange}
                className={inputCls("name")}
              />
            </Field>

            <Field label="Email Address" id="email" required error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="arjun@email.com"
                value={form.email}
                onChange={handleChange}
                className={inputCls("email")}
              />
            </Field>

            <Field label="Phone Number" id="phone" required error={errors.phone}>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={handleChange}
                className={inputCls("phone")}
              />
            </Field>

            <Field label="LinkedIn Profile URL" id="linkedin" error={errors.linkedin}>
              <input
                id="linkedin"
                name="linkedin"
                type="url"
                placeholder="https://linkedin.com/in/yourprofile"
                value={form.linkedin}
                onChange={handleChange}
                className={inputCls("linkedin")}
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Portfolio URL" id="portfolio" error={errors.portfolio}>
              <input
                id="portfolio"
                name="portfolio"
                type="url"
                placeholder="https://yourportfolio.com"
                value={form.portfolio}
                onChange={handleChange}
                className={inputCls("portfolio")}
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Cover Letter / Message" id="message" error={errors.message}>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Briefly describe why you'd be a great fit for BAVESTA…"
                value={form.message}
                onChange={handleChange}
                className={`${inputCls("message")} resize-y`}
              />
            </Field>
          </div>

          <div className="mt-8">
            <Button type="submit" className="justify-center w-full">
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ApplicationForm;
