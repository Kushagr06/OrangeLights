/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'morange': '#FF5719',
      'secorange':'#DB3D03',
      'mwhite':'#ffffff'
    },
    extend: {
      backgroundImage: {
        'hero-bgs': "url('./assets/heroImage.png')",
      },
      
    },
  },
  plugins: [],
}