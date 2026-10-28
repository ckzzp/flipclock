/* Flip Clock PWA service worker */
'use strict';

var CACHE_NAME = 'flipclock-v1';
var CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './build/main.js',
  './build/main.css',
  './build/vendor.js',
  './build/polyfills.js',
  './assets/js/jquery-3.3.1.min.js',
  './assets/js/flipclock.js',
  './assets/js/jquery.cookie.js',
  './assets/js/script.js',
  './assets/icon/icon-192.png',
  './assets/icon/icon-512.png',
  './assets/icon/apple-touch-icon.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(CORE_ASSETS).catch(function (err) {
        console.warn('precache failed for some assets', err);
      });
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE_NAME; })
          .map(function (k) { return caches.delete(k); })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

/* Cache-first for static assets (everything under this origin), fallback to network */
self.addEventListener('fetch', function (event) {
  var url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== location.origin) {
    return;
  }
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      if (cached) {
        return cached;
      }
      return fetch(event.request).then(function (response) {
        if (response && response.status === 200 && response.type === 'basic') {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, clone); });
        }
        return response;
      }).catch(function () {
        /* offline fallback: serve cached index.html for navigation requests */
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return Response.error();
      });
    })
  );
});
