export default function ThemeGrid({ themes, onChoose }) {
  return (
    <section className="theme-picker">
      <h1>Choose a theme</h1>
      <p className="lede">
        Pick a theme to read a classical or modern poem — or an AI-generated
        one — in Arabic, English, and Mongolian at once.
      </p>
      <div className="theme-grid">
        {themes.map((theme) => (
          <button
            key={theme.id}
            className="theme-card"
            onClick={() => onChoose(theme.id)}
            type="button"
          >
            <span className="theme-card-en">{theme.label.en}</span>
            <span className="theme-card-ar" dir="rtl">
              {theme.label.ar}
            </span>
            <span className="theme-card-mn">{theme.label.mn}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
