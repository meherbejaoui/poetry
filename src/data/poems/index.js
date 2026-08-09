import { originalPoems } from "./original/index.js";
import { aiPoems } from "./generated/index.js";

export const ALL_POEMS = [...originalPoems, ...aiPoems];

export const poemsByThemeAndType = (themeId, isAiGenerated) =>
  ALL_POEMS.filter(
    (p) => p.isAiGenerated === isAiGenerated && p.themes.includes(themeId)
  );

export const poemById = (id) => ALL_POEMS.find((p) => p.id === id);
