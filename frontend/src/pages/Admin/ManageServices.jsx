import { useEffect, useState } from "react";
import Seo from "../../components/Seo";
import Button from "../../components/ui/Button";
import api from "../../services/api";

const initialForm = {
  title: "",
  category: "Hospitality Services",
  description: "",
  benefits: "",
};

function ManageServices() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState("");
  const [status, setStatus] = useState({ loading: false, success: "", error: "" });
  const [loadingList, setLoadingList] = useState(true);
  const [listError, setListError] = useState("");

  const loadServices = async () => {
    try {
      setLoadingList(true);
      setListError("");
      const { data } = await api.get("/services");
      setServices(data);
    } catch {
      setServices([]);
      setListError("Unable to load services.");
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setForm(initialForm);
    setEditingId("");
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    const payload = {
      title: form.title.trim(),
      category: form.category.trim(),
      description: form.description.trim(),
      benefits: form.benefits
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    };

    try {
      if (editingId) {
        await api.put(`/services/${editingId}`, payload);
        setStatus({ loading: false, success: "Service updated", error: "" });
      } else {
        await api.post("/services", payload);
        setStatus({ loading: false, success: "Service created", error: "" });
      }
      reset();
      loadServices();
    } catch (error) {
      setStatus({ loading: false, success: "", error: error.response?.data?.message || "Unable to save service" });
    }
  };

  const startEdit = (service) => {
    setEditingId(service._id);
    setForm({
      title: service.title,
      category: service.category,
      description: service.description,
      benefits: (service.benefits || []).join(", "),
    });
  };

  const deleteService = async (id) => {
    if (!window.confirm("Delete this service?")) return;
    try {
      await api.delete(`/services/${id}`);
      loadServices();
    } catch {
      // no-op
    }
  };

  return (
    <section className="section-shell py-10">
      <Seo title="Manage Services" description="Create, update and delete hospitality services." />
      <h1 className="font-display text-4xl font-extrabold text-pearl">Manage Services</h1>

      <form className="glass-panel mt-7 grid gap-3 p-6" onSubmit={submit}>
        <input
          className="input-base"
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="Service title"
          required
        />
        <input
          className="input-base"
          name="category"
          value={form.category}
          onChange={onChange}
          placeholder="Category"
          required
        />
        <textarea
          className="input-base min-h-24"
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder="Description"
          required
        />
        <input
          className="input-base"
          name="benefits"
          value={form.benefits}
          onChange={onChange}
          placeholder="Benefits (comma separated)"
          required
        />

        <div className="flex flex-wrap gap-3">
          <Button type="submit" disabled={status.loading}>
            {status.loading ? "Saving..." : editingId ? "Update Service" : "Add Service"}
          </Button>
          {editingId && (
            <Button type="button" variant="slate" onClick={reset}>
              Cancel Edit
            </Button>
          )}
        </div>

        {status.success && <p className="text-sm text-green-300">{status.success}</p>}
        {status.error && <p className="text-sm text-red-300">{status.error}</p>}
      </form>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {loadingList && <p className="text-sm text-mist">Loading services...</p>}
        {listError && <p className="text-sm text-red-300">{listError}</p>}
        {services.map((service) => (
          <div key={service._id} className="glass-panel p-6">
            <h2 className="font-display text-2xl font-bold text-pearl">{service.title}</h2>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold">{service.category}</p>
            <p className="mt-3 text-sm text-mist">{service.description}</p>
            <div className="mt-5 flex gap-3">
              <Button variant="ghost" onClick={() => startEdit(service)}>
                Edit
              </Button>
              <Button variant="slate" onClick={() => deleteService(service._id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
        {!loadingList && !services.length && !listError && (
          <p className="text-sm text-mist">No services found.</p>
        )}
      </div>
    </section>
  );
}

export default ManageServices;
