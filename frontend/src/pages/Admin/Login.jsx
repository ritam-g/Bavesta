import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Seo from "../../components/Seo";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(form.email, form.password);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-shell flex min-h-screen items-center justify-center py-12">
      <Seo title="Admin Login" description="Secure admin login portal." />
      <Card className="w-full max-w-md">
        <h1 className="font-display text-3xl text-cocoa">Admin Login</h1>
        <p className="mt-2 text-sm text-espresso/75">Sign in to manage rooms, bookings, and reservations.</p>

        <form className="mt-6 space-y-4" onSubmit={submit}>
          <input
            className="input-base"
            name="email"
            type="email"
            placeholder="Admin email"
            value={form.email}
            onChange={onChange}
            required
          />
          <input
            className="input-base"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={onChange}
            required
          />

          {error && <p className="text-sm text-red-700">{error}</p>}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </Card>
    </section>
  );
}

export default Login;
