export const serviceBadgeMap = {
  "Recruitment & Placement": "RP",
  "Payroll & Compliance": "PC",
  "Hospitality Consulting": "HC",
  "Guest Management": "GM",
  "Hotel Sales & Business Development": "SB",
  "External Training Programs": "TP",
  "Hotel Operations Management": "OM",
  "Companionship & Social Support Services": "CS",
};

export const serviceFallback = [
  "Recruitment & Placement",
  "Payroll & Compliance",
  "Hospitality Consulting",
  "Guest Management",
  "Hotel Sales & Business Development",
  "External Training Programs",
  "Hotel Operations Management",
  "Companionship & Social Support Services",
].map((title) => ({
  _id: title,
  title,
  category: "Hospitality Services",
  description: "Tailored corporate solutions to strengthen hospitality performance and service quality.",
  benefits: ["Operational consistency", "Guest-focused execution", "Growth-oriented framework"],
}));

export const getServiceBadge = (title) => serviceBadgeMap[title] || "SV";
