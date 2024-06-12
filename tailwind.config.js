/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IBM: "IBM Plex Mono",
        TITAN: "Titan One",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(0%)" },

          "2%": { transform: "rotate(3deg)" },
          "50%": { transform: "translateX(-100%)" },
        },
        cloud :{
          "0% ,100%":{transform: "translateX(0%,-100%)"},
          "50%":{transform: "translateX(-50%)"},

          
        }
      },
      animation: {
        cloud: "cloud 50s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
