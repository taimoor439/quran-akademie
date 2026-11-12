/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0B3D2E",
          dark: "#072A20",
          deep: "#051F17",
          light: "#14543F",
          soft: "#E7F0EB",
        },
        gold: {
          DEFAULT: "#C9A227",
          dark: "#A8861B",
          light: "#E7D48A",
          soft: "#FBF4D9",
        },
        cream: "#FAF6EE",
        ink: "#1A2B25",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "Plus Jakarta Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        arabic: ["Amiri", "serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(11, 61, 46, 0.18)",
        lift: "0 20px 40px -16px rgba(11, 61, 46, 0.25)",
      },
    },
  },
  plugins: [],
};
