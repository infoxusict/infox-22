import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

clientsClaim();

var cacheName = 'cache-update-and-refresh';;
var cacheFiles = ["./"];

precacheAndRoute(self.__WB_MANIFEST);

const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== 'navigate') {
      return false;
    } // If this is a URL that starts with /_, skip.

    if (url.pathname.startsWith('/_')) {
      return false;
    } // If this looks like a URL for a resource, because it contains // a file extension, skip.

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } // Return true to signal that we want to use the handler.

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'), // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('install', function (e) {
  console.log("[serviceWorker] installed")

  e.waitUntil(
      caches.open('default-cache').then(function (cache) {
          return cache.addAll(cacheFiles)
      }).then(function () {
          return self.skipWaiting();
      }));
  console.log("[serviceWorker] Cached")
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
      caches.keys().then((cacheNames) => {
          return Promise.all(
              cacheNames.map((cache) => {
                  if (cache !== cacheName) {     //cacheName = 'cache-v1'
                      return caches.delete(cache); //Deleting the cache
                  }
              })
          );
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
      caches.match(event.request).then(function (response) {
          return response || fetch(event.request);
      })
  );
  event.waitUntil(
      update(event.request)
          .then(function (response) {
              caches.open(cacheName).then(function (cache) {
                  caches.match(event.request).then(function (cacheresponse) {
                        if (cacheresponse != undefined && response != undefined) {
                          if (cacheresponse?.headers.get("ETag") !== response?.headers.get("ETag")) {
                              console.log('[ServiceWorker]' + response.url + ' - Cache' + cacheresponse?.headers.get("ETag") + "- real" + response?.headers.get("ETag"));
                              cache.put(event.request, response.clone()).then(function () {}).catch(() => {});
                          }
                        }
                  });
              });
          })
  )
});

function update(request) {
  return caches.open(cacheName).then(function (cache) {
      return request;
  });
}

// Any other custom service worker logic can go here.
