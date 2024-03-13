/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'belle' : ['Bellefair', 'sans-serif'],
        'barlow' : ['Barlow', 'sans-serif'],
        'barlow-con' : ['Barlow Condensed', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#0B0D17',
        'light-blue': '#D0D6F9',
        'light-gray': "var(--clr-light-blue)"
      }
    },

  },
  plugins: [],
}