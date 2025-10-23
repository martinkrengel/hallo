import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B3C5D",
          light: "#3F6A8D"
        },
        accent: "#F2B134",
        muted: "#F4F6F8"
      }
    }
  },
  plugins: []
};

export default config;
