import Card from "../design/components/Card.jsx";
import Label from "../design/components/Label.jsx";

export default function TypePicker({
  theme,
  allThemes,
  originalCount,
  aiCount,
  onChoose,
  onBack,
  onSwitchTheme,
}) {
  const otherThemes = allThemes.filter((t) => t.id !== theme.id);

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

      <div style={{ marginTop: "var(--space-4)", textAlign: "center" }}>
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
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "var(--space-5)",
          maxWidth: 760,
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
            padding: "var(--space-6)",
          }}
        >
          <span style={{ fontSize: "2rem" }} aria-hidden="true">
            📜
          </span>
          <strong
            style={{
              fontFamily: "var(--serif)",
              fontSize: "1.35rem",
              fontWeight: 700,
              color: "var(--ink)",
              marginTop: 6,
            }}
          >
            Original poem
          </strong>
          <span style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.5 }}>
            {originalCount} {originalCount === 1 ? "poem" : "poems"} by
            historical poets — al-Mutanabbī, Ibn Zaydūn, Shawqi, Gibran,
            Shakespeare, and others — translated into all three languages.
          </span>
          <span
            style={{
              marginTop: 10,
              fontFamily: "var(--sans)",
              fontSize: "0.88rem",
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
            padding: "var(--space-6)",
            background: "var(--po-ai-tint)",
          }}
        >
          <span style={{ fontSize: "2rem" }} aria-hidden="true">
            ✨
          </span>
          <strong
            style={{
              fontFamily: "var(--serif)",
              fontSize: "1.35rem",
              fontWeight: 700,
              color: "var(--po-ai)",
              marginTop: 6,
            }}
          >
            AI-generated poem
          </strong>
          <span style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.5 }}>
            {aiCount} {aiCount === 1 ? "poem" : "poems"}, composed natively
            in Arabic or Mongolian and translated into the rest — always
            marked with a clear AI badge.
          </span>
          <span
            style={{
              marginTop: 10,
              fontFamily: "var(--sans)",
              fontSize: "0.88rem",
              fontWeight: 600,
              color: "var(--po-ai)",
            }}
          >
            Read a poem →
          </span>
        </Card>
      </div>

      <div style={{ marginTop: "var(--space-7)", textAlign: "center" }}>
        <Label>or jump to another theme</Label>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "var(--space-2)",
            maxWidth: 760,
            margin: "var(--space-3) auto 0",
          }}
        >
          {otherThemes.map((t) => (
            <button
              key={t.id}
              type="button"
              className="eg-focus"
              onClick={() => onSwitchTheme(t.id)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "var(--sans)",
                fontSize: "0.85rem",
                color: "var(--muted)",
                background: "var(--surface)",
                border: "1px solid var(--hair)",
                borderRadius: 999,
                padding: "6px 14px",
                cursor: "pointer",
              }}
            >
              <span aria-hidden="true">{t.icon}</span>
              {t.label.en}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
