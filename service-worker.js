var cacheName = "sgtoilet-cache-" + Date.now();
var filesToCache = [
  "index.html",
  "build/bundle.css",
  "build/bundle.js",
  "icons/remixicons.css",
  "icons/remixicon.woff",
  "icons/remixicon.woff2",
  "icons/remixicon.ttf",
  "icons/remixicon.svg",
  "https://fonts.googleapis.com/css?family=M+PLUS+1p:400,600,700,800&display=swap"
];
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    }).catch(e=>{
        console.error(e)
    })
  );
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(thisCacheName) {
          if (thisCacheName !== cacheName) {
            return caches.delete(thisCacheName);
          }
        })
      );
    }).catch(e=>{
        console.error(e)
    })
  );
});
self.addEventListener("fetch", e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    (async function() {
      const response = await caches.match(e.request);
      return response || fetch(e.request);
    })()
  );
});