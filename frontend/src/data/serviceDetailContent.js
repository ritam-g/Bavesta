import { getServiceImage } from "./serviceData";

const defaultProcess = [
  {
    title: "Consultation",
    description: "We assess your current operational context, business goals, and service expectations.",
  },
  {
    title: "Planning & Strategy",
    description: "A structured execution roadmap is prepared with timelines, ownership, and KPIs.",
  },
  {
    title: "Implementation",
    description: "Our team deploys approved workflows, service standards, and operational controls.",
  },
  {
    title: "Monitoring & Optimization",
    description: "Performance, compliance, and service quality are monitored and refined continuously.",
  },
  {
    title: "Reporting & Improvement",
    description: "Clear reporting and periodic improvements ensure long-term value creation.",
  },
];

const serviceDetailContentMap = {
  "Hotel Operations Management": {
    tagline: "Complete Hospitality Operations with Structured Performance Control",
    overviewParagraphs: [
      "We manage and operate hotels, resorts, guest houses, serviced apartments, restaurants, food courts, clubs, and catering establishments through disciplined management frameworks.",
      "Our scope includes day-to-day operational governance, service quality monitoring, revenue performance review, and process standardization.",
      "This model helps hospitality businesses scale with consistency, accountability, and measurable business outcomes.",
    ],
    targetAudience: [
      "Hotels and resorts requiring full operations support",
      "Owners seeking operational restructuring and audits",
      "Hospitality brands scaling premium service delivery",
    ],
    process: [
      { title: "Operational Assessment", description: "We evaluate current performance, staffing, workflows, and revenue patterns." },
      { title: "Contract & Governance Setup", description: "Management scope, responsibilities, and control systems are finalized." },
      { title: "Execution Rollout", description: "SOPs, quality controls, and leadership routines are implemented." },
      { title: "Performance Monitoring", description: "Service quality, cost control, and guest outcomes are reviewed in cycles." },
      { title: "Growth Optimization", description: "Brand positioning and strategic growth initiatives are continuously enhanced." },
    ],
    benefitCards: [
      { icon: "shield", title: "Operational Discipline", description: "Structured governance for consistent service delivery." },
      { icon: "chart", title: "Revenue Visibility", description: "Performance-led tracking for better financial control." },
      { icon: "clock", title: "Process Reliability", description: "Reduced operational gaps through standardized workflows." },
      { icon: "team", title: "Scalable Management", description: "Frameworks that support expansion without quality dilution." },
    ],
    whyChoosePoints: [
      "Integrated operations and performance management",
      "Hospitality-first process restructuring expertise",
      "Guest experience and profitability alignment",
      "Long-term growth-focused governance model",
    ],
    stats: [
      { label: "Properties Supported", value: 95, suffix: "+" },
      { label: "Avg. SOP Uplift", value: 41, suffix: "%" },
      { label: "Operational Reviews", value: 600, suffix: "+" },
    ],
  },
  "Recruitment & Placement": {
    tagline: "Specialized Hospitality Manpower with Compliance Assurance",
    overviewParagraphs: [
      "We provide recruitment and manpower supply services for hospitality and allied industries with a focus on role-fit, reliability, and deployment readiness.",
      "Our model covers permanent, temporary, and contractual staffing with pre-deployment screening and evaluation.",
      "All engagements are executed with labor compliance discipline and ethical workforce management standards.",
    ],
    targetAudience: [
      "Hotels and restaurants scaling workforce capacity",
      "Hospitality groups requiring outsourced manpower deployment",
      "Businesses hiring both executive and operational roles",
    ],
    process: [
      { title: "Talent Requirement Mapping", description: "Role needs, staffing levels, and competency expectations are defined." },
      { title: "Sourcing & Screening", description: "Candidates are sourced, evaluated, and shortlisted against service standards." },
      { title: "Compliance Verification", description: "Documentation and labor law checks are completed before deployment." },
      { title: "Deployment & Onboarding", description: "Selected workforce is deployed with role-level onboarding support." },
      { title: "Performance Follow-up", description: "Ongoing monitoring helps improve retention and delivery quality." },
    ],
    benefitCards: [
      { icon: "team", title: "Skilled Workforce", description: "Hospitality-ready professionals across key departments." },
      { icon: "clock", title: "Faster Fulfillment", description: "Reduced hiring cycle time with structured pipelines." },
      { icon: "shield", title: "Compliance-Ready Hiring", description: "Labor and documentation controls at every stage." },
      { icon: "spark", title: "Deployment Reliability", description: "Performance-driven manpower placement quality." },
    ],
    whyChoosePoints: [
      "Hospitality domain-focused hiring process",
      "Permanent, temporary, and contract staffing capabilities",
      "Pre-deployment screening and evaluation framework",
      "Regulatory and documentation compliance discipline",
    ],
    stats: [
      { label: "Profiles Evaluated", value: 12000, suffix: "+" },
      { label: "Successful Placements", value: 1800, suffix: "+" },
      { label: "Avg. Hiring Speed Gain", value: 42, suffix: "%" },
    ],
  },
  "Payroll & Compliance": {
    tagline: "Accurate Payroll and Statutory Compliance Without Operational Risk",
    overviewParagraphs: [
      "Our payroll and statutory compliance services cover salary and wage processing, PF, ESIC, PT, TDS, gratuity, bonus, and regulatory documentation.",
      "We design secure, confidential, and repeatable workflows that reduce errors and legal exposure.",
      "This ensures every payroll cycle is accurate, audit-ready, and aligned with applicable labor regulations.",
    ],
    targetAudience: [
      "Hospitality businesses managing multi-shift payroll",
      "Organizations needing audit-ready statutory records",
      "Management teams seeking legal-risk reduction",
    ],
    process: [
      { title: "Compliance Audit", description: "Current payroll and statutory posture is assessed for risk and gaps." },
      { title: "Rulebook Alignment", description: "Payroll, deductions, and documentation rules are formalized." },
      { title: "Cycle Processing", description: "Salary and wage processing is executed with verification checkpoints." },
      { title: "Regulatory Filing", description: "PF, ESIC, PT, TDS and statutory submissions are managed." },
      { title: "Audit Support", description: "Documentation and reconciliation support are maintained continuously." },
    ],
    benefitCards: [
      { icon: "chart", title: "Payroll Accuracy", description: "Reduced manual errors and stronger reconciliation quality." },
      { icon: "shield", title: "Legal Compliance", description: "Structured adherence to applicable statutory requirements." },
      { icon: "clock", title: "Operational Efficiency", description: "Faster cycle completion with lower admin overhead." },
      { icon: "team", title: "Employee Confidence", description: "Consistent and reliable salary experience for teams." },
    ],
    whyChoosePoints: [
      "End-to-end payroll processing and compliance expertise",
      "Confidential and process-controlled delivery model",
      "Comprehensive statutory documentation support",
      "Audit-ready governance and reporting systems",
    ],
    stats: [
      { label: "Payroll Records Managed", value: 50000, suffix: "+" },
      { label: "Compliance Accuracy", value: 99, suffix: "%" },
      { label: "Statutory Filings", value: 3000, suffix: "+" },
    ],
  },
  "Hospitality Consulting": {
    tagline: "Strategic Advisory for Operational Excellence and Profitable Growth",
    overviewParagraphs: [
      "Our consulting and advisory division supports hospitality businesses with operational audits, revenue optimization, feasibility studies, and performance improvement planning.",
      "We help leadership teams establish service standards, business development strategy, and measurable execution frameworks.",
      "Every recommendation is designed for practical implementation and sustainable business impact.",
    ],
    targetAudience: [
      "Hospitality owners planning strategic transformation",
      "Operations teams improving service and profitability",
      "Businesses evaluating expansion and feasibility models",
    ],
    process: [
      { title: "Business Discovery", description: "Current performance, market conditions, and growth goals are evaluated." },
      { title: "Diagnostic Audit", description: "Operations, service standards, and revenue drivers are assessed." },
      { title: "Strategy Blueprint", description: "Prioritized action plans and target outcomes are finalized." },
      { title: "Execution Enablement", description: "Implementation support is provided to teams and leadership." },
      { title: "Review & Scaling", description: "Outcomes are measured and strategies refined for long-term growth." },
    ],
    benefitCards: [
      { icon: "chart", title: "Operational Clarity", description: "Structured insights for stronger decision-making." },
      { icon: "spark", title: "Service Innovation", description: "Modernized standards for premium guest experience." },
      { icon: "team", title: "Leadership Alignment", description: "Unified action across departments and management." },
      { icon: "shield", title: "Sustainable Growth", description: "Scalable strategies beyond short-term interventions." },
    ],
    whyChoosePoints: [
      "Data-backed advisory with execution relevance",
      "Hospitality-focused growth and standards expertise",
      "Balanced focus on guest experience and profitability",
      "Clear KPI-oriented implementation governance",
    ],
    stats: [
      { label: "Consulting Engagements", value: 210, suffix: "+" },
      { label: "Avg. Performance Lift", value: 31, suffix: "%" },
      { label: "Growth Programs Delivered", value: 140, suffix: "+" },
    ],
  },
  "Guest Management": {
    tagline: "Guest and Event Management Designed for Seamless Experience Delivery",
    overviewParagraphs: [
      "Our guest and event management services support corporate and social occasions with end-to-end coordination and on-ground hospitality supervision.",
      "We handle conference support, exhibition logistics, travel coordination, and guest assistance with attention to detail.",
      "The result is smooth execution, strong guest satisfaction, and professional representation at every touchpoint.",
    ],
    targetAudience: [
      "Corporate institutions hosting conferences or exhibitions",
      "Hospitality businesses managing high-value guest movements",
      "Event organizers requiring reliable hospitality supervision",
    ],
    process: [
      { title: "Requirement Briefing", description: "Event scope, guest profile, and logistical expectations are defined." },
      { title: "Coordination Planning", description: "Travel, guest movement, and support workflows are structured." },
      { title: "Execution Team Setup", description: "On-ground teams are assigned with role-level accountability." },
      { title: "Live Event Supervision", description: "Real-time coordination ensures issue-free guest experience." },
      { title: "Post-Event Review", description: "Feedback and execution insights are captured for improvement." },
    ],
    benefitCards: [
      { icon: "spark", title: "Seamless Guest Journeys", description: "Smooth coordination from arrival to closure." },
      { icon: "clock", title: "Execution Precision", description: "Reduced delays through proactive on-ground control." },
      { icon: "team", title: "Professional Representation", description: "Premium hospitality handling at every interaction." },
      { icon: "chart", title: "Quality Outcomes", description: "Higher satisfaction through detail-oriented supervision." },
    ],
    whyChoosePoints: [
      "Corporate and social event hospitality expertise",
      "Travel and guest coordination capabilities",
      "On-ground supervision for consistent delivery quality",
      "Experience-focused execution discipline",
    ],
    stats: [
      { label: "Guest Interactions Managed", value: 90000, suffix: "+" },
      { label: "Event Assignments", value: 740, suffix: "+" },
      { label: "Response Efficiency Gain", value: 37, suffix: "%" },
    ],
  },
  "Hotel Sales & Business Development": {
    tagline: "Revenue Growth Through Strategic Sales and Business Development",
    overviewParagraphs: [
      "We partner with hotels and hospitality establishments through commission-based sales and marketing support aimed at measurable revenue growth.",
      "Our work includes corporate tie-ups, lead generation, room-night sales, and market expansion initiatives.",
      "This creates sustainable demand pipelines, stronger market presence, and long-term commercial partnerships.",
    ],
    targetAudience: [
      "Hotels targeting occupancy and revenue growth",
      "Properties expanding B2B and corporate business",
      "Hospitality teams seeking external sales acceleration",
    ],
    process: [
      { title: "Market Mapping", description: "Demand segments and high-value opportunity zones are identified." },
      { title: "Partnership Strategy", description: "Corporate tie-up and channel development plans are structured." },
      { title: "Sales Activation", description: "Lead funnels, outreach, and conversion actions are executed." },
      { title: "Revenue Optimization", description: "Sales performance and room-night metrics are continuously tuned." },
      { title: "Expansion Planning", description: "New market initiatives are rolled out for sustained growth." },
    ],
    benefitCards: [
      { icon: "chart", title: "Revenue Enhancement", description: "Focused strategies to improve room-night performance." },
      { icon: "team", title: "Corporate Tie-Ups", description: "Long-term partnerships with business travel demand sources." },
      { icon: "spark", title: "Lead Generation Engine", description: "Consistent qualified pipeline development." },
      { icon: "shield", title: "Sustainable Growth", description: "Market expansion with controlled commercial execution." },
    ],
    whyChoosePoints: [
      "Commission-aligned growth partnership model",
      "Corporate tie-up and market expansion capabilities",
      "Lead-to-revenue conversion framework",
      "Performance-driven business development execution",
    ],
    stats: [
      { label: "Sales Campaigns", value: 420, suffix: "+" },
      { label: "Avg. Conversion Lift", value: 29, suffix: "%" },
      { label: "Corporate Accounts", value: 640, suffix: "+" },
    ],
  },
  "External Training Programs": {
    tagline: "Customized Hospitality Training for Measurable Team Performance",
    overviewParagraphs: [
      "Our training and skill development programs are customized to organizational requirements across operations, customer service, communication, and leadership.",
      "Programs are practical, engaging, and built for direct workplace application across hospitality teams.",
      "We align learning outcomes to measurable improvements in service standards and performance consistency.",
    ],
    targetAudience: [
      "Hospitality teams improving service standards",
      "Organizations upskilling frontline and supervisory staff",
      "Businesses implementing structured capability development",
    ],
    process: [
      { title: "Training Needs Analysis", description: "Role-level skill gaps and performance needs are identified." },
      { title: "Program Design", description: "Customized modules are built for teams and management levels." },
      { title: "Workshop Delivery", description: "Interactive and practical sessions are delivered in structured batches." },
      { title: "Assessment & Feedback", description: "Learning outcomes are evaluated through applied assessments." },
      { title: "Reinforcement", description: "Post-program support ensures long-term behavior and quality gains." },
    ],
    benefitCards: [
      { icon: "team", title: "Team Capability Lift", description: "Role-specific upskilling with practical application." },
      { icon: "spark", title: "Service Excellence", description: "Improved guest-facing behavior and communication quality." },
      { icon: "chart", title: "Measurable Outcomes", description: "Performance-linked learning and assessment model." },
      { icon: "clock", title: "Faster Readiness", description: "Accelerated onboarding and productivity for new teams." },
    ],
    whyChoosePoints: [
      "Customized organization-specific program design",
      "Operations, service, soft skills, and leadership coverage",
      "Practical and engaging delivery methodology",
      "Performance-oriented capability improvement outcomes",
    ],
    stats: [
      { label: "Professionals Trained", value: 15000, suffix: "+" },
      { label: "Training Hours", value: 2400, suffix: "+" },
      { label: "Avg. Skill Improvement", value: 34, suffix: "%" },
    ],
  },
  "Companionship & Social Support Services": {
    tagline: "Lawful Lifestyle Support and Companionship with Dignity and Care",
    overviewParagraphs: [
      "BAVESTA provides lawful companionship, concierge, and lifestyle support services designed to ensure safety, comfort, and convenience.",
      "Support includes travel accompaniment, movie and shopping companionship, event presence support, non-clinical medical appointment assistance, virtual companionship, and domestic support assistance.",
      "All services are delivered in strict compliance with applicable laws and ethical standards while prioritizing client dignity and safety.",
    ],
    targetAudience: [
      "Individuals requiring safe lifestyle assistance",
      "Clients seeking reliable non-clinical companionship support",
      "Families and organizations prioritizing dignified care-led services",
    ],
    process: [
      { title: "Needs Assessment", description: "Lifestyle and support needs are evaluated with confidentiality." },
      { title: "Service Planning", description: "A lawful and ethical support plan is tailored to client preferences." },
      { title: "Support Matching", description: "Appropriate professionals are assigned for each engagement." },
      { title: "Safe Delivery", description: "Services are executed with dignity, professionalism, and supervision." },
      { title: "Review & Continuity", description: "Feedback-led refinements keep support relevant and reliable." },
    ],
    benefitCards: [
      { icon: "heart", title: "Dignity-First Support", description: "Client comfort and respect remain central in every interaction." },
      { icon: "shield", title: "Ethical & Lawful Framework", description: "Service delivery aligned to legal and compliance standards." },
      { icon: "team", title: "Trusted Companionship", description: "Reliable support through trained professional personnel." },
      { icon: "spark", title: "Lifestyle Convenience", description: "Flexible assistance for travel, events, and daily support needs." },
    ],
    whyChoosePoints: [
      "Client safety, dignity, and confidentiality first",
      "Legally compliant companionship service model",
      "Professional concierge and lifestyle support standards",
      "Personalized and ethical service execution",
    ],
    stats: [
      { label: "Support Programs", value: 680, suffix: "+" },
      { label: "Client Satisfaction", value: 97, suffix: "%" },
      { label: "Care Specialists", value: 240, suffix: "+" },
    ],
  },
};

