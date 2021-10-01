const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'author': "url('./img/author.png')",
        'blog-card1': "url('./img/blog-card1.jpg')",
        'blog-card2': "url('./img/blog-card2.jpg')",
        'blog-card3': "url('./img/blog-card3.jpg')",
        'hero-pattern1': "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./img/hero-pattern1.jpg')",
        'hero-pattern2': "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./img/hero-pattern2.jpg')",
        'hero-pattern3': "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./img/hero-pattern3.jpg')",
        'hero-pattern4': "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./img/hero-pattern4.jpg')",
        'hero-pattern5': "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./img/hero-pattern5.jpg')",
        'hero-pattern6': "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./img/hero-pattern6.jpg')",
        'picture-card1': "url('./img/picture-card1.jpg')",
        'picture-card2': "url('./img/picture-card2.jpg')",
        'picture-card3': "url('./img/picture-card3.jpg')",
        'picture-card4': "url('./img/picture-card4.jpg')",
        'w-img-card': "url('./img/w-img-card.jpg')",
      }),
      boxShadow: {
        custom:'0 16px 38px -12px rgb(0 0 0 / 56%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)'
      },
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
        88: '22rem',
        112: '28rem',
        128: '32rem',
        hero: '70vh',
      },
      margin: {
        admin: '-89vh'
      },
      width: {
        84: '21rem',
        88: '22rem',
        92: '23rem',
        128: '32rem',
        184: '46rem',
        192: '48rem',
        220: '55rem',
        278: '70rem',
        286: '72rem',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['active'],
      zIndex: ['hover']
    },
  },
  plugins: [],
}
