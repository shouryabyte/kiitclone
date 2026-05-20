import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Sparkles, Moon, Sun } from "lucide-react";
import { images } from "../assets/imageMap.js";
import { announcement, brand, nav } from "../data.js";

function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

export default function Navbar({ theme = "light", onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const panelId = "mobile-nav-panel";
  const buttonRef = useRef(null);

  const links = useMemo(() => nav, []);

  useBodyScrollLock(mobileOpen);

  useEffect(() => {
    // Close the mobile menu when route changes.
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    if (mobileOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="announcement" role="region" aria-label="Announcement">
        <div className="container">
          <div className="pill">
            <Sparkles size={16} aria-hidden="true" />
            <span>{announcement.primary}</span>
          </div>
          <div className="pill" aria-label="Contact snapshot">
            <span>{brand.location}</span>
            <span aria-hidden="true">-</span>
            <span>{announcement.secondary}</span>
          </div>
        </div>
      </div>

      <header className="nav" role="banner">
        <div className="container" aria-label="Primary navigation">
          <Link to="/" className="brand-logo" aria-label="Go to KIIT home page">
            {images?.kiitLogo ? (
              <img
                src={images.kiitLogo}
                alt="KIIT University Logo"
                width="72"
                height="72"
                decoding="async"
                fetchPriority="high"
              />
            ) : (
              <div className="brand-mark" aria-hidden="true" />
            )}
            <div className="brand-text" aria-label="Institute name">
              <strong>KIIT</strong>
              <span>{brand.full}</span>
              <small>{brand.legal}</small>
            </div>
          </Link>

          <nav className="nav-links" aria-label="Main">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="navlink focus-ring"
                end={l.to === "/"}
                onClick={() => {
                  // Ensure nav links always land at the top of the target page.
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-cta">
            <button
              type="button"
              className="icon-btn theme-toggle"
              onClick={onToggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
            </button>
            <Link className="btn btn-secondary" to="/admissions#apply">
              <span className="apply-long">Apply Now</span>
              <span className="apply-short" aria-hidden="true">
                Apply
              </span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <button
              ref={buttonRef}
              className="icon-btn mobile-toggle"
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls={panelId}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="mobile-panel" id={panelId}>
            <div className="container">
              <div className="stack" role="navigation" aria-label="Mobile">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className="navlink focus-ring"
                    end={l.to === "/"}
                  >
                    {l.label}
                  </NavLink>
                ))}
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onToggleTheme}
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {theme === "dark" ? (
                    <>
                      <Sun size={16} aria-hidden="true" /> Light mode
                    </>
                  ) : (
                    <>
                      <Moon size={16} aria-hidden="true" /> Dark mode
                    </>
                  )}
                </button>
                <Link className="btn btn-primary" to="/admissions#apply">
                  Apply for KIITEE 2026 <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}
