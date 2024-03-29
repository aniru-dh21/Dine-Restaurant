import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./aoo/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beaver: "#9e7f66",
        "cod-gray": "#111111",
        mirage: "#17192b",
        "ebony-clay": "#242b37",
        "shuttle-gray": "#5c6779",
      },
      fontSize: {
        "7xl": [
          "80px",
          { fontWeight: "300", lineHeight: "80px", letterSpacing: "-1px" },
        ],
        "5xl": [
          "48px",
          { fontWeight: "700", lineHeight: "48px", letterSpacing: "-0.5px" },
        ],
        xl: [
          "20px",
          { fontWeight: "700", lineHeight: "24px", letterSpacing: "-0.25px" },
        ],
        lg: [
          "17px",
          { fontWeight: "600", lineHeight: "28px", letterSpacing: "2.5px" },
        ],
        "body-2": ["20px", { fontWeight: "400", lineHeight: "30px" }],
        base: ["16px", { fontWeight: "400", lineHeight: "26px" }],
      },
      boxShadow: {
        "3xl": "0 60px 100px -50px  rgba(56, 66, 85, 0.50)",
      },
      screens: {
        mobile: "400px",
        "small-mobile": "282px",
      },
    },
  },
  plugins: [],
};
export default config;
