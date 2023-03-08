/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         lightPink: '#E84393',
         darkPink: '#D70A6D'
      }
    },
  },
  plugins: [],
}