import { useState } from "react";
import Reveal from "../animations/Reveal";
import SectionHeader from "../company/SectionHeader";

const roles = [
  {
    title: "Hotel Operations Manager",
    dept: "Hotel Operations",
    exp: "3–5 years",
    type: "Full-time",
    desc: "Oversee daily hotel operations ensuring seamless service delivery, team coordination, and guest satisfaction standards.",
  },
  {
    title: "Front Office Executive",
    dept: "Front Office",
    exp: "1–3 years",
    type: "Full-time",
    desc: "Manage guest check-in/check-out, reservations, and front desk operations with a focus on exceptional first impressions.",
  },
  {
    title: "Restaurant Supervisor",
    dept: "Restaurant Staff",
    exp: "2–4 years",
    type: "Full-time",
    desc: "Supervise restaurant floor operations, staff scheduling, and dining experience quality for every guest.",
  },
  {
    title: "Guest Relations Officer",
    dept: "Guest Relations",
    exp: "1–2 years",
    type: "Full-time",
    desc: "Build strong guest relationships, handle special requests, and ensure a premium guest experience throughout their stay.",
  },
  {
    title: "Hospitality Consultant",
    dept: "Consulting",
    exp: "4+ years",
    type: "Contract",
    desc: "Provide strategic advisory to hotel and restaurant clients on operations, compliance, and growth optimization.",
  },
  {
    title: "HR & Payroll Specialist",
    dept: "HR & Payroll",
    exp: "2–4 years",
    type: "Full-time",
    desc: "Manage end-to-end HR operations, payroll processing, compliance, and recruitment for hospitality placements.",
  },
  {
    title: "Sales & Marketing Executive",
    dept: "Sales & Marketing",
    exp: "1–3 years",
    type: "Full-time",
    desc: "Drive business development through B2B outreach, digital campaigns, and hospitality client acquisition.",
  },
  {
    title: "Training Coordinator",
    dept: "Training & Development",
    exp: "2–3 years",
    type: "Full-time",
    desc: "Design and facilitate training programs for hospitality professionals across service, compliance, and operations.",
  },
  {
    title: "Customer Support Associate",
    dept: "Customer Support",
    exp: "0–2 years",
    type: "Full-time",
    desc: "Assist guests and clients with inquiries, service coordination, and issue resolution with a professional demeanor.",
  },
  {
    title: "Hospitality Intern",
    dept: "Internship / Fresher",
    exp: "Fresher",
    type: "Internship",
    desc: "Kickstart your hospitality career with hands-on exposure to operations, guest service, and industry best practices.",
  },
];

const typeColors = {
  "Full-time": "bg-emerald-50 text-emerald-700 border-emerald-200",
  Contract: "bg-blue-50 text-blue-700 border-blue-200",
  Internship: "bg-amber-50 text-amber-700 border-amber-200",
};

function OpenRoles({ onApply }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Full-time", "Contract", "Internship"];
  const filtered =
    activeFilter === "All" ? roles : roles.filter((r) => r.type === activeFilter);

  return (
    <section id="open-roles" className="bg-gray-50 py-20">
      <div className="section-shell">
        <SectionHeader
          kicker="Open Positions"
          title="Find Your Perfect Role"
          description="We're actively hiring across departments. Choose a role that aligns with your skills, passion, and career goals."
        />

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                activeFilter === f
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Role cards grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.05}>
              <div className="group glass-panel flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span
                      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold ${typeColors[role.type]}`}
                    >
                      {role.type}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-gray-900 transition-colors group-hover:text-gray-700">
                      {role.title}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-gray-400">
                      {role.dept}
                    </p>
                  </div>
                </div>

                <p className="mt-4 flex-1 text-sm leading-6 text-gray-500">{role.desc}</p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {role.exp} exp.
                  </span>
                  <button
                    onClick={() => onApply(role.title)}
                    className="rounded-lg border border-gray-200 bg-transparent px-4 py-1.5 text-xs font-semibold text-gray-700 transition-all duration-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                  >
                    Apply Now →
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OpenRoles;
