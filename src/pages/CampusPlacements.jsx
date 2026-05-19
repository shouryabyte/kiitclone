import React, { useMemo, useState } from "react";
import { Filter, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../assets/imageMap.js";
import { campusPage, brand } from "../data.js";

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

export default function CampusPlacements() {
  const [filter, setFilter] = useState("All");

  const filteredUpdates = useMemo(() => {
    if (filter === "All") return campusPage.updates;
    return campusPage.updates.filter((e) => e.type === filter);
  }, [filter]);

  return (
    <>
      {/* Campus & Careers hero */}
      <section className="hero kiit-gradient-bg pattern-bg" aria-label="Campus and careers hero">
        <div className="container">
          <div className="hero-grid">
            <div className="glass hero-main">
              <div className="badge-row" aria-label="Campus chips">
                <span className="badge">Campus Life</span>
                <span className="badge">Careers</span>
                <span className="badge">News & Events</span>
              </div>
              <h1>{campusPage.hero.headline}</h1>
              <p className="lead">{campusPage.hero.subhead}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#campus">
                  Explore campus life <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a className="btn btn-secondary" href="#placements">
                  Placements & career support
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Contact & Quick Help
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Campus visual">
              <Media imageKey="campusLife" alt="Campus life visual" priority width={1400} height={900} />
              <div className="img-overlay" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* 1) Campus Life */}
      <section className="section mint-section" aria-label="Campus life section" id="campus">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Campus life</h2>
              <p>Facilities and student experience highlights (local images with safe fallbacks).</p>
            </div>
          </div>

          <div className="grid-3">
            {campusPage.lifeCards.map((c) => (
              <article key={c.title} className="card" style={{ overflow: "hidden", padding: 0 }}>
                <div className="hero-visual" style={{ borderRadius: 0, minHeight: 200, border: 0 }}>
                  <Media imageKey={c.imageKey} alt={`${c.title} visual`} width={1200} height={800} />
                  <div className="img-overlay" aria-hidden="true" />
                </div>
                <div style={{ padding: 16 }}>
                  <div className="kicker">Campus</div>
                  <h3 style={{ marginTop: 8 }}>{c.title}</h3>
                  <p style={{ marginTop: 8 }}>{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2) Placements & Career Support */}
      <section
        className="section dark-green-section pattern-bg"
        aria-label="Placements and career support section"
        id="placements"
      >
        <div className="container">
          <div className="section-header light">
            <div>
              <h2>Placements & career support</h2>
              <p>Neutral labels only (no unsupported numeric claims).</p>
            </div>
            <Link className="btn btn-secondary" to="/admissions#apply">
              Apply now <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid-2">
            <div className="hero-visual" aria-label="Placements visual" style={{ minHeight: 320 }}>
              <Media imageKey="placements" alt="Placements and career readiness visual" width={1400} height={900} />
              <div className="img-overlay" aria-hidden="true" />
            </div>
            <div className="grid-2" style={{ alignContent: "start" }}>
              {campusPage.placements.map((p) => (
                <div key={p.title} className="highlight-card">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="section" id="recruiters" aria-label="Recruiter tiles">
            <div className="section-header light">
              <div>
                <h2>Recruiter tiles</h2>
                <p>Category tiles (no company claims) for a cleaner KIIT-inspired layout.</p>
              </div>
            </div>
            <div className="grid-4">
              {campusPage.recruiterTiles.map((r) => (
                <div key={r} className="card dark" aria-label={`${r} recruiter tile`}>
                  <div
                    aria-hidden="true"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 16,
                      background:
                        "linear-gradient(135deg, rgba(0,184,107,0.16), rgba(14,165,168,0.12))",
                      border: "1px solid rgba(10,18,32,0.12)"
                    }}
                  />
                  <h3 style={{ marginTop: 10 }}>{r}</h3>
                  <p>Recruiter category</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News + events filter */}
      <section className="section mint-section" aria-label="News and events" id="news">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>News & events</h2>
              <p>Filter instantly using React state.</p>
            </div>
          </div>

          <div className="card">
            <div className="grid-2" style={{ alignItems: "center" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                <Filter size={18} aria-hidden="true" />
                <strong>Filter:</strong>
                <div className="chips" role="group" aria-label="News and events filter">
                  {["All", "News", "Event"].map((k) => (
                    <button
                      key={k}
                      type="button"
                      className="chip"
                      aria-pressed={filter === k}
                      onClick={() => setFilter(k)}
                    >
                      {k}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: "right", color: "var(--muted)", fontWeight: 800 }}>
                Showing <strong style={{ color: "var(--text)" }}>{filteredUpdates.length}</strong> items
              </div>
            </div>
          </div>

          <div className="grid-2" style={{ marginTop: 14 }}>
            <div className="card mint">
              <div className="kicker">Updates</div>
              <h3 style={{ marginTop: 8 }}>Campus updates</h3>
              <div className="list" role="list" aria-label="Filtered campus items" style={{ marginTop: 10 }}>
                {filteredUpdates.map((e) => (
                  <article key={e.id} className="list-item" role="listitem">
                    <div>
                      <div className="title">{e.title}</div>
                      <div className="meta">
                        {e.type}
                        {e.month ? ` - ${e.month}${e.year ? ` ${e.year}` : ""}` : ""}
                      </div>
                    </div>
                    <span className="chip" aria-pressed="false" style={{ cursor: "default" }}>
                      {e.type}
                    </span>
                  </article>
                ))}
              </div>
            </div>

            <div className="card mint">
              <div className="kicker">Contact</div>
              <h3 style={{ marginTop: 8 }}>Need help?</h3>
              <p style={{ marginTop: 8 }}>
                Use the floating Quick Help widget for shortcuts. For official contact details, refer to the official
                KIIT website.
              </p>
              <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a className="btn btn-secondary" href="https://kiit.ac.in/" target="_blank" rel="noreferrer">
                  Official website <ArrowRight size={16} aria-hidden="true" />
                </a>
                <Link className="btn btn-blue" to="/admissions#apply">
                  Apply now <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Contact & Quick Help */}
      <section className="section" aria-label="Contact and quick help section" id="contact">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Contact & Quick Help</h2>
              <p>Use Quick Help for shortcuts. For official contact details, refer to kiit.ac.in.</p>
            </div>
          </div>

          <div className="card mint" style={{ marginBottom: 14 }} aria-label="Quick help callout">
            <div className="kicker">Quick Help</div>
            <h3 style={{ marginTop: 8 }}>Need assistance?</h3>
            <p style={{ marginTop: 8 }}>
              Use the Quick Help button for shortcuts to admissions and campus sections. For official contact channels,
              visit kiit.ac.in.
            </p>
            <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a className="btn btn-secondary" href="https://kiit.ac.in/" target="_blank" rel="noreferrer">
                Official website <ArrowRight size={16} aria-hidden="true" />
              </a>
              <Link className="btn btn-blue" to="/admissions#apply">
                Apply now <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid-3">
            <div className="card mint">
              <h3 style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <Mail size={18} aria-hidden="true" /> Email
              </h3>
              <p style={{ marginTop: 8 }}>Refer official KIIT channels for verified email addresses.</p>
            </div>
            <div className="card mint">
              <h3 style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <Phone size={18} aria-hidden="true" /> Phone
              </h3>
              <p style={{ marginTop: 8 }}>Refer official KIIT helpline numbers on the official website.</p>
            </div>
            <div className="card mint">
              <h3 style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <MapPin size={18} aria-hidden="true" /> Location
              </h3>
              <p style={{ marginTop: 8 }}>{brand.location}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
