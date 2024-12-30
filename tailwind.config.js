/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4E80EE', // azul
        secondary: {
          100: '#D2D5DA', // gris claro
          300: '#6C727F', // gris medio
          700: '#282B30', // gris oscuro
          900: '#1B1D1F', // casi negro
        },
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'sans-serif'], // Fuente predeterminada
      },
      fontSize: {
        'heading-lg': ['2rem', '2.5rem'], // Tamaño y línea para títulos grandes
        'heading-sm': ['1rem', '1.5rem'], // Tamaño y línea para títulos pequeños
        body: ['0.875rem', '1.25rem'], // Texto principal
        caption: ['0.75rem', '1rem'], // Texto pequeño
      },
      fontWeight: {
        semibold: 600,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
}

