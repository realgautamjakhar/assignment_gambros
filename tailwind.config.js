/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1440px",
      },
      fontFamily: {
        Inter: ["var(--font-inter)"],
        Poppins: ["var(--font-poppins)"],
      },
      colors: {
        background: "#1E1E1E",
        textSecondary: "#898CA9",
      },
      backgroundImage: {
        brandGradient:
          "linear-gradient(225deg, #FF8F03 14.89%, #C22863 85.85%)",
        gradient:
          "radial-gradient(111.14% 111.14% at 8.37% 0%, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0) 100%)",
        blueGradient: "linear-gradient(90deg, #184EFF 0%, #0AA7FF 100%)",
        CasinoCardGradient:
          "linear-gradient(172.12deg, #5C627C 4.49%, #282A3C 94.89%)",
        goldGradient:
          "linear-gradient(110.17deg, #FFCA42 1.34%, #FFC554 20.6%, #FFB046 36.17%, #FFBB54 84.97%, #FF8A01 98.65%);",
        gradient2:
          "radial-gradient(111.14% 111.14% at 8.37% 0%, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0) 100%)",
      },
    },
  },
  plugins: [],
};
