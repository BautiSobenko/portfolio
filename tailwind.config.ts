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
      "accent-100" : '#7E3DFF',
      "accent-200" : '#e1ffff',
      "text-100" : '#FFFFFF',
      "text-200" : '#e0e0e0',
      "text-300" : '#FCFBF8',
      "text-400" : '#5F6169',
      "bg-black" : '#0E1013',
      "bg-100" : '#1E1E1E',
      "bg-200" : '#2d2d2d',
      "bg-300" : '#454545',
      "beige-100": '#FCFBF8',
      "beige-150": '#F9F9F7',
      "beige-200": '#F4F3EF',
      "beige-300": '#F7F1E8',
      "beige-400": '#F3ECE2',
      "red-100": '#FF758C',


    },
    extend: {
      fontFamily: {
        "primary-aeonik": ['var(--font-aeonik)'],
        "secondary-sohne": ['var(--font-sohne)'],
      },
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
