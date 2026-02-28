import { Link } from "react-router-dom";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM2.5 8.8h5v12.7h-5V8.8Zm8.1 0h4.8v1.8h.1c.7-1.3 2.3-2.2 4.7-2.2 5 0 5.9 3.3 5.9 7.6v5.5h-5v-4.9c0-2.3 0-5.3-3.2-5.3-3.2 0-3.7 2.5-3.7 5.1v5.1h-5V8.8Z" />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.7.3 1.2.6 1.8 1.2.5.5.9 1.1 1.2 1.8.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.3.7-.6 1.2-1.2 1.8-.5.5-1.1.9-1.8 1.2-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.7-.3-1.2-.6-1.8-1.2-.5-.5-.9-1.1-1.2-1.8-.2-.5-.4-1.3-.5-2.5-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.3-.7.6-1.2 1.2-1.8.5-.5 1.1-.9 1.8-1.2.5-.2 1.3-.4 2.5-.5 1.3-.1 1.7-.1 4.9-.1Zm0 4.4a5.4 5.4 0 1 0 0 10.8 5.4 5.4 0 0 0 0-10.8Zm0 8.9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm6.9-9.1a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0Z" />
    ),
  },
  {
    name: "X",
    href: "https://x.com",
    icon: (
      <path d="M18.9 2h3.7l-8.1 9.2L24 22h-7.5l-5.9-7.3L4.2 22H.5l8.7-9.9L0 2h7.7l5.3 6.7L18.9 2Zm-1.3 17.8h2.1L6.6 4.1H4.3l13.3 15.7Z" />
    ),
  },
];

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
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Quick Links</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-mist">
            <Link to="/about" className="hover:text-pearl">
              About
            </Link>
            <Link to="/rooms" className="hover:text-pearl">
              Rooms
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
            <p>128 Westlake Corporate Tower, New York, NY 10019</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Social</h4>
          <div className="mt-3 flex items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-mist transition hover:border-gold/60 hover:text-gold"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  {item.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-mist/80">
        © {new Date().getFullYear()} Bavesta Hospitality Services. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
