/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/Components/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    // ...
    require('@tailwindcss/line-clamp'),
  ]
}
