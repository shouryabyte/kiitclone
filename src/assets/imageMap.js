// Centralized image lookup with safe fallbacks.
// - Uses `import.meta.glob` so missing images do not crash the build.
// - Components should request images by key and render a gradient placeholder when `src` is null.

const files = import.meta.glob(["./images/*.webp", "./images/*.png", "./images/*.svg"], {
  query: "?url",
  import: "default",
  eager: true
});

function pick(filename) {
  const key = `./images/${filename}`;
  return files[key] ?? null;
}

export const images = {
  kiitLogo: (files["./images/kiit-logo.svg"] ?? files["./images/kiit-logo.png"] ?? null),
  heroCampus: pick("hero-campus.webp"),
  admissions: pick("admissions.webp"),
  researchLab: pick("research-lab.webp"),
  campusLife: pick("campus-life.webp"),
  sports: pick("sports.webp"),
  hostel: pick("hostel.webp"),
  placements: pick("placements.webp"),
  international: pick("international.webp"),
  library: pick("library.webp"),
  innovation: pick("innovation.webp")
};

export function getImage(key) {
  return images[key] ?? null;
}
