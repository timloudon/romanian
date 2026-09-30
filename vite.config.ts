import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

// GitHub Pages serves this as a project site at <user>.github.io/romanian/, not at the domain
// root, so every built asset reference needs this prefix. Rename the repo? Update this to match.
const base = '/romanian/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'prompt', // never silently swap the app mid-lesson-session
      includeAssets: ['favicon.svg', 'icons/*.png', 'audio/*'],
      manifest: {
        name: 'Romanian Practice',
        short_name: 'Română',
        description: 'Conversational Romanian practice: type or speak, at your desk or on the road.',
        theme_color: '#002B7F',
        background_color: '#002B7F',
        display: 'standalone',
        start_url: base,
        scope: base,
        icons: [
          { src: `${base}icons/icon-192.png`, sizes: '192x192', type: 'image/png' },
          { src: `${base}icons/icon-512.png`, sizes: '512x512', type: 'image/png' },
          { src: `${base}icons/icon-maskable-512.png`, sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // Recorded phrase audio (mp3) is precached rather than cached on first play, so every
        // clip works offline from the start — not just the ones already heard while online.
        // Only new or changed files are downloaded when the content updates.
        globPatterns: ['**/*.{js,css,html,svg,woff2,mp3}'],
        // On a first visit, take control of the open page as soon as everything is cached, so it
        // works offline without needing a second load. Updates still wait for the "Reload" tap:
        // this doesn't enable skipWaiting.
        clientsClaim: true,
      },
    }),
  ],
})
