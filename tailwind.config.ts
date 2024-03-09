import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: "#db4444",
        secondary: "#00ff66",
        black: "#000000",
        white: "#ffffff",
        gray: "#f5f5f5",
      },
    },
  },
  plugins: [],
} satisfies Config;
