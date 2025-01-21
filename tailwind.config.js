/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "h-sm": { raw: "(max-height: 600px)" },
      },
      height: {
        headerHeight: "50px",
      },
      colors: {
        bgPrimary: "#ffffff",
        bgSecondary: "#f0f0f0",
        bgTertiary: "#fafafa",
        textColorTertiary: "#0ea5e9",
        darkBgPrimary: "#141414",
        darkBgSecondary: "#242938",
        darkBgTertiary: "#181818",
        darkTextColorTertiary: "#0ea5e9",
      },
    },
  },

  plugins: [
    require("tailwind-scrollbar-hide"), // Agregar el plugin
  ],
};
