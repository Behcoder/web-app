'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "02d84b3d901bec7e108ce405dd9dc243",
"assets/AssetManifest.bin.json": "afcb8e038d261b4bb36dbac9844b159a",
"assets/AssetManifest.json": "5b4ff06a88816920fa3f1f0c2d0f5b22",
"assets/assets/animations/error.json": "14adc48a53b3b19886b88dabc2b539ae",
"assets/assets/animations/no_internet.json": "c47974c98dc548c9507b16277e15c54d",
"assets/assets/config.env": "88791eae1e9da0388d539874c961511e",
"assets/assets/fonts/Vazirmatn-Black.ttf": "6825ce8ccb37f4276fead073bda783bd",
"assets/assets/fonts/Vazirmatn-Bold.ttf": "4ac4426bc38f337534dfc45b3dbd9283",
"assets/assets/fonts/Vazirmatn-ExtraBold.ttf": "891f7f4608b433b4482ca489a480246d",
"assets/assets/fonts/Vazirmatn-ExtraLight.ttf": "0b05db45958f4ca70792ea093c698fa2",
"assets/assets/fonts/Vazirmatn-Light.ttf": "e1718753611a1da034b7e80ecc1523be",
"assets/assets/fonts/Vazirmatn-Medium.ttf": "24d05392e628925dcb1722a1f20952d3",
"assets/assets/fonts/Vazirmatn-Regular.ttf": "e8e9648f5b8fc824da409750ff331221",
"assets/assets/fonts/Vazirmatn-SemiBold.ttf": "a11a0c156bba19a2977e82bd0ad28e45",
"assets/assets/fonts/Vazirmatn-Thin.ttf": "913ea5e11319b846c46e14b226b51009",
"assets/assets/icon/app_icon.png": "3df17dbe6407a1ed99125e2337acb5af",
"assets/assets/icon/app_icon2.png": "f96a3d77630338a08c498a9075f703f4",
"assets/assets/img/banner/1.png": "3d51c2b80d91f365795e2395da774985",
"assets/assets/img/banner/2.png": "727c526f873d5124f7b797697e4400ed",
"assets/assets/img/banner/3.png": "08f4cc82ddee72323fd4b95a6463c9c2",
"assets/assets/img/gallery/general/DSC_1037.jpg": "374998b83cb69857577c43d291a6065b",
"assets/assets/img/gallery/general/DSC_1040.jpg": "32e05f0d49d6f3506d8705d50f29acd0",
"assets/assets/img/gallery/general/DSC_1043.jpg": "62d29df584fdf5e5267401182107a66b",
"assets/assets/img/gallery/general/DSC_1046.jpg": "900635220282da61d1999f49b12fd0a9",
"assets/assets/img/gallery/LOGO/logo.png": "d918ca054b6f536f8ab7d63de5c8bdb6",
"assets/assets/img/gallery/LOGO/logo2.png": "7f81d47e0abb1f1b2cc7781802986235",
"assets/assets/img/gallery/LOGO/logo3.png": "3df17dbe6407a1ed99125e2337acb5af",
"assets/assets/img/gallery/products/DSC_1052.jpg": "afb019988464f5d560da6826b5bca0fa",
"assets/assets/img/gallery/products/DSC_1054.jpg": "a6407f429882856ee8e48265d40cea6d",
"assets/assets/img/gallery/products/DSC_1068.jpg": "717b1489334baa9394b59ccd96bdd1c4",
"assets/FontManifest.json": "ad6d987e84255d7cf335621500a005a1",
"assets/fonts/MaterialIcons-Regular.otf": "9f7c8f6e35b3a483113a5556d0faffcb",
"assets/NOTICES": "cae5145c2e8569ef260bdc68acc12d4d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "be31d6ad739eeeead47d2dd228000ddf",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "e53e4c74be92c211c89d3b5fab3f39b9",
"icons/Icon-192.png": "e81a1aa81854c20defdc9fe08d1bbced",
"icons/Icon-512.png": "461e7e648c61b10eb41224445bde3e9f",
"icons/Icon-maskable-192.png": "e81a1aa81854c20defdc9fe08d1bbced",
"icons/Icon-maskable-512.png": "461e7e648c61b10eb41224445bde3e9f",
"index.html": "30e6e3d40bf5f5a755d3326b5dc8cea9",
"/": "30e6e3d40bf5f5a755d3326b5dc8cea9",
"main.dart.js": "2b90d1dc895614013aec144a7f59a63b",
"manifest.json": "98d55a0cf6568a50117924fe8396b34f",
"PWA_README.md": "d41d8cd98f00b204e9800998ecf8427e",
"robots.txt": "d41d8cd98f00b204e9800998ecf8427e",
"sitemap.xml": "d41d8cd98f00b204e9800998ecf8427e",
"sw.js": "d41d8cd98f00b204e9800998ecf8427e",
"version.json": "c178901a0b05ba308d1e02af24dcd80a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
