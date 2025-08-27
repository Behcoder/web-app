const CACHE_VERSION = 'seify-pwa-v1.0.1';
const APP_SHELL_CACHE = `app-shell-${CACHE_VERSION}`;
const RUNTIME_CACHE = `runtime-${CACHE_VERSION}`;

// Core files to cache for offline (app shell)
const APP_SHELL_FILES = [
	'/',
	'/index.html',
	'/manifest.json',
	'/favicon.png',
	'/flutter.js'
];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(APP_SHELL_CACHE).then((cache) => cache.addAll(APP_SHELL_FILES))
	);
	self.skipWaiting();
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((keys) =>
			Promise.all(
				keys
					.filter((key) => ![APP_SHELL_CACHE, RUNTIME_CACHE].includes(key))
					.map((key) => caches.delete(key))
			)
		)
	);
	self.clients.claim();
});

// Strategy:
// - HTML (navigation requests): network-first (to always get latest app shell)
// - Images: network-first to prevent stale product images
// - Static assets (js/css/svg/wasm/woff2): cache-first with immutable headers
// - Other requests: stale-while-revalidate
self.addEventListener('fetch', (event) => {
	const { request } = event;
	const url = new URL(request.url);

	// Only handle GET
	if (request.method !== 'GET') return;

	// Bypass cross-origin (optional: you can cache CDN if desired)
	// if (url.origin !== location.origin) return;

	// Handle navigation (HTML) with network-first
	if (request.mode === 'navigate' || (request.headers.get('accept') || '').includes('text/html')) {
		event.respondWith(networkFirst(request));
		return;
	}

	// Images: network-first
	if (/\.(?:png|jpg|jpeg|webp|gif|svg)$/.test(url.pathname)) {
		event.respondWith(networkFirst(request));
		return;
	}

	// Other static assets cache-first
	if (/\.(?:js|mjs|css|ico|woff2?|ttf|otf|wasm)$/.test(url.pathname)) {
		event.respondWith(cacheFirst(request));
		return;
	}

	// Default: stale-while-revalidate
	event.respondWith(staleWhileRevalidate(request));
});

async function networkFirst(request) {
	const cache = await caches.open(APP_SHELL_CACHE);
	try {
		const response = await fetch(request, { cache: 'no-store' });
		cache.put(request, response.clone());
		return response;
	} catch (err) {
		const cached = await cache.match(request);
		if (cached) return cached;
		// fallback to offline shell if available
		return caches.match('/index.html');
	}
}

async function cacheFirst(request) {
	const cache = await caches.open(RUNTIME_CACHE);
	const cached = await cache.match(request);
	if (cached) return cached;
	const response = await fetch(request);
	cache.put(request, response.clone());
	return response;
}

async function staleWhileRevalidate(request) {
	const cache = await caches.open(RUNTIME_CACHE);
	const cachedPromise = cache.match(request);
	const networkPromise = fetch(request)
		.then((response) => {
			cache.put(request, response.clone());
			return response;
		})
		.catch(() => undefined);
	const cached = await cachedPromise;
	return cached || networkPromise || fetch(request);
}

// Optional: listen for skipWaiting from client to activate new SW immediately
self.addEventListener('message', (event) => {
	if (event.data && event.data.type === 'SKIP_WAITING') {
		self.skipWaiting();
	}
});
