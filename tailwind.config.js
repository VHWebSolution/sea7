/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        's7green': '#188B8B',
        's7greend': '#083838',
      },
      screens: {
        'ss': '990px',
      }
    },
  },
  plugins: [],
}