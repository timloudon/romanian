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
- `npm run coverage:vocab [-- <n>]` — how much of the most common vocabulary the drills use,
  and which of the top `n` words are still missing — a guide for choosing words in new content
- `npm run generate:audio` — generate recorded audio for new or changed phrases (see below)

## Recorded audio (ElevenLabs)

Phrases play from pre-generated audio files when they exist, and from the device's built-in
voice otherwise. Recorded clips play offline (they're precached by the service worker), with the
iPhone's silent switch on, and more reliably in Driving Mode with the screen locked.

Generation reads `ELEVENLABS_API_KEY` and `ELEVENLABS_VOICE_RO` / `ELEVENLABS_VOICE_EN` from
`.env.local` (gitignored). Files in `public/audio/phrases/` are named by a hash of the text,
model and voice, so re-running only generates what's new or changed, and the app matches clips
by exact text — an edited phrase falls back to the built-in voice until regenerated.

This project uses ElevenLabs' **free plan** (10,000 characters a month; library voices aren't
available to it via the API, so the Romanian voice is one made with ElevenLabs' Voice Design). Always cap a run below the remaining
monthly credit, e.g. `npm run generate:audio -- --only ro --max-chars 8600`, and use
`--dry-run` first to see the size. (Running without a cap is also safe on the free plan — it has
no overage, so ElevenLabs refuses once the month's credits are gone and the script stops.)
Phrases are recorded in priority order — Structures first, then This week, then the course — so
each month's credits go where they matter most, and anything not yet recorded plays in the
device's voice. Voice by ElevenLabs.

## How it's built

- **No backend.** Progress lives entirely in the browser (IndexedDB), nothing is sent anywhere.
- **Audio** goes through `src/audio/AudioResolver.ts`: a recorded clip if one exists, otherwise
  the built-in voice. All clip playback, Driving Mode's keep-alive loop and the lock-screen
  session share one `<audio>` element (`src/audio/player.ts`) — iOS only lets an element play
  without a fresh tap once that same element has been played from a tap, so it's unlocked on the
  first tap anywhere.
- **Offline:** everything, recorded audio included, is precached by the service worker. The app
  works with no connection once it's been opened once; Settings shows whether it's ready.
  Safari only plays audio served as byte ranges, so `public/sw-range-requests.js` (loaded into
  the service worker) answers range requests for cached clips — without it, iPhone silently
  falls back to the built-in voice for every clip.
- **Speaking practice is self-assessed**: you speak your answer out loud, hear the correct
  Romanian, and judge yourself — the same loop Michel Thomas and Say Something In... courses use.
  This needs no speech recognition, so it's fully reliable and works while driving.
- **Spaced repetition** uses a simple Leitner box system (`src/engine/srs.ts`).
- Content is plain TypeScript data in three areas, all drilled by the same engine:
  - **The course** (`src/content/courses/ro-core/`, Home tab) — a Michel Thomas–style
    grammar-building progression. Units are freely navigable, not gated in sequence.
  - **This week** (`src/content/life/`, its own tab) — one real-life topic at a time (his day,
    holidays, the grandparents…): phrases to drill, a Driving Mode run of just those phrases, a
    tap-to-hear phrase list, and prompts for actually using them at home that week.
  - **Structures** (`src/content/structures/`, its own tab) — how Romanian works, explained from
    English outwards rather than from Romanian grammar. Each lesson is one "shift" (no am-ing;
    every past is "I have done"; "to me it's cold"…) taught card by card: explanations with
    word-by-word "think it as" glosses, many-English-into-one-Romanian funnels, a
    yesterday/now/tomorrow dial, spoken Michel Thomas–style build-up ladders (self-assessed, and
    fed into Review), word-tile ordering, "spot the English habit" questions, and scripted
    dialogues where you play your side of a real exchange out loud — ending in a
    one-line shortcut, collected on a Shortcuts page. Each part also offers a shuffled
    40-phrase Driving Mode run (`/driving?part=<name>`). Lesson text marks Romanian as `{{…}}`,
    which renders tappable and is picked up by the audio generator.
- Every drill id is globally unique and permanent — spaced-repetition progress is keyed off it.
  `src/content/content.test.ts` enforces uniqueness; anything that resolves drills by id goes
  through `everyDrill()` in `src/content/index.ts` so both areas feed Review and Driving Mode.
- No streaks, points, or badges, by design — the aim is real conversation, not app engagement.

## Known limitations (by design, for now)

- Content grows over time — the engine is the finished part.
- Phrases without a recorded clip use the built-in voice, which on iPhone is muted by the silent
  switch and is most reliable in Driving Mode with the screen on. The English prompts and
  the later course units are currently in this state until next month's free ElevenLabs credits.
- Safari (not installed to the Home Screen) can clear a site's offline copy and progress after
  seven days unused. Home Screen apps are exempt.
- The vocabulary list (`vocab-top10k.json`) is cleaned automatically but still contains some
  residual noise (mostly proper names from the subtitle corpus it's derived from) —
  `scripts/vocab-exclusions.json` is extended opportunistically, not exhaustively audited.
- An optional "check what I said" speech-recognition button is not yet built; when added, it'll
  be a progressive enhancement only (iOS Safari has no speech-recognition API at all).
