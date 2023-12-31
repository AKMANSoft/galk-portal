/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: [],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#1d3c6a",
        primary_light: "#0b1c37",
        platte: "#0b1c37",
        secondary: "#9E9E9E",
        silver: "#BDBDBD",
        "gray200": "#EEEEEE",
        "gray300": "#E0E0E0",
        "gray600": "#757575",
        "gray100": "#F5F5F5",
        "gray-mute": "#E0E0E0",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}