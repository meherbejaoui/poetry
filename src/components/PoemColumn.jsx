const LANG_META = {
  ar: { label: "العربية", dir: "rtl", className: "col-ar" },
  en: { label: "English", dir: "ltr", className: "col-en" },
  mn: { label: "Монгол", dir: "ltr", className: "col-mn" },
};

export default function PoemColumn({ lang, data }) {
  const meta = LANG_META[lang];
  if (!data) {
    return (
      <div className={`poem-column ${meta.className} poem-column-empty`}>
        <span className="lang-label">{meta.label}</span>
        <p className="no-translation">Not available in this language yet.</p>
      </div>
    );
  }
  return (
    <div className={`poem-column ${meta.className}`} dir={meta.dir}>
      <span className="lang-label">{meta.label}</span>
      <h3 className="poem-title">{data.title}</h3>
      {data.lines.map((line, i) => (
        <p className="poem-line" key={i}>
          {line}
        </p>
      ))}
    </div>
  );
}
