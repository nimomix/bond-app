# Bond — Marketing Website

The public marketing site for the Bond app.

**Live:** https://nimrod-bar.github.io/bond-app/

## Stack

- [Astro](https://astro.build/) static site generator
- TypeScript
- Plain CSS with custom properties (design tokens ported from the iOS app)
- [Lucide](https://lucide.dev/) for icons
- Deployed to GitHub Pages via GitHub Actions

## Local dev

```bash
npm install
npm run dev      # http://localhost:4321/bond-app/
npm run build    # outputs dist/
```

## Localization

The site supports English (`/en/`) and Hebrew (`/he/`). The Hebrew translation is partial in v1; the language switcher is gated behind `ENABLE_HEBREW_SWITCHER` in `src/config/site.ts` until full translation lands.

## License

© 2026 Bond.
