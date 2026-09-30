// Loaded into the service worker (see `importScripts` in vite.config.ts) ahead of Workbox's own
// routes, so its fetch listener gets first refusal.
//
// Safari fetches audio with byte-range requests ("Range: bytes=0-1" first) and refuses to play a
// full 200 response to one. Precached clips come out of the cache whole, so without this every
// recorded clip fails on iPhone and the app falls back to the built-in voice. This answers range
// requests for cached audio with the requested slice as a 206, the way a web server would.

self.addEventListener('fetch', (event) => {
  const range = event.request.headers.get('range')
  if (!range || !/\.(mp3|wav)$/.test(new URL(event.request.url).pathname)) return
  event.respondWith(rangeResponse(event.request, range))
})

async function rangeResponse(request, range) {
  // Precache entries are stored under the URL plus a "?__WB_REVISION__=…" query.
  const cached = await caches.match(request.url, { ignoreSearch: true })
  if (!cached) return fetch(request)

  const blob = await cached.blob()
  const size = blob.size
  const match = /^bytes=(\d*)-(\d*)$/.exec(range.trim())
  let start
  let end
  if (match && match[1] !== '') {
    start = Number(match[1])
    end = match[2] === '' ? size - 1 : Math.min(Number(match[2]), size - 1)
  } else if (match && match[2] !== '') {
    // "bytes=-500": the last 500 bytes.
    start = Math.max(size - Number(match[2]), 0)
    end = size - 1
  }
  if (start === undefined || start >= size || start > end) {
    return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${size}` } })
  }

  const slice = blob.slice(start, end + 1)
  return new Response(slice, {
    status: 206,
    statusText: 'Partial Content',
    headers: {
      'Content-Type': cached.headers.get('Content-Type') ?? 'audio/mpeg',
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Content-Length': String(slice.size),
      'Accept-Ranges': 'bytes',
    },
  })
}
