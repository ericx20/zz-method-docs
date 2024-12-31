import type { Config } from "tailwindcss";

export default {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
