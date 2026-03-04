const defaultProcess = [
  {
    title: "Consultation",
    description: "We assess your current hospitality challenges, goals, and operating context.",
  },
  {
    title: "Planning & Strategy",
    description: "A tailored execution plan is created with milestones, ownership, and outcomes.",
  },
  {
    title: "Implementation",
    description: "Our team deploys service frameworks, resources, and best-practice playbooks.",
  },
  {
    title: "Monitoring & Optimization",
    description: "Performance indicators are tracked and refined to maintain high service standards.",
  },
  {
    title: "Reporting & Improvement",
    description: "Clear reporting and continuous improvements ensure measurable long-term impact.",
  },
];

const serviceDetailContentMap = {
  "Recruitment & Placement": {
    tagline: "Build High-Performing Hospitality Teams Faster",
    heroImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2200&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80",
    overviewParagraphs: [
      "Our Recruitment & Placement service is designed for hospitality brands that need reliable talent quickly without compromising quality.",
      "We source, screen, and place candidates across hotel operations, front office, F&B, housekeeping, and leadership roles.",
      "Every hiring cycle is aligned to your brand standards, guest expectations, and operational targets.",
    ],
    targetAudience: [
      "Hotels scaling new properties or departments",
      "Restaurants needing quality floor and kitchen teams",
      "Hospitality groups reducing attrition and hiring delays",
    ],
    process: [
      {
        title: "Role Discovery",
        description: "We define role expectations, competency benchmarks, and cultural-fit criteria.",
      },
      {
        title: "Talent Sourcing",
        description: "Candidates are sourced through hospitality-focused pipelines and referral networks.",
      },
      {
        title: "Screening & Assessment",
        description: "Structured evaluations validate technical ability, service attitude, and reliability.",
      },
      {
        title: "Placement & Onboarding",
        description: "Selected candidates are placed with onboarding guidance for faster productivity.",
      },
      {
        title: "Post-Placement Review",
        description: "Retention and performance are reviewed to improve future hiring cycles.",
      },
    ],
    benefitCards: [
      {
        icon: "team",
        title: "Pre-Vetted Talent",
        description: "Access qualified hospitality professionals with verified role readiness.",
      },
      {
        icon: "clock",
        title: "Reduced Time-to-Hire",
        description: "Fill critical roles faster with structured recruitment workflows.",
      },
      {
        icon: "shield",
        title: "Lower Hiring Risk",
        description: "Assessment-led selection lowers mismatch and early turnover.",
      },
      {
        icon: "chart",
        title: "Scalable Workforce",
        description: "Build staffing depth for peak seasons and expansion plans.",
      },
    ],
    whyChoosePoints: [
      "Hospitality-specific talent expertise",
      "Structured recruitment governance",
      "Operationally relevant candidate assessments",
      "Retention-focused placement strategy",
    ],
    stats: [
      { label: "Hiring Cycles Managed", value: 350, suffix: "+" },
      { label: "Avg. Time Reduction", value: 42, suffix: "%" },
      { label: "Successful Placements", value: 1200, suffix: "+" },
    ],
  },
  "Payroll & Compliance": {
    tagline: "Accurate Payroll, Confident Compliance",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=2200&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80",
    overviewParagraphs: [
      "Payroll & Compliance ensures your hospitality workforce is managed with precision, transparency, and legal alignment.",
      "We handle payroll workflows, statutory obligations, and documentation controls tailored to hospitality shift structures.",
      "The result is reduced compliance exposure and predictable payroll operations every cycle.",
    ],
    targetAudience: [
      "Hotel groups with multi-shift staff operations",
      "Hospitality companies with compliance audit requirements",
      "Businesses seeking payroll accuracy at scale",
    ],
    process: [
      {
        title: "Compliance Assessment",
        description: "We evaluate current payroll and statutory posture against required standards.",
      },
      {
        title: "Policy Alignment",
        description: "Payroll rules and controls are mapped to your labor and contract structures.",
      },
      {
        title: "Payroll Execution",
        description: "Accurate payroll processing is managed with reconciliation checkpoints.",
      },
      {
        title: "Audit & Validation",
        description: "Compliance records are reviewed for errors, gaps, and risk signals.",
      },
      {
        title: "Continuous Governance",
        description: "Regular updates and controls ensure sustained compliance readiness.",
      },
    ],
    benefitCards: [
      { icon: "shield", title: "Regulatory Assurance", description: "Minimize compliance gaps and reduce legal risk." },
      { icon: "chart", title: "Financial Accuracy", description: "Improve payroll precision and reporting confidence." },
      { icon: "clock", title: "Process Efficiency", description: "Reduce administrative overhead with structured workflows." },
      { icon: "team", title: "Employee Trust", description: "Ensure timely and accurate salary experiences for staff." },
    ],
    whyChoosePoints: [
      "Hospitality payroll complexity expertise",
      "Compliance-first governance model",
      "Error-reduction process controls",
      "Audit-ready records and workflows",
    ],
    stats: [
      { label: "Payroll Records Managed", value: 50000, suffix: "+" },
      { label: "Compliance Accuracy", value: 99, suffix: "%" },
      { label: "Audit Interventions", value: 180, suffix: "+" },
    ],
  },
  "Hospitality Consulting": {
    tagline: "Strategy That Converts Into Operational Results",
    heroImage:
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=2200&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80",
    overviewParagraphs: [
      "Our consulting service helps hospitality brands solve structural performance challenges and unlock growth.",
      "From service design and profitability to guest experience frameworks, we build pragmatic action plans.",
      "Every recommendation is implementation-ready and measurable against your business KPIs.",
    ],
    targetAudience: [
      "Hotels improving operating margins",
      "Hospitality groups redesigning service models",
      "Leadership teams planning strategic transformation",
    ],
    process: defaultProcess,
    benefitCards: [
      { icon: "chart", title: "Better Business Clarity", description: "Make decisions with structured insights and benchmarks." },
      { icon: "spark", title: "Service Innovation", description: "Modernize guest and operations workflows intelligently." },
      { icon: "team", title: "Leadership Alignment", description: "Unify teams around clear execution priorities." },
      { icon: "shield", title: "Sustainable Growth", description: "Build resilient systems beyond one-time fixes." },
    ],
    whyChoosePoints: [
      "Consulting backed by operational reality",
      "Hospitality-first strategic frameworks",
      "Clear accountability and reporting",
      "Measured implementation outcomes",
    ],
    stats: [
      { label: "Consulting Engagements", value: 210, suffix: "+" },
      { label: "Avg. Performance Lift", value: 31, suffix: "%" },
      { label: "Markets Supported", value: 18, suffix: "" },
    ],
  },
  "Guest Management": {
    tagline: "Deliver Consistent, Memorable Guest Journeys",
    heroImage:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2200&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80",
    overviewParagraphs: [
      "Guest Management focuses on creating reliable, high-quality guest interactions across every touchpoint.",
      "We standardize communication, service response, and escalation protocols to elevate overall experience.",
      "This results in improved guest satisfaction, loyalty, and review performance.",
    ],
    targetAudience: [
      "Properties seeking higher guest retention",
      "Teams improving review and feedback scores",
      "Hospitality brands standardizing service quality",
    ],
    process: [
      {
        title: "Journey Mapping",
        description: "We map the guest lifecycle from booking to post-stay feedback.",
      },
      {
        title: "Service Standard Design",
        description: "Touchpoint standards and response protocols are defined.",
      },
      {
        title: "Team Enablement",
        description: "Frontline teams are trained for consistent communication and care.",
      },
      {
        title: "Feedback Loop Setup",
        description: "Guest feedback mechanisms are integrated into operations.",
      },
      {
        title: "Experience Optimization",
        description: "Insights are used to continuously improve guest satisfaction outcomes.",
      },
    ],
    benefitCards: [
      { icon: "spark", title: "Enhanced Guest Satisfaction", description: "Create service moments that exceed expectations." },
      { icon: "chart", title: "Higher Review Scores", description: "Improve sentiment with proactive experience design." },
      { icon: "team", title: "Consistent Service Delivery", description: "Align teams to one quality standard across shifts." },
      { icon: "clock", title: "Faster Service Response", description: "Reduce delays with clearer communication pathways." },
    ],
    whyChoosePoints: [
      "Guest-experience design specialists",
      "Operationalized service standards",
      "Data-informed quality improvement",
      "Frontline execution support",
    ],
    stats: [
      { label: "Guest Journeys Optimized", value: 90000, suffix: "+" },
      { label: "Response Time Improvement", value: 37, suffix: "%" },
      { label: "Avg. Rating Lift", value: 1.4, suffix: " pts" },
    ],
  },
  "Hotel Sales & Business Development": {
    tagline: "Accelerate Occupancy and Revenue Growth",
    heroImage:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=2200&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80",
    overviewParagraphs: [
      "This service builds growth systems for hospitality brands through structured sales strategies and channel partnerships.",
      "We identify demand segments, strengthen funnel performance, and improve conversion efficiency.",
      "Our approach balances short-term revenue gains with long-term portfolio growth.",
    ],
    targetAudience: [
      "Hotels targeting occupancy growth",
      "Sales teams improving conversion rates",
      "Hospitality groups expanding market share",
    ],
    process: [
      {
        title: "Market Opportunity Audit",
        description: "Demand segments and revenue leakages are identified.",
      },
      {
        title: "Sales Blueprint",
        description: "Go-to-market plans and sales KPIs are defined.",
      },
      {
        title: "Channel Activation",
        description: "Corporate and partner channels are activated for pipeline growth.",
      },
      {
        title: "Conversion Optimization",
        description: "Offer structure and sales scripts are tuned for better closure rates.",
      },
      {
        title: "Revenue Tracking",
        description: "Performance dashboards drive iterative strategy adjustments.",
      },
    ],
    benefitCards: [
      { icon: "chart", title: "Stronger Revenue Pipeline", description: "Grow predictable demand through diversified channels." },
      { icon: "spark", title: "Improved Occupancy Mix", description: "Balance transient, corporate, and long-stay opportunities." },
      { icon: "team", title: "Sales Team Performance", description: "Equip teams with high-conversion sales frameworks." },
      { icon: "shield", title: "Strategic Growth Control", description: "Scale with stronger reporting and account discipline." },
    ],
    whyChoosePoints: [
      "Hospitality revenue growth playbooks",
      "Channel partnership strategy expertise",
      "Data-driven conversion optimization",
      "Execution support for sales leaders",
    ],
    stats: [
      { label: "Sales Campaigns Deployed", value: 420, suffix: "+" },
      { label: "Avg. Conversion Lift", value: 29, suffix: "%" },
      { label: "Corporate Accounts Activated", value: 640, suffix: "+" },
    ],
  },
  "External Training Programs": {
    tagline: "Upskill Teams for Consistent Service Excellence",
    heroImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2200&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1800&q=80",
    overviewParagraphs: [
      "External Training Programs provide role-specific capability building for hospitality teams.",
      "We deliver structured modules for front office, housekeeping, F&B, leadership, and service recovery.",
      "Training outcomes are linked to service quality, guest feedback, and team productivity metrics.",
    ],
    targetAudience: [
      "Hotels improving service quality consistency",
      "Teams onboarding new staff cohorts",
      "Operations leaders building supervisory capability",
    ],
    process: [
      {
        title: "Skills Gap Analysis",
        description: "We assess current capability levels against role expectations.",
      },
      {
        title: "Curriculum Design",
        description: "Custom training tracks are built for each functional team.",
      },
      {
        title: "Workshop Delivery",
        description: "Interactive, scenario-based sessions are facilitated on-site or hybrid.",
      },
      {
        title: "Competency Evaluation",
        description: "Post-training assessments validate learning transfer.",
      },
      {
        title: "Performance Reinforcement",
        description: "Follow-up coaching ensures sustained behavior change.",
      },
    ],
    benefitCards: [
      { icon: "team", title: "Skilled Service Teams", description: "Raise frontline confidence and delivery consistency." },
      { icon: "spark", title: "Better Guest Interactions", description: "Improve communication, empathy, and response quality." },
      { icon: "chart", title: "Measurable Learning Outcomes", description: "Track progress with competency-based assessments." },
      { icon: "clock", title: "Faster Onboarding", description: "Bring new hires to productivity with structured learning tracks." },
    ],
    whyChoosePoints: [
      "Hospitality-specific training content",
      "Role-based implementation approach",
      "Practical, scenario-led learning",
      "Measurable capability improvement",
    ],
    stats: [
      { label: "Professionals Trained", value: 15000, suffix: "+" },
      { label: "Avg. Skill Lift", value: 34, suffix: "%" },
      { label: "Training Hours Delivered", value: 2400, suffix: "+" },
    ],
  },
  "Hotel Operations Management": {
    tagline: "Operate Hotels with Precision and Control",
    heroImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80",
    overviewParagraphs: [
      "Hotel Operations Management provides hands-on governance to improve process reliability and service delivery.",
      "We optimize SOP execution, shift coordination, team accountability, and departmental performance rhythms.",
      "Our model ensures day-to-day operations remain efficient, guest-focused, and financially controlled.",
    ],
    targetAudience: [
      "Properties with operational inconsistency issues",
      "Teams building stronger SOP adherence",
      "Leadership improving cross-department coordination",
    ],
    process: defaultProcess,
    benefitCards: [
      { icon: "shield", title: "Operational Discipline", description: "Run services with clear standards and accountability." },
      { icon: "clock", title: "Higher Process Efficiency", description: "Reduce delays and repetitive operational friction." },
      { icon: "chart", title: "Improved Cost Control", description: "Track and optimize resource utilization in real time." },
      { icon: "team", title: "Stronger Team Coordination", description: "Align departments around execution targets." },
    ],
    whyChoosePoints: [
      "Hands-on operations expertise",
      "SOP optimization framework",
      "Cross-functional execution rigor",
      "Performance-led governance model",
    ],
    stats: [
      { label: "Hotels Operated", value: 95, suffix: "+" },
      { label: "SOP Compliance Lift", value: 41, suffix: "%" },
      { label: "Cost Efficiency Gain", value: 22, suffix: "%" },
    ],
  },
  "Companionship & Social Support Services": {
    tagline: "Compassionate Support with Professional Standards",
    heroImage:
      "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=2200&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1576765608622-067973a79f53?auto=format&fit=crop&w=1800&q=80",
    overviewParagraphs: [
      "This service supports hospitality environments where emotional care and social engagement are part of the guest experience.",
      "We design and deliver structured companionship support with dignity, empathy, and safety protocols.",
      "Our approach balances personal care quality with operational accountability.",
    ],
    targetAudience: [
      "Senior hospitality and assisted living environments",
      "Care-focused guest programs in wellness properties",
      "Brands prioritizing social support experiences",
    ],
    process: [
      {
        title: "Needs Discovery",
        description: "We evaluate guest support requirements and care priorities.",
      },
      {
        title: "Program Design",
        description: "Companionship plans are tailored to emotional and social well-being goals.",
      },
      {
        title: "Care Team Matching",
        description: "Trained personnel are aligned to guest personality and care needs.",
      },
      {
        title: "Active Support Delivery",
        description: "Daily social engagement and support activities are managed consistently.",
      },
      {
        title: "Review & Adjustment",
        description: "Feedback-driven refinements ensure meaningful and safe outcomes.",
      },
    ],
    benefitCards: [
      { icon: "heart", title: "Human-Centered Support", description: "Deliver care rooted in empathy and dignity." },
      { icon: "shield", title: "Safe Service Standards", description: "Maintain reliability with structured care governance." },
      { icon: "team", title: "Trusted Companionship", description: "Build emotional comfort through consistent support teams." },
      { icon: "spark", title: "Well-Being Enhancement", description: "Improve social engagement and daily experience quality." },
    ],
    whyChoosePoints: [
      "Professional care-oriented hospitality model",
      "Compassion-first execution approach",
      "Safety, ethics, and service compliance",
      "Personalized support planning",
    ],
    stats: [
      { label: "Support Programs Delivered", value: 680, suffix: "+" },
      { label: "Guest Satisfaction", value: 97, suffix: "%" },
      { label: "Care Specialists Network", value: 240, suffix: "+" },
    ],
  },
};

