import React from "react";
import { Link } from "react-router-dom";
import { brand } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col">
            <h4 style={{ marginBottom: 6 }}>{brand.short}</h4>
            <p className="footer-muted">
              {brand.full}
              <br />
              {brand.legal}
            </p>
            <p className="footer-muted" style={{ marginTop: 10 }}>
              {brand.location}
            </p>
          </div>

          <div className="footer-col" aria-label="About KIIT">
            <h4>About KIIT</h4>
            <Link to="/#about">Overview</Link>
            <Link to="/campus-placements">Campus & Careers</Link>
          </div>

          <div className="footer-col" aria-label="Academics links">
            <h4>Academics</h4>
            <Link to="/programs">Find Your Program</Link>
            <Link to="/programs#schools">Schools</Link>
            <Link to="/programs#why">Why KIIT Academics</Link>
          </div>

          <div className="footer-col" aria-label="Admissions links">
            <h4>Admissions</h4>
            <Link to="/admissions#kiitee">KIITEE 2026</Link>
            <Link to="/admissions#process">Admission Process</Link>
            <Link to="/admissions#apply">Apply Now</Link>
          </div>

          <div className="footer-col" aria-label="Student services links">
            <h4>Student Services</h4>
            <Link to="/campus-placements#campus">Campus Life</Link>
            <Link to="/campus-placements#placements">Placements & Career Support</Link>
            <Link to="/campus-placements#news">News & Events</Link>
          </div>

          <div className="footer-col" aria-label="Contact links">
            <h4>Contact</h4>
            <Link to="/campus-placements#contact">Contact & Quick Help</Link>
            <a href="#main">Back to top</a>
            <a
              href="https://kiit.ac.in/"
              target="_blank"
              rel="noreferrer"
              aria-label="Open official KIIT website in a new tab"
            >
              Official website
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            (c) {new Date().getFullYear()} {brand.short}
          </span>
          <span>For official information, refer to kiit.ac.in</span>
        </div>
      </div>
    </footer>
  );
}
