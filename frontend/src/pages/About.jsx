import Seo from "../components/Seo";
import PageHero from "../components/company/PageHero";
import SectionHeader from "../components/company/SectionHeader";
import MissionVisionCards from "../components/company/MissionVisionCards";
import ComfortValuesGrid from "../components/company/ComfortValuesGrid";
import LeadershipGrid from "../components/company/LeadershipGrid";
import BulletPanel from "../components/company/BulletPanel";
import { companyProfile } from "../data/companyContent";
import { serviceFallback, getServiceImage } from "../data/serviceData";

function About() {
  return (
    <>
      <Seo
        title="About BAVESTA"
        description="Learn how BAVESTA Hospitality Services delivers integrated, compliant, and scalable hospitality solutions through operational excellence."
      />

      <PageHero
        kicker="About Bavesta"
        breadcrumb="About"
        title={companyProfile.brandName}
        description={`${companyProfile.shortTagline}. ${companyProfile.heroStatement}`}
        image={getServiceImage("Hotel Operations Management")}
      />

      <section className="section-shell pb-20">
        <SectionHeader
          kicker="Who We Are"
          title="Structured, Scalable, Premium Hospitality Delivery"
          description="We combine operational mastery, ethical governance, and client-centric execution to build reliable hospitality ecosystems."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="glass-panel p-7 sm:p-8">
            <h2 className="font-display text-2xl font-bold text-pearl sm:text-3xl">Company Profile</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-mist sm:text-base">
              {companyProfile.whoWeAre.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <BulletPanel title="Our Services Footprint" items={serviceFallback.map((service) => service.title)} />
        </div>

        <MissionVisionCards vision={companyProfile.vision} mission={companyProfile.mission} />
      </section>

      <section className="section-shell pb-20">
        <SectionHeader
          kicker="Core Philosophy"
          title="C.O.M.F.O.R.T Framework"
          description="Our values define how we deliver every engagement, from consulting and operations to personalized support services."
        />
        <ComfortValuesGrid values={companyProfile.comfortValues} />
      </section>

      <section className="section-shell pb-20">
        <div className="grid gap-5 lg:grid-cols-2">
          <BulletPanel title="Why Choose BAVESTA" items={companyProfile.whyChooseUs} />
          <article className="glass-panel p-7">
            <h3 className="font-display text-2xl font-bold text-pearl">Our Commitment</h3>
            <p className="mt-5 text-sm leading-7 text-mist sm:text-base">{companyProfile.commitment}</p>
          </article>
        </div>
      </section>

      <section className="section-shell pb-20">
        <SectionHeader
          kicker="Leadership Team"
          title="Visionaries Behind BAVESTA"
          description="Our founders combine strategic foresight, operational mastery, and growth-driven execution to build a structured premium hospitality enterprise."
        />
        <LeadershipGrid leaders={companyProfile.leadership} />

        <div className="mt-8">
          <BulletPanel title="Leadership Philosophy" items={companyProfile.leadershipPrinciples} />
        </div>
      </section>
    </>
  );
}

export default About;
