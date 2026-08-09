import { useMemo, useState } from "react";
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
          padding: "clamp(32px, 6vw, 72px) clamp(18px, 5vw, 28px) 40px",
        }}
      >
        {!themeId && (
          <>
            <Label>trilingual poems</Label>
            <h1 style={{ ...h1, marginTop: 10 }}>Poetry</h1>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: 17,
                lineHeight: 1.6,
                color: "var(--muted)",
                maxWidth: 640,
                margin: "18px 0 0",
              }}
            >
              Pick a theme to read a classical or modern poem — or an
              AI-generated one — in Arabic, English, and Mongolian at once.
            </p>
            <ThemeGrid themes={THEMES} onChoose={chooseTheme} />
          </>
        )}

        {themeId && isAiGenerated === null && theme && (
          <TypePicker
            theme={theme}
            originalCount={poemsByThemeAndType(themeId, false).length}
            aiCount={poemsByThemeAndType(themeId, true).length}
            onChoose={chooseType}
            onBack={backToThemes}
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
