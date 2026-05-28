// ═══════════════════════════════════════════════════════════════
// 📊  DASHBOARD DATASET  — THIS IS WHERE YOU ADD YOUR DATA
// ═══════════════════════════════════════════════════════════════
//
// Edit any of the arrays below to update the dashboard charts.
// The dashboard will automatically re-render with your new data.
//
// You can also UPLOAD a CSV file directly on the dashboard page —
// it will auto-generate a bar chart from any numeric CSV column.

// ── 1. SKILL LEVELS ─────────────────────────────────────────────
// Change the `value` (0–100) to reflect your real proficiency.
// Add or remove skills by editing this array.
export const skillsData = [
  { skill: "Python",           value: 90 },
  { skill: "Machine Learning", value: 85 },
  { skill: "Deep Learning",    value: 78 },
  { skill: "Data Analysis",    value: 88 },
  { skill: "IoT Systems",      value: 84 },
  { skill: "NLP",              value: 72 },
  { skill: "Computer Vision",  value: 75 },
  { skill: "Flask / FastAPI",  value: 80 },
  { skill: "SQL",              value: 82 },
  { skill: "Power BI",         value: 76 },
];

// ── 2. TECH FREQUENCY ────────────────────────────────────────────
// How often does each technology appear across your projects?
// One entry per technology. `count` = number of projects it appears in.
export const techFrequencyData = [
  { tech: "Python",         count: 6 },
  { tech: "TensorFlow",     count: 3 },
  { tech: "Flask",          count: 4 },
  { tech: "Gemini API",     count: 2 },
  { tech: "Cisco PT",       count: 2 },
  { tech: "Power BI",       count: 3 },
  { tech: "Pandas",         count: 5 },
  { tech: "Scikit-learn",   count: 4 },
  { tech: "OpenCV",         count: 2 },
  { tech: "Matplotlib",     count: 5 },
];

// ── 3. MONTHLY LEARNING PROGRESS ────────────────────────────────
// Track learning milestones or GitHub activity over time.
// `projects` = cumulative projects completed, `courses` = courses done.
export const progressData = [
  { month: "Jan 25", projects: 1, courses: 2 },
  { month: "Feb 25", projects: 2, courses: 3 },
  { month: "Mar 25", projects: 2, courses: 5 },
  { month: "Apr 25", projects: 3, courses: 6 },
  { month: "May 25", projects: 4, courses: 7 },
  { month: "Jun 25", projects: 4, courses: 9 },
  { month: "Jul 25", projects: 5, courses: 10 },
  { month: "Aug 25", projects: 6, courses: 11 },
  { month: "Sep 25", projects: 7, courses: 13 },
  { month: "Oct 25", projects: 8, courses: 14 },
];

// ── 4. DOMAIN RADAR ─────────────────────────────────────────────
// Five broad domains — used in the radar/spider chart.
// `A` = your score, `fullMark` should stay at 100.
export const radarData = [
  { domain: "AI / ML",         A: 85, fullMark: 100 },
  { domain: "Data Engineering",A: 80, fullMark: 100 },
  { domain: "IoT Systems",     A: 84, fullMark: 100 },
  { domain: "Web / API",       A: 76, fullMark: 100 },
  { domain: "Research",        A: 72, fullMark: 100 },
];

// ── 5. PROJECT CATEGORY SPLIT ───────────────────────────────────
// Used in the pie chart. Matches categories in projects.js.
export const categoryData = [
  { name: "AI / ML",          value: 40 },
  { name: "Data Science",     value: 30 },
  { name: "IoT",              value: 20 },
  { name: "NLP",              value: 10 },
];
