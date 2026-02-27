function Footer() {
  return (
    <footer className="border-t border-sand/60 bg-espresso py-10 text-cream">
      <div className="section-shell grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl">Grand Aurelia</h3>
          <p className="mt-3 text-sm text-cream/80">
            Luxury hospitality with elegant rooms and refined dining experiences.
          </p>
        </div>
        <div>
          <h4 className="font-semibold uppercase tracking-wider text-gold">Contact</h4>
          <p className="mt-3 text-sm">+1 (555) 810-8800</p>
          <p className="text-sm">hello@grandaurelia.com</p>
        </div>
        <div>
          <h4 className="font-semibold uppercase tracking-wider text-gold">Address</h4>
          <p className="mt-3 text-sm text-cream/80">125 Harbor Boulevard, Coastal District, CA</p>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-cream/60">© {new Date().getFullYear()} Grand Aurelia. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
