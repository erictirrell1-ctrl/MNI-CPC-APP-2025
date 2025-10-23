
const CACHE = 'mnitocpc-v1';
const ASSETS = ['./', './index.html', 'https://cdn.tailwindcss.com'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request))));
