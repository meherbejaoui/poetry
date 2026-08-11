import { useEffect, useMemo, useState } from "react";
import { THEMES, themeById } from "./data/themes.js";
import { poemsByThemeAndType } from "./data/poems/index.js";
import { SiteHeader, SiteFooter } from "./design/components/Shell.jsx";
import KofiButton from "./design/components/KofiButton.jsx";
import Label from "./design/components/Label.jsx";
import ThemeGrid from "./components/ThemeGrid.jsx";
import TypePicker from "./components/TypePicker.jsx";
import PoemView from "./components/PoemView.jsx";

const h1 = {
  fontFamily: "var(--serif)",
  fontSize: "var(--text-display)",
  lineHeight: 1.05,
  margin: 0,
  color: "var(--ink)",
  fontWeight: 400,
  letterSpacing: "-0.01em",
};

export default function App() {
  const [themeId, setThemeId] = useState(null);
  const [isAiGenerated, setIsAiGenerated] = useState(null);
  const [poemIndex, setPoemIndex] = useState(0);

  const pool = useMemo(() => {
    if (!themeId || isAiGenerated === null) return [];
    return poemsByThemeAndType(themeId, isAiGenerated);
  }, [themeId, isAiGenerated]);

  const currentPoem = pool[poemIndex] ?? null;
  const theme = themeId ? themeById(themeId) : null;

  // Scroll to the top of the page on every real navigation (theme picked,
  // type picked, back/forward through the flow) so a reader who scrolled
  // down into a long poem doesn't land mid-page — or on the footer — on
  // the next screen. Skip this for "show me another" (same screen).
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [themeId, isAiGenerated]);

  const chooseTheme = (id) => {
    setThemeId(id);
    setIsAiGenerated(null);
    setPoemIndex(0);
  };

  const chooseType = (aiGenerated) => {
    setIsAiGenerated(aiGenerated);
    setPoemIndex(0);
  };

  const showAnother = () => {
    if (pool.length <= 1) return;
    let next = Math.floor(Math.random() * pool.length);
    if (next === poemIndex) next = (next + 1) % pool.length;
    setPoemIndex(next);
  };

  const backToThemes = (e) => {
    e?.preventDefault?.();
    setThemeId(null);
    setIsAiGenerated(null);
    setPoemIndex(0);
  };

  const backToTypePicker = () => {
    setIsAiGenerated(null);
    setPoemIndex(0);
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <SiteHeader onLogoClick={backToThemes} />
      <main
        style={{
          maxWidth: "var(--content-width-wide)",
          margin: "0 auto",
          padding: "clamp(14px, 2.5vw, 28px) clamp(18px, 5vw, 28px) 40px",
        }}
      >
        {!themeId && (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: "var(--space-6)",
                flexWrap: "wrap",
              }}
            >
              <div style={{ maxWidth: 560 }}>
                <Label>trilingual poems</Label>
                <h1 style={{ ...h1, marginTop: 8 }}>Poetry</h1>
              </div>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 17,
                  lineHeight: 1.55,
                  color: "var(--muted)",
                  maxWidth: 420,
                  margin: 0,
                  flex: "1 1 320px",
                }}
              >
                Pick a theme to read a classical or modern poem — or an
                AI-generated one — in Arabic, English, and Mongolian at
                once.
              </p>
            </div>
            <ThemeGrid themes={THEMES} onChoose={chooseTheme} />
          </>
        )}

        {themeId && isAiGenerated === null && theme && (
          <TypePicker
            theme={theme}
            allThemes={THEMES}
            originalCount={poemsByThemeAndType(themeId, false).length}
            aiCount={poemsByThemeAndType(themeId, true).length}
            onChoose={chooseType}
            onBack={backToThemes}
            onSwitchTheme={chooseTheme}
          />
        )}

        {themeId && isAiGenerated !== null && theme && (
          <PoemView
            theme={theme}
            poem={currentPoem}
            isAiGenerated={isAiGenerated}
            canShowAnother={pool.length > 1}
            onShowAnother={showAnother}
            onSwitchType={() => chooseType(isAiGenerated ? false : true)}
            otherTypeAvailable={
              poemsByThemeAndType(themeId, !isAiGenerated).length > 0
            }
            onBackToTypePicker={backToTypePicker}
            onBackToThemes={backToThemes}
          />
        )}
      </main>
      <SiteFooter />
      <KofiButton />
    </div>
  );
}
