# 📘 Portfolio Manual — How to Update Your Content

All editable content lives inside `src/data/`. You never need to touch any component file unless you want to change layout or design.

---

## 📁 File Map

| File | What it controls |
|---|---|
| `src/data/config.js` | Your name, email, social links, **EmailJS credentials** |
| `src/data/projects.js` | All projects (title, tech, video, links) |
| `src/data/certificates.js` | Certifications list |
| `src/data/visualizations.js` | Data analysis projects + image paths |
| `src/data/dashboardData.js` | All chart data (skills, tech stack, progress, etc.) |

---

## 1 — Add a New Project

Open `src/data/projects.js` and copy the template at the bottom:

```js
{
  id: 3,                          // increment from the last id
  title: "Your Project Title",
  category: "AI/ML",              // "AI/ML" | "IoT" | "Data Science" | "NLP" | "Web"
  emoji: "🧠",                   // shown if no image is set
  image: "",                      // "/projects/screenshot.png" or leave ""
  videoUrl: "",                   // YouTube URL, or "/videos/demo.mp4", or ""
  description: "What it does.",
  keyFeatures: "Key technical highlights.",
  techStack: ["Python", "TensorFlow"],
  githubUrl: "https://github.com/...",
  liveUrl: "",
},
```

### Adding a demo video to a project

**Option A — YouTube video:**
1. Upload your demo to YouTube
2. Copy the video URL (e.g. `https://www.youtube.com/watch?v=abc123`)
3. Paste it into `videoUrl`

**Option B — Local video file:**
1. Place your `.mp4` file in `public/videos/`
2. Set `videoUrl: "/videos/your-demo.mp4"`

The **▶ Watch Demo** button will automatically appear on the project card once a `videoUrl` is set.

---

## 2 — Update Your Personal Info

Open `src/data/config.js` and edit the `personalInfo` object:

```js
export const personalInfo = {
  name:     "Your Full Name",
  title:    "Your Page Title",
  subtitle: "Your tagline",
  tagline:  "Extended bio sentence shown in the hero section.",
  email:    "your@email.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github:   "https://github.com/yourprofile",
};
```

---

## 3 — Set Up the Contact Form (EmailJS)

The contact form sends emails directly from the browser — no server needed.

1. Go to **https://www.emailjs.com** and create a free account  
   *(free plan = 200 emails/month)*

2. Click **"Add New Service"** → choose Gmail → sign in → copy the **Service ID**

3. Click **"Email Templates"** → **"Create New Template"**  
   Add these variable names in the template body:
   ```
   From: {{from_name}} <{{from_email}}>
   Subject: {{subject}}
   
   {{message}}
   ```
   Copy the **Template ID**

4. Go to **"Account"** → **"API Keys"** → copy your **Public Key**

5. Open `src/data/config.js` and fill in:
   ```js
   export const EMAILJS_SERVICE_ID  = "service_abc123";
   export const EMAILJS_TEMPLATE_ID = "template_xyz789";
   export const EMAILJS_PUBLIC_KEY  = "aBcDeFgHiJkLmNo";
   ```

6. Save the file — the form will work immediately ✓

---

## 4 — Add a Certification

Open `src/data/certificates.js` and copy the template at the bottom:

```js
{
  id: 6,                          // increment from the last id
  icon: "📜",
  title: "Certification Name",
  issuer: "Organization Name",
  color: "blue",                  // "blue" | "purple" | "pink" | "cyan"
  date: "Month Year",
  description: "What the course covered.",
  url: "https://link-to-cert.com",   // or "" if no link
},
```

---

## 5 — Add a Visualization Project

1. Copy your chart images (PNG/JPG) into `public/visualizations/`  
   Name them clearly, e.g. `myproject_chart1.png`

2. Open `src/data/visualizations.js` and add a new block:

```js
{
  id: 5,
  title: "Your Analysis Title",
  description: "What this analysis is about.",
  images: [
    {
      src: "/visualizations/myproject_chart1.png",
      title: "Chart Title",
      caption: "What this chart shows or reveals",
    },
    // add more images...
  ],
},
```

> **Clicking any visualization image** opens it in a full-screen lightbox automatically.

---

## 6 — Update the Dashboard Data

Open `src/data/dashboardData.js`. Each export controls one chart tab:

| Export | Chart tab | What to edit |
|---|---|---|
| `skillsData` | Skills | Change `value` (0–100) per skill |
| `techFrequencyData` | Tech Stack | Change `count` per technology |
| `progressData` | Progress | Add a row per month |
| `radarData` | Domains | Change `A` score per domain |
| `categoryData` | Categories | Change percentages to match your projects |

**To upload a custom CSV:**  
Click the **📂 Upload CSV** tab on the dashboard and drop any CSV file. The first column is used as the X-axis label, and you can pick any numeric column to chart.

---

## 7 — Add a Project Image (instead of emoji)

1. Place your screenshot or image in `public/projects/`  
   e.g. `public/projects/chatbot-screenshot.png`

2. In `src/data/projects.js`, set:
   ```js
   image: "/projects/chatbot-screenshot.png",
   ```
   The emoji will be ignored once an image is set.

---

## 8 — Useful Commands

```bash
# Start local development server (hot reload)
npm run dev

# Build for production (creates /dist folder)
npm run build

# Preview the production build locally
npm run preview
```
