/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = "precache-20230731202409+0000";
const RUNTIME = "runtime-20230731202409+0000";

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  
  
    './assets/css/custom.css',
  
    './assets/img/apple-mask-icon.svg',
  
    './assets/img/logo.png',
  
    './assets/img/share.jpg',
  
    './assets/img/themed-mask-icon.png',
  
    './lib/feather.min.js',
  
    './lib/skeleton/skeleton.css',
  
    './lib/splide/css/splide.min.css',
  
    './lib/splide/js/splide-extension-url-hash.min.js',
  
    './lib/splide/js/splide.min.js',
  
    './lib/splide/js/splide.min.js.map',
  
    '.photos/Paintings/Untitled_PXL_20230224_185310095.jpg',
  
    '.photos/Paintings/EveTakesHerChances_IMG_20180702_110827.jpg',
  
    '.photos/Paintings/mt_fuji_4.jpg',
  
    '.photos/Paintings/YearOfWind2_IMG_20190503_163111.jpg',
  
    '.photos/Paintings/remnants_of_me.jpg',
  
    '.photos/Paintings/Untitled_PXL_20230219_165516626.jpg',
  
    '.photos/Paintings/MtFujiFromHadano_PXL_20230219_173336308.jpg',
  
    '.photos/Paintings/MtKoboOnSpring_PXL_20230219_173114030.jpg',
  
    '.photos/Paintings/MtFuji_IMG_20180702_111054.jpg',
  
    '.photos/Paintings/YearOfWind_IMG_20190503_163211.jpg',
  
    '.photos/Paintings/Persephone_IMG_20180702_111154.jpg',
  
    '.photos/Paintings/LakeChautauqua1988_original_2e1dd3f1-566f-4d77-90ab-90f41635b5fd_PXL_20210816_194424806.jpg',
  
    '.photos/Paintings/MtFuji2_IMG_20180702_111103.jpg',
  
    '.photos/Paintings/JesseTree_IMG_20180702_110930.jpg',
  
    '.photos/Drawings/dreams_of_water.jpg',
  
    '.photos/Drawings/where_breath_becomes_wind.jpg',
  
    '.photos/Portraits/SelfPortrait_IMG_20180702_111110.jpg',
  
    '.photos/Portraits/audrey.jpg',
  
    '.photos/Portraits/anna.jpg',
  
    './assets/img/logo.webp',
  
    './assets/img/share.webp',
  
    './assets/img/themed-mask-icon.webp',
  
    './photos/Paintings/Untitled_PXL_20230224_185310095.webp',
  
    './photos/Paintings/EveTakesHerChances_IMG_20180702_110827.webp',
  
    './photos/Paintings/mt_fuji_4.webp',
  
    './photos/Paintings/YearOfWind2_IMG_20190503_163111.webp',
  
    './photos/Paintings/remnants_of_me.webp',
  
    './photos/Paintings/Untitled_PXL_20230219_165516626.webp',
  
    './photos/Paintings/MtFujiFromHadano_PXL_20230219_173336308.webp',
  
    './photos/Paintings/MtKoboOnSpring_PXL_20230219_173114030.webp',
  
    './photos/Paintings/MtFuji_IMG_20180702_111054.webp',
  
    './photos/Paintings/YearOfWind_IMG_20190503_163211.webp',
  
    './photos/Paintings/Persephone_IMG_20180702_111154.webp',
  
    './photos/Paintings/LakeChautauqua1988_original_2e1dd3f1-566f-4d77-90ab-90f41635b5fd_PXL_20210816_194424806.webp',
  
    './photos/Paintings/MtFuji2_IMG_20180702_111103.webp',
  
    './photos/Paintings/JesseTree_IMG_20180702_110930.webp',
  
    './photos/Drawings/dreams_of_water.webp',
  
    './photos/Drawings/where_breath_becomes_wind.webp',
  
    './photos/Portraits/SelfPortrait_IMG_20180702_111110.webp',
  
    './photos/Portraits/audrey.webp',
  
    './photos/Portraits/anna.webp',
  
    '.cache/resize/93d24d63222626114ccce517dbc2ff0b_4x4.jpg',
  
    '.cache/resize/4029bec7d004a925ec16fa7ea14d3279_4x4.jpg',
  
    '.cache/resize/c40f96281db5615b41ee99df54a72618_4x4.jpg',
  
    '.cache/resize/1741d87d5e7c6cfa4100900206cef7ad_4x4.jpg',
  
    '.cache/resize/a6b93e0549d522a549b887fc75f492ef_4x4.jpg',
  
    '.cache/resize/7a210be1942f97a1359d1b93ef09df24_4x4.jpg',
  
    '.cache/resize/5be74cc04cee4f668fd37696ce66da23_4x4.jpg',
  
    '.cache/resize/2ffcb898d2cded4255d8e4f08029318c_4x4.jpg',
  
    '.cache/resize/2acc9c35009fff355f020885a79cf706_4x4.jpg',
  
    '.cache/resize/324f6b2aabebb869c66ef29d48a8da2d_4x4.jpg',
  
    '.cache/resize/45bc6c99b560ff811fc9b23bd77f5435_4x4.jpg',
  
    '.cache/resize/46fc775c603c405b68866c4ce5b0f9b6_4x4.jpg',
  
    '.cache/resize/f5970e5559921afddb580324f4aeb56d_4x4.jpg',
  
    '.cache/resize/49ff464f8f1336f6e448c108e100b7ff_4x4.jpg',
  
    '.cache/resize/949f62003b9ec19b0b073b6efdf9a37e_4x4.jpg',
  
    '.cache/resize/8ce0c05dfda6ecbbaca379c8f2f63ee4_4x4.jpg',
  
    '.cache/resize/2fe6695a36458693ab8c2edb8944a4ac_4x4.jpg',
  
    '.cache/resize/7ff6a9590fe4b5fc78bd86b06e19c60a_4x4.jpg',
  
    '.cache/resize/0646253161f41879479f2f16c2b670b4_4x4.jpg',
  
  
    './Artist/index.html',
  
    './Paintings/index.html',
  
    './Drawings/index.html',
  
    './Portraits/index.html',
  
    './',
  
  './sitemap.xml',
  './index.html'
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});
