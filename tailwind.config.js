const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('./img/hero-pattern.jpg')",
        'w-img-card': "url('./img/w-img-card.jpg')",
        'blog-card1': "url('./img/blog-card1.jpg')",
        'picture-card1': "url('./img/picture-card1.jpg')",
      }),
      colors: {
        bluegray: colors.blueGray,
        coolgray: colors.coolGray,
        truegray: colors.trueGray,
        warmgray: colors.warmGray,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        lightblue: colors.lightBlue,
        violet: colors.violet,
        fuchsia: colors.fushcia,
        rose: colors.rose,
      },
      height: {
        hero: '70vh',
      },
      width: {
        84: '21rem',
        88: '22rem',
        92: '23rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
