/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'parchment': '#F5F0E6',
        'parchment-dark': '#E8E0D0',
        'ink': '#1A1A1A',
        'ink-light': '#3A3A3A',
        'burgundy': '#722F37',
        'burgundy-dark': '#5A252C',
        'gold': '#C9A227',
        'gold-light': '#D4B84A',
        'forest': '#2D4A3E',
        'navy': '#1E3A5F',
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Crimson Text', 'Georgia', 'serif'],
        'accent': ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
