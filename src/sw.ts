// service-worker.js

import { precacheAndRoute, cleanupOutdatedCaches } from "workbox-precaching"

declare let self: ServiceWorkerGlobalScope

cleanupOutdatedCaches()

precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting()
  }
})

self.addEventListener("fetch", (event: FetchEvent) => {
  const url = new URL(event.request.url)
  if (event.request.method !== "POST" || url.pathname !== "/") {
    return
  }
})
