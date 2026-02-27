import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "../ui/Button";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/rooms", label: "Rooms" },
  { path: "/restaurant", label: "Restaurant" },
  { path: "/contact", label: "Contact" },
];

function Navbar() {
  const { isAuthenticated } = useAuth();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sand/50 bg-cream/95 backdrop-blur-md">
      <nav className="section-shell flex h-20 items-center justify-between gap-4">
        <Link to="/" className="font-display text-xl font-bold text-espresso sm:text-2xl">
          Bavesta
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-wide transition ${isActive ? "text-gold" : "text-espresso hover:text-cocoa"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/booking" className="hidden sm:block">
            <Button>Book Stay</Button>
          </Link>
          <Link to={isAuthenticated ? "/admin/dashboard" : "/admin/login"}>
            <Button variant="ghost" className="text-xs sm:text-sm">
              Admin
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
