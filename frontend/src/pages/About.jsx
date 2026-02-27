import Seo from "../components/Seo";
import Card from "../components/ui/Card";

function About() {
  return (
    <section className="section-shell py-16">
      <Seo
        title="About"
        description="Learn about Grand Aurelia Hotel & Restaurant and our hospitality philosophy."
      />
      <h1 className="font-display text-4xl text-cocoa">A Hospitality Legacy</h1>
      <p className="mt-4 max-w-3xl text-lg text-espresso/80">
        Grand Aurelia blends timeless elegance with modern comfort, offering guests an elevated hotel and dining experience.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Card>
          <h2 className="font-display text-2xl">Our Vision</h2>
          <p className="mt-2 text-sm text-espresso/75">To become the preferred destination for meaningful stays and culinary excellence.</p>
        </Card>
        <Card>
          <h2 className="font-display text-2xl">Our Promise</h2>
          <p className="mt-2 text-sm text-espresso/75">Consistent quality, personalized care, and service standards beyond expectation.</p>
        </Card>
        <Card>
          <h2 className="font-display text-2xl">Our Craft</h2>
          <p className="mt-2 text-sm text-espresso/75">From room ambiance to dining detail, each touchpoint is intentionally designed.</p>
        </Card>
      </div>
    </section>
  );
}

export default About;
