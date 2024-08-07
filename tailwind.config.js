/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    container:{
      center: true,
      padding: "16px"
    },
    extend: {
      colors:{
        primary: "#0ea5e9",
        secondary: "#cbd5e1",
        dark: "#0f172a",
        background: "#171717"
      },
      boxShadow: {
        'custom-full': '0 10px 15px rgba(0, 0, 0, 0.3), 0 -10px 15px rgba(0, 0, 0, 0.3)',
      },
      screen:{
        "2xl": "1320px",
      }
    },
  },
  plugins: [],
};