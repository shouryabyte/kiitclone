# Images to add (WebP)

This project is a static React redesign concept. It expects local images in `src/assets/images/` so Vercel can serve them via CDN after build.

Important:
- Use **original** or **license-safe** images. Do **not** copy copyrighted images from KIIT's website.
- Keep filenames **exactly** as listed below.
- Recommended size: **1600x900** (or similar) in **WebP**.
- The app is designed to **not crash** if images are missing. Missing images render **gradient placeholders**.

## Required files

Place these files here:

- `kiit-logo.svg` (preferred) or `kiit-logo.png`
  - Used on: Navbar left brand area.
  - Alt: "KIIT University Logo"
  - Recommended: transparent background, ~512x512 (or similar), SVG preferred.

- `hero-campus.webp`
  - Used on: Home page hero visual.
  - Alt: "KIIT-inspired campus hero visual"

- `admissions.webp`
  - Used on: Admissions page hero / KIITEE section visual card.
  - Alt: "Admissions help and guidance visual"

- `research-lab.webp`
  - Used on: Home highlight cards + Campus life "Research Labs" card.
  - Alt: "Research lab environment visual"

- `campus-life.webp`
  - Used on: Campus & Placements hero / campus life section.
  - Alt: "Campus life and student community visual"

- `sports.webp`
  - Used on: Campus life card: Sports Complexes.
  - Alt: "Sports facilities visual"

- `hostel.webp`
  - Used on: Campus life card: Hostels.
  - Alt: "Student hostel facilities visual"

- `placements.webp`
  - Used on: Campus & Placements placements section.
  - Alt: "Placements and career readiness visual"

- `international.webp`
  - Used on: Home / role cards: International Applicant.
  - Alt: "International students and global exposure visual"

- `library.webp`
  - Used on: Academics / programs page visual card (optional accent).
  - Alt: "Library and learning resources visual"

- `innovation.webp`
  - Used on: Home highlight card + Campus life "Innovation Studios" card.
  - Alt: "Innovation and startup ecosystem visual"

## How images are referenced

Images are resolved via `src/assets/imageMap.js` using `import.meta.glob`.
If a file is missing, the corresponding entry becomes `null` and the UI shows a gradient placeholder instead of rendering an `<img>`.
