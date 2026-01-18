/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'league': ['League Spartan'],
        'pop': ['Poppins'],
        'baloo': ["Baloo 2", 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      keyframes: {
        'smooth-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
      animation: {
        'smooth-bounce': 'smooth-bounce 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
