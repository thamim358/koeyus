/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Sulphur Point','sans serif'],
        'mono': ['Sulphur Point', 'sans-serif'],
      },
      spacing: {
        '3px': '60px',
        '4px': '80px',
        '5px': '100px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]

}

