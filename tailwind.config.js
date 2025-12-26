/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'azul-profundo': '#0A0F2C',
        'cian-electrico': '#00E0FF',
        'violeta-tech': '#6B46FF',
      },
      fontFamily: {
        exo: ['Exo 2', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}