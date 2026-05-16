# Stephan Kwapis — Portfolio v2
React + Vite. All content in `src/data/content.js`. Deploy via Render → auto-push on every `git push`.

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # output → /dist
```

---

## ⚠️ Asset Setup (required before first build)

All images are served from `/public/assets/`. Copy your existing image files there.

**From your old project**, copy everything in `src/assets/` into this project's `public/assets/`:

```
public/
└── assets/
    ├── html.png
    ├── css.png
    ├── js.png
    ├── react.png
    ├── node.png
    ├── express.png
    ├── mongoDB.png
    ├── github.png
    ├── ai.png
    ├── ps.png
    ├── id.png
    ├── premiere.png
    ├── courageforconnor.png
    ├── weather.png
    ├── squatchdaisy.jpg
    ├── gumseat.jpg
    ├── cbt.png
    ├── rave.png
    ├── misc.png
    ├── noreastr2024logosingle.jpg
    ├── Nutcracker-2022-Poster-Master.jpg
    ├── Nutcracker-2023-Poster-Master.jpg
    ├── Nutcracker-2024-Poster-Master.jpg
    ├── 2023-nutcracker.jpg
    ├── Robin-Hood-2024-Poster-Final.jpg
    ├── robinhoodhoodie.jpg
    ├── rave1.jpg rave2.jpg rave3.jpg rave4.jpg
    ├── noreastr2024logo.jpg noreastrPoster.jpg noreastrTee.jpg
    ├── misc1.jpg misc2.jpg misc3.jpg misc4.jpg misc5.jpg
    ├── 5-ways-instagram.jpeg
    ├── dancer-reels.jpeg
    ├── Carousel-Mockup.jpg
    ├── A1CU car sale.png
    ├── A1CU instagram reel.png
    ├── a1cu6.png
    ├── pr1.jpg pr2.jpg pr3.jpg pr4.jpg
    └── profile8bit.png   (optional — not currently used in v2)
```

Also drop your `resume.pdf` into `/public/resume.pdf`.

---

## Project Structure

```
src/
├── data/content.js        ← ALL site content — edit here
├── components/
│   ├── Nav
│   ├── Hero
│   ├── About
│   ├── Skills
│   ├── Projects           ← gallery lightbox built in
│   ├── Marketing          ← 3 case studies, image modal
│   ├── Contact            ← EmailJS form (credentials in content.js)
│   ├── Lightbox           ← keyboard-navigable image viewer
│   └── Footer
├── hooks/useReveal.js     ← scroll-triggered animations
├── styles/global.css      ← design tokens + shared classes
├── App.jsx
└── main.jsx
public/
├── assets/                ← drop all images here
└── resume.pdf
```

---

## Deploy to Render (auto-deploy on git push)

Your Render static site should already be connected to this repo.
If not:

1. Render Dashboard → **New → Static Site**
2. Connect `SDKwapis/Billionaires-Coding-Club-A-Portfolio`
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add custom domain: `stephankwapis.com`

Every `git push main` triggers an automatic rebuild. No manual steps.

---

## Updating Content

Everything lives in `src/data/content.js`:

| Export | What it controls |
|--------|-----------------|
| `meta` | Name, email, LinkedIn, GitHub, resume path, EmailJS keys |
| `heroTags` | Skill tags in the hero section |
| `about` | Bio paragraphs and sidebar stats |
| `skills` | Skill cards (name, years, image path) |
| `projects` | Project cards (name, desc, image, type, stack, link/gallery) |
| `caseStudies` | Marketing case studies (goals, images, body copy, metrics) |

To add a project: append an object to the `projects` array with either a `link` (string) or `gallery` (array of image paths).

---

## Design Tokens

Edit colors in `src/styles/global.css`:

```css
--ink:    #0d0d0d   /* primary dark */
--paper:  #f5f2ec   /* warm off-white background */
--accent: #c8391a   /* red — labels, hover, numbers */
--accent2:#1a4fc8   /* blue — name, link hovers */
```
