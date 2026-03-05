export const serviceBadgeMap = {
  "Hotel Operations Management": "OM",
  "Recruitment & Placement": "RP",
  "Payroll & Compliance": "PC",
  "Hospitality Consulting": "HC",
  "Guest Management": "GM",
  "Hotel Sales & Business Development": "SB",
  "External Training Programs": "TP",
  "Companionship & Social Support Services": "CS",
};

const rawServiceImageMap = {
  "Hotel Operations Management": "/services/Hotel Operations Management .png",
  "Recruitment & Placement": "/services/requirement&&placement.png",
  "Payroll & Compliance": "/services/Payroll & Compliance .png",
  "Hospitality Consulting": "/services/Hospitality Consulting .png",
  "Guest Management": "/services/Guest Management .png",
  "Hotel Sales & Business Development": "/services/Hotel Sales & Business Development .png",
  "External Training Programs": "/services/External Training Programs .png",
  "Companionship & Social Support Services": "/services/Companionship & Social Support Services.jpg",
};

export const serviceImageMap = Object.fromEntries(
  Object.entries(rawServiceImageMap).map(([title, path]) => [title, encodeURI(path)]),
);

export const serviceFallback = [
  {
    _id: "Hotel Operations Management",
    title: "Hotel Operations Management",
    category: "Operations",
    description:
      "End-to-end operations management for hotels, resorts, serviced apartments, restaurants, and catering establishments.",
    benefits: ["Operational audits", "Service quality monitoring", "Revenue performance management"],
  },
  {
    _id: "Recruitment & Placement",
    title: "Recruitment & Placement",
    category: "Manpower Solutions",
    description:
      "Specialized hospitality recruitment with permanent, temporary, contractual, and outsourced manpower deployment.",
    benefits: ["Talent sourcing", "Pre-deployment screening", "Compliance-driven hiring"],
  },
  {
    _id: "Payroll & Compliance",
    title: "Payroll & Compliance",
    category: "Compliance",
    description:
      "Structured payroll processing and statutory compliance covering PF, ESIC, PT, TDS, and labor-law documentation.",
    benefits: ["Salary accuracy", "Statutory documentation", "Audit-ready controls"],
  },
  {
    _id: "Hospitality Consulting",
    title: "Hospitality Consulting",
    category: "Consulting",
    description:
      "Strategic advisory services across operational audits, feasibility studies, service standards, and business growth planning.",
    benefits: ["Operational diagnostics", "Revenue optimization", "Performance improvement"],
  },
  {
    _id: "Guest Management",
    title: "Guest Management",
    category: "Guest Experience",
    description:
      "Comprehensive guest and event management services including coordination, assistance, and on-ground hospitality supervision.",
    benefits: ["Event coordination", "Travel support", "Guest experience management"],
  },
  {
    _id: "Hotel Sales & Business Development",
    title: "Hotel Sales & Business Development",
    category: "Growth",
    description:
      "Commission-based sales and business development support through corporate tie-ups, lead generation, and market expansion.",
    benefits: ["Room-night sales", "Corporate partnerships", "Revenue growth strategy"],
  },
  {
    _id: "External Training Programs",
    title: "External Training Programs",
    category: "Skill Development",
    description:
      "Customized training programs in operations, customer service, communication, leadership, and service standards implementation.",
    benefits: ["Practical workshops", "Role-based learning", "Measurable performance outcomes"],
  },
  {
    _id: "Companionship & Social Support Services",
    title: "Companionship & Social Support Services",
    category: "Lifestyle Support",
    description:
      "Lawful companionship, concierge, and lifestyle support services designed for comfort, safety, and dignity.",
    benefits: ["Travel accompaniment", "Virtual companionship", "Non-clinical appointment support"],
  },
];

export const getServiceBadge = (title) => serviceBadgeMap[title] || "SV";

export const getServiceImage = (title) =>
  serviceImageMap[title] || serviceImageMap["Hotel Operations Management"];
