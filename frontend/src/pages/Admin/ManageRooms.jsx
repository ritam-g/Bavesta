import { useEffect, useState } from "react";
import Seo from "../../components/Seo";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import api from "../../services/api";

const initialForm = {
  name: "",
  type: "Deluxe",
  pricePerNight: "",
  description: "",
  capacity: "",
  amenities: "",
  available: true,
  images: [],
};

function ManageRooms() {
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState("");
  const [status, setStatus] = useState({ loading: false, message: "", error: "" });

  const loadRooms = async () => {
    try {
      const { data } = await api.get("/rooms");
      setRooms(data);
    } catch {
      setRooms([]);
    }
  };

  useEffect(() => {
    loadRooms();
  }, []);

  const onChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    if (type === "file") {
      setForm((prev) => ({ ...prev, images: Array.from(files || []) }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm(initialForm);
    setEditingId("");
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, message: "", error: "" });

    const payload = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === "images") {
        value.forEach((file) => payload.append("images", file));
      } else {
        payload.append(key, value);
      }
    });

    try {
      if (editingId) {
        await api.put(`/rooms/${editingId}`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setStatus({ loading: false, message: "Room updated.", error: "" });
      } else {
        await api.post("/rooms", payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setStatus({ loading: false, message: "Room created.", error: "" });
      }

      resetForm();
      loadRooms();
    } catch (err) {
      setStatus({
        loading: false,
        message: "",
        error: err.response?.data?.message || "Unable to save room",
      });
    }
  };

  const editRoom = (room) => {
    setEditingId(room._id);
    setForm({
      name: room.name,
      type: room.type,
      pricePerNight: room.pricePerNight,
      description: room.description,
      capacity: room.capacity,
      amenities: (room.amenities || []).join(", "),
      available: room.available,
      images: [],
    });
  };

  const removeRoom = async (roomId) => {
    if (!window.confirm("Delete this room?")) return;

    try {
      await api.delete(`/rooms/${roomId}`);
      loadRooms();
    } catch {
      // no-op
    }
  };

  return (
    <section className="section-shell py-12">
      <Seo title="Manage Rooms" description="Admin room management." />
      <h1 className="font-display text-4xl text-cocoa">Manage Rooms</h1>

      <Card className="mt-6">
        <form className="grid gap-3" onSubmit={submit}>
          <input className="input-base" name="name" placeholder="Room name" value={form.name} onChange={onChange} required />
          <div className="grid gap-3 sm:grid-cols-3">
            <select className="input-base" name="type" value={form.type} onChange={onChange}>
              <option>Deluxe</option>
              <option>Suite</option>
              <option>Standard</option>
            </select>
            <input
              className="input-base"
              name="pricePerNight"
              type="number"
              min="0"
              placeholder="Price per night"
              value={form.pricePerNight}
              onChange={onChange}
              required
            />
            <input
              className="input-base"
              name="capacity"
              type="number"
              min="1"
              placeholder="Capacity"
              value={form.capacity}
              onChange={onChange}
              required
            />
          </div>
          <input
            className="input-base"
            name="amenities"
            placeholder="Amenities comma separated"
            value={form.amenities}
            onChange={onChange}
          />
          <textarea
            className="input-base min-h-28"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={onChange}
            required
          />
          <input className="input-base" type="file" name="images" accept="image/*" multiple onChange={onChange} />
          <label className="flex items-center gap-2 text-sm font-semibold text-cocoa">
            <input type="checkbox" name="available" checked={form.available} onChange={onChange} />
            Available
          </label>
          <div className="flex gap-3">
            <Button type="submit" disabled={status.loading}>
              {status.loading ? "Saving..." : editingId ? "Update Room" : "Add Room"}
            </Button>
            {editingId && (
              <Button type="button" variant="ghost" onClick={resetForm}>
                Cancel Edit
              </Button>
            )}
          </div>
          {status.message && <p className="text-sm text-green-700">{status.message}</p>}
          {status.error && <p className="text-sm text-red-700">{status.error}</p>}
        </form>
      </Card>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {rooms.map((room) => (
          <Card key={room._id}>
            <h2 className="font-display text-2xl text-cocoa">{room.name}</h2>
            <p className="text-sm text-espresso/75">{room.type} · ${room.pricePerNight}/night · cap {room.capacity}</p>
            <div className="mt-4 flex gap-3">
              <Button type="button" variant="ghost" onClick={() => editRoom(room)}>
                Edit
              </Button>
              <Button type="button" variant="dark" onClick={() => removeRoom(room._id)}>
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ManageRooms;
