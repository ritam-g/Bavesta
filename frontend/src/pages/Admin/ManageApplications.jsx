import { useEffect, useState } from "react";
import Seo from "../../components/Seo";
import Button from "../../components/ui/Button";
import api from "../../services/api";

const ALL_ROLES = [
  "All Roles",
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

function ManageApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState("");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [search, setSearch] = useState("");

  const loadApplications = async () => {
    try {
      setLoading(true);
      setError("");
      const { data } = await api.get("/careers/applications");
      setApplications(data);
    } catch {
      setApplications([]);
      setError("Unable to load applications.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApplications();
  }, []);

  const deleteApplication = async (id) => {
    if (!window.confirm("Delete this application permanently?")) return;
    setDeletingId(id);
    try {
      await api.delete(`/careers/${id}`);
      loadApplications();
    } catch {
      // no-op
    } finally {
      setDeletingId("");
    }
  };

  const filtered = applications.filter((app) => {
    const matchesRole = roleFilter === "All Roles" || app.role === roleFilter;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      app.name?.toLowerCase().includes(q) ||
      app.email?.toLowerCase().includes(q) ||
      app.location?.toLowerCase().includes(q);
    return matchesRole && matchesSearch;
  });

  return (
    <section className="section-shell py-10">
      <Seo title="Manage Applications" description="Review and manage career applications." />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-4xl font-extrabold text-pearl">
          Career Applications
        </h1>
        <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
          {applications.length} Total
        </span>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-wrap gap-3">
        <input
          type="text"
          placeholder="Search name, email, location…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-pearl placeholder:text-mist outline-none focus:border-gold/40 sm:w-64"
        />
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-pearl outline-none focus:border-gold/40"
        >
          {ALL_ROLES.map((r) => (
            <option key={r} value={r} className="bg-slate text-pearl">
              {r}
            </option>
          ))}
        </select>
      </div>

      {/* States */}
      {loading && <p className="mt-8 text-sm text-mist">Loading applications…</p>}
      {error && <p className="mt-8 text-sm text-red-300">{error}</p>}
      {!loading && !error && filtered.length === 0 && (
        <p className="mt-8 text-sm text-mist">No applications found.</p>
      )}

      {/* Application cards */}
      <div className="mt-6 space-y-4">
        {filtered.map((app) => (
          <div key={app._id} className="glass-panel p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-pearl">{app.name}</p>
                <p className="text-xs text-mist">
                  {app.email} · {app.phone}
                </p>
                <p className="mt-0.5 text-xs text-mist">{app.location}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                  {app.role}
                </span>
                <span className="text-xs text-mist">{app.experience}</span>
              </div>
            </div>

            {app.message && (
              <p className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm leading-6 text-mist">
                {app.message}
              </p>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-3">
              {/* Resume download */}
              {app.resumeUrl && (
                <a
                  href={app.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold transition hover:bg-gold/20"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Resume
                </a>
              )}
              {app.linkedin && (
                <a
                  href={app.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-mist underline hover:text-pearl transition"
                >
                  LinkedIn Profile
                </a>
              )}
              <div className="ml-auto">
                <Button
                  variant="slate"
                  disabled={deletingId === app._id}
                  onClick={() => deleteApplication(app._id)}
                >
                  {deletingId === app._id ? "Deleting…" : "Delete"}
                </Button>
              </div>
            </div>

            <p className="mt-3 text-xs text-mist">
              Applied: {new Date(app.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ManageApplications;
