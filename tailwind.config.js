/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,jsx,tsx,svelte,vue,js,ts}"],
  theme: {
    extend: {
      screens: {
        sm: "400px",
      },
    },
  },
  plugins: [],
}
