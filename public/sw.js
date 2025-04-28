const CACHE_NAME = 'nursite-v4';
const OFFLINE_URL = '/offline.html';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll([
        '/',
        '/styles/main.css',
        '/js/app.js',
        '/assets/fonts/amiri-quran.woff2',
        '/assets/icons/favicon.svg'
      ]))
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .catch(() => caches.match(OFFLINE_URL))
  } else {
    e.respondWith(
      caches.match(e.request)
        .then(res => res || fetch(e.request))
  }
});
