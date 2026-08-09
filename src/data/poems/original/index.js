import { mutanabbiPoems } from "./mutanabbi.js";
import { ibnZaydunPoems } from "./ibnZaydun.js";
import { shawqiPoems } from "./shawqi.js";
import { gibranPoems } from "./gibran.js";
import { englishClassicsPoems } from "./englishClassics.js";

export const originalPoems = [
  ...mutanabbiPoems,
  ...ibnZaydunPoems,
  ...shawqiPoems,
  ...gibranPoems,
  ...englishClassicsPoems,
].map((p) => ({ ...p, isAiGenerated: false }));
