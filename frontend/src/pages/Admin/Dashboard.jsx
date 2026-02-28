import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../../components/Seo";
import Button from "../../components/ui/Button";
import { useAuth } from "../../context/AuthContext";
import api from "../../services/api";

function Dashboard() {
  const { user, logout } = useAuth();
  const [services, setServices] = useState([]);
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [serviceRes, inquiryRes] = await Promise.all([api.get("/services"), api.get("/inquiries")]);
        setServices(serviceRes.data);
        setInquiries(inquiryRes.data);
      } catch {
        setServices([]);
        setInquiries([]);
      }
    };

    loadData();
  }, []);

  const stats = useMemo(() => {
    const newCount = inquiries.filter((i) => i.status === "new").length;
    const progressCount = inquiries.filter((i) => i.status === "in_progress").length;
    const resolvedCount = inquiries.filter((i) => i.status === "resolved").length;

    return [
      ["Services", services.length],
      ["New Inquiries", newCount],
      ["In Progress", progressCount],
      ["Resolved", resolvedCount],
    ];
  }, [services, inquiries]);

  return (
    <section className="section-shell py-10">
      <Seo title="Admin Dashboard" description="Manage services and business inquiries." />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-4xl font-extrabold text-pearl">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-mist">Signed in as {user?.name || "Admin"}</p>
        </div>
        <Button variant="ghost" onClick={logout}>
          Logout
        </Button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([label, value]) => (
          <div key={label} className="glass-panel p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mist">{label}</p>
            <p className="mt-2 font-display text-4xl font-extrabold text-gold">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/admin/services">
          <Button>Manage Services</Button>
        </Link>
        <Link to="/admin/inquiries">
          <Button variant="slate">Manage Inquiries</Button>
        </Link>
      </div>

      <div className="mt-8 glass-panel p-6">
        <h2 className="font-display text-2xl font-bold text-pearl">Recent Inquiries</h2>
        <div className="mt-4 space-y-3">
          {inquiries.slice(0, 5).map((inquiry) => (
            <div key={inquiry._id} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm font-semibold text-pearl">{inquiry.name}</p>
              <p className="text-xs text-mist">{inquiry.email} · {inquiry.phone}</p>
              <p className="mt-2 text-sm text-mist">{inquiry.message}</p>
            </div>
          ))}
          {!inquiries.length && <p className="text-sm text-mist">No inquiries yet.</p>}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
