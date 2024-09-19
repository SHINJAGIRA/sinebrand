/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        'levander':'#FAF5FF',
        'candy':'#FFEDFA',
      },
      fontFamily:{
        'montserrat':['Montserrat']
      }
    },
  },
  plugins: [],
}