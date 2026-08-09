import { useMemo, useState } from "react";
import { THEMES, themeById } from "./data/themes.js";
import { poemsByThemeAndType } from "./data/poems/index.js";
import ThemeGrid from "./components/ThemeGrid.jsx";
import TypePicker from "./components/TypePicker.jsx";
import PoemView from "./components/PoemView.jsx";
import Header from "./components/Header.jsx";

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

  const backToThemes = () => {
    setThemeId(null);
    setIsAiGenerated(null);
    setPoemIndex(0);
  };

  const backToTypePicker = () => {
    setIsAiGenerated(null);
    setPoemIndex(0);
  };

  return (
    <div className="app">
      <Header onHome={backToThemes} />
      <main>
        {!themeId && (
          <ThemeGrid themes={THEMES} onChoose={chooseTheme} />
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
            onSwitchType={() =>
              chooseType(isAiGenerated ? false : true)
            }
            otherTypeAvailable={
              poemsByThemeAndType(themeId, !isAiGenerated).length > 0
            }
            onBackToTypePicker={backToTypePicker}
            onBackToThemes={backToThemes}
          />
        )}
      </main>
      <footer className="site-footer">
        <p>
          Classical and modern poems in Arabic, English, and Mongolian
          (Cyrillic), plus AI-generated poems clearly labeled as such.
          Translations are AI-assisted, not scholarly.{" "}
        </p>
      </footer>
    </div>
  );
}
