import Card from "../design/components/Card.jsx";

export default function ThemeGrid({ themes, onChoose }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "1rem",
        margin: "var(--space-5) 0 0",
      }}
    >
      {themes.map((theme) => (
        <Card
          as="button"
          interactive
          key={theme.id}
          onClick={() => onChoose(theme.id)}
          style={{ display: "flex", flexDirection: "column", gap: 6 }}
        >
          <span style={{ fontSize: "1.6rem", lineHeight: 1 }} aria-hidden="true">
            {theme.icon}
          </span>
          <span
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "var(--ink)",
              marginTop: 4,
            }}
          >
            {theme.label.en}
          </span>
          <span dir="rtl" style={{ fontSize: "1.1rem", color: "var(--po-ar)" }}>
            {theme.label.ar}
          </span>
          <span style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
            {theme.label.mn}
          </span>
        </Card>
      ))}
    </div>
  );
}
