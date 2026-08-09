export default function TypePicker({
  theme,
  originalCount,
  aiCount,
  onChoose,
  onBack,
}) {
  return (
    <section className="type-picker">
      <button className="back-link" onClick={onBack} type="button">
        ← Choose a different theme
      </button>
      <h1>{theme.label.en}</h1>
      <p className="theme-subtitle">
        <span dir="rtl">{theme.label.ar}</span>
        <span aria-hidden="true"> · </span>
        <span>{theme.label.mn}</span>
      </p>
      <p className="lede">
        Would you like a classical or modern original poem, or an
        AI-generated one?
      </p>
      <div className="type-options">
        <button
          className="type-card"
          onClick={() => onChoose(false)}
          disabled={originalCount === 0}
          type="button"
        >
          <strong>Original poem</strong>
          <span>
            {originalCount} {originalCount === 1 ? "poem" : "poems"} by
            historical poets
          </span>
        </button>
        <button
          className="type-card ai"
          onClick={() => onChoose(true)}
          disabled={aiCount === 0}
          type="button"
        >
          <strong>AI-generated poem ✨</strong>
          <span>
            {aiCount} {aiCount === 1 ? "poem" : "poems"}, clearly labeled
          </span>
        </button>
      </div>
    </section>
  );
}
