import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-midnight/90 py-14">
      <div className="section-shell grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-xl font-bold text-pearl">BAVESTA</h3>
          <p className="mt-3 text-sm leading-6 text-mist">
            Premium hospitality services for hotel growth, operations excellence, and guest experience transformation.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Company</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-mist">
            <Link to="/about" className="hover:text-pearl">
              About
            </Link>
            <Link to="/services" className="hover:text-pearl">
              Services
            </Link>
            <Link to="/contact" className="hover:text-pearl">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Reach Us</h4>
          <div className="mt-3 space-y-2 text-sm text-mist">
            <p>+1 (555) 620-9900</p>
            <p>hello@bavesta.com</p>
            <p>Mon - Fri, 9:00 AM to 6:00 PM</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Address</h4>
          <p className="mt-3 text-sm leading-6 text-mist">128 Westlake Corporate Tower, New York, NY 10019</p>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-mist/80">
        © {new Date().getFullYear()} Bavesta Hospitality Services. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
