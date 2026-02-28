export const roomData = [
  {
    id: "royal-ocean-suite",
    name: "Royal Ocean Suite",
    pricePerNight: 420,
    shortDescription: "Panoramic ocean-view suite with private lounge and premium concierge support.",
    fullDescription:
      "A signature luxury suite curated for executive travelers and premium vacation stays. Enjoy uninterrupted ocean views, curated minibar selections, and personalized in-room service.",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=80",
    amenities: ["King bed", "Private lounge", "Ocean balcony", "Concierge"],
  },
  {
    id: "imperial-city-room",
    name: "Imperial City Room",
    pricePerNight: 295,
    shortDescription: "Elegant city-facing room with business-ready workspace and plush interiors.",
    fullDescription:
      "Designed for business and leisure guests seeking comfort in the heart of the city. This room balances functionality with refined styling and premium bedding.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80",
    amenities: ["Queen bed", "Smart TV", "Work desk", "Rain shower"],
  },
  {
    id: "executive-sky-loft",
    name: "Executive Sky Loft",
    pricePerNight: 360,
    shortDescription: "High-floor loft suite with lounge corner and skyline sunset views.",
    fullDescription:
      "A contemporary loft designed for elevated comfort, ideal for extended stays and premium corporate guests. Enjoy top-floor privacy and elegant evening ambiance.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    amenities: ["Loft layout", "Skyline view", "Lounge area", "Nespresso setup"],
  },
  {
    id: "signature-garden-suite",
    name: "Signature Garden Suite",
    pricePerNight: 340,
    shortDescription: "Quiet garden-side suite with calming design and luxury wellness touches.",
    fullDescription:
      "An immersive stay experience for guests who value tranquility and premium comfort. The suite offers warm textures, garden views, and a restorative environment.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=80",
    amenities: ["Garden view", "Wellness kit", "Double vanity", "Luxury bedding"],
  },
];

export const getRoomById = (id) => roomData.find((room) => room.id === id);
