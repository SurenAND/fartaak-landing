import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5e35b0",
        secondary: "#4527a1",
        ftGreen: "#2dcc6f",
      },
    },
  },
  plugins: [],
};
export default config;
