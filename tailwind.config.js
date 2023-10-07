/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'font-roboto' : "'Roboto Condensed', sans-serif",
        'font-roboto-normal' : "'Roboto', sans-serif"
      }
    },
  },
  plugins: [require('daisyui')],
}