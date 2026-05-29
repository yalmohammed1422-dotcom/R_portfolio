// ═══════════════════════════════════════════════════════════════
// 📊  PROJECT DASHBOARDS  — ADD YOUR DATASET FOR EACH PROJECT
// ═══════════════════════════════════════════════════════════════
//
// Each entry here links to one of your projects.
// Visitors can view the data and switch between chart types.
// Only YOU (the owner) add or edit data here.
//
// HOW TO ADD DATA FOR A NEW PROJECT:
//   1. Copy the template block at the bottom
//   2. Set `projectName` to match your project title
//   3. Fill in `metrics` (the 4 stat cards shown above the chart)
//   4. Fill in `chartData` (the values shown in the chart)
//   5. Set `dataLabel` — the Y-axis label / tooltip label
//   6. Choose which chart types make sense: "bar" | "line" | "pie" | "radar"

export const projectDashboards = [
  {
    id: 1,
    projectName: "AI-Powered Customer Support Chatbot",
    description: "Performance metrics from chatbot evaluation and testing",
    metrics: [
      { label: "Intent Accuracy",    value: "94%" },
      { label: "Avg Response Time",  value: "120ms" },
      { label: "Languages",          value: "5" },
      { label: "Resolution Rate",    value: "76%" },
    ],
    chartData: [
      { name: "Intent Detection",   value: 94 },
      { name: "Sentiment Accuracy", value: 88 },
      { name: "Resolution Rate",    value: 76 },
      { name: "User Satisfaction",  value: 91 },
      { name: "Multi-language",     value: 85 },
    ],
    dataLabel: "Score (%)",
    availableCharts: ["bar", "radar", "pie"],
  },
  {
    id: 2,
    projectName: "Smart Home Network Design",
    description: "Network reliability and device integration metrics",
    metrics: [
      { label: "IoT Devices",        value: "12" },
      { label: "Network Uptime",     value: "99%" },
      { label: "VLANs Configured",   value: "4" },
      { label: "Security Protocols", value: "3" },
    ],
    chartData: [
      { name: "Smart Lighting", value: 98 },
      { name: "Security Cams",  value: 95 },
      { name: "Thermostats",    value: 92 },
      { name: "Sensors",        value: 97 },
      { name: "Network Core",   value: 99 },
    ],
    dataLabel: "Reliability (%)",
    availableCharts: ["bar", "radar", "pie"],
  },

  // ── TEMPLATE — copy this block to add a new project dashboard ─
  // {
  //   id: 3,
  //   projectName: "Your Project Title",
  //   description: "What these metrics represent",
  //   metrics: [
  //     { label: "Metric Name", value: "Value" },
  //     { label: "Metric Name", value: "Value" },
  //     { label: "Metric Name", value: "Value" },
  //     { label: "Metric Name", value: "Value" },
  //   ],
  //   chartData: [
  //     { name: "Category A", value: 80 },
  //     { name: "Category B", value: 65 },
  //     { name: "Category C", value: 90 },
  //   ],
  //   dataLabel: "Score (%)",
  //   availableCharts: ["bar", "line", "pie", "radar"],
  // },
];
