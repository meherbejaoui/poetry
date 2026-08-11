import { mutanabbiPoems } from "./mutanabbi.js";
import { ibnZaydunPoems } from "./ibnZaydun.js";
import { shawqiPoems } from "./shawqi.js";
import { gibranPoems } from "./gibran.js";
import { englishClassicsPoems } from "./englishClassics.js";
import { antarahPoems } from "./antarah.js";
import { farazdaqPoems } from "./farazdaq.js";
import { majnunLaylaPoems } from "./majnunLayla.js";
import { ibnAlRumiPoems } from "./ibnAlRumi.js";
import { buhturiPoems } from "./buhturi.js";
import { basharPoems } from "./bashar.js";
import { abuNuwasPoems } from "./abuNuwas.js";
import { abbasIbnAlAhnafPoems } from "./abbasIbnAlAhnaf.js";

export const originalPoems = [
  ...mutanabbiPoems,
  ...ibnZaydunPoems,
  ...shawqiPoems,
  ...gibranPoems,
  ...englishClassicsPoems,
  ...antarahPoems,
  ...farazdaqPoems,
  ...majnunLaylaPoems,
  ...ibnAlRumiPoems,
  ...buhturiPoems,
  ...basharPoems,
  ...abuNuwasPoems,
  ...abbasIbnAlAhnafPoems,
].map((p) => ({ ...p, isAiGenerated: false }));
