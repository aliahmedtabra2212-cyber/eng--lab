const cacheName = 'eng-lib-v1';
const assets = [
  './',
  './index.html',
  './1.pdf',
  './2.pdf',
  './3.pdf',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
