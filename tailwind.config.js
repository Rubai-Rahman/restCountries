/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          900: 'hsl(209, 23%, 22%)', // Dark Mode Elements
          950: 'hsl(207, 26%, 17%)', // Dark Mode Background
        },
        grey: {
          50: 'hsl(0, 0%, 97%)', // Light Mode Background
          400: 'hsl(0, 0%, 50%)', // Light Mode Input
          950: 'hsl(200, 15%, 8%)', // Light Mode Text
        },
        white: 'hsl(0, 100%, 100%)', // Dark Mode Text & Light Mode Elements
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        homepage: '14px',
        detail: '16px',
      },
      fontWeight: {
        light: 300,
        semibold: 600,
        extrabold: 800,
      },
      extend: {
        boxShadow: {
          card: '0 4px 12px rgba(0, 0, 0, 0.25)',
          'card-dark': '0 6px 16px rgba(0, 0, 0, 0.5)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
