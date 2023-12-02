/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'tablet': '992px',
        'xl': '1200px',
      },
      colors: {
        secondaryblue: '#4A6173',
        primaryblue: '#112F47',
        primaryred: '#FF615C',
        violet: '#A32EAD',
        barleywhite: '#FFEECD',
        bayblue: '#4934A6',
        wildsand: '#F5F5F5',
        pearulbush: '#EDE1DF',
        elephant: '#112F47',
        kovayellow: '#FFD670',
        clamshell: '#D9C3B9',
        iron: '#E4E5E5',
        azalea: '#F5C2D1',
      },
      fontFamily: {
        LyonRegular: ["LyonDisplay-Regular"],
        fontbody: ["soleil reguler"],
        GTAmericaMono: ["GTAmericaMono-Regular"],
        fontAwesome: ["Font Awesome 6 Free"],
      }
    },
  },
  plugins: [
    require('autoprefixer'),
  ],
}

