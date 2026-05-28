// ═══════════════════════════════════════════════════════════════
// 🚀  PROJECTS DATA  — Add or edit your projects here
// ═══════════════════════════════════════════════════════════════
//
// HOW TO ADD A NEW PROJECT:
//   1. Copy the block below and paste it inside the array
//   2. Fill in your project details
//   3. For videoUrl: paste a YouTube link OR a local file like "/videos/project.mp4"
//      Leave videoUrl as "" if you have no video yet
//   4. For image: place an image in /public/projects/ and set the path
//      Leave image as "" to show the emoji instead
//
// CATEGORIES (used for filtering on the portfolio):
//   "AI/ML" | "IoT" | "Data Science" | "Computer Vision" | "NLP" | "Web"

export const projects = [
  {
    id: 1,
    title: "AI-Powered Customer Support Chatbot",
    category: "NLP",
    emoji: "🤖",
    image: "",                     // e.g. "/projects/chatbot.png"
    videoUrl: "",                  // e.g. "https://www.youtube.com/watch?v=VIDEO_ID"
    description:
      "Google Gemini AI for NLP, serverless automation, multi-intent detection (orders, products, returns, shipping), session-based conversation memory, RESTful Flask API, mock customer database, and robust error handling.",
    keyFeatures:
      "Context-aware conversations, sentiment analysis, integration with mock order database, multi-language support, and conversation logging. Deployed with rate limiting and fallback to human agents for complex queries.",
    techStack: ["Python", "Gemini API", "NLP", "Flask"],
    githubUrl: "#",
    liveUrl:   "",
  },
  {
    id: 2,
    title: "Smart Home Network Design & Device Integration",
    category: "IoT",
    emoji: "🏠",
    image: "",
    videoUrl: "",
    description:
      "Designed and simulated a comprehensive smart home network architecture using Cisco Packet Tracer. Integrated multiple IoT devices including smart lighting, thermostats, security cameras, and sensors to create a fully automated home environment.",
    keyFeatures:
      "Configured network topology with proper subnetting and VLAN segmentation, implemented security protocols for IoT device protection, and created automation scenarios demonstrating device interactions and remote monitoring capabilities.",
    techStack: ["Cisco Packet Tracer", "IoT", "Network Design", "Home Automation"],
    githubUrl: "#",
    liveUrl:   "",
  },
  // ── TEMPLATE — copy this block to add a new project ──────────
  // {
  //   id: 3,
  //   title: "Your Project Title",
  //   category: "AI/ML",           // see categories above
  //   emoji: "🧠",
  //   image: "",                   // "/projects/your-image.png" or ""
  //   videoUrl: "",                // YouTube link or local path or ""
  //   description: "Short description of what the project does.",
  //   keyFeatures: "Key technical achievements or features.",
  //   techStack: ["Python", "TensorFlow"],
  //   githubUrl: "https://github.com/...",
  //   liveUrl: "",
  // },
];
