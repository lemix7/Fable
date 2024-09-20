/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        grey : '#626061',
        offWhite: '#E8E8E8',
        darkGrey : '#282828'
      }
    },
  },
  plugins: [],
}

