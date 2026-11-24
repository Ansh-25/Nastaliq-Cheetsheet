const VERSION = 'ae67342731966c72';
const scope = self.registration.scope;
const cachePrefix = `urdu-by-letter:${scope}:`;
const cacheName = cachePrefix + VERSION;
const SHELL_PATHS = [
  "./app.js",
  "./fonts/dm-sans-normal-latin-ext.woff2",
  "./fonts/dm-sans-normal-latin.woff2",
  "./fonts/fonts.css",
  "./fonts/instrument-serif-italic-latin-ext.woff2",
  "./fonts/instrument-serif-italic-latin.woff2",
  "./fonts/instrument-serif-normal-latin-ext.woff2",
  "./fonts/instrument-serif-normal-latin.woff2",
  "./fonts/noto-naskh-arabic-normal-arabic.woff2",
  "./fonts/noto-naskh-arabic-normal-latin-ext.woff2",
  "./fonts/noto-naskh-arabic-normal-latin.woff2",
  "./fonts/noto-naskh-arabic-normal-math.woff2",
  "./fonts/noto-naskh-arabic-normal-symbols.woff2",
  "./fonts/noto-nastaliq-urdu-normal-arabic.woff2",
  "./fonts/noto-nastaliq-urdu-normal-latin-ext.woff2",
  "./fonts/noto-nastaliq-urdu-normal-latin.woff2",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./index.html",
  "./manifest.webmanifest"
];
const shellURLs = new Set(SHELL_PATHS.map(path => new URL(path, scope).href));
const indexURL = new URL('./index.html', scope).href;

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll([...shellURLs].map(url => new Request(url, {cache: 'reload'})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter(name => name.startsWith(cachePrefix) && name !== cacheName)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const isAppPage = request.mode === 'navigate' &&
    (url.origin + url.pathname === scope || url.origin + url.pathname === indexURL);
  if (!isAppPage && !shellURLs.has(request.url)) return;

  event.respondWith((async () => {
    const cache = await caches.open(cacheName);
    return (await cache.match(isAppPage ? indexURL : request)) || fetch(request);
  })());
});
