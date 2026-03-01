import { useEffect, useState } from "react";
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

function Navbar() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      animate={{
        backgroundColor: isScrolled ? "rgba(8,18,33,0.92)" : "rgba(8,18,33,0.65)",
        borderColor: isScrolled ? "rgba(233,239,248,0.14)" : "rgba(233,239,248,0.08)",
      }}
      transition={{ duration: 0.25 }}
      style={{ backdropFilter: "blur(14px)", borderBottomWidth: 1 }}
    >
      <nav className="section-shell flex h-20 items-center justify-between gap-3">
        <Link to="/" className="flex flex-col font-display text-lg font-extrabold tracking-wide text-pearl sm:text-xl ">
        {/* imge conflict */}
          <p className="text-[2rem] bg-[url('./selected.png')] ">BAVESTA </p>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition ${
                  isActive ? "text-gold" : "text-pearl/85 hover:text-pearl"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/contact">
            <Button variant="ghost" className="px-4 py-2.5">
              Send Inquiry
            </Button>
          </Link>
          <Link to={isAuthenticated ? "/admin/dashboard" : "/admin/login"}>
            <Button variant="slate" className="px-4 py-2.5">
              Admin
            </Button>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 p-2 text-pearl md:hidden"
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

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            className="border-t border-white/10 bg-midnight/95 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="section-shell py-4">
              <div className="flex flex-col gap-1.5">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-2 text-sm font-semibold tracking-wide ${
                        isActive ? "bg-gold/15 text-gold" : "text-pearl/85 hover:bg-white/5 hover:text-pearl"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
              <div className="mt-4 grid gap-2">
                <Link to="/contact">
                  <Button variant="ghost" className="w-full">
                    Send Inquiry
                  </Button>
                </Link>
                <Link to={isAuthenticated ? "/admin/dashboard" : "/admin/login"}>
                  <Button variant="slate" className="w-full">
                    Admin
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
