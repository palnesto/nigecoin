/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        green: "#13BE5A",
        blue: "#030E2E",
        gray: "#808286",
      },
      fontFamily: {
        "heading-font": ["Benz Grotesk"],
        "body-font": ["Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/public/hero.png')",
        logo: "url('/public/logo.png')",
        footerimg: "url('/public/footerImage.png')",
        leftimg: "url('/public/sideImage.png')",
        graphimg: "url('/public/graph.png')",
        localimg: "url('/public/images.jpeg')",
        "coin-gradient":
          "radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(0, 169, 255, 0.4) 40%, #001f3f 100%)",
      },
      screens: {
        xs: "320px",
        "custom-lg": { max: "1089px", min: "1024px" },
        "4k": "2560px",
        "max-container": "1980px",
      },
      animation: {
        spin360: "spin360 3s linear infinite",
        moveInfiniteSm: "moveLeftToRight 3s ease-in-out infinite",
        moveInfiniteMd: "moveLeftToRight 5s ease-in-out infinite",
      },
      keyframes: {
        spin360: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        moveLeftToRight: {
          "0%": { left: "-360px", opacity: 0.2 },
          "97%": { left: "150vw" },
          "99%": { left: "150vw", opacity: 0 },
          "100%": { left: "-360px", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
