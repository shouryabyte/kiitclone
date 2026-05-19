import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { images } from "../assets/imageMap.js";
import { programList, programsPage, schools } from "../data.js";

function Media({ imageKey, alt, width = 1200, height = 800 }) {
  const src = images?.[imageKey] ?? null;
  if (!src) return <div className="placeholder-media" role="img" aria-label={alt} />;
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      loading="lazy"
      decoding="async"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}

export default function Programs() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return programList
      .filter((p) => (activeCategory === "All" ? true : p.category === activeCategory))
      .filter((p) => (q ? p.name.toLowerCase().includes(q) : true));
  }, [query, activeCategory]);

  return (
    <>
      {/* Programs hero */}
      <section className="hero kiit-gradient-bg pattern-bg" aria-label="Programs hero">
        <div className="container">
          <div className="hero-grid">
            <div className="glass hero-main">
              <div className="badge-row" aria-label="Programs hero chips">
                <span className="badge">Academics</span>
                <span className="badge">Programs</span>
                <span className="badge">Search + filters</span>
              </div>
              <h1>{programsPage.heroTitle}</h1>
              <p className="lead">{programsPage.heroSubtitle}</p>
              <div className="hero-actions">
                <Link className="btn btn-primary" to="/admissions#apply">
                  Apply for KIITEE 2026 <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <a className="btn btn-secondary" href="#find">
                  Start searching
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Academics visual">
              <Media imageKey="library" alt="Academic learning visual" width={1400} height={900} />
              <div className="img-overlay" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Search + filters */}
      <section className="section mint-section" id="find" aria-label="Find your program">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Find Your Program</h2>
              <p>{programsPage.note}</p>
            </div>
          </div>

          <div className="card">
            <div className="grid-2" style={{ alignItems: "center" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <label className="sr-only" htmlFor="program-search">
                  Search programs
                </label>
                <Search size={18} aria-hidden="true" />
                <input
                  id="program-search"
                  className="input"
                  placeholder="Search e.g., Engineering, Law, Design..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="chips" aria-label="Category filter chips">
                <button
                  type="button"
                  className="chip"
                  aria-pressed={activeCategory === "All"}
                  onClick={() => setActiveCategory("All")}
                >
                  All
                </button>
                {programsPage.categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className="chip"
                    aria-pressed={activeCategory === c}
                    onClick={() => setActiveCategory(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 12, color: "var(--muted)", fontWeight: 800 }}>
              Showing <strong style={{ color: "var(--text)" }}>{filtered.length}</strong> programs
            </div>
          </div>

          <div className="section" aria-label="Program list">
            <div className="list" role="list">
              {filtered.map((p) => (
                <div key={p.name} className="list-item" role="listitem">
                  <div>
                    <div className="title">{p.name}</div>
                    <div className="meta">
                      {p.category} - {p.school}
                    </div>
                  </div>
                  <Link className="btn btn-blue" to="/admissions#apply" aria-label={`Apply for ${p.name}`}>
                    Apply <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schools */}
      <section className="section" id="schools" aria-label="Schools">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Schools</h2>
              <p>KIIT-inspired academic cards with clean tags.</p>
            </div>
          </div>
          <div className="grid-3">
            {schools.map((s) => (
              <div key={s.title} className="card mint">
                <div className="kicker">School</div>
                <h3 style={{ marginTop: 8 }}>{s.title}</h3>
                <p style={{ marginTop: 8 }}>{s.desc}</p>
                <div className="chips" style={{ marginTop: 12 }}>
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="chip"
                      aria-pressed="false"
                      style={{ cursor: "default", background: "var(--kiit-mint-2)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose KIIT academics */}
      <section className="section dark-green-section pattern-bg" id="why" aria-label="Why choose KIIT academics">
        <div className="container">
          <div className="section-header light">
            <div>
              <h2>Why choose KIIT academics?</h2>
              <p>Cleaner, more organized academic story with clearer section hierarchy.</p>
            </div>
            <Link className="btn btn-secondary" to="/campus-placements#campus">
              Explore campus life <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid-3">
            <div className="highlight-card">
              <h3>Structured discovery</h3>
              <p>Search and filter first. Deeper details follow in a more organized hierarchy.</p>
            </div>
            <div className="highlight-card">
              <h3>Lab and studio culture</h3>
              <p>Research labs, innovation studios, and project learning surfaced early in the journey.</p>
            </div>
            <div className="highlight-card">
              <h3>Career readiness support</h3>
              <p>Placements pages focus on support systems, not unsupported numeric claims.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
