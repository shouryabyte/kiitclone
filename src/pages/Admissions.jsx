import React, { useMemo, useState } from "react";
import { ArrowRight, Calendar, CheckCircle2, ChevronDown } from "lucide-react";
import ApplyModal from "../components/ApplyModal.jsx";
import { images } from "../assets/imageMap.js";
import { admissionsPage } from "../data.js";

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

function FAQ({ items }) {
  const [openId, setOpenId] = useState(null);
  return (
    <div className="accordion" aria-label="Frequently asked questions">
      {items.map((it, idx) => {
        const id = `faq-${idx}`;
        const panelId = `faq-panel-${idx}`;
        const isOpen = openId === id;
        return (
          <div key={id}>
            <button
              className="acc-btn"
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? null : id)}
            >
              <span>{it.q}</span>
              <ChevronDown aria-hidden="true" />
            </button>
            {isOpen ? (
              <div className="acc-panel" id={panelId} role="region" aria-label={it.q}>
                {it.a}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default function Admissions() {
  const [modalOpen, setModalOpen] = useState(false);
  const [programHint, setProgramHint] = useState("B.Tech - Computer Science & Engineering");

  const infoCards = useMemo(() => admissionsPage.kiiteeCards, []);

  return (
    <>
      {/* Admissions hero */}
      <section className="hero dark-green-section pattern-bg" aria-label="Admissions hero">
        <div className="container">
          <div className="hero-grid">
            <div className="glass hero-main">
              <div className="badge-row" aria-label="Admissions chips">
                <span className="badge">KIITEE 2026</span>
                <span className="badge">Admissions</span>
                <span className="badge">Application</span>
              </div>
              <h1>{admissionsPage.hero.headline}</h1>
              <p className="lead">{admissionsPage.hero.subhead}</p>
              <div className="hero-actions">
                <button className="btn btn-primary" type="button" onClick={() => setModalOpen(true)}>
                  Apply Now <ArrowRight size={16} aria-hidden="true" />
                </button>
                <a className="btn btn-secondary" href="#process">
                  View process
                </a>
                <a className="btn btn-ghost" href="#faq">
                  Read FAQs
                </a>
              </div>
              <div className="hero-trust" aria-label="Admissions quick links">
                <a className="trust-chip" href="#kiitee">
                  KIITEE 2026 overview
                </a>
                <a className="trust-chip" href="#dates">
                  Important dates
                </a>
                <a className="trust-chip" href="#apply">
                  Apply Now
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Admissions visual">
              <Media imageKey="admissions" alt="Admissions guidance visual" priority width={1400} height={900} />
              <div className="img-overlay" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* KIITEE information cards */}
      <section className="section mint-section" aria-label="KIITEE information" id="kiitee">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>KIITEE 2026 information</h2>
              <p>Scan-friendly cards with clearer hierarchy.</p>
            </div>
          </div>
          <div className="grid-3">
            {infoCards.map((c) => (
              <div className="card mint" key={c.title}>
                <div className="kicker">KIITEE</div>
                <h3 style={{ marginTop: 8 }}>{c.title}</h3>
                <p style={{ marginTop: 8 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission process timeline */}
      <section className="section dark-green-section pattern-bg" aria-label="Admission process timeline" id="process">
        <div className="container">
          <div className="section-header light">
            <div>
              <h2>Admission process</h2>
              <p>Step-by-step timeline designed to remain readable on mobile.</p>
            </div>
          </div>
          <div className="timeline" role="list">
            {admissionsPage.timeline.map((t) => (
              <div key={t.title} className="step" role="listitem">
                <strong>{t.title}</strong>
                <span>{t.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply now */}
      <section className="section mint-section" aria-label="Apply now" id="apply">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Apply Now</h2>
              <p>Static form experience (no data is sent).</p>
            </div>
          </div>
          <div className="card">
            <div className="grid-2" style={{ alignItems: "center" }}>
              <div>
                <div className="kicker">Application</div>
                <h3 style={{ marginTop: 8 }}>Start your application</h3>
                <p style={{ marginTop: 8 }}>
                  Set a program interest hint (optional) and open the modal. Keyboard users can close with Escape.
                </p>
              </div>
              <div style={{ display: "grid", gap: 10 }}>
                <label htmlFor="programHint" style={{ fontWeight: 900 }}>
                  Program interest
                </label>
                <input
                  id="programHint"
                  className="input"
                  value={programHint}
                  onChange={(e) => setProgramHint(e.target.value)}
                />
                <button className="btn btn-primary" type="button" onClick={() => setModalOpen(true)}>
                  Open Apply Now form <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility + dates */}
      <section className="section" aria-label="Eligibility and dates">
        <div className="container">
          <div className="grid-2">
            <div className="card mint">
              <div className="section-header" style={{ marginBottom: 10 }}>
                <div>
                  <h2 style={{ fontSize: "1.2rem", margin: 0 }}>Eligibility</h2>
                  <p style={{ marginTop: 6 }}>Program-specific criteria may apply.</p>
                </div>
              </div>
              <div className="grid-3">
                {admissionsPage.eligibility.map((e) => (
                  <div key={e.title} className="card" style={{ boxShadow: "none" }}>
                    <h3 style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <CheckCircle2 size={18} aria-hidden="true" /> {e.title}
                    </h3>
                    <p style={{ marginTop: 8 }}>{e.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card mint" id="dates" aria-label="Important dates">
              <div className="section-header" style={{ marginBottom: 10 }}>
                <div>
                  <h2 style={{ fontSize: "1.2rem", margin: 0 }}>Important dates</h2>
                  <p style={{ marginTop: 6 }}>Use official sources for confirmed dates.</p>
                </div>
              </div>
              <div className="list" style={{ marginTop: 10 }}>
                {admissionsPage.dates.map((d) => (
                  <div key={d.label} className="list-item">
                    <div>
                      <div className="title" style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        <Calendar size={18} aria-hidden="true" /> {d.label}
                      </div>
                      <div className="meta">{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 12 }}>
                <a className="btn btn-secondary" href="https://kiit.ac.in/" target="_blank" rel="noreferrer">
                  Check official updates <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section mint-section" aria-label="FAQs" id="faq">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>FAQs</h2>
              <p>Accordion uses React state and ARIA for accessibility.</p>
            </div>
          </div>
          <FAQ items={admissionsPage.faqs} />
        </div>
      </section>

      <ApplyModal open={modalOpen} onClose={() => setModalOpen(false)} defaultProgram={programHint} />
    </>
  );
}
