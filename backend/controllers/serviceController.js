const { validationResult } = require("express-validator");
const Service = require("../models/Service");

const defaultServices = [
  {
    title: "Recruitment & Placement",
    category: "Talent Solutions",
    description:
      "End-to-end hiring for hotels, resorts, restaurants, and luxury operations with role-fit screening.",
    benefits: [
      "Pre-vetted hospitality talent pipeline",
      "Faster hiring turnaround",
      "Reduced staff attrition risk",
    ],
  },
  {
    title: "Payroll & Compliance",
    category: "People Operations",
    description:
      "Reliable payroll processing and compliance management aligned with hospitality labor requirements.",
    benefits: [
      "Accurate payroll cycles",
      "Audit-ready compliance records",
      "Lower legal and penalty exposure",
    ],
  },
  {
    title: "Hospitality Consulting",
    category: "Strategy",
    description:
      "Data-driven advisory to improve service quality, margins, and guest experience consistency.",
    benefits: [
      "Service model optimization",
      "Revenue uplift opportunities",
      "Operational benchmarking",
    ],
  },
  {
    title: "Guest Management",
    category: "Experience",
    description:
      "Guest journey design and service standards for premium satisfaction across all touchpoints.",
    benefits: [
      "Higher guest retention",
      "Improved review scores",
      "Structured guest communication",
    ],
  },
  {
    title: "Hotel Sales & Business Development",
    category: "Growth",
    description:
      "Sales strategy and channel partnerships to increase occupancy, corporate bookings, and revenue mix.",
    benefits: [
      "Stronger sales pipeline",
      "Expanded partnership network",
      "Sustainable occupancy growth",
    ],
  },
  {
    title: "External Training Programs",
    category: "Capability Building",
    description:
      "Customized training modules for front office, housekeeping, F&B, and service leadership teams.",
    benefits: [
      "Role-specific upskilling",
      "Improved service quality",
      "Measurable team performance",
    ],
  },
  {
    title: "Hotel Operations Management",
    category: "Operations",
    description:
      "Process governance and hands-on oversight for smooth day-to-day hotel operations.",
    benefits: [
      "Standardized SOP execution",
      "Better cost control",
      "Higher operational uptime",
    ],
  },
  {
    title: "Companionship & Social Support Services",
    category: "Guest Care",
    description:
      "Personalized social support solutions designed for comfort-focused hospitality and assisted living environments.",
    benefits: [
      "Personalized guest well-being",
      "Enhanced care experience",
      "Trust-centered service delivery",
    ],
  },
];

const ensureDefaultServices = async () => {
  const existingCount = await Service.countDocuments();
  if (existingCount > 0) return;
  await Service.insertMany(defaultServices);
  console.log("Default hospitality services seeded");
};

const getServices = async (req, res, next) => {
  try {
    const filter = {};

    if (req.query.category) {
      filter.category = req.query.category;
    }

    const services = await Service.find(filter).sort({ createdAt: 1 });
    return res.json(services);
  } catch (error) {
    return next(error);
  }
};

const getServiceById = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    return res.json(service);
  } catch (error) {
    return next(error);
  }
};

const createService = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Validation failed", errors: errors.array() });
    }

    const benefits = Array.isArray(req.body.benefits)
      ? req.body.benefits
      : String(req.body.benefits || "")
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean);

    const service = await Service.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      benefits,
    });

    return res.status(201).json(service);
  } catch (error) {
    if (error?.code === 11000) {
      return res.status(409).json({ message: "A service with this title already exists" });
    }
    return next(error);
  }
};

const updateService = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Validation failed", errors: errors.array() });
    }

    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    if (req.body.title !== undefined) service.title = req.body.title;
    if (req.body.description !== undefined) service.description = req.body.description;
    if (req.body.category !== undefined) service.category = req.body.category;
    if (req.body.benefits !== undefined) {
      service.benefits = Array.isArray(req.body.benefits)
        ? req.body.benefits
        : String(req.body.benefits)
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean);
    }

    await service.save();
    return res.json(service);
  } catch (error) {
    if (error?.code === 11000) {
      return res.status(409).json({ message: "A service with this title already exists" });
    }
    return next(error);
  }
};

const deleteService = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    await service.deleteOne();
    return res.json({ message: "Service deleted successfully" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  ensureDefaultServices,
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
