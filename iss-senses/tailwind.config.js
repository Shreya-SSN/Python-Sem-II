/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        space: {
          900: '#0b1020',
          800: '#141b2f',
          700: '#1e2742',
        },
        nbl: {
          water: '#0a4f6d',
          accent: '#32b5ff',
        }
      },
    },
  },
  plugins: [],
}
