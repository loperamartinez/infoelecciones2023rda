/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // add this line
    'node_modules/preline/dist/*.js',

  ],
  theme: {
    extend: {
      fontFamily: {
        'Oswald': ['Oswald', 'sans-serif'],
        'BebasNeue': ['Bebas Neue', 'sans-serif'],
      }
    },
    colors: {
      miAmarillo: '#f8b21c',
      negro: '#000',
      miGris: '#f8f8f8',
    },

  },
  plugins: [
    require('preline/plugin'),
  ],
}