const fallbackBenefitCards = [
  { icon: "chart", title: "Performance Focus", description: "Structured execution aligned to measurable business outcomes." },
  { icon: "team", title: "Expert Team", description: "Domain specialists with hospitality-first implementation experience." },
  { icon: "shield", title: "Quality Governance", description: "Reliable frameworks that support sustainable operational quality." },
  { icon: "spark", title: "Continuous Improvement", description: "Data-led refinement cycles to keep service standards ahead." },
];

const serviceImageByTitle = {
  "Recruitment & Placement": encodeURI("/services/requirement&&placement.png"),
  "Payroll & Compliance": encodeURI("/services/Payroll & Compliance .png"),
  "Hospitality Consulting": encodeURI("/services/Hospitality Consulting .png"),
  "Guest Management": encodeURI("/services/Guest Management .png"),
  "Hotel Sales & Business Development": encodeURI("/services/Hotel Sales & Business Development .png"),
  "External Training Programs": encodeURI("/services/External Training Programs .png"),
  "Hotel Operations Management": encodeURI("/services/Hotel Operations Management .png"),
  "Companionship & Social Support Services": encodeURI("/services/Companionship & Social Support Services.jpg"),
};

export const getServiceDetailContent = (service) => {
  const mapped = service ? serviceDetailContentMap[service.title] || {} : {};
  const mappedServiceImage =
    (service && serviceImageByTitle[service.title]) || serviceImageByTitle["Recruitment & Placement"];

  const benefitCards = mapped.benefitCards?.length
    ? mapped.benefitCards
    : (service?.benefits || []).map((benefit, index) => ({
        icon: ["chart", "team", "shield", "spark"][index % 4],
        title: benefit,
        description: "A practical advantage delivered through our structured hospitality framework.",
      }));

  return {
    tagline: mapped.tagline || "Enterprise-grade hospitality service delivery",
    heroImage:
      mappedServiceImage ||
      mapped.heroImage ||
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=80",
    overviewImage:
      mappedServiceImage ||
      mapped.overviewImage ||
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80",
    overviewParagraphs:
      mapped.overviewParagraphs ||
      [
        service?.description || "This service is built for hospitality brands that need reliable operational excellence.",
        "We combine strategic planning with hands-on implementation to deliver predictable results.",
        "Execution is aligned to guest satisfaction, compliance, and performance outcomes.",
      ],
    targetAudience:
      mapped.targetAudience ||
      [
        "Hospitality operators seeking scalable execution",
        "Leadership teams focused on service quality",
        "Organizations requiring structured process governance",
      ],
    process: mapped.process || defaultProcess,
    benefitCards: benefitCards.length ? benefitCards : fallbackBenefitCards,
    whyChoosePoints:
      mapped.whyChoosePoints ||
      [
        "Deep hospitality operations experience",
        "Structured service governance model",
        "Execution-focused professional teams",
        "Clear KPI and compliance alignment",
      ],
    stats: mapped.stats || [
      { label: "Projects Delivered", value: 300, suffix: "+" },
      { label: "Client Satisfaction", value: 96, suffix: "%" },
      { label: "Industry Specialists", value: 120, suffix: "+" },
    ],
    cta: {
      headline: "Let’s Work Together",
      subtext:
        "Connect with our team to design a tailored execution plan for your hospitality goals.",
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
