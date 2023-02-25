/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'CircularBold': ["Circular Sp Vit Black Web", 'sans-serif'],
        'CircularLight': ["Circular Sp Vit Light Web", 'sans-serif'],
        'CircularMedium': ["Circular Sp Vit Medium Web, 'sans-serif'"],
        'CircularBook': ["Circular Sp Vit Book Web", 'sans-serif'],
        'CircularBlack': ["Circular Sp Vit Bold Web", 'sans-serif'],
      },
      colors: {
        'primaryColor': '#1ed760'
      },
      screens: {
        xl: { max: "1300px" },
        l: {max: "973px"},
        sm: {max: "767px" },
      },
      important: true,
      // backgroundColor: {
      //   linearColor: 'from-cyan-500 to-blue-500'
      // }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}