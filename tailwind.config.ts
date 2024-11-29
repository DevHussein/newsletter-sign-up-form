import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        heading: [
          "56px",
          {
            lineHeight: "100%",
            letterSpacing: "0px",
            fontWeight: "700",
          },
        ],
        body: [
          "16px",
          {
            lineHeight: "150%",
            letterSpacing: "0px",
            fontWeight: "400",
          },
        ],
        bodyBold: [
          "16px",
          {
            lineHeight: "150%",
            letterSpacing: "0px",
            fontWeight: "700",
          },
        ],
        bodySmall: [
          "12px",
          {
            lineHeight: "150%",
            letterSpacing: "0px",
            fontWeight: "700",
          },
        ],
      },
      colors: {
        bodyBackground: "#1E1E1E",
        white: "#FFFFFF",
        grey250: "hsla(243, 28%, 13%, 0.25)",
        paleNavy: "#36384D",
        darkNavy: "#242742",
        vermellion: "#FF6155",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(0deg, #FF6A3A, #FF527B)",
      },
      boxShadow: {
        "custom-shadow1": "0 8px 0 0 #000000",
        "custom-shadow2": "0 24px 32px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
