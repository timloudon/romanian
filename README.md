# Română — Romanian practice

A mobile-first web app for building conversational Romanian, combining the Michel Thomas method
(build sentences from a small set of reusable blocks, no grammar terminology) with the Say
Something In... method (hear a prompt, produce the answer yourself, then check against the
model — "good enough" over perfectionism). Practice by typing or by speaking; a dedicated Driving
Mode makes it usable fully hands-free.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in a browser. For the full mobile experience, add it to your phone's
home screen (Safari: Share → Add to Home Screen) — this is also what keeps your local progress
from being cleared by Safari's storage-eviction policy after a week of inactivity.

## Deploying (GitHub Pages)

`.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages automatically on
every push to `main` — enable it once under repo Settings → Pages → "Build and deployment" →
Source → **GitHub Actions**. The app is served from a subpath (`<user>.github.io/romanian/`, not
the domain root), which is why `vite.config.ts` sets `base: '/romanian/'` and the app uses
`HashRouter` (URLs like `.../#/review`) instead of `BrowserRouter` — GitHub Pages has no
server-side rewrite for client-side routes, so a direct link or a refresh on any route but "/"
would otherwise 404. Renaming the repo means updating that `base` to match.

Asset paths written as strings in code must be built from `import.meta.env.BASE_URL`, never
root-absolute (`/audio/...`) — Vite rewrites asset URLs in HTML and imports, not string
literals, so a root-absolute path silently 404s under the subpath.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — type-check and production build
- `npm run test` — unit tests (vitest)
- `npm run lint` — oxlint
- `npm run build:vocab` — regenerate `src/content/generated/vocab-top10k.json` from the
  [hermitdave/FrequencyWords](https://github.com/hermitdave/FrequencyWords) Romanian frequency
  list (fetched automatically into the gitignored `scripts/vocab-raw/` on first run)

## How it's built

- **No backend.** Progress lives entirely in the browser (IndexedDB), nothing is sent anywhere.
- **Audio** is the device's built-in text-to-speech (`speechSynthesis`) — free, offline, no API
  keys. `src/audio/AudioResolver.ts` is written so pre-generated audio files can be dropped in
  later (e.g. from a paid TTS service) without changing any lesson content or components.
- **Speaking practice is self-assessed**: you speak your answer out loud, hear the correct
  Romanian, and judge yourself — the same loop Michel Thomas and Say Something In... courses use.
  This needs no speech recognition, so it's fully reliable and works while driving.
- **Spaced repetition** uses a simple Leitner box system (`src/engine/srs.ts`).
- Content is plain TypeScript data in two areas, both drilled by the same engine:
  - **The course** (`src/content/courses/ro-core/`, Home tab) — a Michel Thomas–style
    grammar-building progression. Units are freely navigable, not gated in sequence.
  - **This week** (`src/content/life/`, its own tab) — one real-life topic at a time (his day,
    holidays, the grandparents…): phrases to drill, a Driving Mode run of just those phrases, a
    tap-to-hear phrase list, and prompts for actually using them at home that week.
- Every drill id is globally unique and permanent — spaced-repetition progress is keyed off it.
  `src/content/content.test.ts` enforces uniqueness; anything that resolves drills by id goes
  through `everyDrill()` in `src/content/index.ts` so both areas feed Review and Driving Mode.
- No streaks, points, or badges, by design — the aim is real conversation, not app engagement.

## Known limitations (by design, for now)

- Content grows over time — the engine is the finished part.
- On iPhone, Driving Mode's audio is most reliable with the screen on/dimmed rather than fully
  locked — a documented WebKit limitation of live `speechSynthesis` in the background. This
  improves once pre-generated audio files replace live TTS.
- The vocabulary list (`vocab-top10k.json`) is cleaned automatically but still contains some
  residual noise (mostly proper names from the subtitle corpus it's derived from) —
  `scripts/vocab-exclusions.json` is extended opportunistically, not exhaustively audited.
- An optional "check what I said" speech-recognition button is not yet built; when added, it'll
  be a progressive enhancement only (iOS Safari has no speech-recognition API at all).
