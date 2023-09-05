/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        white:colors.white,
        primary:'#5660C0',
        secondary:"#636262"
      },
      backgroundImage: {
        'gradient': 'lightgray 50%'
      },
    },
  },
  plugins: [],
}
