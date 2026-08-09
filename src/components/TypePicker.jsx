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
          fontSize: 13.5,
          color: "var(--muted)",
          textDecoration: "none",
        }}
      >
        ← Choose a different theme
      </a>

      <div style={{ marginTop: 18 }}>
        <Label>{theme.label.en}</Label>
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
          <span aria-hidden="true"> · </span>
          <span>{theme.label.mn}</span>
        </h1>
        <p
          style={{
            fontFamily: "var(--sans)",
            color: "var(--muted)",
            maxWidth: 560,
          }}
        >
          Would you like a classical or modern original poem, or an
          AI-generated one?
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
          maxWidth: 640,
          marginTop: 24,
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
            gap: 4,
          }}
        >
          <strong style={{ fontFamily: "var(--serif)", fontSize: "1.1rem" }}>
            Original poem
          </strong>
          <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
            {originalCount} {originalCount === 1 ? "poem" : "poems"} by
            historical poets
          </span>
        </Card>
        <Card
          as="button"
          interactive={aiCount > 0}
          onClick={() => aiCount > 0 && onChoose(true)}
          style={{
            opacity: aiCount === 0 ? 0.4 : 1,
            cursor: aiCount === 0 ? "not-allowed" : "pointer",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            borderLeft: "4px solid var(--po-ai)",
          }}
        >
          <strong
            style={{
              fontFamily: "var(--serif)",
              fontSize: "1.1rem",
              color: "var(--po-ai)",
            }}
          >
            AI-generated poem ✨
          </strong>
          <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
            {aiCount} {aiCount === 1 ? "poem" : "poems"}, clearly labeled
          </span>
        </Card>
      </div>
    </div>
  );
}
