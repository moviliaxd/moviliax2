/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'azul-profundo': '#0A0F2C',
        'cian-electrico': '#00E0FF',
        'gris-metalico': '#9CA3AF',
        'negro-carbon': '#0D0D0D',
        'violeta-tech': '#6B46FF',
      },
      fontFamily: {
        'exo': ['Exo 2', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
