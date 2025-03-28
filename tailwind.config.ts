import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        }
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
} satisfies Config;
