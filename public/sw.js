const CACHE_NAME = 'chizel-v1.0.0';
const STATIC_CACHE = 'chizel-static-v1.0.0';
const DYNAMIC_CACHE = 'chizel-dynamic-v1.0.0';

// Critical resources for immediate loading
const CRITICAL_RESOURCES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/logo.png',
];

// Static assets for caching
const STATIC_RESOURCES = [
  '/fonts/Orbitron-Bold.woff2',
  '/fonts/Fredoka-Regular.woff2',
  '/fonts/Quicksand-Regular.woff2',
  '/images/app-image.webp',
  '/images/about-image.webp',
  '/images/vision-image.webp',
];

// Dynamic resources (API calls, etc.)
const DYNAMIC_RESOURCES = [
  // Add any API endpoints here
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => {
        console.log('Static cache opened');
        return cache.addAll(STATIC_RESOURCES);
      }),
      caches.open(DYNAMIC_CACHE).then((cache) => {
        console.log('Dynamic cache opened');
        return cache.addAll(DYNAMIC_RESOURCES);
      })
    ])
  );
  // Skip waiting for immediate activation
  self.skipWaiting();
});

// Activate event - clean up old caches and take control
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Take control of all clients immediately
      self.clients.claim()
    ])
  );
});

// Fetch event - intelligent caching strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Cache strategy based on resource type
  if (STATIC_RESOURCES.includes(url.pathname)) {
    // Static resources: Cache-first strategy
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (DYNAMIC_RESOURCES.includes(url.pathname)) {
    // Dynamic resources: Network-first strategy
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  } else if (url.pathname === '/' || url.pathname === '/index.html') {
    // HTML: Network-first strategy for fresh content
    event.respondWith(networkFirst(request, STATIC_CACHE));
  } else {
    // Default: Network-first strategy
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  }
});

// Cache-first strategy for static assets
async function cacheFirst(request, cacheName) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return a fallback response if both cache and network fail
    return new Response('Offline content not available', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

// Network-first strategy for dynamic content
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Fallback to cache if network fails
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Return offline fallback
    return new Response('Offline content not available', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

// Background sync for offline functionality
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Implement background sync logic here
  console.log('Background sync triggered');
}

// Push notification support
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New notification from Chizel',
    icon: '/images/logo.png',
    badge: '/images/logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };

  event.waitUntil(
    self.registration.showNotification('Chizel', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow('/')
  );
});
