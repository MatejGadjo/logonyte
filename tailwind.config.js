/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,tx,tsx}"
  ],
  theme: {
    fontFamily: {
      'SourceCodePro': ['Source Code Pro']
    },
    extend: {
    }
  },
  plugins: [require("daisyui")],
}

