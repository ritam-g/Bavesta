import { useState } from "react";
import Seo from "../components/Seo";
import CareerHero from "../components/careers/CareerHero";
import WhyJoinUs from "../components/careers/WhyJoinUs";
import OpenRoles from "../components/careers/OpenRoles";
import ApplicationForm from "../components/careers/ApplicationForm";
import CareersFaq from "../components/careers/CareersFaq";
import CareersCta from "../components/careers/CareersCta";

function Careers() {
  const [pendingRole, setPendingRole] = useState(null);

  const handleApply = (roleTitle) => {
    setPendingRole(roleTitle);
  };

  const handleRoleConsumed = () => {
    setPendingRole(null);
  };

  return (
    <>
      <Seo
        title="Careers"
        description="Join BAVESTA Hospitality Services — explore open roles in hotel operations, guest relations, HR, consulting, and more. Apply online today."
      />

      <CareerHero />
      <WhyJoinUs />
      <OpenRoles onApply={handleApply} />
      <ApplicationForm selectedRole={pendingRole} onRoleConsumed={handleRoleConsumed} />
      <CareersFaq />
      <CareersCta />
    </>
  );
}

export default Careers;
