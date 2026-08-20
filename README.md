# Kinzul Iman — Portfolio (React + Tailwind CSS v4)

A React + Vite portfolio site in the "Ink & Bone" palette, styled with Tailwind CSS v4, built from resume content.

Design tokens (colors, fonts) live in `src/index.css` under the `@theme` block — Tailwind v4's
CSS-first config, no `tailwind.config.js` needed.

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs a production-ready site into `dist/`.

## Deploy

Drag the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop), or connect this folder
to [Vercel](https://vercel.com/new) — it auto-detects Vite, no config needed.

## Project structure

```
src/
  components/     # Navbar, Hero, About, Skills, Projects, Certifications, Contact, Footer
  data/resume.js  # All resume content lives here — edit this file to update the site
  hooks/useFadeIn.js
  index.css       # Design tokens + all styles
  App.jsx
  main.jsx
public/
  resume.pdf      # Downloadable resume, linked from the nav bar and contact section
```

To update your info, edit `src/data/resume.js` — every section pulls from there.
To swap the resume PDF, replace `public/resume.pdf` (keep the same filename).

## Hero photo

The hero section expects a photo at `public/profile.jpg`. A placeholder image is included so the
layout doesn't break — replace that file with your own photo (same filename, or update the `src`
in `src/components/Hero.jsx` if you use a different name/extension). Recommended: a portrait shot,
roughly 4:5 aspect ratio, at least 800×1000px.
