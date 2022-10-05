/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        About: 'url("../src/assets/images/About.png")',
      }
    },
  },
  plugins: [],
}
