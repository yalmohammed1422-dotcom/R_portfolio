// ═══════════════════════════════════════════════════════════════
// 🎓  CERTIFICATIONS DATA  — Add or edit your certifications here
// ═══════════════════════════════════════════════════════════════
//
// HOW TO ADD A NEW CERTIFICATION:
//   1. Copy one of the blocks below and paste inside the array
//   2. Fill in your cert details
//   3. Set issuer color: "blue" | "purple" | "pink" | "cyan"

export const certificates = [
  {
    id: 1,
    icon: "🎓",
    title: "AI Engineer for Data Scientists",
    issuer: "DataCamp",
    color: "blue",
    date: "Expected: February 2026",
    description:
      "Train and fine-tune the latest AI models for production, including LLMs like Llama 3.",
    url: "",          // link to certificate (optional)
  },
  {
    id: 2,
    icon: "🎓",
    title: "Data Science Professional Certificate",
    issuer: "DataCamp",
    color: "blue",
    date: "Expected: January 2026",
    description:
      "Data science in Python, from data manipulation to Machine Learning.",
    url: "",
  },
  {
    id: 3,
    icon: "🏫",
    title: "Internet of Things",
    issuer: "KFUPM University",
    color: "purple",
    date: "2024",
    description:
      "Building intelligent IoT systems that integrate sensing, computing, communication, and analytics to create smart applications for homes, cities, and industries.",
    url: "",
  },
  {
    id: 4,
    icon: "🇸🇦",
    title: "Fundamentals of Artificial Intelligence",
    issuer: "SDAIA",
    color: "cyan",
    date: "2024",
    description:
      "Specialized program covering AI fundamentals, history, and classifications, with a focus on data analysis, pattern recognition, and predictive modeling.",
    url: "",
  },
  {
    id: 5,
    icon: "🇸🇦",
    title: "Artificial Intelligence — Advanced Applications",
    issuer: "SDAIA",
    color: "cyan",
    date: "2024",
    description:
      "Hands-on experience in data analysis, pattern discovery, and predictive modeling to enhance professional decision-making.",
    url: "",
  },
  // ── TEMPLATE — copy this block to add a new certification ────
  // {
  //   id: 6,
  //   icon: "📜",
  //   title: "Your Certification Name",
  //   issuer: "Issuing Organization",
  //   color: "blue",   // "blue" | "purple" | "pink" | "cyan"
  //   date: "Month Year",
  //   description: "Brief description of what the course covered.",
  //   url: "https://link-to-your-cert.com",
  // },
];
