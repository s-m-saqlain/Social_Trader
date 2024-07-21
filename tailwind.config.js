/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'content': "url('~/assets/images/content_image.png')",
      }),
      boxShadow: {
        'btns': '1px 1px 6px 5px #53E7C0',
      },
    },
  },
  plugins: [],
}

