/// <reference lib="webworker" />

import { precacheAndRoute, cleanupOutdatedCaches } from "workbox-precaching"

declare let self: ServiceWorkerGlobalScope
// const worker = self as unknown as Worker

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

  event.respondWith(
    (async () => {
      const formData = await event.request.formData()
      const imageFiles = formData.getAll("images") as File[]
      const text = formData.get("text") as string
      const title = formData.get("title") as string
      const url = formData.get("url") as string
      console.log("🚀 ~ file: sw.ts:77 ~ imageFiles:", imageFiles)

      const search = new URLSearchParams()

      if (text) {
        console.log("🚀 ~ file: sw.ts:35 ~ text:", text)

        search.set("text", text)
      }
      if (title) {
        console.log("🚀 ~ file: sw.ts:35 ~ text:", text)

        search.set("title", title)
      }
      if (url) {
        console.log("🚀 ~ file: sw.ts:35 ~ text:", text)

        search.set("url", url)
      }

      if (imageFiles[0]) {
        const file = imageFiles[0] as File
        const fileName = file.name
        search.set("image", fileName)

        const ca = await caches.open("image")
        await ca.put(`/image-${fileName}`, new Response(file))
      }
      return Response.redirect(`/?${search.toString()}`, 303)
    })()
  )
})
