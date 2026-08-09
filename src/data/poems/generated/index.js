import { generatedPoems } from "./aiGenerated.js";

export const aiPoems = generatedPoems.map((p) => ({
  ...p,
  isAiGenerated: true,
}));