const fallbackBenefitCards = [
  { icon: "chart", title: "Performance Focus", description: "Structured execution aligned to measurable business outcomes." },
  { icon: "team", title: "Expert Team", description: "Domain specialists with hospitality-first implementation experience." },
  { icon: "shield", title: "Quality Governance", description: "Reliable frameworks that support sustainable operational quality." },
  { icon: "spark", title: "Continuous Improvement", description: "Data-led refinement cycles to keep service standards ahead." },
];

export const getServiceDetailContent = (service) => {
  const mapped = service ? serviceDetailContentMap[service.title] || {} : {};

  const benefitCards = mapped.benefitCards?.length
    ? mapped.benefitCards
    : (service?.benefits || []).map((benefit, index) => ({
        icon: ["chart", "team", "shield", "spark"][index % 4],
        title: benefit,
        description: "A practical advantage delivered through our structured hospitality framework.",
      }));

  return {
    tagline: mapped.tagline || "Integrated hospitality service delivery with measurable outcomes.",
    heroImage: getServiceImage(service?.title),
    overviewImage: getServiceImage(service?.title),
    overviewParagraphs:
      mapped.overviewParagraphs ||
      [
        service?.description || "This service is designed for hospitality businesses requiring disciplined execution.",
        "We combine strategy, operations, and compliance to deliver sustainable performance outcomes.",
        "Every engagement is built around reliability, service quality, and long-term value creation.",
      ],
    targetAudience:
      mapped.targetAudience ||
      [
        "Hospitality operators seeking scalable systems",
        "Leadership teams focused on service quality",
        "Organizations requiring compliant execution models",
      ],
    process: mapped.process || defaultProcess,
    benefitCards: benefitCards.length ? benefitCards : fallbackBenefitCards,
    whyChoosePoints:
      mapped.whyChoosePoints ||
      [
        "Deep hospitality operations experience",
        "Structured governance and compliance discipline",
        "Client-centric execution model",
        "Measurable performance improvement focus",
      ],
    stats: mapped.stats || [
      { label: "Projects Delivered", value: 300, suffix: "+" },
      { label: "Client Satisfaction", value: 96, suffix: "%" },
      { label: "Industry Specialists", value: 120, suffix: "+" },
    ],
    cta: {
      headline: "Let's Work Together",
      subtext:
        "Connect with our team to design a tailored engagement plan for your hospitality goals.",
      primaryLabel: "Request Consultation",
      primaryHref: "/contact?inquiry=consultation",
      secondaryLabel: "Contact Us",
      secondaryHref: "/contact",
    },
  };
};

export const benefitIconPaths = {
  chart: "M4 19h16v2H2V3h2v16Zm3-4h2v3H7v-3Zm4-6h2v9h-2V9Zm4 3h2v6h-2v-6Z",
  team: "M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm-7 16a7 7 0 0 1 14 0H5Zm14-8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm-1 2c2.2 0 4 1.8 4 4h-2a2 2 0 0 0-2-2v-2Z",
  shield: "M12 2 4 6v5c0 5.2 3.4 9.9 8 11 4.6-1.1 8-5.8 8-11V6l-8-4Zm0 3.2 5 2.5V11c0 3.9-2.3 7.5-5 8.7-2.7-1.2-5-4.8-5-8.7V7.7l5-2.5Z",
  spark: "M13 2 4 14h6l-1 8 9-12h-6l1-8Z",
  clock: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm1 5h-2v6l5 3 1-1.7-4-2.3V7Z",
  heart: "M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z",
};
