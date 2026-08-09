import PoemColumn from "./PoemColumn.jsx";
import MetadataPanel from "./MetadataPanel.jsx";

export default function PoemView({
  theme,
  poem,
  canShowAnother,
  onShowAnother,
  onSwitchType,
  otherTypeAvailable,
  onBackToTypePicker,
  onBackToThemes,
}) {
  if (!poem) {
    return (
      <section className="poem-view">
        <button className="back-link" onClick={onBackToTypePicker} type="button">
          ← Back
        </button>
        <p>No poems available for this combination yet.</p>
      </section>
    );
  }

  return (
    <section className="poem-view">
      <div className="poem-view-nav">
        <button className="back-link" onClick={onBackToThemes} type="button">
          ← All themes
        </button>
        <button className="back-link" onClick={onBackToTypePicker} type="button">
          ← {theme.label.en}
        </button>
      </div>

      <MetadataPanel poem={poem} />

      <div className="poem-columns">
        <PoemColumn lang="ar" data={poem.translations.ar} />
        <PoemColumn lang="en" data={poem.translations.en} />
        <PoemColumn lang="mn" data={poem.translations.mn} />
      </div>

      <div className="poem-actions">
        {canShowAnother && (
          <button className="action-btn" onClick={onShowAnother} type="button">
            Show me another
          </button>
        )}
        {otherTypeAvailable && (
          <button className="action-btn secondary" onClick={onSwitchType} type="button">
            {poem.isAiGenerated
              ? "Show an original poem instead"
              : "Show an AI-generated poem instead"}
          </button>
        )}
      </div>
    </section>
  );
}
