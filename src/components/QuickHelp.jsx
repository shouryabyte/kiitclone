import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HelpCircle, X, ChevronRight, PhoneCall } from "lucide-react";
import { quickHelp } from "../data.js";

export default function QuickHelp() {
  const [open, setOpen] = useState(false);
  const [callbackSent, setCallbackSent] = useState(false);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => panelRef.current?.focus(), 0);
    return () => window.clearTimeout(t);
  }, [open]);

  return (
    <>
      <div className="help-fab">
        <button
          ref={buttonRef}
          type="button"
          className="btn btn-primary"
          aria-label={open ? "Close quick help" : "Open quick help"}
          aria-expanded={open}
          aria-controls="quick-help-panel"
          onClick={() => setOpen((v) => !v)}
        >
          <HelpCircle size={18} aria-hidden="true" />
          Quick Help
        </button>
      </div>

      {open ? (
        <aside
          id="quick-help-panel"
          className="help-panel"
          role="dialog"
          aria-modal="false"
          aria-label="Quick help panel"
          tabIndex={-1}
          ref={panelRef}
        >
          <div className="help-head">
            <strong>{quickHelp.title}</strong>
            <button
              type="button"
              className="icon-btn"
              aria-label="Close help panel"
              onClick={() => {
                setOpen(false);
                buttonRef.current?.focus();
              }}
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <div className="help-body">
            <p>{quickHelp.desc}</p>
            {callbackSent ? (
              <div className="toast" role="status" aria-live="polite">
                Callback request noted on this device. No data was sent.
              </div>
            ) : null}
            <div className="help-links" aria-label="Help shortcuts">
              {quickHelp.items.map((it) => (
                <Link key={it.title} to={it.to} onClick={() => setOpen(false)}>
                  {it.title} <span>{it.subtitle}</span> <ChevronRight aria-hidden="true" />
                </Link>
              ))}
            </div>
            <button
              type="button"
              className="btn btn-secondary"
              aria-label="Request a callback"
              onClick={() => setCallbackSent(true)}
            >
              <PhoneCall size={16} aria-hidden="true" /> {quickHelp.actions?.[0]?.label ?? "Request Callback"}
            </button>
          </div>
        </aside>
      ) : null}
    </>
  );
}
