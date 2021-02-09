const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      bluegray: colors.blueGray,
      green: colors.green,
      blue: colors.blue,
      pink: colors.pink,
      gray: colors.gray,
      white: colors.white,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
