# KIIT University Static Redesign

## Project Overview
This project is a **static React + Vite redesign concept** inspired by the KIIT University website (`kiit.ac.in`).
It is **not** an exact copy. The goal is a cleaner, more professional, and more user-friendly UI with improved navigation, accessibility, responsiveness, and performance - while staying **fully static** (no backend, no APIs).

## Tech Stack Used
- React
- Vite
- React Router
- JavaScript
- CSS3 (plain CSS)
- Local WebP images (bundled via Vite)
- Vercel deployment (static SPA)
- Vercel CDN for static assets after deployment
- Optional Google Fonts CDN (fonts loaded via CSS import)
- `lucide-react` (lightweight icon library)

## Architecture
- **Component-based React structure**
  - Shared UI in `src/components/`
  - Route pages in `src/pages/`
- **Static content centralized** in `src/data.js`
  - Keeps copy consistent and easy to edit
  - Avoids mock-looking claims and unsupported statistics
- **Images managed safely** via `src/assets/imageMap.js`
  - Uses `import.meta.glob` so missing files do **not** crash builds
  - UI renders gradient placeholders when an image file is absent
- **Static assets** live in `src/assets/images/`
- **React Router** handles navigation between pages
- **Vercel rewrite** in `vercel.json` ensures SPA routes work on refresh

## Pages Included
- Home (`/`)
- Programs (`/programs`)
- Admissions (`/admissions`)
- Campus & Careers (`/campus-placements`)

## Key Features
- Responsive navbar (desktop + mobile hamburger)
- Clickable KIIT logo that routes to `/`
- KIITEE 2026 focused admission CTA + Apply modal (static success message)
- Program search + category filter chips
- Home hero highlight carousel (prev/next + dots)
- Role-based quick access (Student / Parent / International / Recruiter / Alumni)
- FAQ accordion (React state)
- Campus updates filter (News / Event)
- Floating Quick Help button + closable panel
- Local image handling with fallbacks (no external image URLs)
- Mobile-first responsiveness down to very small widths

## What Is Better Than the Real KIIT Website (UX Improvements)
1. **Cleaner first impression**
   Reduced clutter and clearer visual hierarchy with consistent spacing, headings, and cards.

2. **Better navigation**
   Campus Life, Placements, and Contact are grouped into a single **Campus & Careers** destination for a simpler IA.

3. **Better admissions flow**
   "Apply Now" stays visible and the KIITEE 2026 journey is structured with a scan-friendly timeline and FAQ.

4. **Better program discovery**
   Programs can be searched and filtered by category without overwhelming the user.

5. **Better role-based journey**
   Role cards provide tailored quick paths without weak dropdown UX.

6. **Better visual hierarchy**
   Alternating section backgrounds, consistent card styling, and clearer section separation.

7. **Better mobile responsiveness**
   Layout is designed to avoid horizontal overflow and clipping on small mobile screens.

8. **Better accessibility**
   Semantic HTML, keyboard-friendly controls, ARIA where needed, visible focus states, and readable contrast.

9. **Better performance approach**
   Images are local and optimized (WebP) and will be served via Vercel's CDN after deployment.

10. **Better maintainability**
   Content is centralized in `src/data.js` and images are managed in `src/assets/imageMap.js`.

## CDN Explanation (Static Deployment)
This is a **fully static React project**. Local images are bundled during the Vite build and served through **Vercel's global CDN** after deployment. Fonts may be loaded through **Google Fonts CDN**, while the rest of the site remains static and backend-free.

## Deployment Steps
Run locally:
```bash
npm install
npm run dev
npm run build
npm run preview
```

Deploy on Vercel:
1. Push the project to GitHub
2. Import the repository in Vercel
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy

## Vercel Routing
`vercel.json` contains a rewrite rule to support **React Router** route refresh:
- All requests rewrite to `index.html` so SPA routes resolve correctly.

## Final Note
This redesign is a **UI/UX improvement concept** for portfolio/demo purposes. It is **not** an official KIIT website and does not replace KIIT's official web presence.

