import { useEffect, useMemo, useState } from "react";
import { THEMES, themeById } from "./data/themes.js";
import { poemsByThemeAndType } from "./data/poems/index.js";
import { SiteHeader, SiteFooter } from "./design/components/Shell.jsx";
import KofiButton from "./design/components/KofiButton.jsx";
import Label from "./design/components/Label.jsx";
import ThemeGrid from "./components/ThemeGrid.jsx";
import TypePicker from "./components/TypePicker.jsx";
import PoemView from "./components/PoemView.jsx";

// Fisher-Yates shuffle of [0, 1, ..., n-1], used to walk a theme's poems in
// random order without repeating any of them until the whole set has been
// seen once (a "shuffle bag"), rather than picking a fresh random index
// every time — which reads as random but can stall on the same handful of
// poems and never surface the rest.
function shuffledIndexes(length) {
  const order = Array.from({ length }, (_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

// Hash-based routing (#/theme/type/poemId) rather than real paths, so a
// shared link works from a cold load on GitHub Pages without any server
// rewrite rule — the fragment never reaches the server, so the app just
// loads index.html as usual and restores the route from location.hash.
function parseRoute(hash) {
  const parts = hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const [themeId, type, poemId] = parts;
  if (!themeId || !themeById(themeId)) return null;
  if (type !== "original" && type !== "ai") return { themeId, isAiGenerated: null, poemId: null };
  return { themeId, isAiGenerated: type === "ai", poemId: poemId || null };
}

function routeFor(themeId, type, poemId) {
  let path = `#/${themeId}`;
  if (type) path += `/${type}`;
  if (poemId) path += `/${poemId}`;
  return path;
}

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
  const [order, setOrder] = useState([]);
  const [cursor, setCursor] = useState(0);

  const pool = useMemo(() => {
    if (!themeId || isAiGenerated === null) return [];
    return poemsByThemeAndType(themeId, isAiGenerated);
  }, [themeId, isAiGenerated]);

  const currentPoem = pool[order[cursor]] ?? null;
  const theme = themeId ? themeById(themeId) : null;

  // Scroll to the top of the page on every real navigation (theme picked,
  // type picked, back/forward through the flow) so a reader who scrolled
  // down into a long poem doesn't land mid-page — or on the footer — on
  // the next screen. Skip this for "show me another" (same screen).
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [themeId, isAiGenerated]);

  // Restore state from the URL hash — on first load (a shared/reloaded
  // link) and whenever the user navigates with the browser's back/forward
  // buttons (popstate). Our own in-app navigation updates the hash itself
  // via history.pushState/replaceState, which doesn't fire popstate, so
  // this effect only ever reacts to links coming in "from outside."
  const applyRoute = (hash) => {
    const route = parseRoute(hash);
    if (!route) {
      setThemeId(null);
      setIsAiGenerated(null);
      setOrder([]);
      setCursor(0);
      return;
    }
    setThemeId(route.themeId);
    setIsAiGenerated(route.isAiGenerated);
    if (route.isAiGenerated === null) {
      setOrder([]);
      setCursor(0);
      return;
    }
    const newPool = poemsByThemeAndType(route.themeId, route.isAiGenerated);
    const newOrder = shuffledIndexes(newPool.length);
    if (route.poemId) {
      const targetIdx = newPool.findIndex((p) => p.id === route.poemId);
      if (targetIdx !== -1) {
        const pos = newOrder.indexOf(targetIdx);
        [newOrder[0], newOrder[pos]] = [newOrder[pos], newOrder[0]];
      }
    }
    setOrder(newOrder);
    setCursor(0);
  };

  useEffect(() => {
    applyRoute(window.location.hash);
    const onPopState = () => applyRoute(window.location.hash);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const chooseTheme = (id) => {
    setThemeId(id);
    setIsAiGenerated(null);
    setOrder([]);
    setCursor(0);
    window.history.pushState(null, "", routeFor(id));
  };

  const chooseType = (aiGenerated) => {
    setIsAiGenerated(aiGenerated);
    const newPool = poemsByThemeAndType(themeId, aiGenerated);
    const newOrder = shuffledIndexes(newPool.length);
    setOrder(newOrder);
    setCursor(0);
    const type = aiGenerated ? "ai" : "original";
    window.history.pushState(null, "", routeFor(themeId, type, newPool[newOrder[0]]?.id));
  };

  const showAnother = () => {
    if (pool.length <= 1) return;
    const next = cursor + 1;
    let newOrder = order;
    let newCursor = next;
    if (next >= order.length) {
      // Seen every poem in this shuffle — reshuffle for the next lap, just
      // making sure the new lap doesn't open on the same poem that closed
      // the last one.
      const justShown = order[cursor];
      newOrder = shuffledIndexes(pool.length);
      if (newOrder[0] === justShown) {
        [newOrder[0], newOrder[1]] = [newOrder[1], newOrder[0]];
      }
      newCursor = 0;
      setOrder(newOrder);
    }
    setCursor(newCursor);
    // Replace, not push — "another poem" is a variation on the same
    // screen, not a new step in the browsing history.
    const type = isAiGenerated ? "ai" : "original";
    window.history.replaceState(null, "", routeFor(themeId, type, pool[newOrder[newCursor]]?.id));
  };

  const backToThemes = (e) => {
    e?.preventDefault?.();
    setThemeId(null);
    setIsAiGenerated(null);
    setOrder([]);
    setCursor(0);
    window.history.pushState(null, "", window.location.pathname + window.location.search);
  };

  const backToTypePicker = () => {
    setIsAiGenerated(null);
    setOrder([]);
    setCursor(0);
    window.history.pushState(null, "", routeFor(themeId));
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
