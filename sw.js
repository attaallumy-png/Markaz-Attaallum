const CACHE_NAME = 'ataallum-v1';
const assets = [
  './index.html',
  // Lu bisa tambahin file CSS atau logo lu di sini biar bisa dibuka offline, contoh:
  './style.css',
  './logo.png'
];

// Jalankan pemasangan mesin cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Jalankan satpam internal buat nangkep fetch data
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
