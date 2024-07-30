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
        "brand-button": "red", 
        "brand-green": "#27ae60",
        "primary-100": "rgb(225, 218, 218, 0.340)",
      },
      backgroundImage: (theme) => ({
        
        "mobile-home": "url('/src/assets/images/mobile-home.png')",
        
    }),
    fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    content: {
     
      sparkles: "url('./assets/flag.jpg')",
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

