import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightblue: "var(--lightblue)",
        blue: "var(--blue)",
        darkblue: "var(--darkblue)",
        darkestblue: "var(--darkestblue)",
      },
    },
  },
  plugins: [],
} satisfies Config;
