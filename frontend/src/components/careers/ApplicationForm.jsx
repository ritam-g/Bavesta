import { useState, useRef, useEffect } from "react";
import SectionHeader from "../company/SectionHeader";
import Button from "../ui/Button";
// TODO: import api from "../../services/api"; — uncomment when backend /careers/apply endpoint is ready

const roleOptions = [
  "Hotel Operations Manager",
  "Front Office Executive",
  "Restaurant Supervisor",
  "Guest Relations Officer",
  "Hospitality Consultant",
  "HR & Payroll Specialist",
  "Sales & Marketing Executive",
  "Training Coordinator",
  "Customer Support Associate",
  "Hospitality Intern",
  "Other",
];

const expOptions = [
  "Fresher (0 years)",
  "0–1 years",
  "1–2 years",
  "2–4 years",
  "4–6 years",
  "6+ years",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  role: "",
  experience: "",
  location: "",
  message: "",
  linkedin: "",
};

function Field({ label, id, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-gray-700">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function ApplicationForm({ selectedRole, onRoleConsumed }) {
  const [form, setForm] = useState(initialForm);
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const fileRef = useRef(null);
  const sectionRef = useRef(null);

  // Pre-fill role when user clicks Apply on a job card
  useEffect(() => {
    if (selectedRole) {
      setForm((prev) => ({ ...prev, role: selectedRole }));
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      onRoleConsumed?.();
    }
  }, [selectedRole, onRoleConsumed]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!form.phone.trim() || !/^[0-9+\-\s]{7,15}$/.test(form.phone))
      e.phone = "Enter a valid phone number.";
    if (!form.role) e.role = "Please select a role.";
    if (!form.experience) e.experience = "Please select your experience level.";
    if (!form.location.trim()) e.location = "Current location is required.";
    if (!resume) e.resume = "Please upload your resume (PDF or DOC/DOCX).";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(file.type)) {
      setErrors((prev) => ({ ...prev, resume: "Only PDF or DOC/DOCX files are accepted." }));
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, resume: "File must be under 5 MB." }));
      return;
    }
    setResume(file);
    setErrors((prev) => ({ ...prev, resume: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    // ─── TODO: Replace mock with real API call when backend is ready ───────────
    // const formData = new FormData();
    // Object.entries(form).forEach(([k, v]) => formData.append(k, v));
    // formData.append("resume", resume);
    // try {
    //   await api.post("/careers/apply", formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });
    // } catch (err) {
    //   setStatus("error");
    //   setErrorMsg(err?.response?.data?.message || "Something went wrong. Please try again.");
    //   return;
    // }
    // ─────────────────────────────────────────────────────────────────────────

    // Mock: simulate network delay, always succeeds
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus("success");
    setForm(initialForm);
    setResume(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const inputCls = (field) =>
    `input-base ${errors[field] ? "border-red-400 focus:border-red-500 focus:ring-red-500" : ""}`;

  if (status === "success") {
    return (
      <section id="apply-form" ref={sectionRef} className="section-shell py-24">
        <div className="mx-auto max-w-lg">
          <div className="glass-panel flex flex-col items-center p-10 text-center">
            {/* Gold check circle */}
            <div
              style={{
                background: "linear-gradient(135deg, #b8924a 0%, #d4af72 100%)",
              }}
              className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full shadow-lg"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 className="font-display text-3xl font-bold text-gray-900">
              Application Submitted!
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-500">
              Thank you for applying to{" "}
              <span className="font-semibold text-gray-800">BAVESTA</span>. Our
              HR team personally reviews every application and will reach out
              within <span className="font-semibold text-gray-800">3–5 business days</span>.
            </p>

            <div
              className="mt-6 w-full rounded-lg px-5 py-4 text-sm"
              style={{
                background: "#fdf8f1",
                border: "1px solid #e9d8b8",
                color: "#8a6630",
              }}
            >
              📧 A confirmation has been logged. Keep an eye on your inbox.
            </div>

            <Button
              className="mt-8 w-full justify-center"
              onClick={() => setStatus("idle")}
            >
              Submit Another Application
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply-form" ref={sectionRef} className="section-shell py-20">
      <SectionHeader
        kicker="Apply Now"
        title="Start Your BAVESTA Journey"
        description="Fill in the details below. Our HR team personally reviews every application."
      />

      <div className="mx-auto mt-12 max-w-2xl">
        <form onSubmit={handleSubmit} noValidate className="glass-panel p-8 sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Name */}
            <Field label="Full Name" id="name" required error={errors.name}>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Arjun Mehta"
                value={form.name}
                onChange={handleChange}
                className={inputCls("name")}
              />
            </Field>

            {/* Email */}
            <Field label="Email Address" id="email" required error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="arjun@email.com"
                value={form.email}
                onChange={handleChange}
                className={inputCls("email")}
              />
            </Field>

            {/* Phone */}
            <Field label="Phone Number" id="phone" required error={errors.phone}>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={handleChange}
                className={inputCls("phone")}
              />
            </Field>

            {/* Location */}
            <Field label="Current Location" id="location" required error={errors.location}>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="Mumbai, India"
                value={form.location}
                onChange={handleChange}
                className={inputCls("location")}
              />
            </Field>

            {/* Role */}
            <Field label="Role Applying For" id="role" required error={errors.role}>
              <select
                id="role"
                name="role"
                value={form.role}
                onChange={handleChange}
                className={inputCls("role")}
              >
                <option value="">Select a role…</option>
                {roleOptions.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </Field>

            {/* Experience */}
            <Field label="Experience Level" id="experience" required error={errors.experience}>
              <select
                id="experience"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                className={inputCls("experience")}
              >
                <option value="">Select experience…</option>
                {expOptions.map((e) => (
                  <option key={e} value={e}>{e}</option>
                ))}
              </select>
            </Field>
          </div>

          {/* Resume Upload */}
          <div className="mt-5">
            <Field label="Resume / CV" id="resume" required error={errors.resume}>
              <label
                htmlFor="resume"
                className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed px-6 py-8 transition-colors ${
                  errors.resume
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 bg-gray-50 hover:border-gray-400"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16v-8m0 0l-3 3m3-3l3 3M6 20h12a2 2 0 002-2V8l-6-6H6a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  {resume ? resume.name : "Click to upload your resume"}
                </p>
                <p className="mt-1 text-xs text-gray-400">PDF, DOC, DOCX — max 5 MB</p>
                <input
                  id="resume"
                  ref={fileRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFile}
                  className="hidden"
                />
              </label>
            </Field>
          </div>

          {/* Cover Letter */}
          <div className="mt-5">
            <Field label="Cover Letter / Short Message" id="message" error={errors.message}>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Briefly describe why you'd be a great fit for BAVESTA…"
                value={form.message}
                onChange={handleChange}
                className={`${inputCls("message")} resize-none`}
              />
            </Field>
          </div>

          {/* LinkedIn (optional) */}
          <div className="mt-5">
            <Field label="LinkedIn Profile URL (optional)" id="linkedin" error={errors.linkedin}>
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

          {/* Error message */}
          {status === "error" && (
            <div className="mt-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3.5">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="text-sm font-semibold text-red-700">Submission Failed</p>
                <p className="mt-0.5 text-xs text-red-600">{errorMsg}</p>
              </div>
            </div>
          )}

          {/* Submit */}
          <div className="mt-8">
            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full justify-center"
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Submitting…
                </span>
              ) : (
                "Submit Application"
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ApplicationForm;
