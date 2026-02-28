import { useEffect, useState } from "react";
import Seo from "../../components/Seo";
import Button from "../../components/ui/Button";
import api from "../../services/api";

function ManageInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [updatingId, setUpdatingId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadInquiries = async () => {
    try {
      setLoading(true);
      setError("");
      const { data } = await api.get("/inquiries");
      setInquiries(data);
    } catch {
      setInquiries([]);
      setError("Unable to load inquiries.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInquiries();
  }, []);

  const updateStatus = async (id, status) => {
    setUpdatingId(id);
    try {
      await api.put(`/inquiries/${id}`, { status });
      loadInquiries();
    } catch {
      // no-op
    } finally {
      setUpdatingId("");
    }
  };

  const deleteInquiry = async (id) => {
    if (!window.confirm("Delete this inquiry?")) return;
    setUpdatingId(id);
    try {
      await api.delete(`/inquiries/${id}`);
      loadInquiries();
    } catch {
      // no-op
    } finally {
      setUpdatingId("");
    }
  };

  return (
    <section className="section-shell py-10">
      <Seo title="Manage Inquiries" description="View and manage incoming business inquiries." />
      <h1 className="font-display text-4xl font-extrabold text-pearl">Manage Inquiries</h1>

      <div className="mt-8 space-y-4">
        {loading && <p className="text-sm text-mist">Loading inquiries...</p>}
        {error && <p className="text-sm text-red-300">{error}</p>}
        {inquiries.map((inquiry) => (
          <div key={inquiry._id} className="glass-panel p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-pearl">{inquiry.name}</p>
                <p className="text-xs text-mist">{inquiry.email} · {inquiry.phone}</p>
                <p className="mt-1 text-xs text-gold">
                  {inquiry.serviceId?.title ? `Service: ${inquiry.serviceId.title}` : "General inquiry"}
                </p>
              </div>
              <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                {inquiry.status.replace("_", " ")}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-mist">{inquiry.message}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                ["new", "Mark New"],
                ["in_progress", "Mark In Progress"],
                ["resolved", "Mark Resolved"],
              ].map(([statusValue, label]) => (
                <Button
                  key={statusValue}
                  variant="ghost"
                  disabled={updatingId === inquiry._id || inquiry.status === statusValue}
                  onClick={() => updateStatus(inquiry._id, statusValue)}
                >
                  {label}
                </Button>
              ))}
              <Button variant="slate" disabled={updatingId === inquiry._id} onClick={() => deleteInquiry(inquiry._id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
        {!loading && !inquiries.length && !error && <p className="text-sm text-mist">No inquiries found.</p>}
      </div>
    </section>
  );
}

export default ManageInquiries;
