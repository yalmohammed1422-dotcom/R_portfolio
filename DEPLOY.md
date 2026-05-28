# 🚀 Launch & Deploy Guide

---

## Step 0 — Prerequisites

Install [Node.js](https://nodejs.org) (version 18 or higher).  
Check with: `node -v`

---

## Step 1 — Run Locally

```bash
# 1. Enter the project folder
cd portfolio-react

# 2. Install dependencies (only needed once)
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser.  
Every time you save a file, the page refreshes instantly.

---

## Step 2 — Build for Production

When you're happy with everything, generate the final static files:

```bash
npm run build
```

This creates a `/dist` folder containing your complete portfolio — pure HTML, CSS, and JavaScript. This is what you upload to any hosting service.

---

## Option A — Vercel (Recommended, Free)

The easiest deployment: live in 2 minutes, automatic HTTPS, global CDN.

### Via GitHub (auto-deploy on every push)

1. Push your project to a GitHub repository
2. Go to **https://vercel.com** → sign in with GitHub
3. Click **"Add New Project"** → select your portfolio repo
4. Leave all settings as-is (Vite is detected automatically)
5. Click **"Deploy"**

Your portfolio is live at `yourname.vercel.app` ✓  
Every future `git push` will auto-deploy a new version.

### Via CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## Option B — Netlify (Free, also excellent)

1. Run `npm run build` to generate the `/dist` folder
2. Go to **https://netlify.com** → sign in
3. Drag and drop the `/dist` folder onto the Netlify dashboard
4. Done — live instantly at a `yourname.netlify.app` URL ✓

### Netlify via GitHub (auto-deploy)

1. Connect your GitHub repo on Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click Deploy

---

## Option C — GitHub Pages (Free)

GitHub Pages serves static sites directly from your repo.

### Setup

1. Install the deployment tool:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Open `package.json` and add to `"scripts"`:
   ```json
   "deploy": "gh-pages -d dist"
   ```
   Also add (if your repo is at `github.com/username/portfolio`):
   ```json
   "homepage": "https://username.github.io/portfolio"
   ```

3. Open `vite.config.js` and set the base path:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/',    // ← your repo name
   })
   ```

4. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```

5. In your GitHub repo → **Settings** → **Pages** → set source to `gh-pages` branch

Your portfolio will be at `https://username.github.io/portfolio` ✓

---

## Custom Domain

All three options above support a custom domain (e.g. `yousef.dev`):

1. Buy a domain from Namecheap, GoDaddy, or Google Domains (~$10/year)
2. In your hosting dashboard, add the custom domain
3. Update your domain's DNS records as instructed
4. HTTPS is provided free automatically

---

## Checklist Before Going Live

- [ ] Updated `personalInfo` in `src/data/config.js` with your real details
- [ ] EmailJS credentials filled in (or contact form visually noted as pending)
- [ ] All project GitHub links updated (not "#")
- [ ] Dashboard data reflects your actual skills
- [ ] Run `npm run build` — no errors in the terminal
- [ ] Run `npm run preview` — site looks correct at `localhost:4173`

---

## Updating After Deployment

### Vercel / Netlify with GitHub
Just commit and push — the platform deploys automatically within ~1 minute.

### Manual updates
```bash
# Make your changes in src/data/*.js
npm run build
# Re-upload /dist, or run: npm run deploy (for GitHub Pages)
```
