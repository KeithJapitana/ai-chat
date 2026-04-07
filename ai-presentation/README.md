# AI Strategy Playbook

A **cinematic, dark-themed React + Tailwind CSS presentation** with multi-tab navigation and light/dark theme toggle. Built for franchise AI strategy meetings.

🔗 **[View Live Demo](#)** (Add your URL after deployment)

---

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

Open **http://localhost:5174/** in your browser.

### Production Build

```bash
npm run build
```

Output is in the `dist/` folder, ready for deployment.

---

## ✨ Features

- **8 comprehensive tabs** with strategic content
- **Light/Dark theme toggle** (☀️/🌙 button)
- **Multi-tab navigation** with smooth transitions
- **Fully responsive** — mobile and desktop optimized
- **Animated elements** with staggered reveals
- **Production-ready** — optimized bundle (~68KB gzipped)

### Content Tabs

| Tab | Content |
|-----|---------|
| 📄 **Cheat Sheet** | Core message, key stats, workflow, tool stack, use cases, 90-day plan, risks, skills |
| 🔑 **Deep Dive** | Executive summary + 7 big strategic ideas with detailed breakdowns |
| 💼 **Use Cases** | 6 high-value service offerings (personalized videos, testimonial clips, FDD explainers, etc.) |
| ❗ **Meeting Intel** | 5 signals to watch for during strategy meetings |
| ❓ **Smart Questions** | Strategic questions organized by category + one-liner to sound sharp |
| 🗣️ **Talking Points** | 6 context-specific meeting scripts |
| 🎯 **Q&A** | 7 pre-loaded answers to common questions |
| 🚨 **Challenge** | 4 potential gaps to raise + final takeaway |

---

## 🎨 Design

### Dark Theme (Default)
- Obsidian black background
- Neon lime, cyan, amber, coral, violet accents
- Atmospheric gradient orbs
- Film grain texture overlay

### Light Theme
- Warm cream/white background
- Deep saturated green, cyan, orange, red, purple accents
- Subtle grain texture
- Clean, editorial aesthetic

### Typography
- **Display:** Instrument Serif (elegant headings)
- **Body:** Outfit (clean, modern)
- **Code/Stats:** JetBrains Mono

---

## 📦 Deployment

### Hostinger (Recommended for Static Sites)

#### Option 1: Upload via File Manager
1. Build the project: `npm run build`
2. Go to Hostinger File Manager
3. Navigate to `public_html` (or your domain folder)
4. Upload **all contents** of the `dist/` folder
5. Done! Visit your domain

#### Option 2: GitHub Auto-Deploy
1. Push to GitHub (see below)
2. In Hostinger, go to **Website → GitHub Auto-Deploy**
3. Connect your repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Deploy!

### Other Platforms

**Vercel:**
```bash
npm install -g vercel
vercel deploy
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**GitHub Pages:**
1. Build: `npm run build`
2. Push `dist/` to `gh-pages` branch
3. Enable Pages in repo settings

---

## 🔧 GitHub Setup

### Initial Push

```bash
# If not already initialized
git init
git add .
git commit -m "Initial commit: AI Strategy Playbook"

# Add your GitHub repo
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Update After Changes

```bash
git add .
git commit -m "Update presentation content"
git push
```

---

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4
- **Fonts:** Google Fonts (Instrument Serif, Outfit, JetBrains Mono)
- **Animations:** CSS keyframes with staggered delays

---

## 📂 Project Structure

```
ai-presentation/
├── dist/                 # Production build (ready for deployment)
├── public/              # Static assets (favicon, icons)
├── src/
│   ├── App.jsx          # Main app + all tab components
│   ├── index.css        # Tailwind imports + theme + animations
│   ├── main.jsx         # React entry point
│   └── App.css          # (Minimal, kept for compatibility)
├── index.html           # HTML template
├── vite.config.js       # Vite + Tailwind config
├── package.json         # Dependencies
└── .gitignore           # Git ignore rules
```

---

## 🎯 Customization

### Change Accent Colors

Edit `src/index.css`:

```css
@theme {
  --color-neon-lime: #b8ff57;
  --color-neon-cyan: #57ffe0;
  /* ... etc */
}
```

### Change Fonts

1. Update Google Fonts in `index.html`
2. Update font variables in `src/index.css`:

```css
@theme {
  --font-display: 'Your Font', serif;
  --font-body: 'Your Font', sans-serif;
  --font-mono: 'Your Font', monospace;
}
```

### Add Content

Edit `src/App.jsx` — all content is in component functions like `CheatSheet()`, `DeepDive()`, etc.

---

## 📊 Performance

- **Bundle Size:** ~68KB gzipped JS + ~6KB gzipped CSS
- **First Load:** < 100ms on Vite dev server
- **Production:** Optimized with tree-shaking and code-splitting

---

## 💡 Usage Tips

- **Present live:** Use in browser during meetings
- **Switch themes:** Use ☀️/🌙 button for different lighting conditions
- **Export PDF:** Print to PDF with Chrome for handouts
- **Share link:** Deploy and share URL with team
- **Customize content:** Edit text directly in `App.jsx`

---

## 📄 License

MIT — feel free to use, modify, and distribute.

---

## 🔗 Links

- **GitHub Repository:** https://github.com/KeithJapitana/ai-chat
- **Live Demo:** (Add after deployment)
- **Report Issues:** https://github.com/KeithJapitana/ai-chat/issues

---

**Built with intention. Designed to stand out.**
