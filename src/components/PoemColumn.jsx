const LANG_META = {
  ar: {
    label: "العربية",
    dir: "rtl",
    accent: "var(--po-ar)",
    tint: "var(--po-ar-tint)",
    font: "var(--serif)",
  },
  en: {
    label: "English",
    dir: "ltr",
    accent: "var(--po-en)",
    tint: "var(--po-en-tint)",
    font: "var(--serif)",
  },
  mn: {
    label: "Монгол",
    dir: "ltr",
    accent: "var(--po-mn)",
    tint: "var(--po-mn-tint)",
    font: "var(--serif)",
  },
};

export default function PoemColumn({ lang, data }) {
  const meta = LANG_META[lang];

  const wrapperStyle = {
    background: meta.tint,
    border: "1px solid var(--card-border)",
    borderRadius: "var(--radius-lg)",
    padding: "1.4rem 1.3rem 1.6rem",
    minWidth: 0,
  };

  if (!data) {
    return (
      <div style={wrapperStyle}>
        <LangLabel meta={meta} />
        <p style={{ color: "var(--muted)", fontStyle: "italic" }}>
          Not available in this language yet.
        </p>
      </div>
    );
  }

  return (
    <div style={wrapperStyle} dir={meta.dir}>
      <LangLabel meta={meta} />
      <h3
        style={{
          fontFamily: meta.font,
          margin: "0 0 0.9rem",
          fontSize: lang === "ar" ? "1.3rem" : "1.15rem",
          color: "var(--ink)",
        }}
      >
        {data.title}
      </h3>
      {data.lines.map((line, i) => (
        <p
          key={i}
          style={{
            margin: "0 0 0.65rem",
            lineHeight: lang === "ar" ? 2.1 : 1.7,
            fontSize: lang === "ar" ? "1.15rem" : "0.98rem",
            color: "var(--ink)",
            wordBreak: "break-word",
          }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}

function LangLabel({ meta }) {
  return (
    <span
      style={{
        display: "block",
        fontFamily: "var(--sans)",
        fontSize: "0.75rem",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: meta.accent,
        fontWeight: 600,
        marginBottom: "0.5rem",
      }}
    >
      {meta.label}
    </span>
  );
}
