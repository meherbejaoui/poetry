import Card from "../design/components/Card.jsx";

export default function ThemeGrid({ themes, onChoose }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "1rem",
        margin: "2.75rem 0 0",
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
          <span
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "var(--ink)",
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
