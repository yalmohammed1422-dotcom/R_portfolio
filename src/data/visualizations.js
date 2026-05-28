// ═══════════════════════════════════════════════════════════════
// 📊  VISUALIZATIONS DATA  — Add or edit your data projects here
// ═══════════════════════════════════════════════════════════════
//
// HOW TO ADD A NEW VISUALIZATION PROJECT:
//   1. Place your images inside /public/visualizations/
//   2. Copy the block below and add it to the array
//   3. Reference image paths starting with "/visualizations/filename.png"

export const vizProjects = [
  {
    id: 1,
    title: "Los Angeles Crime Analysis",
    description:
      "A comprehensive data analysis project exploring crime patterns in Los Angeles, focusing on temporal trends, geographic hotspots, and victim demographics.",
    images: [
      {
        src: "/visualizations/crime_vis1.png",
        title: "Time Period Groupings",
        caption: "Early Morning, Morning, Afternoon, Evening — identifies most dangerous time of day",
      },
      {
        src: "/visualizations/crime_vis2.png",
        title: "Top 10 Night Crime Locations",
        caption: "Reveals areas needing enhanced lighting and security measures",
      },
      {
        src: "/visualizations/crime_vis3.png",
        title: "Age Distribution Histogram",
        caption: "Raw age distribution with mean/median — reveals age-specific victimization patterns",
      },
    ],
  },
  {
    id: 2,
    title: "Nobel Prize Winners Analysis",
    description:
      "Exploring Nobel Prize winner demographics, trends, and patterns across decades, countries, categories, and gender distributions.",
    images: [
      {
        src: "/visualizations/nobel_vis1.png",
        title: "Gender Distribution",
        caption: "Bar chart revealing historical gender imbalance in Nobel Prize awards",
      },
      {
        src: "/visualizations/nobel_vis2.png",
        title: "Top 10 Countries",
        caption: "Shows geographic concentration of Nobel Prize winners",
      },
      {
        src: "/visualizations/nobel_vis3.png",
        title: "USA vs World by Decade",
        caption: "Tracks the rise of USA scientific dominance over time",
      },
      {
        src: "/visualizations/nobel_vis4.png",
        title: "Female Proportion by Decade",
        caption: "Shows progress in gender equality over time",
      },
      {
        src: "/visualizations/nobel_vis5.png",
        title: "Timeline of Female Winners",
        caption: "Historical milestone markers in Nobel Prize history",
      },
      {
        src: "/visualizations/nobel_vis6.png",
        title: "Repeat Winners",
        caption: "Extremely rare achievement highlighting exceptional contributions",
      },
    ],
  },
  {
    id: 3,
    title: "Netflix 1990s Movie Analysis",
    description:
      "Exploring Netflix movie data from the 1990s decade, focusing on movie durations and genre-specific characteristics.",
    images: [
      {
        src: "/visualizations/netfilx_vis1.png",
        title: "Most Common Movie Duration",
        caption: "Identifies the most frequently occurring movie duration in the 1990s",
      },
      {
        src: "/visualizations/netfilx_vis2.png",
        title: "Short Action Movies Count",
        caption: "Action movies from the 1990s with duration under 90 minutes",
      },
    ],
  },
  {
    id: 4,
    title: "NYC Schools SAT Performance Analysis",
    description:
      "Comprehensive analysis of SAT performance across New York City schools, focusing on math excellence, top-performing schools, and borough-level comparisons.",
    images: [
      {
        src: "/visualizations/NYC_School_vis1.png",
        title: "Top 10 Schools by Math Score",
        caption: "Identifies schools excelling in mathematics",
      },
      {
        src: "/visualizations/NYC_School_vis2.png",
        title: "Component Breakdown — Top 3 Schools",
        caption: "Identify overall top-performing schools across all SAT components",
      },
      {
        src: "/visualizations/NYC_School_vis3.png",
        title: "4-Panel Borough Comparison",
        caption: "Average, std dev, count, and scatter — identifies most inconsistent SAT borough",
      },
    ],
  },
  // ── TEMPLATE — copy this block to add a new viz project ──────
  // {
  //   id: 5,
  //   title: "Your Analysis Title",
  //   description: "Short description of what this analysis covers.",
  //   images: [
  //     {
  //       src: "/visualizations/your_image.png",
  //       title: "Chart Title",
  //       caption: "What this chart shows",
  //     },
  //   ],
  // },
];
