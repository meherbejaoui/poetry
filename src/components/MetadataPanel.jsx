import { POETS } from "../data/poets.js";
import { THEMES } from "../data/themes.js";
import Card from "../design/components/Card.jsx";
import Chip from "../design/components/Chip.jsx";

export default function MetadataPanel({ poem }) {
  const poet = poem.poet ? POETS[poem.poet] : null;
  const themeLabels = poem.themes
    .map((id) => THEMES.find((t) => t.id === id)?.label.en)
    .filter(Boolean);

  return (
    <Card
      style={{
        maxWidth: 900,
        margin: "0 auto var(--space-5)",
        textAlign: "start",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-3)",
          marginBottom: "var(--space-3)",
          flexWrap: "wrap",
        }}
      >
        {poem.isAiGenerated ? (
          <>
            <Chip color="var(--po-ai)">✨ AI Generated</Chip>
            <span style={{ fontFamily: "var(--sans)", fontSize: 13.5, color: "var(--muted)" }}>
              Composed {poem.generatedDate} · native language:{" "}
              {poem.composedLang === "ar" ? "Arabic" : "Mongolian"}
            </span>
          </>
        ) : (
          <Chip color="var(--safe)">Original poem</Chip>
        )}
      </div>

      {poet && (
        <div
          style={{
            display: "flex",
            gap: "var(--space-3)",
            alignItems: "flex-start",
            paddingBottom: "var(--space-3)",
            marginBottom: "var(--space-3)",
            borderBottom: "1px solid var(--hair)",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              flex: "0 0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: "50%",
              fontFamily: "var(--serif)",
              fontSize: "1.05rem",
              color: "var(--surface)",
              background: "var(--ink)",
            }}
          >
            {poet.name.charAt(0)}
          </span>
          <div style={{ minWidth: 0 }}>
            <div style={{ lineHeight: 1.3 }}>
              <strong style={{ fontFamily: "var(--serif)", fontSize: "1.05rem" }}>
                {poet.name}
              </strong>
              {poet.nameAr && (
                <span dir="rtl" style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                  {" "}
                  ({poet.nameAr})
                </span>
              )}
              <span style={{ color: "var(--faint)", fontSize: "0.85rem" }}>
                {" "}
                · {poet.years}
              </span>
            </div>
            <p
              style={{
                margin: "4px 0 0",
                color: "var(--muted)",
                fontSize: "0.87rem",
                lineHeight: 1.5,
                fontFamily: "var(--sans)",
                maxWidth: "68ch",
              }}
            >
              {poet.bio}
            </p>
          </div>
        </div>
      )}

      {poem.isAiGenerated && poem.aiNote && (
        <p
          style={{
            background: "var(--po-ai-tint)",
            borderInlineStart: "3px solid var(--po-ai)",
            padding: "0.6rem 0.8rem",
            fontSize: "0.88rem",
            fontFamily: "var(--sans)",
            color: "var(--muted)",
            borderRadius: 6,
            margin: "0 0 var(--space-3)",
          }}
        >
          {poem.isTribute && <strong>Tribute to {poem.tributeTo}. </strong>}
          {poem.aiNote}
        </p>
      )}

      <dl
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "0.6rem 1.2rem",
          margin: 0,
          fontFamily: "var(--sans)",
        }}
      >
        {poem.era && (
          <div>
            <dt style={dtStyle}>Era</dt>
            <dd style={ddStyle}>{poem.era}</dd>
          </div>
        )}
        {poem.form && (
          <div>
            <dt style={dtStyle}>Form</dt>
            <dd style={ddStyle}>{poem.form}</dd>
          </div>
        )}
        <div>
          <dt style={dtStyle}>Themes</dt>
          <dd style={ddStyle}>{themeLabels.join(", ")}</dd>
        </div>
        {poem.sourceNote && (
          <div style={{ gridColumn: "1 / -1" }}>
            <dt style={dtStyle}>Source</dt>
            <dd style={ddStyle}>{poem.sourceNote}</dd>
          </div>
        )}
        {poem.translationCredit && (
          <div style={{ gridColumn: "1 / -1" }}>
            <dt style={dtStyle}>Translation</dt>
            <dd style={ddStyle}>{poem.translationCredit}</dd>
          </div>
        )}
      </dl>
    </Card>
  );
}

const dtStyle = {
  fontSize: "var(--text-tiny)",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "var(--faint)",
  margin: 0,
};

const ddStyle = {
  margin: "0.1rem 0 0",
  fontSize: "0.92rem",
  color: "var(--ink)",
};
