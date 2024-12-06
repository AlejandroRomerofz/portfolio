/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "h-sm": { raw: "(max-height: 500px)" },
        "h-md": { raw: "(max-height: 700px)" },
      },
      height: {
        headerHeight: "50px",
      },
      colors: {
        bgPrimary: "#EBEAEA",
        bgSecondary: "#ffff00",
        bgTertiary: "",
        textColorPrimary: "",
        textColorSecondary: "#575757",
        textColorTertiary: "#0ea5e9",
        darkBgPrimary: "#141414",
        darkBgSecondary: "#424242",
        darkBgTertiary: "",
        darkTextColorPrimary: "",
        darkTextColorSecondary: "",
        darkTextColorTertiary: "#0ea5e9",
      },
    },
  },

  plugins: [
    require("tailwind-scrollbar-hide"), // Agregar el plugin
  ],
};
