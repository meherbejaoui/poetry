import { useState, useRef } from "react";

/*
  Click-to-load "tip me" button, matching the one on meherbejaoui.com.
  Nothing from Ko-fi loads until this is clicked — costs nothing, sets
  no cookie. On click it injects Ko-fi's real overlay-widget.js and
  calls kofiWidgetOverlay.draw(), which renders Ko-fi's own floating
  button in the same spot; this placeholder then hides itself.
*/
// Reserves room in normal document flow so this floating, viewport-fixed
// button never ends up sitting on top of real content underneath it —
// notably on short pages where the button's band overlaps whatever
// happens to be at the bottom of the viewport on first paint.
const SPACER_HEIGHT = 76;

export default function KofiButton() {
  const [hidden, setHidden] = useState(false);
  const [loading, setLoading] = useState(false);
  const loadedRef = useRef(false);

  if (!import.meta.env.PROD) return null;

  // Once Ko-fi's own widget has taken over, it occupies the same spot —
  // keep reserving the space, just stop rendering our placeholder button.
  if (hidden) return <div aria-hidden="true" style={{ height: SPACER_HEIGHT }} />;

  function handleClick() {
    if (loadedRef.current) return;
    loadedRef.current = true;
    setLoading(true);

    const script = document.createElement("script");
    script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
    script.referrerPolicy = "strict-origin-when-cross-origin";
    script.onload = () => {
      if (window.kofiWidgetOverlay) {
        window.kofiWidgetOverlay.draw("meherbejaoui", {
          type: "floating-chat",
          "floating-chat.donateButton.text": "Tip Me",
          "floating-chat.donateButton.background-color": "#00b9fe",
          "floating-chat.donateButton.text-color": "#fff",
        });
      }
      setHidden(true);
    };
    script.onerror = () => {
      loadedRef.current = false;
      setLoading(false);
    };
    document.body.appendChild(script);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        aria-label="Support me on Ko-fi"
        className="eg-focus eg-kofi"
        style={{
          position: "fixed",
          left: 16,
          bottom: 24,
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          gap: 8,
          borderRadius: 999,
          border: "none",
          padding: "12px 16px",
          fontFamily: "var(--sans)",
          fontSize: 14,
          fontWeight: 500,
          color: "#0a2a33",
          background: "#00b9fe",
          boxShadow: "0 8px 20px rgba(0,0,0,.25)",
          cursor: loading ? "wait" : "pointer",
          transition: "transform 150ms ease, box-shadow 150ms ease",
        }}
      >
        <span aria-hidden="true">☕</span>
        <span>Tip Me</span>
      </button>
      <div aria-hidden="true" style={{ height: SPACER_HEIGHT }} />
    </>
  );
}
