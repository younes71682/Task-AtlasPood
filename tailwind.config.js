/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Proximanova: ["proximanova-nova", 'sans-serif'],
        Yekan: ["Yekan", 'sans-serif'],
      }
    },
  },
  plugins: [],
}

