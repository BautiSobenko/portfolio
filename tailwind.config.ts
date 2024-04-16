import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-100" : '#0085ff',
      "primary-200" : '#69b4ff',
      "primary-300" : '#e0ffff',
      "accent-100" : '#006fff',
      "accent-200" : '#e1ffff',
      "text-100" : '#FFFFFF',
      "text-200" : '#e0e0e0',
      "bg-100" : '#1E1E1E',
      "bg-200" : '#2d2d2d',
      "bg-300" : '#454545'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
