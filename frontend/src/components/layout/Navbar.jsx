import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

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

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/booking">
            <Button>Book Stay</Button>
          </Link>
          <Link to={isAuthenticated ? "/admin/dashboard" : "/admin/login"}>
            <Button variant="ghost" className="text-sm">
              Admin
            </Button>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-sand/70 bg-white/70 p-2 text-espresso md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div id="mobile-nav" className="border-t border-sand/60 bg-cream/98 md:hidden">
          <div className="section-shell py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide ${
                      isActive ? "bg-gold/15 text-gold" : "text-espresso hover:bg-sand/25"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-4 grid gap-2">
              <Link to="/booking">
                <Button className="w-full">Book Stay</Button>
              </Link>
              <Link to={isAuthenticated ? "/admin/dashboard" : "/admin/login"}>
                <Button variant="ghost" className="w-full">
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
