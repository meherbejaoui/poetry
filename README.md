# Poetry

Classical and modern poems in Arabic, English, and Mongolian (Cyrillic),
shown side by side by theme — plus AI-generated poems, clearly labeled as
such — [meherbejaoui.com/poetry](https://meherbejaoui.com/poetry).

## What's here

- **Pick a theme** (Love & Longing, Exile & Homeland, Nature & Seasons,
  Time & Mortality, Freedom & Resistance, Wisdom & Reflection, Friendship
  & Loss, Pride & Resilience) and get either:
  - an **original poem** by a historical poet, translated into all three
    languages, or
  - an **AI-generated poem** composed natively in Arabic or Mongolian and
    translated into the other two, always marked with a visible
    "AI Generated" badge.
- Every poem shows its metadata: poet, era, form, source note, and
  translation credit.
- The 20-poem original corpus includes Abū al-Ṭayyib al-Mutanabbī, Ibn
  Zaydūn, Ahmed Shawqi, and Gibran Khalil Gibran (all public domain), plus
  six public-domain English poets (Shakespeare, Blake, Dickinson, Whitman,
  Frost, Rossetti).
- Mahmoud Darwish and Ahmad Matar are represented only through
  AI-generated tribute poems written in the thematic/stylistic spirit of
  their work — their own poetry is still under copyright and is not
  reproduced here. See `src/data/poems/generated/aiGenerated.js` for the
  disclosure on those two entries.
- All AI poems are pre-generated and stored as data — nothing is
  generated live in the browser.

## Content accuracy

Classical Arabic verses were cross-checked against multiple published
sources where possible, but this project had no way to consult primary
manuscripts. English/Arabic/Mongolian translations throughout are
AI-assisted, not the work of a professional literary translator — treat
them as a good-faith reading aid, not a scholarly edition. Corrections
welcome.

## Development

```
pnpm install
pnpm dev       # local dev server
pnpm build     # production build to dist/
pnpm preview   # serve the production build locally
```

Deploys to GitHub Pages automatically on push to `main` via
`.github/workflows/deploy.yml`.

## License

This repository is dual-licensed:

- **Code** (components, data-loading logic, build configuration) —
  [GNU GPLv3](LICENSE)
- **Poem content** (translations and AI-generated poems in
  `src/data/poems/`) — see [LICENSE-CONTENT.md](LICENSE-CONTENT.md) for
  the full breakdown, including the public-domain status of the original
  source texts.
