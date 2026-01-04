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
        'gris-metalico': '#9CA3AF',
        'gris-oscuro': '#2D2D2D',
        'negro-carbon': '#0D0D0D',
        'negro-profundo': '#0A0A0A',
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