import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Seo from "../../components/Seo";
import Button from "../../components/ui/Button";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      setError(err.response?.data?.message || "Unable to login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-shell flex min-h-screen items-center justify-center py-12">
      <Seo title="Admin Login" description="Secure admin login for Bavesta operations panel." />
      <div className="glass-panel w-full max-w-md p-8">
        <h1 className="font-display text-3xl font-extrabold text-pearl">Admin Login</h1>
        <p className="mt-2 text-sm text-mist">Access service and inquiry management tools.</p>

        <form className="mt-6 space-y-3" onSubmit={submit}>
          <input
            className="input-base"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Admin email"
            required
          />
          <input
            className="input-base"
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder="Password"
            required
          />
          {error && <p className="text-sm text-red-300">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Login;
