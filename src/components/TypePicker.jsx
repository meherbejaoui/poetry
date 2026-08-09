import Card from "../design/components/Card.jsx";
import Label from "../design/components/Label.jsx";

export default function TypePicker({
  theme,
  originalCount,
  aiCount,
  onChoose,
  onBack,
}) {
  return (
    <div>
      <a
        href="/"
        onClick={onBack}
        className="eg-focus"
        style={{
          fontFamily: "var(--sans)",
          fontSize: "var(--text-small)",
          color: "var(--muted)",
          textDecoration: "none",
        }}
      >
        ← Choose a different theme
      </a>

      <div style={{ marginTop: "var(--space-5)", textAlign: "center" }}>
        <span style={{ fontSize: "2.75rem", lineHeight: 1 }} aria-hidden="true">
          {theme.icon}
        </span>
        <div style={{ marginTop: "var(--space-3)" }}>
          <Label>{theme.label.en}</Label>
        </div>
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontSize: "var(--text-h1)",
            margin: "8px 0 4px",
            color: "var(--ink)",
          }}
        >
          <span dir="rtl" style={{ color: "var(--po-ar)" }}>
            {theme.label.ar}
          </span>
          <span aria-hidden="true" style={{ color: "var(--hair)" }}>
            {" "}
            ·{" "}
          </span>
          <span>{theme.label.mn}</span>
        </h1>
        <p
          style={{
            fontFamily: "var(--sans)",
            color: "var(--muted)",
            maxWidth: 480,
            margin: "10px auto 0",
          }}
        >
          Would you like a classical or modern original poem, or an
          AI-generated one?
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.25rem",
          maxWidth: 680,
          margin: "var(--space-6) auto 0",
        }}
      >
        <Card
          as="button"
          interactive={originalCount > 0}
          onClick={() => originalCount > 0 && onChoose(false)}
          style={{
            opacity: originalCount === 0 ? 0.4 : 1,
            cursor: originalCount === 0 ? "not-allowed" : "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 6,
            padding: "var(--space-5)",
          }}
        >
          <span style={{ fontSize: "1.6rem" }} aria-hidden="true">
            📜
          </span>
          <strong
            style={{
              fontFamily: "var(--serif)",
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "var(--ink)",
              marginTop: 4,
            }}
          >
            Original poem
          </strong>
          <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
            {originalCount} {originalCount === 1 ? "poem" : "poems"} by
            historical poets
          </span>
          <span
            style={{
              marginTop: 8,
              fontFamily: "var(--sans)",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "var(--safe)",
            }}
          >
            Read a poem →
          </span>
        </Card>
        <Card
          as="button"
          interactive={aiCount > 0}
          onClick={() => aiCount > 0 && onChoose(true)}
          accent="var(--po-ai)"
          style={{
            opacity: aiCount === 0 ? 0.4 : 1,
            cursor: aiCount === 0 ? "not-allowed" : "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 6,
            padding: "var(--space-5)",
            background: "var(--po-ai-tint)",
          }}
        >
          <span style={{ fontSize: "1.6rem" }} aria-hidden="true">
            ✨
          </span>
          <strong
            style={{
              fontFamily: "var(--serif)",
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "var(--po-ai)",
              marginTop: 4,
            }}
          >
            AI-generated poem
          </strong>
          <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
            {aiCount} {aiCount === 1 ? "poem" : "poems"}, clearly labeled
          </span>
          <span
            style={{
              marginTop: 8,
              fontFamily: "var(--sans)",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "var(--po-ai)",
            }}
          >
            Read a poem →
          </span>
        </Card>
      </div>
    </div>
  );
}
