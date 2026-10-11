// Static, readable HTML for the page's empty React mount point.
//
// This site is a client-rendered React app: the HTML that ships is
// `<div id="root"></div>` plus a script. Anything that reads the page without
// running JavaScript (some crawlers, link previewers, reader modes, a browser
// with scripts blocked) therefore sees a title and nothing else, even though
// the collection holds a hundred poems with source notes and poet biographies.
//
// This Vite plugin fills that gap at build time. It writes a plain-HTML
// catalogue of the collection into `#root`: the themes, every poet with their
// biography, and every poem with its form, era and source note. When the app's
// script runs, React's first render replaces the contents of `#root`, so
// readers see the app exactly as before.
//
// Everything listed is generated from the same data modules the app reads
// (themes.js, poets.js, poems/), so adding a poem or a poet updates the
// catalogue on the next build with nothing to keep in sync by hand. The only
// copy duplicated here is the one-sentence intro from App.jsx, marked below.
//
// Poem texts are deliberately not written out: the catalogue is an index of
// the collection, and reading the poems side by side is what the app is for.

import { ALL_POEMS } from "../src/data/poems/index.js";
import { POETS } from "../src/data/poets.js";
import { THEMES } from "../src/data/themes.js";

const MOUNT = '<div id="root"></div>';

const LANGUAGE = { ar: "Arabic", en: "English", mn: "Mongolian" };

const esc = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// Scoped under .sf so nothing here can touch the app once it mounts. Colours
// and fonts come from design/tokens.css, which the built page links in <head>,
// so the catalogue follows the same light/dark theme as the app.
const STYLE = `<style>
.sf{max-width:var(--content-width,720px);margin:0 auto;padding:clamp(14px,3vw,20px) clamp(18px,5vw,28px) 64px;font-family:var(--sans,system-ui,sans-serif);color:var(--ink,#23262b);line-height:1.62}
.sf a{color:inherit}
.sf-crumbs,.sf-foot{font-size:.875rem;color:var(--muted,#54595f)}
.sf-crumbs a,.sf-foot a{color:inherit;text-decoration:none}
.sf-label{display:block;margin-top:clamp(24px,5vw,56px);font-size:11px;letter-spacing:.14em;text-transform:uppercase;font-weight:600;color:var(--faint,#676c72)}
.sf h1{font-family:var(--serif,Georgia,serif);font-size:var(--text-display,2.5rem);font-weight:400;line-height:1.05;letter-spacing:-.01em;margin:8px 0 0}
.sf h2{font-family:var(--serif,Georgia,serif);font-size:1.5rem;font-weight:400;margin:2.5rem 0 .5rem}
.sf h3{font-family:var(--serif,Georgia,serif);font-size:1.2rem;font-weight:700;margin:2rem 0 .25rem}
.sf p{margin:.5rem 0}
.sf ul{padding-left:1.2rem}
.sf li{margin:.6rem 0}
.sf .sf-lede{font-size:17px;color:var(--muted,#54595f);max-width:640px;margin-top:18px}
.sf .sf-meta{font-size:.875rem;color:var(--faint,#676c72)}
.sf-foot{margin-top:3rem;padding-top:1rem;border-top:1px solid var(--hair,#d3d5d8)}
</style>`;

const originals = ALL_POEMS.filter((poem) => !poem.isAiGenerated);
const generated = ALL_POEMS.filter((poem) => poem.isAiGenerated);

// Same route shape the app parses in App.jsx: #/<theme>/<original|ai>/<poemId>
function poemHref(poem) {
  const type = poem.isAiGenerated ? "ai" : "original";
  return `#/${poem.themes[0]}/${type}/${poem.id}`;
}

function themeNames(poem) {
  return poem.themes
    .map((id) => THEMES.find((theme) => theme.id === id))
    .filter(Boolean)
    .map((theme) => theme.label.en)
    .join(", ");
}

// A poem's heading: the title in its source language, plus the English title
// alongside when the source is not English.
function poemTitle(poem, sourceLang) {
  const source = poem.translations[sourceLang];
  const english = poem.translations.en;
  const link = (text, lang) =>
    `<a href="${esc(poemHref(poem))}"${lang ? ` lang="${lang}"` : ""}>${esc(text)}</a>`;
  if (!source || sourceLang === "en") return link(english.title);
  return `${link(english.title)} (<span lang="${sourceLang}" dir="${sourceLang === "ar" ? "rtl" : "ltr"}">${esc(source.title)}</span>)`;
}

function themeList() {
  return THEMES.map((theme) => {
    const inTheme = (list) => list.filter((poem) => poem.themes.includes(theme.id)).length;
    return `<li><a href="#/${esc(theme.id)}"><strong>${esc(theme.label.en)}</strong></a> · <span lang="ar" dir="rtl">${esc(theme.label.ar)}</span> · <span lang="mn">${esc(theme.label.mn)}</span><br><span class="sf-meta">${inTheme(originals)} original poems, ${inTheme(generated)} AI-generated</span></li>`;
  }).join("\n");
}

