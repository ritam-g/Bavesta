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

const rawServiceImageMap = {
  "Recruitment & Placement": "/services/requirement&&placement.png",
  "Payroll & Compliance": "/services/Payroll & Compliance .png",
  "Hospitality Consulting": "/services/Hospitality Consulting .png",
  "Guest Management": "/services/Guest Management .png",
  "Hotel Sales & Business Development": "/services/Hotel Sales & Business Development .png",
  "External Training Programs": "/services/External Training Programs .png",
  "Hotel Operations Management": "/services/Hotel Operations Management .png",
  "Companionship & Social Support Services": "/services/Companionship & Social Support Services.jpg",
};

export const serviceImageMap = Object.fromEntries(
  Object.entries(rawServiceImageMap).map(([title, path]) => [title, encodeURI(path)]),
);

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

export const getServiceImage = (title) =>
  serviceImageMap[title] || serviceImageMap["Recruitment & Placement"];
