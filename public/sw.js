const CACHE_NAME = 'nursite-v1';
const CACHE_URLS = [
  '/',
  '/src/css/base/variables.css',
  '/src/js/modules/quran.js',
  '/offline.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CACHE_URLS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(response => response || fetch(e.request))
      .catch(() => caches.match('/offline.html'))
  );
});
