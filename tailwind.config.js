
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height:{
        header:"560px",
        rate:"400px",
      },
      fontSize:{
        h1:"2.6rem"
      },
      screens: {
        qs: { max: "479px" },
        sm: { min: "480px" },
        md: { min: "768px" },
        lg: { min: "976px" },
        xl: { min: "1440px" },
      },
      
      colors: {
        navColor: "#959F87",
        main: "#E9D5C3",
        whatsIcon: "#64B161",
        footerText: "#E9D5C3",
        star: "#FFB000",
        text: "#C0C0C0",
        border: "#4b5563",
        dryGray: "#E0D5D5",
      },
    },
  },
  plugins: [
    require( "@tailwindcss/line-clamp")
  ],
};
