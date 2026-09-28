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
        globPatterns: ['**/*.{js,css,html,svg,woff2}'],
        runtimeCaching: [
          {
            // Set up now even though only the driving-mode keepalive file exists today —
            // pre-generated phrase audio (added later) then gets offline-cached automatically,
            // with no service-worker config changes.
            urlPattern: /\/audio\/.*\.mp3$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'phrase-audio',
              expiration: { maxEntries: 2000, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
        ],
      },
    }),
  ],
})
