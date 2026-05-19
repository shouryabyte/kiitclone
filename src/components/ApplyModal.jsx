import React, { useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";

function getFocusable(container) {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
  );
}

export default function ApplyModal({ open, onClose, defaultProgram = "" }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: defaultProgram
  });

  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  const lastActiveRef = useRef(null);

  const titleId = useMemo(() => "apply-modal-title", []);

  useEffect(() => {
    if (!open) return;
    lastActiveRef.current = document.activeElement;
    setSubmitted(false);
    setForm((prev) => ({ ...prev, program: defaultProgram || prev.program }));

    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => window.clearTimeout(t);
  }, [open, defaultProgram]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab") return;

      const focusables = getFocusable(dialogRef.current);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  function update(key, value) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={dialogRef}
      >
        <div className="modal-header">
          <h3 id={titleId}>Apply Now - KIITEE 2026</h3>
          <button
            ref={closeBtnRef}
            type="button"
            className="icon-btn"
            aria-label="Close application form"
            onClick={() => {
              onClose();
              lastActiveRef.current?.focus?.();
            }}
          >
            <X aria-hidden="true" />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div className="toast" role="status" aria-live="polite">
              Application noted on this device. No data was sent.
            </div>
          ) : null}

          <form onSubmit={submit} aria-label="Application form">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="fullName">Full name</label>
                <input
                  id="fullName"
                  className="input"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  autoComplete="name"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="input"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  className="input"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="Phone number"
                  required
                />
                <small>This form does not send data.</small>
              </div>
              <div className="field">
                <label htmlFor="program">Program interest</label>
                <input
                  id="program"
                  className="input"
                  value={form.program}
                  onChange={(e) => update("program", e.target.value)}
                  placeholder="e.g., B.Tech - CSE"
                  required
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-ghost" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
