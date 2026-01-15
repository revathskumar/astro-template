/// <reference types="astro/client" />
/// <reference types="vite-plugin-pwa/client" />
/// <reference types="vite-plugin-pwa/info" />

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
