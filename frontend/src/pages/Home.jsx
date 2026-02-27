import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const testimonials = [
  {
    name: "Elena Brooks",
    quote: "An exceptional stay with beautiful rooms and warm service.",
  },
  {
    name: "Marcus Lee",
    quote: "The dining experience is world-class and perfect for celebrations.",
  },
];

function Home() {
  return (
    <>
      <Seo
        title="Luxury Stay & Dining"
        description="Discover luxury rooms, gourmet cuisine, and seamless online booking at Grand Aurelia."
      />
      <section className="relative overflow-hidden bg-hero-gradient text-cream">
        <div className="section-shell py-24 sm:py-32">
          <motion.h1
            className="max-w-3xl font-display text-4xl leading-tight sm:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Where Refined Stays Meet Signature Dining.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg text-cream/85"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Experience curated hospitality with elegant rooms, handcrafted cuisine, and personalized service.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <Link to="/booking">
              <Button>Book A Room</Button>
            </Link>
            <Link to="/restaurant">
              <Button variant="ghost" className="border-cream text-cream hover:bg-cream/10">
                Reserve A Table
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Luxury Rooms", "Modern interiors, premium amenities, and stunning views."],
            ["Fine Dining", "Chef-led menu featuring global flavors and local ingredients."],
            ["Event Ready", "Perfect setting for corporate retreats and family celebrations."],
          ].map(([title, text]) => (
            <Card key={title}>
              <h3 className="font-display text-2xl text-cocoa">{title}</h3>
              <p className="mt-3 text-sm text-espresso/75">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16">
        <h2 className="font-display text-3xl text-cocoa">Guest Testimonials</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={item.name} className="border-cocoa/15">
              <p className="text-espresso/80">"{item.quote}"</p>
              <p className="mt-4 text-sm font-semibold text-gold">{item.name}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
