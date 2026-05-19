import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Bolt,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  Globe2,
  Sparkles,
  BadgeCheck
} from "lucide-react";
import { images } from "../assets/imageMap.js";
import { homeHero, heroHighlights, roleCards, recognitionCards, homeNews } from "../data.js";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });
  React.useEffect(() => {
    const m = window.matchMedia(query);
    const onChange = () => setMatches(m.matches);
    onChange();
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, [query]);
  return matches;
}

function Media({ imageKey, alt, width = 1200, height = 800, priority = false }) {
  const src = images?.[imageKey] ?? null;
  if (!src) return <div className="placeholder-media" role="img" aria-label={alt} />;
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}

function HighlightIcon({ name }) {
  const props = { size: 18, "aria-hidden": true };
  switch (name) {
    case "award":
      return <Award {...props} />;
    case "bolt":
      return <Bolt {...props} />;
    case "globe":
      return <Globe2 {...props} />;
    case "flask":
      return <FlaskConical {...props} />;
    case "badge":
      return <BadgeCheck {...props} />;
    default:
      return <Sparkles {...props} />;
  }
}

function HighlightsCarousel() {
  const [page, setPage] = useState(0);
  const isNarrow = useMediaQuery("(max-width: 1024px)");
  const pageSize = isNarrow ? 1 : 2;
  const pageCount = Math.ceil(heroHighlights.length / pageSize);

  const start = page * pageSize;
  const visible = heroHighlights.slice(start, start + pageSize);

  function prev() {
    setPage((p) => (p - 1 + pageCount) % pageCount);
  }
  function next() {
    setPage((p) => (p + 1) % pageCount);
  }

  return (
    <div className="carousel" aria-label="Hero highlight cards carousel">
      <div className="carousel-head">
        <strong>Highlights</strong>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button className="icon-btn" type="button" onClick={prev} aria-label="Previous highlights">
            <ChevronLeft aria-hidden="true" />
          </button>
          <button className="icon-btn" type="button" onClick={next} aria-label="Next highlights">
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="carousel-body">
        <div className="highlight-grid" role="list">
          {visible.map((h) => (
            <article key={h.title} className="highlight-card" role="listitem">
              <div className="highlight-top">
                <span className="highlight-icon" aria-hidden="true">
                  <HighlightIcon name={h.icon} />
                </span>
                <h3>{h.title}</h3>
              </div>
              <p className="highlight-desc">{h.desc}</p>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="dots" aria-label="Carousel pages">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                className={`dot ${i === page ? "active" : ""}`}
                type="button"
                aria-label={`Go to highlight page ${i + 1}`}
                aria-selected={i === page}
                onClick={() => setPage(i)}
              />
            ))}
          </div>
          <span style={{ color: "rgba(15,23,42,0.72)", fontWeight: 800 }}>
            {page + 1}/{pageCount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeRole, setActiveRole] = useState("student");
  const selectedRole = useMemo(
    () => roleCards.find((r) => r.key === activeRole) ?? roleCards[0],
    [activeRole]
  );

  return (
    <>
      {/* Home hero - KIIT-inspired green gradient */}
      <section className="hero kiit-gradient-bg pattern-bg" aria-label="Home hero">
        <div className="container">
          <div className="hero-grid">
            <div className="glass hero-main soft-glow">
              <div className="badge-row" aria-label="Hero chips">
                {homeHero.chips.map((c) => (
                  <span className="badge" key={c}>
                    {c}
                  </span>
                ))}
              </div>

              <h1>{homeHero.headline}</h1>
              <p className="lead">{homeHero.subhead}</p>

              <div className="hero-actions" aria-label="Primary actions">
                <Link className="btn btn-primary" to={homeHero.primaryCta.to}>
                  {homeHero.primaryCta.label} <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link className="btn btn-secondary" to={homeHero.secondaryCta.to}>
                  {homeHero.secondaryCta.label}
                </Link>
                <Link className="btn btn-ghost" to="/campus-placements#campus">
                  Campus Life
                </Link>
              </div>

              {/* Trust strip / quick actions */}
              <div className="hero-trust" aria-label="Quick actions and trust highlights">
                <Link className="trust-chip" to="/admissions">
                  Admissions Open - KIITEE 2026
                </Link>
                <Link className="trust-chip" to="/programs#find">
                  Program Finder
                </Link>
                <Link className="trust-chip" to="/campus-placements#campus">
                  Campus Life
                </Link>
                <span className="trust-chip" aria-label="Research driven academic ecosystem">
                  Research-driven academic ecosystem
                </span>
              </div>
            </div>

            <div className="hero-side">
              <div className="hero-visual" aria-label="Hero visual">
                <Media imageKey={homeHero.imageKey} alt={homeHero.imageAlt} priority width={1400} height={900} />
                <div className="img-overlay" aria-hidden="true" />
              </div>
              <HighlightsCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* About anchor for KIIT-style nav (kept short, clean) */}
      <section className="section mint-section" id="about" aria-label="About KIIT">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>About KIIT</h2>
              <p>Cleaner hierarchy: quick understanding first, details later.</p>
            </div>
            <Link className="btn btn-blue" to="/programs">
              Explore Academics <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid-3">
            <div className="card mint">
              <div className="kicker">Academic Identity</div>
              <h3>Premium, organized structure</h3>
              <p>KIIT-inspired layout with strong green branding, better scanning, and fewer competing elements.</p>
            </div>
            <div className="card mint">
              <div className="kicker">Student-first UX</div>
              <h3>Clear next steps</h3>
              <p>Admissions, programs, and campus actions are always one click away across desktop and mobile.</p>
            </div>
            <div className="card mint">
              <div className="kicker">Performance</div>
              <h3>Static + fast</h3>
              <p>Fast, responsive pages with optimized assets and accessibility-first UI patterns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Role-based quick access (KIIT-inspired "I am a..." but better) */}
      <section className="section mint-section" aria-label="Role based quick access">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>I am a...</h2>
              <p>Role cards replace weak dropdowns and reveal relevant quick links.</p>
            </div>
          </div>

          <div className="grid-6" role="list" aria-label="Roles">
            {roleCards.map((r) => (
              <button
                key={r.key}
                type="button"
                className="card"
                aria-pressed={activeRole === r.key}
                onClick={() => setActiveRole(r.key)}
                style={{
                  textAlign: "left",
                  cursor: "pointer",
                  borderColor: activeRole === r.key ? "rgba(0,184,107,0.35)" : undefined,
                  background: activeRole === r.key ? "linear-gradient(180deg, var(--kiit-mint), white 70%)" : "white"
                }}
              >
                <strong style={{ display: "block", fontSize: "1.02rem" }}>{r.title}</strong>
                <span style={{ color: "var(--muted)", fontWeight: 700 }}>{r.desc}</span>
              </button>
            ))}
          </div>

          <div className="card" style={{ marginTop: 14, overflow: "hidden" }}>
            <div className="grid-2" style={{ alignItems: "stretch" }}>
              <div style={{ padding: 16 }}>
                <div className="kicker">Quick Links</div>
                <h3 style={{ marginTop: 6 }}>{selectedRole.title}</h3>
                <p style={{ marginTop: 6 }}>{selectedRole.desc}</p>
                <div className="list" style={{ marginTop: 12 }}>
                  {selectedRole.links.map((l) => (
                    <Link key={l.to} className="list-item" to={l.to} aria-label={`${selectedRole.title}: ${l.label}`}>
                      <div>
                        <div className="title">{l.label}</div>
                        <div className="meta">Open section</div>
                      </div>
                      <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hero-visual" aria-label="Role visual" style={{ minHeight: 260 }}>
                <Media imageKey={selectedRole.imageKey} alt={`${selectedRole.title} visual`} width={1200} height={800} />
                <div className="img-overlay" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ranking / accreditation preview - dark green section with white cards */}
      <section className="section dark-green-section pattern-bg" aria-label="Recognition and accreditation">
        <div className="container">
          <div className="section-header light">
            <div>
              <h2>Recognition & academic identity</h2>
              <p>Highlights that surface accreditation, learning environment, and academic focus.</p>
            </div>
            <Link className="btn btn-secondary" to="/admissions">
              Admissions info <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid-4">
            {recognitionCards.map((c) => (
              <div key={c.title} className="card dark">
                <div className="kicker">Highlights</div>
                <h3>{c.title}</h3>
                <ul style={{ margin: "10px 0 0 18px", color: "var(--muted)", lineHeight: 1.75, fontWeight: 650 }}>
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News / updates */}
      <section className="section" aria-label="News and updates">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>News & updates</h2>
              <p>Clean metadata and scan-friendly cards.</p>
            </div>
            <Link className="btn btn-secondary" to="/campus-placements#news">
              View campus updates <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid-3">
            {homeNews.map((n) => (
              <article key={n.id} className="card mint">
                <div className="kicker">
                  {n.category} - {n.date}
                </div>
                <h3 style={{ marginTop: 8 }}>{n.title}</h3>
                <p style={{ marginTop: 8 }}>{n.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
