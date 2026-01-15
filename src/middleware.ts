import type { MiddlewareHandler } from "astro"

export const onRequest: MiddlewareHandler = async (
  {
    // locals, url, params, routePattern
  },
  next
) => {
  return next()
}
