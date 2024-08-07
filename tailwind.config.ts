import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2x1": "1360px",
      },
    },
    extend: {
      colors: {
        "custom-indigo": "#5162f3",
      },
    },
    variants: {
      extend: {
        textColor: ['hover'],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
