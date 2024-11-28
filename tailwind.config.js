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
        localimg: "url('/public/images.jpeg')",
        "coin-gradient":
          "radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(0, 169, 255, 0.4) 40%, #001f3f 100%)",
        pattern:
          "url('data:image/webp;base64,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')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
      screens: {
        "custom-lg": { max: "1089px", min: "1024px" },
        "4k": "2560px",
      },
      animation: {
        spin360: "spin360 3s linear infinite",
      },
      keyframes: {
        spin360: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
