import { POETS } from "../data/poets.js";
import { THEMES } from "../data/themes.js";

export default function MetadataPanel({ poem }) {
  const poet = poem.poet ? POETS[poem.poet] : null;
  const themeLabels = poem.themes
    .map((id) => THEMES.find((t) => t.id === id)?.label.en)
    .filter(Boolean);

  return (
    <div className="metadata-panel">
      {poem.isAiGenerated ? (
        <div className="ai-badge-row">
          <span className="ai-badge">✨ AI Generated</span>
          <span className="ai-meta">
            Composed {poem.generatedDate} · native language:{" "}
            {poem.composedLang === "ar" ? "Arabic" : "Mongolian"}
          </span>
        </div>
      ) : (
        <div className="ai-badge-row">
          <span className="original-badge">Original poem</span>
        </div>
      )}

      {poet && (
        <div className="poet-block">
          <strong>{poet.name}</strong>
          {poet.nameAr && (
            <span className="poet-name-ar" dir="rtl">
              {" "}
              ({poet.nameAr})
            </span>
          )}
          <span className="poet-years"> — {poet.years}</span>
          <p className="poet-bio">{poet.bio}</p>
        </div>
      )}

      {poem.isAiGenerated && poem.aiNote && (
        <p className="ai-note">
          {poem.isTribute && (
            <strong>Tribute to {poem.tributeTo}. </strong>
          )}
          {poem.aiNote}
        </p>
      )}

      <dl className="meta-grid">
        {poem.era && (
          <div>
            <dt>Era</dt>
            <dd>{poem.era}</dd>
          </div>
        )}
        {poem.form && (
          <div>
            <dt>Form</dt>
            <dd>{poem.form}</dd>
          </div>
        )}
        <div>
          <dt>Themes</dt>
          <dd>{themeLabels.join(", ")}</dd>
        </div>
        {poem.sourceNote && (
          <div className="meta-wide">
            <dt>Source</dt>
            <dd>{poem.sourceNote}</dd>
          </div>
        )}
        {poem.translationCredit && (
          <div className="meta-wide">
            <dt>Translation</dt>
            <dd>{poem.translationCredit}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}
