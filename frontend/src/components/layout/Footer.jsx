import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

const serviceLinks = [
  { label: "Recruitment & Placement", to: "/services" },
  { label: "Hospitality Consulting", to: "/services" },
  { label: "Guest Management", to: "/services" },
  { label: "Operations Management", to: "/services" },
];

const moreLinks = [
  { label: "Payroll & Compliance", to: "/services" },
  { label: "Training Programs", to: "/services" },
  { label: "Sales Development", to: "/services" },
  { label: "Companionship Support", to: "/services" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <path d="M6 9h3v9H6zM7.5 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 9h3v1.3c.5-.9 1.5-1.6 3-1.6 2.2 0 3.5 1.4 3.5 4.1V18h-3v-4.3c0-1.2-.4-2-1.5-2s-1.8.8-1.8 2V18h-3V9Z" />
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    icon: <path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v5h3v-5h2.2l.8-3H13V9c0-.6.4-1 1-1Z" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/bavestahospitalityservices",
    icon: (
      <>
        <rect x="4.5" y="4.5" width="15" height="15" rx="4.5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="16.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://www.whatsapp.com",
    icon: <path d="M12 5a7 7 0 0 0-6 10.6L5 20l4.5-1.2A7 7 0 1 0 12 5Zm3.6 9.5c-.1.4-.6.8-1 .9-.3.1-.8.2-2.7-.6-2.3-1-3.8-3.4-3.9-3.6-.1-.2-.9-1.2-.9-2.3 0-1.1.6-1.6.8-1.8.2-.2.5-.2.7-.2h.5c.2 0 .4 0 .6.4.2.5.7 1.7.7 1.8.1.2.1.4 0 .5-.1.2-.1.3-.3.5l-.4.4c-.1.1-.2.2-.1.4.1.2.6 1 1.4 1.6 1 .9 1.8 1.2 2 1.3.2.1.3 0 .5-.1l.6-.7c.2-.2.3-.2.5-.1l1.7.8c.2.1.4.2.5.3.1.2.1.8 0 1.2Z" />,
  },
];

function Footer() {
  return (
    <footer className="mt-6 bg-[#2f3033] text-[#f4f4f4]">
      <div className="section-shell py-14">
        <div className="grid gap-10 xl:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <div className="inline-flex rounded-2xl border border-white/40 p-2">
              <div className="flex items-center gap-2 sm:gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.name}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-white transition hover:bg-white/10"
                  >
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
                      {item.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/78 sm:text-base">
              Integrated hospitality operations, consulting, compliance, staffing, and guest service programs across India.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-2xl font-semibold text-white">Quick Links</h3>
              <div className="mt-4 space-y-2">
                {quickLinks.map((item) => (
                  <Link key={item.label} to={item.to} className="block text-base text-white/82 transition hover:text-white sm:text-lg">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white">Services</h3>
              <div className="mt-4 space-y-2">
                {serviceLinks.map((item) => (
                  <Link key={item.label} to={item.to} className="block text-base text-white/82 transition hover:text-white sm:text-lg">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white">More</h3>
              <div className="mt-4 space-y-2">
                {moreLinks.map((item) => (
                  <Link key={item.label} to={item.to} className="block text-base text-white/82 transition hover:text-white sm:text-lg">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 border-t border-white/20 pt-9 sm:flex-row sm:justify-between sm:gap-8 lg:gap-12">
          <div className="flex items-center gap-4">
            <img
              src="/selected.png"
              alt="BAVESTA Logo"
              className="h-14 w-14 rounded-lg border border-[#d9d2c8] bg-white p-0.5 object-cover sm:h-16 sm:w-16"
            />
            <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
              BAVESTA HOSPITALITY
            </h3>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-sm font-medium text-white/90 sm:text-base">
              <a href="tel:+918187077401" className="hover:text-gold transition">(+91) 8187077401</a> |
              <a href="tel:+919640771603" className="hover:text-gold transition">9640771603</a> |
              <a href="tel:+917981088456" className="hover:text-gold transition">7981088456</a>
            </p>
            <p className="mt-2 text-sm text-white/82 sm:text-base">
              Copyright {new Date().getFullYear()} BAVESTA Hospitality Services Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
