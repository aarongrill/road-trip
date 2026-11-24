// Service worker: keeps the app usable without a signal.
// - App files: network first (so updates show up right away), saved copy when offline.
// - Leaflet and fonts: saved copy first.
// - Map tiles: saved as you view them (never bulk-downloaded, per OpenStreetMap's tile policy).
const VERSION = "rt27-v19";
const APP = VERSION + "-app";
const TILES = "rt27-tiles";
const MAX_TILES = 3000;
const CORE = ["./", "./index.html", "./data.js", "./config.js", "./sync.js", "./manifest.json", "./icon-192.png", "./icon-512.png"];
const OPTIONAL = ["./route-geometry.js"];
const LIBS = [
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.5.3/MarkerCluster.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.5.3/leaflet.markercluster.min.js"
];

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(APP);
    await cache.addAll(CORE);
    for (const url of [...OPTIONAL, ...LIBS]) {
      try { await cache.add(url); } catch (e) { /* optional file missing or offline */ }
    }
    self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) {
      if (key !== APP && key !== TILES) await caches.delete(key);
    }
    await self.clients.claim();
  })());
});

const stripQuery = url => { const u = new URL(url); u.search = ""; return u.toString(); };

async function networkFirst(request) {
  const cache = await caches.open(APP);
  const key = stripQuery(request.url);
  try {
    const response = await Promise.race([
      fetch(request),
      new Promise((_, reject) => setTimeout(() => reject(new Error("slow")), 5000))
    ]);
    if (response.ok) cache.put(key, response.clone());
    return response;
  } catch (e) {
    const saved = await cache.match(key) || (request.mode === "navigate" ? await cache.match(stripQuery(new URL("./index.html", self.registration.scope).toString())) : null);
    if (saved) return saved;
    throw e;
  }
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const saved = await cache.match(request);
  if (saved) return saved;
  const response = await fetch(request);
  if (response.ok || response.type === "opaque") cache.put(request, response.clone());
  return response;
}

let tilePuts = 0;
async function tile(request) {
  const cache = await caches.open(TILES);
  const saved = await cache.match(request);
  if (saved) return saved;
  const response = await fetch(request);
  if (response.ok) {
    await cache.put(request, response.clone());
    if (++tilePuts % 100 === 0) {
      const keys = await cache.keys();
      for (let i = 0; i < keys.length - MAX_TILES; i++) await cache.delete(keys[i]);
    }
  }
  return response;
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.hostname.endsWith("tile.openstreetmap.org")) { event.respondWith(tile(req)); return; }
  if (url.origin === self.location.origin) { event.respondWith(networkFirst(req)); return; }
  if (url.hostname === "cdnjs.cloudflare.com" || url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    event.respondWith(cacheFirst(req, APP)); return;
  }
  // Everything else (routing service, Firebase, Google) goes straight to the network.
});
