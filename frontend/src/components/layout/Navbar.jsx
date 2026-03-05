import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "../ui/Button";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/rooms", label: "Rooms" },
  { path: "/services", label: "Services" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const quickSearchFields = [
  {
    label: "Services",
    value: "Choose Service",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="3.5" width="16" height="17" rx="2.8" />
        <path d="M8 7.5h8M8 11.5h8M8 15.5h5" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Choose Location",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Date",
    value: "Select Dates",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="16" rx="2.8" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </svg>
    ),
  },
];

const serviceCategories = [
  "Recruitment & Placement",
  "Payroll & Compliance",
  "Hospitality Consulting",
  "Guest Management",
  "Hotel Sales & Business Development",
  "External Training Programs",
  "Hotel Operations Management",
  "Companionship & Social Support Services",
];

function CategoryIcon({ index }) {
  const icons = [
    <path key="1" d="M5 19v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2M9 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />,
    <path key="2" d="M4 13h16M7 10v6m10-6v6M4 19h16M6 7h12" />,
    <path key="3" d="M3 19h18M12 3l8 8h-4v8H8v-8H4l8-8Z" />,
    <path key="4" d="M4 7h16M4 12h16M4 17h10" />,
    <path key="5" d="m3 14 4-4 4 4 4-4 6 6M3 6h18" />,
    <path key="6" d="M3 12h18M6 8v8m6-8v8m6-8v8" />,
    <path key="7" d="M4 20h16M6 20V8l6-4 6 4v12M9 12h6M9 16h6" />,
    <path key="8" d="M4 18V8l8-4 8 4v10M8 18v-4h8v4" />,
  ];

  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#555b66]" fill="none" stroke="currentColor" strokeWidth="1.7">
      {icons[index % icons.length]}
    </svg>
  );
}

function Navbar() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const activeNavLabel = useMemo(() => {
    const matched = navItems.find((item) => {
      if (item.path === "/") return location.pathname === "/";
      return location.pathname.startsWith(item.path);
    });
    return matched?.label || "Home";
  }, [location.pathname]);

  return (
    <motion.header className="sticky top-0 z-50 border-b border-[#ddd8ce] bg-[#f4f2ed]/95 backdrop-blur-md">
      <nav className="section-shell py-3">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/selected.png"
              alt="BAVESTA logo"
              className="h-12 w-12 rounded-lg border border-[#d9d2c8] bg-white p-0.5 object-cover sm:h-14 sm:w-14"
            />
            <div>
              <p className="font-display text-xl font-semibold leading-none text-[#1d3250] sm:text-[1.8rem]">BAVESTA</p>
              <p className="mt-1 hidden text-[11px] font-medium uppercase tracking-[0.15em] text-[#4d607a] sm:block">Hospitality Services</p>
            </div>
          </Link>

          <div className="ml-2 hidden flex-1 lg:flex">
            <div className="mx-auto flex w-full max-w-4xl items-center rounded-full border border-[#e0dbd1] bg-white p-1.5 shadow-[0_18px_35px_-32px_rgba(20,29,44,0.55)]">
              {quickSearchFields.map((field, index) => (
                <div key={field.label} className="flex flex-1 items-center gap-3 px-4 py-2">
                  <span className="text-[#262f3f]">{field.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-[#727986]">{field.label}</p>
                    <p className="text-2xl font-semibold text-[#1c2432]">{field.value}</p>
                  </div>
                  {index < quickSearchFields.length - 1 ? <span className="ml-auto h-9 w-px bg-[#e1ddd3]" /> : null}
                </div>
              ))}
              <Link
                to="/contact?inquiry=search"
                className="mr-1 inline-flex min-h-[62px] min-w-[150px] items-center justify-center rounded-full bg-[#efeee8] px-8 text-3xl font-semibold text-[#2a3142] transition hover:bg-[#e6e4dd]"
              >
                Search
              </Link>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <span className="hidden rounded-sm border-b-2 border-[#f4b70d] px-2 pb-1 text-3xl font-semibold text-[#542e84] xl:inline">
              {activeNavLabel.toUpperCase()}
            </span>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d6d0c3] bg-white text-[#2a3343] transition hover:bg-[#f8f7f4]"
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>

            <Link
              to={isAuthenticated ? "/admin/dashboard" : "/admin/login"}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d6d0c3] bg-white text-[#2a3343] transition hover:bg-[#f8f7f4]"
              aria-label="Admin"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9">
                <circle cx="12" cy="8" r="3.2" />
                <path d="M5 20a7 7 0 0 1 14 0" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      <div className="border-t border-[#e5e0d4] bg-[#f7f5ef] lg:hidden">
        <div className="section-shell overflow-x-auto py-2.5">
          <div className="flex min-w-max items-center gap-2.5">
            {quickSearchFields.map((field) => (
              <Link
                key={field.label}
                to="/contact?inquiry=search"
                className="flex items-center gap-2 rounded-full border border-[#ddd7cc] bg-white px-4 py-2 text-[#2a3343]"
              >
                <span>{field.icon}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em]">{field.label}</span>
              </Link>
            ))}
            <Link
              to="/contact?inquiry=search"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#efeee8] px-5 text-sm font-semibold text-[#2a3343]"
            >
              Search
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#e5e0d4] bg-[#f4f3ef]">
        <div className="section-shell overflow-x-auto py-2.5">
          <div className="flex min-w-max gap-2 sm:gap-3">
            {serviceCategories.map((category, index) => (
              <Link
                key={category}
                to="/services"
                className="group flex min-w-[170px] flex-col items-center rounded-xl border border-transparent px-3 py-2 text-center transition hover:border-[#dfd5c7] hover:bg-white/65"
              >
                <CategoryIcon index={index} />
                <span className="mt-1.5 text-sm font-medium leading-5 text-[#de7d21] sm:text-base">{category}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="site-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-[#e5e0d4] bg-white"
          >
            <div className="section-shell grid gap-5 py-5 md:grid-cols-[1fr_auto] md:items-center">
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `rounded-xl border px-4 py-3 text-base font-semibold transition ${
                        isActive
                          ? "border-[#f0cd75] bg-[#fff8e8] text-[#53307d]"
                          : "border-[#e4dfd4] text-[#2f3a4b] hover:border-[#d3ccb8] hover:bg-[#f8f7f3]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link to="/contact?inquiry=consultation">
                  <Button variant="accent" className="w-full">
                    Send Inquiry
                  </Button>
                </Link>
                <Link to={isAuthenticated ? "/admin/dashboard" : "/admin/login"}>
                  <Button variant="neutral" className="w-full">
                    {isAuthenticated ? "Admin Dashboard" : "Admin Login"}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
