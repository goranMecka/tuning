// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "brand-blue": "#2f80ed",
        "brand-red": "#eb5757", 
        "brand-green": "#27ae60",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(135deg, #FFC000 0%, #FF6C68 100%)",
        "mobile-home": "url('/src/assets/images/mobile-home.png')",
    }),
    fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    content: {
      evolvetext: "url('./assets/EvolveText.png')",
      abstractwaves: "url('./assets/AbstractWaves.png')",
      sparkles: "url('./assets/Sparkles.png')",
      circles: "url('./assets/Circles.png')",
    },

    
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
    },
  },
  plugins: [],
}