function poetSections() {
  const poetIds = [...new Set(originals.map((poem) => poem.poet))];
  return poetIds
    .map((id) => {
      const poet = POETS[id];
      const poems = originals.filter((poem) => poem.poet === id);
      const items = poems
        .map((poem) => {
          const details = [poem.form, poem.era, `written in ${LANGUAGE[poem.sourceLang] || poem.sourceLang}`]
            .filter(Boolean)
            .map(esc)
            .join(" · ");
          return `<li>${poemTitle(poem, poem.sourceLang)}<br><span class="sf-meta">${details} · themes: ${esc(themeNames(poem))}</span>${poem.sourceNote ? `<br>${esc(poem.sourceNote)}` : ""}${poem.translationCredit ? `<br><span class="sf-meta">${esc(poem.translationCredit)}</span>` : ""}</li>`;
        })
        .join("\n");
      if (!poet) return `<h3>${esc(id)}</h3>\n<ul>\n${items}\n</ul>`;
      const arabicName = poet.nameAr ? ` <span lang="ar" dir="rtl">${esc(poet.nameAr)}</span>` : "";
      return `<h3>${esc(poet.name)}${arabicName}</h3>
<p class="sf-meta">${esc(poet.years)} · ${esc(poet.origin)}</p>
<p>${esc(poet.bio)}</p>
<ul>
${items}
</ul>`;
    })
    .join("\n");
}

function generatedList() {
  return generated
    .map((poem) => {
      const details = [poem.form, `composed in ${LANGUAGE[poem.composedLang] || poem.composedLang}`, poem.generatedDate]
        .filter(Boolean)
        .map(esc)
        .join(" · ");
      return `<li>${poemTitle(poem, poem.composedLang)}<br><span class="sf-meta">${details} · themes: ${esc(themeNames(poem))}</span>${poem.aiNote ? `<br>${esc(poem.aiNote)}` : ""}</li>`;
    })
    .join("\n");
}

function catalogue() {
  const poetCount = new Set(originals.map((poem) => poem.poet)).size;
  const fromArabic = originals.filter((poem) => poem.sourceLang === "ar").length;
  const fromEnglish = originals.filter((poem) => poem.sourceLang === "en").length;

  // The lede repeats the intro sentence on the app's first screen (App.jsx).
  return `${STYLE}
<div class="sf">
<nav class="sf-crumbs" aria-label="Breadcrumb"><a href="https://www.meherbejaoui.com/">meherbejaoui.com</a> / <span>poetry</span></nav>
<main>
<span class="sf-label">trilingual poems</span>
<h1>Poetry</h1>
<p class="sf-lede">Pick a theme to read a classical or modern poem — or an AI-generated one — in Arabic, English, and Mongolian at once.</p>
<p>The collection holds ${originals.length} poems by ${poetCount} poets, ${fromArabic} written in Arabic and ${fromEnglish} in English, each shown beside its translations into the other two languages. A further ${generated.length} poems are AI-generated and always labeled as such. The translations are AI-assisted reading aids, not scholarly editions.</p>
<h2>Themes</h2>
<ul>
${themeList()}
</ul>
<h2>Poets and poems</h2>
${poetSections()}
<h2>AI-generated poems</h2>
<p>These ${generated.length} poems were written by an AI model, not by a human poet. Each one carries a visible "AI Generated" badge in the app and is kept separate from the original poems above.</p>
<ul>
${generatedList()}
</ul>
</main>
<footer class="sf-foot">
<p>Poems by Meher Bejaoui, built with Claude. <a href="https://www.meherbejaoui.com/">meherbejaoui.com</a> · <a href="https://github.com/meherbejaoui/poetry">Source</a> · Code <a href="https://github.com/meherbejaoui/poetry/blob/main/LICENSE">GPLv3</a> · Content <a href="https://github.com/meherbejaoui/poetry/blob/main/LICENSE-CONTENT.md">CC BY-NC-SA 4.0</a></p>
<p>The side-by-side reader is interactive and needs JavaScript. This page lists what the collection contains.</p>
</footer>
</div>`;
}

export default function staticFallback() {
  return {
    name: "poetry-static-fallback",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        if (!/(^|\/)index\.html$/.test(ctx.path)) return html;
        if (!html.includes(MOUNT)) {
          throw new Error(
            `static-fallback: ${ctx.path} has no ${MOUNT} to fill. ` +
              "Keep the mount point empty in the source HTML."
          );
        }
        return html.replace(MOUNT, `<div id="root">${catalogue()}</div>`);
      },
    },
  };
}
