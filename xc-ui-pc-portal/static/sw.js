importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "xc-portal",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.65cb5b37645139614893.js",
    "revision": "b4a088cb255f7a52c513a24002bd45d0"
  },
  {
    "url": "/_nuxt/layouts_default.1469d7d81f87376f78d8.js",
    "revision": "0ebd028d3f6f8fd3fe61a01555182104"
  },
  {
    "url": "/_nuxt/layouts_default1.6a00df25795b7977f930.js",
    "revision": "546c80264b6341f8a5c7c574649b83be"
  },
  {
    "url": "/_nuxt/layouts_empty-page.8171dc9d5d6c1dd739f7.js",
    "revision": "f7a6161b4fd649bb997df87b8b8c102d"
  },
  {
    "url": "/_nuxt/layouts_test.fe1564653fdc73ba1fc1.js",
    "revision": "c66e705ace3781f870c04953e11f23d3"
  },
  {
    "url": "/_nuxt/manifest.012c323f98f7e7d8eff4.js",
    "revision": "8c7b07329797113a81cfd85de0332554"
  },
  {
    "url": "/_nuxt/pages_about.b510ab3a59d234d52daa.js",
    "revision": "3d5b34d6ef7f14b5f76a563505ba64ac"
  },
  {
    "url": "/_nuxt/pages_course_search_index.da63864d7eb3d9c5f10c.js",
    "revision": "c506748bb8180fcc5a4f75439292d2bf"
  },
  {
    "url": "/_nuxt/pages_user__id.4a5927fb7cfa583647c9.js",
    "revision": "93cb2146c2cbd60c1d059b7b67f2dfeb"
  },
  {
    "url": "/_nuxt/pages_user_index.133b1fca9c8abfa97bb6.js",
    "revision": "2230e7215daac7df71f972f8eae86873"
  },
  {
    "url": "/_nuxt/pages_user_one.f33a8bbc45ecb5d4028b.js",
    "revision": "cb5792e58d84dfea2489570f111d6a24"
  },
  {
    "url": "/_nuxt/pages_user.b1f7752cebcbe9b8f352.js",
    "revision": "b6f4a5ac346d9babeac0b576f551456a"
  },
  {
    "url": "/_nuxt/vendor.432827a019a2be39ea3e.js",
    "revision": "82a9f5d8c590af70c0b7db9d60dff4b2"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

