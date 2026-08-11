import { POETS } from "../data/poets.js";
import { THEMES } from "../data/themes.js";
import Card from "../design/components/Card.jsx";
import Chip from "../design/components/Chip.jsx";

// Layout follows the "Sidebar" pattern (Every Layout / Heydon Pickering):
// a flexible column that grows up to a readable measure, paired with a
// content-sized column that absorbs the remaining space, wrapping to a
// single column with no media query once the container gets too narrow.
// The bio's own max-width is set in `ch` (character width), the standard
// CSS unit for capping line length for readability regardless of
// container width or font size — see Bringhurst's Elements of
// Typographic Style (45-75 characters per line, ~66 ideal) and the
// "Measure" utility in Every Layout.
export default function MetadataPanel({ poem }) {
  const poet = poem.poet ? POETS[poem.poet] : null;
  const themeLabels = poem.themes
    .map((id) => THEMES.find((t) => t.id === id)?.label.en)
    .filter(Boolean);

  const factsColumn = (
    <dl
      style={{
        display: "flex",
        flexDirection: poet ? "column" : "row",
        flexWrap: "wrap",
        gap: poet ? "var(--space-2)" : "0 var(--space-6)",
        margin: 0,
        fontFamily: "var(--sans)",
        flex: poet ? "1 1 170px" : "0 1 auto",
        maxWidth: poet ? 260 : "none",
        paddingLeft: poet ? "var(--space-5)" : 0,
        borderLeft: poet ? "1px solid var(--hair)" : "none",
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
    </dl>
  );

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

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          gap: "var(--space-5)",
          paddingBottom: "var(--space-3)",
          marginBottom: "var(--space-3)",
          borderBottom: "1px solid var(--hair)",
        }}
      >
        {poet && (
          <div
            style={{
              display: "flex",
              gap: "var(--space-3)",
              flex: "3 1 320px",
              minWidth: 0,
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
            <div style={{ minWidth: 0, maxWidth: "60ch" }}>
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
                }}
              >
                {poet.bio}
              </p>
            </div>
          </div>
        )}

        {factsColumn}
      </div>

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

      {(poem.sourceNote || poem.translationCredit) && (
        <dl
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-2)",
            margin: 0,
            fontFamily: "var(--sans)",
          }}
        >
          {poem.sourceNote && (
            <div>
              <dt style={dtStyle}>Source</dt>
              <dd style={ddStyle}>{poem.sourceNote}</dd>
            </div>
          )}
          {poem.translationCredit && (
            <div>
              <dt style={dtStyle}>Translation</dt>
              <dd style={ddStyle}>{poem.translationCredit}</dd>
            </div>
          )}
        </dl>
      )}
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
