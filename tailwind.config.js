/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1E3A8A',
        'primary': '#0087D1',
        'gold': '#FFD700',
        'gray': '#b0b2bc',
        'light-gray': '#D8D8D8',
      },
    },
  },
  plugins: [],
}
