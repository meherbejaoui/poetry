import PoemColumn from "./PoemColumn.jsx";
import MetadataPanel from "./MetadataPanel.jsx";
import Button from "../design/components/Button.jsx";

const backLinkStyle = {
  fontFamily: "var(--sans)",
  fontSize: 13.5,
  color: "var(--muted)",
  textDecoration: "none",
};

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
      <div>
        <button className="eg-focus" onClick={onBackToTypePicker} type="button" style={{ ...backLinkStyle, background: "none", border: "none", cursor: "pointer" }}>
          ← Back
        </button>
        <p style={{ fontFamily: "var(--sans)", color: "var(--muted)" }}>
          No poems available for this combination yet.
        </p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          gap: "1.2rem",
          justifyContent: "center",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <a href="/" onClick={onBackToThemes} className="eg-focus" style={backLinkStyle}>
          ← All themes
        </a>
        <button
          onClick={onBackToTypePicker}
          type="button"
          className="eg-focus"
          style={{ ...backLinkStyle, background: "none", border: "none", cursor: "pointer" }}
        >
          ← {theme.label.en}
        </button>
      </div>

      <MetadataPanel poem={poem} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          alignItems: "start",
          maxWidth: 1100,
          margin: "0 auto",
        }}
        className="poem-columns"
      >
        <PoemColumn lang="ar" data={poem.translations.ar} />
        <PoemColumn lang="en" data={poem.translations.en} />
        <PoemColumn lang="mn" data={poem.translations.mn} />
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "2rem",
        }}
      >
        {canShowAnother && (
          <Button variant="primary" onClick={onShowAnother} type="button">
            Show me another
          </Button>
        )}
        {otherTypeAvailable && (
          <Button variant="secondary" onClick={onSwitchType} type="button">
            {poem.isAiGenerated
              ? "Show an original poem instead"
              : "Show an AI-generated poem instead"}
          </Button>
        )}
      </div>
    </div>
  );
}
